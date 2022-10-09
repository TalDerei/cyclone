import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.waves.min.js';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/abstract-provider";
import {
    AztecSdk,
    createAztecSdk,
    EthersAdapter,
    EthereumProvider,
    SdkFlavour,
    AztecSdkUser,
    GrumpkinAddress,
    SchnorrSigner,
    EthAddress,
    TxSettlementTime,
    TxId,
  } from "@aztec/sdk";
  import { randomBytes } from "crypto";
  import {
    depositEthToAztec
  } from "./utils";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, Contract, ContractFactory, utils } from "ethers";
import { expect } from "chai";
import { readFileSync } from 'fs';
import { compile, acir_from_bytes } from '@noir-lang/noir_wasm';
// import { setup_generic_prover_and_verifier, create_proof, verify_proof } from '@noir-lang/barretenberg/dest/client_proofs';
// import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';
// import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';
// import { Schnorr } from '@noir-lang/barretenberg/dest/crypto/schnorr';
// import { serialise_public_inputs } from '@noir-lang/aztec_backend';

export default function Commitment () {
    const [userAccount, setUserAddress] = useState({AztecSdkUser});
    const [publicKeyNew, setPublicKey] =  useState({GrumpkinAddress});
    const [privateKeyNew, setPrivateKey] = useState({Buffer});
    const [spendingSigner, setSpendingSigner] = useState({SchnorrSigner});
    const [walletAddress, setWalletAddress] = useState({EthAddress});
    const [sdk, setSDK] = useState({AztecSdk});
    const [ethAccount, setEthAccount] = useState({EthAddress});

    let renderSDK = () => {
        InitializeSDK();
    }

    let renderRegisterUser = () => {
      registerUser();
    }

    let renderProveDeposit = () => {
      proveDeposit();
    }

    async function proveDeposit() {
      // Need to modify these inputs to match what's returned from the SDK

      // let acirByteArray = path_to_uint8array(path.resolve(__dirname, '../circuits/build/p.acir'));
      // let acir = acir_from_bytes(acirByteArray);

      // let merkleProof = tree.proof(0);
      // let note_hash_path = merkleProof.pathElements;
      
      // let abi = {
      //   recipient: recipient,
      //   priv_key: `0x` + sender_priv_key.toString('hex'),
      //   note_root: `0x` + note_root, 
      //   index: 0,
      //   note_hash_path: [
      //     `0x` + note_hash_path[0],
      //     `0x` + note_hash_path[1],
      //     `0x` + note_hash_path[2],
      //   ],
      //   secret: `0x` + transfers[0].secret.toString('hex'),
      //   return: [`0x` + transfers[0].nullifier.toString('hex'), recipient],
      // };

      // let [prover, verifier] = await setup_generic_prover_and_verifier(acir);
      
      // const proof = await create_proof(prover, acir, abi);

      // const verified = await verify_proof(verifier, proof);

      // console.log("verifier is: " + verifier);
    }

    async function registerUser() {
      const depositTokenQuantity = ethers.utils
        .parseEther("1")
        .toBigInt();
  
      let txId = await depositEthToAztec(
        walletAddress,
        publicKeyNew,
        depositTokenQuantity,
        TxSettlementTime.NEXT_ROLLUP,
        sdk,
      );
  
      console.log("deposit txId", txId);
      console.log(
        "lookup tx on explorer",
        `https://aztec-connect-testnet-explorer.aztec.network/goerli/tx/${txId.toString()}`
      );
    }

    async function InitializeSDK() {
      // Retrieve user's metamask address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ethereumProvider = new EthersAdapter(provider);

      await provider.send("eth_requestAccounts", []);
      const userSigner = provider.getSigner();
      const userAddress = EthAddress.fromString(await userSigner.getAddress());
      console.log("user's metamask wallet address is: " + userAddress);
      setWalletAddress(userAddress)
        
      // Initialize SDK
      const sdk = await createAztecSdk(ethereumProvider, {          
        serverUrl: "https://api.aztec.network/aztec-connect-testnet/falafel", // testnet
        pollInterval: 1000,
        memoryDb: true,            // set to false to save chain data
        debug: "bb:*",             // print debug logs
        flavour: SdkFlavour.PLAIN, // Use PLAIN with Nodejs
        minConfirmation: 1,        // ETH block confirmations
      });
      sdk.run();
      await sdk.awaitSynchronised();
      setSDK(sdk);

      // Generate privacy keys which enables decrypting the notes and calculating the account balance
      console.log("Generate the user's privacy keypair");
      const { publicKey, privateKey } = await sdk.generateAccountKeyPair(userAddress);
      let accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Public key is: " + publicKey);
      console.log("Private key is: " + privateKey);
      setPublicKey(publicKey);
      setPrivateKey(privateKey);

      console.log("Add user to SDK")
      let account = await sdk.userExists(publicKey);
      if (account == true) {
        await sdk.getUser(publicKey);
        await sdk.addUser(privateKey);
      } 
      setUserAddress(account);

      // Generate user's spending key and register it
      const spendingPrivateKey = await sdk.generateSpendingKeyPair(userAddress);
      console.log("Spending key is:" + spendingPrivateKey)
      // Create Aztec signer using spending key
      const signer = await sdk.createSchnorrSigner(spendingPrivateKey);
      setSpendingSigner(signer);
      console.log("Signer:", signer);
    }

    // Vanta UI design
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          GLOBE({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x711,
            shininess: 35.00,
            waveHeight: 31.50,
            waveSpeed: 0.25,
            zoom: 0.95
          })
        )
      }
    }, [vantaEffect])
        
    return (
      <main ref={vantaRef}>
      <section class="general">
        <div class="homepage">
          <big><u>Cyclone</u></big>
          <br></br>
          <br></br>
          <div class="homepag-sub">
            <small>Proving interactions on Aztec using Noir</small>
          </div>
          <div class="button-group">
              <button class="button button1 b1" onClick={renderSDK}>Create Privacy and Spending Keys</button>
          </div>
          <div class="button-group">
              <button class="button button1 b1" onClick={renderRegisterUser}>Register a User</button>
          </div>
          <div class="button-group">
              <button class="button button1 b1" onClick={renderProveDeposit}>Generate Zero-Knowledge Proof of Deposit on Aztec</button>
          </div>
      </div>
      </section>
    </main>
    );    
}