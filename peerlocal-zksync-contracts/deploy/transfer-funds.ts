import { Wallet, utils, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
  const wallet = new Wallet("0x2dcece1d3d7cf63d96c951b51f26b18552cac7cc1e5c3cfa2bf596285ce6ae4f").connect(provider);
  
  // await (
  //   await wallet.sendTransaction({
  //     to: '0x09e626AC7422597415F75946eE39a97d0c281b07',
  //     // You can increase the amount of ETH sent to the multisig
  //     value: ethers.utils.parseEther("0.34"),
  //   })
  // ).wait();
  
  console.log(ethers.utils.parseEther("0.00000000002"));
}
