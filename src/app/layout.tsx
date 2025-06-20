import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/common/Header";
import config from "@/utils/config";
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
      <body
        className={`${workSans.variable} antialiased max-w-2xl mx-auto px-[16px] md:px-[32px] lg:px-0`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
