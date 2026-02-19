
import React, { useRef } from 'react';
import { Heart, ArrowUpRight, Globe, Zap, Info } from 'lucide-react';
import { PRODUCTS, ASSETS } from '../constants';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';

const MenuSection: React.FC = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useLanguage();
  
  const exoticFruits = PRODUCTS.filter(p => p.category === 'exotic');

  return (
    <section id="offer" className="py-24 lg:py-48 bg-white dark:bg-froota-dark transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Labels */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-impact text-black/[0.02] dark:text-white/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
        Curated Selection • Zagreb 2026
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="mb-24 lg:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-froota-pink mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-froota-pink"></span>
              {t('showcase.badge')}
            </p>
            <h2 className="text-7xl md:text-9xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.85] mb-8">
              {t('showcase.title')}
            </h2>
            <p className="text-xl lg:text-3xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight">
              {t('showcase.subtitle')}
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-8 py-4 bg-froota-wood dark:bg-white/5 rounded-2xl flex flex-col justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-froota-pink">Dostupno</span>
                <span className="text-2xl font-impact dark:text-white">12+ VRSTA</span>
             </div>
          </div>
        </div>

        {/* Immersive Grid */}
        <div className="space-y-40">
          {exoticFruits.map((product, idx) => {
            const active = isFavorite(product.id);
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={product.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32 group`}
              >
                {/* Visual Stage */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/5] bg-froota-wood dark:bg-white/5 rounded-[60px] relative overflow-hidden flex items-center justify-center p-12 lg:p-24 transition-transform duration-700 group-hover:scale-[1.02]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6" 
                    />
                    
                    {/* Hover Specs Overlay */}
                    <div className="absolute inset-0 bg-froota-dark/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-12 lg:p-16 text-white">
                        <div className="space-y-8">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-froota-pink mb-4">{t('showcase.health')}</p>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-1">
                                <p className="text-xs text-white/40">{t('showcase.vitamin_c')}</p>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-froota-green w-[85%]"></div>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-white/40">{t('showcase.energy')}</p>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-froota-pink w-[60%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-8 border-t border-white/10">
                             <p className="text-[10px] font-black uppercase tracking-widest text-froota-pink mb-2">{t('showcase.notes')}</p>
                             <p className="text-lg italic font-display">Slatko, kremasto, s blagim notama vanilije i šumskog voća.</p>
                          </div>
                        </div>
                    </div>
                  </div>

                  {/* Floating Action */}
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute bottom-8 right-8 w-16 h-16 rounded-full bg-white dark:bg-froota-dark shadow-2xl flex items-center justify-center transition-all ${active ? 'text-froota-pink scale-110' : 'text-gray-400 hover:text-froota-pink'}`}
                  >
                    <Heart size={24} fill={active ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                      <span className="px-4 py-1.5 rounded-full border border-froota-dark/10 dark:border-white/10 text-[9px] font-black uppercase tracking-widest dark:text-white/60">
                        {t('showcase.origin')}: VIETNAM
                      </span>
                      {product.tag && (
                        <span className="px-4 py-1.5 rounded-full bg-froota-pink text-white text-[9px] font-black uppercase tracking-widest">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-6xl md:text-8xl font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tighter">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xl lg:text-2xl text-froota-dark/50 dark:text-white/40 leading-relaxed font-medium">
                    {product.description}
                  </p>

                  <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-froota-dark/30 dark:text-white/20 mb-1">Cijena u marketu</p>
                      <p className="text-4xl font-impact text-froota-dark dark:text-white">{product.price}</p>
                    </div>
                    <a href="#location" className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-froota-pink hover:text-froota-dark dark:hover:text-white transition-colors group">
                      DOĐI I IZABERI <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showcase Bottom Banner */}
        <div className="mt-48 p-12 lg:p-24 bg-froota-dark dark:bg-white/5 rounded-[60px] text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-froota-pink/20 blur-[100px] pointer-events-none"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                 <h4 className="text-4xl lg:text-6xl font-impact uppercase leading-none mb-6">Tvoj Premium Izvor Egzotike</h4>
                 <p className="text-white/60 text-lg">{t('showcase.seasonal')}</p>
              </div>
              <a href="#location" className="px-12 py-6 bg-white text-froota-dark rounded-full font-impact text-xl uppercase tracking-widest hover:bg-froota-pink hover:text-white transition-all shadow-xl">
                 NAVIGIRAJ DO MARKETA
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
