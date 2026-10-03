import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { CustomCursor } from '../components/ui/CustomCursor';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { TechMarquee } from '../components/sections/TechMarquee';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { RingDivider } from '../components/brand/RingDivider';

type AccentColor = 'lime' | 'orange';
type ThemeMode = 'light' | 'dark';

type HomeProps = {
  accent?: AccentColor;
  defaultTheme?: ThemeMode;
  customCursor?: boolean;
};

export default function Home({ accent = 'lime', defaultTheme = 'light', customCursor = true }: HomeProps) {
  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <Head title="HeiSeenBug Tech Portfolio" />
      <div className="min-h-screen w-full bg-bg text-fg">
        <a
          href="#main"
          className="sr-only z-[70] rounded-full bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        {customCursor && <CustomCursor />}
        <Navbar />
        <main id="main">
          <Hero />
          <Services />
          <About />
          <RingDivider />
          <Portfolio />
          <Process />
          <TechMarquee />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
