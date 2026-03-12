import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import FadeIn from './FadeIn';

import textureBg from '../../assets/128a66ed6ba78ad77c11fa74d3f2f4e3865b4906.png';
import buildingIcon from '../../assets/tabler_building-estate.svg';
import userIcon from '../../assets/location-user-03.svg';
import callIcon from '../../assets/call-02.svg';
import absLogo from '../../assets/abs.svg';
import programactorLogo from '../../assets/programactor.svg';
import bongoLogo from '../../assets/bongo.svg';
import otlLogo from '../../assets/otl.svg';

import img1 from '../../assets/623ab9db7687380edfa1eabf012c007d2a20d1b3.png';
import img2 from '../../assets/rentalimo.png';
import img3 from '../../assets/vaniaimo.png';
import img4 from '../../assets/Appartement non meublé - 3.jpg';
const apptNonMeuble2 = new URL('../../assets/Appartement non meublé - 2.jpg', import.meta.url).href;

const CARDS = [img1, img2, img3, img4];
const CARD_SIZE = 130;

const STACK = [
  { scale: 1.0,  y: 0,   opacity: 1, zIndex: 3 },
  { scale: 0.82, y: -9,  opacity: 1, zIndex: 2 },
  { scale: 0.64, y: -17, opacity: 1, zIndex: 1 },
];

function StackedDeck() {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex(i => (i + 1) % CARDS.length);
        setExiting(false);
      }, 350);
    }, 5000); // ✅ Luxe : 5s — plus contemplatif
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [0, 1, 2].map(offset => ({
    src:      CARDS[(index + offset) % CARDS.length],
    pos:      STACK[offset],
    id:       (index + offset) % CARDS.length,
    isActive: offset === 0,
  }));

  return (
    <div
      className="relative flex items-end justify-center mb-10"
      style={{ width: CARD_SIZE, height: CARD_SIZE + 24 }}
    >
      {[...visibleCards].reverse().map(({ src, pos, id, isActive }) => (
        <motion.div
          key={id}
          className="absolute bottom-0 overflow-hidden rounded-[22px] shadow-[0_8px_24px_rgba(21,61,28,0.12)] ring-1 ring-black/5"
          style={{ width: CARD_SIZE, height: CARD_SIZE, zIndex: pos.zIndex }}
          animate={isActive && exiting
            ? { scale: 1.0, y: 20, opacity: 0 }
            : { scale: pos.scale, y: pos.y, opacity: pos.opacity }
          }
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={src} alt={`Résidence haut de gamme Vania — location meuble Douala Cameroun ${id + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full pt-[90px] pb-20 px-6 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: '#FAF8F4' }}
    >
      {/* Marble texture — plus subtil en luxe */}
      <div className="absolute inset-0 z-0">
        <img src={textureBg} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-[0.30]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Stacked deck carousel */}
        <StackedDeck />

        {/* ✅ Headline en Playfair Display — serif luxe */}
        <FadeIn delay={0.05}>
          <h1
            className="text-[52px] leading-[1.02] text-center tracking-[-0.01em] mb-5 text-[#0D1A0F]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
          >
            Votre résidence mérite<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>une identité</em><br />
            à sa hauteur.
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="text-[17px] leading-[1.55] text-[#0D1A0F]/65 font-[400] text-center mb-10 max-w-[320px]">
            Vania positionne les propriétés d'exception comme des destinations de référence pour des locataires exigeants.
          </p>
        </FadeIn>

        {/* Stats — reformulées luxe */}
        <FadeIn delay={0.20}>
          <div className="flex flex-col items-start gap-3 mb-12">
            <div className="flex items-center gap-3">
              <img src={buildingIcon} alt="" className="w-[15px] h-[15px] opacity-40" />
              <span className="text-[14px] font-[500] text-[#0D1A0F]/70 tracking-wide">
                Expertise reconnue par des propriétaires exigeants
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={userIcon} alt="" className="w-[15px] h-[15px] opacity-40" />
              <span className="text-[14px] font-[500] text-[#0D1A0F]/70 tracking-wide">
                Sélection exclusive de résidences partenaires
              </span>
            </div>
          </div>
        </FadeIn>

        {/* ✅ CTA Luxury — "consultation privée" */}
        <FadeIn delay={0.25} className="w-full max-w-[360px] mb-16">
          <div className="flex flex-col gap-4 w-full">
            {/* Bouton primaire — vert forêt profond */}
            <Link to="/consultation" className="w-full">
              <motion.button
                className="w-full h-[58px] rounded-[29px] text-white font-[500] text-[17px] tracking-wide"
                style={{ backgroundColor: '#1A3A1F' }}
                whileHover={{ filter: 'brightness(1.12)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                Demander une consultation privée
              </motion.button>
            </Link>
            {/* Bouton secondaire — or champagne subtle */}
            <a href="tel:00237690536012" className="w-full">
              <motion.button
                className="w-full h-[58px] rounded-[29px] bg-transparent border text-[#0D1A0F] font-[400] text-[16px] flex items-center justify-center gap-3"
                style={{ borderColor: '#C8A96A' }}
                whileHover={{ backgroundColor: '#FAF0E4', filter: 'brightness(1.02)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <img src={callIcon} alt="" className="w-[18px] h-[18px] opacity-60" />
                <span>Parler à notre équipe</span>
              </motion.button>
            </a>
          </div>
        </FadeIn>

        {/* Partenaires */}
        <FadeIn delay={0.30} className="flex flex-col items-center w-full">
          <p
            className="text-[11px] text-[#0D1A0F]/40 mb-5 uppercase tracking-[0.14em]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', letterSpacing: '0.12em' }}
          >
            Nos partenaires
          </p>
          <div className="flex items-center justify-center gap-7 w-full flex-wrap opacity-50">
            <img src={otlLogo} alt="OTL" className="h-[24px] object-contain" />
            <img src={programactorLogo} alt="Programactor" className="h-[24px] object-contain" />
            <img src={absLogo} alt="ABS" className="h-[24px] object-contain" />
            <img src={bongoLogo} alt="Bongo" className="h-[24px] object-contain" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
