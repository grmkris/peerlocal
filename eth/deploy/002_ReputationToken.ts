import { type DeployFunction } from "hardhat-deploy/types";
import { type HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  if (!deployer) throw new Error("deployer is undefined");

  const gho_sepolia = "0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D";
  const gho_goerli = "0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211";

  switch (hre.network.name) {
    case "sepolia":
      const deployment1 = await deploy("ReputationToken", {
        from: deployer,
        log: true,
        // GHO on sepolia https://docs-gho.vercel.app/developer-docs/contracts-overview#sepolia-gho-deployment:~:text=0x894ef447CF3C97F267999244B1D130Bd746153E6-,GhoToken,0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D,-GhoOracle
        args: [],
        autoMine: true,
      });
      console.log("ReputationToken deployed to:", deployment1.address);
      break;
    case "goerli":
      const deployment2 = await deploy("ReputationToken", {
        from: deployer,
        log: true,
        // GHO on sepolia https://docs-gho.vercel.app/developer-docs/contracts-overview#sepolia-gho-deployment:~:text=0x894ef447CF3C97F267999244B1D130Bd746153E6-,GhoToken,0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D,-GhoOracle
        args: [],
        autoMine: true,
      });
      console.log("ReputationToken deployed to:", deployment2.address);
      break;
  }
};

export default func;
func.tags = ["ReputationToken"];
