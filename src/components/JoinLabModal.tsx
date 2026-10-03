import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface JoinLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinLabModal: React.FC<JoinLabModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [discipline, setDiscipline] = useState('Director / Filmmaker');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPortfolio('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl md:rounded-[1.5rem] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                    Prisma Collective
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mt-1">
                    Join the lab
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Collaborate with visual artists, filmmakers, and storytellers worldwide.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Marcus Chen"
                      className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="director@studio.com"
                      className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Discipline
                      </label>
                      <select
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                      >
                        <option value="Director / Filmmaker">Director / Filmmaker</option>
                        <option value="Colorist &amp; VFX">Colorist &amp; VFX</option>
                        <option value="Visual Artist">Visual Artist</option>
                        <option value="Sound &amp; Narrative">Sound &amp; Narrative</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                        Portfolio / Reel
                      </label>
                      <input
                        type="url"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="https://vimeo.com/..."
                        className="w-full bg-[#1F1F1F] border border-white/10 focus:border-primary text-sm text-[#E1E0CC] rounded-lg px-3.5 py-2.5 outline-none transition-colors placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs sm:text-sm text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-[#eae8d8] text-black font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-md"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-normal text-[#E1E0CC]">
                  Application Received
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                  Welcome to Prisma, {name}. Our curation team reviews reels weekly and will connect regarding the upcoming workshop cycle.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-primary text-black text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#eae8d8] transition-colors cursor-pointer"
                  >
                    Back to Studio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
