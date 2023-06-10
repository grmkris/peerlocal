import { type AppType } from "next/app";

import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NoSSR from "src/features/NoSSR";

import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { optimismGoerli, zkSyncTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const queryClient = new QueryClient();

const supportedChains = [optimismGoerli, zkSyncTestnet];
const { provider, chains, webSocketProvider } = configureChains(
  supportedChains,
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [metaMaskWallet({ chains }), walletConnectWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors,
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NoSSR>
      <div data-theme="peerLocal">
        <WagmiConfig client={wagmiClient}>
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
