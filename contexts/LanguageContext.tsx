import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import type { Locale } from '../types';
import { translations } from '../i18n/translations';

type LanguageContextType = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: keyof typeof translations) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLocale = (): Locale => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && ['en', 'fr', 'ar'].includes(savedLocale)) {
        return savedLocale as Locale;
    }
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'fr') return 'fr';
    if (browserLang === 'ar') return 'ar';
    return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem('locale', language);
  }, [language]);
  
  const setLanguage = (lang: Locale) => {
      setLanguageState(lang);
  };

  const t = (key: keyof typeof translations): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
