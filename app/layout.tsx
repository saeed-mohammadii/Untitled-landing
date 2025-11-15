
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
    title: "My Landing Page",
    description: "Modern landing page built with Next.js and shadcn/ui",
};

const inter = Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
