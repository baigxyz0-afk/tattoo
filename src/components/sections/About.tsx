"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck, Gem, Palette } from "lucide-react";
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

const featureCards = [
  {
    icon: Award,
    title: "Expert Artists",
    description: "Our roster features award-winning, highly certified artists specialized in a wide range of tattoo styles."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description: "We strictly adhere to hospital-grade sterilization protocols. Your safety and health are our absolute priority."
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We use only state-of-the-art tattoo machinery, vegan-friendly premium inks, and advanced healing solutions."
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "We collaborate closely with you to transform your personal stories into stunning, custom-drawn masterpieces."
  }
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
            <img 
              src="/images/about-image.jpg"
              alt="Inside TattooWorlds Studio New York - Professional Tattoo Artists at Work"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
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
              At TattooWorlds Studio (tattooworlds.com), we specialize in custom tattoo designs crafted in a professional, hygienic, and comfortable environment. We believe that every tattoo tells a unique story, and our mission is to bring your vision to life with precision and passion.
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-charcoal-light p-8 rounded-sm border border-accent-gold/10 hover:border-accent-gold/40 hover:shadow-[0_0_25px_rgba(201,154,46,0.1)] transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold/5 flex items-center justify-center mb-6 border border-accent-gold/15 group-hover:bg-accent-gold group-hover:text-black transition-all duration-500 text-accent-gold">
                  <Icon size={28} className="stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-accent-gold transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
