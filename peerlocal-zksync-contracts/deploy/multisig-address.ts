import { utils, Wallet, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

// Put the address of your AA factory
const AA_FACTORY_ADDRESS = "0x2eB1F3252D78183aDfAA417EF0A27Aad4532bA1f";


export default async function (hre: HardhatRuntimeEnvironment) {
    const provider = new Provider("https://testnet.era.zksync.dev");
    const wallet = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);

    
    const factoryArtifact = await hre.artifacts.readArtifact("AAFactory");

  const aaFactory = new ethers.Contract(
    AA_FACTORY_ADDRESS,
    factoryArtifact.abi,
    wallet
  );
  
    const abiCoder = new ethers.utils.AbiCoder();
    
    const salt = ethers.constants.HashZero;
    
    console.log(salt);

const multisigAddress = utils.create2Address(
    AA_FACTORY_ADDRESS,
    await aaFactory.aaBytecodeHash(),
    salt,
    abiCoder.encode(["address", "address"], ['0x09e626AC7422597415F75946eE39a97d0c281b07', '0x386702099591E9325043733f48c5aCAd47C6fed8'])
  );
  
  console.log(multisigAddress);
  
};