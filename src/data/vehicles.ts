export interface VehicleColor {
  name: string;
  hex: string;
  finish: string;
}

export interface VehicleSpec {
  engine: string;
  displacement: string;
  power: string;
  torque: string;
  transmission: string;
  driveType: string;
  seating: string;
  fuelEconomy: string;
  fuelTank: string;
  dimensions: string;
  wheelbase: string;
  groundClearance: string;
  airbags: string;
  screenSize: string;
  sunroof: string;
}

export interface GalleryItem {
  id: string;
  vehicleId: string;
  vehicleName: string;
  title: string;
  category: 'exterior' | 'interior' | 'technology' | 'details';
  image: string;
  caption: string;
  highlightSpec: string;
}

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  pricePKR: string;
  priceNumeric: number;
  bookingAdvancePKR: string;
  deliveryTime: string;
  heroImage: string;
  interiorImage: string;
  colors: VehicleColor[];
  summary: string;
  specs: VehicleSpec;
  features: string[];
  warranty: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'dashing',
    name: 'Jetour Dashing',
    tagline: 'Futuristic Crossover Built for Modern Urban Elegance',
    badge: 'Deluxe Edition',
    pricePKR: 'PKR 7,899,000',
    priceNumeric: 7899000,
    bookingAdvancePKR: 'PKR 1,500,000',
    deliveryTime: '30 to 45 Days',
    heroImage: '/src/assets/images/jetour_dashing_hero_1790975169570.jpg',
    interiorImage: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    colors: [
      { name: 'Crystal Pearl White', hex: '#EDEDEB', finish: 'Metallic Pearl' },
      { name: 'Titanium Graphite', hex: '#4A4D52', finish: 'Metallic' },
      { name: 'Carbon Black', hex: '#1C1C1E', finish: 'Gloss' },
      { name: 'Arctic Glacier Blue', hex: '#8FA4B5', finish: 'Metallic' }
    ],
    summary: 'The Jetour Dashing combines sculpted aerodynamic exterior styling with smart driver connectivity. Featuring flush door handles, intelligent LED lighting, and an expansive panoramic roof.',
    specs: {
      engine: '1.5L 4-Cylinder Turbocharged Petrol',
      displacement: '1498 cc',
      power: '154 hp (115 kW) @ 5,500 rpm',
      torque: '230 Nm @ 1,750 - 4,000 rpm',
      transmission: '6-Speed Dual Clutch Transmission (DCT)',
      driveType: 'Front-Wheel Drive (FWD)',
      seating: '5 Passengers',
      fuelEconomy: '10 to 13 km/liter',
      fuelTank: '57 Liters',
      dimensions: '4,590 mm x 1,900 mm x 1,685 mm',
      wheelbase: '2,720 mm',
      groundClearance: '160 mm',
      airbags: '6 SRS Airbags (Front, Side, Curtain)',
      screenSize: '12.8-inch Intelligent HD Touchscreen',
      sunroof: 'Panoramic Glass Sunroof with Electric Shade'
    },
    features: [
      'Automatic LED projector headlamps with welcome light animation',
      'Concealed flush door handles with automatic approach sensor',
      'Black synthetic leather seats with crimson sports stitching',
      '360-degree high-definition surround view camera with guidelines',
      'Dual driving personality: Eco and Sport shift modes',
      'Apple CarPlay and Android Auto smartphone integration'
    ],
    warranty: '5 Years or 150,000 km Official Jetour Warranty'
  },
  {
    id: 'x70-plus',
    name: 'Jetour X70 Plus',
    tagline: 'Refined 7-Seater Luxury SUV for Family and Executive Travel',
    badge: 'Deluxe 7-Seater',
    pricePKR: 'PKR 8,299,000',
    priceNumeric: 8299000,
    bookingAdvancePKR: 'PKR 2,000,000',
    deliveryTime: '30 to 60 Days',
    heroImage: '/src/assets/images/jetour_x70_plus_1790975192129.jpg',
    interiorImage: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    colors: [
      { name: 'Meteor Grey', hex: '#525559', finish: 'Metallic' },
      { name: 'Opal White', hex: '#F0F0EE', finish: 'Pearl' },
      { name: 'Midnight Onyx', hex: '#161719', finish: 'Gloss' },
      { name: 'Regal Sapphire', hex: '#243447', finish: 'Deep Metallic' }
    ],
    summary: 'The Jetour X70 Plus delivers three rows of ergonomic seating, quiet acoustic cabin insulation, and dual widescreen digital displays designed for cross-country comfort.',
    specs: {
      engine: '1.5L Turbocharged Petrol (SQRE4T15C)',
      displacement: '1498 cc',
      power: '156 hp (115 kW) @ 5,500 rpm',
      torque: '230 Nm @ 1,750 - 4,000 rpm',
      transmission: '6-Speed Dual Clutch Transmission (DCT)',
      driveType: 'Front-Wheel Drive (FWD)',
      seating: '7 Passengers (Fold-Flat 3rd Row)',
      fuelEconomy: '10 to 12.8 km/liter',
      fuelTank: '57 Liters',
      dimensions: '4,724 mm x 1,900 mm x 1,720 mm',
      wheelbase: '2,720 mm',
      groundClearance: '200 mm',
      airbags: '6 SRS Airbags',
      screenSize: 'Dual 10.25-inch Interconnected Digital Cockpit',
      sunroof: 'Large Panoramic Sunroof with Auto Rain Sensor'
    },
    features: [
      'Spacious 7-seat configuration with 50:50 folding third row',
      'Dual 10.25-inch high-resolution instrument and media screens',
      '6-way power-adjustable driver seat with lumbar support',
      'Multi-zone digital climate control with rear row air conditioning',
      'Steering wheel paddle shifters for manual gear control',
      'Electronic stability program with Hill Start Assist and Hill Descent'
    ],
    warranty: '5 Years or 150,000 km Official Jetour Warranty'
  },
  {
    id: 't2',
    name: 'Jetour T2 Traveler',
    tagline: 'Intelligent All-Terrain 4x4 with BorgWarner XWD Capability',
    badge: 'Adventure 4x4',
    pricePKR: 'PKR 14,999,000',
    priceNumeric: 14999000,
    bookingAdvancePKR: 'PKR 3,000,000',
    deliveryTime: '45 to 60 Days',
    heroImage: '/src/assets/images/jetour_t2_traveler_1790975208738.jpg',
    interiorImage: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    colors: [
      { name: 'Sahara Sand Khaki', hex: '#B5A68E', finish: 'Matte' },
      { name: 'Tactical Grey', hex: '#4B4F54', finish: 'Satin' },
      { name: 'Forest Shadow Green', hex: '#3B473E', finish: 'Matte' },
      { name: 'Obsidian Night', hex: '#1A1B1C', finish: 'Deep Gloss' }
    ],
    summary: 'Constructed on a high-rigidity chassis, the Jetour T2 combines true off-road mechanical credentials with an aviation-grade digital cockpit and 700 mm wading capability.',
    specs: {
      engine: '2.0L Kunpeng High-Output Turbo Petrol',
      displacement: '1998 cc',
      power: '254 hp (187 kW) @ 5,500 rpm',
      torque: '390 Nm @ 1,750 - 4,000 rpm',
      transmission: '7-Speed Wet Dual Clutch Transmission (DCT)',
      driveType: 'BorgWarner 6th Gen Intelligent 4WD (XWD) with eLSD',
      seating: '5 Passengers',
      fuelEconomy: '9.5 to 11.5 km/liter',
      fuelTank: '70 Liters',
      dimensions: '4,785 mm x 2,006 mm x 1,880 mm',
      wheelbase: '2,800 mm',
      groundClearance: '220 mm (700 mm Wading Depth)',
      airbags: '8 SRS Airbags (Front, Side, Knee, Curtain)',
      screenSize: '15.6-inch Central Control Display (Snapdragon 8155)',
      sunroof: 'Full Panoramic Roof with UV Heat Shield'
    },
    features: [
      'BorgWarner 6th Generation XWD with automatic terrain sensing',
      'Electronic Limited Slip Differential (eLSD) with crawl control',
      'High-performance Qualcomm Snapdragon 8155 automotive processor',
      'Square rear-mounted spare wheel utility box and tow points',
      'Aircraft-style electronic gear selector with aluminum accents',
      'Matrix quad-beam LED headlights with directional illuminate'
    ],
    warranty: '5 Years or 150,000 km Official Jetour Warranty'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-dashing-ext-1',
    vehicleId: 'dashing',
    vehicleName: 'Jetour Dashing',
    title: 'Front Quarter Silhouette & Kinetic Facade',
    category: 'exterior',
    image: '/src/assets/images/jetour_dashing_hero_1790975169570.jpg',
    caption: 'Aerodynamic front bumper intake with geometric matrix LED daytime lighting elements.',
    highlightSpec: '154 hp · 230 Nm · 1.5L Turbo'
  },
  {
    id: 'g-x70-ext-1',
    vehicleId: 'x70-plus',
    vehicleName: 'Jetour X70 Plus',
    title: 'Executive Stance & Horizontal Louver Grille',
    category: 'exterior',
    image: '/src/assets/images/jetour_x70_plus_1790975192129.jpg',
    caption: 'Longitudinal character lines emphasize the 4,724 mm body with 20-inch machined wheels.',
    highlightSpec: '7 Seater · 200 mm Clearance'
  },
  {
    id: 'g-t2-ext-1',
    vehicleId: 't2',
    vehicleName: 'Jetour T2 Traveler',
    title: 'Boxy Geometric Architecture & Terrain Stance',
    category: 'exterior',
    image: '/src/assets/images/jetour_t2_traveler_1790975208738.jpg',
    caption: 'Tactical body proportions with reinforced wheel arches, roof rail mounts, and 220 mm ride height.',
    highlightSpec: '254 hp · 390 Nm · BorgWarner XWD'
  },
  {
    id: 'g-dashing-int-1',
    vehicleId: 'dashing',
    vehicleName: 'Jetour Dashing',
    title: 'Minimalist Digital Cockpit & Floating Console',
    category: 'interior',
    image: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    caption: 'Spacious flat-bottom steering wheel, horizontal ambient air registers, and clear ergonomics.',
    highlightSpec: '12.8-inch Screen · Leather Interior'
  },
  {
    id: 'g-x70-int-1',
    vehicleId: 'x70-plus',
    vehicleName: 'Jetour X70 Plus',
    title: 'Dual 10.25-inch Panoramic Glass Cluster',
    category: 'technology',
    image: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    caption: 'Continuous glass housing combining digital driver instrumentation with media navigation.',
    highlightSpec: 'Dual 10.25-inch · Apple CarPlay'
  },
  {
    id: 'g-t2-tech-1',
    vehicleId: 't2',
    vehicleName: 'Jetour T2 Traveler',
    title: 'Snapdragon 8155 Architecture & Aviation Shifter',
    category: 'details',
    image: '/src/assets/images/jetour_cockpit_interior_1790975225284.jpg',
    caption: 'Milled aluminum terrain dial, high-tensile switchgear, and instant screen responsiveness.',
    highlightSpec: 'Snapdragon 8155 · 8 Terrain Modes'
  },
  {
    id: 'g-showroom-1',
    vehicleId: 'dashing',
    vehicleName: 'Jetour Sialkot Motors',
    title: 'Airport Road 3S Dealership Showroom Floor',
    category: 'details',
    image: '/src/assets/images/jetour_sialkot_showroom_1790975241561.jpg',
    caption: 'Dedicated customer consultation lounge, delivery bay, and authorized service workshop.',
    highlightSpec: 'Sales · Service · Genuine Parts'
  }
];

export const DEALERSHIP_INFO = {
  name: 'Jetour Sialkot Motors',
  type: 'Authorized 3S Dealership (Sales, Service, Spare Parts)',
  address: 'Airport Road, near Classic School System, Sialkot, Punjab, Pakistan',
  phoneDisplay: '0326 4140123',
  phoneClean: '03264140123',
  whatsappNumber: '923264140123',
  whatsappUrl: 'https://wa.me/923264140123',
  email: 'info@jetoursialkot.com',
  workingHours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', hours: '11:00 AM – 5:00 PM (By Appointment)' }
  ],
  services: [
    {
      title: 'New Vehicle Sales & Reservations',
      description: 'Official factory bookings, transparent ex-factory pricing, and expedited delivery allocations for Sialkot and Gujranwala division.'
    },
    {
      title: 'Test Drive Scheduling',
      description: 'Experience the turbocharged performance, sound insulation, and safety systems on local roads with our product specialists.'
    },
    {
      title: 'Authorized 3S Service & Genuine Parts',
      description: 'Certified diagnostic tools, original Jetour oil and air filters, brake components, and manufacturer scheduled maintenance.'
    },
    {
      title: 'Direct WhatsApp Concierge',
      description: 'Instant quotation sheets, booking forms, financing partner options, and color availability sent directly to your phone.'
    }
  ]
};

export function buildWhatsAppLink(vehicleName?: string, customNote?: string): string {
  const base = `https://wa.me/923264140123?text=`;
  let msg = `Hello Jetour Sialkot Motors, `;
  if (vehicleName) {
    msg += `I am interested in inquiring about the ${vehicleName}. Please share booking details, delivery schedule, and test drive availability.`;
  } else {
    msg += `I would like to inquire about your vehicle lineup, test drive availability, and booking procedure at your Airport Road showroom.`;
  }
  if (customNote) {
    msg += ` Note: ${customNote}`;
  }
  return base + encodeURIComponent(msg);
}
