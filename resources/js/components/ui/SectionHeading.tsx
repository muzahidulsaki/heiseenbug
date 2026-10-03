import React, { ReactNode } from 'react';
import { Squiggle } from '../brand/Squiggle';

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  id?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({ label, title, id, inverted = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className={`font-mono text-sm ${inverted ? 'text-bg/65' : 'text-muted'}`}>{label}</p>
      <h2
        id={id}
        className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
        
        {title}
      </h2>
      <Squiggle className={`mt-5 h-3.5 w-28 ${inverted ? 'text-accent' : 'text-fg'}`} />
    </div>);

}