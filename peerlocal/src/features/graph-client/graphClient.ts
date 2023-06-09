import { GraphQLClient } from "graphql-request";

import { getSdk } from "./graphql/generated/generated";

export const getSgClient = (config: {
  chain: "goerli" | "sepolia" | "zksync" | "optimism-goerli";
}) => {
  if (config.chain != "optimism-goerli")
    throw new Error(`Network ${config.chain} not yet enabled`);
  const sgUrl =
    "https://api.thegraph.com/subgraphs/name/grmkris/peerlocal-optimism-goerli";
  const wrapperGQL = new GraphQLClient(sgUrl);
  return getSdk(wrapperGQL);
};

export const subgraph = getSgClient({
  chain: "optimism-goerli",
});
