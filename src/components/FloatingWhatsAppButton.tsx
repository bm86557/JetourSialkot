import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppButtonProps {
  onClick: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-[0_10px_35px_rgba(37,211,102,0.45)] flex items-center justify-center cursor-pointer transition-colors border border-white/30 group"
      aria-label="Contact Jetour Sialkot on WhatsApp"
      title="Chat with Jetour Sialkot on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
    </motion.button>
  );
};
