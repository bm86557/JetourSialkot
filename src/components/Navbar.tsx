import React, { useState } from 'react';
import { DEALERSHIP_INFO } from '../data/vehicles';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo: JETOUR | SIALKOT exactly as in reference pic */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center gap-3 cursor-pointer group select-none"
            aria-label="Jetour Sialkot Home"
          >
            <span className="font-condensed font-bold text-3xl sm:text-4xl tracking-wider text-white uppercase drop-shadow-md">
              JETOUR
            </span>
            <span className="text-neutral-500 font-light text-xl select-none">|</span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.28em] text-neutral-300 uppercase drop-shadow">
              SIALKOT
            </span>
          </a>

          {/* Minimalist Center Navigation matching reference pic: ABOUT, GALLERY, CONTACT, LOCATION */}
          <nav className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-[0.22em] uppercase text-neutral-300">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
            >
              CONTACT
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-white transition-colors cursor-pointer drop-shadow-sm"
            >
              LOCATION
            </button>
          </nav>

          {/* Right Action Items matching reference pic */}
          <div className="hidden sm:flex items-center space-x-3.5">
            {/* Status Pill: ● NOW OPEN in green */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-green-500/30 backdrop-blur-md text-[11px] font-bold text-[#22C55E] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="tracking-wider">NOW OPEN</span>
            </div>

            {/* Blue UAN Button with phone icon */}
            <a
              href={`tel:${DEALERSHIP_INFO.phoneClean}`}
              className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-sm transition-all shadow-[0_4px_16px_rgba(37,99,235,0.35)] cursor-pointer uppercase tracking-wider active:scale-98"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>UAN</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${DEALERSHIP_INFO.phoneClean}`}
              className="px-3 py-1.5 bg-[#2563EB] text-white text-xs font-bold rounded-sm uppercase tracking-wider"
            >
              UAN
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (only shown on small screens when clicked) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060709]/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-2xl">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200 py-1"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="block w-full text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200 py-1"
          >
            GALLERY
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200 py-1"
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="block w-full text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200 py-1"
          >
            LOCATION
          </button>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-sm text-center tracking-wider uppercase"
            >
              WhatsApp Concierge
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
