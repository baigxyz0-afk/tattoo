"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Small Tattoo",
    description: "Perfect for minimalist designs, lettering, and tiny symbols.",
    price: "$80",
    features: ["Up to 2x2 inches", "Simple linework", "Black or single color", "1 session"]
  },
  {
    name: "Medium Tattoo",
    description: "Ideal for palm-sized pieces with moderate detail and shading.",
    price: "$180",
    features: ["Up to 5x5 inches", "Detailed shading", "Up to 3 colors", "1-2 sessions"]
  },
  {
    name: "Large Tattoo",
    description: "Great for half-sleeves, calves, or detailed chest pieces.",
    price: "$350",
    features: ["Half sleeve / large pieces", "Complex details & colors", "Custom consultation", "Multiple sessions"]
  },
  {
    name: "Custom Sleeve",
    description: "Full arm or leg sleeve with intricate, connected designs.",
    price: "$800",
    features: ["Full cohesive design", "Unlimited revisions on sketch", "Priority booking", "Multi-day project"]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Investment
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Studio Pricing
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-charcoal-light px-4 py-2 rounded-sm border border-accent-gold/10 text-gray-300 text-sm"
          >
            <Info size={16} className="text-accent-gold" />
            <span>Final pricing depends on size, placement, complexity, and artist.</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-charcoal-light border border-accent-gold/10 hover:border-accent-gold/40 hover:shadow-[0_0_25px_rgba(201,154,46,0.1)] transition-all duration-300 p-8 flex flex-col relative overflow-hidden group rounded-sm"
            >
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-accent-gold/10 transition-colors duration-500" />
              
              <h4 className="text-xl font-bold text-white mb-2 relative z-10">{plan.name}</h4>
              <p className="text-gray-400 text-sm mb-6 relative z-10">{plan.description}</p>
              
              <div className="mb-8 relative z-10">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Starting from</span>
                <div className="flex items-baseline mt-1">
                  <span className="text-4xl font-bold text-white font-heading">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="text-accent-gold mr-2 shrink-0">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#booking"
                className="w-full text-center border border-white/20 text-white px-6 py-3 rounded-sm font-bold group-hover:bg-accent-gold group-hover:text-black group-hover:border-accent-gold transition-all duration-300 uppercase tracking-widest text-xs relative z-10"
              >
                Request a Quote
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
