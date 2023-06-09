import { type DeployFunction } from "hardhat-deploy/types";
import { type HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  if (!deployer) throw new Error("deployer is undefined");

  if (hre.network.name != "goerli" && hre.network.name != "sepolia") {
    const deployment1 = await deploy("TestERC20", {
      from: deployer,
      log: true,
      args: [],
      autoMine: true,
    });
  }
};

export default func;
func.tags = ["TestERC20"];
