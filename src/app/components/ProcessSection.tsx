import React from 'react';
import FadeIn from './FadeIn';

/**
 * ProcessSection — Timeline 4 étapes.
 * Répond à la recommandation luxe : rassurance procédurale.
 * Format : numéro + titre + description, empilés verticalement avec
 * un filet or reliant les étapes (Mobbin-style timeline).
 */

const steps = [
  {
    num: '01',
    title: 'Diagnostic confidentiel',
    desc: 'Un entretien de 20 minutes pour comprendre votre résidence, vos objectifs et votre positionnement actuel.',
  },
  {
    num: '02',
    title: 'Proposition sur mesure',
    desc: 'Un plan d\'action personnalisé : identité de marque, stratégie de contenu, canaux de distribution recommandés.',
  },
  {
    num: '03',
    title: 'Activation de la marque',
    desc: 'Déploiement de l\'identité visuelle, création des contenus et mise en place de la présence digitale.',
  },
  {
    num: '04',
    title: 'Suivi & reporting',
    desc: 'Tableau de bord mensuel, analyse des performances et ajustements continus pour maximiser les revenus.',
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative w-full py-20 px-6 flex flex-col"
      style={{ backgroundColor: '#FAF8F4' }}
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
