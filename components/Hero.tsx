
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MapPin } from 'lucide-react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-32 overflow-hidden bg-[#FDFDFD] dark:bg-froota-dark transition-colors duration-500">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-froota-pink/5 dark:bg-froota-pink/10 hidden lg:block" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:grid lg:grid-cols-2 items-center z-20">
        
        {/* Left Side: Content */}
        <div className="w-full text-center lg:text-left space-y-8 lg:space-y-12 mb-16 lg:mb-0">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 bg-froota-pink/10 px-5 py-2.5 rounded-full border border-froota-pink/10">
              <span className="w-2 h-2 rounded-full bg-froota-pink animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-froota-pink">{t('hero.location_badge')}</span>
            </div>
            <h1 className="font-impact text-froota-dark dark:text-white text-6xl md:text-8xl lg:text-[140px] leading-[0.8] uppercase tracking-tighter">
              {t('hero.title_main')} <br />
              <span className="text-froota-pink">{t('hero.title_accent')}</span> <br />
              <span className="relative">
                {t('hero.title_end')}
                <span className="absolute -bottom-2 left-0 w-1/3 h-2 lg:h-4 bg-froota-green/30 -z-10"></span>
              </span>
            </h1>
          </div>
          
          <p className="text-froota-dark/50 dark:text-white/40 text-lg lg:text-2xl max-w-md leading-relaxed font-medium mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a href="#location" className="w-full sm:w-auto bg-froota-dark dark:bg-white dark:text-froota-dark text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-froota-pink dark:hover:bg-froota-pink dark:hover:text-white transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/10">
              {t('hero.cta_visit')} <ArrowRight size={16} />
            </a>
            <a href="#offer" className="text-froota-dark/40 dark:text-white/30 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-froota-pink transition-colors group">
              {t('hero.cta_explore')} <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Floating Fruit Garden */}
        <div className="w-full relative h-[450px] lg:h-[750px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-none h-full">
            
            {/* Soft Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-froota-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Central Dragonfruit (Main Hero) */}
            <div className="absolute top-[15%] left-[10%] lg:left-[15%] w-[220px] lg:w-[440px] z-30 animate-float-slow transition-transform duration-1000">
              <img 
                src={ASSETS.DRAGON_FRUIT} 
                className="w-full drop-shadow-[0_50px_100px_rgba(233,44,108,0.35)] filter contrast-110"
                alt="Dragonfruit"
              />
            </div>

            {/* Mango */}
            <div className="absolute bottom-[20%] left-[5%] lg:left-[10%] w-[130px] lg:w-[260px] z-20 animate-float rotate-12 transition-transform duration-1000 delay-150">
              <img 
                src={ASSETS.MANGO} 
                className="w-full drop-shadow-[0_30px_60px_rgba(255,184,0,0.25)]"
                alt="Mango"
              />
            </div>

            {/* Lime Slices */}
            <div className="absolute top-[40%] right-[5%] lg:right-[0%] w-[90px] lg:w-[180px] z-40 animate-float-fast -rotate-12 transition-transform duration-1000 delay-300">
              <img 
                src={ASSETS.LIME} 
                className="w-full drop-shadow-[0_20px_40px_rgba(151,192,45,0.2)]"
                alt="Lime"
              />
            </div>

            {/* Passionfruit (Small Accent) */}
            <div className="absolute bottom-[10%] right-[15%] lg:right-[20%] w-[80px] lg:w-[140px] z-10 animate-float-slow transition-transform duration-1000 delay-500 opacity-80">
              <img 
                src={ASSETS.PASSION} 
                className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                alt="Passionfruit"
              />
            </div>

            {/* Litchi (Small Accent) */}
            <div className="absolute top-[5%] right-[25%] w-[60px] lg:w-[120px] z-10 animate-float transition-transform duration-1000 delay-700 opacity-60">
              <img 
                src={ASSETS.LITCHI} 
                className="w-full"
                alt="Litchi"
              />
            </div>

            {/* Daily Fresh Sticker */}
            <div className="absolute top-[10%] right-[10%] lg:right-[20%] z-50 animate-pulse-soft">
              <div className="bg-froota-pink p-6 lg:p-10 rounded-[30px] lg:rounded-[45px] shadow-[0_25px_50px_rgba(233,44,108,0.4)] rotate-6 border border-white/20">
                <p className="font-impact text-3xl lg:text-5xl text-white leading-none mb-1 uppercase">FRESH DAILY</p>
                <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Arrived this morning.</p>
                
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-froota-dark rounded-full flex items-center justify-center text-white border-4 border-froota-pink shadow-lg">
                  <span className="w-1.5 h-1.5 bg-froota-pink rounded-full"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
