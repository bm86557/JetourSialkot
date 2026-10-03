import React, { useState } from 'react';
import { VEHICLES, Vehicle, buildWhatsAppLink } from '../data/vehicles';
import { WhatsAppIcon } from './WhatsAppIcon';
import { playEngineSound } from '../utils/engineSound';

interface VehiclesSectionProps {
  onOpenWhatsApp: (vehicleName?: string, customNote?: string) => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({ onOpenWhatsApp }) => {
  const [activeVehicleId, setActiveVehicleId] = useState<string>('dashing');
  const [activeAngle, setActiveAngle] = useState<'exterior' | 'interior'>('exterior');
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [isPlayingEngine, setIsPlayingEngine] = useState<boolean>(false);

  // EMI Calculator state
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [tenureYears, setTenureYears] = useState<number>(3);

  // Test drive state
  const [testDriveSlot, setTestDriveSlot] = useState<string>('Afternoon (3:00 PM - 5:00 PM)');

  const activeVehicle: Vehicle = VEHICLES.find(v => v.id === activeVehicleId) || VEHICLES[0];
  const activeColor = activeVehicle.colors[selectedColorIndex] || activeVehicle.colors[0];

  // Dynamic image based on angle
  const displayImage = activeAngle === 'exterior' ? activeVehicle.heroImage : activeVehicle.interiorImage;

  // Real-time PKR Financing Math (Approx 16.5% standard auto finance rate in Pakistan)
  const vehiclePrice = activeVehicle.priceNumeric;
  const downPaymentAmount = Math.round((vehiclePrice * downPaymentPercent) / 100);
  const loanAmount = vehiclePrice - downPaymentAmount;
  const annualInterestRate = 0.165;
  const totalMonths = tenureYears * 12;
  const monthlyRate = annualInterestRate / 12;
  const monthlyInstallment = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const handleStartEngine = () => {
    setIsPlayingEngine(true);
    playEngineSound();
    setTimeout(() => {
      setIsPlayingEngine(false);
    }, 2400);
  };

  const handleModelChange = (id: string) => {
    setActiveVehicleId(id);
    setSelectedColorIndex(0);
    setActiveAngle('exterior');
  };

  return (
    <section id="vehicles" className="py-24 sm:py-32 bg-[#06080D] border-b border-white/[0.08] relative overflow-hidden">
      {/* Dynamic Ambient Color Backlight based on vehicle paint */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] blur-[160px] pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${activeColor.hex}22 0%, rgba(37,99,235,0.06) 60%, transparent 100%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2.5px] bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#3B82F6] font-bold">
                INTERACTIVE SHOWROOM STUDIO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-condensed">
              EXPLORE THE <span className="text-[#2563EB] drop-shadow-[0_0_20px_rgba(37,99,235,0.5)]">JETOUR</span> FLEET
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
            Configure exterior paint finishes, switch between aerodynamic styling and acoustic luxury cockpits, or simulate official monthly financing.
          </p>
        </div>

        {/* 3 Model Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-[#0A0D15] border border-white/[0.08] rounded-sm">
          {VEHICLES.map(vehicle => {
            const isSelected = vehicle.id === activeVehicleId;
            return (
              <button
                key={vehicle.id}
                onClick={() => handleModelChange(vehicle.id)}
                className={`py-4 px-5 text-left transition-all duration-300 rounded-xs cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#172033] to-[#0F1626] border border-blue-500/50 shadow-[0_4px_20px_rgba(37,99,235,0.25)]'
                    : 'hover:bg-white/[0.03] text-neutral-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isSelected ? 'text-[#60A5FA]' : 'text-neutral-500'}`}>
                    {vehicle.badge}
                  </span>
                  <span className={`text-xs font-bold tabular-nums ${isSelected ? 'text-white' : 'text-neutral-400'}`}>
                    {vehicle.pricePKR}
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold uppercase font-condensed mt-1 tracking-wide ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                  {vehicle.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Studio Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 8 Cols: Interactive 3D Vehicle Stage */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#0D111A] to-[#07090F] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
            {/* Visual Canvas Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/60 overflow-hidden flex items-center justify-center">
              <img
                src={displayImage}
                alt={`${activeVehicle.name} - ${activeAngle} view`}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out filter brightness-[0.96] contrast-[1.05]"
              />

              {/* Tint reflection overlay matching selected color */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-color opacity-15 transition-colors duration-500"
                style={{ backgroundColor: activeColor.hex }}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-black/40 pointer-events-none" />

              {/* Perspective Toggle (Top-Right) */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/15 p-1 flex items-center gap-1 rounded-xs z-20 shadow-lg">
                <button
                  onClick={() => setActiveAngle('exterior')}
                  className={`px-3 py-1 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                    activeAngle === 'exterior'
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Exterior 3/4
                </button>
                <button
                  onClick={() => setActiveAngle('interior')}
                  className={`px-3 py-1 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                    activeAngle === 'interior'
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Luxury Cockpit
                </button>
              </div>

              {/* Engine Start Simulator Button (Top-Left) */}
              <button
                onClick={handleStartEngine}
                className={`absolute top-4 left-4 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border backdrop-blur-md transition-all cursor-pointer z-20 shadow-lg ${
                  isPlayingEngine
                    ? 'bg-red-500/20 border-red-500 text-red-400 scale-105 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                    : 'bg-black/80 border-white/20 text-neutral-300 hover:text-white hover:border-white/40'
                }`}
                title="Click to hear engine start audio chime"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isPlayingEngine ? 'bg-red-500 animate-ping' : 'bg-blue-500'}`} />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {isPlayingEngine ? 'ENGINE RUNNING...' : 'START ENGINE SOUND'}
                </span>
                <span className="text-xs">🔊</span>
              </button>

              {/* Bottom Stage Details Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none z-20">
                <div className="bg-black/85 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xs">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#60A5FA] font-bold">
                    ACTIVE FINISH
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {activeColor.name} <span className="text-neutral-400 font-normal">({activeColor.finish})</span>
                  </p>
                </div>

                <div className="bg-black/85 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xs text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
                    BOOKING ADVANCE
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#22C55E] tabular-nums">
                    {activeVehicle.bookingAdvancePKR}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Controls Bar: Paint Palette & Action Buttons */}
            <div className="p-6 bg-[#0A0D15] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Color Swatch Picker */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 block">
                  SELECT EXTERIOR FINISH
                </span>
                <div className="flex items-center gap-3">
                  {activeVehicle.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColorIndex === idx
                          ? 'border-white scale-110 shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                          : 'border-white/20 hover:border-white/60 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name}`}
                      title={`${color.name} (${color.finish})`}
                    >
                      {selectedColorIndex === idx && (
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black drop-shadow">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-neutral-300 ml-1">
                    {activeColor.name}
                  </span>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenWhatsApp(
                    activeVehicle.name,
                    `I configured the ${activeVehicle.name} in ${activeColor.name} (${activeColor.finish}). Please share immediate booking allocation.`
                  )}
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Reserve on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right 4 Cols: Interactive EMI / PKR Financing Calculator */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#0F131D] to-[#0A0D15] border border-white/10 rounded-sm p-6 flex flex-col justify-between space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase">
                    ESTIMATE INSTALLMENTS
                  </span>
                  <h3 className="text-xl font-bold uppercase font-condensed tracking-wide text-white mt-0.5">
                    PKR FINANCING
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-[#60A5FA] border border-blue-500/30">
                  16.5% KIBOR
                </span>
              </div>

              {/* Down Payment Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Down Payment ({downPaymentPercent}%):</span>
                  <span className="text-white font-bold tabular-nums">
                    PKR {downPaymentAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-semibold">
                  <span>20%</span>
                  <span>30%</span>
                  <span>40%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Loan Tenure ({tenureYears} Years):</span>
                  <span className="text-white font-bold tabular-nums">
                    {tenureYears * 12} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-semibold">
                  <span>1 Year</span>
                  <span>2 Yrs</span>
                  <span>3 Yrs</span>
                  <span>4 Yrs</span>
                  <span>5 Yrs</span>
                </div>
              </div>

              {/* Calculated Monthly Installment Box */}
              <div className="p-4 bg-gradient-to-r from-[#141B29] to-[#0E131E] border border-blue-500/40 rounded-sm text-center space-y-1 shadow-[0_4px_20px_rgba(37,99,235,0.2)]">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">
                  ESTIMATED MONTHLY INSTALLMENT
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white font-condensed tracking-wide tabular-nums">
                  PKR {monthlyInstallment.toLocaleString()}
                  <span className="text-xs font-normal text-neutral-400"> /mo</span>
                </p>
                <p className="text-[10px] text-neutral-400">
                  *Available via Meezan Bank, Bank Alfalah &amp; Dubai Islamic Bank.
                </p>
              </div>

              {/* Key Specs Matrix */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Engine / Output:</span>
                  <span className="font-semibold text-white">{activeVehicle.specs.power.split('@')[0]}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Transmission:</span>
                  <span className="font-semibold text-white">{activeVehicle.specs.transmission}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Seating:</span>
                  <span className="font-semibold text-white">{activeVehicle.specs.seating}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Delivery Timeline:</span>
                  <span className="font-semibold text-[#60A5FA]">{activeVehicle.deliveryTime}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Financing Application */}
            <button
              onClick={() => onOpenWhatsApp(
                activeVehicle.name,
                `I calculated a financing plan for ${activeVehicle.name} (${activeVehicle.pricePKR}): Down Payment ${downPaymentPercent}% (PKR ${downPaymentAmount.toLocaleString()}), ${tenureYears}-year tenure at approx PKR ${monthlyInstallment.toLocaleString()}/mo. Please guide on bank financing approvals.`
              )}
              className="w-full py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_6px_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer border-t border-white/20 active:scale-98"
            >
              <span>Apply for this Financing Plan</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* VIP Test Drive Scheduling Ribbon */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0E121C] via-[#121826] to-[#0E121C] border border-white/10 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase block">
              VIP AIRPORT ROAD TEST DRIVE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-condensed text-white">
              SCHEDULE A TEST DRIVE AT SIALKOT SHOWROOM
            </h3>
            <p className="text-xs text-neutral-400">
              Experience the turbocharged performance, BorgWarner 4WD, and soundproofing on Airport Road with our specialist.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={testDriveSlot}
              onChange={(e) => setTestDriveSlot(e.target.value)}
              className="px-4 py-3 bg-[#080B12] border border-white/20 text-neutral-200 text-xs font-semibold rounded-sm focus:outline-none focus:border-[#2563EB] cursor-pointer"
            >
              <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
              <option value="Afternoon (3:00 PM - 5:00 PM)">Afternoon (3:00 PM - 5:00 PM)</option>
              <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
            </select>

            <button
              onClick={() => onOpenWhatsApp(
                activeVehicle.name,
                `I would like to book a VIP Test Drive for the ${activeVehicle.name} at your Airport Road showroom during the ${testDriveSlot} slot.`
              )}
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Confirm Test Drive</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
