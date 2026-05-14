export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  image: string;
  images: string[];
  badge?: string;
  features: string[];
  specs: { label: string; value: string }[];
  description: string;
  includedItems: string[];
  amazonUrl: string;
  asin: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "spt-02",
    name: "USKEYVISION SPT-02 Magnetic Selfie Stick Tripod",
    slug: "spt-02-magnetic-tripod",
    tagline: "Magnetic Phone Mount with LED Fill Light & Wireless Remote",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 1289,
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/613k3nDM9RL._AC_SY300_SX300_QL70_ML2_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/613k3nDM9RL._AC_SY300_SX300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/41CZVgvwQGL._AC_US40_.jpg",
      "https://m.media-amazon.com/images/I/41Ye8tzdYTL._AC_US40_.jpg"
    ],
    badge: "NEW",
    isNew: true,
    features: [
      "Magnetic Phone Mount - Strong neodymium magnet holds phone securely without case interference",
      "Built-in LED Fill Light - 3 brightness levels for perfect lighting in any environment",
      "Wireless Remote Shutter - Bluetooth remote works up to 33ft (10m) away",
      "360° Rotating Ball Head - Adjust to any angle for the perfect shot",
      "Compact & Portable - Folds flat, perfect for travel and daily use",
      "Universal Compatibility - Works with iPhone 16/15/14/13/12 series and Android phones"
    ],
    specs: [
      { label: "Magnet Strength", value: "Neodymium N52" },
      { label: "LED Modes", value: "3 Brightness Levels" },
      { label: "Remote Range", value: "33 ft (10m)" },
      { label: "Ball Head", value: "360° Rotation" },
      { label: "Remote Battery", value: "CR2032 (included)" },
      { label: "Weight", value: "4.2 oz (120g)" }
    ],
    description: "The SPT-02 Magnetic Selfie Stick Tripod is the ultimate companion for content creators and social media enthusiasts. Featuring a powerful built-in neodymium magnet, this tripod securely holds your phone without the need for clips or clamps. The integrated LED fill light ensures you're always perfectly lit, while the wireless Bluetooth remote lets you capture photos and videos from up to 33 feet away. Compact enough to fit in your pocket, it's ready for any situation.",
    includedItems: [
      "Magnetic Phone Tripod",
      "Built-in LED Fill Light",
      "Wireless Bluetooth Remote",
      "CR2032 Battery (pre-installed in remote)",
      "Carrying Pouch"
    ],
    amazonUrl: "",
    asin: "B0G2P48TKZ",
  },
  {
    id: "r01-kit",
    name: "USKEYVISION R01 Vlogging Kit",
    slug: "r01-vlogging-kit",
    tagline: "All-in-One Content Creator Kit with AI Face Tracking",
    price: 79.99,
    originalPrice: 109.99,
    rating: 4.5,
    reviewCount: 847,
    category: "Vlogging Kits",
    image: "/images/products/r01-1.jpg",
    images: [
      "/images/products/r01-1.jpg",
      "/images/products/r01-1.jpg"
    ],
    badge: "BEST SELLER",
    isBestSeller: true,
    isNew: true,
    features: [
      "AI-Powered Face Tracking - 360° automatic rotation follows your every move",
      "Wireless Lavalier Microphone System (2TX + 1RX) up to 68ft range",
      "Dual LED Fill Lights with 3-level brightness & color temperature control",
      "Gesture Control - OK gesture to start, palm to stop tracking",
      "4-in-1 Tripod System: Desktop / Handheld / Ground / Selfie Stick modes",
      "Wireless Remote Control for hands-free recording"
    ],
    specs: [
      { label: "Tracking Range", value: "360° Rotation" },
      { label: "Mic Range", value: "68 ft (20m)" },
      { label: "Tripod Height", value: "17.2\" – 59\" (44-150cm)" },
      { label: "Phone Compatibility", value: "53-73mm width" },
      { label: "Light Modes", value: "3 Brightness × 2 Color Temp" },
      { label: "Battery", value: "Built-in Rechargeable" }
    ],
    description: "The R01 Kit is the ultimate all-in-one vlogging solution for solo content creators. Featuring intelligent AI face tracking with 360° rotation, a professional wireless lavalier microphone system, and dual LED fill lights, this kit transforms your smartphone into a complete production studio. Whether you're recording YouTube videos, going live on TikTok, or streaming on Instagram, the R01 adapts to any scenario with its innovative 4-in-1 tripod system.",
    includedItems: [
      "Auto Face Tracking Tripod with 360° Rotation Head",
      "Wireless Lavalier Mic (2 Transmitters + 1 Receiver)",
      "Dual LED Fill Light Panels (detachable)",
      "Wireless Remote Control",
      "Retractable Tripod (17.2\"–59\")",
      "Desktop Mini Tripod Base",
      "Ground Spike for outdoor use",
      "Premium Carrying Case"
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3WN7B5H",
    asin: "B0G3WN7B5H",
  },
  {
    id: "vlog-k5",
    name: "USKEYVISION VLOG K5",
    slug: "vlog-k5",
    tagline: "Upgraded Wireless Vlog Kit with Auto-Switch Phone Clamp",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.3,
    reviewCount: 512,
    category: "Vlogging Kits",
    image: "/images/products/k5-1.jpg",
    images: [
      "/images/products/k5-1.jpg",
      "/images/products/k5-1.jpg"
    ],
    badge: "NEW",
    isNew: true,
    features: [
      "Auto-Switch Phone Clamp - No app required, instant connection",
      "Wireless Lavalier Microphone with noise cancellation",
      "Tri-color LED Video Light (3000K-7000K)",
      "59-inch retractable tripod with quick-flip leg locks",
      "Desktop mini tripod included for versatile shooting",
      "12-month warranty with dedicated support"
    ],
    specs: [
      { label: "Mic Type", value: "Wireless Lavalier" },
      { label: "Light Temp", value: "3000K – 7000K" },
      { label: "Tripod Height", value: "17.2\" – 59\"" },
      { label: "Connection", value: "Plug & Play, No App Needed" },
      { label: "Warranty", value: "12 Months" }
    ],
    description: "The VLOG K5 represents the next evolution in smartphone content creation. With its revolutionary auto-switch phone clamp that works without any app installation, tri-color temperature adjustable LED light, and premium wireless lavalier microphone, the K5 delivers professional results effortlessly. Perfect for YouTubers, TikTok creators, and live streamers who demand quality without complexity.",
    includedItems: [
      "Retractable Tripod (17.2\"–59\") with Quick-Flip Locks",
      "Desktop Mini Tripod Base",
      "Tri-color Temperature LED Video Light",
      "Wireless Lavalier Microphone System",
      "Auto-Switch Phone Clamp (patent design)",
      "Microphone Ball Head Mount",
      "Microphone Storage Box",
      "Premium Carrying Bag"
    ],
    amazonUrl: "https://www.amazon.com/dp/B0DL9FKBRS",
    asin: "B0DL9FKBRS",
  },
  {
    id: "vlog-k4",
    name: "USKEYVISION VLOG K4",
    slug: "vlog-k4",
    tagline: "Professional Shotgun Mic Vlog Kit with Full-Size Tripod",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.4,
    reviewCount: 1203,
    category: "Vlogging Kits",
    image: "/images/products/k4-1.jpg",
    images: [
      "/images/products/k4-1.jpg",
      "/images/products/k4-1.jpg"
    ],
    badge: "POPULAR",
    isBestSeller: false,
    features: [
      "Professional Super-Cardioid Shotgun Microphone (BSM-I)",
      "40Hz-20kHz frequency response, 76dB SNR",
      "59-inch full-size extendable tripod with fluid head",
      "Tri-color LED video light (3000K-7000K)",
      "Supports vertical (90°) shooting for TikTok/Reels/Shorts",
      "Compatible with iPhone 16/15/14 series & Android devices"
    ],
    specs: [
      { label: "Mic Pattern", value: "Super Cardioid" },
      { label: "Frequency Response", value: "40Hz – 20kHz" },
      { label: "SNR", value: "76dB" },
      { label: "Max SPL", value: "110dB" },
      { label: "Tripod Height", value: "Up to 50\"" },
      { label: "Head Type", value: "Fluid Head (90° tilt)" }
    ],
    description: "Built for serious content creators who demand broadcast-quality audio, the VLOG K4 features a professional-grade super-cardioid shotgun microphone with studio-quality specifications. The 40Hz-20kHz frequency response captures the full richness of voice and ambient sound, while the 76dB signal-to-noise ratio ensures crystal-clear recordings. Combined with the full-size tripod featuring a fluid head capable of 90° vertical tilt, the K4 is the professional's choice.",
    includedItems: [
      "BSM-I Super-Cardioid Shotgun Microphone",
      "Fluid Head (90° Vertical Shooting)",
      "Full-size Extendable Tripod (up to 50\")",
      "Desktop Mini Tripod with Ball Head",
      "Tri-color LED Video Light (3000K-7000K)",
      "Universal Smartphone Clamp",
      "Wireless Remote Controller",
      "3.5mm TRRS Cable + Lightning Adapter",
      "Windscreen + Premium Carry Bags (×2)"
    ],
    amazonUrl: "https://www.amazon.com/dp/B0CJDZJMPC",
    asin: "B0CJDZJMPC",
  },
  {
    id: "vlog-k2",
    name: "USKEYVISION VLOG K2",
    slug: "vlog-k2",
    tagline: "Compact Vlog Kit with Cardioid Mic & Pro Accessories",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.2,
    reviewCount: 689,
    category: "Vlogging Kits",
    image: "/images/products/k2-1.jpg",
    images: [
      "/images/products/k2-1.jpg",
      "/images/products/k2-1.jpg"
    ],
    features: [
      "Cardioid directional microphone for focused audio capture",
      "Patented auto-switch phone clamp technology",
      "LED light with 1%-100% brightness & 3000K-7000K color temp",
      "360° rotating ball head for multi-angle shots",
      "Compact tripod perfect for travel and desktop use",
      "Includes both TRS and TRRS cables for universal compatibility"
    ],
    specs: [
      { label: "Mic Pattern", value: "Cardioid" },
      { label: "Brightness", value: "1% – 100%" },
      { label: "Color Temp", value: "3000K – 7000K" },
      { label: "Ball Head", value: "360° Rotation" },
      { label: "Cables Included", value: "TRS + TRRS" }
    ],
    description: "The VLOG K2 packs professional features into an incredibly compact and affordable package. Its cardioid directional microphone isolates your voice from background noise, while the patented auto-switch phone clamp makes setup effortless. The steplessly adjustable LED light (1%-100%) gives you precise control over your lighting, making the K2 the perfect entry point into quality content creation.",
    includedItems: [
      "Cardioid Directional Microphone",
      "TRS Audio Cable (for cameras/PC)",
      "TRRS Audio Cable (for smartphones)",
      "Furry Windscreen + Foam Windshield",
      "Universal Phone Clip",
      "Adjustable LED Video Light",
      "360° Rotating Ball Head",
      "Compact Tripod",
      "Premium Storage Case"
    ],
    amazonUrl: "https://www.amazon.com/dp/B08VJBDZFP",
    asin: "B08VJBDZFP",
  },
  {
    id: "v-master",
    name: "USKEYVISION V-Master",
    slug: "v-master",
    tagline: "All-Metal Premium Vlogging Kit for Professional Creators",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 324,
    category: "Pro Kits",
    image: "/images/products/vmaster-1.jpg",
    images: [
      "/images/products/vmaster-1.jpg",
      "/images/products/vmaster-1.jpg"
    ],
    badge: "PRO GRADE",
    features: [
      "Full metal construction - armored tripod texture",
      "Metal super-cardioid directional microphone",
      "Flexible cold shoe arm with 4 cold shoe mounts",
      "Premium LED video light with full adjustability",
      "Professional build quality for daily heavy-duty use",
      "Complete accessory set for any shooting scenario"
    ],
    specs: [
      { label: "Construction", value: "Full Metal Body" },
      { label: "Mic Type", value: "Metal Super-Cardioid" },
      { label: "Cold Shoe Mounts", value: "4 Ports" },
      { label: "Dimensions", value: "6.69 × 6.69 × 9.45 in" },
      { label: "Arm Type", value: "Flexible Cold Shoe Arm" }
    ],
    description: "The V-Master is USKEYVISION's flagship product, built entirely from premium metal components for creators who refuse to compromise on quality. The armored-texture metal tripod provides rock-solid stability, while the metal super-cardioid microphone delivers broadcast-grade audio. With a flexible cold shoe arm offering four cold shoe mounts, the V-Master accommodates unlimited accessory configurations — it's not just a vlogging kit, it's a mobile production studio.",
    includedItems: [
      "Metal Tripod (Armored Texture Finish)",
      "360° Rotating Ball Head (Metal)",
      "Metal Super-Cardioid Directional Microphone",
      "Premium LED Video Light",
      "Flexible Cold Shoe Arm (4 Cold Shoe Mounts)",
      "Universal Smartphone Clip",
      "Microphone Windscreen",
      "TRS Audio Cable + TRRS Audio Cable",
      "Premium Storage Case"
    ],
    amazonUrl: "https://www.amazon.com/dp/B08VN7FXSN",
    asin: "B08VN7FXSN",
  },
  {
    id: "lavalier-mic",
    name: "USKEYVISION Wireless Lavalier Microphone",
    slug: "wireless-lavalier-mic",
    tagline: "Professional Wireless Mic System for Smartphones & Cameras",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.4,
    reviewCount: 892,
    category: "Microphones",
    image: "/images/products/k2-1.jpg",
    images: [
      "/images/products/k2-1.jpg",
      "/images/products/k2-1.jpg"
    ],
    badge: "BEST SELLER",
    isBestSeller: true,
    features: [
      "2.4GHz Wireless Transmission up to 68ft (20m) range",
      "Plug & Play - No app or Bluetooth required",
      "Built-in Rechargeable Battery (6-8 hours working time)",
      "Compatible with iPhone, Android, Cameras, Laptops",
      "Omnidirectional Pickup with Noise Reduction",
      "Includes Charging Case for portable storage"
    ],
    specs: [
      { label: "Transmission", value: "2.4GHz Wireless" },
      { label: "Range", value: "68 ft (20m)" },
      { label: "Battery Life", value: "6-8 Hours" },
      { label: "Charging Time", value: "2 Hours" },
      { label: "Compatibility", value: "iOS/Android/Camera" }
    ],
    description: "The USKEYVISION Wireless Lavalier Microphone delivers professional-grade audio wirelessly. With its 2.4GHz transmission technology, it provides stable, interference-free audio up to 68 feet away. Perfect for interviews, vlogging, podcasting, and video conferencing. The plug-and-play design requires no apps or Bluetooth pairing — just plug in and record.",
    includedItems: [
      "2× Transmitters (TX)",
      "1× Receiver (RX)",
      "3.5mm TRS/TRRS Adapter Cable",
      "Charging Cable (USB-C)",
      "Furry Windscreen ×2",
      "Foam Windscreen ×2",
      "Portable Charging Case"
    ],
    amazonUrl: "https://www.amazon.com/dp/B08VJBDZFP",
    asin: "B08VJBDZFP",
  },
  {
    id: "shotgun-mic",
    name: "USKEYVISION Shotgun Microphone BSM-I",
    slug: "shotgun-mic-bsm1",
    tagline: "Professional Super-Cardioid Shotgun Mic for Broadcast Audio",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewCount: 456,
    category: "Microphones",
    image: "/images/products/k4-1.jpg",
    images: [
      "/images/products/k4-1.jpg",
      "/images/products/k4-1.jpg"
    ],
    features: [
      "Super-Cardioid Polar Pattern for focused audio capture",
      "40Hz-20kHz Frequency Response (full spectrum)",
      "76dB Signal-to-Noise Ratio for crystal clear audio",
      "110dB Max SPL (handles loud sources without distortion)",
      "Built-in Shock Mount to reduce handling noise",
      "Includes TRS/TRRS cables for universal compatibility"
    ],
    specs: [
      { label: "Polar Pattern", value: "Super-Cardioid" },
      { label: "Freq Response", value: "40Hz - 20kHz" },
      { label: "SNR", value: "76dB" },
      { label: "Max SPL", value: "110dB" },
      { label: "Connector", value: "3.5mm TRS/TRRS" }
    ],
    description: "The BSM-I Shotgun Microphone is built for creators who demand broadcast-quality audio. Its super-cardioid polar pattern focuses on the subject while rejecting off-axis noise. With a wide 40Hz-20kHz frequency response and 76dB signal-to-noise ratio, it captures every nuance of your voice with stunning clarity. The rugged metal construction ensures durability in field use.",
    includedItems: [
      "BSM-I Shotgun Microphone",
      "TRS Cable (for Cameras/PC)",
      "TRRS Cable (for Smartphones)",
      "Lightning Adapter (for iPhone)",
      "Furry Windscreen",
      "Foam Windshield",
      "Shock Mount Bracket",
      "Carrying Pouch"
    ],
    amazonUrl: "https://www.amazon.com/dp/B0CJDZJMPC",
    asin: "B0CJDZJMPC",
  },
  {
    id: "led-video-light",
    name: "USKEYVISION LED Video Light",
    slug: "led-video-light",
    tagline: "Adjustable Bi-Color LED Light for Mobile & Studio Photography",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.3,
    reviewCount: 623,
    category: "Accessories",
    image: "/images/products/k5-1.jpg",
    images: [
      "/images/products/k5-1.jpg",
      "/images/products/k5-1.jpg"
    ],
    features: [
      "Tri-Color Temperature: 3000K (Warm) to 7000K (Cool)",
      "Stepless Brightness Adjustment (1%-100%)",
      "Built-in Rechargeable Battery (lasts 2-3 hours)",
      "Cold Shoe Mount - attaches to any camera or bracket",
      "Compact & Lightweight - perfect for smartphone vlogging",
      "Includes Mini Tripod for standalone use"
    ],
    specs: [
      { label: "Color Temp", value: "3000K - 7000K" },
      { label: "Brightness", value: "1% - 100%" },
      { label: "Battery Life", value: "2-3 Hours" },
      { label: "Mount", value: "Cold Shoe" },
      { label: "Weight", value: "85g" }
    ],
    description: "The USKEYVISION LED Video Light is the perfect lighting companion for content creators. With adjustable color temperature from warm 3000K to cool 7000K, you can match any ambient lighting condition. The stepless brightness control lets you fine-tune the light output from 1% to 100%. Its compact size and built-in rechargeable battery make it ideal for mobile creators.",
    includedItems: [
      "LED Video Light Unit",
      "Mini Tripod Stand",
      "Cold Shoe Adapter",
      "USB Charging Cable",
      "Carrying Pouch"
    ],
    amazonUrl: "https://www.amazon.com/dp/B0DL9FKBRS",
    asin: "B0DL9FKBRS",
  },
  {
    id: "mini-tripod",
    name: "USKEYVISION Mini Desktop Tripod",
    slug: "mini-desktop-tripod",
    tagline: "Compact Aluminum Tripod for Desktop & Travel Videography",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.2,
    reviewCount: 334,
    category: "Accessories",
    image: "/images/products/k2-1.jpg",
    images: [
      "/images/products/k2-1.jpg",
      "/images/products/k2-1.jpg"
    ],
    features: [
      "Lightweight Aluminum Construction (only 0.8lbs)",
      "Extendable Height: 9.8\" to 17.2\"",
      "360° Ball Head for multi-angle shooting",
      "Non-slip Rubber Feet for stability",
      "Universal Smartphone Clamp Included",
      "Folds to 9.8\" - perfect for travel"
    ],
    specs: [
      { label: "Material", value: "Aluminum" },
      { label: "Min Height", value: "9.8\"" },
      { label: "Max Height", value: "17.2\"" },
      { label: "Weight", value: "0.8 lbs" },
      { label: "Ball Head", value: "360° Rotation" }
    ],
    description: "The USKEYVISION Mini Desktop Tripod is designed for creators on the go. Its lightweight aluminum construction provides stability without the bulk. The 360° ball head allows for creative angles, while the extendable legs offer flexible height adjustment. Perfect for desktop streaming, tabletop photography, and travel vlogging.",
    includedItems: [
      "Mini Desktop Tripod",
      "360° Ball Head",
      "Universal Smartphone Clamp",
      "Quick Release Plate",
      "Carrying Pouch"
    ],
    amazonUrl: "https://www.amazon.com/dp/B08VJBDZFP",
    asin: "B08VJBDZFP",
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "📦" },
  { id: "vlogging-kits", name: "Vlogging Kits", icon: "🎬" },
  { id: "pro-kits", name: "Pro Kits", icon: "⭐" },
  { id: "microphones", name: "Microphones", icon: "🎤" },
  { id: "accessories", name: "Accessories", icon: "🔧" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === category);
}
