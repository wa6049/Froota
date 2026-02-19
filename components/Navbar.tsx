
import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Globe, Moon, Sun } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { setSidebarOpen, favorites } = useFavorites();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.offer'), href: '#offer' },
    { name: t('nav.freshBar'), href: '#fresh-bar' },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 px-4 pt-6 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-6'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between bg-white/90 dark:bg-froota-dark/90 backdrop-blur-xl px-8 py-4 rounded-[32px] border border-white/20 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all ${scrolled ? 'py-3' : 'py-5'}`}>
        
        {/* Logo Area */}
        <a href="#home">
          <Logo />
        </a>

        {/* Navigation Links - Matches Screenshot exactly */}
        <nav className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-black uppercase tracking-[0.5em] text-froota-dark/80 dark:text-white/80 hover:text-froota-pink dark:hover:text-froota-pink transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-froota-pink transition-all group-hover:w-1/2"></span>
            </a>
          ))}
        </nav>

        {/* Action Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-gray-100 dark:border-white/5 text-froota-dark/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button 
            onClick={() => setSidebarOpen(true)}
            className="relative p-2 text-froota-dark/40 dark:text-white/40 hover:text-froota-pink transition-colors"
          >
            <Heart size={22} className={favorites.length > 0 ? 'fill-froota-pink text-froota-pink' : ''} />
            {favorites.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-froota-green text-froota-dark text-[9px] font-black rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
          
          <a 
            href="#location"
            className="bg-froota-pink text-white px-5 sm:px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-froota-dark dark:hover:bg-froota-green dark:hover:text-froota-dark transition-all flex items-center gap-3 shadow-xl shadow-froota-pink/20"
          >
            <span className="hidden sm:inline">POSJETI NAS</span> <MapPin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
