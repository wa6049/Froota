export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string; // Optional as per request for placeholders
  image: string;
  category: 'exotic' | 'fresh-bar' | 'vege' | 'platters';
  tag?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessInfo {
  address: string;
  city: string;
  mapUrl: string;
  phone: string;
  email: string;
  woltUrl: string;
  glovoUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  workingHours: string;
}