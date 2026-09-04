"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const tattooManImages = Array.from({ length: 94 }).map(
  (_, i) => `/images/tattoo-styles/tattoo-man/man-${i + 1}.jpg`
);

const handTattoosForWomanImages = Array.from({ length: 151 }).map((_, i) => {
  const num = i + 1;
  const ext = num === 57 || num === 118 ? "png" : "jpg";
  return `/images/tattoo-styles/hand-tattoos-for-woman/hand-woman-${num}.${ext}`;
});

const styles = [
  {
    id: "hand-tattoos-for-woman",
    name: "Hand Tattoos for Woman",
    description: "Delicate, ornamental, and fine-line hand and finger tattoos curated specifically for women (151 Unique Designs).",
    image: "/images/tattoo-styles/hand-tattoos-for-woman/hand-woman-1.jpg",
    images: handTattoosForWomanImages,
  },
  {
    id: "tattoo-man",
    name: "Tattoo Man",
    description: "Bold, masculine, and powerful custom tattoo designs curated specifically for men (94 Unique Designs).",
    image: "/images/tattoo-styles/tattoo-man/man-1.jpg",
    images: tattooManImages,
  },
  {
    id: "realism",
    name: "Realism",
    description: "Photorealistic tattoos mimicking photographs with incredible detail.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/97da65f2-0c11-4934-a4c8-ffc9c5c47b30.jpg"
  },
  {
    id: "black-grey",
    name: "Black & Grey",
    description: "Classic styling using varying shades of black ink for depth and contrast.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/52fa7053-0bc4-4046-be99-f48fa5ce7a37.jpg"
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Bold lines, bright colors, and iconic classic Americana imagery.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/176f7b96-5726-4bfa-a639-d8704bf7bf7c.jpeg"
  },
  {
    id: "japanese",
    name: "Japanese",
    description: "Traditional Irezumi featuring dragons, koi fish, and mythology.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/9b6f8a16-fed2-4835-8f31-2220aa648033.jpeg"
  },
  {
    id: "fine-line",
    name: "Fine Line",
    description: "Delicate, thin lines creating elegant and intricate minimalist designs.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/3f79274b-6374-482e-9a4e-f8793ed9231f.jpg"
  },
  {
    id: "geometric",
    name: "Geometric",
    description: "Precise lines and shapes forming complex symmetrical patterns.",
    image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/e9003602-71bc-45d6-8110-065534253c19.jpg"
  },
];

export function TattooStyles() {
  const [activeGallery, setActiveGallery] = useState<{
    name: string;
    images: string[];
    index: number;
  } | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeGallery) return;
    setActiveGallery((prev) => {
      if (!prev) return null;
      const nextIdx = (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: nextIdx };
    });
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeGallery) return;
    setActiveGallery((prev) => {
      if (!prev) return null;
      const nextIdx = (prev.index + 1) % prev.images.length;
      return { ...prev, index: nextIdx };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setActiveGallery(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  return (
    <section id="styles" className="py-20 sm:py-24 bg-charcoal-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Tattoo Styles
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-charcoal rounded-sm overflow-hidden border border-accent-gold/10 hover:border-accent-gold/40 hover:shadow-[0_0_25px_rgba(201,154,46,0.1)] transition-all duration-500 cursor-pointer flex flex-col"
              onClick={() => {
                if (style.images && style.images.length > 0) {
                  setActiveGallery({
                    name: style.name,
                    images: style.images,
                    index: 0,
                  });
                }
              }}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                <img 
                  src={style.image} 
                  alt={`Custom ${style.name} Tattoo Style at TattooWorlds NYC`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="p-6 sm:p-8 relative transform transition-transform duration-500 group-hover:-translate-y-1 bg-charcoal flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-heading">{style.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {style.description}
                  </p>
                </div>
                {style.images && style.images.length > 0 ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveGallery({
                        name: style.name,
                        images: style.images!,
                        index: 0,
                      });
                    }}
                    className="inline-flex items-center text-accent-gold font-bold text-xs sm:text-sm tracking-wider uppercase hover:text-white transition-colors"
                  >
                    View Designs ({style.images.length}) <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                ) : (
                  <Link 
                    href={`#portfolio?filter=${style.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-accent-gold font-bold text-xs sm:text-sm tracking-wider uppercase hover:text-white transition-colors"
                  >
                    Explore Style <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            href="#portfolio"
            className="inline-block bg-transparent border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold px-7 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-accent-gold/5"
          >
            View Full Portfolio
          </Link>
        </div>

      </div>

      {/* Responsive Style Gallery Lightbox */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setActiveGallery(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-accent-gold transition-colors z-30 p-2"
              onClick={() => setActiveGallery(null)}
              aria-label="Close modal"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Prev Image Arrow */}
            <button 
              className="absolute left-2 sm:left-4 md:left-8 text-white/70 hover:text-accent-gold transition-all duration-300 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-gold/40 shadow-lg active:scale-90"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
            </button>

            {/* Next Image Arrow */}
            <button 
              className="absolute right-2 sm:right-4 md:right-8 text-white/70 hover:text-accent-gold transition-all duration-300 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-gold/40 shadow-lg active:scale-90"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} className="sm:w-8 sm:h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-h-[78vh] sm:max-h-[85vh] max-w-[94vw] sm:max-w-[90vw] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeGallery.images[activeGallery.index]} 
                alt={`${activeGallery.name} design ${activeGallery.index + 1}`} 
                className="max-h-[78vh] sm:max-h-[85vh] max-w-full object-contain rounded-sm border border-accent-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-sm border border-accent-gold/15 px-4 py-2 sm:px-6 sm:py-2.5 rounded-sm text-center min-w-[160px] sm:min-w-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <p className="text-accent-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-0.5">{activeGallery.name}</p>
                <p className="text-gray-300 text-[10px] sm:text-xs font-light">
                  Design {activeGallery.index + 1} of {activeGallery.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
