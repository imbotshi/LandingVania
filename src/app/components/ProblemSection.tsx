import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

import rentalImg from '../../assets/rentalimo.png';
import vaniaImg from '../../assets/vaniaimo.png';

import invoiceIcon from '../../assets/invoice.svg';
import viewIcon from '../../assets/view.svg';
import targetIcon from '../../assets/target-01.svg';
import homeIcon from '../../assets/home-11.svg';
import linkIcon from '../../assets/link-01.svg';
import viberIcon from '../../assets/viber.svg';
import yogaIcon from '../../assets/yoga-01.svg';

/**
 * floatAnim — Q9: B — chaque bloc icône flotte indépendamment.
 * Durées décalées pour un effet organique (Mobbin pattern H).
 */
const floatAnim = (duration: number, delay: number = 0) => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
});

const blocks = [
  { icon: viewIcon,   bg: '#0D1A0F', top: 0,    left: '30%',  inv: true, dur: 2.4, del: 0.0 },
  { icon: yogaIcon,   bg: '#16a085', top: 0,    right: '12%', inv: true, dur: 3.1, del: 0.3 },
  { icon: targetIcon, bg: '#e819b5', top: 100,  left: '6%',   inv: true, dur: 2.8, del: 0.6 },
  { icon: homeIcon,   bg: '#1836d5', bottom: 80, left: '6%',  inv: true, dur: 2.6, del: 0.4 },
  { icon: invoiceIcon,bg: '#33a812', bottom: -10,left: '32%', inv: true, dur: 2.9, del: 0.1 },
  { icon: viberIcon,  bg: '#9918ff', bottom: -10,right: '8%', inv: true, dur: 3.6, del: 0.5 },
];

export default function ProblemSection() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  let resumeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseMarquee = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const resumeMarquee = () => {
    // Délai de 1.2s après touch-end pour laisser l'utilisateur finir son swipe
    resumeTimer.current = setTimeout(() => {
      if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
    }, 1200);
  };

  return (
    <section className="relative w-full pt-6 overflow-hidden" style={{ backgroundColor: '#FAF8F4' }}>

      {/* ✅ Infinite marquee + swipe manuel sur mobile */}
      <style>{`
        @keyframes marquee-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-x 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full pt-4 pb-2"
        style={{
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
          cursor: 'grab',
          scrollbarWidth: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        onTouchStart={pauseMarquee}
        onTouchEnd={resumeMarquee}
      >
        <div ref={trackRef} className="flex gap-4 w-max marquee-track">
          {[rentalImg, vaniaImg, rentalImg, vaniaImg, rentalImg, vaniaImg].map((src, i) => (
            <div
              key={i}
              className="w-[260px] h-[340px] rounded-[24px] overflow-hidden relative shrink-0"
            >
              <img src={src} alt={i % 2 === 0 ? 'Profil TikTok @rental.imo — location immobilière Cameroun' : 'Profil TikTok @vania.imo — agence immobilière Douala'} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white font-[700] text-[17px] tracking-tight">
                {i % 2 === 0 ? '@rental.imo' : '@vania.imo'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Constellation — floating icons */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center mt-6 mb-10">

        {/* ✅ Q9: B — chaque icône flotte indépendamment avec sa propre durée */}
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            className="absolute w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shadow-md"
            style={{
              backgroundColor: b.bg,
              top:    b.top    !== undefined ? b.top    : undefined,
              bottom: b.bottom !== undefined ? b.bottom : undefined,
              left:   b.left   !== undefined ? b.left   : undefined,
              right:  b.right  !== undefined ? b.right  : undefined,
            }}
            variants={floatAnim(b.dur, b.del)}
            animate="animate"
          >
            <img src={b.icon} alt="" className="w-8 h-8"
              style={{ filter: b.inv ? 'invert(1)' : 'none' }} />
          </motion.div>
        ))}

        {/* Left edge green block */}
        <motion.div
          className="absolute w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shadow-md"
          style={{ backgroundColor: '#56d926', top: 210, left: -10 }}
          variants={floatAnim(2.7, 0.8)}
          animate="animate"
        >
          <img src={yogaIcon} alt="" className="w-8 h-8" style={{ filter: 'invert(1)' }} />
        </motion.div>

        {/* Right edge cyan block */}
        <motion.div
          className="absolute w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shadow-md"
          style={{ backgroundColor: '#07a1e6', top: 240, right: -10 }}
          variants={floatAnim(3.0, 0.35)}
          animate="animate"
        >
          <img src={linkIcon} alt="" className="w-8 h-8" style={{ filter: 'invert(1)' }} />
        </motion.div>

        {/* Central text block */}
        <FadeIn className="relative z-10 text-center px-6 max-w-[310px] mt-6">
          <p className="text-[17px] text-[#0D1A0F]/60 font-[400] mb-3 leading-[1.5]">
            Avant de rêver, nous examinons votre
          </p>
          <div className="flex flex-col gap-[3px]">
            {['coûts de distribution', 'visibilité', 'dépendance aux OTAs', 'fragilité de vos revenus'].map((item, i) => (
              <p
                key={i}
                className="leading-[1.15] text-[#0D1A0F]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: i < 3 ? 700 : 600,
                  fontStyle: i === 3 ? 'italic' : 'normal',
                  fontSize: i < 3 ? '30px' : '26px',
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
