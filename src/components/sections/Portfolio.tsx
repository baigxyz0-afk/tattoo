"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Realism", "Black & Grey", "Minimal", "Traditional", "Portrait", "Japanese", "Lower Back Tattoo Designs", "Women Tattoo"];

const artists = ["Alex Carter", "Michael Stone", "Sophia Williams", "Daniel Cruz"];

const customFiles = Array.from({ length: 48 }).map((_, i) => {
  const num = i + 1;
  let ext = ".jpg";
  if (num === 38) ext = ".png";
  if (num === 48) ext = ".avif";
  return { num, ext };
});

const customTattoos = customFiles.map((item, idx) => {
  const catIndex = (idx % (categories.length - 3)) + 1;
  const cat = categories[catIndex];
  const artist = artists[idx % artists.length];
  return {
    id: idx + 2,
    category: cat,
    image: `/images/portfolio/custom-${item.num}${item.ext}`,
    artist: artist,
    style: cat,
    description: `A unique custom ${cat.toLowerCase()} tattoo designed by ${artist}.`
  };
});

const firstCustomItem = {
  id: 1,
  category: "Minimal",
  image: "/images/portfolio/floral-leg-tattoo.jpg",
  artist: "Sophia Williams",
  style: "Minimal",
  description: "A delicate and elegant floral vine tattoo tracing along the leg, featuring fine-line leaves."
};

const customItems = [firstCustomItem, ...customTattoos];

const lowerBackFiles = [
  { num: 1, ext: ".webp" }, { num: 2, ext: ".jpg" }, { num: 3, ext: ".jpg" }, { num: 4, ext: ".jpg" },
  { num: 5, ext: ".jpg" }, { num: 6, ext: ".jpg" }, { num: 7, ext: ".webp" }, { num: 8, ext: ".webp" },
  { num: 9, ext: ".jpg" }, { num: 10, ext: ".jpg" }, { num: 11, ext: ".jpg" }, { num: 12, ext: ".webp" },
  { num: 13, ext: ".jpg" }, { num: 14, ext: ".webp" }, { num: 15, ext: ".webp" }, { num: 16, ext: ".webp" },
  { num: 17, ext: ".jpg" }, { num: 18, ext: ".jpg" }, { num: 19, ext: ".jpg" }, { num: 20, ext: ".webp" },
  { num: 21, ext: ".png" }, { num: 22, ext: ".jpg" }, { num: 23, ext: ".jpg" }, { num: 24, ext: ".jpg" },
  { num: 25, ext: ".jpg" }, { num: 26, ext: ".jpg" }, { num: 27, ext: ".webp" }, { num: 28, ext: ".webp" },
  { num: 29, ext: ".jpg" }, { num: 30, ext: ".webp" }, { num: 31, ext: ".jpg" }, { num: 32, ext: ".jpg" },
  { num: 33, ext: ".jpg" }, { num: 34, ext: ".webp" }, { num: 35, ext: ".webp" }, { num: 36, ext: ".jpg" },
  { num: 37, ext: ".jpg" }, { num: 38, ext: ".jpg" }, { num: 39, ext: ".webp" }, { num: 40, ext: ".webp" },
  { num: 41, ext: ".webp" }, { num: 42, ext: ".webp" }, { num: 43, ext: ".webp" }, { num: 44, ext: ".jpg" },
  { num: 45, ext: ".jpg" }, { num: 46, ext: ".jpg" }, { num: 47, ext: ".jpg" }, { num: 48, ext: ".jpg" },
  { num: 49, ext: ".jpg" }, { num: 50, ext: ".jpg" }, { num: 51, ext: ".webp" }, { num: 52, ext: ".webp" },
  { num: 53, ext: ".jpg" }, { num: 54, ext: ".webp" }, { num: 55, ext: ".webp" }, { num: 56, ext: ".webp" },
  { num: 57, ext: ".webp" }, { num: 58, ext: ".jpg" }, { num: 59, ext: ".jpg" }, { num: 60, ext: ".jpg" },
  { num: 61, ext: ".webp" }, { num: 62, ext: ".webp" }, { num: 63, ext: ".webp" }, { num: 64, ext: ".jpg" },
  { num: 65, ext: ".jpg" }, { num: 66, ext: ".jpg" }, { num: 67, ext: ".jpg" }, { num: 68, ext: ".webp" },
  { num: 69, ext: ".jpg" }, { num: 70, ext: ".webp" }, { num: 71, ext: ".webp" }, { num: 72, ext: ".jpg" },
  { num: 73, ext: ".jpg" }, { num: 74, ext: ".jpg" }, { num: 75, ext: ".jpg" }, { num: 76, ext: ".webp" },
  { num: 77, ext: ".webp" }, { num: 78, ext: ".webp" }, { num: 79, ext: ".jpg" }, { num: 80, ext: ".jpg" },
  { num: 81, ext: ".jpg" }, { num: 82, ext: ".jpg" }, { num: 83, ext: ".jpg" }, { num: 84, ext: ".jpg" },
  { num: 85, ext: ".jpg" }, { num: 86, ext: ".jpg" }, { num: 87, ext: ".jpg" }, { num: 88, ext: ".jpg" },
  { num: 89, ext: ".jpg" }, { num: 90, ext: ".jpg" }, { num: 91, ext: ".jpg" }, { num: 92, ext: ".jpg" },
  { num: 93, ext: ".jpg" }, { num: 94, ext: ".png" }, { num: 95, ext: ".jpg" }, { num: 96, ext: ".jpg" },
  { num: 97, ext: ".jpg" }, { num: 98, ext: ".jpg" }
];

const lowerBackTattoos = lowerBackFiles.map((item, idx) => {
  const artist = artists[idx % artists.length];
  return {
    id: idx + customItems.length + 1,
    category: "Lower Back Tattoo Designs",
    image: `/images/portfolio/lower-back-tattoo-designs/lower-back-${item.num}${item.ext}`,
    artist: artist,
    style: "Lower Back",
    description: `A stunning custom lower back tattoo design by ${artist}.`
  };
});

const womenFiles = Array.from({ length: 80 }).map((_, i) => {
  const num = i + 1;
  const ext = num === 65 ? ".png" : ".jpg";
  return { num, ext };
});

const womenTattoos = womenFiles.map((item, idx) => {
  const artist = artists[idx % artists.length];
  return {
    id: idx + customItems.length + lowerBackTattoos.length + 1,
    category: "Women Tattoo",
    image: `/images/portfolio/women-tattoo/women-${item.num}${item.ext}`,
    artist: artist,
    style: "Women Tattoo",
    description: `A beautiful custom women tattoo design by ${artist}.`
  };
});

const generatedItems = Array.from({ length: 200 }).map((_, i) => {
  const catIndex = (i % (categories.length - 3)) + 1;
  const cat = categories[catIndex];
  const artist = artists[i % artists.length];
  return {
    id: i + customItems.length + lowerBackTattoos.length + womenTattoos.length + 1,
    category: cat,
    image: `/images/portfolio/${i + 1}.jpg`,
    artist: artist,
    style: cat,
    description: `A stunning custom ${cat.toLowerCase()} tattoo designed by ${artist}.`
  };
});

const portfolioItems = [...customItems, ...lowerBackTattoos, ...womenTattoos, ...generatedItems];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(15);

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(15);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredItems]);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-charcoal-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Our Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Tattoo Gallery
          </motion.h3>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-accent-gold text-black shadow-[0_0_15px_rgba(201,154,46,0.25)]" 
                  : "bg-charcoal text-gray-400 hover:text-white hover:bg-charcoal/50 border border-accent-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {visibleItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-charcoal aspect-[4/5] border border-accent-gold/10 hover:border-accent-gold/30 hover:shadow-[0_0_20px_rgba(201,154,46,0.1)] transition-all duration-300"
                onClick={() => setSelectedImage(item)}
              >
                {/* Indexable Image Tag for Googlebot-Image, AI Multimodal Search & A11y */}
                <img 
                  src={item.image} 
                  alt={`Custom ${item.style} tattoo design by ${item.artist} at TattooWorlds NYC`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                  <p className="text-accent-gold text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.style}</p>
                  <p className="text-white text-xs sm:text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">By {item.artist}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredItems.length && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 16)}
              className="inline-block bg-transparent border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold px-7 py-3 sm:px-8 sm:py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-accent-gold/5"
            >
              Load More Designs
            </button>
          </div>
        )}
      </div>

      {/* Responsive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-accent-gold transition-colors z-30 p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Prev Image Arrow */}
            <button 
              className="absolute left-2 sm:left-4 md:left-8 text-white/70 hover:text-accent-gold transition-all duration-300 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-gold/40 shadow-lg active:scale-90"
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
            </button>

            {/* Next Image Arrow */}
            <button 
              className="absolute right-2 sm:right-4 md:right-8 text-white/70 hover:text-accent-gold transition-all duration-300 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-gold/40 shadow-lg active:scale-90"
              onClick={handleNextImage}
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
                src={selectedImage.image} 
                alt={`Custom ${selectedImage.style} tattoo artwork by ${selectedImage.artist} at TattooWorlds NYC`} 
                className="max-h-[78vh] sm:max-h-[85vh] max-w-full object-contain rounded-sm border border-accent-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              />
              
              {/* Small elegant caption overlay */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-sm border border-accent-gold/15 px-4 py-2 sm:px-6 sm:py-2.5 rounded-sm text-center min-w-[160px] sm:min-w-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <p className="text-accent-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-0.5">{selectedImage.style}</p>
                <p className="text-gray-300 text-[10px] sm:text-xs font-light">Artist: {selectedImage.artist}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
