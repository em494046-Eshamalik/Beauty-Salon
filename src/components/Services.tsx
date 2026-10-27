import React, { useState } from 'react';
import { Clock, Check, Calendar, Sparkles } from 'lucide-react';
import { SALON_CONFIG, ServiceItem } from '../data/salonConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'color', label: 'Color & Balayage' },
    { id: 'skincare', label: 'Facials & Skincare' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'bridal', label: 'Bridal' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SALON_CONFIG.services
      : SALON_CONFIG.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF7F5] border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
            <span>Curated Treatments</span>
            <span aria-hidden="true" className="text-[#A39088]">·</span>
            <span className="text-[#7A665E] font-normal">Customizable Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-4">
            Signature Services & Therapies
          </h2>
          <p className="text-base text-[#63534D] leading-relaxed">
            Every appointment begins with a personal aesthetic consultation. Browse our core offerings below.
            All prices and durations shown are demo estimates and can be configured to match your exact salon price list.
          </p>
        </div>

        {/* Interactive Filter Tabs (functional segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#2A1E1A] text-white shadow-xs'
                    : 'bg-white text-[#63534D] hover:text-[#2A1E1A] hover:bg-[#F5EFEB] border border-[#E8DED7]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService(service.name)}
            />
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DED7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A665E]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#D47365] shrink-0" />
            <span>
              <strong>Need a customized consultation or group bridal booking?</strong> We accommodate custom styling, off-site wedding parties, and private salon buyouts.
            </span>
          </div>
          <button
            onClick={() => onSelectService('Custom Consultation')}
            className="px-4 py-2 text-xs font-semibold text-[#2A1E1A] hover:text-[#D47365] bg-[#FAF7F5] border border-[#E8DED7] rounded-full hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Inquire About Custom Bookings
          </button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-[#E8DED7] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#D47365]/50">
      {/* Visual Asset (60% height visual ratio) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EFEB]">
        {!imgError ? (
          <img
            src={service.image}
            alt={service.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF7F5]">
            <Sparkles className="w-8 h-8 text-[#D47365] mb-2" />
            <p className="font-display text-sm font-semibold text-[#2A1E1A]">{service.name}</p>
          </div>
        )}

        {/* Category kicker & sample price tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-[#2A1E1A] shadow-2xs">
          {service.categoryLabel}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title & Price Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-[#2A1E1A] leading-snug group-hover:text-[#D47365] transition-colors">
            {service.name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-lg font-bold font-sans text-[#2A1E1A] tabular-nums">
              {service.samplePrice}
            </span>
            <div className="text-[10px] text-[#A39088] font-normal">sample price</div>
          </div>
        </div>

        {/* Duration metadata without pills */}
        <div className="flex items-center gap-1.5 text-xs text-[#7A665E] mb-3">
          <Clock className="w-3.5 h-3.5 text-[#D47365]" />
          <span>Approx. {service.duration}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-[#63534D] leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        {/* Feature Highlights */}
        <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#E8DED7]/60 text-[11px] text-[#7A665E]">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#D47365] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Single-Line Action Button */}
        <button
          onClick={onSelect}
          className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] group-hover:text-white bg-[#F5EFEB] group-hover:bg-[#2A1E1A] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D47365] group-hover:text-[#F3D8D1] transition-colors" />
          <span>Book This Service</span>
        </button>
      </div>
    </div>
  );
};
