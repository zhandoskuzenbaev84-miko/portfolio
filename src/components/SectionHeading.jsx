import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4 border transition-colors ${
            isCenter ? 'mx-auto' : ''
          } bg-accent-purple/10 text-accent-purple border-accent-purple/20`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-[1.15] mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
