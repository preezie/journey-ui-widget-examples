import '../styles/globals.css'

import Script from 'next/script'

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
