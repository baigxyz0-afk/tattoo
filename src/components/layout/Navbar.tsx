"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "bg-charcoal/90 backdrop-blur-md border-b border-accent-gold/15 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:grid lg:grid-cols-3">
        <div className="flex items-center justify-between w-full lg:w-auto lg:col-span-1">
          <Link href="#home" className="text-2xl font-bold tracking-widest text-white uppercase flex flex-col">
            <span>InkCraft</span>
            <span className="text-[10px] text-accent-gold tracking-[0.2em] -mt-1">Tattoo Studio</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center space-x-8 lg:col-span-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-end lg:col-span-1">
          <Link
            href="#booking"
            className="bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-6 py-2.5 rounded-sm font-semibold transition-all duration-300 uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(201,154,46,0.2)] hover:shadow-[0_0_25px_rgba(201,154,46,0.4)]"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-md border-b border-accent-gold/15 flex flex-col items-center py-8 space-y-6 lg:hidden shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-accent-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-8 py-3 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-sm w-11/12 text-center mt-4 shadow-[0_0_15px_rgba(201,154,46,0.2)]"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
