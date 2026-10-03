import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUG_ANTENNAE, BUG_RING_CY, BUG_RING_R, BUG_RINGS, BUG_VIEWBOX } from '../../data/bugGeometry';
import { EASE } from '../../utils/motion';

type BugMarkProps = {
  className?: string;
  draw?: boolean;
  title?: string;
};

export function BugMark({ className, draw = false, title }: BugMarkProps) {
  const reduce = useReducedMotion();
  const shouldDraw = draw && !reduce;
  const drawProps = (delay: number) =>
  shouldDraw ?
  {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 0.3, delay, ease: EASE }
  } :
  {};

  return (
    <svg
      viewBox={BUG_VIEWBOX}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}>
      
      {BUG_RINGS.map((cx, i) =>
      <motion.circle key={cx} cx={cx} cy={BUG_RING_CY} r={BUG_RING_R} {...drawProps(i * 0.09)} />
      )}
      <g className="antenna-hover">
        {BUG_ANTENNAE.map((d, i) =>
        <motion.path key={d} d={d} {...drawProps(0.36 + i * 0.08)} />
        )}
      </g>
    </svg>);

}