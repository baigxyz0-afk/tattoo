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
    "Tattoo Worlds Studio",
    "Custom Tattoo NYC",
    "Best Tattoo Artists New York",
    "Realism Tattoo Studio",
    "Black and Grey Tattoo",
    "Japanese Irezumi Tattoo",
    "Fine Line Tattoo NYC",
    "Tattoo Consultation NYC",
    "Tattoo Sleeves",
    "Professional Tattoo Shop",
    "Hygienic Tattoo Studio"
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
