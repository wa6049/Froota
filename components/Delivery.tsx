
import React from 'react';
import { ExternalLink, Clock, PackageCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Delivery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="py-20 bg-white dark:bg-froota-dark border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=1000" 
              alt="Fresh Fruit Delivery Box" 
              className="rounded-3xl shadow-xl grayscale-[10%] hover:grayscale-0 transition-all duration-500 dark:opacity-80"
            />
            
            {/* Overlay Info Card */}
            <div className="absolute -bottom-8 -right-4 bg-white dark:bg-white/10 dark:backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-xs border border-gray-50 dark:border-white/5 hidden md:block">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 dark:bg-green-500/20 rounded-full text-froota-green">
                   <PackageCheck size={24} />
                </div>
                <div>
                   <p className="font-bold text-gray-900 dark:text-white">{t('delivery.packaging')}</p>
                   <p className="text-xs text-gray-500 dark:text-white/40 mt-1">{t('delivery.packaging_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              {t('delivery.title')}
              <br />
              <span className="text-gray-400 dark:text-white/30">{t('delivery.subtitle')}</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-white/50 leading-relaxed">
              {t('delivery.desc')}
            </p>

            <div className="space-y-4">
              <a 
                href={BUSINESS_INFO.woltUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-blue-500/10 hover:border-blue-500 bg-blue-50 dark:bg-blue-500/5 hover:bg-blue-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white">{t('delivery.order_wolt')}</span>
                </div>
                <ExternalLink className="text-blue-500 group-hover:text-white" />
              </a>

              <a 
                href={BUSINESS_INFO.glovoUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-yellow-400/10 hover:border-yellow-400 bg-yellow-50 dark:bg-yellow-400/5 hover:bg-yellow-400 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{t('delivery.order_glovo')}</span>
                </div>
                <ExternalLink className="text-yellow-600 group-hover:text-gray-900" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/30">
              <Clock className="w-4 h-4" />
              <span>{t('delivery.prep_time')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Delivery;
