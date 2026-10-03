import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVehicle = 'Jetour Dashing',
}) => {
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Afternoon (3:00 PM – 5:00 PM)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialVehicle) {
      setVehicle(initialVehicle);
    }
  }, [initialVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Build WhatsApp message
    const text = `Hello Jetour Sialkot, my name is ${name} (${phone}). I would like to schedule a VIP Test Drive for the ${vehicle} at your Airport Road showroom during the ${slot} slot.`;
    const waUrl = `https://wa.me/923264140123?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[calc(100vw-1rem)] max-w-lg max-h-[95vh] overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-2xl z-10 sm:rounded-2xl md:rounded-[1.5rem]"
          >
            <div className="sticky top-0 z-20 flex justify-end bg-[#141414]/90 px-3 pt-3 pb-2 backdrop-blur-sm sm:px-4 sm:pt-4">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-3.5rem)] px-4 pb-4 sm:px-8 sm:pb-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                      Airport Road Sialkot Showroom
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mt-1">
                      Schedule VIP Drive
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Experience turbocharged performance and intelligent safety with our specialist.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Select Vehicle Model *
                      </label>
                      <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                      >
                        <option value="Jetour Dashing (1.5L Turbo · PKR 7.89M)">Jetour Dashing (1.5L Turbo · PKR 7.89M)</option>
                        <option value="Jetour X70 Plus (7-Seater · PKR 8.29M)">Jetour X70 Plus (7-Seater · PKR 8.29M)</option>
                        <option value="Jetour T2 Traveler (4x4 AWD · PKR 14.99M)">Jetour T2 Traveler (4x4 AWD · PKR 14.99M)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. M. Tariq"
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0300 1234567"
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Preferred Time Slot
                      </label>
                      <select
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                      >
                        <option value="Morning (11:00 AM – 1:00 PM)">Morning (11:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (3:00 PM – 5:00 PM)">Afternoon (3:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full px-4 py-2.5 text-xs sm:w-auto sm:text-sm text-gray-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs sm:w-auto sm:text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-md"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Confirm via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-normal text-[#E1E0CC]">
                    Booking Initiated
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                    Thank you, {name}. Your appointment details have been shared directly with the Jetour Sialkot sales desk. See you on Airport Road!
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="bg-primary text-black text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#eae8d8] transition-colors cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
