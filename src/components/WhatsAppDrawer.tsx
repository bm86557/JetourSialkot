import React, { useState, useEffect } from 'react';
import { VEHICLES, DEALERSHIP_INFO } from '../data/vehicles';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleName?: string;
  initialNote?: string;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  initialVehicleName,
  initialNote
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>(initialVehicleName || 'Jetour Dashing');
  const [inquiryIntent, setInquiryIntent] = useState<string>('pricing');
  const [customerName, setCustomerName] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>(initialNote || '');

  useEffect(() => {
    if (initialVehicleName) {
      setSelectedVehicle(initialVehicleName);
    }
    if (initialNote) {
      setCustomNote(initialNote);
    }
  }, [initialVehicleName, initialNote]);

  if (!isOpen) return null;

  let intentText = '';
  switch (inquiryIntent) {
    case 'pricing':
      intentText = 'I would like to receive the official ex-factory price sheet, booking deposit requirements, and current delivery allocation timelines.';
      break;
    case 'testdrive':
      intentText = 'I would like to schedule a personal test drive appointment at your Airport Road showroom.';
      break;
    case 'financing':
      intentText = 'I am looking for automotive leasing and Islamic bank financing options for this vehicle.';
      break;
    case 'service':
      intentText = 'I need assistance regarding 3S scheduled maintenance or genuine spare parts.';
      break;
    default:
      intentText = 'I have a question about this vehicle.';
  }

  const generatedMessage = `Hello Jetour Sialkot Motors, ${
    customerName ? `my name is ${customerName}. ` : ''
  }Regarding the ${selectedVehicle}: ${intentText} ${customNote ? `Additional note: ${customNote}` : ''}`;

  const finalWhatsAppUrl = `https://wa.me/${DEALERSHIP_INFO.whatsappNumber}?text=${encodeURIComponent(
    generatedMessage.trim()
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#0E1017] border-l border-[#1E232E] text-white shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0B0D12] border-b border-[#1E232E] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#22C55E]">
                WhatsApp Sales Desk
              </span>
            </div>
            <h2 className="text-xl font-black uppercase font-display text-white mt-1">
              Direct Inquiries
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Airport Road Showroom · Authorized 3S Team
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white text-lg font-bold cursor-pointer"
            aria-label="Close WhatsApp Concierge"
          >
            ✕
          </button>
        </div>

        {/* Content Form */}
        <div className="p-6 space-y-5 flex-1">
          {/* Vehicle Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-2">
              Select Model of Interest
            </label>
            <div className="space-y-1.5">
              {VEHICLES.map(v => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVehicle(v.name)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-medium border transition-colors flex items-center justify-between cursor-pointer rounded-xs ${
                    selectedVehicle.includes(v.name)
                      ? 'bg-[#171B26] border-[#2563EB] text-white font-semibold'
                      : 'bg-[#11141C] border-[#1E232E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span>{v.name}</span>
                  <span className="text-[11px] text-neutral-500 tabular-nums">{v.pricePKR}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedVehicle('All Models / General Inquiry')}
                className={`w-full text-left px-3.5 py-2.5 text-xs font-medium border transition-colors cursor-pointer rounded-xs ${
                  selectedVehicle === 'All Models / General Inquiry'
                    ? 'bg-[#171B26] border-[#2563EB] text-white font-semibold'
                    : 'bg-[#11141C] border-[#1E232E] text-neutral-400 hover:border-neutral-700'
                }`}
              >
                General Inquiry / Showroom Visit
              </button>
            </div>
          </div>

          {/* Inquiry Intent */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-2">
              What would you like assistance with?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'pricing', label: 'Price & Delivery' },
                { id: 'testdrive', label: 'Book Test Drive' },
                { id: 'financing', label: 'Bank Financing' },
                { id: 'service', label: '3S Service & Parts' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setInquiryIntent(item.id)}
                  className={`px-3 py-2 text-xs text-center border transition-colors cursor-pointer rounded-xs ${
                    inquiryIntent === item.id
                      ? 'bg-[#2563EB] border-[#2563EB] text-white font-bold'
                      : 'bg-[#11141C] border-[#1E232E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Name */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
              placeholder="e.g. Tariq Mehmood"
              className="w-full px-3 py-2 text-xs bg-[#11141C] border border-[#1E232E] focus:border-[#2563EB] focus:outline-none text-white placeholder-neutral-600 rounded-xs"
            />
          </div>

          {/* Optional Custom Note */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Custom Message (Optional)
            </label>
            <textarea
              rows={2}
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder="e.g. Please send available color options and delivery timeline."
              className="w-full px-3 py-2 text-xs bg-[#11141C] border border-[#1E232E] focus:border-[#2563EB] focus:outline-none text-white placeholder-neutral-600 resize-none rounded-xs"
            />
          </div>

          {/* Live Message Preview */}
          <div className="p-3 bg-[#11141C] border border-[#1E232E] text-[11px] text-neutral-400 space-y-1 rounded-xs">
            <span className="font-semibold text-neutral-300 block">WhatsApp Message Output:</span>
            <p className="italic text-neutral-400">"{generatedMessage}"</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#0B0D12] border-t border-[#1E232E] space-y-3">
          <a
            href={finalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors rounded-xs shadow-lg shadow-green-900/30"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Open WhatsApp &amp; Send</span>
          </a>

          <div className="text-center">
            <a
              href={`tel:${DEALERSHIP_INFO.phoneClean}`}
              className="text-xs text-neutral-400 hover:text-white transition-colors"
            >
              Or call showroom UAN: <span className="font-bold text-white tabular-nums">{DEALERSHIP_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
