import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Caterpillar } from '../brand/Caterpillar';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });
  const left = useTransform(progress, (v) => `calc(${v * 100}% - ${v * 34}px)`);
  const opacity = useTransform(progress, [0, 0.02], [0, 1]);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]" aria-hidden="true">
      <motion.div className="h-full origin-left bg-fg" style={{ scaleX: progress }} />
      <motion.div className="absolute -top-[13px] hidden md:block" style={{ left, opacity }}>
        <Caterpillar className="h-[14px] w-[31px] text-fg" strokeWidth={6} />
      </motion.div>
    </div>);

}