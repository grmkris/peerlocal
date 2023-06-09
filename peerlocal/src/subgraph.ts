import { getSgClient } from "peerlocal/subgraph-client/src";

export const subgraph = getSgClient({
  chain: "goerli",
});
