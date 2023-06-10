import { type AppType } from "next/app";

import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { createPublicClient, http } from "viem";
import NoSSR from "src/features/NoSSR";

const queryClient = new QueryClient();

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NoSSR>
      <html data-theme="peerLocal">
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={config}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </WagmiConfig>
        </QueryClientProvider>
      </html>
    </NoSSR>
  );
};

export default MyApp;
