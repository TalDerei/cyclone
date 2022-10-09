import {
    AccountId,
    AssetValue,
    AztecSdk,
    EthAddress,
    EthereumProvider,
    GrumpkinAddress,
    SchnorrSigner,
    TxSettlementTime,
    TxId,
    WalletProvider,
    Web3Signer,
    RegisterController,
    DepositController,
    DefiController,
  } from "@aztec/sdk";
  import { Web3Provider } from "@ethersproject/providers";
  
  export async function registerAccount(
    userId: GrumpkinAddress,
    alias: string,
    accountPrivateKey: Buffer,
    newSigner: GrumpkinAddress,
    recoveryPublicKey: GrumpkinAddress,
    tokenAddress: EthAddress,
    tokenQuantity: bigint,
    settlementTime: TxSettlementTime,
    depositor: EthAddress,
    sdk: AztecSdk
  ): Promise<TxId> {
    const assetId = sdk.getAssetIdByAddress(tokenAddress);
    const deposit = { assetId, value: tokenQuantity };
    const txFee = (await sdk.getRegisterFees(deposit.assetId))[settlementTime];
  
    const controller = await sdk.createRegisterController(
      userId,
      alias,
      accountPrivateKey,
      newSigner,
      recoveryPublicKey,
      deposit,
      txFee,
      depositor
      // optional feePayer requires an Aztec Signer to pay the fee
    );
  
    await controller.depositFundsToContract();
    await controller.awaitDepositFundsToContract();
  
    await controller.createProof();
    await controller.sign();
    let txId = await controller.send();
    return txId;
  }