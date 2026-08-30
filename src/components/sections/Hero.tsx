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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Turn Your Ideas Into <br className="hidden md:block" />
          <span className="text-accent-gold italic font-light">Permanent Art</span>
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
            className="w-full sm:w-auto bg-accent-gold text-black border border-accent-gold hover:bg-transparent hover:text-accent-gold px-8 py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(201,154,46,0.3)] hover:shadow-[0_0_25px_rgba(201,154,46,0.6)]"
          >
            Book an Appointment
          </Link>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold px-8 py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105 active:scale-95 hover:bg-accent-gold/5"
          >
            Explore Our Work
          </Link>
        </motion.div>

        {/* WhatsApp contact option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-gray-400 hover:text-accent-gold transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <svg className="w-4 h-4 fill-current text-accent-gold" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489 0 9.953-4.437 9.956-9.896.002-2.644-1.019-5.13-2.877-6.99C16.488 1.856 14.015.836 11.39.835 5.9.835 1.438 5.272 1.435 10.733c-.001 1.543.407 3.05 1.18 4.385l-.993 3.63 3.733-.951z"/>
            </svg>
            <span>Or Chat via WhatsApp</span>
          </a>
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
