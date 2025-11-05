'use client'

// import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";


export default function Analytics() {
  return (
    <>
      <Script strategy="lazyOnload">
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          (window as any).dataLayer.push(arguments)
        }
        gtag('js', new Date());

        gtag('config', 'G-G2W02313YC');
      </Script>
    </>
  );
}