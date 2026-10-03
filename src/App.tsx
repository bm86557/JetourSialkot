import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ShowroomSection } from './components/ShowroomSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

const DEALER_PHONE = '923264140123';

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${DEALER_PHONE}?text=${encodeURIComponent(message)}`;

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Jetour Dashing');

  const openBookingModal = (vehicleName?: string) => {
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    }
    setIsBookingModalOpen(true);
  };

  const openWhatsApp = (vehicleName?: string, customNote?: string) => {
    const intro = vehicleName
      ? `I am inquiring about the ${vehicleName}. Please share booking details, delivery schedule, and test drive availability.`
      : 'I would like to inquire about your vehicle lineup, test drive availability, and booking procedure at your Airport Road showroom.';

    const note = customNote ? ` Note: ${customNote}` : '';
    const message = `Hello Jetour Sialkot, ${intro}${note}`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-primary selection:text-black">
      {/* SECTION 1: HERO */}
      <HeroSection
        onOpenBookingModal={openBookingModal}
        onOpenWhatsApp={openWhatsApp}
      />

      {/* SECTION 2: ABOUT */}
      <AboutSection />

      {/* SECTION 3: SHOWROOM GALLERY & LOCATION */}
      <ShowroomSection
        onOpenWhatsApp={openWhatsApp}
        onOpenBookingModal={() => openBookingModal()}
      />

      {/* FOOTER */}
      <FooterSection />

      {/* FLOATING WHATSAPP CONCIERGE */}
      <FloatingWhatsAppButton onClick={() => openWhatsApp()} />

      {/* VIP TEST DRIVE & BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialVehicle={selectedVehicle}
      />
    </div>
  );
}
