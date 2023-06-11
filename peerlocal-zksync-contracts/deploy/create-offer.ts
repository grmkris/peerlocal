import { Wallet, utils, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
  const wallet = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  
  console.log(wallet);
  
  const factoryArtifact = await hre.artifacts.readArtifact("PeerLocal");

  const aaFactory = new ethers.Contract(
    '0x0510b43988c09035796BB88Ea0B1E4C25f090464',
    factoryArtifact.abi,
    wallet
  );

  const tx = await aaFactory.createOffer(
      0, 'wrong hash', 0, 0
  );
  await tx.wait();
}

// 2nd account
// 0x69a85395366f2ae564C323D05213E542024aD756
// 0x7fca5cff8d954c0093a6820a82baab936fb13b19c3b0bdcc809283a1a16f65da
