import { type AppType } from "next/app";
import { api } from "../utils/api";

import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
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
        <WagmiConfig config={config}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </WagmiConfig>
      </html>
    </NoSSR>
  );
};

export default api.withTRPC(MyApp);
