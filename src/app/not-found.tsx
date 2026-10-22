import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Compass, Home, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col selection:bg-accent-gold/30 selection:text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold mx-auto">
            <span className="text-3xl font-heading font-extrabold font-mono">404</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Tattoo Design Not Found
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              The page you are looking for may have been moved, renamed, or no longer exists. Explore our curated tattoo directories and guides below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-gold text-charcoal font-bold text-sm hover:bg-white transition-colors duration-300 shadow-lg"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/tattoo-ideas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-charcoal-light border border-white/10 text-white font-semibold text-sm hover:border-accent-gold/50 hover:text-accent-gold transition-colors duration-300"
            >
              <Compass size={16} />
              <span>Explore Tattoo Ideas</span>
            </Link>

            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-charcoal-light border border-white/10 text-white font-semibold text-sm hover:border-accent-gold/50 hover:text-accent-gold transition-colors duration-300"
            >
              <BookOpen size={16} />
              <span>Read Tattoo Blog</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
