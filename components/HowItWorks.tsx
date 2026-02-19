
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
    <section className="py-32 lg:py-64 bg-white dark:bg-froota-dark overflow-hidden relative transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-froota-pink/5 dark:bg-white/[0.02] hidden lg:block" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-40">
          
          {/* Visual Presentation Area */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4 lg:gap-8 translate-y-12">
                <div className="space-y-4 lg:space-y-8">
                   <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl group">
                      <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Process 1" />
                   </div>
                   <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl group">
                      <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Process 2" />
                   </div>
                </div>
                <div className="space-y-4 lg:space-y-8 -translate-y-12">
                   <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl group">
                      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Process 3" />
                   </div>
                   <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl group">
                      <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Process 4" />
                   </div>
                </div>
             </div>
             
             {/* Year Badge */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white dark:bg-froota-dark rounded-full shadow-2xl flex items-center justify-center p-4 border border-gray-100 dark:border-white/10 z-20">
                <div className="text-center">
                   <p className="font-impact text-4xl leading-none text-froota-pink">2026</p>
                   <p className="text-[8px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">Premium Standard</p>
                </div>
             </div>
          </div>

          {/* Textual Content Area */}
          <div className="w-full lg:w-1/2 space-y-16 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-froota-pink flex items-center justify-center lg:justify-start gap-4">
                <span className="w-8 h-[1px] bg-froota-pink"></span>
                {t('howItWorks.badge')}
              </p>
              <h2 className="text-6xl lg:text-[100px] font-impact text-froota-dark dark:text-white uppercase leading-[0.8] tracking-tighter">
                {t('howItWorks.title')}
              </h2>
              <p className="text-xl lg:text-3xl text-froota-dark/50 dark:text-white/30 italic font-display max-w-xl mx-auto lg:mx-0">
                "{t('howItWorks.quote')}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {steps.map((step, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.color} shadow-lg shadow-black/5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 mx-auto lg:mx-0`}>
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-impact text-2xl text-froota-dark dark:text-white uppercase tracking-tight">{step.title}</h4>
                    <p className="text-sm text-froota-dark/50 dark:text-white/40 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex justify-center lg:justify-start">
               <a href="#location" className="inline-flex items-center gap-6 px-12 py-6 bg-froota-dark dark:bg-white text-white dark:text-froota-dark rounded-full font-impact text-xl uppercase tracking-widest hover:bg-froota-pink dark:hover:bg-froota-pink dark:hover:text-white transition-all shadow-xl group">
                 {t('howItWorks.cta')} 
                 <div className="w-12 h-12 bg-froota-pink rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                    <Compass size={22} />
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
