'use client'

import Script from "next/script";

// import { GoogleAnalytics } from "@next/third-parties/google";


export default function Analytics() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-G2W02313YC"
        onLoad={() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag() { (window as any).dataLayer.push(arguments); }
          (window as any).dataLayer.push(['js', new Date()]);
          (window as any).dataLayer.push(['config', 'G-G2W02313YC']);
        }}
      />
    </>
  );
}