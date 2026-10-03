import React from 'react';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/[0.06] py-12 px-4 md:px-6 relative z-10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-sm font-medium tracking-wider text-[#E1E0CC] uppercase">
              JETOUR
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-xs tracking-[0.2em] text-primary/80 uppercase">
              SIALKOT
            </span>
          </div>
          <p className="text-[11px] text-gray-500">
            Authorized 3S Dealership · Sales, Service &amp; Genuine Spare Parts
          </p>
        </div>

        {/* Address and Phone */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Airport Road, near Classic School System, Sialkot
          </span>
          <a
            href="tel:03264140123"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            UAN: 0326 4140123
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors cursor-pointer text-[11px]"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-[10px] text-gray-600">
        © {new Date().getFullYear()} Jetour Sialkot Motors. All rights reserved. Pakistan.
      </div>
    </footer>
  );
};
