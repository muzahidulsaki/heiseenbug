import React from 'react';
import { techRowOne, techRowTwo } from '../../data/company';

type MarqueeRowProps = {
  items: string[];
  reverse?: boolean;
};

function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-row overflow-hidden">
      <ul className={`flex w-max gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {loop.map((name, i) =>
        <li
          key={`${name}-${i}`}
          aria-hidden={i >= items.length}
          className="flex h-16 items-center gap-3 rounded-full border border-fg/20 px-6 font-display text-lg font-semibold tracking-tight transition-[background-color,border-color] duration-150 hover:border-fg hover:bg-accent hover:text-accent-fg">
          
            <span className="relative inline-block h-3 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-3 w-3 rounded-full border-2 border-current" />
              <span className="absolute left-2 top-0 h-3 w-3 rounded-full border-2 border-current" />
            </span>
            {name}
          </li>
        )}
      </ul>
    </div>);

}

export function TechMarquee() {
  return (
    <section aria-labelledby="stack-title" className="py-24 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm text-muted">// tech stack</p>
          <h2 id="stack-title" className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tools we trust in production.
          </h2>
        </div>
        <p className="max-w-sm text-muted">Chosen per project, not per trend. Hover a row to pause it.</p>
      </div>
      <div className="mt-12 space-y-4">
        <MarqueeRow items={techRowOne} />
        <MarqueeRow items={techRowTwo} reverse />
      </div>
    </section>);

}