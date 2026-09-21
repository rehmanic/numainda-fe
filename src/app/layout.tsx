import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import numaindaIcon from '@/src/assets/numainda_new_icon.svg';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      className={`${inter.variable} font-sans`}
    >
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
