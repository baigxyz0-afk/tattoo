import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TattooWorlds | tattooworlds.com — Premium Custom Tattoo Art & Studio",
  description: "Welcome to tattooworlds.com (TattooWorlds Studio). Professional custom tattoos crafted with precision, creativity, and passion by world-class artists.",
  keywords: ["tattooworlds.com", "TattooWorlds", "Tattoo Worlds", "Tattoo Studio", "Custom Tattoo", "Best Tattoo Artist", "Realism Tattoo", "Black and Grey Tattoo", "Fine Line Tattoo", "Tattoo Gallery"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "TattooWorlds — tattooworlds.com",
    description: "Explore world-class custom tattoo art, styles, and portfolio at tattooworlds.com.",
    url: "https://tattooworlds.com",
    siteName: "TattooWorlds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TattooWorlds — tattooworlds.com",
    description: "Premium custom tattoos by expert artists at tattooworlds.com.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-charcoal text-white selection:bg-accent-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
