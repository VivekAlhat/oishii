import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
