import React from 'react';
import FadeIn from './FadeIn';
import claudeImg from '../../assets/claude.png';

/**
 * TrustSection — Signaux de confiance pour le segment luxe.
 * 1. Indicateurs clés (chiffres percutants).
 * 2. Citation d'un propriétaire (photo + texte + nom).
 *
 * Rappel recommandation : dans le luxe, la preuve par les pairs est critique.
 */

const stats = [
  { value: '89%',   label: 'de renouvellement annuel' },
  { value: '3×',    label: 'meilleure visibilité OTA' },
  { value: '20min', label: "d'entretien pour démarrer" },
];

export default function TrustSection() {
  return (
    <section
      className="relative w-full py-20 px-6 flex flex-col items-center"
      style={{ backgroundColor: '#1A3A1F' }}
    >
      {/* Gold filet */}
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

      {/* Stats row */}
      <FadeIn delay={0.08} className="w-full mb-14">
        <div className="flex justify-around w-full">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                className="text-[36px] leading-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  color: '#C8A96A',
                }}
              >
                {s.value}
              </span>
              <span className="text-[12px] text-center leading-[1.4] font-[400]" style={{ color: '#FAF8F4AA', maxWidth: 80 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Divider */}
      <div className="w-full h-[1px] mb-14" style={{ backgroundColor: 'rgba(200,169,106,0.2)' }} />

      {/* Testimonial quote */}
      <FadeIn delay={0.14} className="w-full max-w-[390px]">
        {/* Quote mark */}
        <p
          className="text-[64px] leading-none mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#C8A96A',
            opacity: 0.5,
          }}
        >
          "
        </p>
        <p
          className="text-[20px] leading-[1.55] mb-8"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#FAF8F4',
          }}
        >
          Vania a transformé la manière dont ma résidence est perçue. En 3 mois, j'ai arrêté de dépendre d'Airbnb et mes locataires viennent désormais directement.
        </p>

        {/* Client identity */}
        <div className="flex items-center gap-4">
          <img
            src={claudeImg}
            alt="Claude Tchinda"
            className="w-14 h-14 rounded-full object-cover"
            style={{ filter: 'grayscale(30%)' }}
          />
          <div>
            <p className="text-[16px] font-[600]" style={{ color: '#FAF8F4' }}>Claude Tchinda</p>
            <p className="text-[13px]" style={{ color: '#C8A96A' }}>
              Propriétaire · Kinshasa
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
