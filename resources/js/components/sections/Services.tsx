import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { services } from '../../data/services';
import { ArrowUpRightIcon, MessageSquarePlusIcon } from 'lucide-react';

export function Services() {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="services-title"
            label="// services & industries"
            title="Specialized engineering across high-impact industries."
            className="lg:col-span-8"
          />

          <p className="max-w-md text-muted lg:col-span-4 lg:pb-6">
            From intelligent AI automation to domain-specific platforms, we engineer resilient software that eliminates operational friction and accelerates growth.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.id}>
              <Reveal delay={i * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}

          {/* 8th CTA Card: Completing the 4-column grid */}
          <li>
            <Reveal delay={services.length * 0.05}>
              <div
                className="group relative h-[440px]"
                onMouseMove={handleMove}
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-dashed border-fg/35 bg-surface/40 p-7 transition-all duration-200 hover:border-fg hover:bg-bg">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.35), transparent 70%)',
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-fg bg-accent text-accent-fg transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-12">
                      <MessageSquarePlusIcon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <span className="font-mono text-xs text-muted">// custom vision</span>
                  </div>

                  <h3 className="relative mt-10 font-display text-3xl font-bold tracking-tight">
                    Which one is yours?
                  </h3>
                  <p className="relative mt-2 font-medium text-fg">
                    Don’t see your exact industry listed?
                  </p>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">
                    Every business has unique workflows. We build tailored architectures, custom automations, and bespoke software engineered for your specific goals.
                  </p>

                  <a
                    href="#contact"
                    className="relative mt-auto flex h-12 items-center justify-between rounded-full bg-fg px-6 text-sm font-semibold text-bg transition-[background-color,color,transform] duration-150 hover:bg-accent hover:text-accent-fg active:scale-[0.98]"
                  >
                    <span>Let’s Talk</span>
                    <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                </article>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}