
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Zap, Droplets, HeartPulse, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SMOOTHIES } from '../constants';

const FreshBar: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSmoothie = SMOOTHIES[activeIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SMOOTHIES.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + SMOOTHIES.length) % SMOOTHIES.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section 
      id="fresh-bar" 
      className="py-24 lg:py-48 relative overflow-hidden transition-colors duration-1000 ease-in-out min-h-screen flex items-center"
      style={{ backgroundColor: currentSmoothie.color }}
    >
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Product Focus */}
          <div className="w-full order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-froota-dark/10 backdrop-blur-3xl rounded-[60px] lg:rounded-[100px] p-6 lg:p-20 relative overflow-hidden shadow-2xl">
              
              <div className={`w-full h-full transition-all duration-1000 flex items-center justify-center ${isAnimating ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
                <img 
                  src={currentSmoothie.image} 
                  className="w-full h-full object-cover rounded-[40px] lg:rounded-[80px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-8 border-white/5"
                  alt={currentSmoothie.name}
                />
              </div>

              {/* Lab Stats Overlay */}
              <div className={`absolute top-10 right-10 flex flex-col gap-4 transition-all duration-700 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/10">
                   <Zap size={20} />
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/10">
                   <HeartPulse size={20} />
                </div>
              </div>
            </div>

            {/* Carousel Navigation Overlay */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-froota-dark/90 backdrop-blur-2xl px-8 py-6 rounded-full border border-white/10 shadow-2xl">
              <button onClick={handlePrev} className="text-white/60 hover:text-white transition-colors active:scale-90">
                <ArrowLeft size={24} />
              </button>
              <div className="flex gap-2">
                {SMOOTHIES.map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all ${activeIndex === i ? 'w-10 bg-froota-pink' : 'w-2 bg-white/20'}`}></button>
                ))}
              </div>
              <button onClick={handleNext} className="text-white/60 hover:text-white transition-colors active:scale-90">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side: Elixir Content */}
          <div className={`w-full order-1 lg:order-2 space-y-12 ${currentSmoothie.textColor} transition-all duration-700 ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
            <div className="space-y-6">
              <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.5em] opacity-60 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-current"></span>
                {t('freshbar.badge')}
              </p>
              <h2 className="text-6xl md:text-8xl lg:text-[120px] font-impact mb-4 lg:mb-8 tracking-tighter leading-[0.8] uppercase">
                {currentSmoothie.titleMain} <br />
                <span className="opacity-40">{currentSmoothie.titleAccent}</span> <br />
                {currentSmoothie.titleEnd}
              </h2>
            </div>

            <p className="text-xl lg:text-3xl opacity-80 leading-tight max-w-xl font-display italic">
              {currentSmoothie.description}
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-current/10">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">{t('freshbar.ingredients')}</p>
                  <p className="text-lg font-bold">Pitaja, Đumbir, Limeta, Kokos</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">{t('freshbar.benefit')}</p>
                  <div className="flex items-center gap-3">
                    <Droplets size={16} />
                    <p className="text-lg font-bold uppercase tracking-tighter">{t('freshbar.immunity')}</p>
                  </div>
               </div>
            </div>

            <div className="pt-12">
               <a 
                 href="#location" 
                 className={`inline-flex items-center gap-6 px-12 py-6 bg-froota-dark text-white rounded-full font-impact text-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl group`}
               >
                 {t('freshbar.order')}
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-froota-pink transition-colors">
                    <Sparkles size={18} />
                 </div>
               </a>
            </div>
          </div>

        </div>
      </div>

      {/* Background Floating Text */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-5">
         <span className="text-[12vw] font-impact uppercase tracking-tighter text-white whitespace-nowrap">PREPARED FRESH DAILY IN OZALJSKA 83</span>
      </div>
    </section>
  );
};

export default FreshBar;
