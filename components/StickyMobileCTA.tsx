
import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-froota-dark/95 dark:backdrop-blur-xl border-t border-gray-200 dark:border-white/10 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-3 transition-colors duration-500">
      <a 
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
      >
        <Phone size={18} />
        Nazovi
      </a>
      <a 
        href={BUSINESS_INFO.woltUrl}
        className="flex-[2] flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform shadow-lg shadow-blue-500/20"
      >
        Naruči (Wolt)
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
