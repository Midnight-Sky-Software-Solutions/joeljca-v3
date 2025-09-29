import type { Metadata } from "next";
import { inriaSerif, inconsolata, marvel, josefinSans } from "@/ui/fonts";
import "./globals.css";
import Footer from "@/ui/footer";
import NavBar from "@/ui/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "React Consulting for .NET Shops | Joel Johnston",
  description: "I help .NET shops build modern frontends in React.",
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
