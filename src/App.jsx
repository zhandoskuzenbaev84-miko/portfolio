import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      {/* Accessible Skip Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-purple text-white rounded-lg font-mono text-xs shadow-lg"
      >
        {language === 'uz' ? "Asosiy tarkibga o'tish" : "Skip to main content"}
      </a>

      {/* Global Ambient Glow Orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent-purple/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Fixed Navbar */}
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero t={t} language={language} />
        <About t={t} language={language} />
        <Skills t={t} />
        <Projects t={t} language={language} />
        <Contact t={t} language={language} />
      </main>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}
