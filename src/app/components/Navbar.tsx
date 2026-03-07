import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logotype from '../../assets/logotype.png';

/**
 * Navbar — Phase 3 :
 * ✅ 1. Glassmorphism progressif au scroll (déjà implémenté)
 * ✅ 2. Scroll depth indicator — barre or champagne fine en haut
 * ✅ 3. Full-screen menu overlay avec stagger animation
 */

// Navigation links
const NAV_LINKS = [
  { label: 'Nos résidences',    href: '#portfolio' },
  { label: 'Notre méthode',     href: '#processus' },
  { label: 'Services',          href: '#services'  },
  { label: 'Résultats',         href: '#trust'     },
  { label: 'Nous contacter',    href: '#contact'   },
];

// Stagger variants for menu links
const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -12,
    transition: {
      delay: i * 0.04,
      duration: 0.25,
      ease: 'easeIn' as const,
    },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Gold progress bar width: 0% → 100%
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Scroll depth indicator ──────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[2px] origin-left"
        style={{ width: progressWidth, backgroundColor: '#C8A96A' }}
      />

      {/* ── Navbar pill ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pb-1">
        <motion.div
          className="w-full h-[56px] rounded-[28px] flex items-center justify-between px-5 border border-white/50"
          animate={{
            backgroundColor: scrolled || menuOpen
              ? 'rgba(250,248,244,0.95)'
              : 'rgba(250,248,244,0.55)',
            boxShadow: scrolled || menuOpen
              ? '0 2px 24px rgba(13,26,15,0.10)'
              : '0 0px 0px rgba(0,0,0,0)',
            backdropFilter: 'blur(24px)',
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <div className="flex items-center h-full">
            <img src={logotype} alt="Vania" className="h-[28px] object-contain" />
          </div>

          {/* Hamburger / Close button */}
          <button
            className="flex flex-col items-center justify-center w-[48px] h-[48px] rounded-full gap-[6px] transition-transform active:scale-95"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            <motion.span
              className="block h-[1.5px] w-[22px] rounded-full origin-center"
              style={{ backgroundColor: '#0D1A0F' }}
              animate={menuOpen
                ? { rotate: 45, y: 5 }
                : { rotate: 0,  y: 0 }
              }
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="block h-[1.5px] rounded-full origin-center"
              style={{ backgroundColor: '#0D1A0F', width: 14 }}
              initial={{ width: 14, rotate: 0, y: 0 }}
              animate={menuOpen
                ? { width: 22, rotate: -45, y: -5 }
                : { width: 14, rotate: 0,   y: 0 }
              }
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </motion.div>
      </header>

      {/* ── Full-screen menu overlay ─────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: '#FAF8F4' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold filet top */}
            <div className="w-10 h-[1px] mb-10" style={{ backgroundColor: '#C8A96A' }} />

            {/* Staggered nav links */}
            <nav className="flex flex-col gap-1 mb-14">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="py-4 border-b"
                  style={{ borderColor: 'rgba(13,26,15,0.08)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className="text-[36px] leading-none text-[#0D1A0F]"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* CTA inside menu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              <a
                href="https://wa.me/243899428027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 h-[56px] rounded-[28px] text-white font-[500] text-[16px]"
                style={{ backgroundColor: '#25D366' }}
                onClick={() => setMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp — Écrire directement
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center h-[56px] rounded-[28px] text-[16px] font-[400] border text-[#0D1A0F]"
                style={{ borderColor: '#C8A96A' }}
                onClick={() => setMenuOpen(false)}
              >
                Demander un entretien
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
