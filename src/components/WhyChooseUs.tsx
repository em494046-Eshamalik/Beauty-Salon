import React from 'react';
import { UserCheck, Sparkles, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Personalized Consultations',
      desc: 'We never apply cookie-cutter styling. Every visit begins with an in-depth diagnosis of your hair texture, lifestyle, and facial balance.',
    },
    {
      icon: Heart,
      title: 'Comfortable & Calm Atmosphere',
      desc: 'Escape noisy mass salons. Enjoy acoustically softened spaces, organic botanical herbal tea, and peaceful private styling suites.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Customer Care',
      desc: 'Licensed master cosmetologists and certified skin therapists dedicated to meticulous sanitation, hair health, and transparent guidance.',
    },
    {
      icon: MessageCircle,
      title: 'Seamless WhatsApp & Online Booking',
      desc: 'Reserve your appointment in seconds via direct WhatsApp chat or our responsive booking engine with immediate calendar verification.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F5] border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
              <span>The Blush Difference</span>
              <span aria-hidden="true" className="text-[#A39088]">·</span>
              <span className="text-[#7A665E] font-normal">Guest First Standard</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-6">
              Why Discerning Guests Choose Our Studio
            </h2>
            <p className="text-base text-[#63534D] leading-relaxed mb-8">
              A salon visit should be the highlight of your week—not a stressful rush.
              We combine artisan hair craft with hospitality standards that ensure you leave feeling revitalized, confident, and celebrated.
            </p>

            <div className="p-6 bg-white rounded-2xl border border-[#E8DED7] shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-display font-bold text-[#D47365] tabular-nums">
                  98%
                </div>
                <div className="text-xs text-[#63534D] leading-snug">
                  Of our guests rebook their seasonal maintenance before departing our studio.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#E8DED7] hover:border-[#D47365]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center text-[#D47365] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#2A1E1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#63534D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
