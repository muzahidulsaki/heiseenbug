import React, { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import type { Project, ProjectCategory } from '../../types/content';

type Filter = 'All' | ProjectCategory;
const FILTERS: Filter[] = ['All', 'AI', 'Automation', 'EdTech', 'ERP'];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const countFor = (f: Filter) => f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="work-title" label="// case studies" title="Bugs found. Systems shipped." />
          <div role="group" aria-label="Filter projects by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:pb-6">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-[background-color,color,border-color] duration-150 ${
                  active ? 'border-fg bg-fg text-bg' : 'border-fg/25 hover:border-fg'}`
                  }>
                  
                  {f}
                  <span className={`font-mono text-xs ${active ? 'text-bg/70' : 'text-muted'}`}>{countFor(f)}</span>
                </button>);

            })}
          </div>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) =>
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
            )}
          </AnimatePresence>
        </ul>
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>);

}