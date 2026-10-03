import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/company';
import { EASE } from '../../utils/motion';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (next: number) => {
    setDirection(next > index || index === total - 1 && next === 0 ? 1 : -1);
    setIndex((next + total) % total);
  };

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => window.clearInterval(t);
  }, [paused, reduce, total]);

  const initials = current.name.
  split(' ').
  map((n) => n[0]).
  join('');

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-surface py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <SectionHeading id="testimonials-title" label="// kind words" title="Clients who stopped firefighting." />
          <div className="mt-10 flex items-center gap-3 lg:mt-auto">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-fg transition-[background-color,color,transform] duration-150 hover:bg-fg hover:text-bg active:scale-[0.95]">
              
              <ArrowLeftIcon className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-fg transition-[background-color,color,transform] duration-150 hover:bg-fg hover:text-bg active:scale-[0.95]">
              
              <ArrowRightIcon className="h-5 w-5" strokeWidth={2} />
            </button>
            <div className="ml-3 flex items-center" role="group" aria-label="Choose testimonial">
              {testimonials.map((t, i) =>
              <button
                key={t.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className="-ml-1 flex h-11 w-7 items-center justify-center first:ml-0">
                
                  <span
                  className={`h-4 w-4 rounded-full border-2 border-fg transition-colors duration-200 ${i === index ? 'bg-accent' : 'bg-transparent'}`} />
                
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[320px] lg:col-span-8" aria-live="polite">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.figure
              key={current.name}
              custom={direction}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 * direction }}
              transition={{ duration: 0.25, ease: EASE }}>
              
              <svg viewBox="0 0 48 32" className="h-8 w-12 text-fg" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="12" r="8" />
                <path d="M19 12 C19 22 14 28 7 30" />
                <circle cx="33" cy="12" r="8" />
                <path d="M41 12 C41 22 36 28 29 30" />
              </svg>
              <blockquote className="mt-6 text-balance font-display text-2xl font-semibold leading-[1.25] tracking-tight sm:text-3xl lg:text-[40px]">
                {current.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-fg bg-bg font-display font-bold" aria-hidden="true">
                  {initials}
                </span>
                <span>
                  <span className="block font-semibold">{current.name}</span>
                  <span className="block text-sm text-muted">
                    {current.role}, {current.company}
                  </span>
                </span>
                <span className="ml-auto hidden rounded-full border border-fg/25 px-3 py-1 font-mono text-xs sm:inline-block">
                  // {current.service.toLowerCase()}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}