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

/**
 * ASSET REGISTRY
 * Root-absolute paths (/assets/images/...) are used to ensure correct resolution on Vercel.
 */
export const ASSETS = {
  // Brand & UI
  LOGO: "/assets/images/logo.png", 
  FAVICON: "/assets/images/favicon.png",
  
  // Hero Floating Elements
  DRAGON_FRUIT: "/assets/images/dragonfruit.png",
  MANGO: "/assets/images/mango.png",
  LIME: "/assets/images/lime.png",
  BERRY: "/assets/images/cherry.png", 
  LITCHI: "/assets/images/litchi.png",
  PASSION: "/assets/images/passionfruit.png",
  
  // Catalog / Showcase Images
  CATALOG_DRAGON: "/assets/images/catalog-dragon.jpg",
  CATALOG_MANGO: "/assets/images/catalog-mango..jpg", // Double dot verified
  CATALOG_BOX: "/assets/images/catalog-box.jpg",
  CATALOG_YELLOW_PITAYA: "/assets/images/catalog-yellow-pitaya.jpg",
  
  // Fresh Bar Images
  SMOOTHIE_DRAGON: "/assets/images/smoothie-dragon.jpg",
  SMOOTHIE_MANGO: "/assets/images/smoothie-mango.jpg",
  SMOOTHIE_LIME: "/assets/images/smoothie-lime.jpg",
  SMOOTHIE_BERRY: "/assets/images/smoothie-berry.jpg",
};

export const PLACEHOLDERS = {
  PHONE: "+385 1 234 5678",
  EMAIL: "hello@frootamarket.hr",
  INSTAGRAM_URL: "https://instagram.com/frootamarket",
  TIKTOK_URL: "#",
  WOLT_URL: "https://wolt.com",
  GLOVO_URL: "https://glovoapp.com",
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
    description: "A premium selection of pre-sliced Pitaya, Mango, and Litchi clusters.",
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
    image: ASSETS.CATALOG_YELLOW_PITAYA,
    category: 'exotic'
  }
];

export const SMOOTHIES: Smoothie[] = [
  {
    id: 's1',
    name: 'Dragon Punch',
    titleMain: "NATURE'S POWER",
    titleAccent: 'IN EVERY',
    titleEnd: 'SIP',
    description: "Our Fresh Bar isn't just a menu, it's a health laboratory. Every smoothie is prepared from fruit you pick yourself.",
    image: ASSETS.SMOOTHIE_DRAGON,
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
    image: ASSETS.SMOOTHIE_MANGO,
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
    image: ASSETS.SMOOTHIE_LIME,
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
    image: ASSETS.SMOOTHIE_BERRY,
    color: '#4C1D95',
    textColor: 'text-white'
  }
];