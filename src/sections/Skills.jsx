import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, FileCode2, Atom, Wind, GitBranch, Github, Zap, Terminal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Skills({ t }) {
  const getSkillIcon = (name) => {
    switch (name) {
      case 'HTML5':
        return Layout;
      case 'CSS3':
        return Palette;
      case 'JavaScript (ES6+)':
        return FileCode2;
      case 'React':
        return Atom;
      case 'Tailwind CSS':
        return Wind;
      case 'Git':
        return GitBranch;
      case 'GitHub':
        return Github;
      case 'Vite':
        return Zap;
      case 'VS Code':
        return Terminal;
      default:
        return FileCode2;
    }
  };

  const getAccentGradient = (idx) => {
    const gradients = [
      'from-accent-purple/20 to-indigo-500/20 text-accent-purple',
      'from-accent-cyan/20 to-blue-500/20 text-accent-cyan',
      'from-amber-500/20 to-orange-500/20 text-amber-400',
      'from-emerald-500/20 to-teal-500/20 text-emerald-400',
      'from-rose-500/20 to-pink-500/20 text-rose-400',
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          align="center"
        />

        <div className="space-y-16">
          {/* Frontend Category */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-purple" />
              <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text">
                {t.skills.categoryFrontend}
              </h3>
              <span className="text-xs font-mono text-light-muted dark:text-dark-muted hidden sm:inline">
                — {t.skills.categoryFrontendDesc}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.skills.frontendSkills.map((skill, idx) => {
                const Icon = getSkillIcon(skill.name);
                const colorScheme = getAccentGradient(idx);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl glass-card hover:border-accent-purple/40 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorScheme} shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-base text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-light-muted dark:text-dark-muted">
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tools & Workflow Category */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
              <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text">
                {t.skills.categoryTools}
              </h3>
              <span className="text-xs font-mono text-light-muted dark:text-dark-muted hidden sm:inline">
                — {t.skills.categoryToolsDesc}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.skills.toolSkills.map((tool, idx) => {
                const Icon = getSkillIcon(tool.name);
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl glass-card hover:border-accent-cyan/40 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-light-text dark:text-dark-text group-hover:text-accent-cyan transition-colors">
                          {tool.name}
                        </h4>
                        <span className="text-[10px] font-mono text-light-muted dark:text-dark-muted">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                      {tool.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
