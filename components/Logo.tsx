
import React, { useState } from 'react';
import { Citrus } from 'lucide-react';
import { ASSETS } from '../constants';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  const [imgError, setImgError] = useState(false);

  // If ASSETS.LOGO is provided and hasn't failed to load, render the image
  if (ASSETS.LOGO && !imgError) {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={ASSETS.LOGO} 
          alt="Froota Market" 
          className="h-11 w-auto object-contain" 
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Default premium SVG + Text Logo (Used if no image is provided or if it fails)
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="w-11 h-11 bg-froota-dark dark:bg-froota-pink rounded-full flex items-center justify-center text-froota-pink dark:text-froota-dark shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
         <div className="relative">
           <Citrus size={24} className="group-hover:rotate-12 transition-transform" />
           <span className="absolute -top-1 -right-1 w-3 h-3 bg-froota-green rounded-full border-2 border-froota-dark"></span>
         </div>
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-impact text-froota-dark dark:text-white tracking-tighter text-3xl uppercase">Froota</span>
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-froota-pink ml-0.5">Market</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
