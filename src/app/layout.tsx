import { type Metadata } from "next";
import { Nav } from "~/components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nibo Space",
  description: "Um lugar incrível",
  twitter: {
    card: "summary_large_image",
    site: "https://nibo-space.vercel.app",
  },
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </Head>
      <body className={`min-h-screen bg-gradient-radial ${inter.className}`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
