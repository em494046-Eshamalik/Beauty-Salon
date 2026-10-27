import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const PitchBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showPitchModal, setShowPitchModal] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="bg-[#2A1E1A] text-[#FAF7F5] border-b border-[#3E2D27] text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-medium text-[#E28E80]">
              <Sparkles className="w-3.5 h-3.5 text-[#E28E80] shrink-0" />
              <span>Salon Owner Live Demo</span>
            </span>
            <span className="text-[#A39088] hidden sm:inline">·</span>
            <span className="text-[#E8DFD8] hidden sm:inline">
              Interactive web development showcase ready to customize with your salon's brand & WhatsApp booking
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowPitchModal(true)}
              className="inline-flex items-center gap-1 text-[#F3D8D1] hover:text-white underline underline-offset-2 font-medium cursor-pointer transition-colors"
            >
              <span>Salon Owner Features</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#A39088] hover:text-[#FAF7F5] transition-colors rounded"
              aria-label="Dismiss demo banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {showPitchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF7F5] text-[#2A1E1A] rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E8DED7] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowPitchModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#7A665E] hover:bg-[#F5EFEB] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[#B85649] font-semibold">Web Development Pitch</span>
              <h3 className="text-xl font-display font-semibold text-[#2A1E1A] mt-1">
                Custom Website for Your Beauty Salon
              </h3>
            </div>

            <p className="text-sm text-[#63534D] leading-relaxed mb-4">
              {SALON_CONFIG.pitchNotice.message}
            </p>

            <div className="space-y-2.5 mb-6 bg-white p-4 rounded-xl border border-[#E8DED7]">
              <div className="flex items-start gap-2.5 text-xs text-[#2A1E1A]">
                <CheckCircle2 className="w-4 h-4 text-[#D47365] shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp Booking:</strong> Clients book directly to your WhatsApp with pre-filled service & date.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#2A1E1A]">
                <CheckCircle2 className="w-4 h-4 text-[#D47365] shrink-0 mt-0.5" />
                <span><strong>Easy Menu & Price Updates:</strong> Edit prices, packages, and seasonal offers in minutes.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#2A1E1A]">
                <CheckCircle2 className="w-4 h-4 text-[#D47365] shrink-0 mt-0.5" />
                <span><strong>Ultra-Fast Mobile First:</strong> Over 78% of beauty salon visitors are on mobile devices.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#2A1E1A]">
                <CheckCircle2 className="w-4 h-4 text-[#D47365] shrink-0 mt-0.5" />
                <span><strong>Google Maps & Local SEO:</strong> Optimized so nearby clients find you effortlessly.</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPitchModal(false)}
                className="px-4 py-2 text-xs font-medium text-[#7A665E] hover:text-[#2A1E1A] transition-colors"
              >
                Close Preview
              </button>
              <a
                href="#contact"
                onClick={() => setShowPitchModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#2A1E1A] hover:bg-[#3E2D27] rounded-lg transition-colors shadow-xs"
              >
                Explore Demo Sections
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
