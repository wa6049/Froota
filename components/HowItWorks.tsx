
import React from 'react';
import { MapPin, Search, HandMetal, SmilePlus, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <MapPin size={24} />,
      title: t('howItWorks.step1_title'),
      desc: t('howItWorks.step1_desc'),
      color: "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Search size={24} />,
      title: t('howItWorks.step2_title'),
      desc: t('howItWorks.step2_desc'),
      color: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <HandMetal size={24} />,
      title: t('howItWorks.step3_title'),
      desc: t('howItWorks.step3_desc'),
      color: "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400"
    },
    {
      icon: <SmilePlus size={24} />,
      title: t('howItWorks.step4_title'),
      desc: t('howItWorks.step4_desc'),
      color: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-froota-dark overflow-hidden relative transition-colors duration-500">
      {/* Background shape */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 border-[50px] border-[#FFB800]/5 dark:border-[#FFB800]/10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6 relative">
            <div className="absolute inset-0 bg-[#FFB800]/10 dark:bg-froota-pink/5 blur-[100px] -z-10"></div>
            <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" className="rounded-[32px] lg:rounded-[40px] w-full h-48 lg:h-64 object-cover shadow-2xl dark:opacity-80" alt="Exotic selection" />
            <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=600" className="rounded-[32px] lg:rounded-[40px] w-full h-48 lg:h-64 object-cover translate-y-8 lg:translate-y-12 shadow-2xl dark:opacity-80" alt="Fresh fruits" />
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" className="rounded-[32px] lg:rounded-[40px] w-full h-48 lg:h-64 object-cover shadow-2xl dark:opacity-80" alt="Health" />
            <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600" className="rounded-[32px] lg:rounded-[40px] w-full h-48 lg:h-64 object-cover translate-y-8 lg:translate-y-12 shadow-2xl dark:opacity-80" alt="Selection" />
          </div>

          {/* Steps Content */}
          <div className="w-full lg:w-1/2 space-y-12 lg:space-y-16 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-froota-pink">{t('howItWorks.badge')}</p>
              <h2 className="text-5xl lg:text-7xl font-impact text-froota-dark dark:text-white uppercase leading-none">{t('howItWorks.title')}</h2>
              <p className="text-lg lg:text-xl text-froota-dark/50 dark:text-white/40 italic font-display max-w-md mx-auto lg:mx-0">
                {t('howItWorks.quote')}
              </p>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start group">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[20px] lg:rounded-[24px] shrink-0 flex items-center justify-center ${step.color} shadow-lg shadow-black/5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    {step.icon}
                  </div>
                  <div className="pt-0 lg:pt-1">
                    <h4 className="font-impact text-2xl text-froota-dark dark:text-white uppercase tracking-tight mb-2">{step.title}</h4>
                    <p className="text-sm text-froota-dark/50 dark:text-white/40 leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex justify-center lg:justify-start">
               <a href="#location" className="inline-flex items-center gap-6 px-10 py-5 bg-froota-dark dark:bg-white text-white dark:text-froota-dark rounded-full font-impact text-lg uppercase tracking-widest hover:bg-froota-pink dark:hover:bg-froota-pink dark:hover:text-white transition-all shadow-xl active:scale-95 group">
                 {t('howItWorks.cta')} 
                 <div className="w-10 h-10 bg-froota-pink rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                    <Compass size={20} />
                 </div>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
