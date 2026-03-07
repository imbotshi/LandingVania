import React from 'react';
import FadeIn from './FadeIn';

// Using Vite's URL-based import for filenames with special characters (spaces, accents)
const studioImg   = new URL('../../assets/Studio de marketing immobilier.png',      import.meta.url).href;
const strategyImg = new URL('../../assets/bondenge1.png', import.meta.url).href;
const digitalImg  = new URL('../../assets/Kit de présence digitale.png',            import.meta.url).href;

const services = [
  {
    title: 'Studio de marketing immobilier',
    desc: 'Chez Vania, nous sommes forts en visibilité : audit de votre marque, création de site internet, gestion de vos pages réseaux sociaux, production de photos et vidéos pro.',
    image: studioImg,
  },
  {
    title: 'Stratégie de collaboration gagnant-gagnant',
    desc: 'Intégrez-nous à votre catalogue, partagez-nous les adresses de quelques biens, et on crée du contenu pro (photos, vidéos, reels) pour attirer plus de locataires.',
    image: strategyImg,
  },
  {
    title: 'Kit de présence digitale',
    desc: 'Pack de messages, recommandations visuelles et lignes directrices pour vos annonces, vos campagnes et vos canaux directs (site, réseaux sociaux, email), pour augmenter la part de réservations directes et la valeur vie client.',
    image: digitalImg,
  },
];

export default function Solution2Section() {
  return (
    <section className="relative w-full py-20 px-5 flex flex-col items-start" style={{ backgroundColor: '#FAF8F4' }}>

      <FadeIn className="w-full">
        <h2
          className="leading-[1.05] text-[#0D1A0F] mb-12 text-center"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '40px' }}
        >
          De l'audit au plan<br />d'action.
        </h2>
      </FadeIn>

      <div className="w-full flex flex-col gap-14">
        {services.map((srv, idx) => (
          <FadeIn key={idx} delay={idx * 0.12}>
            <div className="flex flex-col gap-4">
            {/* Real photo from project assets */}
            <div className="w-full rounded-[20px] overflow-hidden">
              <img
                src={srv.image}
                alt={srv.title}
                className="w-full object-cover"
                style={{ maxHeight: '260px', objectPosition: 'center' }}
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-[20px] font-[700] text-[#141414] leading-[1.3] tracking-tight mb-2">
                {srv.title}
              </h3>
              <p className="text-[16px] leading-[1.55] text-[#555]">{srv.desc}</p>
            </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
