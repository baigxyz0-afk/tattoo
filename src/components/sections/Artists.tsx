"use client";

import { motion } from "framer-motion";
import { InstagramIcon as Instagram } from "@/components/ui/Icons";
import Link from "next/link";

const artists = [
  {
    id: "alex-carter",
    name: "Alex Carter",
    specialty: "Realism & Portrait Specialist",
    experience: "12 Years",
    image: "/images/artists/alex.jpg",
    instagram: "@alexcarter_ink"
  },
  {
    id: "michael-stone",
    name: "Michael Stone",
    specialty: "Black & Grey Tattoo Artist",
    experience: "8 Years",
    image: "/images/artists/michael.jpg",
    instagram: "@mstone_tattoo"
  },
  {
    id: "sophia-williams",
    name: "Sophia Williams",
    specialty: "Fine Line & Minimalist Artist",
    experience: "5 Years",
    image: "/images/artists/sophia.jpg",
    instagram: "@sophia.ink"
  },
  {
    id: "daniel-cruz",
    name: "Daniel Cruz",
    specialty: "Traditional & Japanese Tattoo Artist",
    experience: "15 Years",
    image: "/images/artists/daniel.jpg",
    instagram: "@dcruz_traditional"
  },
];

export function Artists() {
  return (
    <section id="artists" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            The Masters
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Meet Our Artists
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-charcoal-light rounded-sm overflow-hidden border border-accent-gold/10 hover:border-accent-gold/40 hover:shadow-[0_0_25px_rgba(201,154,46,0.1)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={`${artist.name} - ${artist.specialty} at TattooWorlds NYC`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay that appears on hover with buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
                  <a 
                    href={`https://instagram.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-sm font-bold hover:bg-accent-gold transition-colors text-sm"
                  >
                    <Instagram size={16} /> <span>Follow</span>
                  </a>
                  <Link 
                    href={`#portfolio?artist=${artist.id}`}
                    className="flex items-center space-x-2 border border-white text-white px-6 py-2 rounded-sm font-bold hover:bg-white/20 transition-colors text-sm"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
              
              {/* Info Container */}
              <div className="p-6 text-center border-t border-accent-gold/10 relative z-10 bg-charcoal-light">
                <h4 className="text-xl font-bold text-white mb-1 font-heading">{artist.name}</h4>
                <p className="text-accent-gold text-xs uppercase tracking-wider mb-3">
                  {artist.specialty}
                </p>
                <p className="text-gray-400 text-sm">
                  {artist.experience} Experience
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
