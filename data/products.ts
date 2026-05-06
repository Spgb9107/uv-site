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
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
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
    image: "https://m.media-amazon.com/images/I/61+qN7BjZTL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61+qN7BjZTL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71K5ZJxH0pL._AC_SL1500_.jpg"
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
    ]
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
    image: "https://m.media-amazon.com/images/I/61pP6GaAa-L._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61pP6GaAa-L._AC_SL1000_.jpg"
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
    ]
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
    image: "https://m.media-amazon.com/images/I/61KaBv9gR9L._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61KaBv9gR9L._AC_SL1000_.jpg"
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
    ]
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
    image: "https://m.media-amazon.com/images/I/51LmLl9eYfL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51LmLl9eYfL._AC_SL1000_.jpg"
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
    ]
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
    image: "https://m.media-amazon.com/images/I/61nTqL8F6zL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61nTqL8F6zL._AC_SL1000_.jpg"
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
    ]
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
