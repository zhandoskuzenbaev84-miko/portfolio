import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Compass, CheckCircle2, Sparkles, Laptop, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

export default function About({ t, language }) {
  const highlightCards = [
    {
      icon: GraduationCap,
      label: t.about.educationLabel,
      value: t.about.educationValue,
      desc: t.about.educationDesc,
      color: 'from-purple-500/10 to-indigo-500/10',
      accentColor: 'text-accent-purple',
      borderColor: 'hover:border-accent-purple/40',
    },
    {
      icon: Code,
      label: t.about.focusLabel,
      value: t.about.focusValue,
      desc: t.about.focusDesc,
      color: 'from-cyan-500/10 to-blue-500/10',
      accentColor: 'text-accent-cyan',
      borderColor: 'hover:border-accent-cyan/40',
    },
    {
      icon: Compass,
      label: t.about.mindsetLabel,
      value: t.about.mindsetValue,
      desc: t.about.mindsetDesc,
      color: 'from-emerald-500/10 to-teal-500/10',
      accentColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/40',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-light-text/90 dark:text-dark-text/90 leading-relaxed text-base sm:text-lg"
          >
            <p className="font-medium text-lg sm:text-xl text-accent-purple dark:text-accent-cyan leading-snug">
              {t.about.leadParagraph}
            </p>

            <div className="space-y-4 text-light-muted dark:text-dark-muted text-sm sm:text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Practical Interests Tags */}
            <div className="pt-4">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
                <span>Primary Areas of Interest</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-light-text dark:text-dark-text"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl glass-card transition-all duration-300 border ${card.borderColor}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-black/5 dark:bg-white/5 ${card.accentColor} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-light-muted dark:text-dark-muted uppercase tracking-wider">
                        {card.label}
                      </div>
                      <div className="text-base font-bold text-light-text dark:text-dark-text mt-0.5">
                        {card.value}
                      </div>
                      <p className="text-xs text-light-muted dark:text-dark-muted mt-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
