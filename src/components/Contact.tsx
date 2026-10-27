import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

export const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello ${SALON_CONFIG.brandName}, I would like to inquire about appointments and services.`);
    window.open(`https://wa.me/${SALON_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
            <span>Location & Inquiries</span>
            <span aria-hidden="true" className="text-[#A39088]">·</span>
            <span className="text-[#7A665E] font-normal">Visit Our Studio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-4">
            Connect With Our Concierge
          </h2>
          <p className="text-base text-[#63534D] leading-relaxed">
            Conveniently situated in Beverly Hills with valet parking and private client entrances.
            Drop by for a consultation, give us a call, or send a message anytime.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F5] rounded-3xl p-8 border border-[#E8DED7] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-[#2A1E1A]">
                Studio Coordinates
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E8DED7] flex items-center justify-center shrink-0 text-[#D47365]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">
                    Studio Address
                  </p>
                  <p className="text-sm text-[#63534D] mt-0.5">
                    {SALON_CONFIG.contact.address}
                  </p>
                  <p className="text-sm text-[#63534D]">
                    {SALON_CONFIG.contact.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E8DED7] flex items-center justify-center shrink-0 text-[#D47365]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">
                    Phone Inquiries
                  </p>
                  <a
                    href={`tel:${SALON_CONFIG.contact.phoneRaw}`}
                    className="text-sm text-[#2A1E1A] hover:text-[#D47365] font-medium transition-colors block mt-0.5"
                  >
                    {SALON_CONFIG.contact.phone}
                  </a>
                  <p className="text-xs text-[#7A665E]">Direct salon front desk</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E8DED7] flex items-center justify-center shrink-0 text-[#D47365]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A]">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${SALON_CONFIG.contact.email}`}
                    className="text-sm text-[#2A1E1A] hover:text-[#D47365] transition-colors block mt-0.5"
                  >
                    {SALON_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#E8DED7]">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E8DED7] flex items-center justify-center shrink-0 text-[#D47365]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5">
                    Opening Hours
                  </p>
                  <div className="space-y-1 text-xs">
                    {SALON_CONFIG.contact.hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-[#63534D]">
                        <span>{h.days}:</span>
                        <span className="font-medium text-[#2A1E1A]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button & Socials */}
            <div className="pt-6 border-t border-[#E8DED7] space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#7A665E] pt-1">
                <span>Follow our latest styles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={SALON_CONFIG.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[#2A1E1A] hover:text-[#D47365] bg-white rounded-lg border border-[#E8DED7] transition-colors"
                    aria-label="Instagram profile placeholder"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={SALON_CONFIG.contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[#2A1E1A] hover:text-[#D47365] bg-white rounded-lg border border-[#E8DED7] transition-colors"
                    aria-label="Facebook page placeholder"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-3xl overflow-hidden border border-[#E8DED7] bg-[#F5EFEB] h-full min-h-[360px] shadow-xs relative">
              <iframe
                title="Salon Location Google Map"
                src={SALON_CONFIG.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-2xl border border-[#E8DED7] shadow-sm max-w-xs pointer-events-none">
                <p className="text-xs font-semibold text-[#2A1E1A]">{SALON_CONFIG.brandName}</p>
                <p className="text-[11px] text-[#7A665E]">{SALON_CONFIG.contact.fullAddress}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A665E] px-1">
              <span>Interactive Google Map Embed placeholder</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SALON_CONFIG.contact.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#D47365] hover:underline font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
