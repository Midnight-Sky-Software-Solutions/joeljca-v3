import type { Metadata } from "next";
import { marvel } from "@/ui/fonts";
import "./globals.css";
import Footer from "@/ui/footer";
import NavBar from "@/ui/navbar";
import FontHack from "./font-hack";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "ASP.NET Modernization Services | Joel Johnston",
  description: "I help .NET shops modernize their stack.",
};

const Analytics = dynamic(() => import('./analytics'), {
  loading: () => <></>,
  ssr: false
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use cache'
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" />
      </head>
      <body
        className={`${marvel.variable} antialiased`}
      >
        <FontHack />
        <NavBar />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
