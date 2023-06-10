import { optimismGoerli, zkSyncTestnet } from "wagmi/chains";

export const PeerLocalConfig = {
  420: {
    // OP GOERLI
    peerlocal: {
      address: "0xF687aEe26F1083891710e82cCE07aBc014b93e5d",
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
