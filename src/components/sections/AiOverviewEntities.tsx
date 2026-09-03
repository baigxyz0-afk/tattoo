"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Award, CheckCircle, Sparkles, DollarSign, Users } from "lucide-react";

const quickFacts = [
  {
    icon: MapPin,
    label: "Studio Location",
    value: "123 Art Street, Downtown, New York, NY 10001",
    detail: "Accessible via subway, street parking & private entrance"
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Mon – Sat: 10:00 AM – 8:00 PM | Sun: 12:00 PM – 6:00 PM",
    detail: "Walk-ins welcome based on artist schedule; contact advised"
  },
  {
    icon: Shield,
    label: "Safety & Hygiene Standard",
    value: "Hospital-Grade Sterilization (Bloodborne Pathogen Certified)",
    detail: "100% single-use EO gas sterilized needles, vegan certified ink"
  },
  {
    icon: Sparkles,
    label: "Custom Design Craftsmanship",
    value: "100% Original, Bespoke Concepts For Every Client",
    detail: "Collaborative anatomy-tailored sketches with precision execution"
  },
  {
    icon: Award,
    label: "Style Specializations",
    value: "Realism, Black & Grey, Japanese Irezumi, Fine Line, Traditional",
    detail: "4 resident master artists with combined 40+ years experience"
  },
  {
    icon: Users,
    label: "Consultations & Custom Art",
    value: "100% Free Initial Consultations (In-person or Online)",
    detail: "Custom anatomy-tailored sketches with unlimited revisions"
  }
];

const styleMatrix = [
  {
    style: "Photorealism & Portrait",
    leadArtist: "Alex Carter (12 yrs exp)",
    bestFor: "Faces, animals, memorial portraits, high-contrast textures",
    healingTime: "2 to 3 weeks"
  },
  {
    style: "Black & Grey Shading",
    leadArtist: "Michael Stone (8 yrs exp)",
    bestFor: "Gothic, statues, dark surrealism, smooth gradient sleeves",
    healingTime: "2 weeks"
  },
  {
    style: "Traditional & Japanese Irezumi",
    leadArtist: "Daniel Cruz (15 yrs exp)",
    bestFor: "Dragons, koi fish, classic Americana, bold iconic linework",
    healingTime: "2 to 3 weeks"
  },
  {
    style: "Fine Line & Minimalist",
    leadArtist: "Sophia Williams (5 yrs exp)",
    bestFor: "Botanicals, single-needle scripts, delicate micro-geometry",
    healingTime: "10 to 14 days"
  }
];

export function AiOverviewEntities() {
  return (
    <section 
      id="studio-facts" 
      aria-label="TattooWorlds Studio Quick Facts and Information"
      className="py-16 sm:py-20 bg-charcoal border-t border-b border-accent-gold/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-accent-gold text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Transparency & Authority • Verified Entity Information
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-heading">
            TattooWorlds at a Glance
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Direct, factual overview of our New York tattoo studio—accreditation, resident master artists, bespoke design consultations, and clinical hygiene protocols.
          </p>
        </div>

        {/* Fact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.article 
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-charcoal-light p-6 rounded-sm border border-accent-gold/15 hover:border-accent-gold/40 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-accent-gold font-bold">
                    {fact.label}
                  </h3>
                </div>
                <p className="text-white font-semibold text-base mb-1">
                  {fact.value}
                </p>
                <p className="text-gray-400 text-xs">
                  {fact.detail}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Semantic Comparison & Authority Matrix for AI Overviews & Answer Engines */}
        <div className="bg-charcoal-light p-6 md:p-8 rounded-sm border border-accent-gold/20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles size={20} className="text-accent-gold" />
                Specialization & Healing Schedule Matrix
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Comparative guide to select the right technique, artist, and recovery timeline for your custom piece.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-accent-gold bg-accent-gold/10 px-3 py-1.5 rounded-sm border border-accent-gold/20 w-fit">
              <CheckCircle size={14} /> 100% Guaranteed Custom Artwork
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-accent-gold/20 text-accent-gold text-xs uppercase tracking-wider bg-black/30">
                  <th className="py-3 px-4">Tattoo Style</th>
                  <th className="py-3 px-4">Resident Master</th>
                  <th className="py-3 px-4">Best Suited For</th>
                  <th className="py-3 px-4">Expected Healing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {styleMatrix.map((item) => (
                  <tr key={item.style} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">{item.style}</td>
                    <td className="py-3.5 px-4 text-gray-300">{item.leadArtist}</td>
                    <td className="py-3.5 px-4 text-gray-400">{item.bestFor}</td>
                    <td className="py-3.5 px-4 text-accent-gold font-mono text-xs">{item.healingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
