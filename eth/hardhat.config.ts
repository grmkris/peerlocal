import "dotenv/config";
import { type HardhatUserConfig } from "hardhat/types";
import "@matterlabs/hardhat-zksync-solc";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
import "@typechain/hardhat";
import "solidity-coverage";
import "hardhat-deploy-tenderly";
import { accounts, addForkConfiguration, node_url } from "./utils/network";
import "./tasks/accounts";
import "./tasks/peerlocal";     

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {
      //compilerPath: "zksolc",  // optional. Ignored for compilerSource "docker". Can be used if compiler is located in a specific folder
      libraries: {}, // optional. References to non-inlinable libraries
      isSystem: true, // optional.  Enables Yul instructions available only for zkSync system contracts and libraries
      forceEvmla: false, // optional. Falls back to EVM legacy assembly if there is a bug with Yul
      optimizer: {
        enabled: true, // optional. True by default
        mode: "3", // optional. 3 by default, z to optimize bytecode size
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    simpleERC20Beneficiary: 1,
  },
  networks: addForkConfiguration({
    hardhat: {
      initialBaseFeePerGas: 0, // to fix : https://github.com/sc-forks/solidity-coverage/issues/652, see https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136
    },
    localhost: {
      url: node_url("localhost"),
      accounts: accounts(),
    },
    staging: {
      url: node_url("rinkeby"),
      accounts: accounts("rinkeby"),
    },
    production: {
      url: node_url("mainnet"),
      accounts: accounts("mainnet"),
    },
    mainnet: {
      url: node_url("mainnet"),
      accounts: accounts("mainnet"),
    },
    rinkeby: {
      url: node_url("rinkeby"),
      accounts: accounts("rinkeby"),
    },
    kovan: {
      url: node_url("kovan"),
      accounts: accounts("kovan"),
    },
    goerli: {
      url: "https://rpc.eu-north-1.gateway.fm/v4/ethereum/non-archival/goerli",
      accounts: accounts("goerli"),
    },
    fuji: {
      url: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
      accounts: accounts("fuji"),
    },
    sepolia: {
      url: "https://rpc2.sepolia.org",
      accounts: accounts("sepolia"),
    },
    "optimism-goerli": {
      url: "https://rpc.eu-north-1.gateway.fm/v4/optimism/non-archival/goerli",
      accounts: accounts("optimism-goerli"),
      gasPrice: 35000000000,
    },
    zkSync_testnet: {
      url: "https://testnet.era.zksync.dev",
      accounts: accounts("zkSync_testnet"),
      zksync: true,
      ethNetwork:
        "https://rpc.eu-north-1.gateway.fm/v4/ethereum/non-archival/goerli",
    },
  }),
  paths: {
    sources: "contracts",
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    maxMethodDiff: 10,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  mocha: {
    timeout: 0,
  },
  external: process.env.HARDHAT_FORK
    ? {
        deployments: {
          // process.env.HARDHAT_FORK will specify the network that the fork is made from.
          // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
          hardhat: ["deployments/" + process.env.HARDHAT_FORK],
          localhost: ["deployments/" + process.env.HARDHAT_FORK],
        },
      }
    : undefined,

  tenderly: {
    project: "template-ethereum-contracts",
    username: process.env.TENDERLY_USERNAME as string,
  },
};

export default config;
