import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LANG_STORAGE_KEY = 'meyrlan_portfolio_lang';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang === 'en' || savedLang === 'uz') {
        return savedLang;
      }
      return 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch (e) {
      console.warn('Unable to persist language to localStorage', e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'uz' : 'en'));
  };

  const t = translations[language] || translations.en;

  return {
    language,
    toggleLanguage,
    setLanguage,
    t,
  };
}
