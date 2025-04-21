import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import Intro from "@/components/Intro";
import Head from "next/head";
import CalendlyBadge from "@/components/CalendlyBadge";

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
      {/* <Head>
      <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"

        />
      </Head> */}
      <body className={font.className}>{children}</body>
     
      
    </html>
  );
}



