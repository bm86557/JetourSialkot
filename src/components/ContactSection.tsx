import React from 'react';
import { DEALERSHIP_INFO } from '../data/vehicles';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#060709] border-b border-[#1E232E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header matching Screenshot 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#2563EB]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#3B82F6] font-bold">
              CONTACT US
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
            GET IN <span className="text-[#2563EB]">TOUCH</span>
          </h2>
        </div>

        {/* 3 Contact Cards matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: UAN */}
          <a
            href={`tel:${DEALERSHIP_INFO.phoneClean}`}
            className="group p-6 sm:p-7 bg-[#0E1017] border border-[#1E232E] hover:border-neutral-600 transition-all flex items-center justify-between rounded-sm cursor-pointer shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#141721] border border-[#1E232E] flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-neutral-500 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  UAN
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide tabular-nums mt-0.5 block">
                  UAN # 0326 4140123
                </span>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-lg font-bold">
              →
            </span>
          </a>

          {/* Card 2: WhatsApp with authentic WhatsApp Icon */}
          <button
            onClick={onOpenWhatsApp}
            className="group p-6 sm:p-7 bg-[#0E1017] border border-[#1E232E] hover:border-[#25D366]/60 transition-all flex items-center justify-between rounded-sm cursor-pointer text-left shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#141721] border border-[#1E232E] flex items-center justify-center text-neutral-300 group-hover:text-[#25D366] group-hover:border-[#25D366]/50 transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  WHATSAPP
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide mt-0.5 block">
                  Chat With Us
                </span>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-lg font-bold">
              →
            </span>
          </button>

          {/* Card 3: Address */}
          <a
            href="#location"
            className="group p-6 sm:p-7 bg-[#0E1017] border border-[#1E232E] hover:border-neutral-600 transition-all flex items-center justify-between rounded-sm cursor-pointer shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#141721] border border-[#1E232E] flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-neutral-500 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  ADDRESS
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide mt-0.5 block">
                  Airport Rd, Sialkot
                </span>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-lg font-bold">
              →
            </span>
          </a>
        </div>

        {/* Social Media Row matching Screenshot 4 */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="https://www.instagram.com/jetoursialkot/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-[#0E1017] border border-[#1E232E] hover:border-neutral-600 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all rounded-sm"
          >
            <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={2} />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} />
            </svg>
            <span>INSTAGRAM</span>
          </a>

          <a
            href="https://www.facebook.com/jetoursialkot/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-[#0E1017] border border-[#1E232E] hover:border-neutral-600 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all rounded-sm"
          >
            <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span>FACEBOOK</span>
          </a>
        </div>
      </div>
    </section>
  );
};
