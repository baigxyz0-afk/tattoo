"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <section id="booking" className="py-24 bg-charcoal-light relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Ready for Ink?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Book an Appointment
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal p-8 md:p-12 rounded-sm border border-white/5 relative"
        >
          {/* Notifications */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full h-full bg-charcoal/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-sm"
              >
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h4 className="text-2xl font-bold text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-400 text-center max-w-sm">
                  Thank you for choosing InkCraft. Our team will review your request and contact you within 24-48 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Full Name *</label>
                <input required type="text" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Email Address *</label>
                <input required type="email" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Phone Number *</label>
                <input required type="tel" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
              
              {/* Tattoo Info */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Tattoo Style</label>
                <select className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors appearance-none">
                  <option value="">Select a style...</option>
                  <option value="realism">Realism</option>
                  <option value="black-grey">Black & Grey</option>
                  <option value="traditional">Traditional</option>
                  <option value="japanese">Japanese</option>
                  <option value="fine-line">Fine Line</option>
                  <option value="other">Other / Unsure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Preferred Artist</label>
                <select className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors appearance-none">
                  <option value="any">Any Available Artist</option>
                  <option value="alex">Alex Carter</option>
                  <option value="michael">Michael Stone</option>
                  <option value="sophia">Sophia Williams</option>
                  <option value="daniel">Daniel Cruz</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Tattoo Placement</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" placeholder="e.g. Left Forearm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Approximate Size (inches)</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" placeholder="e.g. 5x5" />
              </div>
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Preferred Date</label>
                  <input type="date" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Preferred Time</label>
                  <input type="time" className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Tattoo Description *</label>
              <textarea required rows={4} className="w-full bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent-gold transition-colors resize-none" placeholder="Describe your idea in detail..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Upload Reference Image (Optional)</label>
              <div className="border-2 border-dashed border-white/20 rounded-sm p-8 text-center hover:border-accent-gold transition-colors cursor-pointer group">
                <Upload size={24} className="text-gray-500 group-hover:text-accent-gold mx-auto mb-3 transition-colors" />
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">JPG, PNG or PDF (Max 5MB)</p>
                <input type="file" className="hidden" accept="image/*,.pdf" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-accent-gold text-black py-4 rounded-sm font-bold hover:bg-white transition-colors uppercase tracking-widest text-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                "Submit Booking Request"
              )}
            </button>
            
          </form>
        </motion.div>
      </div>
    </section>
  );
}
