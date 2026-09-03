"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TattooWorldsLogo } from "@/components/ui/TattooWorldsLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Artists", href: "#artists" },
  { name: "Styles", href: "#styles" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-accent-gold/15 py-3 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-4 sm:py-6"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <TattooWorldsLogo className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-white uppercase flex items-center font-heading">
              Tattoo<span className="text-accent-gold">Worlds</span>
            </span>
            <span className="text-[8px] sm:text-[10px] text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] -mt-0.5 sm:-mt-1 font-mono">
              tattooworlds.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 text-xs xl:text-sm font-medium text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Right Action */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-5 py-2 rounded-sm font-semibold transition-all duration-300 uppercase tracking-wide text-xs shadow-[0_0_15px_rgba(201,154,46,0.2)] hover:shadow-[0_0_25px_rgba(201,154,46,0.4)] whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-2 rounded-sm hover:text-accent-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-charcoal/98 backdrop-blur-xl border-b border-accent-gold/20 flex flex-col items-center py-6 px-4 space-y-4 lg:hidden shadow-[0_10px_30px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-accent-gold transition-colors py-1.5 w-full text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-8 py-3 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-xs w-full max-w-xs text-center mt-2 shadow-[0_0_15px_rgba(201,154,46,0.2)]"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
