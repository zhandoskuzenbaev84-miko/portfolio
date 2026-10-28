import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, FileCode, CheckCircle, Cpu } from 'lucide-react';
import Button from '../components/Button';
import { scrollToSection } from '../utils/scrollToSection';
import { profile } from '../data/profile';

export default function Hero({ t, language }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-accent-purple/15 dark:bg-accent-purple/20 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-accent-cyan/15 dark:bg-accent-cyan/15 blur-3xl pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-accent-purple/10 text-accent-purple dark:text-accent-cyan border border-accent-purple/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Eyebrow & Main Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="block text-xs sm:text-sm font-mono tracking-widest text-light-muted dark:text-dark-muted uppercase font-semibold">
                {t.hero.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-[1.1] sm:leading-[1.1]">
                {t.hero.headingLine1}{' '}
                <span className="text-accent-gradient">
                  {t.hero.headingLine2}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted max-w-xl leading-relaxed">
                {t.hero.description}
              </p>
            </motion.div>

            {/* Call To Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                icon={Sparkles}
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.secondaryCta}
              </Button>
            </motion.div>

            {/* Core Stack Pills */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                  {t.hero.techStackBadge}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.coreTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-light-surface dark:bg-dark-surface/80 border border-black/5 dark:border-white/10 text-light-text dark:text-dark-text hover:border-accent-purple/40 transition-colors shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Code-inspired Developer Visual (Futuristic Glass Panel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Border Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-purple/30 via-accent-cyan/30 to-indigo-600/30 blur-xl opacity-75 dark:opacity-60 -z-10 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-black/10 dark:border-white/15">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-light-card/80 dark:bg-[#151624] border-b border-black/5 dark:border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-light-muted dark:text-dark-muted font-mono text-[11px]">
                  <FileCode className="w-3.5 h-3.5 text-accent-purple" />
                  <span>{t.hero.codeSnippetTitle}</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] text-accent-cyan font-mono">React</span>
                </div>
              </div>

              {/* Code Visual Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-light-text dark:text-dark-text bg-light-surface/90 dark:bg-dark-surface/90">
                <div className="text-light-muted/60 dark:text-dark-muted/60 select-none">
                  {'// Meyrlan Abubakirov — Junior Frontend Developer'}
                </div>
                <div className="mt-2">
                  <span className="text-accent-purple font-semibold">const</span>{' '}
                  <span className="text-accent-cyan">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1 my-1">
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">name:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400">"{profile.name}"</span>,
                  </div>
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">role:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400">"{t.hero.codeSnippetRole}"</span>,
                  </div>
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">education:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400">"{profile.education.institution}"</span>,
                  </div>
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">focus:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400">"{t.hero.codeSnippetFocus}"</span>,
                  </div>
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">skills:</span> [
                    <span className="text-amber-500 dark:text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-500 dark:text-amber-300">"JS"</span>,{' '}
                    <span className="text-amber-500 dark:text-amber-300">"Tailwind"</span>],
                  </div>
                  <div>
                    <span className="text-light-muted dark:text-dark-muted">status:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400">"{t.hero.codeSnippetStatus}"</span>
                  </div>
                </div>
                <div>&#125;;</div>

                {/* Simulated Terminal Status Footer inside Card */}
                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] text-light-muted dark:text-dark-muted">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>npm run dev</span>
                  </div>
                  <span className="text-emerald-500 dark:text-emerald-400 font-medium">Ready in 240ms</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted hover:text-accent-purple dark:hover:text-accent-cyan transition-colors focus:outline-none"
            aria-label={t.hero.scrollDown}
          >
            <span>{t.hero.scrollDown}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-accent-purple" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
