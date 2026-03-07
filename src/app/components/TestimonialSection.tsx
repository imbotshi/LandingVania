import React from 'react';
import claudeImg from '../../assets/claude.png';
import FadeIn from './FadeIn';

export default function TestimonialSection() {
  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-start" style={{ backgroundColor: '#FAF8F4' }}>
      
      {/* Big bold heading — matches the Figma reference exactly */}
      <FadeIn className="w-full">
        <h2
          className="leading-[1.0] text-[#0D1A0F] tracking-[-0.02em] mb-16 text-center"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '52px' }}
        >
          Résultats<br/>propriétaires.
        </h2>
      </FadeIn>

      {/* Client card */}
      <div className="w-full flex flex-col items-start">

        {/* Avatar + Name + Property row */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={claudeImg}
            alt="Claude Tchinda"
            className="w-[68px] h-[68px] rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col">
            <h3 className="text-[19px] font-[800] text-[#153D1C] leading-[1.2] tracking-tight">
              Propriétaire : Claude Tchinda
            </h3>
            <p className="text-[16px] text-[#444444] font-[400] mt-[2px]">Résidence TEK</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-[19px] leading-[1.5] text-[#141414] font-[500] tracking-tight max-w-[360px]">
          L'indice de différenciation m'a montré à quel point mon bien ressemblait à tous les autres. Après le travail avec Vania, mes demandes sont plus qualifiées.
        </p>

      </div>
      
    </section>
  );
}
