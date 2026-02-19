
import React from 'react';
import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-froota-dark border-t border-gray-100 dark:border-white/5 pt-24 pb-32 md:pb-12 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-gray-400 dark:text-white/30 text-sm">© {new Date().getFullYear()} {t('footer.rights')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <a href="#home" className="text-gray-500 dark:text-white/40 hover:text-froota-pink dark:hover:text-froota-pink text-xs font-black uppercase tracking-widest">{t('nav.home')}</a>
            <a href="#offer" className="text-gray-500 dark:text-white/40 hover:text-froota-pink dark:hover:text-froota-pink text-xs font-black uppercase tracking-widest">{t('nav.offer')}</a>
            <a href="#delivery" className="text-gray-500 dark:text-white/40 hover:text-froota-pink dark:hover:text-froota-pink text-xs font-black uppercase tracking-widest">{t('nav.delivery')}</a>
            <a href="#location" className="text-gray-500 dark:text-white/40 hover:text-froota-pink dark:hover:text-froota-pink text-xs font-black uppercase tracking-widest">{t('nav.location')}</a>
          </div>

          <div className="flex gap-4">
             <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-froota-pink hover:text-white transition-all">
               <Instagram size={20} />
             </a>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 dark:text-white/20 font-black uppercase tracking-widest">
           <div className="flex gap-8">
             <a href="#" className="hover:text-froota-pink">{t('footer.privacy')}</a>
             <a href="#" className="hover:text-froota-pink">{t('footer.terms')}</a>
             <a href="#" className="hover:text-froota-pink">{t('footer.cookies')}</a>
           </div>
           <p>{t('footer.made_by')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
