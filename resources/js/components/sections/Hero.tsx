import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { Caterpillar } from '../brand/Caterpillar';
import { RingButton } from '../ui/RingButton';
import { services } from '../../data/services';
import { EASE } from '../../utils/motion';

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgb(var(--accent) / 0.22), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const enter = (delay: number) =>
  reduce ?
  {} :
  {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: EASE }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      onMouseMove={handleMove}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-40">
      
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: glow }} />
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-7xl flex-1 px-5 sm:px-8">
        <motion.p {...enter(0)} className="flex items-center gap-2.5 font-mono text-sm text-muted">
          <span className="h-2.5 w-2.5 rounded-full border border-fg bg-accent" aria-hidden="true" />
          Now booking projects for Q1 2027
        </motion.p>

        <h1
          id="hero-title"
          className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8.4vw,7.25rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
          
          <motion.span {...enter(0.06)} className="block">
            We Spot the{' '}
            <span className="inline-block rounded-[0.2em] border-[0.035em] border-fg bg-accent px-[0.14em] text-accent-fg">
              Bug.
            </span>
          </motion.span>
          <motion.span {...enter(0.12)} className="block">
            We Build the Future.
          </motion.span>
        </h1>

        <motion.div {...enter(0.2)} className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-6 lg:col-span-5">
            HeiSeenBug is an AI, automation, EdTech and ERP studio. We find the friction hiding in how your team works — then
            design and ship the systems that remove it.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end lg:col-span-7">
            <RingButton href="#services" variant="solid">
              Our Services
            </RingButton>
            <RingButton href="#contact" variant="outline">
              Let’s Talk
            </RingButton>
          </div>
        </motion.div>

        <motion.ul {...enter(0.28)} className="mt-14 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted" aria-label="Practices">
          {services.map((s) =>
          <li key={s.id}>{s.label}</li>
          )}
        </motion.ul>
      </div>

      <div className="relative mt-16 h-16 border-b border-fg/20 sm:h-20" aria-hidden="true">
        <div className="crawl absolute bottom-0 left-0">
          <Caterpillar className="h-7 w-[62px] text-fg sm:h-10 sm:w-[88px]" />
        </div>
      </div>
    </section>);

}