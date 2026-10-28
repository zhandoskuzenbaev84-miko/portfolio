import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ language, toggleLanguage, ariaLabel }) {
  const isEn = language === 'en';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={ariaLabel || (isEn ? "Switch to Uzbek" : "Ingliz tiliga o'tish")}
      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple bg-light-surface/80 dark:bg-dark-surface/80 border-black/10 dark:border-white/10 hover:border-accent-purple/40 shadow-sm"
    >
      <Globe className="w-3.5 h-3.5 text-accent-purple" />
      <div className="flex items-center gap-1">
        <span
          className={`transition-colors ${
            isEn
              ? 'text-accent-purple dark:text-accent-cyan font-bold'
              : 'text-light-muted dark:text-dark-muted'
          }`}
        >
          EN
        </span>
        <span className="text-light-muted/50 dark:text-dark-muted/50">/</span>
        <span
          className={`transition-colors ${
            !isEn
              ? 'text-accent-purple dark:text-accent-cyan font-bold'
              : 'text-light-muted dark:text-dark-muted'
          }`}
        >
          UZ
        </span>
      </div>
    </button>
  );
}
