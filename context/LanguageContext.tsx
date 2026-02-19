import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'hr' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { TRANSLATIONS } from '../translations';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hr');

  useEffect(() => {
    const stored = localStorage.getItem('froota_lang') as Language;
    if (stored) {
      setLanguage(stored);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('hr') ? 'hr' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('froota_lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = TRANSLATIONS[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback if missing
      }
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};