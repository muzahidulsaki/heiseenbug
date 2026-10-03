import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Project } from '../../types/content';
import { EASE } from '../../utils/motion';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: EASE }}>
      
      <button type="button" onClick={() => onOpen(project)} className="group block w-full rounded-[24px] text-left">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-[24px] border border-fg bg-surface">
          <img
            src={project.image}
            alt={`${project.title} for ${project.client}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]" />
          
          <span className="absolute left-4 top-4 rounded-full border border-fg bg-bg px-3 py-1 font-mono text-xs">
            // {project.category.toLowerCase()}
          </span>
          <span className="absolute inset-0 flex flex-col justify-end bg-fg/85 p-6 text-bg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="text-[15px] leading-snug">{project.summary}</span>
            <span className="mt-4 flex items-center gap-4">
              {project.results.slice(0, 2).map((r) =>
              <span key={r.label} className="font-display text-2xl font-bold">
                  {r.value}
                </span>
              )}
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs">
                view case <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2} />
              </span>
            </span>
          </span>
        </span>
        <span className="mt-4 flex items-baseline justify-between gap-4">
          <span className="font-display text-xl font-bold tracking-tight">{project.title}</span>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </span>
        <span className="mt-0.5 block text-sm text-muted">{project.client}</span>
      </button>
    </motion.li>);

}