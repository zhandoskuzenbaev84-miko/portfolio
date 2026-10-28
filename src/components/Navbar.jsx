import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import Button from './Button';

export default function Navbar({
  language,
  toggleLanguage,
  theme,
  toggleTheme,
  t,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id, () => {
      setMobileMenuOpen(false);
      setActiveSection(id);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 font-mono text-base sm:text-lg font-bold tracking-tight text-light-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-white shadow-md shadow-accent-purple/30 group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="flex items-center">
              <span>MEYRLAN</span>
              <span className="text-accent-purple">.</span>
              <span className="text-accent-cyan">DEV</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-light-surface/70 dark:bg-dark-surface/60 border border-black/5 dark:border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple to-indigo-600 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Controls (Lang, Theme, Contact CTA) */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher
              language={language}
              toggleLanguage={toggleLanguage}
              ariaLabel={t.nav.switchLang}
            />

            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              ariaLabel={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
            />

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('contact')}
              className="text-xs ml-1"
            >
              {t.nav.contact}
            </Button>
          </div>

          {/* Mobile Menu Button & Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher
              language={language}
              toggleLanguage={toggleLanguage}
              ariaLabel={t.nav.switchLang}
            />
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              ariaLabel={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="p-2 rounded-xl border border-black/10 dark:border-white/10 bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-black/10 dark:border-white/10 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent-purple text-white'
                        : 'text-light-muted dark:text-dark-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-light-text dark:hover:text-dark-text'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-accent-cyan" />}
                  </button>
                );
              })}

              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNavClick('contact')}
                  className="w-full justify-center"
                >
                  {t.nav.contact}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
