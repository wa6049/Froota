
import { BusinessInfo, Product } from './types';

export interface Smoothie {
  id: string;
  name: string;
  titleMain: string;
  titleAccent: string;
  titleEnd: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
}

// ASSET PATHS (Update these with your actual files in /assets/images/)
export const ASSETS = {
  LOGO: "", // If empty, the site uses the dynamic SVG/Text logo in components/Logo.tsx
  DRAGON_FRUIT: "https://img.icons8.com/plasticine/800/dragon-fruit.png",
  MANGO: "https://img.icons8.com/plasticine/800/mango.png",
  LIME: "https://img.icons8.com/plasticine/400/lime.png",
  // Place your high-res photography in /assets/images/ and update below
  CATALOG_DRAGON: "https://images.unsplash.com/photo-1527324688101-0bc96a8fa463?auto=format&fit=crop&q=80&w=800",
  CATALOG_MANGO: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=800",
  CATALOG_BOX: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800",
};

export const PLACEHOLDERS = {
  PHONE: "+385 1 234 5678",
  EMAIL: "hello@frootamarket.hr",
  INSTAGRAM_URL: "#",
  TIKTOK_URL: "#",
  WOLT_URL: "#",
  GLOVO_URL: "#",
  WORKING_HOURS: "Pon-Sub 08:00–20:00 • Ned 09:00–14:00",
  MAP_EMBED: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.567366367389!2d15.9525673!3d45.7998673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6c2912443e1%3A0x2e04374528189569!2sOzaljska%20ul.%2083%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1709999999999!5m2!1sen!2shr"
};

export const BUSINESS_INFO: BusinessInfo = {
  address: "Ozaljska ul. 83",
  city: "10000 Zagreb",
  mapUrl: PLACEHOLDERS.MAP_EMBED,
  phone: PLACEHOLDERS.PHONE,
  email: PLACEHOLDERS.EMAIL,
  woltUrl: PLACEHOLDERS.WOLT_URL,
  glovoUrl: PLACEHOLDERS.GLOVO_URL,
  instagramUrl: PLACEHOLDERS.INSTAGRAM_URL,
  tiktokUrl: PLACEHOLDERS.TIKTOK_URL,
  workingHours: PLACEHOLDERS.WORKING_HOURS
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Red Dragon Fruit",
    description: "Premium Vietnamese Pitaya. Rich in antioxidants and vibrantly pink.",
    price: "€4.50 / kom",
    image: ASSETS.CATALOG_DRAGON,
    category: 'exotic',
    tag: "Market Best"
  },
  {
    id: '2',
    name: "Mango Sunshine",
    description: "The sweetest seasonal Alfonso mangoes, ripened in the sun.",
    price: "€5.00 / kom",
    image: ASSETS.CATALOG_MANGO,
    category: 'exotic',
    tag: "Sweet Pick"
  },
  {
    id: '3',
    name: "Exotic Tasting Box",
    description: "A selection of pre-sliced Pitaya, Mango, and Litchi clusters.",
    price: "€18.50",
    image: ASSETS.CATALOG_BOX,
    category: 'platters',
    tag: "Shareable"
  },
  {
    id: '4',
    name: "Yellow Pitaya",
    description: "Rare Colombian Yellow Pitaya. Extremely sweet crunchy texture.",
    price: "€6.00 / kom",
    image: "https://images.unsplash.com/photo-1582284540020-8acaf03844e8?auto=format&fit=crop&q=80&w=800",
    category: 'exotic'
  },
  {
    id: '5',
    name: "Berry Punch",
    description: "Cold-pressed forest berries with a hint of organic lime.",
    price: "€4.50",
    image: "https://images.unsplash.com/photo-1600718374662-0483d2b9d40d?auto=format&fit=crop&q=80&w=800",
    category: 'fresh-bar'
  },
  {
    id: '6',
    name: "Passion Elixir",
    description: "100% Passion fruit extract blended for immediate energy boost.",
    price: "€5.50",
    image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=800",
    category: 'fresh-bar'
  }
];

export const SMOOTHIES: Smoothie[] = [
  {
    id: 's1',
    name: 'Dragon Punch',
    titleMain: 'NATURE\'S POWER',
    titleAccent: 'IN EVERY',
    titleEnd: 'SIP',
    description: 'Our Fresh Bar isn\'t just a menu, it\'s a health laboratory. Every smoothie is prepared from fruit you pick yourself.',
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=800',
    color: '#E92C6C',
    textColor: 'text-white'
  },
  {
    id: 's2',
    name: 'Mango Rush',
    titleMain: 'TROPICAL',
    titleAccent: 'GOLDEN',
    titleEnd: 'ENERGY',
    description: 'Experience the pure Alfonso sweetness. 100% natural, blended to perfection with cold-pressed coconut water.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    color: '#FFB800',
    textColor: 'text-froota-dark'
  },
  {
    id: 's3',
    name: 'Lime Spark',
    titleMain: 'CLEAN',
    titleAccent: 'MINTY',
    titleEnd: 'DETOX',
    description: 'The ultimate refreshment for Trešnjevka runners. Cold-pressed lime and mint to restart your system.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    color: '#97C02D',
    textColor: 'text-froota-dark'
  },
  {
    id: 's4',
    name: 'Berry Blast',
    titleMain: 'WILD',
    titleAccent: 'ANTIOXIDANT',
    titleEnd: 'BOOST',
    description: 'Dark, rich, and full of vitamins. Local forest berries mixed with exotic pomegranate for immune support.',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9d40d?auto=format&fit=crop&q=80&w=800',
    color: '#4C1D95',
    textColor: 'text-white'
  }
];
