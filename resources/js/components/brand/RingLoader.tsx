import React from 'react';

type RingLoaderProps = {
  className?: string;
};

export function RingLoader({ className = '' }: RingLoaderProps) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) =>
      <span
        key={i}
        className="ring-pulse -ml-1 h-3.5 w-3.5 rounded-full border-2 border-current first:ml-0"
        style={{ animationDelay: `${i * 0.12}s` }} />

      )}
    </span>);

}