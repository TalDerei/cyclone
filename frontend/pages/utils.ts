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

export async function depositEthToAztec(
  depositor: EthAddress,
  recipient: GrumpkinAddress,
  tokenQuantity: bigint,
  settlementTime: TxSettlementTime,
  sdk: AztecSdk
): Promise<TxId> {
  const tokenAssetId = sdk.getAssetIdBySymbol("ETH");
  const tokenDepositFee = (await sdk.getDepositFees(tokenAssetId))[
    settlementTime
  ];
  const tokenAssetValue: AssetValue = {
    assetId: tokenAssetId,
    value: tokenQuantity,
  };
  const tokenDepositController = sdk.createDepositController(
    depositor,
    tokenAssetValue,
    tokenDepositFee,
    recipient,
    true
  );
  await tokenDepositController.createProof();
  await tokenDepositController.sign();
  console.log((await tokenDepositController.getPendingFunds()))
  if ((await tokenDepositController.getPendingFunds()) < tokenQuantity) {
    await tokenDepositController.depositFundsToContract();
    await tokenDepositController.awaitDepositFundsToContract();
  }
  let txId = await tokenDepositController.send();
  return txId;
}