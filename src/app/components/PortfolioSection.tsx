import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const kglImg = new URL('../../assets/Appartement meublé-2.jpg', import.meta.url).href;

/**
 * PortfolioSection — Galerie éditoriale des résidences Vania.
 * Format : carte pleine largeur avec nom de résidence + ville + KPI.
 * Animation : FadeIn + légère remontée au scroll, hover léger scale.
 */

const properties = [
  {
    img: kglImg,
    name: 'Résidence Kgl',
    city: 'Douala · Cameroun',
    kpi: 'Notre résidence partenaire',
    tag: 'Location meublée',
  },
];

export default function PortfolioSection() {
  return (
    <section
      className="relative w-full pt-20 pb-16 px-5 flex flex-col"
      style={{ backgroundColor: '#0D1A0F' }}
    >
      {/* Header */}
      <FadeIn className="mb-12">
        {/* Gold filet */}
        <div className="w-10 h-[1px] mb-6" style={{ backgroundColor: '#C8A96A' }} />
        <p className="text-[12px] uppercase tracking-[0.16em] mb-3" style={{ color: '#C8A96A' }}>
          Nos résidences
        </p>
        <h2
          className="leading-[1.05] text-[42px]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: '#FAF8F4',
          }}
        >
          Des propriétés<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>que l'on reconnaît.</em>
        </h2>
      </FadeIn>

      {/* Property cards */}
      <div className="flex flex-col gap-6">
        {properties.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a
              href="https://www.tiktok.com/@vania.imo/video/7463743736535600406"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="relative w-full h-[380px] rounded-[28px] overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Tag pill */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-[600] tracking-wide"
                  style={{ backgroundColor: 'rgba(200,169,106,0.18)', color: '#C8A96A', border: '1px solid rgba(200,169,106,0.35)' }}
                >
                  {p.tag}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <p className="text-[11px] tracking-[0.12em] mb-1" style={{ color: '#C8A96A' }}>
                    {p.city.toUpperCase()}
                  </p>
                  <h3
                    className="text-[24px] mb-2"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      color: '#FAF8F4',
                    }}
                  >
                    {p.name}
                  </h3>
                  {/* KPI badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(200,169,106,0.15)', border: '1px solid rgba(200,169,106,0.3)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8A96A' }} />
                    <span className="text-[13px] font-[500]" style={{ color: '#FAF8F4' }}>{p.kpi}</span>
                  </div>
                </div>
              </motion.div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
