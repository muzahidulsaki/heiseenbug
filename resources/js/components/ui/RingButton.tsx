import React, { ReactNode } from 'react';
import { RingsGlyph } from '../brand/RingsGlyph';
import { RingLoader } from '../brand/RingLoader';

type RingButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'solid' | 'accent' | 'outline';
  size?: 'sm' | 'md';
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

const BASE =
'group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border font-medium transition-[transform,background-color,color,border-color] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-70';

const VARIANTS = {
  solid: 'border-fg bg-fg text-bg hover:bg-fg/85',
  accent: 'border-fg bg-accent text-accent-fg hover:bg-fg hover:text-bg',
  outline: 'border-fg bg-transparent text-fg hover:bg-fg hover:text-bg'
};

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]'
};

export function RingButton({
  children,
  href,
  variant = 'solid',
  size = 'md',
  type = 'button',
  onClick,
  disabled,
  loading,
  className = ''
}: RingButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content =
  <>
      <span>{children}</span>
      {loading ? <RingLoader /> : <RingsGlyph />}
    </>;


  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>);

  }
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes} aria-busy={loading}>
      {content}
    </button>);

}