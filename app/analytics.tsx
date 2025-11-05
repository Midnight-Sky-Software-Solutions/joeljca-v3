'use client'

import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";


export default function Analytics() {
  return (
    <>
      <Script strategy="lazyOnload" />
    </>
  );
}