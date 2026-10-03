import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Counter } from '../ui/Counter';
import { stats } from '../../data/company';

const PILLARS = [
{
  label: '// mission',
  text: 'Remove the friction that slows good teams down — with software that is honest about what it does and easy to live with after launch.'
},
{
  label: '// vision',
  text: 'A world where every organisation, not just the biggest, runs on intelligent, connected systems.'
}];


export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="about-title" label="// about us" title="Small studio. Sharp eyes. Systems that hold." />
            <Reveal className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                HeiSeenBug started in 2018 as two engineers debugging other people’s software at 2am. We kept noticing the same
                thing: the real bugs weren’t in the code — they were in the workflows around it. Spreadsheets nobody trusted,
                approvals stuck in inboxes, classrooms running on five disconnected tools.
              </p>
              <p>
                So we built a studio around finding those bugs first. Today we’re 34 engineers, designers and data scientists
                shipping systems for startups, schools and 2,000-person manufacturers.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-28">
            {PILLARS.map((p, i) =>
            <Reveal key={p.label} delay={i * 0.06} className="border-t border-fg py-8 last:border-b">
                <p className="font-mono text-sm text-muted">{p.label}</p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">{p.text}</p>
              </Reveal>
            )}
          </div>
        </div>

        <dl className="mt-20 grid divide-y divide-fg/15 border-y border-fg/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) =>
          <div key={s.label} className="flex flex-col-reverse gap-2 py-8 sm:px-8 sm:first:pl-0">
              <dt className="text-muted">{s.label}</dt>
              <dd className="font-display text-6xl font-extrabold tracking-[-0.04em] lg:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}