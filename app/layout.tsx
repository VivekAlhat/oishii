import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oishii",
  description: "One stop to find yummy food recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container max-w-5xl mx-auto px-4 py-6 ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
