import React from 'react';

type RingsGlyphProps = {
  className?: string;
};

/** Two rings that slide together and interlock when the parent `.group` is hovered. */
export function RingsGlyph({ className = '' }: RingsGlyphProps) {
  const ring =
  'absolute top-0 h-4 w-4 rounded-full border-2 border-current transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]';
  return (
    <span className={`relative inline-block h-4 w-9 shrink-0 ${className}`} aria-hidden="true">
      <span className={`${ring} left-0 group-hover:translate-x-[7px]`} />
      <span className={`${ring} right-0 group-hover:-translate-x-[7px]`} />
    </span>);

}