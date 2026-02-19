import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('froota_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('froota_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-900 font-bold text-sm mb-1">{t('cookies.title')}</p>
          <p className="text-gray-600 text-sm">
            {t('cookies.text')}
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={accept}
            className="flex-1 md:flex-none px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg text-sm transition-colors"
          >
            {t('cookies.settings')}
          </button>
          <button 
            onClick={accept}
            className="flex-1 md:flex-none px-6 py-2.5 bg-froota-green hover:bg-lime-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-lg shadow-lime-500/30"
          >
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;