import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WordsPullUp } from './animations/WordsPullUp';
import heroImgAsset from '../assets/images/real/main-hero-image.jpeg';

interface HeroSectionProps {
  onOpenBookingModal: (vehicleName?: string) => void;
  onOpenWhatsApp: (vehicleName?: string, customNote?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onOpenWhatsApp,
}) => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen p-4 md:p-6 bg-black overflow-hidden flex flex-col">
      {/* Outer Inset Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Background Dealership Facade Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImgAsset || '/images/main-hero-image.jpeg'}
            alt="Jetour Sialkot Dealership Building Facade"
            className="w-full h-full object-cover object-[center_42%] filter brightness-[0.72] contrast-[1.12]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/main-hero-image.jpeg';
            }}
          />
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85 pointer-events-none" />

        {/* Navbar: Top center pill hanging from top edge */}
        <header className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <nav className="bg-black/90 backdrop-blur-md border-b border-x border-white/10 rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 shadow-2xl">
            {navItems.map((item, index) => {
              const isHovered = hoveredNav === index;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="text-[10px] sm:text-xs md:text-sm font-normal tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  style={{
                    color: isHovered ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)',
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Quick UAN Call Link */}
            <a
              href="tel:03264140123"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 rounded-full text-[11px] text-[#E1E0CC] transition-colors font-medium border border-white/10"
              title="Call UAN"
            >
              <Phone className="w-3 h-3 text-primary" />
              <span>0326 4140123</span>
            </a>
          </nav>
        </header>

        {/* Top Status Pill on Right */}
        <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-green-500/30 backdrop-blur-md text-[11px] font-medium text-[#22C55E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="tracking-wider uppercase">Airport Rd Showroom Open</span>
        </div>

        {/* Hero Content (Bottom-aligned 12-column grid) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end max-w-[1920px] mx-auto">
            {/* Left 8 Columns: Giant Heading "Jetour*" */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2 sm:mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-primary/90 font-medium">
                  AUTHORIZED 3S DEALERSHIP · PAKISTAN
                </span>
              </div>

              <WordsPullUp
                text="Jetour"
                showAsterisk={true}
                className="text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw] 2xl:text-[18vw] font-medium leading-[0.82] tracking-[-0.07em] select-none"
              />
            </div>

            {/* Right 4 Columns: Description Paragraph + CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-end items-start space-y-6 pb-2 sm:pb-3 lg:pb-4 max-w-lg lg:max-w-none">
              {/* Description from jetoursialkot.com */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                Jetour is officially operational in Sialkot. Bringing world-class engineering, panoramic luxury, and intelligent all-terrain capability to Airport Road, near Classic School System.
              </motion.p>

              {/* Action Buttons: Pill CTA + WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center gap-3"
              >
                {/* CTA Button "Reserve a drive" */}
                <button
                  onClick={() => onOpenBookingModal()}
                  className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2 text-black font-medium text-sm sm:text-base transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <span>Schedule Test Drive</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </span>
                </button>

                {/* WhatsApp Quick Action */}
                <button
                  onClick={() => onOpenWhatsApp(undefined, 'I am inquiring from the website hero section.')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm text-[#E1E0CC] transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
