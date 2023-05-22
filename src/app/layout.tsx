import { Nav } from "~/components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </Head>
      <body
        className={`min-h-screen bg-gradient-radial ${inter.className}`}
      >
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
