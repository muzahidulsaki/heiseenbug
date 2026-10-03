import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.35 });
  // const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.35 });

  //Super fast and responsive
  const sx = useSpring(x, { stiffness: 1000, damping: 50, mass: 0.15 });
  const sy = useSpring(y, { stiffness: 1000, damping: 50, mass: 0.15 });


  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setActive(Boolean(target?.closest(INTERACTIVE)));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: sx, y: sy }}>
      
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fg transition-[width,height,background-color,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${
        active ? 'h-11 w-11 bg-accent/30' : 'h-5 w-5 bg-transparent'} ${
        visible ? 'opacity-100' : 'opacity-0'}`} />
      
    </motion.div>);

}