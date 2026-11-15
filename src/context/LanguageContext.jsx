import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('sls_language') || 'en';
  });

  const [hasChosenLanguage, setHasChosenLanguage] = useState(() => {
    return !!localStorage.getItem('sls_language');
  });

  const selectLanguage = (lang) => {
    setLanguageState(lang);
    setHasChosenLanguage(true);
    localStorage.setItem('sls_language', lang);
  };

  const t = (key) => {
    if (!TRANSLATIONS[language]) return TRANSLATIONS['en'][key] || key;
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: selectLanguage,
        hasChosenLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
