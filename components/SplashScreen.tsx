
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<'intro' | 'outro'>('intro');

  useEffect(() => {
    // Ensuring splash screen shows for at least 2.2 seconds for branding
    const timer = setTimeout(() => {
      setPhase('outro');
      // Extra 800ms for the outro animation to complete
      const finishTimer = setTimeout(onFinish, 800);
      return () => clearTimeout(finishTimer);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.83, 0, 0.17, 1)] ${
        phase === 'outro' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      } bg-white dark:bg-froota-dark`}
    >
      {/* Liquid Splash Animation Background - Pink Overlay */}
      <div className={`absolute inset-0 bg-froota-pink transform transition-transform duration-1000 ease-[cubic-bezier(0.83, 0, 0.17, 1)] ${
        phase === 'intro' ? 'translate-y-0' : '-translate-y-full'
      }`}></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className={`transition-all duration-700 delay-200 transform flex flex-col items-center ${
          phase === 'intro' ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="bg-white p-8 rounded-[40px] shadow-2xl scale-110 mb-8">
            <Logo iconOnly className="scale-125" />
          </div>
          
          <div className="text-center">
            <h1 className={`font-impact text-6xl lg:text-8xl tracking-tighter uppercase transition-all duration-700 delay-300 ${
              phase === 'intro' ? 'text-white' : 'text-froota-dark dark:text-white'
            }`}>
              Froota Market
            </h1>
            <p className={`text-[10px] font-black uppercase tracking-[0.5em] transition-opacity duration-700 delay-500 ${
              phase === 'intro' ? 'text-white/60' : 'text-froota-dark/30 dark:text-white/20'
            }`}>
              Zagreb • Est. 2024
            </p>
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="mt-12 w-48 h-[2.5px] bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-white animate-[progress_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
