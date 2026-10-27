import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import { SALON_CONFIG } from '../data/salonConfig';

interface BookingFormProps {
  selectedServicePreset?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedServicePreset }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    bookingRef: string;
    name: string;
    phone: string;
    service: string;
    date: string;
    timeSlot: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  // Sync preset when changed from services or packages
  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  // Set default min date to tomorrow
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Basic phone validation (at least 8 digits)
    const phoneClean = phoneNumber.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      newErrors.phoneNumber = 'Please enter a valid telephone number.';
    }

    if (!service) {
      newErrors.service = 'Please select a service or package.';
    }

    if (!date) {
      newErrors.date = 'Please pick a preferred date.';
    }

    if (!timeSlot) {
      newErrors.timeSlot = 'Please choose a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = 'BLUSH-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        bookingRef,
        name: fullName,
        phone: phoneNumber,
        service,
        date,
        timeSlot,
      });
    }, 600);
  };

  const handleWhatsAppInquiry = () => {
    // Generate pre-filled WhatsApp message
    const greeting = `Hello ${SALON_CONFIG.brandName}!`;
    const details = [
      greeting,
      fullName ? `Name: ${fullName}` : null,
      service ? `Requested Service: ${service}` : `Service: General Inquiry`,
      date ? `Preferred Date: ${date}` : null,
      timeSlot ? `Preferred Time: ${timeSlot}` : null,
      notes ? `Notes: ${notes}` : null,
      `I would like to inquire about appointment availability. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${SALON_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      details
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyBookingDetails = () => {
    if (!submittedData) return;
    const summary = `Blush Beauty Studio Appointment Request\nRef: ${submittedData.bookingRef}\nGuest: ${submittedData.name}\nService: ${submittedData.service}\nDate: ${submittedData.date} (${submittedData.timeSlot})\nPhone: ${submittedData.phone}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-20 bg-[#FAF7F5] border-b border-[#E8DED7] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & WhatsApp Action */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B85649] mb-3">
              <span>Reservations</span>
              <span aria-hidden="true" className="text-[#A39088]">·</span>
              <span className="text-[#7A665E] font-normal">Fast Confirmation</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#2A1E1A] mb-4">
              Request Your Appointment
            </h2>

            <p className="text-base text-[#63534D] leading-relaxed mb-6">
              Reserve your personalized session with our master stylists and aestheticians.
              Submit the form to request your preferred date and time, or chat instantly via WhatsApp for same-day openings.
            </p>

            {/* Direct WhatsApp Callout Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8DED7] shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#2A1E1A]">
                    Instant WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-[#7A665E]">Fastest response for bridal or same-day inquiries</p>
                </div>
              </div>

              <p className="text-xs text-[#63534D] leading-relaxed mb-4">
                Prefer chatting directly? Click below to send your appointment details straight to our salon WhatsApp team.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({SALON_CONFIG.contact.phone})</span>
              </button>
            </div>

            {/* Transparency Note */}
            <div className="p-4 bg-white/70 rounded-2xl border border-[#E8DED7] text-xs text-[#7A665E] space-y-1.5">
              <div className="flex items-center gap-2 text-[#2A1E1A] font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D47365]" />
                <span>Demo Architecture Note</span>
              </div>
              <p className="leading-relaxed">
                This form prepares appointment data for direct dispatch to WhatsApp, an email notification service, or backend booking platforms like Square Appointments, Mindbody, or Fresha.
              </p>
            </div>
          </div>

          {/* Right Column: Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DED7] shadow-lg">
              {submittedData ? (
                /* Confirmation Screen (Honest & transparent) */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F5] border border-[#E8DED7] flex items-center justify-center text-[#D47365] mx-auto sm:mx-0">
                    <CheckCircle2 className="w-6 h-6 text-[#D47365]" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B85649]">
                      Request Received
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#2A1E1A] mt-1">
                      Thank You, {submittedData.name}!
                    </h3>
                    <p className="text-sm text-[#63534D] mt-2 leading-relaxed">
                      Your appointment request has been recorded with reference{' '}
                      <strong className="text-[#2A1E1A] font-mono">{submittedData.bookingRef}</strong>.
                      Our salon concierge will reach out via phone or WhatsApp to finalize your slot.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-[#E8DED7] space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-[#E8DED7]">
                      <span className="text-[#7A665E]">Service / Package:</span>
                      <span className="font-semibold text-[#2A1E1A]">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E8DED7]">
                      <span className="text-[#7A665E]">Preferred Date:</span>
                      <span className="font-semibold text-[#2A1E1A]">{submittedData.date}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E8DED7]">
                      <span className="text-[#7A665E]">Time Slot:</span>
                      <span className="font-semibold text-[#2A1E1A]">{submittedData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#7A665E]">Contact Phone:</span>
                      <span className="font-semibold text-[#2A1E1A]">{submittedData.phone}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>

                    <button
                      onClick={copyBookingDetails}
                      className="py-3 px-4 bg-[#FAF7F5] hover:bg-[#F5EFEB] text-[#2A1E1A] border border-[#E8DED7] font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#7A665E]" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSubmittedData(null)}
                      className="py-3 px-4 text-xs font-medium text-[#7A665E] hover:text-[#2A1E1A] transition-colors"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Booking Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-[#E8DED7] pb-4 mb-2">
                    <h3 className="font-display text-xl font-semibold text-[#2A1E1A]">
                      Select Details
                    </h3>
                    <p className="text-xs text-[#7A665E] mt-0.5">
                      Fill out the fields below to verify stylist availability.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A39088]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="booking-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Victoria Sterling"
                        className={`w-full pl-10 pr-4 py-2.5 bg-[#FAF7F5] border rounded-xl text-sm text-[#2A1E1A] placeholder-[#A39088] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E8DED7]'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                    >
                      Phone Number (Mobile / WhatsApp) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A39088]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="booking-phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                        }}
                        placeholder="e.g. (555) 234-5678"
                        className={`w-full pl-10 pr-4 py-2.5 bg-[#FAF7F5] border rounded-xl text-sm text-[#2A1E1A] placeholder-[#A39088] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all ${
                          errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#E8DED7]'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Selected Service or Package */}
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                    >
                      Selected Treatment or Package *
                    </label>
                    <select
                      id="booking-service"
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors({ ...errors, service: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#FAF7F5] border rounded-xl text-sm text-[#2A1E1A] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all ${
                        errors.service ? 'border-red-400' : 'border-[#E8DED7]'
                      }`}
                    >
                      <option value="">-- Choose a service or package --</option>
                      <optgroup label="Core Salon Services">
                        {SALON_CONFIG.services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} ({s.samplePrice})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Popular Packages">
                        {SALON_CONFIG.packages.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.samplePrice})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Custom">
                        <option value="Custom Consultation">Custom Aesthetic Consultation</option>
                        <option value="Bridal Party Group Inquiry">Bridal Party Group Inquiry</option>
                      </optgroup>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                      >
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          id="booking-date"
                          type="date"
                          min={todayStr}
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            if (errors.date) setErrors({ ...errors, date: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 bg-[#FAF7F5] border rounded-xl text-sm text-[#2A1E1A] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all ${
                            errors.date ? 'border-red-400' : 'border-[#E8DED7]'
                          }`}
                        />
                      </div>
                      {errors.date && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                      >
                        Preferred Time Slot *
                      </label>
                      <select
                        id="booking-time"
                        value={timeSlot}
                        onChange={(e) => {
                          setTimeSlot(e.target.value);
                          if (errors.timeSlot) setErrors({ ...errors, timeSlot: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 bg-[#FAF7F5] border rounded-xl text-sm text-[#2A1E1A] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all ${
                          errors.timeSlot ? 'border-red-400' : 'border-[#E8DED7]'
                        }`}
                      >
                        <option value="">-- Choose time slot --</option>
                        <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                      </select>
                      {errors.timeSlot && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.timeSlot}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Notes & Special Requests */}
                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2A1E1A] mb-1.5"
                    >
                      Special Notes (Optional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Previous hair color history, sensitive skin allergies, event date..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F5] border border-[#E8DED7] rounded-xl text-sm text-[#2A1E1A] placeholder-[#A39088] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D47365]/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A1E1A] hover:bg-[#3E2D27] active:scale-[0.99] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#F3D8D1]" />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full sm:w-auto py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
