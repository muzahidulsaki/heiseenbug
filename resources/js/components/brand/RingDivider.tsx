import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

export function RingDivider() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 sm:px-8" aria-hidden="true">
      <span className="h-px flex-1 bg-fg/15" />
      <svg viewBox="0 0 76 28" className="h-7 w-[76px] text-fg" fill="none" stroke="currentColor" strokeWidth={2.5}>
        {[14, 38, 62].map((cx, i) =>
        <motion.circle
          key={cx}
          cx={cx}
          cy={14}
          r={11}
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.1, ease: EASE }} />

        )}
      </svg>
      <span className="h-px flex-1 bg-fg/15" />
    </div>);

}