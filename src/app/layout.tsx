import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tattooworlds.com"),
  title: {
    default: "Custom Tattoo Studio in NYC | Tattoo Ideas & Designs",
    template: "%s | TattooWorlds",
  },
  description: "Custom tattoo studio in NYC. Explore tattoo ideas, fine-line, realism, black & grey, Japanese Irezumi and traditional designs. Free consultations.",
  keywords: [
    "tattooworlds.com",
    "TattooWorlds",
    "tattoo",
    "tattoos",
    "tattoo shop nyc",
    "tattoo shops new york city",
    "new york tattoo studio",
    "brooklyn tattoo studio",
    "tattoo shops brooklyn",
    "tattoo artists nyc",
    "tattoo studio nyc",
    "tattoo consultations",
    "custom tattoo designs",
    "tattoo artists",
    "tattoo ideas",
    "tattoo designs",
    "tattoo design ideas",
    "best tattoo designs",
    "unique tattoo ideas",
    "small tattoo ideas",
    "minimalist tattoo ideas",
    "tattoo inspo",
    "tattoo drawing ideas",
    "first tattoo ideas",
    "tattoo meaning",
    "tattoo lettering",
    "cover up tattoo ideas",
    "new school tattoos",
    "hand tattoos",
    "hand tattoos for women",
    "hand tattoos for men",
    "small hand tattoos",
    "face tattoos",
    "tribal tattoos",
    "tribal tattoo designs",
    "japanese tattoo",
    "japanese traditional tattoo",
    "traditional japanese tattoo",
    "irezumi tattoo",
    "geometric tattoos",
    "geometric tattoo designs",
    "fine line tattoos",
    "fine line tattoo artists",
    "realism tattoos",
    "realistic tattoo designs",
    "black and grey tattoo",
    "watercolor tattoo designs",
    "mandala tattoo designs",
    "sleeve tattoo ideas",
    "full sleeve tattoo designs",
    "half sleeve tattoo ideas",
    "forearm tattoo ideas",
    "shoulder tattoo ideas",
    "chest tattoo designs",
    "back tattoo ideas",
    "neck tattoo designs",
    "leg tattoo ideas",
    "ankle tattoo ideas",
    "rib tattoo ideas",
    "tattoo aftercare",
    "tattoo pain chart",
    "tattoo trends 2026"
  ],
  authors: [{ name: "TattooWorlds Studio", url: "https://www.tattooworlds.com" }],
  creator: "TattooWorlds",
  publisher: "TattooWorlds",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.tattooworlds.com",
    languages: {
      "en-US": "https://www.tattooworlds.com",
      "x-default": "https://www.tattooworlds.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Custom Tattoo Studio in NYC | Tattoo Ideas & Designs",
    description: "Custom tattoo studio in NYC. Explore tattoo ideas, fine-line, realism, black & grey, Japanese Irezumi and traditional designs. Free consultations.",
    url: "https://www.tattooworlds.com",
    siteName: "TattooWorlds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.tattooworlds.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TattooWorlds - Tattoo Ideas, Designs & Styles",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Tattoo Studio in NYC | Tattoo Ideas & Designs",
    description: "Custom tattoo studio in NYC. Explore tattoo ideas, fine-line, realism, black & grey, Japanese Irezumi and traditional designs. Free consultations.",
    images: ["https://www.tattooworlds.com/images/hero-bg.jpg"],
  },
  category: "Art & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}>
      <head>
        {/* Core Web Vitals LCP Hero Image Preload */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          fetchPriority="high"
        />
        {/* Preconnect & DNS Prefetch for Google & External CDNs */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://d1kq2dqeox7x40.cloudfront.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d1kq2dqeox7x40.cloudfront.net" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-charcoal text-white selection:bg-accent-gold selection:text-black">
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-N6H7PT0G6L"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N6H7PT0G6L');
          `}
        </Script>
        {/* Schema.org Comprehensive JSON-LD Structured Data */}
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
