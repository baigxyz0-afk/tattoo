"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, ShieldCheck, Droplet, HeartPulse } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "Discuss your idea, placement, size, and style with our artist to ensure we capture your exact vision.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "Custom Design",
    description: "Our artist creates a unique, personalized design based on your consultation and reference material.",
    icon: PenTool
  },
  {
    num: "03",
    title: "Preparation",
    description: "Professional hygiene setup and workstation preparation ensuring a safe environment for your session.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "Tattoo Session",
    description: "The artist carefully brings your design to life on your skin using professional, state-of-the-art equipment.",
    icon: Droplet
  },
  {
    num: "05",
    title: "Aftercare",
    description: "Receive complete tattoo aftercare instructions and premium products to ensure perfect healing.",
    icon: HeartPulse
  }
];

export function Process() {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#fff"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            How It Works
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            The Tattoo Process
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div key={step.num} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot (Center) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal border-2 border-accent-gold items-center justify-center z-10"
                  >
                    <Icon size={20} className="text-accent-gold" />
                  </motion.div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      <span className="text-5xl font-bold text-white/5 font-heading">
                        Step {step.num}
                      </span>
                      <div className="md:hidden w-10 h-10 rounded-full bg-charcoal border border-accent-gold flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-accent-gold" />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
