import React from 'react';
import { WordsPullUpMultiStyle, StyleSegment } from './animations/WordsPullUpMultiStyle';
import { ScrollProgressiveText } from './animations/ScrollProgressiveText';
import { MapPin, Phone, ShieldCheck, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const headingSegments: StyleSegment[] = [
    { text: "Sialkot's premier,", className: 'font-normal' },
    { text: 'official Jetour hub.', className: 'italic font-serif' },
    // { text: "Experience bold styling, executive interiors, and all-terrain engineering.", className: 'font-normal' },
  ];

  const bioText =
    "Jetour Sialkot is now officially open — bringing China's fastest-growing SUV brand to the heart of Pakistan's sporting capital. Visit our state-of-the-art showroom on Airport Road, near Classic School System, and experience Jetour's bold design, premium interiors, and all-terrain capability in person.";

  return (
    <section id="about" className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6 flex justify-center items-center">
      {/* Inner Card */}
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 sm:p-14 md:p-20 lg:p-24 max-w-6xl w-full mx-auto text-center flex flex-col items-center shadow-2xl relative overflow-hidden border border-white/[0.04]">
        {/* Top small label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium mb-6 sm:mb-8 block">
          Authorized Dealership · Pakistan
        </span>

        {/* Main Heading with Multi-Style Pull-Up */}
        <div className="max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9] text-[#E1E0CC]"
          />
        </div>

        {/* Scroll-Linked Progressive Text Reveal */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-14">
          <ScrollProgressiveText
            text={bioText}
            className="text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-center"
          />
        </div>

        {/* 4 Dealership Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 w-full pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02]">
            <ShieldCheck className="w-5 h-5 text-primary mb-2" />
            <span className="text-xl sm:text-2xl font-normal text-[#E1E0CC]">100%</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1">Authorized 3S</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02]">
            <MapPin className="w-5 h-5 text-primary mb-2" />
            <span className="text-xl sm:text-2xl font-normal text-[#E1E0CC]">Airport Rd</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1">Prime Location</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02]">
            <Clock className="w-5 h-5 text-primary mb-2" />
            <span className="text-xl sm:text-2xl font-normal text-[#E1E0CC]">9 AM – 7 PM</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1">Showroom Open</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02]">
            <Phone className="w-5 h-5 text-primary mb-2" />
            <span className="text-xl sm:text-2xl font-normal text-[#E1E0CC]">0326 4140123</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1">Official UAN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
