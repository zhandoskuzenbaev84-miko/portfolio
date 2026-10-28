import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info, Layers } from 'lucide-react';
import { ProjectPreview } from './ProjectPreviews';
import Button from './Button';

export default function ProjectCard({ project, language, onOpenDetails, t }) {
  const trans = project.translations[language] || project.translations.en;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/10"
    >
      {/* Top Preview Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/5 dark:border-white/10 bg-dark-bg/60">
        <ProjectPreview type={project.previewVisual.type} />

        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium backdrop-blur-md bg-dark-bg/80 border border-white/15 text-accent-cyan shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
          <span>{project.status}</span>
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-mono backdrop-blur-md bg-black/60 text-white/90 border border-white/10">
          {trans.categoryLabel}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs font-medium text-accent-purple dark:text-accent-cyan font-mono mb-3">
            {trans.subtitle}
          </p>

          <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-3 leading-relaxed mb-5">
            {trans.shortDesc}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/5 dark:bg-white/5 text-light-text/80 dark:text-dark-text/80 border border-black/5 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onOpenDetails(project)}
            icon={Info}
            iconPosition="left"
            className="flex-1 justify-center text-xs"
          >
            {t.projects.viewDetails}
          </Button>

          {project.liveUrl ? (
            <Button
              variant="outline"
              size="sm"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={ExternalLink}
              ariaLabel={`${project.title} live preview`}
              className="px-3"
            />
          ) : (
            <span
              title={t.projects.demoUnavailable}
              className="p-2 rounded-xl border border-black/5 dark:border-white/10 text-light-muted/40 dark:text-dark-muted/40 cursor-not-allowed text-xs flex items-center justify-center"
              aria-label={t.projects.demoUnavailable}
            >
              <ExternalLink className="w-4 h-4" />
            </span>
          )}

          {project.githubUrl ? (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={Github}
              ariaLabel={`${project.title} github repository`}
              className="px-3"
            />
          ) : (
            <span
              title={t.projects.codeUnavailable}
              className="p-2 rounded-xl border border-black/5 dark:border-white/10 text-light-muted/40 dark:text-dark-muted/40 cursor-not-allowed text-xs flex items-center justify-center"
              aria-label={t.projects.codeUnavailable}
            >
              <Github className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
