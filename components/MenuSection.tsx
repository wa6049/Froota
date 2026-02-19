
import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';

const MenuSection: React.FC = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useLanguage();

  return (
    <section id="offer" className="py-24 lg:py-40 bg-white dark:bg-froota-dark transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="mb-24 lg:mb-40 text-center lg:text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-froota-pink mb-6 flex items-center justify-center lg:justify-start gap-4">
            <span className="w-12 h-[1px] bg-froota-pink hidden lg:block"></span>
            {t('showcase.badge')}
          </p>
          <h2 className="text-7xl md:text-9xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.8] mb-8">
            {t('showcase.title')}
          </h2>
          <p className="text-xl lg:text-3xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight max-w-2xl mx-auto lg:mx-0">
            {t('showcase.subtitle')}
          </p>
        </div>

        {/* Catalog Grid - Multi-column clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {PRODUCTS.map((product, idx) => {
            const active = isFavorite(product.id);

            return (
              <div 
                key={product.id} 
                className="group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Visual Stage */}
                <div className="relative aspect-[4/5] bg-froota-wood dark:bg-white/5 rounded-[60px] overflow-hidden flex items-center justify-center p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] group-hover:-translate-y-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-1000 group-hover:scale-110" 
                  />

                  {/* Favorite Button */}
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white dark:bg-froota-dark shadow-xl flex items-center justify-center transition-all z-20 ${active ? 'text-froota-pink' : 'text-gray-300 hover:text-froota-pink'}`}
                  >
                    <Heart size={20} fill={active ? 'currentColor' : 'none'} />
                  </button>

                  {/* Top Category Badge */}
                  <div className="absolute top-8 left-8">
                    <span className="text-[8px] font-black uppercase tracking-widest bg-white/80 dark:bg-froota-dark/80 px-4 py-1.5 rounded-full backdrop-blur-md text-froota-dark/40 dark:text-white/40">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-4xl md:text-6xl font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-lg lg:text-xl text-froota-dark/40 dark:text-white/30 font-medium leading-relaxed max-w-sm">
                        {product.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-impact text-froota-dark dark:text-white">{product.price}</p>
                      <a href="#location" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-froota-pink hover:text-froota-dark transition-colors">
                        MARKET <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
