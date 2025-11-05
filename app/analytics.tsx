'use client'

import Script from "next/script";

// import { GoogleAnalytics } from "@next/third-parties/google";


export default function Analytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-G2W02313YC"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G2W02313YC');
        `}
      </Script>
    </>
  );
}