import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://preeziecdn.azureedge.net/production/preguide.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
