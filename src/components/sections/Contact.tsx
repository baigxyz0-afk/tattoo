"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon as Instagram, FacebookIcon as Facebook, TikTokIcon as Ghost } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Visit Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Contact Studio
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal p-8 md:p-12 rounded-sm border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 font-heading">InkCraft Tattoo Studio</h4>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 text-accent-gold border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1 uppercase tracking-wider text-sm">Location</p>
                    <p className="text-gray-400">123 Art Street, Downtown<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 text-accent-gold border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1 uppercase tracking-wider text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-accent-gold transition-colors">+1 234 567 890</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 text-accent-gold border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1 uppercase tracking-wider text-sm">Email</p>
                    <a href="mailto:hello@inkcraftstudio.com" className="text-gray-400 hover:text-accent-gold transition-colors">hello@inkcraftstudio.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 text-accent-gold border border-white/10">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1 uppercase tracking-wider text-sm">Opening Hours</p>
                    <div className="text-gray-400">
                      <p className="flex justify-between w-48 mb-1"><span>Mon – Sat</span> <span>10 AM – 8 PM</span></p>
                      <p className="flex justify-between w-48"><span>Sunday</span> <span>12 PM – 6 PM</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Our Work</p>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-sm text-white hover:bg-accent-gold hover:text-black transition-colors">
                  <Instagram size={18} /> <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-sm text-white hover:bg-accent-gold hover:text-black transition-colors">
                  <Facebook size={18} /> <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-sm text-white hover:bg-accent-gold hover:text-black transition-colors">
                  <Ghost size={18} /> <span>TikTok</span> {/* Using Ghost as a placeholder icon for TikTok */}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-[500px] lg:h-auto w-full bg-charcoal rounded-sm overflow-hidden relative border border-white/5 group"
          >
            {/* Fake Google Map implementation for demo */}
            <div className="absolute inset-0 bg-[#222] flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/map-placeholder.jpg')" }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center mb-4 animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center text-black">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="bg-charcoal px-6 py-3 rounded-sm border border-white/10 shadow-2xl">
                  <p className="text-white font-bold text-sm">InkCraft Tattoo Studio</p>
                  <p className="text-gray-400 text-xs">Get Directions</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
