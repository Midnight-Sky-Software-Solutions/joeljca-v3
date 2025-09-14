import { Josefin_Sans, Inconsolata, Inria_Serif, Marvel } from "next/font/google";

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

export const marvel = Marvel({
  variable: "--font-marvel",
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const inriaSerif = Inria_Serif({
  variable: "--font-inria",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
})

export const josefinSans = Josefin_Sans({
  variable: "--josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
})