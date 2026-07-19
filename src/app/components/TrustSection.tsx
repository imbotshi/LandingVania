import React from 'react';
import FadeIn from './FadeIn';
import claudeImg from '../../assets/claude.png';
import nicoImg from '../../assets/Nico.PNG';

/**
 * TrustSection v2 — Enrichie
 * 1. Stats contextualisées (4 métriques)
 * 2. Deux témoignages : Claude Tchinda + Fondateur Mynovas
 * 3. Format carousel horizontal (scroll natif mobile)
 */

const stats = [
  { value: '+37%',  label: 'de visibilité moyenne en 60 jours' },
  { value: '3×',    label: 'plus de demandes qualifiées en 90j' },
  { value: '4.9★',  label: 'de satisfaction client (27 avis)' },
  { value: '89%',   label: 'de renouvellement des partenariats' },
];

const testimonials = [
  {
    quote: 'Vania a transformé la manière dont notre plateforme est perçue. En 3 mois, Mynovas a gagné en visibilité et en notoriété sur le marché camerounais — les propriétaires nous contactent désormais directement.',
    name: 'Nico Ludovick Ngnitedem',
    role: 'Fondateur — Mynovas',
    url: 'https://www.mynovase.com',
    img: nicoImg,
    initials: 'NN',
  },
  {
    quote: 'Après le travail avec Vania, mes demandes sont plus qualifiées. L\'indice de différenciation m\'a montré à quel point mon bien ressemblait à tous les autres. Aujourd\'hui c\'est terminé.',
    name: 'Claude Tchinda',
    role: 'Propriétaire · Douala',
    img: claudeImg,
    initials: 'CT',
  },
];

export default function TrustSection() {
  return (
    <section
      className="relative w-full py-20 px-6 flex flex-col items-center"
      style={{ backgroundColor: '#1A3A1F' }}
      id="trust"
      aria-label="Résultats et témoignages"
    >
      {/* Header */}
      <FadeIn className="w-full flex flex-col items-center mb-14">
        <div className="w-10 h-[1px] mb-6" style={{ backgroundColor: '#C8A96A' }} />
        <p className="text-[12px] uppercase tracking-[0.16em] mb-3" style={{ color: '#C8A96A' }}>
          Ils nous font confiance
        </p>
        <h2
          className="text-[40px] leading-[1.05] text-center"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: '#FAF8F4',
          }}
        >
          Des résultats<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>que l'on peut mesurer.</em>
        </h2>
      </FadeIn>

      {/* Stats — 2×2 grid */}
      <FadeIn delay={0.08} className="w-full mb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span
                className="text-[32px] leading-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  color: '#C8A96A',
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[12px] leading-[1.4] font-[400] text-center"
                style={{ color: 'rgba(250,248,244,0.65)', maxWidth: 110 }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Divider */}
      <div className="w-full h-[1px] mb-14" style={{ backgroundColor: 'rgba(200,169,106,0.2)' }} />

      {/* Testimonials — scroll horizontal */}
      <FadeIn delay={0.14} className="w-full">
        <p
          className="text-[12px] uppercase tracking-[0.16em] mb-8"
          style={{ color: 'rgba(200,169,106,0.7)' }}
        >
          Ce qu'ils disent
        </p>

        <div
          className="flex lg:grid lg:grid-cols-2 gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 w-full"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] lg:w-auto max-w-[340px] lg:max-w-none rounded-[24px] p-6 flex flex-col gap-5"
              style={{
                scrollSnapAlign: 'start',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(200,169,106,0.18)',
              }}
            >
              {/* Quote mark */}
              <p
                className="text-[52px] leading-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: '#C8A96A',
                  opacity: 0.5,
                }}
              >
                "
              </p>

              {/* Quote */}
              <p
                className="text-[16px] leading-[1.6] flex-1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#FAF8F4',
                }}
              >
                {t.quote}
              </p>

              {/* Source link Mynovas */}
              {t.url && (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-wide"
                  style={{ color: '#C8A96A' }}
                >
                  {t.url.replace('https://', '')} ↗
                </a>
              )}

              {/* Identity */}
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(200,169,106,0.18)' }}>
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ filter: 'grayscale(30%)' }}
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(200,169,106,0.2)', color: '#C8A96A' }}
                  >
                    <span className="text-[14px] font-[700]">{t.initials}</span>
                  </div>
                )}
                <div>
                  <p className="text-[15px] font-[600]" style={{ color: '#FAF8F4' }}>{t.name}</p>
                  <p className="text-[12px]" style={{ color: '#C8A96A' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? 20 : 6,
                height: 6,
                backgroundColor: i === 0 ? '#C8A96A' : 'rgba(200,169,106,0.35)',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
