import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agustinus Zefanya | Portfolio",
  description: "Portfolio of Agustinus Zefanya - Mobile Apps Developer, Game Dev and AI enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider />
        <Navbar />
        <main className="content-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
