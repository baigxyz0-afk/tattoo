import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon as Instagram, FacebookIcon as Facebook, TwitterIcon as Twitter } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="text-2xl font-bold tracking-widest text-white uppercase flex flex-col">
              <span>InkCraft</span>
              <span className="text-[10px] text-accent-gold tracking-[0.2em]">Tattoo Studio</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Your Story. Your Ink. Your Art."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-gold hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-gold hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-gold hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Artists", "Portfolio", "Pricing", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin size={18} className="mr-3 text-accent-gold shrink-0 mt-0.5" />
                <span>123 Art Street, Downtown<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone size={18} className="mr-3 text-accent-gold shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail size={18} className="mr-3 text-accent-gold shrink-0" />
                <a href="mailto:hello@inkcraftstudio.com" className="hover:text-accent-gold transition-colors">
                  hello@inkcraftstudio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400">
                <Clock size={18} className="mr-3 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Monday – Saturday</p>
                  <p>10:00 AM – 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-400">
                <Clock size={18} className="mr-3 text-accent-gold shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="text-white font-medium mb-1">Sunday</p>
                  <p>12:00 PM – 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 InkCraft Tattoo Studio. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
