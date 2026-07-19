import React from 'react';
import FadeIn from './FadeIn';

/**
 * ProcessSection v2 — Timeline 4 étapes avec durées estimées.
 * Rassurance procédurale pour les prospects B2B.
 */

const steps = [
  {
    num: '01',
    title: 'Consultation découverte',
    duration: '20 minutes',
    desc: 'Un entretien gratuit pour comprendre votre activité, vos objectifs et votre positionnement actuel sur le marché.',
  },
  {
    num: '02',
    title: 'Proposition sur mesure',
    duration: '3–5 jours',
    desc: 'Un plan d\'action personnalisé : identité de marque, stratégie de contenu, canaux de distribution recommandés et budget estimé.',
  },
  {
    num: '03',
    title: 'Activation de la stratégie',
    duration: '2–4 semaines',
    desc: 'Déploiement de l\'identité visuelle, création des contenus et mise en place de la présence digitale sur vos canaux.',
  },
  {
    num: '04',
    title: 'Suivi & reporting mensuel',
    duration: 'En continu',
    desc: 'Tableau de bord mensuel, analyse des performances et ajustements continus pour maximiser votre visibilité et vos leads.',
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative w-full py-20 px-6 flex flex-col"
      style={{ backgroundColor: '#FAF8F4' }}
      id="processus"
      aria-label="Notre processus d'accompagnement"
    >
      {/* Header */}
      <FadeIn className="mb-14">
        <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: '#C8A96A' }} />
        <p className="text-[12px] uppercase tracking-[0.16em] mb-3 text-[#0D1A0F]/50">
          Notre méthode
        </p>
        <h2
          className="text-[40px] leading-[1.05] text-[#0D1A0F]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
          }}
        >
          Un processus<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>maîtrisé.</em>
        </h2>
      </FadeIn>

      {/* Steps timeline */}
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex gap-5 pb-10 relative">
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[22px] top-[44px] bottom-0 w-[1px]"
                  style={{ backgroundColor: '#C8A96A', opacity: 0.35 }}
                />
              )}

              {/* Number circle */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-[13px] font-[600] tracking-wide border"
                style={{
                  backgroundColor: '#FAF8F4',
                  borderColor: '#C8A96A',
                  color: '#C8A96A',
                  zIndex: 1,
                }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="pt-[6px]">
                {/* Duration badge */}
                <span
                  className="inline-block px-2 py-[2px] rounded-full text-[10px] font-[600] uppercase tracking-[0.1em] mb-2"
                  style={{ backgroundColor: 'rgba(200,169,106,0.15)', color: '#C8A96A' }}
                >
                  {step.duration}
                </span>
                <h3
                  className="text-[20px] mb-2 text-[#0D1A0F]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#0D1A0F]/60 font-[400]">
                  {step.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
