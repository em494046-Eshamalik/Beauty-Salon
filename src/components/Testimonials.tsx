import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
            <span>Guest Experiences</span>
            <span aria-hidden="true" className="text-[#A39088]">·</span>
            <span className="text-[#7A665E] font-normal">Demonstration Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-4">
            Words From Our Cherished Guests
          </h2>
          <p className="text-base text-[#63534D] leading-relaxed">
            Discover what our guests love about their visits. The testimonials below illustrate how authentic reviews
            from your Google Business profile, Fresha, or Yelp can be showcased on your website.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SALON_CONFIG.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#FAF7F5] rounded-3xl p-8 border border-[#E8DED7] flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Demo Disclosure Flag */}
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-semibold text-[#B85649] bg-white/80 px-2.5 py-1 rounded-md border border-[#E8DED7] mb-5">
                  <Sparkles className="w-3 h-3 text-[#D47365]" />
                  <span>{test.verifiedLabel}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${test.rating} out of 5 stars`}>
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D47365] text-[#D47365]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#2A1E1A] leading-relaxed italic mb-6">
                  {test.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#E8DED7]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#2A1E1A]">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-[#7A665E]">{test.serviceUsed}</p>
                </div>
                <Quote className="w-6 h-6 text-[#E8DED7]" />
              </div>
            </div>
          ))}
        </div>

        {/* Pitch Transparency Callout */}
        <div className="mt-12 p-4 bg-[#FAF7F5] rounded-2xl border border-[#E8DED7] text-center text-xs text-[#7A665E]">
          <span className="font-semibold text-[#2A1E1A]">Pitch Feature Note:</span> We can connect this section to automatically stream your live 5-star Google Reviews or embed verified client testimonials with photos.
        </div>
      </div>
    </section>
  );
};
