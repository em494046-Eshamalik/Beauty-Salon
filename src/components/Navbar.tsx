import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DED7]'
          : 'bg-[#FAF7F5] border-b border-[#E8DED7]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0"
            aria-label={`${SALON_CONFIG.brandName} Home`}
          >
            <span className="font-display text-2xl sm:text-2xl font-bold tracking-tight text-[#2A1E1A] group-hover:text-[#D47365] transition-colors">
              {SALON_CONFIG.brandName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#7A665E] font-medium -mt-0.5">
              Haute Beauty & Spa
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#63534D]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#2A1E1A] hover:underline underline-offset-8 decoration-[#D47365] decoration-2 transition-all whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SALON_CONFIG.contact.phoneRaw}`}
              className="text-xs text-[#7A665E] hover:text-[#2A1E1A] flex items-center gap-1.5 transition-colors"
              aria-label={`Call salon at ${SALON_CONFIG.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D47365]" />
              <span className="font-medium">{SALON_CONFIG.contact.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A1E1A] hover:bg-[#3E2D27] active:scale-[0.98] rounded-full transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F3D8D1]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#2A1E1A] rounded-full transition-colors whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A1E1A] hover:text-[#D47365] transition-colors rounded-lg focus-visible:outline-[#D47365]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8DED7] bg-[#FAF7F5] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#2A1E1A]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 text-[#63534D] hover:text-[#2A1E1A] transition-colors border-b border-[#E8DED7]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2A1E1A] hover:bg-[#3E2D27] rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#F3D8D1]" />
                <span>Book Appointment</span>
              </button>
              <a
                href={`tel:${SALON_CONFIG.contact.phoneRaw}`}
                className="text-xs text-center text-[#7A665E] py-1 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D47365]" />
                <span>{SALON_CONFIG.contact.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
