"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const styles = [
  {
    id: "realism",
    name: "Realism",
    description: "Photorealistic tattoos mimicking photographs with incredible detail.",
    image: "/images/styles/realism.jpg"
  },
  {
    id: "black-grey",
    name: "Black & Grey",
    description: "Classic styling using varying shades of black ink for depth and contrast.",
    image: "/images/styles/black-grey.jpg"
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Bold lines, bright colors, and iconic classic Americana imagery.",
    image: "/images/styles/traditional.jpg"
  },
  {
    id: "japanese",
    name: "Japanese",
    description: "Traditional Irezumi featuring dragons, koi fish, and mythology.",
    image: "/images/styles/japanese.jpg"
  },
  {
    id: "fine-line",
    name: "Fine Line",
    description: "Delicate, thin lines creating elegant and intricate minimalist designs.",
    image: "/images/styles/fine-line.jpg"
  },
  {
    id: "geometric",
    name: "Geometric",
    description: "Precise lines and shapes forming complex symmetrical patterns.",
    image: "/images/styles/geometric.jpg"
  },
];

export function TattooStyles() {
  return (
    <section id="styles" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Tattoo Styles
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-charcoal rounded-sm overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${style.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="p-8 relative transform transition-transform duration-500 group-hover:-translate-y-2 bg-charcoal">
                <h4 className="text-2xl font-bold text-white mb-3 font-heading">{style.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {style.description}
                </p>
                <Link 
                  href={`#portfolio?filter=${style.id}`}
                  className="inline-flex items-center text-accent-gold font-bold text-sm tracking-wider uppercase hover:text-white transition-colors"
                >
                  Explore Style <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="#portfolio"
            className="inline-block border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
