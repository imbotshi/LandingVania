import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { Link } from 'react-router';

import textureBg from '../../assets/128a66ed6ba78ad77c11fa74d3f2f4e3865b4906.png';
import { City01Icon, LocationUser03Icon, Call02Icon } from 'hugeicons-react';
import absLogo from '../../assets/abs.svg';
import programactorLogo from '../../assets/programactor.svg';
import bongoLogo from '../../assets/bongo.svg';
import otlLogo from '../../assets/otl.svg';

import img1 from '../../assets/623ab9db7687380edfa1eabf012c007d2a20d1b3.png';
import img2 from '../../assets/rentalimo.png';
import img3 from '../../assets/vaniaimo.png';

/**
 * HeroSection — Refonte B2B v2
 * Angle : agence marketing immobilier, priorité OTAs
 * Segments : OTAs > Agences > Agents
 * Desktop: texte à gauche, visuel à droite
 */

const STATS = [
  { icon: City01Icon, label: '+37% de visibilité moyenne en 60 jours' },
  { icon: LocationUser03Icon, label: 'OTAs, agences & agents accompagnés' },
];

const SHOWCASE = [img1, img2, img3];

function ShowcaseStrip({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 w-full overflow-hidden justify-center ${className ?? ''}`}>
      {SHOWCASE.map((src, i) => (
        <motion.div
          key={i}
          className="rounded-[20px] overflow-hidden shadow-md shrink-0"
          style={{
            width: i === 1 ? 120 : 96,
            height: i === 1 ? 150 : 120,
            marginTop: i === 1 ? 0 : 16,
            opacity: i === 1 ? 1 : 0.65,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: i === 1 ? 1 : 0.65, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={src}
            alt={`Campagne Vania Studio Marketing — référence ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

/** Desktop showcase: 3 images stacked vertically with parallax sizes */
function ShowcaseDesktop() {
  const sizes = [
    { w: 260, h: 320, mt: 0, opacity: 0.7 },
    { w: 310, h: 400, mt: -40, opacity: 1 },
    { w: 260, h: 320, mt: 0, opacity: 0.7 },
  ];
  return (
    <div className="hidden lg:flex items-end gap-4 justify-center shrink-0">
      {SHOWCASE.map((src, i) => (
        <motion.div
          key={i}
          className="rounded-[24px] overflow-hidden shadow-xl"
          style={{ width: sizes[i].w, height: sizes[i].h, marginTop: sizes[i].mt, opacity: sizes[i].opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: sizes[i].opacity, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03, opacity: 1 }}
        >
          <img
            src={src}
            alt={`Portfolio Vania — ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full pt-[90px] pb-20 px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row lg:items-center lg:gap-16 overflow-hidden"
      style={{ backgroundColor: '#FAF8F4', minHeight: '100svh' }}
    >
      {/* Marble texture overlay */}
      <div className="absolute inset-0 z-0">
        <img src={textureBg} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-[0.28]" />
      </div>

      {/* Left column — text content */}
      <div className="relative z-10 w-full flex flex-col items-center lg:items-start lg:max-w-[600px]">

        {/* Mobile showcase strip */}
        <div className="lg:hidden w-full mb-10">
          <ShowcaseStrip />
        </div>

        {/* Eyebrow label */}
        <FadeIn delay={0.0}>
          <div className="flex items-center gap-2 mb-5">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-[600] uppercase tracking-[0.14em]"
              style={{ backgroundColor: 'rgba(200,169,106,0.15)', color: '#C8A96A', border: '1px solid rgba(200,169,106,0.4)' }}
            >
              Agence Marketing Immobilier
            </span>
          </div>
        </FadeIn>

        {/* H1 */}
        <FadeIn delay={0.1}>
          <h1
            className="text-[50px] lg:text-[64px] xl:text-[72px] leading-[1.02] text-center lg:text-left tracking-[-0.01em] mb-5 text-[#0D1A0F]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
          >
            Votre société immobilière<br />
            mérite d'être <em style={{ fontStyle: 'italic', fontWeight: 400 }}>vue,</em><br />
            choisie, désirée.
          </h1>
        </FadeIn>

        {/* Sub-title */}
        <FadeIn delay={0.18}>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#0D1A0F]/60 font-[400] text-center lg:text-left mb-10 max-w-[340px] lg:max-w-[500px]">
            Nous aidons les plateformes OTAs, les agences et les agents indépendants à gagner en visibilité et en crédibilité sur le numérique — grâce à des stratégies marketing sur mesure.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.24}>
          <div className="flex flex-col items-start gap-3 mb-12 w-full max-w-[360px]">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-[15px] h-[15px] opacity-40 shrink-0" color="#0D1A0F" />
                <span className="text-[14px] font-[500] text-[#0D1A0F]/70 tracking-wide">{s.label}</span>
              </div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.30} className="w-full max-w-[360px] lg:max-w-none mb-16">
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
            {/* Primary CTA */}
            <Link to="/consultation" className="lg:w-auto">
              <motion.button
                className="w-full lg:w-auto h-[58px] px-8 rounded-[29px] text-white font-[500] text-[17px] tracking-wide"
                style={{ backgroundColor: '#1A3A1F' }}
                whileHover={{
                  filter: 'brightness(1.15)',
                  boxShadow: '0 0 24px rgba(200,169,106,0.35)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                Obtenir un diagnostic gratuit
              </motion.button>
            </Link>
            {/* Secondary CTA */}
            <a href="tel:+237690536012" className="lg:w-auto">
              <motion.button
                className="w-full lg:w-auto h-[58px] px-8 rounded-[29px] bg-transparent border text-[#0D1A0F] font-[400] text-[16px] flex items-center justify-center gap-3"
                style={{ borderColor: '#C8A96A' }}
                whileHover={{ backgroundColor: '#FAF0E4' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <Call02Icon className="w-[18px] h-[18px] opacity-60" color="#0D1A0F" />
                <span>Parler à notre équipe</span>
              </motion.button>
            </a>
          </div>
        </FadeIn>

        {/* Partners strip */}
        <FadeIn delay={0.38} className="flex flex-col items-center lg:items-start w-full">
          <p
            className="text-[#0D1A0F]/40 mb-5 uppercase tracking-[0.13em]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '12px' }}
          >
            Ils nous font confiance
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-7 w-full flex-wrap opacity-50">
            <img src={otlLogo}          alt="OTL"          className="h-[24px] object-contain" />
            <img src={programactorLogo} alt="Programactor" className="h-[24px] object-contain" />
            <img src={absLogo}          alt="ABS"          className="h-[24px] object-contain" />
            <img src={bongoLogo}        alt="Bongo"        className="h-[24px] object-contain" />
          </div>
        </FadeIn>
      </div>

      {/* Right column — desktop showcase */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <ShowcaseDesktop />
      </div>

    </section>
  );
}
