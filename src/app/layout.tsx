import type { Metadata } from "next";
import { Chakra_Petch, Roboto_Mono, Cairo } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cairo = Cairo({
  variable: "--font-cairo-ar",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});

import numaindaIcon from '@/src/assets/numainda_new_icon.svg';

export const metadata: Metadata = {
  title: "Numainda",
  description: "AI CSR Agent",
  icons: {
    icon: numaindaIcon.src,
  }
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${robotoMono.variable} ${cairo.variable}`}
    >
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
