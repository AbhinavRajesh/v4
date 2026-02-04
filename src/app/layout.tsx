import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import Header from "@/components/common/Header";
import config from "@/utils/config";
import Footer from "@/components/common/Footer";
import { WebVitals } from "@/components/common/WebVitals";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.userData.name} - ${config.userData.description}`,
    default: `${config.userData.name} - ${config.userData.description}`,
  },
  description: config.userData.description,
  alternates: {
    types: {
      'text/plain': '/llms.txt',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <GoogleAnalytics gaId={config.analytics.gaId} />
        <Analytics />
        <SpeedInsights />
        <WebVitals />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
