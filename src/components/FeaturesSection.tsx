import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import car1Thumb from '../assets/images/real/car1.jpeg';
import car2Thumb from '../assets/images/real/car2.jpeg';
import officeThumb from '../assets/images/real/inside-office.jpeg';

interface FeaturesSectionProps {
  onOpenWhatsApp: (vehicleName?: string, customNote?: string) => void;
  onOpenBookingModal: (vehicleName?: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onOpenWhatsApp,
  onOpenBookingModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const featureCards = [
    {
      type: 'video',
      videoUrl:
        'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
      title: 'Your journey begins on Airport Road.',
      badge: 'Airport Rd 3S Center',
    },
    {
      type: 'content',
      number: '01',
      title: 'Jetour Dashing.',
      vehicleName: 'Jetour Dashing',
      tagline: 'Futuristic Crossover Built for Urban Elegance',
      price: 'PKR 7,899,000',
      icon: car1Thumb || '/images/car1.jpeg',
      items: [
        '1.5L Turbo Petrol (154 hp · 230 Nm torque)',
        '6-Speed Dual Clutch Transmission (DCT)',
        'Concealed flush door handles & 12.8" HD screen',
        'Ex-Factory PKR 7,899,000 · Booking PKR 1,500,000',
      ],
    },
    {
      type: 'content',
      number: '02',
      title: 'Jetour X70 Plus.',
      vehicleName: 'Jetour X70 Plus',
      tagline: 'Refined 7-Seater Luxury SUV for Family Travel',
      price: 'PKR 8,299,000',
      icon: car2Thumb || '/images/car2.jpeg',
      items: [
        'Ergonomic 7-passenger seating with fold-flat 3rd row',
        'Dual 10.25-inch panoramic connected cockpit displays',
        'Multi-zone digital climate control & panoramic glass roof',
        'Ex-Factory PKR 8,299,000 · Delivery 30-45 Days',
      ],
    },
    {
      type: 'content',
      number: '03',
      title: 'Jetour T2 Traveler.',
      vehicleName: 'Jetour T2 Traveler',
      tagline: 'Intelligent All-Terrain 4x4 with BorgWarner XWD',
      price: 'PKR 14,999,000',
      icon: officeThumb || '/images/inside-office.jpeg',
      items: [
        '2.0L Kunpeng Turbo (254 hp · 390 Nm output)',
        'BorgWarner 6th Gen intelligent 4WD with eLSD',
        '700 mm water wading capability & Qualcomm 8155 chip',
        'Ex-Factory PKR 14,999,000 · Booking PKR 3,000,000',
      ],
    },
  ];

  return (
    <section id="features" className="min-h-screen bg-black relative py-20 sm:py-28 md:py-36 px-4 md:px-6 overflow-hidden">
      {/* Subtle Noise Texture Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center">
        {/* Header Text */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-2">
          <div>
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade engineering for visionary journeys.',
                  className: 'text-primary font-normal',
                },
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block"
            />
          </div>
          <div>
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Official Jetour fleet bookings open across Sialkot & Punjab.',
                  className: 'text-gray-500 font-normal',
                },
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block"
              delayOffset={0.3}
            />
          </div>
        </div>

        {/* 4-Column Card Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[490px] gap-3 sm:gap-2 md:gap-1"
        >
          {featureCards.map((card, idx) => {
            const cardDelay = idx * 0.15;

            if (card.type === 'video') {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.7,
                    delay: cardDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden min-h-[360px] lg:h-full bg-[#151515] flex flex-col justify-between p-6 sm:p-7 shadow-lg border border-white/[0.04]"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[1.5rem]"
                  >
                    <source src={card.videoUrl} type="video/mp4" />
                  </video>

                  {/* Gradient to make text crisp */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none rounded-2xl md:rounded-[1.5rem]" />

                  {/* Top Badge */}
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] tracking-wider text-primary font-medium uppercase backdrop-blur-md">
                      {card.badge}
                    </span>
                  </div>

                  {/* Bottom Text & Action */}
                  <div className="relative z-10 space-y-3">
                    <h3
                      className="text-lg sm:text-xl font-normal leading-snug"
                      style={{ color: '#E1E0CC' }}
                    >
                      {card.title}
                    </h3>
                    <button
                      onClick={() => onOpenBookingModal()}
                      className="inline-flex items-center gap-2 text-xs text-primary hover:text-white font-medium transition-colors cursor-pointer"
                    >
                      <span>Book Airport Rd Visit</span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </button>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  delay: cardDelay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-7 flex flex-col justify-between min-h-[380px] lg:h-full shadow-lg border border-white/[0.03] group hover:border-white/[0.08] transition-colors"
              >
                {/* Top Section: Icon, Title & Number */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-white/10 filter brightness-90 group-hover:brightness-100 transition-all"
                    />
                    <span className="text-gray-500 font-mono text-xs sm:text-sm font-medium">
                      ({card.number})
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-lg sm:text-xl font-medium tracking-tight"
                      style={{ color: '#E1E0CC' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">
                      {card.price}
                    </p>
                  </div>

                  {/* Checklist Items */}
                  <ul className="space-y-2.5">
                    {card.items?.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs sm:text-[13px] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Section: Reserve on WhatsApp link */}
                <div className="pt-5 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                  <button
                    onClick={() =>
                      onOpenWhatsApp(
                        card.vehicleName,
                        `I am inquiring about booking and delivery schedule for the ${card.vehicleName} (${card.price}) at Jetour Sialkot.`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors group/link cursor-pointer font-medium"
                  >
                    <span>Inquire / Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(card.vehicleName)}
                    className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    Test Drive
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
