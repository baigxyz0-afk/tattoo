"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does a tattoo cost?",
    answer: "Our minimum is $80. Final pricing depends on the size, placement, complexity of the design, and the artist you choose. We recommend booking a consultation or submitting a quote request for an accurate estimate."
  },
  {
    question: "Do I need an appointment?",
    answer: "While we do accept walk-ins based on artist availability, we highly recommend booking an appointment in advance, especially for custom pieces and larger tattoos."
  },
  {
    question: "How should I prepare for my tattoo?",
    answer: "Get a good night's sleep, eat a solid meal before your appointment, and stay hydrated. Avoid alcohol and blood-thinning medications for 24 hours prior. Wear comfortable clothing that allows easy access to the tattoo area."
  },
  {
    question: "How long does a tattoo session take?",
    answer: "Session length varies greatly depending on the design. A small, simple piece might take 30 minutes, while a large custom sleeve could take multiple full-day sessions. We'll give you an time estimate during consultation."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we accept walk-ins for smaller, flash designs if an artist has a cancellation or open time. However, to guarantee a spot, an appointment is best."
  },
  {
    question: "What tattoo styles do you specialize in?",
    answer: "Our diverse team of artists specialize in Realism, Black & Grey, Traditional, Japanese, Minimalist, Fine Line, Geometric, and Portrait tattoos. Check out our Artists section to find the right fit for your idea."
  },
  {
    question: "How old do I need to be to get a tattoo?",
    answer: "You must be at least 18 years old to get a tattoo at our studio. A valid government-issued photo ID is required at the time of your appointment. No exceptions."
  },
  {
    question: "What is the tattoo aftercare process?",
    answer: "Keep it clean, moisturized, and out of the sun. We provide detailed written aftercare instructions and recommend specific premium healing products at the end of your session."
  },
  {
    question: "Can I bring my own tattoo design?",
    answer: "Absolutely! You can bring your own design or reference images. Our artists will work with you to refine the design so it translates perfectly into a lasting tattoo."
  },
  {
    question: "Do you offer tattoo consultations?",
    answer: "Yes, we offer free consultations. It's the perfect time to discuss your ideas, placement, size, and get a price estimate before committing."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      itemScope 
      itemType="https://schema.org/FAQPage" 
      className="py-20 sm:py-24 bg-charcoal-light overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Frequently Asked
          </motion.h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'bg-charcoal border-accent-gold/40 shadow-[0_4px_25px_rgba(0,0,0,0.5)]' : 'bg-charcoal-light border-accent-gold/10 hover:border-accent-gold/25'}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                >
                  <span 
                    itemProp="name" 
                    className={`font-bold pr-4 sm:pr-8 text-sm sm:text-base transition-colors ${isOpen ? 'text-accent-gold' : 'text-white'}`}
                  >
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent-gold text-black' : 'bg-white/5 text-gray-400'}`}>
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        itemProp="text"
                        className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base border-t border-accent-gold/10"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
