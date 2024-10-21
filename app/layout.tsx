import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WalletProvider from "@/components/provider/WalletProvider";
import Layout from "@/components/layout/Layout";
import { GlobalContextProvider } from "@/context/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AlgoTrack",
  description: "AlgoTrack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletProvider>
          <GlobalContextProvider>
            <main className="flex flex-col min-h-screen justify-between">
              <Layout>
                {children}
              </Layout>
            </main>
          </GlobalContextProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
