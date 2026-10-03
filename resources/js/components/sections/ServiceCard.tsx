import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeftIcon,
  BoxesIcon,
  BrainCircuitIcon,
  GraduationCapIcon,
  LandmarkIcon,
  PillIcon,
  PlusIcon,
  RocketIcon,
  ShoppingCartIcon,
  StoreIcon,
  WorkflowIcon,
} from 'lucide-react';
import type { Service, ServiceId } from '../../types/content';
import { EASE } from '../../utils/motion';

const ICONS: Record<ServiceId, typeof BrainCircuitIcon> = {
  'ai-automation': BrainCircuitIcon,
  edtech: GraduationCapIcon,
  fintech: LandmarkIcon,
  retail: StoreIcon,
  ecommerce: ShoppingCartIcon,
  pharma: PillIcon,
  startups: RocketIcon,
  ai: BrainCircuitIcon,
  automation: WorkflowIcon,
  erp: BoxesIcon,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();
  const frontBtn = useRef<HTMLButtonElement>(null);
  const backBtn = useRef<HTMLButtonElement>(null);
  const hasInteracted = useRef(false);
  const Icon = ICONS[service.id];

  useEffect(() => {
    if (!hasInteracted.current) return;
    (flipped ? backBtn : frontBtn).current?.focus({ preventScroll: true });
  }, [flipped]);

  const flip = (next: boolean) => {
    hasInteracted.current = true;
    setFlipped(next);
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div className="group relative h-[440px] [perspective:1400px]" onMouseMove={handleMove}>
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}>
        
        <article
          aria-hidden={flipped}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-[28px] border border-fg bg-bg p-7 [backface-visibility:hidden]">
          
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.3), transparent 70%)'
            }} />
          
          <div className="relative flex items-start justify-between">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-fg transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-12">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <span className="font-mono text-xs text-muted">{service.label}</span>
          </div>
          <h3 className="relative mt-10 font-display text-3xl font-bold tracking-tight">{service.title}</h3>
          <p className="relative mt-2 font-medium">{service.tagline}</p>
          <p className="relative mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
          <button
            ref={frontBtn}
            type="button"
            tabIndex={flipped ? -1 : 0}
            onClick={() => flip(true)}
            aria-expanded={flipped}
            className="relative mt-auto flex h-12 items-center justify-between rounded-full border border-fg px-5 text-sm font-medium transition-[background-color,color] duration-150 hover:bg-fg hover:text-bg">
            
            Key features
            <PlusIcon className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </article>

        <div
          aria-hidden={!flipped}
          className="absolute inset-0 flex flex-col rounded-[28px] border border-fg bg-fg p-7 text-bg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          
          <p className="font-mono text-xs text-bg/65">{service.label} / features</p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">{service.title}</h3>
          <ul className="mt-6 space-y-4">
            {service.features.map((f) =>
            <li key={f} className="flex items-start gap-3 text-[15px]">
                <span className="relative mt-1 inline-block h-3.5 w-6 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-accent" />
                  <span className="absolute left-2 top-0 h-3.5 w-3.5 rounded-full border-2 border-bg" />
                </span>
                {f}
              </li>
            )}
          </ul>
          <div className="mt-auto flex gap-2">
            <button
              ref={backBtn}
              type="button"
              tabIndex={flipped ? 0 : -1}
              onClick={() => flip(false)}
              aria-label={`Back to ${service.title} overview`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bg/40 transition-colors duration-150 hover:border-bg">
              
              <ArrowLeftIcon className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <a
              href="#contact"
              tabIndex={flipped ? 0 : -1}
              className="flex h-12 flex-1 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.97]">
              
              Discuss {service.title}
            </a>
          </div>
        </div>
      </motion.div>
    </div>);

}