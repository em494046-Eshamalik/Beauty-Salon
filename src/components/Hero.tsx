import React, { useState } from 'react';
import { Calendar, ArrowDownRight, Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#E8DED7]">
      {/* Subtle organic background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3D8D1]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#F5EFEB] rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Column 1: Editorial Value Proposition (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Elegant kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-4">
              <span>Haute Coiffure & Aesthetic Sanctuary</span>
              <span aria-hidden="true" className="text-[#A39088]">·</span>
              <span className="text-[#7A665E] font-normal">Est. {SALON_CONFIG.yearEstablished}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2A1E1A] leading-[1.12] mb-6 [text-wrap:balance]">
              Your Beauty, <br />
              <span className="italic font-normal text-[#D47365]">Our Passion.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#63534D] leading-relaxed max-w-xl mb-8">
              Step into an intimate sanctuary devoted to elevated personal care. From precision balayage and
              restorative clinical facials to bespoke bridal artistry, our master stylists curate looks that celebrate your innate radiance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A1E1A] hover:bg-[#3E2D27] active:scale-[0.98] rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#F3D8D1]" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] hover:text-[#D47365] bg-white hover:bg-[#F5EFEB] border border-[#E8DED7] rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-2xs"
              >
                <span>Explore Services</span>
                <ArrowDownRight className="w-4 h-4 text-[#7A665E]" />
              </button>
            </div>

            {/* Editorial Trust Markers */}
            <div className="pt-6 border-t border-[#E8DED7] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#7A665E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D47365] shrink-0" />
                <span>Medical-grade sterilization</span>
              </div>
              <span aria-hidden="true" className="text-[#E8DED7] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D47365] shrink-0" />
                <span>Cruelty-free organic botanicals</span>
              </div>
              <span aria-hidden="true" className="text-[#E8DED7] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#D47365] shrink-0" />
                <span>Private one-on-one styling</span>
              </div>
            </div>
          </div>

          {/* Column 2: Dominant High-Impact Salon Asset (5 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DED7] aspect-[4/3] lg:aspect-[5/6] w-full h-full min-h-[380px] bg-[#F5EFEB]">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_salon_interior_1793106764196.jpg"
                  alt="Modern luxury interior of Blush Beauty Studio with arched mirrors and cream styling chairs"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#FAF7F5] to-[#F5EFEB]">
                  <Sparkles className="w-12 h-12 text-[#D47365] mb-3" />
                  <p className="font-display text-lg text-[#2A1E1A] font-semibold">{SALON_CONFIG.brandName}</p>
                  <p className="text-xs text-[#7A665E] mt-1">Luxury Salon & Spa Interior</p>
                </div>
              )}

              {/* Elegant floating caption badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#2A1E1A]">The Beverly Hills Suite</p>
                    <p className="text-[11px] text-[#7A665E]">Arch styling stations & private wash spa</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#D47365] tabular-nums">4.9 / 5.0</p>
                    <p className="text-[10px] text-[#7A665E]">Guest rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric / Value Strip placed in full-width row below hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#E8DED7]">
          {SALON_CONFIG.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 p-5 rounded-2xl border border-[#E8DED7] transition-all duration-200 hover:border-[#D47365]/40 hover:shadow-xs"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#B85649] mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[#63534D] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
