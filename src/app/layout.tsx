import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import SkipLinks from "@/components/shared/SkipLinks";
import CursorFollower from "@/components/shared/CursorFollower";
import { ThemeProvider } from "@/context/ThemeContext";
import { siteConfig, pageMeta } from "@/data/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: siteConfig.ogImage }],
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <SkipLinks />
          <CursorFollower />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
