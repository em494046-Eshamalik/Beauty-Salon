import React from 'react';
import { Check, Clock, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { SALON_CONFIG, SalonPackage } from '../data/salonConfig';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-[#FAF7F5] border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
            <span>Curated Rituals</span>
            <span aria-hidden="true" className="text-[#A39088]">·</span>
            <span className="text-[#7A665E] font-normal">Bundled Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-4">
            Popular Care Packages
          </h2>
          <p className="text-base text-[#63534D] leading-relaxed">
            Combine complementary therapies for total renewal. These signature multi-service rituals offer
            exceptional value and an unhurried pampering session. Prices shown are customizable placeholders.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SALON_CONFIG.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => onSelectPackage(pkg.name)}
            />
          ))}
        </div>

        {/* Notice for Salon Pitching */}
        <div className="mt-12 text-center text-xs text-[#7A665E]">
          <span className="font-semibold text-[#2A1E1A]">Customizable Pricing & Offerings:</span> Real salon clients can set seasonal bundles (e.g. Valentine’s Day, Mother’s Day, Summer Glow) with one-click toggles.
        </div>
      </div>
    </section>
  );
};

interface PackageCardProps {
  pkg: SalonPackage;
  onSelect: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect }) => {
  const isPopular = pkg.isPopular;

  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
        isPopular
          ? 'bg-[#2A1E1A] text-white shadow-xl ring-2 ring-[#D47365]/80'
          : 'bg-white text-[#2A1E1A] border border-[#E8DED7] shadow-sm hover:shadow-md'
      }`}
    >
      {/* Top Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`text-[11px] uppercase tracking-widest font-semibold ${
              isPopular ? 'text-[#F3D8D1]' : 'text-[#B85649]'
            }`}
          >
            {isPopular ? 'Most Requested' : 'Signature Ritual'}
          </span>
          <div
            className={`flex items-center gap-1.5 text-xs ${
              isPopular ? 'text-[#FAF7F5]/80' : 'text-[#7A665E]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        <h3
          className={`font-display text-2xl font-semibold mb-2 ${
            isPopular ? 'text-white' : 'text-[#2A1E1A]'
          }`}
        >
          {pkg.name}
        </h3>

        <p
          className={`text-xs leading-relaxed mb-6 ${
            isPopular ? 'text-[#FAF7F5]/80' : 'text-[#63534D]'
          }`}
        >
          {pkg.tagline}
        </p>

        {/* Price Lockup */}
        <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#E8DED7]/30">
          <span
            className={`text-4xl font-display font-bold tabular-nums ${
              isPopular ? 'text-[#F3D8D1]' : 'text-[#2A1E1A]'
            }`}
          >
            {pkg.samplePrice}
          </span>
          {pkg.compareAtPrice && (
            <span
              className={`text-sm line-through ${
                isPopular ? 'text-white/50' : 'text-[#A39088]'
              }`}
            >
              {pkg.compareAtPrice}
            </span>
          )}
          <span
            className={`text-[10px] ml-1 uppercase tracking-wider ${
              isPopular ? 'text-white/70' : 'text-[#7A665E]'
            }`}
          >
            (Demo Price)
          </span>
        </div>

        {/* Included Services Checklist */}
        <div className="mb-8">
          <p
            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              isPopular ? 'text-white/90' : 'text-[#2A1E1A]'
            }`}
          >
            Included in this package:
          </p>
          <ul className="space-y-2.5">
            {pkg.includedServices.map((service, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isPopular ? 'text-[#E28E80]' : 'text-[#D47365]'
                  }`}
                />
                <span className={isPopular ? 'text-[#FAF7F5]' : 'text-[#63534D]'}>
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div>
        <p
          className={`text-[11px] italic mb-4 ${
            isPopular ? 'text-white/70' : 'text-[#7A665E]'
          }`}
        >
          Best for: {pkg.recommendedFor}
        </p>
        <button
          onClick={onSelect}
          className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99] ${
            isPopular
              ? 'bg-[#E28E80] text-[#1E1513] hover:bg-[#F3D8D1]'
              : 'bg-[#2A1E1A] text-white hover:bg-[#3E2D27]'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Select Package</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
