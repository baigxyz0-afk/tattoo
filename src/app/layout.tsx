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
  title: "InkCraft Tattoo Studio | Your Story. Your Ink. Your Art.",
  description: "Professional custom tattoos crafted with precision, creativity, and passion by experienced tattoo artists in a premium, hygienic studio.",
  keywords: ["Tattoo Studio", "Tattoo Artist", "Custom Tattoo", "Tattoo Shop", "Best Tattoo Artist", "Professional Tattoo Studio", "Realism Tattoo", "Black and Grey Tattoo", "Fine Line Tattoo"],
  openGraph: {
    title: "InkCraft Tattoo Studio",
    description: "Your Story. Your Ink. Your Art. Book an appointment with our professional tattoo artists.",
    url: "https://inkcraftstudio.com",
    siteName: "InkCraft Tattoo Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkCraft Tattoo Studio",
    description: "Premium custom tattoos by expert artists.",
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
