import React from 'react';
import { DEALERSHIP_INFO } from '../data/vehicles';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent('Jetour Sialkot, Airport Road, Near Classic School System, Sialkot')}`;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#050608] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-blue-600/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header matching Screenshot 5 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2.5px] bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#3B82F6] font-bold">
              FIND US
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-condensed">
            OUR SHOWROOM
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 font-medium">
            Jetour Sialkot, Airport Road, near Classic School System
          </p>
        </div>

        {/* 3D Dark Styled Map Display matching Screenshot 5 */}
        <div className="relative w-full aspect-[21/9] min-h-[380px] sm:min-h-[480px] bg-[#0A0D14] border border-white/10 overflow-hidden rounded-sm select-none shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* High-Tech Vector Map of Sialkot & Airport Road */}
          <svg className="w-full h-full opacity-70" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#07090E" />
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Rivers and waterways */}
            <path
              d="M0,80 Q250,120 500,70 T1000,100 T1200,80"
              fill="none"
              stroke="#131B2B"
              strokeWidth="16"
            />
            <path
              d="M0,80 Q250,120 500,70 T1000,100 T1200,80"
              fill="none"
              stroke="#172238"
              strokeWidth="6"
            />

            {/* Major Arterial Roads */}
            {/* Airport Road Highway */}
            <path
              d="M100,500 L350,380 L650,260 L900,180 L1150,120"
              fill="none"
              stroke="#2A344A"
              strokeWidth="7"
            />
            {/* Glowing route line */}
            <path
              d="M100,500 L350,380 L650,260 L900,180 L1150,120"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            {/* Kashmir Road */}
            <path
              d="M500,550 L650,400 L720,280 L800,100"
              fill="none"
              stroke="#202A3C"
              strokeWidth="4"
            />
            {/* Wazirabad Road */}
            <path
              d="M50,300 L250,330 L450,420 L750,460 L1050,480"
              fill="none"
              stroke="#202A3C"
              strokeWidth="4"
            />
            {/* Secondary network */}
            <path d="M200,150 L350,380 L400,520" fill="none" stroke="#161F2E" strokeWidth="2" />
            <path d="M600,100 L650,260 L800,380" fill="none" stroke="#161F2E" strokeWidth="2" />
            <path d="M300,300 L500,280 L700,250" fill="none" stroke="#161F2E" strokeWidth="2" />

            {/* Area Labels on Map matching Screenshot 5 */}
            <text x="680" y="320" fill="#8896AF" fontSize="22" fontWeight="bold" letterSpacing="2">SIALKOT</text>
            <text x="685" y="340" fill="#475569" fontSize="12">سیالکوٹ</text>

            <text x="250" y="240" fill="#8896AF" fontSize="13" fontWeight="bold">Sialkot International Airport ✈</text>
            <text x="250" y="258" fill="#475569" fontSize="10">سیالکوٹ انٹرنیشنل ایئرپورٹ</text>

            <text x="590" y="190" fill="#64748B" fontSize="12" fontWeight="600">GOHADPUR</text>
            <text x="720" y="210" fill="#64748B" fontSize="12" fontWeight="600">Classic School System</text>
            <text x="240" y="470" fill="#64748B" fontSize="13" fontWeight="600">Sambrial</text>
            <text x="470" y="390" fill="#64748B" fontSize="13" fontWeight="600">Ugoki</text>
            <text x="750" y="340" fill="#64748B" fontSize="12" fontWeight="600">RANGPURA</text>

            {/* 3D Glowing Showroom Marker at Airport Road */}
            <g transform="translate(540, 290)">
              {/* Radar Expanding Rings */}
              <circle cx="0" cy="0" r="32" fill="#2563EB" opacity="0.15">
                <animate attributeName="r" values="18;45;18" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="16" fill="#1D4ED8" opacity="0.5" />
              <circle cx="0" cy="0" r="8" fill="#60A5FA" />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

              {/* Pin Callout Badge */}
              <rect x="18" y="-26" width="165" height="38" rx="6" fill="#0C101A" stroke="#2563EB" strokeWidth="1.5" />
              <text x="30" y="-8" fill="#FFFFFF" fontSize="12" fontWeight="bold">Jetour Sialkot</text>
              <text x="30" y="5" fill="#60A5FA" fontSize="8" fontWeight="bold" letterSpacing="1">AIRPORT ROAD</text>
            </g>
          </svg>

          {/* Top-Left: Open in Maps button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0C101A]/90 border border-white/20 text-neutral-200 hover:text-white text-xs font-semibold rounded-xs backdrop-blur-md flex items-center gap-1.5 transition-colors shadow-lg"
          >
            <span>Open in Maps</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Location Footer Bar matching Screenshot 6 */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0F131D] to-[#0A0D14] border border-white/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold text-white">
              <strong className="text-white font-bold">Jetour Sialkot</strong> · Airport Road, near Classic School System
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] text-center cursor-pointer border-t border-white/20 active:scale-98"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
