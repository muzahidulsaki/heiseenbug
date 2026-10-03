import React from 'react';
import { BUG_ANTENNAE, BUG_RING_CY, BUG_RING_R, BUG_RINGS, BUG_VIEWBOX } from '../../data/bugGeometry';

type CaterpillarProps = {
  className?: string;
  strokeWidth?: number;
};

export function Caterpillar({ className, strokeWidth = 5 }: CaterpillarProps) {
  const head = BUG_RINGS.length - 1;
  return (
    <svg
      viewBox={BUG_VIEWBOX}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      overflow="visible">
      
      {BUG_RINGS.map((cx, i) =>
      <g key={cx} className="ring-bob" style={{ animationDelay: `${i * 0.14}s` }}>
          <circle cx={cx} cy={BUG_RING_CY} r={BUG_RING_R} />
          {i === head &&
        <g className="antenna-wiggle">
              {BUG_ANTENNAE.map((d) =>
          <path key={d} d={d} />
          )}
            </g>
        }
        </g>
      )}
    </svg>);

}