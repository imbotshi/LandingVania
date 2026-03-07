import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * FadeIn — composant utilitaire pour animer les enfants au scroll (Q7: B)
 * Utilise IntersectionObserver via useInView de Framer Motion.
 * Style premium+fluide : opacity 0→1, 400ms, ease-out expo (Q1:B, Q4:B)
 */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'none',
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 18 : 0,
      }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,  // ✅ Luxe — les grandes marques ne sont jamais pressées
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
