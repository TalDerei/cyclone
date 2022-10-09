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
    registerAccount
  } from "./utils";
  

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

    async function renderDeposit() {
      deposit();
    }

    async function registerUser() {
      const alias = "woosso";
      const depositTokenQuantity = ethers.utils
      .parseEther("1")
      .toBigInt();
    const recoverySigner = await sdk.createSchnorrSigner(randomBytes(32));
    let recoverPublicKey = recoverySigner.getPublicKey();

    const assetId = sdk.getAssetIdByAddress(EthAddress.ZERO);
    console.log(assetId)
    const deposit = { assetId, value: depositTokenQuantity };
    console.log(deposit)
    const txFee = (await sdk.getRegisterFees(deposit.assetId))[TxSettlementTime];
    console.log(txFee)

     const controller = await sdk.createRegisterController(
        publicKeyNew,
        alias, 
        privateKeyNew,
        spendingSigner.getPublicKey(),
        recoverPublicKey, 
        0,
        txFee,
        walletAddress
      );

    // console.log("registration txId", txId);
    // console.log(
    //   "lookup tx on explorer",
    //   `https://aztec-connect-testnet-explorer.aztec.network/goerli/tx/${txId.toString()}`
    // );
    }

    async function deposit() {
      console.log("depsosit");
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
      const { publicKey, privateKey } = await sdk.generateAccountKeyPair(walletAddress);
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
      const spendingPrivateKey = await sdk.generateSpendingKeyPair(walletAddress);
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
      <div className="container">
          <div class="button-group">
              <button class="button button1 b1" onClick={renderSDK}>Create Privacy and Spending Keys</button>
          </div>
          <div class="button-group">
              <button class="button button1 b1" onClick={renderRegisterUser}>Register a User</button>
          </div>
          <div class="button-group">
              <button class="button button1 b1" onClick={renderDeposit}>Deposit ETH</button>
          </div>
      </div>
      </section>
    </main>
    );    
}
