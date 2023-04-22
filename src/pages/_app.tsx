import { type AppType } from "next/app";
import type { AppProps } from 'next/app'

import { ClerkProvider } from '@clerk/nextjs';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
  <ClerkProvider {...pageProps}>
    <Toaster position="bottom-center" />
    <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
