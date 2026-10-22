"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-black/30" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs sm:text-sm uppercase tracking-widest font-mono mb-4"
        >
          <span>Turn Your Ideas Into Permanent Art</span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-heading max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tattoo Ideas, Designs & Styles <br className="hidden md:block" />
          <span className="text-accent-gold italic font-light">for Your Next Tattoo</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore tattoo ideas, tattoo designs, popular tattoo styles, and inspiration for your next tattoo. Discover minimalist, fine-line, realism, black and grey, floral, traditional, geometric, and other tattoo styles.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-10 py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(201,154,46,0.3)] hover:shadow-[0_0_25px_rgba(201,154,46,0.6)] text-center"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements (Particles/Dust effect could go here, for now a simple subtle shape) */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
