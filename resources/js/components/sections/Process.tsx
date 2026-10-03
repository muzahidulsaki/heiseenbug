import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ProcessStepItem } from './ProcessStepItem';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/company';

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" aria-labelledby="process-title" className="bg-fg py-24 text-bg md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading id="process-title" label="// process" title="Five steps from “something’s off” to “it just works.”" inverted />
          <p className="mt-6 max-w-sm text-bg/70">
            Every engagement follows the same rhythm, scaled to the size of the problem. You always know which step we’re on and
            what you’ll have at the end of it.
          </p>
        </div>

        <ol ref={ref} className="relative lg:col-span-7">
          <span className="absolute bottom-3 left-5 top-3 w-px -translate-x-1/2 bg-bg/20" aria-hidden="true" />
          <motion.span
            className="absolute bottom-3 left-5 top-3 w-[2px] origin-top -translate-x-1/2 bg-accent"
            style={{ scaleY }}
            aria-hidden="true" />
          
          {processSteps.map((step, i) =>
          <ProcessStepItem key={step.title} step={step} index={i} />
          )}
        </ol>
      </div>
    </section>);

}