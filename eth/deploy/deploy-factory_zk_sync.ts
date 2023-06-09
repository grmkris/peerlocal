import { type DeployFunction } from "hardhat-deploy/types";
import { type HardhatRuntimeEnvironment } from "hardhat/types";
import {Deployer} from "@matterlabs/hardhat-zksync-deploy";
import {Wallet, utils} from "zksync-web3";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // stop deploying if not zksync chain
  if (hre.network.name !== "zkSync_testnet") return;

    const wallet = Wallet.fromMnemonic(process.env.MNEMONIC as string)
    const deployer = new Deployer(hre, wallet);
    const factoryArtifact = await deployer.loadArtifact('AAFactory');
    const aaArtifact = await deployer.loadArtifact('TwoUserMultisig');

    // Getting the bytecodeHash of the account
    const bytecodeHash = utils.hashBytecode(aaArtifact.bytecode);

    const factory = await deployer.deploy(
        factoryArtifact,
        [bytecodeHash],
        undefined,
        [
            // Since the factory requires the code of the multisig to be available,
            // we should pass it here as well.
            aaArtifact.bytecode,
        ]

};

export default func;
func.tags = ["TestERC20"];
