import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import bondengeImg from '../../assets/bondenge.png';
import logotype from '../../assets/logotype.png';
import FadeIn from './FadeIn';

export default function ContactCtaSection() {
  return (
    <section
      className="relative w-full py-24 px-5 flex flex-col items-center"
      style={{ backgroundColor: '#FAF8F4' }}
    >
      {/* ✅ H2 en Playfair Display — luxe */}
      <FadeIn>
        <h2
          className="text-[44px] leading-[1.05] text-center mb-4 text-[#0D1A0F]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          Une résidence d'exception<br />
          <em style={{ fontWeight: 400, fontStyle: 'italic' }}>mérite d'être perçue comme telle.</em>
        </h2>
      </FadeIn>

      <FadeIn delay={0.08}>
        <p className="text-[16px] text-[#0D1A0F]/60 leading-[1.6] text-center max-w-[320px] mb-14">
          Notre approche commence par un échange confidentiel de 20 minutes pour comprendre votre résidence, vos objectifs et votre positionnement.
        </p>
      </FadeIn>

      {/* Card — dark forest green (luxe) */}
      <FadeIn delay={0.14} className="w-full max-w-[390px]">
        <div
          className="w-full rounded-[32px] px-6 pt-7 pb-7 relative overflow-hidden flex flex-col"
          style={{ backgroundColor: '#1A3A1F' }}
        >
          {/* Watermark logo */}
          <div className="absolute top-[-30px] right-[-20px] w-[200px] h-[200px] opacity-[0.06]">
            <img src={logotype} alt="" className="w-full h-full object-contain" style={{ filter: 'invert(1)' }} />
          </div>

          {/* Gold filet top */}
          <div className="w-12 h-[1px] mb-6 relative z-10" style={{ backgroundColor: '#C8A96A' }} />

          {/* Vania logo */}
          <img
            src={logotype}
            alt="Vania"
            className="w-[48px] h-[48px] mb-6 relative z-10 object-contain"
            style={{ filter: 'invert(1) brightness(0.85)' }}
          />

          {/* Copy */}
          <p
            className="relative z-10 mb-3 leading-[1.2]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: '26px',
              color: '#F5EFE6',
            }}
          >
            Arrêtez de subir<br />les intermédiaires.
          </p>

          <p className="text-[15px] font-[400] leading-[1.6] mb-8 relative z-10" style={{ color: '#F5EFE6CC' }}>
            Vania positionne votre résidence comme une marque forte, 
            autonome et désirable — sans dépendre des OTAs.
          </p>

          {/* Founder portrait */}
          <div className="relative mb-7 z-10 w-full h-[340px] rounded-[24px] overflow-hidden">
            <img
              src={bondengeImg}
              alt="Bondenge Imbotshi"
              className="absolute inset-0 w-full h-full object-cover grayscale object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center text-center px-4">
              <h3
                className="text-white text-[26px] font-bold mb-1"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                Bondenge Imbotshi
              </h3>
              <p className="text-[13px] font-[400] tracking-wider" style={{ color: '#C8A96A' }}>
                Fondateur — Vania
              </p>
            </div>
          </div>

          {/* CTA Button — champagne gold */}
          <Link to="/consultation" className="w-full">
            <motion.button
              className="w-full h-[60px] rounded-[30px] font-[500] text-[17px] tracking-wide relative z-10"
              style={{ backgroundColor: '#C8A96A', color: '#0D1A0F' }}
              whileHover={{ filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              Demander un entretien de découverte
            </motion.button>
          </Link>

          {/* WhatsApp secondary */}
          <p className="text-center text-[13px] mt-5 relative z-10" style={{ color: '#F5EFE680' }}>
            ou écrivez-nous directement
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
