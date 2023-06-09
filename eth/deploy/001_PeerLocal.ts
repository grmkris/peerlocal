import { type DeployFunction } from "hardhat-deploy/types";
import { type HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  if (!deployer) throw new Error("deployer is undefined");

  const helloWorld = await deploy("PeerLocal", {
    from: deployer,
    log: true,
    // GHO on sepolia https://docs-gho.vercel.app/developer-docs/contracts-overview#sepolia-gho-deployment:~:text=0x894ef447CF3C97F267999244B1D130Bd746153E6-,GhoToken,0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D,-GhoOracle
    args: ["0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D"],
    autoMine: true,
  });

  console.log("PeerLocal deployed to:", helloWorld.address);
};

export default func;
func.tags = ["PeerLocal"];
