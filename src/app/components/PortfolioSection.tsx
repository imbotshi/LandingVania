import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

/**
 * PortfolioSection — v2 Desktop Carousel + Filtres
 * Desktop : carrousel panoramique filtrable par type de bien.
 * Filtres : Tous / Location Meublée / Non Meublée / OTAs
 * Hover : overlay avec CTA vidéo TikTok.
 */

const kglImg        = new URL('../../assets/Appartement meublé-2.jpg',    import.meta.url).href;
const kglImg2       = new URL('../../assets/Appartement meublé.jpg',      import.meta.url).href;
const nonMeuble2    = new URL('../../assets/Appartement non meublé - 2.jpg', import.meta.url).href;
const nonMeuble3    = new URL('../../assets/Appartement non meublé - 3.jpg', import.meta.url).href;
const bondengeImg   = new URL('../../assets/bondenge.png',                import.meta.url).href;
const studioImg     = new URL('../../assets/Studio de marketing immobilier.png', import.meta.url).href;
const hallwayImg    = new URL('../../assets/solution_hallway.png',        import.meta.url).href;
const houseImg      = new URL('../../assets/solution_house.png',          import.meta.url).href;

type Filter = 'tous' | 'meuble' | 'non-meuble' | 'otas';

interface Property {
  img: string;
  name: string;
  city: string;
  kpi: string;
  tag: string;
  filter: Filter;
  videoUrl?: string;
  hasVideo?: boolean;
}

const properties: Property[] = [
  {
    img: kglImg,
    name: 'Résidence KGL',
    city: 'Douala · Cameroun',
    kpi: 'Résidence partenaire',
    tag: 'Location meublée',
    filter: 'meuble',
    videoUrl: 'https://www.tiktok.com/@vania.imo/video/7463743736535600406',
    hasVideo: true,
  },
  {
    img: kglImg2,
    name: 'Appartement Akwa',
    city: 'Douala · Cameroun',
    kpi: '+40% de demandes en ligne',
    tag: 'Location meublée',
    filter: 'meuble',
    hasVideo: false,
  },
  {
    img: nonMeuble2,
    name: 'Villa Bonapriso',
    city: 'Douala · Cameroun',
    kpi: 'Campagne ciblée Google',
    tag: 'Non meublée',
    filter: 'non-meuble',
    hasVideo: false,
  },
  {
    img: nonMeuble3,
    name: 'Résidence Bastos',
    city: 'Yaoundé · Cameroun',
    kpi: 'Leads qualifiés x3',
    tag: 'Non meublée',
    filter: 'non-meuble',
    hasVideo: false,
  },
  {
    img: bondengeImg,
    name: 'OTA Bondenge',
    city: 'Cameroun',
    kpi: 'Référencement OTA optimisé',
    tag: 'Plateforme OTAs',
    filter: 'otas',
    hasVideo: false,
  },
  {
    img: hallwayImg,
    name: 'Résidence Couloir d\'Or',
    city: 'Douala · Cameroun',
    kpi: 'Studio photo & vidéo pro',
    tag: 'Location meublée',
    filter: 'meuble',
    hasVideo: false,
  },
  {
    img: houseImg,
    name: 'Villa Prestige',
    city: 'Yaoundé · Cameroun',
    kpi: 'Stratégie digitale complète',
    tag: 'Non meublée',
    filter: 'non-meuble',
    hasVideo: false,
  },
  {
    img: studioImg,
    name: 'Campagne OTA Pro',
    city: 'Cameroun',
    kpi: 'Visibilité nationale',
    tag: 'Plateforme OTAs',
    filter: 'otas',
    hasVideo: false,
  },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'tous',       label: 'Tous' },
  { key: 'meuble',     label: 'Location Meublée' },
  { key: 'non-meuble', label: 'Non Meublée' },
  { key: 'otas',       label: 'Plateformes OTAs' },
];

function PropertyCard({ p, index }: { p: Property; index: number }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.div
      className="relative flex-shrink-0 w-[320px] lg:w-[360px] h-[420px] lg:h-[480px] rounded-[28px] overflow-hidden group cursor-pointer shadow-lg"
      whileHover={{ scale: 1.025, y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      layout
    >
      {/* Image */}
      <img
        src={p.img}
        alt={p.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Tag pill */}
      <div
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide"
        style={{
          backgroundColor: 'rgba(200,169,106,0.18)',
          color: '#C8A96A',
          border: '1px solid rgba(200,169,106,0.35)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {p.tag}
      </div>

      {/* Video badge */}
      {p.hasVideo && (
        <div
          className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-[700] uppercase tracking-wide"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(8px)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.17a8.18 8.18 0 004.79 1.53V7.26a4.85 4.85 0 01-1.02-.57z"/></svg>
          TikTok
        </div>
      )}

      {/* Hover overlay — CTA vidéo */}
      <AnimatePresence>
        {hovered && p.hasVideo && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(13,26,15,0.55)', backdropFilter: 'blur(2px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: '#C8A96A' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-white text-[13px] font-[500]">Voir la vidéo</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        <p className="text-[11px] tracking-[0.12em] mb-1" style={{ color: '#C8A96A' }}>
          {p.city.toUpperCase()}
        </p>
        <h3
          className="text-[22px] mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            color: '#FAF8F4',
          }}
        >
          {p.name}
        </h3>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
          style={{
            backgroundColor: 'rgba(200,169,106,0.15)',
            border: '1px solid rgba(200,169,106,0.3)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8A96A' }} />
          <span className="text-[12px] font-[500]" style={{ color: '#FAF8F4' }}>{p.kpi}</span>
        </div>
      </div>
    </motion.div>
  );

  if (p.hasVideo && p.videoUrl) {
    return (
      <a href={p.videoUrl} target="_blank" rel="noopener noreferrer" className="block flex-shrink-0">
        {card}
      </a>
    );
  }

  return <div className="flex-shrink-0">{card}</div>;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('tous');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'tous'
    ? properties
    : properties.filter(p => p.filter === activeFilter);

  return (
    <section
      className="relative w-full pt-20 pb-16 flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0D1A0F' }}
      id="portfolio"
      aria-label="Portfolio de résidences et campagnes"
    >
      {/* Header */}
      <FadeIn className="mb-10 px-5 lg:px-16 xl:px-24">
        <div className="w-10 h-[1px] mb-6" style={{ backgroundColor: '#C8A96A' }} />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-[12px] uppercase tracking-[0.16em] mb-3" style={{ color: '#C8A96A' }}>
              Nos résidences & réalisations
            </p>
            <h2
              className="leading-[1.05] text-[42px] lg:text-[52px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                color: '#FAF8F4',
              }}
            >
              Des propriétés<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>que l'on reconnaît.</em>
            </h2>
          </div>

          {/* Filter pills — on the right on desktop */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => {
              const isActive = activeFilter === f.key;
              return (
                <motion.button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className="px-4 py-2 rounded-full text-[13px] font-[600] transition-all duration-200 whitespace-nowrap"
                  style={{
                    backgroundColor: isActive ? '#C8A96A' : 'rgba(250,248,244,0.08)',
                    color: isActive ? '#0D1A0F' : 'rgba(250,248,244,0.6)',
                    border: isActive ? 'none' : '1px solid rgba(250,248,244,0.15)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {f.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-5 lg:px-16 xl:px-24 pb-6"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        aria-label="Galerie de résidences"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={`${p.name}-${activeFilter}`}
              style={{ scrollSnapAlign: 'start' }}
              layout
            >
              <PropertyCard p={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Scroll hint (mobile) */}
      <div className="lg:hidden flex justify-center mt-4">
        <span className="text-[12px] text-white/30 tracking-wide">← Glisser pour voir plus →</span>
      </div>

      {/* Hide scrollbar for WebKit */}
      <style>{`
        [aria-label="Galerie de résidences"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
