import { Wallet, utils, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
//   const wallet = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
    const wallet = new Wallet("0x7fca5cff8d954c0093a6820a82baab936fb13b19c3b0bdcc809283a1a16f65da").connect(provider);

  
  const factoryArtifact = await hre.artifacts.readArtifact("TestERC20");
  
  const signature = await wallet.signMessage('I am the owner of this community');
  
  console.log(signature);

  const aaFactory = new ethers.Contract(
    '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
    factoryArtifact.abi,
    wallet
  );
  
    await aaFactory.increaseAllowance('0x0510b43988c09035796BB88Ea0B1E4C25f090464', 1000000000000000);
}
