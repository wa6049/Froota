
import React from 'react';

const PremiumBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FDFDFD] dark:bg-froota-dark transition-colors duration-500">
      {/* Background Lighting */}
      <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] bg-froota-pink/[0.04] dark:bg-froota-pink/[0.08] rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-froota-green/[0.03] dark:bg-froota-green/[0.06] rounded-full blur-[140px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-froota-dark/[0.01] dark:bg-white/[0.02] rounded-full blur-[200px]"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#102229 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
    </div>
  );
};

export default PremiumBackground;
