"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Realism", "Black & Grey", "Minimal", "Traditional", "Portrait", "Japanese", "Lower Back Tattoo Designs"];

const artists = ["Alex Carter", "Michael Stone", "Sophia Williams", "Daniel Cruz"];

const customFiles = Array.from({ length: 48 }).map((_, i) => {
  const num = i + 1;
  let ext = ".jpg";
  if (num === 38) ext = ".png";
  if (num === 48) ext = ".avif";
  return { num, ext };
});

const customTattoos = customFiles.map((item, idx) => {
  const catIndex = (idx % (categories.length - 2)) + 1;
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

const generatedItems = Array.from({ length: 200 }).map((_, i) => {
  const catIndex = (i % (categories.length - 2)) + 1;
  const cat = categories[catIndex];
  const artist = artists[i % artists.length];
  return {
    id: i + customItems.length + lowerBackTattoos.length + 1,
    category: cat,
    image: `/images/portfolio/${i + 1}.jpg`,
    artist: artist,
    style: cat,
    description: `A stunning custom ${cat.toLowerCase()} tattoo designed by ${artist}.`
  };
});

const portfolioItems = [...customItems, ...lowerBackTattoos, ...generatedItems];

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

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Our Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Tattoo Gallery
          </motion.h3>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-white text-black" 
                  : "bg-charcoal text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-charcoal aspect-[4/5]"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <ZoomIn size={32} className="text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <p className="text-accent-gold text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.style}</p>
                  <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">By {item.artist}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 15)}
              className="inline-block border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full flex flex-col md:flex-row bg-charcoal rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="w-full md:w-2/3 h-[50vh] md:h-[70vh] bg-charcoal-light relative">
                 <div 
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${selectedImage.image})` }}
                />
              </div>
              
              {/* Info Side */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-l border-white/10">
                <p className="text-accent-gold text-sm font-bold tracking-[0.2em] uppercase mb-2">
                  {selectedImage.style}
                </p>
                <h4 className="text-2xl font-bold text-white mb-6 font-heading">
                  Artist: {selectedImage.artist}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
                
                <Link 
                  href="#booking"
                  onClick={() => setSelectedImage(null)}
                  className="w-full text-center bg-white text-black px-6 py-4 rounded-sm font-bold hover:bg-accent-gold transition-colors uppercase tracking-widest text-sm"
                >
                  Book Similar Tattoo
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
