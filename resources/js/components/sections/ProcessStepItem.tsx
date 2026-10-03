import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import type { ProcessStep } from '../../types/content';

type ProcessStepItemProps = {
  step: ProcessStep;
  index: number;
};

export function ProcessStepItem({ step, index }: ProcessStepItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { margin: '0px 0px -45% 0px' });

  return (
    <li ref={ref} className="relative pb-14 pl-16 last:pb-0 sm:pl-20">
      <span
        className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-medium transition-[background-color,color,border-color] duration-300 ${
        reached ? 'border-accent bg-accent text-accent-fg' : 'border-bg/40 bg-fg text-bg/70'}`
        }
        aria-hidden="true">
        
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className={`transition-opacity duration-300 ${reached ? 'opacity-100' : 'opacity-50'}`}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{step.title}</h3>
          <span className="font-mono text-xs text-bg/65">{step.duration}</span>
        </div>
        <p className="mt-3 max-w-xl leading-relaxed text-bg/75">{step.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${step.title} deliverables`}>
          {step.deliverables.map((d) =>
          <li key={d} className="rounded-full border border-bg/25 px-3 py-1 font-mono text-xs text-bg/85">
              {d}
            </li>
          )}
        </ul>
      </div>
    </li>);

}