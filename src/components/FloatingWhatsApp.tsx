import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  onOpen: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpen }) => {
  return (
    <aside aria-label="Official WhatsApp chat" className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onOpen}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] active:scale-95 text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 group"
        aria-label="Chat with Jetour Sialkot on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:scale-108 transition-transform" />
      </button>
    </aside>
  );
};
