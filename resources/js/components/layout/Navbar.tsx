import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { BugMark } from '../brand/BugMark';
import { RingButton } from '../ui/RingButton';
import { ScrollProgress } from './ScrollProgress';
import { useTheme } from '../../contexts/ThemeContext';
import { navLinks } from '../../data/navigation';
import { EASE } from '../../utils/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
      solid ? 'border-fg/10 bg-bg/75 backdrop-blur-xl' : 'border-transparent bg-transparent'}`
      }>
      
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-[72px]">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="HeiSeenBug — back to top">
          <BugMark className="h-6 w-[53px] text-fg" />
          <span className="font-display text-lg font-bold tracking-tight">HeiSeenBug</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-fg/80 transition-colors duration-150 hover:bg-surface hover:text-fg">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 transition-colors duration-150 hover:border-fg">
            
            {theme === 'dark' ? <SunIcon className="h-[18px] w-[18px]" strokeWidth={2} /> : <MoonIcon className="h-[18px] w-[18px]" strokeWidth={2} />}
          </button>
          <RingButton href="#contact" variant="accent" size="sm" className="hidden sm:inline-flex">
            Let’s Talk
          </RingButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 md:hidden">
            
            {open ? <XIcon className="h-5 w-5" strokeWidth={2} /> : <MenuIcon className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          className="border-t border-fg/10 px-5 pb-8 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE }}>
          
            <ul>
              {navLinks.map((link) =>
            <li key={link.href} className="border-b border-fg/10">
                  <a href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 font-display text-2xl font-semibold">
                    {link.label}
                    <span className="font-mono text-xs text-muted">//{link.label.toLowerCase()}</span>
                  </a>
                </li>
            )}
            </ul>
            <RingButton href="#contact" variant="accent" onClick={() => setOpen(false)} className="mt-6 w-full">
              Let’s Talk
            </RingButton>
          </motion.div>
        }
      </AnimatePresence>

      <ScrollProgress />
    </header>);

}