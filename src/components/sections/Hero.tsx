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
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Turn Your Ideas Into <br className="hidden md:block" />
          <span className="text-accent-gold italic">Permanent Art</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Professional custom tattoos crafted with precision, creativity, and passion by experienced tattoo artists.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#booking"
            className="w-full sm:w-auto bg-accent-gold text-black px-8 py-4 rounded-sm font-bold hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105 active:scale-95"
          >
            Book an Appointment
          </Link>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/20 transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105 active:scale-95"
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
