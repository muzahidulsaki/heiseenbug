import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

const CIRCUITS = [
'M700 120 H860 V260 H1040',
'M620 430 H780 V340 H980 V180',
'M900 640 V500 H1100',
'M760 720 H880 V580',
'M1040 260 V420 H1160',
'M980 180 H1120 V80'];


const NODES = [
{ x: 700, y: 120, filled: false },
{ x: 1040, y: 260, filled: true },
{ x: 620, y: 430, filled: false },
{ x: 980, y: 180, filled: false },
{ x: 900, y: 640, filled: false },
{ x: 1100, y: 500, filled: true },
{ x: 760, y: 720, filled: false },
{ x: 880, y: 580, filled: false },
{ x: 1160, y: 420, filled: false },
{ x: 1120, y: 80, filled: false }];


export function HeroBackground() {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-fg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMid slice"
      fill="none">
      
      <g stroke="currentColor" strokeOpacity={0.16} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {CIRCUITS.map((d, i) =>
        <motion.path
          key={d}
          d={d}
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.35 + i * 0.07, ease: EASE }} />

        )}
      </g>

      {!reduce &&
      CIRCUITS.map((d, i) =>
      <circle key={`packet-${d}`} r={3} className="fill-fg" opacity={0.5}>
            <animateMotion dur={`${6 + i}s`} begin={`${i * 0.8}s`} repeatCount="indefinite" path={d} />
          </circle>
      )}

      {NODES.map((n) =>
      <g key={`${n.x}-${n.y}`}>
          {n.filled && !reduce &&
        <circle cx={n.x} cy={n.y} r={9} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1.5}>
              <animate attributeName="r" values="9;26" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.35;0" dur="2.6s" repeatCount="indefinite" />
            </circle>
        }
          <circle
          cx={n.x}
          cy={n.y}
          r={9}
          stroke="currentColor"
          strokeOpacity={0.4}
          strokeWidth={2}
          className={n.filled ? 'fill-accent' : 'fill-bg'} />
        
        </g>
      )}
    </svg>);

}