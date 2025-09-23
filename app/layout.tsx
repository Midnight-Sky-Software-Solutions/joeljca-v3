import type { Metadata } from "next";
import { inriaSerif, inconsolata, marvel, josefinSans } from "@/ui/fonts";
import "./globals.css";
import Footer from "@/ui/footer";
import NavBar from "@/ui/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Full Stack Software Developer | Joel Johnston",
  description: "I help SaaS companies build robust web applications with React, ASP.NET and SQL Server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marvel.variable} ${inconsolata.variable} ${inriaSerif.variable} ${josefinSans.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-G2W02313YC" />
    </html>
  );
}
