import { type AppType } from "next/app";

import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NoSSR from "src/features/NoSSR";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrumGoerli,
  optimismGoerli,
  zkSyncTestnet,
  zkSync,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const queryClient = new QueryClient();

const { chains, publicClient } = configureChains(
  [arbitrumGoerli, optimismGoerli, zkSyncTestnet, zkSync],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "PEERUP",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NoSSR>
      <div data-theme="peerLocal">
        <WagmiConfig config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider chains={chains}>
              <Component {...pageProps} />
              <ReactQueryDevtools />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiConfig>
      </div>
    </NoSSR>
  );
};

export default MyApp;
