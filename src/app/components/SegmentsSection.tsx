import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import { Hotel01Icon, Building03Icon, User02Icon, Search01Icon } from 'hugeicons-react';

/**
 * SegmentsSection — v2 Desktop Grid
 * Desktop : grille 4 cartes simultanées permettant une comparaison directe sans clics.
 * Mobile : sélecteur + une carte active (comportement original conservé).
 */

const segments = [
  {
    id: 'otas',
    icon: Hotel01Icon,
    tag: 'Prioritaire',
    title: 'Plateformes OTAs',
    benefit: 'Augmentez votre trafic organique et réduisez votre coût d\'acquisition grâce à des campagnes ciblées et du contenu qui convertit.',
    highlights: ['Contenu photo & vidéo pro', 'Campagnes Facebook & Google', 'Audit de visibilité OTA'],
    accent: '#C8A96A',
    highlighted: true,
  },
  {
    id: 'agences',
    icon: Building03Icon,
    tag: 'Agences',
    title: 'Agences immobilières',
    benefit: 'Distinguez-vous avec une identité de marque forte, du contenu éditorial de qualité et une présence digitale qui inspire confiance.',
    highlights: ['Identité de marque', 'Site web & réseaux sociaux', 'Stratégie de différenciation'],
    accent: '#1A3A1F',
    highlighted: false,
  },
  {
    id: 'agents',
    icon: User02Icon,
    tag: 'Agents',
    title: 'Agents indépendants',
    benefit: 'Bâtissez votre réputation et construisez une audience propre qui génère des leads qualifiés, sans dépendre de plateformes tierces.',
    highlights: ['Personal branding', 'Génération de leads', 'Formation & outils pratiques'],
    accent: '#1A3A1F',
    highlighted: false,
  },
  {
    id: 'chercheurs',
    icon: Search01Icon,
    tag: 'Chercheurs',
    title: 'Chercheurs de logements',
    benefit: 'Accédez à des annonces vérifiées, bien présentées et portées par des acteurs crédibles du marché immobilier camerounais.',
    highlights: ['Annonces vérifiées', 'Visuels professionnels', 'Contacts de confiance'],
    accent: '#1A3A1F',
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Shared card body used both in mobile single-card and desktop grid */
function SegmentCard({ seg, index = 0, compact = false }: {
  seg: typeof segments[number];
  index?: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`w-full rounded-[28px] flex flex-col gap-4 h-full ${compact ? 'p-5' : 'p-6'}`}
      style={{
        backgroundColor: seg.highlighted ? '#1A3A1F' : '#FFFFFF',
        border: seg.highlighted ? 'none' : '1px solid rgba(13,26,15,0.08)',
        boxShadow: seg.highlighted
          ? '0 24px 48px rgba(13,26,15,0.22)'
          : '0 4px 16px rgba(13,26,15,0.05)',
      }}
    >
      {/* Tag — OTAs highlighted */}
      {seg.highlighted && (
        <span
          className="self-start px-3 py-1 rounded-full text-[11px] font-[700] uppercase tracking-[0.12em]"
          style={{ backgroundColor: 'rgba(200,169,106,0.2)', color: '#C8A96A' }}
        >
          ★ {seg.tag}
        </span>
      )}

      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
          style={{ backgroundColor: seg.highlighted ? 'rgba(250,248,244,0.1)' : 'rgba(13,26,15,0.04)' }}
        >
          <seg.icon size={22} color={seg.highlighted ? '#FAF8F4' : '#0D1A0F'} />
        </span>
        <h3
          className="text-[22px] leading-[1.1]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: seg.highlighted ? '#FAF8F4' : '#0D1A0F',
          }}
        >
          {seg.title}
        </h3>
      </div>

      {/* Benefit */}
      <p
        className="text-[14px] leading-[1.65] flex-1"
        style={{ color: seg.highlighted ? 'rgba(245,239,230,0.78)' : '#555' }}
      >
        {seg.benefit}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {seg.highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-3">
            <span
              className="w-[5px] h-[5px] rounded-full shrink-0"
              style={{ backgroundColor: seg.highlighted ? '#C8A96A' : '#1A3A1F' }}
            />
            <span
              className="text-[13px] font-[500]"
              style={{ color: seg.highlighted ? 'rgba(245,239,230,0.9)' : '#0D1A0F' }}
            >
              {h}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="w-full mt-auto">
        <motion.button
          className="w-full h-[48px] rounded-[24px] font-[500] text-[14px] tracking-wide mt-1"
          style={{
            backgroundColor: seg.highlighted ? '#C8A96A' : '#1A3A1F',
            color: seg.highlighted ? '#0D1A0F' : '#FAF8F4',
          }}
          whileHover={{ filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          Obtenir mon diagnostic →
        </motion.button>
      </a>
    </motion.div>
  );
}

export default function SegmentsSection() {
  const [active, setActive] = useState('otas');

  return (
    <section
      className="relative w-full py-20 px-5 lg:px-16 xl:px-24 flex flex-col items-center"
      style={{ backgroundColor: '#F0EDE6' }}
      id="segments"
      aria-label="Nos segments clients"
    >
      {/* Header */}
      <FadeIn className="w-full flex flex-col items-center mb-12">
        <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: '#C8A96A' }} />
        <p className="text-[12px] uppercase tracking-[0.16em] mb-3 text-[#0D1A0F]/50">
          Pour qui travaillons-nous ?
        </p>
        <h2
          className="text-[40px] lg:text-[48px] leading-[1.05] text-center text-[#0D1A0F]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          Une stratégie<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>pour chaque acteur.</em>
        </h2>
      </FadeIn>

      {/* ── DESKTOP : grille 4 cartes simultanées ─────────────────── */}
      <div
        className="hidden lg:grid w-full max-w-[1280px] gap-5"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        aria-label="Segments clients"
      >
        {segments.map((seg, i) => (
          <SegmentCard key={seg.id} seg={seg} index={i} compact />
        ))}
      </div>

      {/* ── MOBILE : sélecteur pills + carte active ───────────────── */}
      <div className="lg:hidden w-full">
        {/* Segment selector pills */}
        <FadeIn delay={0.08} className="w-full mb-8 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 w-max mx-auto px-1">
            {segments.map((seg) => {
              const isActive = active === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActive(seg.id)}
                  className="px-4 py-2 rounded-full text-[13px] font-[600] whitespace-nowrap transition-all duration-250"
                  style={{
                    backgroundColor: isActive ? '#1A3A1F' : 'rgba(13,26,15,0.07)',
                    color: isActive ? '#FAF8F4' : '#0D1A0F',
                  }}
                >
                  <seg.icon size={16} className="inline-block mr-1 -mt-0.5" /> {seg.title}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active segment card */}
        <div className="w-full max-w-[420px] mx-auto">
          <AnimatePresence mode="wait">
            {segments.map((seg) =>
              active !== seg.id ? null : (
                <motion.div
                  key={seg.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SegmentCard seg={seg} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
