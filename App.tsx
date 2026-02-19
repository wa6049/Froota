
import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <div className="min-h-screen font-sans text-slate-900 dark:text-white transition-colors duration-500 selection:bg-froota-pink selection:text-white relative">
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
            
            <CustomCursor />
            <PremiumBackground />
            
            <Navbar />
            
            <main className="relative z-10">
              <Hero />
              <MenuSection />
              <HowItWorks />
              <FreshBar />
              <Delivery />
              <Location />
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
