import { Wallet, utils, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
  const wallet = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  
  const factoryArtifact = await hre.artifacts.readArtifact("PeerLocal");
  

  console.log(factoryArtifact.abi[16].inputs);

  const aaFactory = new ethers.Contract(
    '0x0510b43988c09035796BB88Ea0B1E4C25f090464',
    factoryArtifact.abi,
    wallet
  );
  
    const communities = await aaFactory.offers(0, 1);
    
    console.log(communities)
    
    const random = Wallet.createRandom();
    console.log(random);
    console.log(await random._signingKey());


  // const tx = await aaFactory.createCommunity(
  //     'my community hash',
  //     250
  // );
  // await tx.wait();
}
