import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

import {
  Chart01Icon,
  SearchMinusIcon,
  Shield01Icon,
  ArrowRight01Icon,
  Cancel01Icon
} from 'hugeicons-react';

export default function ProblemSection() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  let resumeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeItem, setActiveItem] = useState<{type: string, src: string, title: string} | null>(null);

  const pauseMarquee = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const resumeMarquee = () => {
    resumeTimer.current = setTimeout(() => {
      if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
    }, 1200);
  };

  const problems = [
    {
      id: 'ota',
      title: 'Dépendance aux OTAs',
      desc: 'Vous cédez jusqu\'à 20% de vos revenus aux plateformes de réservation (Booking, Airbnb). Votre rentabilité s\'effrite.',
      icon: Chart01Icon,
      colSpan: 'col-span-1 md:col-span-2',
      bg: '#FAF8F4',
      border: 'rgba(13,26,15,0.08)',
    },
    {
      id: 'visibilite',
      title: 'Invisibilité numérique',
      desc: 'Noyé dans un océan d\'annonces similaires, votre personal branding est inexistant. Les prospects ne vous remarquent pas.',
      icon: SearchMinusIcon,
      colSpan: 'col-span-1',
      bg: '#FAF8F4',
      border: 'rgba(13,26,15,0.08)',
    },
    {
      id: 'confiance',
      title: 'Crise de confiance',
      desc: 'Arnaques, photos trompeuses... Les clients se méfient. Sans une image de marque forte et vérifiée, vous perdez des ventes potentielles.',
      icon: Shield01Icon,
      colSpan: 'col-span-1 md:col-span-3',
      bg: '#1A3A1F',
      textDark: false,
      border: 'none',
    }
  ];

  const portfolioItems = [
    { type: 'video', src: '/portfolio/Ad Content.MP4', title: 'Ad Content' },
    { type: 'video', src: '/portfolio/Storytelling Content.MP4', title: 'Storytelling Content' },
    { type: 'image', src: '/portfolio/Game Content.png', title: 'Game Content' },
  ];
  
  // Dupliquer pour l'effet infini du marquee
  const duplicatedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems];

  return (
    <section className="relative w-full pt-16 pb-24 overflow-hidden" style={{ backgroundColor: '#FAF8F4' }}>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(13,26,15,0.9)' }}
            onClick={() => setActiveItem(null)}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[60]"
            >
              <Cancel01Icon size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[400px] bg-black rounded-[24px] overflow-hidden shadow-2xl aspect-[9/16]"
            >
              {activeItem.type === 'video' ? (
                <video 
                  src={activeItem.src} 
                  autoPlay 
                  controls 
                  playsInline 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <img 
                  src={activeItem.src} 
                  alt={activeItem.title} 
                  className="w-full h-full object-cover" 
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marquee — mobile only */}
      <style>{`
        @keyframes marquee-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-x 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Mobile marquee */}
      <div
        className="md:hidden w-full pt-4 pb-12"
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
          {duplicatedItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveItem(item)}
              className="w-[260px] h-[340px] rounded-[24px] overflow-hidden relative shrink-0 cursor-pointer group"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <p className="text-white font-[600] text-[16px] tracking-tight">{item.title}</p>
                {item.type === 'video' && (
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid gallery */}
      <div className="hidden md:grid grid-cols-3 gap-5 px-5 lg:px-16 xl:px-24 pb-12 w-full max-w-[1200px] mx-auto">
        {portfolioItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveItem(item)}
            className="relative h-[360px] rounded-[28px] overflow-hidden cursor-pointer group"
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-[600] text-[18px] tracking-tight">{item.title}</p>
              {item.type === 'video' && (
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn className="w-full flex flex-col items-center mb-16">
          <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: '#C8A96A' }} />
          <h2
            className="text-[40px] md:text-[50px] leading-[1.1] text-center text-[#0D1A0F] max-w-[800px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
          >
            L'immobilier digital a changé.<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Les anciennes méthodes vous coûtent cher.</em>
          </h2>
          <p className="mt-6 text-[18px] text-[#0D1A0F]/70 text-center max-w-[600px] leading-relaxed">
            Avant de rêver de visibilité, regardons en face les murs qui freinent votre croissance aujourd'hui.
          </p>
        </FadeIn>

        {/* Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {problems.map((prob, i) => {
            const Icon = prob.icon;
            const isDark = prob.textDark === false;
            return (
              <FadeIn key={prob.id} delay={i * 0.1} className={`relative group ${prob.colSpan} rounded-[32px] overflow-hidden`}>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at center, rgba(200,169,106,0.15) 0%, transparent 70%)' }}
                />
                <div 
                  className="h-full p-8 md:p-10 flex flex-col items-start border relative z-10"
                  style={{ 
                    backgroundColor: prob.bg,
                    borderColor: prob.border,
                    borderRadius: '32px'
                  }}
                >
                  <div 
                    className="w-[56px] h-[56px] rounded-[18px] flex items-center justify-center mb-8"
                    style={{ backgroundColor: isDark ? 'rgba(250,248,244,0.1)' : 'rgba(13,26,15,0.04)' }}
                  >
                    <Icon size={28} color={isDark ? '#FAF8F4' : '#0D1A0F'} />
                  </div>
                  <h3 
                    className="text-[26px] mb-4 leading-tight"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontWeight: 700,
                      color: isDark ? '#FAF8F4' : '#0D1A0F'
                    }}
                  >
                    {prob.title}
                  </h3>
                  <p 
                    className="text-[16px] leading-[1.6]"
                    style={{ color: isDark ? 'rgba(250,248,244,0.8)' : 'rgba(13,26,15,0.7)' }}
                  >
                    {prob.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4} className="flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C8A96A] text-[#0D1A0F] font-[600] text-[16px] hover:brightness-110 transition-all">
            Il est temps de reprendre le contrôle <ArrowRight01Icon size={20} />
          </a>
        </FadeIn>
      </div>

    </section>
  );
}
