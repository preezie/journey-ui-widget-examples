import '../styles/globals.css'

import type { AppProps } from "next/app";

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
