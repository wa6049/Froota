
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FreshBar from './components/FreshBar';
import HowItWorks from './components/HowItWorks';
import Delivery from './components/Delivery';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import CookieConsent from './components/CookieConsent';
import PremiumBackground from './components/GraffitiBackground';
import FavoritesSidebar from './components/FavoritesSidebar';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import { FavoritesProvider } from './context/FavoritesContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

type View = 'home' | 'products' | 'freshbar';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<View>('home');

  // Hash-based Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash === 'products') setCurrentView('products');
      else if (hash === 'freshbar') setCurrentView('freshbar');
      else setCurrentView('home');
      
      // Scroll to top on view change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <div className="min-h-screen font-sans text-slate-900 dark:text-white transition-colors duration-500 selection:bg-froota-pink selection:text-white relative">
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
            
            <CustomCursor />
            <PremiumBackground />
            
            <Navbar currentView={currentView} />
            
            <main className="relative z-10">
              {currentView === 'home' && (
                <div className="animate-in fade-in duration-1000">
                  <Hero />
                  <HowItWorks />
                  <MenuSection />
                  <FreshBar />
                  <Delivery />
                  <Location />
                </div>
              )}

              {currentView === 'products' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-20">
                  <MenuSection />
                  <Location />
                </div>
              )}

              {currentView === 'freshbar' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-20">
                  <FreshBar />
                  <Location />
                </div>
              )}
            </main>

            <Footer />
            <StickyMobileCTA />
            
            <FavoritesSidebar />
            <CookieConsent />
          </div>
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
