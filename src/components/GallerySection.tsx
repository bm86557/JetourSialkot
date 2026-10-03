import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import car1Img from '../assets/images/real/car1.jpeg';
import car2Img from '../assets/images/real/car2.jpeg';
import insideImg from '../assets/images/real/inside-office.jpeg';

interface GallerySectionProps {
  onOpenWhatsApp: (vehicleName?: string, customNote?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenWhatsApp }) => {
  const [activePhoto, setActivePhoto] = useState<{
    title: string;
    image: string;
    caption: string;
  } | null>(null);

  // Exact 3 authentic images from jetoursialkot.com
  const galleryItems = [
    {
      id: 1,
      title: 'Jetour X70 Plus Pearl White',
      image: car1Img || '/images/car1.jpeg',
      fallback: '/images/car1.jpeg',
      caption: 'White Jetour SUV parked inside the Airport Road Sialkot showroom delivery bay with sleek dynamic rear tail lights.'
    },
    {
      id: 2,
      title: 'Jetour X70 Plus Midnight Onyx',
      image: car2Img || '/images/car2.jpeg',
      fallback: '/images/car2.jpeg',
      caption: 'Executive gloss black Jetour SUV on reflective mirror showroom floor with quad sport exhaust finishers.'
    },
    {
      id: 3,
      title: 'Showroom Interior & JETOUR LIFE',
      image: insideImg || '/images/inside-office.jpeg',
      fallback: '/images/inside-office.jpeg',
      caption: 'Double-height showroom ceiling architectural linear lighting, digital display facade, and luxury customer consultation pavilion.'
    }
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#060709] border-b border-[#1E232E] relative overflow-hidden">
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header matching Screenshot 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2.5px] bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#3B82F6] font-bold">
              GALLERY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-condensed">
            EXPERIENCE <span className="text-[#2563EB] drop-shadow-[0_0_20px_rgba(37,99,235,0.5)]">JETOUR</span> UP CLOSE
          </h2>
        </div>

        {/* 3-Column Photography Grid with 3D Depth matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative aspect-[4/3] bg-[#0E1017] border border-white/10 hover:border-blue-500/60 rounded-xs overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.fallback;
                }}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out filter brightness-[0.9] group-hover:brightness-100"
              />
              {/* Subtle glass vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white drop-shadow">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-blue-400 font-medium tracking-wide flex items-center gap-1 mt-0.5">
                    <span>Click to inspect 3D view</span>
                    <span>→</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  ⤢
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-5xl w-[calc(100vw-1rem)] max-h-[95vh] overflow-hidden rounded-sm border border-white/15 bg-[#0B0D13] text-white shadow-[0_25px_60px_rgba(0,0,0,0.9)] sm:w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0E1119]/90 px-3 py-2.5 sm:px-5 sm:py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <h3 className="text-xs sm:text-base font-bold uppercase tracking-wider text-white">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="text-neutral-400 hover:text-white p-2 font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-4rem)]">
              <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 border-t border-white/10 flex flex-col gap-3 bg-[#0E1119] sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="text-[11px] sm:text-sm text-neutral-300 max-w-xl">
                  {activePhoto.caption}
                </p>
                <button
                  onClick={() => {
                    const title = activePhoto.title;
                    setActivePhoto(null);
                    onOpenWhatsApp(title, `I was viewing "${title}" in the showroom gallery.`);
                  }}
                  className="w-full px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_20px_rgba(37,211,102,0.4)] whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 sm:w-auto sm:text-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
