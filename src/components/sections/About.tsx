"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "2,500+", label: "Tattoos Created" },
  { value: "1,800+", label: "Happy Clients" },
  { value: "5", label: "Professional Artists" },
];

const features = [
  "Experienced tattoo artists",
  "Premium tattoo equipment",
  "Strict hygiene standards",
  "Custom tattoo designs",
  "Professional consultation",
  "Safe and comfortable environment",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-sm overflow-hidden"
          >
            {/* Using a placeholder for now, will generate AI image later */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-image.jpg')" }}
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-charcoal/90 backdrop-blur-md p-6 border-l-4 border-accent-gold">
              <p className="text-4xl font-bold text-white mb-1">10+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years of<br />Excellence</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">About Our Studio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              More Than Ink — <br className="hidden md:block" />
              <span className="italic text-gray-400 font-light">It's Your Story</span>
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At InkCraft Tattoo Studio, we specialize in custom tattoo designs crafted in a professional, hygienic, and comfortable environment. We believe that every tattoo tells a unique story, and our mission is to bring your vision to life with precision and passion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-accent-gold shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
