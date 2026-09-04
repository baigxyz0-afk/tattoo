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
  metadataBase: new URL("https://tattooworlds.com"),
  title: {
    default: "TattooWorlds | Custom Tattoo Studio & Fine Art NYC (tattooworlds.com)",
    template: "%s | TattooWorlds",
  },
  description: "TattooWorlds (tattooworlds.com) is New York's premier custom tattoo studio. Award-winning artists specializing in Realism, Black & Grey, Japanese Irezumi, Traditional Americana, and Fine Line tattoos in a clinical hygienic environment.",
  keywords: [
    "tattooworlds.com",
    "TattooWorlds",
    "tattoo ideas",
    "tattoo designs",
    "tattoo ideas for men",
    "tattoo ideas for women",
    "small tattoo ideas",
    "simple tattoo designs",
    "unique tattoo ideas",
    "best tattoo designs",
    "tattoo inspiration",
    "tattoo design ideas",
    "latest tattoo designs",
    "trending tattoo designs",
    "beautiful tattoo ideas",
    "creative tattoo designs",
    "meaningful tattoo ideas",
    "minimalist tattoo ideas",
    "cute tattoo ideas",
    "cool tattoo designs",
    "realistic tattoo designs",
    "custom tattoo designs",
    "black tattoo designs",
    "black and grey tattoo",
    "color tattoo ideas",
    "traditional tattoo designs",
    "modern tattoo designs",
    "fine line tattoos",
    "fine line tattoo ideas",
    "watercolor tattoo designs",
    "geometric tattoo designs",
    "abstract tattoo ideas",
    "tribal tattoo designs",
    "Japanese tattoo designs",
    "American traditional tattoos",
    "neo traditional tattoo designs",
    "old school tattoo designs",
    "sleeve tattoo ideas",
    "full sleeve tattoo designs",
    "half sleeve tattoo ideas",
    "forearm tattoo ideas",
    "arm tattoo designs",
    "wrist tattoo ideas",
    "hand tattoo designs",
    "finger tattoo ideas",
    "shoulder tattoo ideas",
    "chest tattoo designs",
    "back tattoo ideas",
    "neck tattoo designs",
    "leg tattoo ideas",
    "thigh tattoo ideas",
    "ankle tattoo ideas",
    "foot tattoo designs",
    "rib tattoo ideas",
    "spine tattoo ideas",
    "stomach tattoo designs",
    "small wrist tattoos",
    "small hand tattoos",
    "small ankle tattoos",
    "flower tattoo designs",
    "rose tattoo ideas",
    "lotus tattoo designs",
    "butterfly tattoo ideas",
    "lion tattoo designs",
    "wolf tattoo ideas",
    "dragon tattoo designs",
    "snake tattoo ideas",
    "eagle tattoo designs",
    "bird tattoo ideas",
    "cat tattoo designs",
    "dog tattoo ideas",
    "skull tattoo designs",
    "cross tattoo ideas",
    "angel tattoo designs",
    "crown tattoo ideas",
    "heart tattoo designs",
    "moon tattoo ideas",
    "sun tattoo designs",
    "star tattoo ideas",
    "tree of life tattoo",
    "compass tattoo designs",
    "mountain tattoo ideas",
    "family tattoo ideas",
    "friendship tattoo ideas",
    "couple tattoo ideas",
    "matching tattoo designs",
    "name tattoo designs",
    "initials tattoo ideas",
    "memorial tattoo ideas",
    "tattoo ideas with meaning",
    "tattoo placement ideas",
    "tattoo size guide",
    "first tattoo ideas",
    "tattoo aftercare tips",
    "tattoo healing process",
    "tattoo care instructions",
    "custom tattoo ideas",
    "tattoo inspiration for beginners",
    "best tattoo ideas 2026",
    "popular tattoo designs 2026",
    "tattoo trends 2026"
  ],
  authors: [{ name: "TattooWorlds Studio", url: "https://tattooworlds.com" }],
  creator: "TattooWorlds",
  publisher: "TattooWorlds",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://tattooworlds.com",
    languages: {
      "en-US": "https://tattooworlds.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg"
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
    title: "TattooWorlds | Custom Tattoo Studio & Fine Art NYC (tattooworlds.com)",
    description: "New York's premier custom tattoo studio. Resident masters specializing in Realism, Black & Grey, Japanese Irezumi, and Fine Line. Book your free consultation.",
    url: "https://tattooworlds.com",
    siteName: "TattooWorlds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tattooworlds.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TattooWorlds Professional Tattoo Studio NYC",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TattooWorlds | Custom Tattoo Studio & Fine Art NYC (tattooworlds.com)",
    description: "Premier custom tattoo studio in New York. Expert resident artists, clinical sterilization, and award-winning artwork.",
    images: ["https://tattooworlds.com/images/hero-bg.jpg"],
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
