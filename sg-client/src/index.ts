import { GraphQLClient } from "graphql-request";

import { getSdk } from "./graphql/generated/generated";

export * from "./graphql/generated/generated";

export const getSgClient = (config: {
  chain: "goerli" | "sepolia" | "zksync";
}) => {
  if (config.chain != "goerli")
    throw new Error(`Network ${config.chain} not yet enabled`);
  const sgUrl =
    "https://api.thegraph.com/subgraphs/name/grmkris/peerlocal-goerli";
  const wrapperGQL = new GraphQLClient(sgUrl);
  return getSdk(wrapperGQL);
};
