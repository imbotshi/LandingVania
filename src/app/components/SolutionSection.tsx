import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import consultantImg from '../../assets/Consultant.png';

const studioImg   = new URL('../../assets/Studio de marketing immobilier.png',      import.meta.url).href;
const strategyImg = new URL('../../assets/bondenge1.png', import.meta.url).href;
const digitalImg  = new URL('../../assets/Kit de présence digitale.png',            import.meta.url).href;

/**
 * SolutionSection — Fusion des anciens SolutionSection + Solution2Section
 * 4 services présentés via tab bar + contenu riche
 * Desktop: layout 2 colonnes (texte gauche, image droite)
 */

const services = [
  {
    id: 'studio',
    label: 'Studio Marketing',
    image: studioImg,
    segments: ['OTAs', 'Agences', 'Agents'],
    question: 'Vos contenus racontent-ils une expérience ou simplement un inventaire d\'annonces ?',
    body: 'Audit de marque, création de site internet, gestion de vos pages réseaux sociaux, production de photos et vidéos pro. Notre studio augmente la visibilité moyenne de 30–37% en 60 jours.',
  },
  {
    id: 'campagne',
    label: 'Campagnes Pub',
    image: consultantImg,
    segments: ['OTAs', 'Agences', 'Agents'],
    question: 'Votre budget pub génère-t-il des demandes qualifiées ou du bruit ?',
    body: 'Campagnes ciblées sur Facebook, Instagram et Google pour attirer les locataires et acheteurs idéaux. ROI maîtrisé, budget optimisé et reporting transparent.',
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    image: strategyImg,
    segments: ['Agences', 'Agents'],
    question: 'Êtes-vous prêt à intégrer un réseau gagnant-gagnant ?',
    body: 'Intégrez-nous à votre catalogue, partagez-nous les adresses de quelques biens, et nous créons du contenu pro (photos, vidéos, reels) pour attirer plus de locataires. Zéro coût fixe.',
  },
  {
    id: 'kit',
    label: 'Kit Digital',
    image: digitalImg,
    segments: ['Agents', 'OTAs'],
    question: 'Vos canaux directs capturent-ils des réservations sans intermédiaire ?',
    body: 'Pack de stratégie, templates et recommandations visuelles pour vos annonces, vos campagnes et vos canaux directs — pour augmenter la part de réservations directes et réduire la dépendance aux OTAs.',
  },
];

export default function SolutionSection() {
  const [activeId, setActiveId] = useState('studio');
  const active = services.find(s => s.id === activeId)!;

  return (
    <section
      className="relative w-full py-20 px-5 lg:px-16 xl:px-24 flex flex-col items-center"
      style={{ backgroundColor: '#FAF8F4' }}
      id="services"
      aria-label="Nos services de marketing immobilier"
    >
      {/* Header */}
      <FadeIn className="w-full flex flex-col items-center mb-10">
        <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: '#C8A96A' }} />
        <p className="text-[12px] uppercase tracking-[0.16em] mb-3 text-[#0D1A0F]/50">
          Nos services
        </p>
        <h2
          className="text-[42px] lg:text-[52px] leading-[1.05] text-center mb-3 text-[#0D1A0F]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          Votre marque,<br />
          <em style={{ fontWeight: 400, fontStyle: 'italic' }}>vue comme telle.</em>
        </h2>
        <p className="text-[15px] text-center text-[#0D1A0F]/55 leading-[1.6] max-w-[320px] lg:max-w-[480px]">
          De l'audit à l'exécution — quatre axes pour dominer votre marché.
        </p>
      </FadeIn>

      {/* Tab bar avec pill-slider */}
      <div
        className="relative flex items-center gap-[6px] mb-9 w-full max-w-[700px] overflow-x-auto hide-scrollbar p-1 rounded-full"
        style={{ backgroundColor: '#F0EDE6' }}
      >
        {/* Sliding pill */}
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-full shadow-sm"
          style={{ top: 4, left: 4, backgroundColor: '#C8A96A' }}
          layoutId="service-pill"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
        {services.map((svc) => {
          const isActive = activeId === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => setActiveId(svc.id)}
              className="relative z-10 px-[16px] py-[9px] text-[13px] font-[600] rounded-full transition-colors whitespace-nowrap shrink-0"
              style={{ color: isActive ? '#141414' : '#777' }}
            >
              {svc.label}
            </button>
          );
        })}
      </div>

      {/* Active service content — 2 columns on desktop */}
      <div className="w-full max-w-[390px] lg:max-w-[1100px]">
        <div className="lg:flex lg:gap-14 lg:items-center">

          {/* Text column — left on desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:flex-1 px-1 mb-8 lg:mb-0"
            >
              <p className="text-[#141414] text-[20px] lg:text-[26px] font-[700] leading-[1.3] mb-4 tracking-tight">
                {active.question}
              </p>
              <p className="text-[#555] text-[15px] lg:text-[17px] leading-[1.7] mb-8">
                {active.body}
              </p>

              {/* Segment tags */}
              <div className="flex gap-2 flex-wrap mb-8">
                {active.segments.map((seg) => (
                  <span
                    key={seg}
                    className="px-3 py-1 rounded-full text-[11px] font-[600] uppercase tracking-wide"
                    style={{ backgroundColor: 'rgba(26,58,31,0.08)', color: '#1A3A1F', border: '1px solid rgba(26,58,31,0.15)' }}
                  >
                    {seg}
                  </span>
                ))}
              </div>

              {/* CTA contextuel */}
              <a href="#contact" className="block lg:w-auto">
                <motion.button
                  className="w-full lg:w-auto h-[52px] px-8 rounded-[26px] font-[500] text-[15px]"
                  style={{ backgroundColor: '#1A3A1F', color: '#FAF8F4' }}
                  whileHover={{
                    filter: 'brightness(1.15)',
                    boxShadow: '0 0 24px rgba(200,169,106,0.35)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  Démarrer avec ce service →
                </motion.button>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Image column — right on desktop */}
          <div className="lg:flex-1 w-full h-[280px] lg:h-[420px] rounded-[24px] overflow-hidden relative shadow-md group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeId + '-img'}
                src={active.image}
                alt={active.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>

            {/* Segment tags overlay — mobile only */}
            <div className="lg:hidden absolute top-4 left-4 flex gap-2 flex-wrap">
              {active.segments.map((seg) => (
                <span
                  key={seg}
                  className="px-2 py-[3px] rounded-full text-[10px] font-[600] uppercase tracking-wide"
                  style={{ backgroundColor: 'rgba(26,58,31,0.82)', color: '#C8A96A' }}
                >
                  {seg}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
