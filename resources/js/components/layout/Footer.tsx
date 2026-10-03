import React, { FormEvent, useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { BugMark } from '../brand/BugMark';
import { SocialLinks } from '../ui/SocialLinks';
import { navLinks } from '../../data/navigation';
import { services } from '../../data/services';

export function Footer() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'error' | 'done'>('idle');

  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState('error');
      return;
    }
    setState('done');
    setEmail('');
  };

  return (
    <footer className="overflow-hidden border-t border-fg/10 bg-bg pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#home" className="group inline-flex items-center gap-3" aria-label="HeiSeenBug — back to top">
            <BugMark className="h-9 w-[80px] text-fg" draw />
            <span className="font-display text-2xl font-bold tracking-tight">HeiSeenBug</span>
          </a>
          <p className="mt-5 max-w-xs text-muted">We spot the bug. We build the future. AI, automation, EdTech and ERP — shipped with care.</p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div>
            <p className="font-mono text-xs text-muted">// explore</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className="text-sm font-medium transition-colors duration-150 hover:text-muted">
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-muted">// services</p>
            <ul className="mt-4 space-y-3">
              {services.map((s) =>
              <li key={s.id}>
                  <a href="#services" className="text-sm font-medium transition-colors duration-150 hover:text-muted">
                    {s.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <div className="lg:col-span-4">
          <p className="font-mono text-xs text-muted">// newsletter</p>
          <h2 className="mt-4 font-display text-xl font-bold">The Debug Log</h2>
          <p className="mt-2 text-sm text-muted">One email a month: what we shipped, what broke, what we learned.</p>
          {state === 'done' ?
          <p className="mt-5 flex items-center gap-2 rounded-full border border-fg bg-accent px-5 py-3 text-sm font-medium text-accent-fg" role="status">
              <CheckIcon className="h-4 w-4" strokeWidth={2.5} /> You’re subscribed. See you next month.
            </p> :

          <form onSubmit={subscribe} noValidate className="mt-5">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex rounded-full border border-fg/30 p-1 focus-within:border-fg">
                <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === 'error') setState('idle');
                }}
                placeholder="you@company.com"
                aria-invalid={state === 'error'}
                aria-describedby={state === 'error' ? 'newsletter-error' : undefined}
                className="min-w-0 flex-1 bg-transparent px-4 text-sm placeholder:text-muted focus:outline-none" />
              
                <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-[transform,background-color] duration-150 hover:bg-fg/85 active:scale-[0.97]">
                
                  Subscribe
                </button>
              </div>
              {state === 'error' &&
            <p id="newsletter-error" className="mt-2 px-4 text-sm text-danger">
                  Please enter a valid email.
                </p>
            }
            </form>
          }
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-fg/10 px-5 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} HeiSeenBug Technologies. All rights reserved.</p>
        <p>// no bugs were harmed in the making of this site</p>
      </div>

      <div className="w-full overflow-hidden px-4 pb-4 sm:pb-6">
        <p
          aria-hidden="true"
          className="select-none text-center font-display text-[16.5vw] font-extrabold leading-none tracking-[-0.03em] text-surface">
          heiseenbug
        </p>
      </div>
    </footer>);

}