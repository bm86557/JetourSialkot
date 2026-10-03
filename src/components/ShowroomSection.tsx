import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import car1Img from '../assets/images/real/car1.jpeg';
import car2Img from '../assets/images/real/car2.jpeg';
import officeImg from '../assets/images/real/inside-office.jpeg';

interface ShowroomSectionProps {
  onOpenWhatsApp: (vehicleName?: string, customNote?: string) => void;
  onOpenBookingModal: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  onOpenWhatsApp,
  onOpenBookingModal,
}) => {
  const [activePhoto, setActivePhoto] = useState<{
    title: string;
    image: string;
    caption: string;
  } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Jetour X70 Plus Pearl White',
      image: car1Img || '/images/car1.jpeg',
      fallback: '/images/car1.jpeg',
      caption: 'White Jetour SUV parked inside the Airport Road Sialkot showroom delivery bay with sleek dynamic rear tail lights.',
    },
    {
      id: 2,
      title: 'Jetour X70 Plus Midnight Onyx',
      image: car2Img || '/images/car2.jpeg',
      fallback: '/images/car2.jpeg',
      caption: 'Executive gloss black Jetour SUV on reflective mirror showroom floor with quad sport exhaust finishers.',
    },
    {
      id: 3,
      title: 'Showroom Interior & JETOUR LIFE',
      image: officeImg || '/images/inside-office.jpeg',
      fallback: '/images/inside-office.jpeg',
      caption: 'Double-height showroom architectural lighting, digital display facade, and luxury customer consultation pavilion.',
    },
  ];

  return (
    <section id="gallery" className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6 relative overflow-hidden border-t border-white/[0.04]">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Experience Jetour up close.',
                className: 'text-primary font-normal',
              },
            ]}
            className="text-2xl sm:text-3xl md:text-5xl block"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'State-of-the-art delivery bays, consultation lounges, and genuine parts center.',
                className: 'text-gray-500 font-normal',
              },
            ]}
            className="text-xs sm:text-sm md:text-base block max-w-xl mx-auto"
            delayOffset={0.2}
          />
        </div>

        {/* 3 Authentic Photography Cards from jetoursialkot.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-[#141414] border border-white/10 hover:border-primary/50 shadow-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.fallback;
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[#E1E0CC]">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-primary/80 flex items-center gap-1 mt-0.5">
                    <span>Inspect view</span>
                    <span>→</span>
                  </p>
                </div>
                <span className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  ⤢
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dealership Location & Contact Details */}
        <div id="location" className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-14 border border-white/[0.06] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Cols: Address & Hours */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium block mb-2">
                  Visit Our Showroom
                </span>
                <h3 className="text-2xl sm:text-4xl font-normal text-[#E1E0CC] leading-tight">
                  Airport Road, near Classic School System, Sialkot
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                Experience test drives on open dual-carriageway roads, explore financing options with our banking partners, and consult our factory-trained product advisors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#181818] border border-white/[0.04]">
                  <div className="flex items-center gap-2 text-primary text-xs font-medium mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Working Hours</span>
                  </div>
                  <p className="text-xs text-[#E1E0CC]">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Sunday: By Appointment</p>
                </div>

                <div className="p-4 rounded-xl bg-[#181818] border border-white/[0.04]">
                  <div className="flex items-center gap-2 text-primary text-xs font-medium mb-1">
                    <Phone className="w-4 h-4" />
                    <span>Official UAN Helpline</span>
                  </div>
                  <a href="tel:03264140123" className="text-xs text-[#E1E0CC] font-mono hover:text-primary transition-colors block">
                    0326 4140123
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">Direct Showroom Reception</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Jetour+Sialkot+Airport+Road+near+Classic+School+System+Sialkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-[#eae8d8] text-black text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm text-[#E1E0CC] transition-colors cursor-pointer"
                >
                  <span>Book VIP Test Drive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Google Map Location */}
            <div
              id="contact"
              className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[320px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141414]"
            >
              {/* Google Map iframe */}
              <iframe
                title="Jetour Sialkot Location Map"
                src="https://maps.google.com/maps?q=Airport+Road+near+Classic+School+System+Sialkot&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[320px] border-0 filter contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Label Badge */}
              <div className="absolute top-3 left-3 z-10 pointer-events-none">
                <div className="bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2 text-[11px] font-medium text-[#E1E0CC] shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Jetour Sialkot · Airport Road</span>
                </div>
              </div>

              {/* Floating Directions Action */}
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href="https://maps.google.com/?q=Airport+Road+near+Classic+School+System+Sialkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/90 hover:bg-black text-[#E1E0CC] hover:text-white px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md transition-all shadow-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#121212] border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-normal text-[#E1E0CC]">
                {activePhoto.title}
              </h3>
              <button
                onClick={() => setActivePhoto(null)}
                className="text-gray-400 hover:text-white p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-400 max-w-lg">
                {activePhoto.caption}
              </p>
              <button
                onClick={() => {
                  const title = activePhoto.title;
                  setActivePhoto(null);
                  onOpenWhatsApp(title, `I was inspecting "${title}" in the showroom gallery.`);
                }}
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
