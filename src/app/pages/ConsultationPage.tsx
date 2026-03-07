import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router';
import logotype from '../../assets/logotype.png';
import vaniaLogo from '../../assets/vania-logo.svg';
import bondengeImg from '../../assets/bondenge.png';
import marbleTexture from '../../assets/128a66ed6ba78ad77c11fa74d3f2f4e3865b4906.png';

/* ─── Types ───────────────────────────────────────────────── */
interface FormData {
  prenom: string;
  ville: string;
  typeBien: string;
  objectif: string;
  disponibilite: string;
}

/* ─── Styles injectés ─────────────────────────────────────── */
const GLOBAL_CSS = `
  /* ① Grain paper noise overlay */
  .consult-bg::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.035;
    mix-blend-mode: overlay;
  }

  /* ⑤ Shimmer on continue button */
  .btn-shimmer {
    position: relative;
    overflow: hidden;
  }
  .btn-shimmer::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -100%;
    width: 60%;
    height: 200%;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(255,255,255,0.18) 50%,
      transparent 70%
    );
    transform: skewX(-15deg);
    transition: none;
  }
  .btn-shimmer:hover::after {
    left: 200%;
    transition: left 0.6s ease;
  }
`;

/* ─── Progress dots ───────────────────────────────────────── */
function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-0 mb-6">
      {Array.from({ length: total }).map((_, i) => {
        const done   = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            {/* Dot */}
            <motion.div
              className="flex items-center justify-center rounded-full text-[11px] font-[600] select-none"
              style={{ width: 28, height: 28, flexShrink: 0 }}
              animate={{
                backgroundColor: active ? '#C8A96A' : done ? 'transparent' : 'transparent',
                borderColor: active ? '#C8A96A' : done ? '#C8A96A' : 'rgba(200,169,106,0.22)',
                borderWidth: 1.5,
                borderStyle: 'solid',
                color: active ? '#0D1A0F' : done ? '#C8A96A' : 'rgba(200,169,106,0.35)',
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {done ? '✓' : i + 1}
            </motion.div>

            {/* Connector line (not after last) */}
            {i < total - 1 && (
              <motion.div
                className="h-[1px] flex-1"
                animate={{ backgroundColor: done ? '#C8A96A' : 'rgba(200,169,106,0.2)' }}
                transition={{ duration: 0.4 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── Line input ──────────────────────────────────────────── */
function LineInput({ value, onChange, placeholder, autoFocus }: {
  value: string; onChange: (v: string) => void;
  placeholder?: string; autoFocus?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative w-full" style={{ filter: focused ? 'drop-shadow(0 4px 16px rgba(200,169,106,0.13))' : 'none', transition: 'filter 0.3s' }}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder ?? ''}
        autoFocus={autoFocus}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none pb-3 text-[22px] text-[#0D1A0F] placeholder-[#0D1A0F]/25"
        style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ backgroundColor: 'rgba(13,26,15,0.12)' }} />
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] origin-left"
        style={{ backgroundColor: '#C8A96A', right: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/* ─── Pill group ──────────────────────────────────────────── */
function PillGroup({ options, value, onChange }: {
  options: { value: string; label: string }[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {options.map(opt => (
        <motion.button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className="w-full py-[14px] px-5 rounded-[14px] text-left text-[16px] font-[400] border"
          style={{
            backgroundColor: value === opt.value ? '#C8A96A' : 'rgba(200,169,106,0.06)',
            borderColor:     value === opt.value ? '#C8A96A' : 'rgba(200,169,106,0.22)',
            color:           '#0D1A0F',
            fontFamily: "'Figtree', sans-serif",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {opt.label}
        </motion.button>
      ))}
    </div>
  );
}

/* ─── Steps ───────────────────────────────────────────────── */
function Step1({ d, u }: { d: FormData; u: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="text-[30px] leading-[1.2] text-[#0D1A0F] mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontStyle: 'italic' }}>
        Quel est votre prénom ?
      </h2>
      <LineInput value={d.prenom} onChange={v => u('prenom', v)} placeholder="Votre prénom" autoFocus />
    </div>
  );
}
function Step2({ d, u }: { d: FormData; u: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <h2 className="text-[30px] leading-[1.2] text-[#0D1A0F] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontStyle: 'italic' }}>
          Où se situe votre résidence ?
        </h2>
        <p className="text-[14px] text-[#0D1A0F]/40 mb-6">Ville ou quartier</p>
        <LineInput value={d.ville} onChange={v => u('ville', v)} placeholder="Douala, Kinshasa…" autoFocus />
      </div>
      <div>
        <p className="text-[13px] font-[500] text-[#0D1A0F]/50 mb-3 uppercase tracking-wide">Type de bien</p>
        <PillGroup
          options={[
            { value: 'chambre',     label: 'Chambre'     },
            { value: 'studio',      label: 'Studio'      },
            { value: 'appartement', label: 'Appartement' },
          ]}
          value={d.typeBien} onChange={v => u('typeBien', v)}
        />
      </div>
    </div>
  );
}
function Step3({ d, u }: { d: FormData; u: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="text-[30px] leading-[1.2] text-[#0D1A0F] mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontStyle: 'italic' }}>
        Quel est votre principal objectif ?
      </h2>
      <PillGroup
        options={[
          { value: 'revenus',    label: 'Augmenter mes revenus locatifs'   },
          { value: 'otas',       label: 'Réduire ma dépendance aux OTAs'   },
          { value: 'identite',   label: 'Créer une identité de marque forte' },
          { value: 'visibilite', label: 'Améliorer ma visibilité en ligne'  },
        ]}
        value={d.objectif} onChange={v => u('objectif', v)}
      />
    </div>
  );
}
function Step4({ d, u }: { d: FormData; u: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="text-[30px] leading-[1.2] text-[#0D1A0F] mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontStyle: 'italic' }}>
        Quel moment vous conviendrait ?
      </h2>
      <PillGroup
        options={[
          { value: 'semaine',   label: 'Cette semaine'               },
          { value: 'prochaine', label: 'La semaine prochaine'        },
          { value: 'whatsapp',  label: 'Me contacter sur WhatsApp'   },
        ]}
        value={d.disponibilite} onChange={v => u('disponibilite', v)}
      />
    </div>
  );
}

/* ─── Success ─────────────────────────────────────────────── */
function Success({ prenom }: { prenom: string }) {
  return (
    <motion.div className="flex flex-col items-center text-center py-6"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      <motion.img
        src={vaniaLogo}
        alt="Vania"
        className="w-14 h-14 mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <h2 className="text-[30px] leading-[1.2] text-[#0D1A0F] mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontStyle: 'italic' }}>
        Merci, {prenom || 'cher propriétaire'}.
      </h2>
      <p className="text-[15px] leading-[1.7] text-[#0D1A0F]/55 mb-10 max-w-[280px]">
        Votre résidence mérite une attention singulière.<br />
        L'équipe Vania vous contactera très prochainement.
      </p>
      <div className="flex items-center gap-3 mb-8">
        <img src={bondengeImg} alt="Bondenge" className="w-12 h-12 rounded-full object-cover object-top" style={{ filter: 'grayscale(20%)' }} />
        <div className="text-left">
          <p className="text-[14px] font-[600] text-[#0D1A0F]">Bondenge Imbotshi</p>
          <p className="text-[12px]" style={{ color: '#C8A96A' }}>Fondateur — Vania</p>
        </div>
      </div>
      <a href="https://wa.me/243899428027" target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full max-w-[340px] h-[54px] rounded-[27px] text-white font-[500] text-[15px]"
        style={{ backgroundColor: '#25D366' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Écrire sur WhatsApp
      </a>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const TOTAL = 4;

export default function ConsultationPage() {
  const navigate = useNavigate();
  const [step, setStep]         = useState(0);
  const [dir, setDir]           = useState<'f' | 'b'>('f');
  const [data, setData]         = useState<FormData>({
    prenom: '', ville: '', typeBien: '', objectif: '', disponibilite: '',
  });

  const update = (k: keyof FormData, v: string) => setData(p => ({ ...p, [k]: v }));

  const ok = () => {
    if (step === 0) return data.prenom.trim().length > 0;
    if (step === 1) return data.ville.trim().length > 0;
    if (step === 2) return data.objectif !== '';
    if (step === 3) return data.disponibilite !== '';
    return false;
  };

  const next = () => { if (!ok()) return; setDir('f'); step < TOTAL - 1 ? setStep(s => s + 1) : setStep(4); };
  const back = () => { setDir('b'); setStep(s => Math.max(0, s - 1)); };

  const slides   = [<Step1 d={data} u={update} />, <Step2 d={data} u={update} />, <Step3 d={data} u={update} />, <Step4 d={data} u={update} />];

  const slideIn  = dir === 'f' ? { x: 32, opacity: 0 } : { x: -32, opacity: 0 };
  const slideOut = dir === 'f' ? { x: -32, opacity: 0 } : { x: 32, opacity: 0 };

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {/* ① Fond forêt + grain noise */}
      <div className="consult-bg min-h-dvh flex flex-col relative" style={{ backgroundColor: '#0D1A0F' }}>

        {/* Header */}
        <header className="flex items-center justify-between px-5 pt-5 pb-3 relative z-10">
          <button onClick={() => navigate('/')}>
            <img src={logotype} alt="Vania" className="h-[26px] object-contain"
              style={{ filter: 'invert(1) sepia(1) saturate(0.3) brightness(0.9)' }} />
          </button>
          <button onClick={() => navigate('/')} aria-label="Fermer"
            className="w-10 h-10 flex items-center justify-center"
            style={{ color: 'rgba(250,248,244,0.5)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </header>

        {/* ④ Entrance animation — card rises on mount */}
        <motion.div
          className="flex-1 flex flex-col px-4 pb-10 pt-3 relative z-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-[440px] mx-auto flex flex-col flex-1">

            {/* ③ Card — marbre texture + glassmorphism warm */}
            <div
              className="relative rounded-[28px] px-7 pt-7 pb-8 flex flex-col overflow-hidden"
              style={{
                background: `linear-gradient(160deg, rgba(250,248,244,0.96) 0%, rgba(245,239,230,0.95) 100%)`,
                backgroundImage: `url(${marbleTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 24px 64px rgba(13,26,15,0.45), inset 0 1px 0 rgba(200,169,106,0.18)',
                border: '1px solid rgba(200,169,106,0.1)',
              }}
            >
              {/* Marble overlay tint so text stays readable */}
              <div className="absolute inset-0 rounded-[28px]" style={{ backgroundColor: 'rgba(250,248,244,0.84)' }} />

              {/* ⑥ Ornament ✦ */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={step}
                  className="absolute top-6 right-7 select-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#C8A96A', opacity: 0.22, fontSize: 22 }}
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 0.22 }}
                  exit={{ rotate: 10, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >✦</motion.span>
              </AnimatePresence>

              <div className="relative z-10 flex flex-col flex-1">
                {step < 4 && (
                  <>
                    {/* ② Step dots */}
                    <StepDots current={step} total={TOTAL} />

                    {/* Form step */}
                    <div className="flex-1 mb-8 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={step}
                          initial={slideIn}
                          animate={{ x: 0, opacity: 1 }}
                          exit={slideOut}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {slides[step]}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      {/* ⑤ Shimmer button */}
                      <button
                        onClick={next}
                        disabled={!ok()}
                        className="btn-shimmer w-full h-[56px] rounded-[28px] font-[500] text-[16px] tracking-wide transition-all duration-300"
                        style={{
                          backgroundColor: ok() ? '#1A3A1F' : 'rgba(13,26,15,0.08)',
                          color: ok() ? '#FAF8F4' : 'rgba(13,26,15,0.3)',
                          cursor: ok() ? 'pointer' : 'not-allowed',
                        }}
                      >
                        {step < TOTAL - 1 ? 'Continuer →' : 'Confirmer ma demande'}
                      </button>
                      {step > 0 && (
                        <button onClick={back} className="text-center text-[13px] py-2"
                          style={{ color: 'rgba(13,26,15,0.38)' }}>← Retour</button>
                      )}
                    </div>
                  </>
                )}

                {step === 4 && <Success prenom={data.prenom} />}
              </div>
            </div>

            {/* Confidentiality note */}
            {step < 4 && (
              <p className="text-center text-[11px] mt-4 tracking-wide"
                style={{ color: 'rgba(250,248,244,0.28)' }}>
                ·&nbsp; Échange confidentiel &nbsp;·&nbsp; Aucun engagement &nbsp;·
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
