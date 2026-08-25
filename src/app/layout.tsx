import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
