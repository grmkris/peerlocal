import { optimismGoerli, zkSyncTestnet } from "wagmi/chains";

export const PeerLocalConfig = {
  420: {
    // OP GOERLI
    peerlocal: {
      address: "0x3FB2B8E670187d2587f8C03652F2072CaaD15745",
    },
  },
  280: {
    // ZKSYNC TEST
    peerlocal: {
      address: "0x5012dd82d53f576fff50097FA6C2Bf4AA2949748",
    },
  },
} as const;

export type Network = keyof typeof PeerLocalConfig;
