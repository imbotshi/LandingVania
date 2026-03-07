import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import consultantImg from '../../assets/Consultant.png';

const tabs = [
  {
    id: 'creation',
    label: 'Création de contenu',
    question: 'Vos contenus racontent-ils une expérience ou simplement un inventaire de meubles ?',
    body: 'Nous évaluons impact, cohérence, qualité et capacité de vos images à déclencher une envie de séjour. Notre équipe propose un contenu pro qui augmente la visibilité de 30–37%.',
  },
  {
    id: 'campagne',
    label: 'Campagne publicitaire',
    question: 'Votre budget pub génère-t-il des demandes qualifiées ou du bruit ?',
    body: 'Campagnes ciblées sur Facebook, Instagram et Google pour attirer les locataires idéaux. ROI maîtrisé, budget optimisé et reporting transparent.',
  },
  {
    id: 'promotion',
    label: 'Promotion',
    question: 'Vos canaux directs capturent-ils suffisamment de réservations sans intermédiaire ?',
    body: 'Nous construisons votre présence directe (site, réseaux, email) pour réduire la dépendance aux OTAs et augmenter la part de réservations directes.',
  },
];

export default function SolutionSection() {
  const [activeId, setActiveId] = useState('creation');
  const active = tabs.find(t => t.id === activeId)!;
  const activeIdx = tabs.findIndex(t => t.id === activeId);

  return (
    <section className="relative w-full py-20 px-5 flex flex-col items-center" style={{ backgroundColor: '#FAF8F4' }}>
      <FadeIn>
        <h2
          className="text-[42px] leading-[1.05] text-center mb-8 text-[#0D1A0F]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          Votre bien, vu comme<br />
          <em style={{ fontWeight: 400, fontStyle: 'italic' }}>une marque à part entière.</em>
        </h2>
      </FadeIn>

      {/* ✅ Tab bar avec pill-slider spring — Mobbin pattern B */}
      <div className="relative flex items-center gap-[6px] mb-9 w-full overflow-x-auto hide-scrollbar p-1 rounded-full" style={{ backgroundColor: '#F0EDE6' }}>
        {/* Sliding pill background */}
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-full shadow-sm"
          style={{ top: 4, left: 4, backgroundColor: '#C8A96A' }}
          layoutId="tab-pill"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />

        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className="relative z-10 px-[16px] py-[9px] text-[13px] font-[600] rounded-full transition-colors whitespace-nowrap shrink-0"
              style={{ color: isActive ? '#141414' : '#777' }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content with fade on tab change */}
      <div className="w-full max-w-[390px]">
        <div className="w-full h-[290px] rounded-[24px] overflow-hidden relative mb-8 shadow-md">
          <img src={consultantImg} alt="Consultant" className="w-full h-full object-cover" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="px-1"
          >
            <p className="text-[#141414] text-[21px] font-[700] leading-[1.3] mb-3 tracking-tight">
              {active.question}
            </p>
            <p className="text-[#555] text-[16px] leading-[1.55]">
              {active.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
