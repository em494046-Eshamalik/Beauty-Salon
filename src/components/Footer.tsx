import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1210] text-[#FAF7F5] pt-16 pb-12 border-t border-[#2A1E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E2D27]">
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white block">
                {SALON_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E28E80] font-medium">
                Haute Beauty & Spa Sanctuary
              </span>
            </div>
            <p className="text-xs text-[#A39088] leading-relaxed max-w-sm">
              {SALON_CONFIG.shortBio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_CONFIG.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2A1E1A] hover:bg-[#D47365] text-white flex items-center justify-center transition-colors border border-[#3E2D27]"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_CONFIG.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2A1E1A] hover:bg-[#D47365] text-white flex items-center justify-center transition-colors border border-[#3E2D27]"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3D8D1]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A39088]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Signature Services & Haircare
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Philosophy & Standards
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Curated Pampering Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Portfolio & Style Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3D8D1]">
              Studio Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#A39088]">
              <p>Mon – Fri</p>
              <p className="text-white font-medium">9:00 AM – 7:30 PM</p>
              <p className="pt-1">Saturday</p>
              <p className="text-white font-medium">9:00 AM – 6:00 PM</p>
              <p className="pt-1">Sunday</p>
              <p className="text-white font-medium">10:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Pitch Notice for prospective salon owners (3 cols) */}
          <div className="lg:col-span-3 bg-[#2A1E1A] p-5 rounded-2xl border border-[#3E2D27] space-y-2.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#E28E80]">
              Pitch Demo Information
            </span>
            <p className="text-xs text-[#E8DFD8] leading-relaxed">
              Demonstration prototype built to showcase high-conversion salon websites.
              Brand identity, booking workflows, staff galleries, and customer reviews can be fully tailored.
            </p>
            <div className="pt-2 text-[11px] text-[#A39088]">
              Ready to deploy for your salon business.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A665E]">
          <div>
            © {new Date().getFullYear()} {SALON_CONFIG.brandName}. All rights reserved.
            <span className="ml-2 text-[#A39088] hidden sm:inline">| Demo Website Concept for Salon Development Pitch</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A39088] hover:text-[#F3D8D1] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
