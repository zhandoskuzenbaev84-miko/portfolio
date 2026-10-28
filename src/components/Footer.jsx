import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { socialLinks } from '../data/socialLinks';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-light-surface/60 dark:bg-dark-surface/60 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/5 dark:border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={handleBackToTop}
              className="flex items-center gap-2.5 font-mono text-lg font-bold tracking-tight text-light-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-white shadow-md">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                <span>MEYRLAN</span>
                <span className="text-accent-purple">.</span>
                <span className="text-accent-cyan">DEV</span>
              </span>
            </button>
            <p className="text-sm text-light-muted dark:text-dark-muted max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text">
              {t.footer.quickLinks}
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-light-muted dark:text-dark-muted hover:text-accent-purple dark:hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text">
              {t.footer.connect}
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent-purple/40 text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-light-muted dark:text-dark-muted">
          <div>
            &copy; {currentYear} Meyrlan Abubakirov. {t.footer.allRights}
          </div>

          <div className="flex items-center gap-4">
            <span>{t.footer.designedWith}</span>
            <button
              type="button"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-light-text dark:text-dark-text transition-colors border border-black/5 dark:border-white/10"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent-purple" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
