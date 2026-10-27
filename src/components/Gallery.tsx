import React, { useState } from 'react';
import { Eye, X, Sparkles, Filter } from 'lucide-react';
import { SALON_CONFIG, GalleryItem } from '../data/salonConfig';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'color', label: 'Color Transformations' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'makeup', label: 'Makeup Studio' },
    { id: 'bridal', label: 'Bridal Artistry' },
  ];

  const items =
    activeFilter === 'all'
      ? SALON_CONFIG.gallery
      : SALON_CONFIG.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-[#E8DED7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
            <span>Visual Showcase</span>
            <span aria-hidden="true" className="text-[#A39088]">·</span>
            <span className="text-[#7A665E] font-normal">Interactive Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E1A] mb-4">
            Curated Salon Work & Aesthetics
          </h2>
          <p className="text-base text-[#63534D] leading-relaxed">
            A high-resolution visual demonstration of how your salon’s transformations, private suites, and bridal looks can be showcased to potential clients.
          </p>
        </div>

        {/* Filter Controls (Segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#2A1E1A] text-white shadow-xs'
                  : 'bg-[#FAF7F5] text-[#63534D] hover:text-[#2A1E1A] hover:bg-[#F5EFEB] border border-[#E8DED7]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>

        {/* Gallery Transparency Notice */}
        <div className="mt-10 p-4 bg-[#FAF7F5] rounded-2xl border border-[#E8DED7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A665E]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D47365] shrink-0" />
            <span>
              <strong>Demonstration Portfolio:</strong> When deploying this website for your salon, we replace these with your authentic team photography, before/after results, and client permissions.
            </span>
          </div>
          <span className="text-[11px] text-[#A39088] shrink-0 font-medium">Click any photo to enlarge</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F5] rounded-3xl overflow-hidden shadow-2xl border border-[#3E2D27]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] w-full bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#B85649] font-semibold">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#2A1E1A]">
                  {selectedImage.title}
                </h3>
              </div>
              <a
                href="#booking"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A1E1A] hover:bg-[#3E2D27] rounded-full transition-colors whitespace-nowrap"
              >
                Inquire For This Style
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden border border-[#E8DED7] bg-[#F5EFEB] aspect-[4/3] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
    >
      {!error ? (
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF7F5]">
          <Sparkles className="w-8 h-8 text-[#D47365] mb-2" />
          <p className="text-xs font-semibold text-[#2A1E1A]">{item.title}</p>
        </div>
      )}

      {/* Hover Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <span className="text-[11px] uppercase tracking-wider text-[#F3D8D1] font-semibold">
          {item.categoryLabel}
        </span>
        <h4 className="font-display text-white text-base font-medium">
          {item.title}
        </h4>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80 font-medium">
          <Eye className="w-3.5 h-3.5 text-[#E28E80]" />
          <span>Click to view in detail</span>
        </div>
      </div>
    </div>
  );
};
