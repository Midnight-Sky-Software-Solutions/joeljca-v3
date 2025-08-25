import { Inconsolata, Marvel } from "next/font/google";

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

export const marvel = Marvel({
  variable: "--font-marvel",
  subsets: ["latin"],
  weight: ["400", "700"]
})