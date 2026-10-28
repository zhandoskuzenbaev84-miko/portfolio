import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, AlertCircle, ExternalLink, Github } from 'lucide-react';
import { ProjectPreview } from './ProjectPreviews';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose, language, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const trans = project.translations[language] || project.translations.en;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-light-surface dark:bg-dark-surface border border-black/10 dark:border-white/10 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Header Visual */}
          <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-black/10 dark:border-white/10 bg-dark-bg">
            <ProjectPreview type={project.previewVisual.type} />
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.closeDetails}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-transform active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Category */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                  {trans.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  {project.status}
                </span>
              </div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-accent-purple dark:text-accent-cyan mt-1">
                {trans.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 text-sm text-light-muted dark:text-dark-muted leading-relaxed">
              <p>{trans.shortDesc}</p>
              <p>{trans.details}</p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-light-text dark:text-dark-text uppercase font-mono tracking-wider mb-3">
                {t.projects.highlightsHeading}
              </h4>
              <ul className="space-y-2.5">
                {trans.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-light-text/90 dark:text-dark-text/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-light-text dark:text-dark-text uppercase font-mono tracking-wider mb-3">
                {t.projects.technologiesUsed}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-light-text dark:text-dark-text border border-black/10 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer / Note */}
            <div className="p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/20 flex items-start gap-3 text-xs text-light-muted dark:text-dark-muted">
              <AlertCircle className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
              <span>{t.projects.modalDisclaimer}</span>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <Button variant="secondary" size="md" onClick={onClose}>
                {t.projects.closeDetails}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
