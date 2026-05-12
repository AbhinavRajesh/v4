import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import config from "@/lib/site-config";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhinavrajesh.com"),
  title: {
    template: `%s | ${config.userData.name}`,
    default: `${config.userData.name} — ${config.userData.description}`,
  },
  description: config.userData.description,
  alternates: {
    types: {
      "text/plain": "/llms.txt",
      "application/rss+xml": "/rss.xml",
    },
  },
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-background focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <GoogleAnalytics gaId={config.analytics.gaId} />
        <Analytics />
        <SpeedInsights />
        <main
          tabIndex={-1}
          className="mx-auto max-w-2xl px-6 py-12 sm:py-16 focus:outline-none"
        >
          <Nav />
          <div className="mt-12 sm:mt-16" id="main-content">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
