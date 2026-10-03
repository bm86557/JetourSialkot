import React from 'react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const StatusBar: React.FC = () => {
  return (
    <section aria-label="Dealership Live Status" className="w-full bg-[#080B10] border-y border-white/[0.08] py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {/* Column 1: Showroom Status */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 block">
                SHOWROOM STATUS
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5 mt-0.5">
                <span>Now Open</span>
                <span className="text-neutral-500 font-normal">·</span>
                <span className="text-neutral-400 font-medium text-xs">9:00 AM – 7:00 PM</span>
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex items-center gap-3.5 sm:pl-6 pt-3 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 block">
                UAN HOTLINE
              </span>
              <a
                href={`tel:${DEALERSHIP_INFO.phoneClean}`}
                className="text-xs sm:text-sm font-bold text-white hover:text-[#60A5FA] transition-colors mt-0.5 block tracking-wide tabular-nums"
              >
                0326 4140123
              </a>
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="flex items-center gap-3.5 sm:pl-6 pt-3 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-neutral-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 block">
                LOCATION
              </span>
              <a
                href="#location"
                className="text-xs sm:text-sm font-bold text-white hover:text-[#60A5FA] transition-colors mt-0.5 block tracking-wide"
              >
                Airport Rd, Near Classic School
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
