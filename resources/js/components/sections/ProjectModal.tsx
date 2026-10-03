import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { RingButton } from '../ui/RingButton';
import type { Project } from '../../types/content';
import { EASE } from '../../utils/motion';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus({ preventScroll: true });
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project &&
      <motion.div
        className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: EASE }}>
        
          <div className="absolute inset-0 bg-fg/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[28px] border border-fg bg-bg sm:rounded-[28px]"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: EASE }}>
          
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-fg bg-bg transition-colors duration-150 hover:bg-accent hover:text-accent-fg">
            
              <XIcon className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="grid md:grid-cols-5">
              <img
              src={project.image}
              alt={`${project.title} interface`}
              className="h-56 w-full object-cover sm:h-72 md:col-span-2 md:h-full" />
            
              <div className="p-6 sm:p-10 md:col-span-3">
                <p className="font-mono text-xs text-muted">
                  // {project.category.toLowerCase()} · {project.year}
                </p>
                <h2 id="project-title" className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-muted">{project.client}</p>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-fg/15 py-6">
                  {project.results.map((r) =>
                <div key={r.label} className="flex flex-col-reverse gap-1">
                      <dt className="text-xs text-muted sm:text-sm">{r.label}</dt>
                      <dd className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{r.value}</dd>
                    </div>
                )}
                </dl>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-mono text-xs text-muted">// the bug</h3>
                    <p className="mt-2 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-muted">// the fix</h3>
                    <p className="mt-2 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-muted">// stack</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((t) =>
                    <li key={t} className="rounded-full border border-fg/25 px-3 py-1 font-mono text-xs">
                          {t}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>

                <RingButton href="#contact" variant="accent" onClick={onClose} className="mt-10">
                  Start a similar project
                </RingButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}