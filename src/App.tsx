/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PitchBanner } from './components/PitchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle, Calendar } from 'lucide-react';
import { SALON_CONFIG } from './data/salonConfig';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${SALON_CONFIG.brandName}! I am viewing your website demo and would like to inquire about booking an appointment.`
    );
    window.open(`https://wa.me/${SALON_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2A1E1A] selection:bg-[#F3D8D1] selection:text-[#2A1E1A]">
      {/* Pitch Demo Bar for prospective salon owners */}
      <PitchBanner />

      {/* Top Bar Contract Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreClick={scrollToServices}
        />

        {/* 2. Services Section */}
        <Services onSelectService={(serviceName) => scrollToBooking(serviceName)} />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Popular Curated Packages */}
        <Packages onSelectPackage={(pkgName) => scrollToBooking(pkgName)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. High-Fidelity Gallery Showcase */}
        <Gallery />

        {/* 7. Demo Testimonials Section */}
        <Testimonials />

        {/* 8. Interactive Appointment Booking Form & WhatsApp */}
        <BookingForm selectedServicePreset={selectedService} />

        {/* 9. Contact, Hours & Google Map */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Discrete WhatsApp Concierge Button (adhering strictly to mobile budget) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/50"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Appointment Concierge"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
            WhatsApp Concierge
          </span>
        </button>
      </div>
    </div>
  );
}
