import React, { useState } from 'react';
import { Award, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 bg-white border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8DED7] shadow-xl aspect-[4/5] bg-[#F5EFEB]">
              {!imgError ? (
                <img
                  src="/src/assets/images/service_hair_styling_1793106763955.jpg"
                  alt="Stylist providing personal care at Blush Beauty Studio"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#FAF7F5]">
                  <Sparkles className="w-10 h-10 text-[#D47365] mb-2" />
                  <p className="font-display font-semibold text-[#2A1E1A]">Artistry in Motion</p>
                </div>
              )}

              {/* Floating Philosophy Card */}
              <div className="absolute -bottom-1 -right-1 left-8 bg-[#2A1E1A] text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl border-t border-l border-[#3E2D27]">
                <p className="text-xs uppercase tracking-widest text-[#E28E80] font-semibold mb-1">
                  Our Philosophy
                </p>
                <p className="font-display text-base text-[#FAF7F5] italic leading-snug">
                  “Beauty is not created by masking who you are; it is revealed by honoring your natural texture and grace.”
                </p>
              </div>
            </div>
          </div>

          {/* Text Editorial Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
              <span>About Blush Beauty Studio</span>
              <span aria-hidden="true" className="text-[#A39088]">·</span>
              <span className="text-[#7A665E] font-normal">Our Craft & Standards</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-6">
              A Dedicated Space for Personalized Transformation
            </h2>

            <p className="text-base text-[#63534D] leading-relaxed mb-4">
              {SALON_CONFIG.brandName} was conceived as an alternative to rushed, high-volume commercial salons.
              Every service is conducted in an open, sunlit environment characterized by acoustic warmth, curated floral aromas, and private styling nooks.
            </p>

            <p className="text-sm text-[#7A665E] leading-relaxed mb-8">
              We focus on hair integrity and dermal vitality. Rather than aggressive quick fixes, our stylists and aestheticians
              pair clinically verified techniques with gentle, botanical-rich formulations. Whether you are maintaining your signature look,
              planning a bridal transformation, or taking an afternoon for self-care, our guests receive unhurried, undivided attention.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E8DED7]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D47365]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">Hospital-Grade Hygiene</h4>
                  <p className="text-xs text-[#7A665E] mt-0.5">Autoclave-sterilized tools and single-client implements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#D47365]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">Clean Beauty Formulary</h4>
                  <p className="text-xs text-[#7A665E] mt-0.5">Paraben-free, sulfate-free, and ethically sourced hair & skin lines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#D47365]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">Transparent Consultations</h4>
                  <p className="text-xs text-[#7A665E] mt-0.5">Clear price expectations and honest assessments prior to work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#D47365]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">Trained Craftspeople</h4>
                  <p className="text-xs text-[#7A665E] mt-0.5">Continuous education in European color and advanced aesthetics.</p>
                </div>
              </div>
            </div>

            {/* Transparent Demo Notice */}
            <div className="mt-8 p-3.5 bg-[#FAF7F5] rounded-xl border border-[#E8DED7] text-[11px] text-[#7A665E]">
              <span className="font-semibold text-[#2A1E1A]">Note for Salon Owners:</span> This "About" story is customized with your salon’s founding history, interior photos, team bio cards, and unique service ethos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
