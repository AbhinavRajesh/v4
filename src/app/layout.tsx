import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/common/Header";
import config from "@/confg";
import Footer from "@/components/common/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${config.userData.name} - ${config.userData.description}`,
  description: config.userData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased max-w-2xl mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
