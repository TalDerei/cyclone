import { ethers } from "hardhat";
const { provider } = ethers;

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, Contract, ContractFactory, utils } from "ethers";
import { expect } from "chai";
import { readFileSync } from 'fs';
import path from 'path';
import { randomBytes } from 'crypto'
import { compile, acir_from_bytes } from '@noir-lang/noir_wasm';
import { setup_generic_prover_and_verifier, create_proof, verify_proof } from '@noir-lang/barretenberg/dest/client_proofs';
import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';
import { Schnorr } from '@noir-lang/barretenberg/dest/crypto/schnorr';
import { serialise_public_inputs } from '@noir-lang/aztec_backend';
import { MerkleTree } from "../utils/MerkleTree";

// There are 3 packages for interacting with ACIR
// 1. @noir-lang/noir_wasm to serialize the ACIR from file
// 2. @noir-lang/aztec_backend to serialize the solved witness or to solve the witness in typescript
// 3. @noir-lang/barretenberg to ultimately generate a proof and verify that proof

const amount = process.env.ETH_AMOUNT || "1000000000000000000"; // 1 ether

// contract
let [Verifier, PrivateTransfer]: ContractFactory[] = [];
let [verifierContract, privateTransfer]: Contract[] = [];
let signers: SignerWithAddress[];
let tree: MerkleTree;
let note_root: string;
let barretenberg: BarretenbergWasm;
let pedersen: SinglePedersen;

let recipient: string;
let sender_priv_key: Buffer;
let sender_pubkey_x;
let sender_pubkey_y;
let nullifier: Buffer;
let note_commitment: Buffer;

interface Transfer {
  note_commitment: Buffer,
  secret: Buffer,
  nullifier: Buffer,
}
let transfers: Transfer[] = [];

function generateTestTransfers(num_transfers: number, schnorr: Schnorr) {
  let transfers = [];
  for (var i = 0; i < num_transfers; i++) {
    sender_priv_key = Buffer.from("000000000000000000000000000000000000000000000000000000616c696365", "hex");
    // derive senders public key from private key
    let sender_public_key = schnorr.computePublicKey(sender_priv_key);
    sender_pubkey_x = sender_public_key.subarray(0, 32);
    sender_pubkey_y = sender_public_key.subarray(32)
    // console.log('sender public key x: ' + sender_pubkey_x.toString('hex') + '\sender pubkey y: ' + sender_pubkey_y.toString('hex'));
    
    // secret buffer of 32 bytes
    const secret = randomBytes(32)

    // compute the note as the hash of senders public key and secret
    note_commitment = pedersen.compressInputs([sender_pubkey_x, sender_pubkey_y, secret]);
    // console.log('note_commitment: ' + note_commitment.toString('hex'));

    // compute nullifier as the hash of the note commitment, 
    nullifier = pedersen.compressInputs([note_commitment, Buffer.from(toFixedHex(i, false), 'hex'), sender_priv_key]);
    // console.log('nullifier: ' + nullifier.toString('hex'));

    // console.log('nullifier_hash: ' + nullifier_hash.toString('hex'));

    // instantiate Transfer struct (object) with the following fields
    let transfer: Transfer = {
      note_commitment: note_commitment,
      secret: secret,
      nullifier: nullifier,
    };
    transfers.push(transfer);
  }
  return transfers;
}

before(async () => {
  signers = await ethers.getSigners();
  recipient = signers[1].address;
  barretenberg = await BarretenbergWasm.new();
  await barretenberg.init()
  // Initialize pedersen hash, schnorr signatures and merkle tree
  pedersen = new SinglePedersen(barretenberg);
  let schnorr = new Schnorr(barretenberg);
  tree = new MerkleTree(3, barretenberg);
  
  let test_transfers = generateTestTransfers(2, schnorr);
  // array of Transfers 
  transfers.push(...test_transfers);

  // inserting commitments into the mertkle tree
  tree.insert(transfers[0].note_commitment.toString('hex'));
  tree.insert(transfers[1].note_commitment.toString('hex'));
  // calculating the merkle root of commitments
  note_root = tree.root();
});

describe("Noir circuit verifies succesfully using Typescript", () => {
  it("Simple shield works for merkle tree insert, compiled using noir wasm", async () => {
    // serialize the ACIR from file
    let compiled_program = compile(path.resolve(__dirname, '../circuits/src/main.nr'));
    let acir = compiled_program.circuit;

    // calculate a merkle proof from merkle tree for leaf at index 0
    let merkleProof = tree.proof(0);
    // get the merkle path of merkle proof
    let note_hash_path = merkleProof.pathElements
    // console.log('merkleProof path is: ' + note_hash_path);
    // console.log("again nullifier_has is: " + transfers[0].nullifier_hash.toString('hex'));

    // create ABI
    let abi = {
      recipient: recipient,
      priv_key: `0x` + sender_priv_key.toString('hex'),
      note_root: `0x` + note_root, 
      index: 0,
      note_hash_path: [
        `0x` + note_hash_path[0],
        `0x` + note_hash_path[1],
        `0x` + note_hash_path[2],
      ],
      secret: `0x` + transfers[0].secret.toString('hex'),
      return: [`0x` + transfers[0].nullifier.toString('hex'), recipient]
    };

    console.log('recipient is: ' + recipient);
    console.log('priv_key is: ' + `0x` + sender_priv_key.toString('hex'));
    console.log('note_root is: ' + `0x` + note_root);
    console.log('note_hash_path is: ' + note_hash_path);
    console.log('secret is: ' + `0x` + transfers[0].secret.toString('hex'));
    console.log('return is: ' + `0x` + transfers[0].nullifier.toString('hex'), recipient);
    
    // construct our prover and verifier from the ACIR, and generate a proof from the prover, ACIR, and newly specified ABI.
    let [prover, verifier] = await setup_generic_prover_and_verifier(acir);
    
    // create the proof 
    const proof: Buffer = await create_proof(prover, acir, abi);

    // The verify_proof method then takes in the previously generated verifier and proof and returns either true or false. 
    // A verifier also needs to accept the circuits public inputs in order to be valid. Our prover prepends the public inputs to the proof.
    const verified = await verify_proof(verifier, proof);
    console.log('verified: ', verified)
    expect(verified).eq(true);

    // Attempt to alter recipient should fail verification
    const fake_recipient = Buffer.from(serialise_public_inputs([signers[19].address]));
    proof.fill(fake_recipient, 64, 96);
    const bad_recipient_verified = await verify_proof(verifier, proof);
    expect(bad_recipient_verified).eq(false);

    // Attempt to alter nullifier should fail verification
    const fake_nullifer = randomBytes(32);
    proof.fill(fake_nullifer, 32, 64);
    const bad_nullifier_verified = await verify_proof(verifier, proof);
    expect(bad_nullifier_verified).eq(false);
  });

  it("Simple shield works for merkle tree insert, compiled using nargo", async () => {
    let acirByteArray = path_to_uint8array(path.resolve(__dirname, '../circuits/build/p.acir'));
    let acir = acir_from_bytes(acirByteArray);

    let merkleProof = tree.proof(0);
    let note_hash_path = merkleProof.pathElements;
    
    let abi = {
      recipient: recipient,
      priv_key: `0x` + sender_priv_key.toString('hex'),
      note_root: `0x` + note_root, 
      index: 0,
      note_hash_path: [
        `0x` + note_hash_path[0],
        `0x` + note_hash_path[1],
        `0x` + note_hash_path[2],
      ],
      secret: `0x` + transfers[0].secret.toString('hex'),
      return: [`0x` + transfers[0].nullifier.toString('hex'), recipient],
    };

    let [prover, verifier] = await setup_generic_prover_and_verifier(acir);
    
    const proof = await create_proof(prover, acir, abi);

    const verified = await verify_proof(verifier, proof);

    expect(verified).eq(true)
  });

  it("Simple shield should work on 2nd merkle tree insert", async () => {
    let compiled_program = compile(path.resolve(__dirname, '../circuits/src/main.nr'));
    let acir = compiled_program.circuit;

    let merkleProof = tree.proof(1);
    let note_hash_path = merkleProof.pathElements

    nullifier = pedersen.compressInputs([note_commitment, Buffer.from(toFixedHex(1, false), 'hex'), sender_priv_key]);

    let abi = {
      recipient: recipient,
      priv_key: `0x` + sender_priv_key.toString('hex'),
      note_root: `0x` + note_root, 
      index: 1,
      note_hash_path: [
        `0x` + note_hash_path[0],
        `0x` + note_hash_path[1],
        `0x` + note_hash_path[2],
      ],
      secret: `0x` + transfers[1].secret.toString('hex'),
      return: [`0x` + transfers[1].nullifier.toString('hex'), recipient]
    };

    let [prover, verifier] = await setup_generic_prover_and_verifier(acir);
    
    const proof = await create_proof(prover, acir, abi);

    const verified = await verify_proof(verifier, proof);

    expect(verified).eq(true)
  });

});

describe("Prviate Transfer works with Solidity verifier", () => {
  const numCommitments: number = 2;
  const privateTransactionAmount: BigNumber = utils.parseEther("1.0");
  let commitments: string[] = [];

  before("Set up PrivateTransfer and Verifier contracts", async () => {
    // initialize privateTransfer and verifier contracts
    PrivateTransfer = await ethers.getContractFactory("PrivateTransfer");
    Verifier = await ethers.getContractFactory("TurboVerifier");

    // append note commitments to note array
    commitments.push(`0x` + transfers[0].note_commitment.toString('hex'), `0x` + transfers[1].note_commitment.toString('hex')); 

    // deploy the private transfer and verifier contracts
    verifierContract = await Verifier.deploy();
    privateTransfer = await PrivateTransfer.deploy(verifierContract.address, amount, `0x` + note_root, commitments, { value: BigNumber.from(numCommitments).mul(privateTransactionAmount) } );
  })

  it("Private transfer should work using Solidity verifier", async () => {
    let compiled_program = compile(path.resolve(__dirname, '../circuits/src/main.nr'));
    // ACIR -- intermediate representation of the compiled circuit
    let acir = compiled_program.circuit;

    let merkleProof = tree.proof(0);
    let note_hash_path = merkleProof.pathElements;
    let nullifierHexString = `0x` + transfers[0].nullifier.toString('hex');

    let abi = {
      recipient: recipient,
      priv_key: `0x` + sender_priv_key.toString('hex'),
      note_root: `0x` + note_root, 
      index: 0,
      note_hash_path: [
        `0x` + note_hash_path[0],
        `0x` + note_hash_path[1],
        `0x` + note_hash_path[2],
      ],
      secret: `0x` + transfers[0].secret.toString('hex'),
      return: [nullifierHexString, recipient],
    };

    let [prover, verifier] = await setup_generic_prover_and_verifier(acir);

    // create proof by providing prover, acir (circuit), and abi
    const proof = await create_proof(prover, acir, abi);

    const verified = await verify_proof(verifier, proof);
    expect(verified).eq(true);

    // Attempt to alter recipient should fail verification
    const fake_recipient = Buffer.from(serialise_public_inputs([signers[19].address]));
    let fake_proof: Buffer = Buffer.from(proof);
    fake_proof.fill(fake_recipient, 64, 96);
    let args = [`0x` + fake_proof.toString('hex'), `0x` + note_root, commitments[0]];
    await expect(privateTransfer.withdraw(...args)).to.be.revertedWith('Proof failed');

    const before = await provider.getBalance(recipient);
    
    console.log('before transfer balance is: ' + before);

    args = [`0x` + proof.toString('hex'), `0x` + note_root, commitments[0]];
    // withdraw takes the proof, root of merkle tree of commitments, and commitment,
    await privateTransfer.withdraw(...args);

    const after = await provider.getBalance(recipient);
    console.log('after transfer balance is: ' + after);

    expect(after.sub(before)).to.equal(privateTransactionAmount);
  });

  it("Private Transfer should successfully perform a 2nd transfer", async () => {
    let compiled_program = compile(path.resolve(__dirname, '../circuits/src/main.nr'));
    let acir = compiled_program.circuit;

    let merkleProof = tree.proof(1);
    let note_hash_path = merkleProof.pathElements;

    nullifier = pedersen.compressInputs([note_commitment, Buffer.from(toFixedHex(1, false), 'hex'), sender_priv_key]);
    let nullifierHexString = `0x` + transfers[1].nullifier.toString('hex');

    let abi = {
      recipient: signers[2].address,
      priv_key: `0x` + sender_priv_key.toString('hex'),
      note_root: `0x` + note_root, 
      index: 1,
      note_hash_path: [
        `0x` + note_hash_path[0],
        `0x` + note_hash_path[1],
        `0x` + note_hash_path[2],
      ],
      secret: `0x` + transfers[1].secret.toString('hex'),
      return: [nullifierHexString, signers[2].address]
    };
    
    let [prover, verifier] = await setup_generic_prover_and_verifier(acir);

    const proof = await create_proof(prover, acir, abi);

    const verified = await verify_proof(verifier, proof);
    expect(verified).eq(true);

    const sc_verified = await verifierContract.verify(proof);
    expect(sc_verified).eq(true);

    const before = await provider.getBalance(signers[2].address);

    let args = [`0x` + proof.toString('hex'), `0x` + note_root, commitments[1]];
    await privateTransfer.withdraw(...args);

    const after = await provider.getBalance(signers[2].address);

    expect(after.sub(before)).to.equal(privateTransactionAmount);
  });

});

function path_to_uint8array(path: string) {
  let buffer = readFileSync(path);
  return new Uint8Array(buffer);
}

const toFixedHex = (number: number, pad0x: boolean, length = 32) => {
  let hexString = number.toString(16).padStart(length * 2, '0');
  return (pad0x ? `0x` + hexString : hexString);
}
  


