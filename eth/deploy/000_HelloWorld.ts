import { type DeployFunction } from "hardhat-deploy/types";
import { type HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  if (!deployer) throw new Error("deployer is undefined");

  const helloWorld = await deploy("HelloWorld", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  console.log("helloWorld deployed to:", helloWorld.address);
};

export default func;
func.tags = ["MockCompliancePropertyManager"];
