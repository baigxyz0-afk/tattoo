"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    text: "Absolutely amazing experience. The artist understood exactly what I wanted and created something even better. The studio is pristine.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Johnson",
    text: "The studio is clean, professional, and the attention to detail is incredible. My fine line piece healed perfectly thanks to their aftercare.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel Smith",
    text: "Best tattoo experience I've ever had. Highly recommended! The consultation was thorough and the final Japanese sleeve is a masterpiece.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", bounce: 0.2 }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5 }
    })
  };

  return (
    <section className="py-20 sm:py-24 bg-charcoal relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-gold text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4"
        >
          Client Stories
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16 font-heading"
        >
          What People Say
        </motion.h3>

        <div className="relative h-[340px] sm:h-[280px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full px-2 sm:px-4"
            >
              <Quote size={40} className="text-white/10 mx-auto mb-4 sm:mb-6 sm:w-12 sm:h-12" />
              <p className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-6 sm:mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex justify-center space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent-gold fill-accent-gold sm:w-[18px] sm:h-[18px]" />
                ))}
              </div>
              
              <h4 className="text-white font-bold tracking-wider uppercase text-sm">
                — {testimonials[currentIndex].name}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-accent-gold/15 flex items-center justify-center text-white hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300 shadow-[0_0_10px_rgba(201,154,46,0.1)]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-accent-gold w-6" : "bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-accent-gold/15 flex items-center justify-center text-white hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all duration-300 shadow-[0_0_10px_rgba(201,154,46,0.1)]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
