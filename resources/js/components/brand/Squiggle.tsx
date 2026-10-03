import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

type SquiggleProps = {
  className?: string;
};

export function Squiggle({ className }: SquiggleProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 120 14" className={className} fill="none" aria-hidden="true">
      <motion.path
        d="M2 7 C 12 1, 18 13, 28 7 S 44 1, 54 7 S 70 13, 80 7 S 96 1, 106 7 C 110 9.5 114 9 118 6"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, delay: 0.1, ease: EASE }} />
      
    </svg>);

}