import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import Intro from "@/components/Intro";

// const inter = Inter({ subsets: ["latin"] });

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BS Designs –  Crafting digital identities that connect.",
  description:
    "We fuel next-gen brands with smart design and zero-compromise execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
