/**
 * Salon Website Configuration & Content
 * Easily editable by salon owners or web developers customizing this template.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'color' | 'makeup' | 'skincare' | 'nails' | 'bridal';
  categoryLabel: string;
  samplePrice: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
}

export interface SalonPackage {
  id: string;
  name: string;
  tagline: string;
  samplePrice: string;
  compareAtPrice?: string;
  duration: string;
  includedServices: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'makeup' | 'skincare' | 'nails' | 'bridal';
  categoryLabel: string;
  image: string;
  aspect: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceUsed: string;
  rating: number;
  date: string;
  quote: string;
  verifiedLabel: string;
}

export const SALON_CONFIG = {
  // Brand Identity
  brandName: 'Blush Beauty Studio',
  tagline: 'Your Beauty, Our Passion',
  shortBio:
    'A sanctuary of modern elegance providing bespoke hair styling, luxury color transformations, restorative skin therapies, and couture bridal artistry.',
  yearEstablished: '2021',

  // Contact & Location Details (Customizable placeholders for real salon clients)
  contact: {
    phone: '+1 (555) 234-5678',
    phoneRaw: '+15552345678',
    whatsapp: '+1 (555) 234-5678',
    whatsappNumber: '15552345678', // standard international format
    email: 'hello@blushbeautystudio.com',
    address: '142 Rosé Promenade, Suite 300',
    cityStateZip: 'Beverly Hills, CA 90210',
    fullAddress: '142 Rosé Promenade, Suite 300, Beverly Hills, CA 90210',
    hours: [
      { days: 'Monday – Friday', time: '9:00 AM – 7:30 PM' },
      { days: 'Saturday', time: '9:00 AM – 6:00 PM' },
      { days: 'Sunday', time: '10:00 AM – 4:00 PM (By Appointment)' },
    ],
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105825.29170566373!2d-118.47481180273438!3d34.07362000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus',
    socials: {
      instagram: 'https://instagram.com/blushbeautystudio.demo',
      facebook: 'https://facebook.com/blushbeautystudio.demo',
      pinterest: 'https://pinterest.com/blushbeautystudio.demo',
      tiktok: 'https://tiktok.com/@blushbeautystudio.demo',
    },
  },

  // Developer Pitch Note
  pitchNotice: {
    title: 'Client Pitch Demo',
    badge: 'Live Concept for Salon Owners',
    message:
      'This interactive website template is ready to be rebranded and launched for your salon. Colors, logos, services, staff profiles, pricing, and live booking/WhatsApp integrations can be customized in less than 48 hours.',
  },

  // Key Value Propositions
  highlights: [
    { label: 'Organic & Cruelty-Free', desc: 'Premium botanical formulations tailored to individual skin and hair health.' },
    { label: 'Master Specialists', desc: 'Industry-trained stylists and licensed medical-grade aestheticians.' },
    { label: 'Private Suite Experience', desc: 'Relax in private, sound-softened suites with artisanal refreshments.' },
    { label: 'Effortless Scheduling', desc: 'Instant WhatsApp reservations and responsive online appointment requests.' },
  ],

  // Services
  services: [
    {
      id: 'hair-styling',
      name: 'Hair Styling & Precision Haircuts',
      category: 'hair',
      categoryLabel: 'Hair Care',
      samplePrice: '$85+',
      duration: '60 – 75 mins',
      description:
        'Customized precision cuts, voluminous blowouts, and restorative silk press finishing tailored to hair texture and facial contours.',
      features: ['In-depth hair consultation', 'Scalp massage with essential oils', 'Luxury blowout & hot tool finishing'],
      image: '/src/assets/images/service_hair_styling_1793106763955.jpg',
    },
    {
      id: 'hair-coloring',
      name: 'Custom Hair Coloring & Balayage',
      category: 'color',
      categoryLabel: 'Coloring',
      samplePrice: '$165+',
      duration: '120 – 180 mins',
      description:
        'Dimensional hand-painted balayage, subtle sun-kissed babylights, gloss toners, and gentle ammonia-free root touch-ups.',
      features: ['Bond-building Olaplex therapy', 'Dimensional custom color blending', 'Post-color hydration glaze'],
      image: '/src/assets/images/service_hair_coloring_1793106789169.jpg',
    },
    {
      id: 'makeup-artistry',
      name: 'Signature Makeup Artistry',
      category: 'makeup',
      categoryLabel: 'Makeup',
      samplePrice: '$95+',
      duration: '45 – 60 mins',
      description:
        'Flawless red-carpet, gala, or soft-glam makeup utilizing luxury skincare prep, airbrush coverage, and silk lash enhancements.',
      features: ['Hyaluronic priming facial prep', 'Long-wear sweat & humidity formula', 'Custom luxury silk lashes included'],
      image: '/src/assets/images/service_makeup_artistry_1793106789244.jpg',
    },
    {
      id: 'facial-skincare',
      name: 'Rejuvenating Facials & Skincare',
      category: 'skincare',
      categoryLabel: 'Skincare',
      samplePrice: '$120+',
      duration: '60 – 90 mins',
      description:
        'Clinical yet indulgent facials including lymphatic drainage, oxygen infusion, gentle enzyme exfoliation, and LED light therapy.',
      features: ['Double cleanse & ultrasonic peel', 'Custom hydro-jelly active mask', 'Neck, shoulder & decollete massage'],
      image: '/src/assets/images/service_facial_skincare_1793106764596.jpg',
    },
    {
      id: 'manicure-pedicure',
      name: 'Luxury Manicure & Pedicure',
      category: 'nails',
      categoryLabel: 'Nail Art',
      samplePrice: '$65+',
      duration: '45 – 75 mins',
      description:
        'Pampering nail care featuring organic botanical sugar scrubs, warm paraffin wraps, cuticle therapy, and chip-free gel or BIAB overlay.',
      features: ['Sea salt soak & botanical scrub', 'Warm restorative paraffin mask', 'High-shine gel or non-toxic lacquer'],
      image: '/src/assets/images/service_manicure_pedicure_1793106765235.jpg',
    },
    {
      id: 'bridal-packages',
      name: 'Bridal & Special Occasion Packages',
      category: 'bridal',
      categoryLabel: 'Bridal',
      samplePrice: '$280+',
      duration: '150 – 210 mins',
      description:
        'Couture bridal package offering trial consultation, day-of wedding styling, veil placement, dewy waterproof makeup, and champagne service.',
      features: ['Complimentary preview trial', 'Touch-up emergency kit provided', 'On-site or private studio suite booking'],
      image: '/src/assets/images/service_bridal_package_1793106765714.jpg',
    },
  ] as ServiceItem[],

  // Popular Curated Packages
  packages: [
    {
      id: 'bridal-package',
      name: 'Bridal Glamour Experience',
      tagline: 'Flawless elegance for your most memorable celebration',
      samplePrice: '$350',
      compareAtPrice: '$420',
      duration: '3.5 Hours',
      includedServices: [
        'Bridal Hair Trial & Wedding Day Coiffure',
        'HD Airbrush Makeup with Silk Mink Lashes',
        'Gel Manicure & Rose Petal Pedicure',
        'Complimentary Touch-up Kit & Champagne',
      ],
      recommendedFor: 'Brides, engagement shoots, and gala red carpet events',
      isPopular: true,
    },
    {
      id: 'hair-care-package',
      name: 'Total Hair Revival Ritual',
      tagline: 'Deep restoration, master styling and lustrous shine',
      samplePrice: '$195',
      compareAtPrice: '$240',
      duration: '2 Hours',
      includedServices: [
        'Scalp Detox & Deep Conditioning Mask',
        'Precision Cut & Customized Silhouette Styling',
        'Clear Gloss Shine Treatment or Tone Refresh',
        'Take-home Salon Care Travel Duo',
      ],
      recommendedFor: 'Tired, heat-styled, or post-color hair needing vitality',
      isPopular: false,
    },
    {
      id: 'skin-glow-package',
      name: 'Radiance Skin Glow Sanctuary',
      tagline: 'Revitalize dull skin with intense hydration and light therapy',
      samplePrice: '$175',
      compareAtPrice: '$215',
      duration: '90 Mins',
      includedServices: [
        'Oxygen Glow Infusion & Ultrasonic Exfoliation',
        'Custom Collagen Hydro-Jelly Mask',
        'Celluma LED Cellular Light Therapy',
        'Relaxing Cold-Globe Lymphatic Facial Massage',
      ],
      recommendedFor: 'Instant luminous, dewy skin before events or seasonal resets',
      isPopular: false,
    },
  ] as SalonPackage[],

  // Gallery
  gallery: [
    {
      id: 'gal-1',
      title: 'Luxury Salon Styling Suite',
      category: 'hair',
      categoryLabel: 'Salon Interior',
      image: '/src/assets/images/hero_salon_interior_1793106764196.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: 'gal-2',
      title: 'Silk Waves & Custom Layering',
      category: 'hair',
      categoryLabel: 'Hair Styling',
      image: '/src/assets/images/service_hair_styling_1793106763955.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'gal-3',
      title: 'Honey Balayage Dimension',
      category: 'color',
      categoryLabel: 'Color Transformation',
      image: '/src/assets/images/service_hair_coloring_1793106789169.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'gal-4',
      title: 'Dewy Botanical Facial Therapy',
      category: 'skincare',
      categoryLabel: 'Skincare',
      image: '/src/assets/images/service_facial_skincare_1793106764596.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'gal-5',
      title: 'Blush Manicure & Delicate Gold Accents',
      category: 'nails',
      categoryLabel: 'Nail Studio',
      image: '/src/assets/images/service_manicure_pedicure_1793106765235.jpg',
      aspect: 'col-span-1',
    },
    {
      id: 'gal-6',
      title: 'Couture Bridal Veil & Fine Art Hair',
      category: 'bridal',
      categoryLabel: 'Bridal Artistry',
      image: '/src/assets/images/service_bridal_package_1793106765714.jpg',
      aspect: 'col-span-1 md:col-span-2',
    },
    {
      id: 'gal-7',
      title: 'Vanity Makeup Glamour & Lashes',
      category: 'makeup',
      categoryLabel: 'Makeup Studio',
      image: '/src/assets/images/service_makeup_artistry_1793106789244.jpg',
      aspect: 'col-span-1',
    },
  ] as GalleryItem[],

  // Demo Testimonials (clearly flagged as demo placeholders)
  testimonials: [
    {
      id: 'test-1',
      clientName: 'Sophia Montgomery',
      serviceUsed: 'Bridal Glamour Experience',
      rating: 5,
      date: 'Recent Demo Review',
      quote:
        '“The team made my wedding morning feel completely stress-free. My hair and makeup stayed impeccable all through the evening tears and dancing. A truly bespoke experience.”',
      verifiedLabel: 'Verified Demo Guest',
    },
    {
      id: 'test-2',
      clientName: 'Elena Vance-Hayes',
      serviceUsed: 'Custom Balayage & Silk Cut',
      rating: 5,
      date: 'Recent Demo Review',
      quote:
        '“Finding a colorist who understands nuanced warm blonde tones without damaging curls is rare. The private suite and personalized attention were next-level.”',
      verifiedLabel: 'Verified Demo Guest',
    },
    {
      id: 'test-3',
      clientName: 'Chloe Bennett',
      serviceUsed: 'Radiance Skin Glow Sanctuary',
      rating: 5,
      date: 'Recent Demo Review',
      quote:
        '“The organic hydro-facial gave my skin a glow I had not seen in years. Booking on WhatsApp took two minutes, and the welcoming staff made me feel at home immediately.”',
      verifiedLabel: 'Verified Demo Guest',
    },
  ] as TestimonialItem[],
};
