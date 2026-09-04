"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Compass, 
  Palette, 
  Flame, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface KeywordCluster {
  id: string;
  name: string;
  icon: any;
  description: string;
  guideNote: string;
  keywords: { label: string; query: string }[];
}

const keywordClusters: KeywordCluster[] = [
  {
    id: "trending",
    name: "Trending & Ideas (2026)",
    icon: Flame,
    description: "Discover modern, trending tattoo inspirations and design ideas curated by master artists for 2026.",
    guideNote: "2026 trends lean toward micro-realism, fine-line botanicals, and high-contrast neo-traditional narratives.",
    keywords: [
      { label: "Tattoo Ideas", query: "tattoo ideas" },
      { label: "Tattoo Designs", query: "tattoo designs" },
      { label: "Tattoo Ideas for Men", query: "tattoo ideas for men" },
      { label: "Tattoo Ideas for Women", query: "tattoo ideas for women" },
      { label: "Small Tattoo Ideas", query: "small tattoo ideas" },
      { label: "Simple Tattoo Designs", query: "simple tattoo designs" },
      { label: "Unique Tattoo Ideas", query: "unique tattoo ideas" },
      { label: "Best Tattoo Designs", query: "best tattoo designs" },
      { label: "Tattoo Inspiration", query: "tattoo inspiration" },
      { label: "Tattoo Design Ideas", query: "tattoo design ideas" },
      { label: "Latest Tattoo Designs", query: "latest tattoo designs" },
      { label: "Trending Tattoo Designs", query: "trending tattoo designs" },
      { label: "Beautiful Tattoo Ideas", query: "beautiful tattoo ideas" },
      { label: "Creative Tattoo Designs", query: "creative tattoo designs" },
      { label: "Minimalist Tattoo Ideas", query: "minimalist tattoo ideas" },
      { label: "Cute Tattoo Ideas", query: "cute tattoo ideas" },
      { label: "Cool Tattoo Designs", query: "cool tattoo designs" },
      { label: "First Tattoo Ideas", query: "first tattoo ideas" },
      { label: "Tattoo Inspiration for Beginners", query: "tattoo inspiration for beginners" },
      { label: "Best Tattoo Ideas 2026", query: "best tattoo ideas 2026" },
      { label: "Popular Tattoo Designs 2026", query: "popular tattoo designs 2026" },
      { label: "Tattoo Trends 2026", query: "tattoo trends 2026" },
    ]
  },
  {
    id: "placements",
    name: "Body Placements",
    icon: Compass,
    description: "Explore ideal anatomical placements from forearm sleeves to delicate wrist and spine artwork.",
    guideNote: "Flat muscular areas (forearm, outer bicep, thigh) offer lower pain sensitivity and optimal long-term ink aging.",
    keywords: [
      { label: "Sleeve Tattoo Ideas", query: "sleeve tattoo ideas" },
      { label: "Full Sleeve Tattoo Designs", query: "full sleeve tattoo designs" },
      { label: "Half Sleeve Tattoo Ideas", query: "half sleeve tattoo ideas" },
      { label: "Forearm Tattoo Ideas", query: "forearm tattoo ideas" },
      { label: "Arm Tattoo Designs", query: "arm tattoo designs" },
      { label: "Wrist Tattoo Ideas", query: "wrist tattoo ideas" },
      { label: "Small Wrist Tattoos", query: "small wrist tattoos" },
      { label: "Hand Tattoo Designs", query: "hand tattoo designs" },
      { label: "Small Hand Tattoos", query: "small hand tattoos" },
      { label: "Finger Tattoo Ideas", query: "finger tattoo ideas" },
      { label: "Shoulder Tattoo Ideas", query: "shoulder tattoo ideas" },
      { label: "Chest Tattoo Designs", query: "chest tattoo designs" },
      { label: "Back Tattoo Ideas", query: "back tattoo ideas" },
      { label: "Spine Tattoo Ideas", query: "spine tattoo ideas" },
      { label: "Neck Tattoo Designs", query: "neck tattoo designs" },
      { label: "Rib Tattoo Ideas", query: "rib tattoo ideas" },
      { label: "Stomach Tattoo Designs", query: "stomach tattoo designs" },
      { label: "Leg Tattoo Ideas", query: "leg tattoo ideas" },
      { label: "Thigh Tattoo Ideas", query: "thigh tattoo ideas" },
      { label: "Ankle Tattoo Ideas", query: "ankle tattoo ideas" },
      { label: "Small Ankle Tattoos", query: "small ankle tattoos" },
      { label: "Foot Tattoo Designs", query: "foot tattoo designs" },
    ]
  },
  {
    id: "styles",
    name: "Styles & Techniques",
    icon: Palette,
    description: "Browse master styles ranging from hyper-realistic portraiture to intricate Japanese Irezumi.",
    guideNote: "Single-needle fine line requires high precision, while black & grey realism offers timeless depth without color fading.",
    keywords: [
      { label: "Realistic Tattoo Designs", query: "realistic tattoo designs" },
      { label: "Custom Tattoo Designs", query: "custom tattoo designs" },
      { label: "Custom Tattoo Ideas", query: "custom tattoo ideas" },
      { label: "Black Tattoo Designs", query: "black tattoo designs" },
      { label: "Black and Grey Tattoo", query: "black and grey tattoo" },
      { label: "Color Tattoo Ideas", query: "color tattoo ideas" },
      { label: "Traditional Tattoo Designs", query: "traditional tattoo designs" },
      { label: "Modern Tattoo Designs", query: "modern tattoo designs" },
      { label: "Fine Line Tattoos", query: "fine line tattoos" },
      { label: "Fine Line Tattoo Ideas", query: "fine line tattoo ideas" },
      { label: "Watercolor Tattoo Designs", query: "watercolor tattoo designs" },
      { label: "Geometric Tattoo Designs", query: "geometric tattoo designs" },
      { label: "Abstract Tattoo Ideas", query: "abstract tattoo ideas" },
      { label: "Tribal Tattoo Designs", query: "tribal tattoo designs" },
      { label: "Japanese Tattoo Designs", query: "Japanese tattoo designs" },
      { label: "American Traditional Tattoos", query: "American traditional tattoos" },
      { label: "Neo Traditional Tattoo Designs", query: "neo traditional tattoo designs" },
      { label: "Old School Tattoo Designs", query: "old school tattoo designs" },
    ]
  },
  {
    id: "motifs",
    name: "Motifs & Animals",
    icon: Sparkles,
    description: "Symbolic elements, nature motifs, and powerful animal totems customized for body art.",
    guideNote: "Botanicals curve naturally along limbs, while apex predators symbolize strength, perseverance, and sovereignty.",
    keywords: [
      { label: "Flower Tattoo Designs", query: "flower tattoo designs" },
      { label: "Rose Tattoo Ideas", query: "rose tattoo ideas" },
      { label: "Lotus Tattoo Designs", query: "lotus tattoo designs" },
      { label: "Butterfly Tattoo Ideas", query: "butterfly tattoo ideas" },
      { label: "Lion Tattoo Designs", query: "lion tattoo designs" },
      { label: "Wolf Tattoo Ideas", query: "wolf tattoo ideas" },
      { label: "Dragon Tattoo Designs", query: "dragon tattoo designs" },
      { label: "Snake Tattoo Ideas", query: "snake tattoo ideas" },
      { label: "Eagle Tattoo Designs", query: "eagle tattoo designs" },
      { label: "Bird Tattoo Ideas", query: "bird tattoo ideas" },
      { label: "Cat Tattoo Designs", query: "cat tattoo designs" },
      { label: "Dog Tattoo Ideas", query: "dog tattoo ideas" },
      { label: "Skull Tattoo Designs", query: "skull tattoo designs" },
      { label: "Cross Tattoo Ideas", query: "cross tattoo ideas" },
      { label: "Angel Tattoo Designs", query: "angel tattoo designs" },
      { label: "Crown Tattoo Ideas", query: "crown tattoo ideas" },
      { label: "Heart Tattoo Designs", query: "heart tattoo designs" },
      { label: "Moon Tattoo Ideas", query: "moon tattoo ideas" },
      { label: "Sun Tattoo Designs", query: "sun tattoo designs" },
      { label: "Star Tattoo Ideas", query: "star tattoo ideas" },
      { label: "Tree of Life Tattoo", query: "tree of life tattoo" },
      { label: "Compass Tattoo Designs", query: "compass tattoo designs" },
      { label: "Mountain Tattoo Ideas", query: "mountain tattoo ideas" },
    ]
  },
  {
    id: "meaning",
    name: "Meaning & Care Guides",
    icon: Heart,
    description: "Bespoke commemorative art, symbolic connections, and clinical healing instructions.",
    guideNote: "Proper aftercare with medical-grade dermal wrap ensures 99% pigment retention during the 14-day healing process.",
    keywords: [
      { label: "Meaningful Tattoo Ideas", query: "meaningful tattoo ideas" },
      { label: "Tattoo Ideas with Meaning", query: "tattoo ideas with meaning" },
      { label: "Family Tattoo Ideas", query: "family tattoo ideas" },
      { label: "Friendship Tattoo Ideas", query: "friendship tattoo ideas" },
      { label: "Couple Tattoo Ideas", query: "couple tattoo ideas" },
      { label: "Matching Tattoo Designs", query: "matching tattoo designs" },
      { label: "Name Tattoo Designs", query: "name tattoo designs" },
      { label: "Initials Tattoo Ideas", query: "initials tattoo ideas" },
      { label: "Memorial Tattoo Ideas", query: "memorial tattoo ideas" },
      { label: "Tattoo Placement Ideas", query: "tattoo placement ideas" },
      { label: "Tattoo Size Guide", query: "tattoo size guide" },
      { label: "Tattoo Aftercare Tips", query: "tattoo aftercare tips" },
      { label: "Tattoo Healing Process", query: "tattoo healing process" },
      { label: "Tattoo Care Instructions", query: "tattoo care instructions" },
    ]
  }
];

export function TattooInspirationHub() {
  const [activeTab, setActiveTab] = useState<string>("trending");

  const currentCluster = keywordClusters.find(c => c.id === activeTab) || keywordClusters[0];

  return (
    <section 
      id="tattoo-ideas" 
      aria-label="Tattoo Ideas, Designs and Trends 2026 Guide"
      className="py-20 sm:py-24 bg-charcoal border-t border-b border-accent-gold/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-accent-gold text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Inspiration & Style Guide • 100 Tattoo SEO Concepts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Tattoo Ideas & Trends <span className="text-accent-gold italic font-light">2026</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore our curated encyclopedia of 100 trending tattoo ideas, placement recommendations, 
            symbolic motifs, and master styles crafted by TattooWorlds resident artists.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {keywordClusters.map((cluster) => {
            const Icon = cluster.icon;
            const isActive = activeTab === cluster.id;
            return (
              <button
                key={cluster.id}
                onClick={() => setActiveTab(cluster.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-accent-gold text-black shadow-[0_0_20px_rgba(201,154,46,0.3)] scale-105"
                    : "bg-charcoal-light text-gray-300 hover:text-white hover:bg-white/5 border border-accent-gold/15"
                }`}
              >
                <Icon size={16} />
                <span>{cluster.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Overview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCluster.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-charcoal-light border border-accent-gold/20 rounded-sm p-6 sm:p-8 mb-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1">
                  {currentCluster.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {currentCluster.description}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/30 px-3.5 py-1.5 rounded-sm text-accent-gold text-xs font-semibold w-fit shrink-0">
                <ShieldCheck size={16} />
                <span>Verified Studio Consultation Guidance</span>
              </div>
            </div>

            {/* Pro Tip Callout */}
            <div className="mb-6 p-4 rounded-sm bg-black/40 border-l-2 border-accent-gold text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start gap-2.5">
              <span className="text-accent-gold font-bold uppercase tracking-wider shrink-0 mt-0.5">Artist Tip:</span>
              <span>{currentCluster.guideNote}</span>
            </div>

            {/* Keyword Pills Grid */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {currentCluster.keywords.map((kw, i) => (
                <Link
                  key={i}
                  href="#portfolio"
                  className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-medium bg-black/60 border border-white/10 text-gray-300 hover:text-accent-gold hover:border-accent-gold/50 hover:bg-accent-gold/5 transition-all duration-200"
                >
                  <CheckCircle2 size={13} className="text-accent-gold/60 group-hover:text-accent-gold transition-colors" />
                  <span>{kw.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gallery CTA */}
        <div className="text-center mt-8">
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold px-8 py-3.5 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-accent-gold/5"
          >
            <span>Browse Full Gallery For These Designs</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
