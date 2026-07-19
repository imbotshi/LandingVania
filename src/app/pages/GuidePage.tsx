import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import logotype from '../../assets/logotype.png';

/**
 * GuidePage — "Marketing Digital pour l'Immobilier Africain"
 * Guide complet publié par Vania Studio Marketing
 * Format éditorial premium, mobile-first
 */

const CHAPTERS = [
  {
    id: 'intro',
    number: '00',
    title: 'Pourquoi ce guide ?',
    emoji: '📖',
    readTime: '3 min',
  },
  {
    id: 'diagnostic',
    number: '01',
    title: 'Diagnostiquer votre présence actuelle',
    emoji: '🔍',
    readTime: '7 min',
  },
  {
    id: 'marque',
    number: '02',
    title: 'Construire une identité de marque forte',
    emoji: '🏷️',
    readTime: '8 min',
  },
  {
    id: 'contenu',
    number: '03',
    title: 'Le contenu qui convertit',
    emoji: '📸',
    readTime: '10 min',
  },
  {
    id: 'campagnes',
    number: '04',
    title: 'Campagnes publicitaires maîtrisées',
    emoji: '🎯',
    readTime: '9 min',
  },
  {
    id: 'direct',
    number: '05',
    title: 'Réduire la dépendance aux OTAs',
    emoji: '🚀',
    readTime: '8 min',
  },
  {
    id: 'kpis',
    number: '06',
    title: 'Mesurer ce qui compte vraiment',
    emoji: '📊',
    readTime: '6 min',
  },
];

const CONTENT: Record<string, React.ReactNode> = {
  intro: (
    <div className="guide-chapter">
      <p className="guide-lead">
        En 2025, l'immobilier africain vit une révolution silencieuse. Les plateformes OTAs explosent, les agences prolifèrent, les agents se multiplient. Et pourtant, 80% des acteurs du secteur restent invisibles en ligne.
      </p>
      <p>
        Ce guide a été conçu par l'équipe Vania à partir de deux ans d'accompagnement d'acteurs immobiliers au Cameroun. Il ne contient pas de théories abstraites — seulement ce qui a fonctionné sur le terrain, à Douala, à Yaoundé, dans un marché africain avec ses réalités propres.
      </p>
      <blockquote>
        "La visibilité ne s'achète pas. Elle se construit, méthodiquement, avec les bons outils et la bonne stratégie."
        <cite>— Bondenge Imbotshi, Fondateur Vania Studio Marketing</cite>
      </blockquote>
      <h3>À qui s'adresse ce guide ?</h3>
      <ul>
        <li><strong>Plateformes OTAs</strong> qui veulent augmenter leur trafic organique et réduire le coût d'acquisition</li>
        <li><strong>Agences immobilières</strong> qui cherchent à se différencier dans un marché saturé</li>
        <li><strong>Agents indépendants</strong> qui veulent bâtir leur réputation digitale</li>
        <li><strong>Investisseurs & propriétaires</strong> qui souhaitent mieux valoriser leurs biens</li>
      </ul>
      <div className="guide-tip">
        <strong>Comment utiliser ce guide ?</strong> Lisez les chapitres dans l'ordre lors d'une première lecture. Ensuite, revenez aux chapitres spécifiques à vos besoins. Chaque chapitre est autonome et actionnable.
      </div>
    </div>
  ),

  diagnostic: (
    <div className="guide-chapter">
      <p className="guide-lead">
        Avant de lancer la moindre campagne ou de produire du contenu, il faut savoir où vous en êtes. La plupart des acteurs immobiliers sautent cette étape — et paient le prix d'un marketing dispersé et inefficace.
      </p>
      <h3>Les 5 dimensions à auditer</h3>
      <div className="guide-cards">
        {[
          { num: '01', title: 'Visibilité organique', desc: 'Apparaissez-vous sur Google quand un locataire cherche un bien dans votre zone ? Testez : tapez "location appartement [votre ville]" et regardez si votre nom apparaît dans les 3 premières pages.' },
          { num: '02', title: 'Qualité des visuels', desc: 'Vos photos de biens sont-elles prises avec un smartphone bas de gamme, mal éclairées, non retouchées ? Dans l\'immobilier, le premier visuel décide en 3 secondes.' },
          { num: '03', title: 'Cohérence de marque', desc: 'Vos couleurs, votre logo, votre ton de voix sont-ils identiques sur Instagram, sur votre site, sur vos annonces Airbnb ou Booking ? L\'incohérence coûte de la crédibilité.' },
          { num: '04', title: 'Canaux de trafic', desc: 'D\'où viennent vos leads ? Si 90% viennent d\'une seule plateforme, vous êtes en situation de fragilité. Un changement d\'algorithme peut tout effacer.' },
          { num: '05', title: 'Taux de conversion', desc: 'Sur 100 personnes qui voient votre annonce, combien vous contactent ? Combien réservent ? Ce ratio révèle l\'efficacité réelle de votre marketing.' },
        ].map(card => (
          <div key={card.num} className="guide-card">
            <span className="guide-card-num">{card.num}</span>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <h3>L'Indice de Différenciation Vania (IDV)</h3>
      <p>
        Chez Vania, nous avons développé un outil simple pour mesurer la différenciation d'une plateforme ou d'un bien : l'IDV. Il se calcule sur 5 critères notés de 1 à 5 :
      </p>
      <table className="guide-table">
        <thead>
          <tr><th>Critère</th><th>Score /5</th><th>Ce que ça mesure</th></tr>
        </thead>
        <tbody>
          <tr><td>Qualité des visuels</td><td>_ /5</td><td>Photo pro, éclairage, mise en scène</td></tr>
          <tr><td>Unicité du positionnement</td><td>_ /5</td><td>Est-ce que votre offre est unique ou générique ?</td></tr>
          <tr><td>Présence multi-canaux</td><td>_ /5</td><td>Combien de canaux actifs et cohérents ?</td></tr>
          <tr><td>Preuve sociale</td><td>_ /5</td><td>Avis, témoignages, cas clients visibles</td></tr>
          <tr><td>Clarté de l'offre</td><td>_ /5</td><td>En 5 secondes, comprend-on ce que vous faites ?</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Score 18–25 :</strong> Vous êtes en bonne position. Optimisez.<br/>
        <strong>Score 10–17 :</strong> Des gaps significatifs. Priorisez les 2 critères les plus faibles.<br/>
        <strong>Score 0–9 :</strong> Votre marketing est à refondre. Contactez-nous.
      </p>
    </div>
  ),

  marque: (
    <div className="guide-chapter">
      <p className="guide-lead">
        Dans l'immobilier africain, la grande majorité des acteurs n'ont pas de marque — ils ont un nom. Ce n'est pas la même chose. Une marque crée de la confiance, de la mémorisation et de la fidélité. Un nom, c'est juste une étiquette.
      </p>
      <h3>Les 4 piliers d'une marque immobilière forte</h3>

      <h4>1. Le positionnement</h4>
      <p>
        Votre positionnement répond à la question : <em>"Pourquoi choisir vous plutôt que quelqu'un d'autre ?"</em> Il doit être spécifique, mémorable et vrai.
      </p>
      <div className="guide-example">
        <strong>❌ Mauvais :</strong> "Agence immobilière sérieuse avec des biens de qualité à Douala"<br/>
        <strong>✅ Bon :</strong> "La seule agence à Douala qui garantit une réponse en moins de 2h et des photos professionnelles sur chaque bien"
      </div>

      <h4>2. L'identité visuelle</h4>
      <p>
        Votre identité visuelle doit être cohérente sur TOUS vos points de contact : logo, couleurs, typographie, style de photo. Une règle simple : si vous enlevez votre logo d'une publication, est-ce qu'on reconnaît encore que c'est vous ?
      </p>
      <ul>
        <li>Choisissez <strong>2 couleurs maximum</strong> (1 couleur primaire + 1 accentuation)</li>
        <li>Utilisez <strong>1 seule police</strong> pour les titres et 1 pour le body</li>
        <li>Définissez un <strong>style de photo</strong> : lumière naturelle, ambiance, cadrage</li>
        <li>Créez des <strong>templates réseaux sociaux</strong> réutilisables</li>
      </ul>

      <h4>3. Le ton de voix</h4>
      <p>
        Comment parlez-vous à vos clients ? Formel ou décontracté ? Expert ou accessible ? Votre ton de voix doit être constant, que ce soit dans un email, un story Instagram ou une annonce.
      </p>
      <table className="guide-table">
        <thead><tr><th>Profil</th><th>Ton recommandé</th><th>Exemple</th></tr></thead>
        <tbody>
          <tr><td>OTA haut de gamme</td><td>Éditorial, aspirationnel</td><td>"Découvrez des espaces qui vous ressemblent"</td></tr>
          <tr><td>Agence généraliste</td><td>Professionnel, rassurant</td><td>"Votre projet immobilier, notre priorité"</td></tr>
          <tr><td>Agent indépendant</td><td>Personnel, expert local</td><td>"Je connais chaque quartier de Douala comme ma poche"</td></tr>
        </tbody>
      </table>

      <h4>4. La promesse de marque</h4>
      <p>
        Qu'est-ce que vous promettez à chaque client, à chaque fois, sans exception ? Cette promesse doit être simple, tenue et vérifiable.
      </p>
      <div className="guide-tip">
        <strong>Exercice pratique :</strong> Complétez cette phrase en 15 mots maximum : "Nous aidons [qui] à [faire quoi] grâce à [comment]." Si vous n'y arrivez pas en 15 mots, votre positionnement n'est pas encore clair.
      </div>
    </div>
  ),

  contenu: (
    <div className="guide-chapter">
      <p className="guide-lead">
        Le contenu est le carburant de votre marketing immobilier. Mais pas n'importe quel contenu — du contenu qui crée une envie, qui raconte une histoire, qui déclenche une action. Voici comment le produire avec méthode.
      </p>
      <h3>La règle des 3E du contenu immobilier</h3>
      <div className="guide-cards">
        {[
          { title: 'Émotionnel', emoji: '❤️', desc: 'Montrez le style de vie, pas seulement les murs. "Imaginez votre dimanche matin ici" vend mieux que "Appartement F3, 80m²".' },
          { title: 'Éducatif', emoji: '🎓', desc: 'Expliquez, guidez, conseillez. Les contenus qui enseignent quelque chose génèrent 3× plus d\'engagement que les simples annonces.' },
          { title: 'Exclusif', emoji: '✨', desc: 'Donnez l\'impression d\'un accès privilégié. Les visites en avant-première, les coulisses de préparation, les secrets du quartier.' },
        ].map(c => (
          <div key={c.title} className="guide-card guide-card-light">
            <span style={{ fontSize: 36 }}>{c.emoji}</span>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <h3>Les formats qui performent en Afrique en 2025</h3>
      <table className="guide-table">
        <thead><tr><th>Format</th><th>Plateforme</th><th>Taux d'engagement moyen</th><th>Idéal pour</th></tr></thead>
        <tbody>
          <tr><td>Reels 15–30s</td><td>Instagram, TikTok</td><td>8–12%</td><td>Découverte / Visibilité</td></tr>
          <tr><td>Before/After</td><td>Instagram</td><td>6–9%</td><td>Preuves de transformation</td></tr>
          <tr><td>Visite guidée vidéo</td><td>YouTube, TikTok</td><td>4–7%</td><td>Décision d'achat</td></tr>
          <tr><td>Carrousel éducatif</td><td>Instagram, LinkedIn</td><td>5–8%</td><td>Autorité & confiance</td></tr>
          <tr><td>Photo éditoriale</td><td>Instagram</td><td>3–5%</td><td>Branding premium</td></tr>
        </tbody>
      </table>

      <h3>Le planning éditorial minimum viable</h3>
      <p>
        Pour maintenir une présence digitale cohérente sans s'épuiser, voici le rythme minimum recommandé pour un agent ou une agence en démarrage :
      </p>
      <ul>
        <li><strong>3× par semaine sur Instagram :</strong> 1 reel (bien/visite) + 1 carrousel (conseil) + 1 story (coulisses)</li>
        <li><strong>2× par semaine sur TikTok :</strong> vidéos courtes de visites ou tips pratiques</li>
        <li><strong>1× par semaine sur LinkedIn :</strong> article ou post d'expertise (pour les B2B)</li>
        <li><strong>1× par mois :</strong> email ou WhatsApp à votre base de contacts</li>
      </ul>
      <div className="guide-tip">
        <strong>L'erreur la plus commune :</strong> publier de manière irrégulière. Il vaut mieux 2 publications hebdomadaires constants que 10 publications en rafale suivies de 3 semaines de silence.
      </div>
    </div>
  ),

  campagnes: (
    <div className="guide-chapter">
      <p className="guide-lead">
        La publicité payante peut être le meilleur investissement ou le pire gouffre, selon la méthode. En immobilier africain, nous avons testé des centaines de campagnes. Voici ce qui fonctionne vraiment.
      </p>
      <h3>Choisir la bonne plateforme selon votre objectif</h3>
      <table className="guide-table">
        <thead><tr><th>Plateforme</th><th>Budget min. mensuel</th><th>Meilleur pour</th><th>À éviter si</th></tr></thead>
        <tbody>
          <tr><td>Facebook Ads</td><td>50 000 XAF</td><td>Leads locaux, 35-55 ans</td><td>Budget &lt; 30 000 XAF</td></tr>
          <tr><td>Instagram Ads</td><td>40 000 XAF</td><td>Branding visuel, 25-40 ans</td><td>Pas de visuels pro</td></tr>
          <tr><td>Google Search</td><td>80 000 XAF</td><td>Intent fort (gens qui cherchent)</td><td>Pas de landing page</td></tr>
          <tr><td>TikTok Ads</td><td>60 000 XAF</td><td>Notoriété, 18-35 ans</td><td>Contenu non natif</td></tr>
          <tr><td>WhatsApp Broadcast</td><td>0 XAF</td><td>Réactivation base existante</td><td>Base froide</td></tr>
        </tbody>
      </table>

      <h3>La structure d'une campagne efficace</h3>
      <div className="guide-cards">
        {[
          { num: '01', title: 'L\'offre irrésistible', desc: 'Votre publicité doit promettre quelque chose de précis et de désirable. Pas "appartement disponible" — mais "Visite virtuelle gratuite + réservation en 24h garantie".' },
          { num: '02', title: 'Le ciblage précis', desc: 'Sur Facebook/Instagram, ciblez par zone géographique (rayon 15km), tranche d\'âge (30-55 ans), intérêts (immobilier, investissement). Excluez ceux qui vous suivent déjà.' },
          { num: '03', title: 'Le visuel qui stoppe le scroll', desc: 'Vous avez 1,7 secondes pour capturer l\'attention. Utilisez : une photo épurée avec une seule pièce mise en valeur, ou une vidéo courte avec mouvement dans les 2 premières secondes.' },
          { num: '04', title: 'La landing page dédiée', desc: 'Ne renvoyez jamais vers votre page d\'accueil. Créez une page dédiée à chaque campagne avec : l\'offre, les photos, un formulaire simple (nom + téléphone suffit).' },
          { num: '05', title: 'Le suivi et l\'optimisation', desc: 'Analysez chaque semaine : coût par lead, taux de clic, taux de conversion. Coupez les publicités dont le coût par lead dépasse 2× votre benchmark, et doublez le budget sur les meilleures.' },
        ].map(c => (
          <div key={c.num} className="guide-card">
            <span className="guide-card-num">{c.num}</span>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <h3>Budget type pour un agent indépendant débutant</h3>
      <table className="guide-table">
        <thead><tr><th>Poste</th><th>Budget mensuel recommandé</th></tr></thead>
        <tbody>
          <tr><td>Facebook/Instagram Ads</td><td>60 000 – 100 000 XAF</td></tr>
          <tr><td>Production contenu (1 shooting photo)</td><td>30 000 – 50 000 XAF</td></tr>
          <tr><td>Outil de gestion (si nécessaire)</td><td>15 000 – 25 000 XAF</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>105 000 – 175 000 XAF/mois</strong></td></tr>
        </tbody>
      </table>
    </div>
  ),

  direct: (
    <div className="guide-chapter">
      <p className="guide-lead">
        Dépendre à 100% des OTAs (Airbnb, Booking, etc.), c'est comme construire sa maison sur un terrain qui ne vous appartient pas. Un changement de commission, un bug d'algorithme, et votre activité s'effondre du jour au lendemain.
      </p>
      <h3>Pourquoi la dépendance aux OTAs est dangereuse</h3>
      <ul>
        <li>Les commissions OTA représentent en moyenne <strong>15–25% de vos revenus</strong></li>
        <li>Vous n'avez pas accès aux données de vos locataires (emails, numéros)</li>
        <li>Votre classement peut chuter du jour au lendemain sans explication</li>
        <li>Vos prix sont visibles par tous vos concurrents en temps réel</li>
        <li>Vous construisez la réputation de la plateforme, pas la vôtre</li>
      </ul>

      <h3>Les 5 étapes pour construire votre canal direct</h3>
      <div className="guide-cards">
        {[
          { num: '01', title: 'Collectez les contacts', desc: 'À chaque location via OTA, obtenez l\'email et le numéro WhatsApp du locataire (légalement, avec consentement). Créez une liste de contacts propriétaires de vos données.' },
          { num: '02', title: 'Créez votre site de réservation', desc: 'Un site simple avec : vos biens, un calendrier de disponibilité et un système de paiement (Mobile Money). Le coût : 150 000 – 300 000 XAF une seule fois.' },
          { num: '03', title: 'Offrez un avantage pour les réservations directes', desc: 'Proposez 5–10% de réduction ou un service exclusif (transfert aéroport, accueil personnalisé) pour inciter à réserver directement plutôt que via Airbnb.' },
          { num: '04', title: 'Cultivez votre communauté', desc: 'Créez un groupe WhatsApp ou une newsletter pour vos anciens locataires. Partagez vos nouveaux biens, vos offres spéciales, les actualités de votre quartier.' },
          { num: '05', title: 'Développez votre SEO local', desc: 'Créez une fiche Google My Business complète. Publiez du contenu régulier sur votre site avec des mots-clés locaux. Collectez des avis Google après chaque location.' },
        ].map(c => (
          <div key={c.num} className="guide-card">
            <span className="guide-card-num">{c.num}</span>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <blockquote>
        "L'objectif n'est pas d'éliminer les OTAs — c'est de ne plus en dépendre. Quand 40% de vos réservations viennent en direct, vous êtes libre."
        <cite>— Vania Studio Marketing</cite>
      </blockquote>
    </div>
  ),

  kpis: (
    <div className="guide-chapter">
      <p className="guide-lead">
        "Ce qui ne se mesure pas ne s'améliore pas." Mais à l'inverse, mesurer 50 indicateurs sans savoir lesquels comptent vraiment est une perte de temps. Voici les KPIs qui comptent vraiment en marketing immobilier africain.
      </p>
      <h3>Les 6 KPIs fondamentaux</h3>
      <table className="guide-table">
        <thead><tr><th>KPI</th><th>Comment le mesurer</th><th>Objectif cible</th></tr></thead>
        <tbody>
          <tr><td>Coût par lead (CPL)</td><td>Budget pub ÷ nombre de contacts générés</td><td>&lt; 5 000 XAF</td></tr>
          <tr><td>Taux de conversion lead→client</td><td>Clients signés ÷ leads qualifiés × 100</td><td>&gt; 20%</td></tr>
          <tr><td>Taux de réservations directes</td><td>Réservations directes ÷ Total × 100</td><td>&gt; 30%</td></tr>
          <tr><td>Taux d'engagement (réseaux)</td><td>(Likes + commentaires + partages) ÷ Abonnés × 100</td><td>&gt; 4%</td></tr>
          <tr><td>Délai moyen de mise en location</td><td>Date de mise en ligne → Date de première réservation</td><td>&lt; 7 jours</td></tr>
          <tr><td>Taux de fidélisation</td><td>Locataires récurrents ÷ Total locataires × 100</td><td>&gt; 25%</td></tr>
        </tbody>
      </table>

      <h3>Le tableau de bord Vania (version simplifiée)</h3>
      <p>
        Chaque mois, consacrez 30 minutes à remplir ce tableau :
      </p>
      <div className="guide-cards">
        {[
          { title: 'Semaine 1', desc: 'Collectez les chiffres bruts : leads, réservations, revenus, dépenses pub.' },
          { title: 'Semaine 2', desc: 'Calculez vos KPIs. Identifiez les 2 plus mauvais et définissez une action corrective.' },
          { title: 'Semaine 3', desc: 'Implémentez les corrections. Testez une nouvelle approche (format de contenu, ciblage, offre).' },
          { title: 'Semaine 4', desc: 'Bilan. Comparez avec le mois précédent. Documentez ce qui a fonctionné.' },
        ].map((c, i) => (
          <div key={i} className="guide-card guide-card-light">
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="guide-tip">
        <strong>L'erreur fatale :</strong> optimiser ses KPIs sans avoir défini ses objectifs business au préalable. Un CPL bas est inutile si les leads ne convertissent jamais. Commencez toujours par "Quel résultat business je veux atteindre ?" puis remontez vers les KPIs.
      </div>

      <h3>Prochaine étape</h3>
      <p>
        Vous avez lu ce guide en entier — vous êtes déjà mieux équipé que 90% des acteurs immobiliers camerounais. Maintenant, l'action :
      </p>
      <ul>
        <li>Calculez votre IDV (Chapitre 01) cette semaine</li>
        <li>Identifiez votre positionnement en 15 mots (Chapitre 02)</li>
        <li>Planifiez votre premier mois de contenu (Chapitre 03)</li>
        <li>Lancez une première campagne test avec 30 000 XAF (Chapitre 04)</li>
      </ul>
      <p>
        Et si vous voulez être accompagné à chaque étape — <strong>Vania est là</strong>.
      </p>
    </div>
  ),
};

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]" style={{ backgroundColor: 'rgba(200,169,106,0.2)' }}>
      <div
        className="h-full transition-all duration-150"
        style={{ width: `${progress}%`, backgroundColor: '#C8A96A' }}
      />
    </div>
  );
}

export default function GuidePage() {
  const [activeChapter, setActiveChapter] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  const currentIndex = CHAPTERS.findIndex(c => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <div className="w-full min-h-dvh" style={{ backgroundColor: '#FAF8F4', fontFamily: "'Figtree', sans-serif" }}>
      <ScrollProgress />

      {/* Guide Styles */}
      <style>{`
        .guide-chapter { display: flex; flex-direction: column; gap: 20px; }
        .guide-lead { font-size: 19px; line-height: 1.65; font-weight: 500; color: #0D1A0F; }
        .guide-chapter p { font-size: 16px; line-height: 1.75; color: #333; }
        .guide-chapter h3 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0D1A0F; margin-top: 8px; }
        .guide-chapter h4 { font-size: 17px; font-weight: 700; color: #0D1A0F; }
        .guide-chapter ul { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
        .guide-chapter li { font-size: 15px; line-height: 1.65; color: #333; }
        .guide-chapter strong { color: #0D1A0F; }
        blockquote { border-left: 3px solid #C8A96A; padding: 16px 20px; background: rgba(200,169,106,0.08); border-radius: 0 12px 12px 0; font-style: italic; color: #0D1A0F; font-size: 17px; line-height: 1.6; }
        blockquote cite { display: block; margin-top: 10px; font-size: 13px; font-style: normal; color: #C8A96A; font-weight: 600; }
        .guide-tip { background: rgba(26,58,31,0.07); border-radius: 16px; padding: 16px 20px; font-size: 15px; line-height: 1.65; color: #333; }
        .guide-tip strong { color: #1A3A1F; }
        .guide-example { background: rgba(200,169,106,0.1); border-radius: 12px; padding: 14px 16px; font-size: 15px; line-height: 1.7; }
        .guide-cards { display: flex; flex-direction: column; gap: 14px; }
        .guide-card { background: white; border-radius: 18px; padding: 18px; display: flex; flex-direction: column; gap: 8px; border: 1px solid rgba(13,26,15,0.07); box-shadow: 0 2px 12px rgba(13,26,15,0.04); }
        .guide-card h4 { margin: 0; }
        .guide-card p { margin: 0; font-size: 14px; color: #555; }
        .guide-card-light { background: rgba(240,237,230,0.6); border: none; box-shadow: none; }
        .guide-card-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #C8A96A; line-height: 1; }
        .guide-table { width: 100%; border-collapse: collapse; font-size: 13px; overflow-x: auto; display: block; }
        .guide-table th { background: #1A3A1F; color: #FAF8F4; padding: 10px 12px; text-align: left; font-weight: 600; white-space: nowrap; }
        .guide-table td { padding: 10px 12px; border-bottom: 1px solid rgba(13,26,15,0.08); color: #333; vertical-align: top; }
        .guide-table tr:last-child td { border-bottom: none; }
        .guide-table tr:nth-child(even) td { background: rgba(240,237,230,0.5); }
        .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header */}
      <header className="sticky top-[3px] left-0 right-0 z-40 px-4 pt-3 pb-2">
        <div
          className="w-full h-[54px] rounded-[27px] flex items-center justify-between px-5 border border-white/50"
          style={{ backgroundColor: 'rgba(250,248,244,0.95)', backdropFilter: 'blur(24px)', boxShadow: '0 2px 20px rgba(13,26,15,0.09)' }}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logotype} alt="Vania" className="h-[26px] object-contain" />
          </Link>
          <span
            className="px-3 py-1 rounded-full text-[11px] font-[700] uppercase tracking-[0.12em]"
            style={{ backgroundColor: 'rgba(200,169,106,0.15)', color: '#C8A96A' }}
          >
            Guide Gratuit
          </span>
          <button
            className="flex flex-col gap-[5px] items-center justify-center w-10 h-10 rounded-full"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Table des matières"
          >
            {[0,1,2].map(i => (
              <span key={i} className="block h-[1.5px] w-[18px] rounded-full" style={{ backgroundColor: '#0D1A0F' }} />
            ))}
          </button>
        </div>
      </header>

      {/* Table of contents overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col px-6 py-10 overflow-y-auto"
            style={{ backgroundColor: '#FAF8F4' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-[28px] text-[#0D1A0F]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Table des matières
              </h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(13,26,15,0.08)' }}
              >
                <span className="text-[20px] leading-none" style={{ color: '#0D1A0F' }}>×</span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {CHAPTERS.map((ch, i) => (
                <motion.button
                  key={ch.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { setActiveChapter(ch.id); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-4 p-4 rounded-[16px] text-left transition-all"
                  style={{
                    backgroundColor: activeChapter === ch.id ? '#1A3A1F' : 'rgba(13,26,15,0.05)',
                  }}
                >
                  <span className="text-[24px]">{ch.emoji}</span>
                  <div className="flex-1">
                    <p className="text-[11px] font-[600] uppercase tracking-[0.1em]" style={{ color: activeChapter === ch.id ? '#C8A96A' : '#0D1A0F80' }}>
                      Chapitre {ch.number}
                    </p>
                    <p className="text-[16px] font-[600]" style={{ color: activeChapter === ch.id ? '#FAF8F4' : '#0D1A0F' }}>
                      {ch.title}
                    </p>
                  </div>
                  <span className="text-[12px]" style={{ color: activeChapter === ch.id ? '#C8A96A80' : '#0D1A0F40' }}>{ch.readTime}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="w-full max-w-[680px] mx-auto px-5 pb-20">

        {/* Guide hero */}
        <div className="pt-10 pb-12">
          <div className="flex items-center gap-2 mb-5">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-[700] uppercase tracking-[0.13em]"
              style={{ backgroundColor: 'rgba(200,169,106,0.15)', color: '#C8A96A' }}
            >
              {CHAPTERS[currentIndex].emoji} Chapitre {CHAPTERS[currentIndex].number}
            </span>
            <span className="text-[12px] text-[#0D1A0F]/40">{CHAPTERS[currentIndex].readTime} de lecture</span>
          </div>
          <h1
            className="text-[38px] leading-[1.05] text-[#0D1A0F] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
          >
            {CHAPTERS[currentIndex].title}
          </h1>
          <div className="w-full h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #C8A96A, transparent)' }} />
        </div>

        {/* Chapter content */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeChapter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {CONTENT[activeChapter]}
          </motion.article>
        </AnimatePresence>

        {/* Chapter navigation */}
        <div className="mt-16 flex flex-col gap-4">
          {prevChapter && (
            <button
              onClick={() => { setActiveChapter(prevChapter.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-4 p-4 rounded-[18px] text-left w-full"
              style={{ backgroundColor: 'rgba(13,26,15,0.05)' }}
            >
              <span className="text-[20px]">←</span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#0D1A0F]/40 mb-0.5">Précédent</p>
                <p className="text-[15px] font-[600] text-[#0D1A0F]">{prevChapter.emoji} {prevChapter.title}</p>
              </div>
            </button>
          )}
          {nextChapter && (
            <button
              onClick={() => { setActiveChapter(nextChapter.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center justify-between gap-4 p-5 rounded-[18px] w-full"
              style={{ backgroundColor: '#1A3A1F' }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] mb-0.5" style={{ color: '#C8A96A80' }}>Chapitre suivant</p>
                <p className="text-[16px] font-[600]" style={{ color: '#FAF8F4' }}>{nextChapter.emoji} {nextChapter.title}</p>
              </div>
              <span className="text-[20px]" style={{ color: '#C8A96A' }}>→</span>
            </button>
          )}
        </div>

        {/* CTA fin de guide */}
        <div className="mt-14 rounded-[24px] p-6 flex flex-col gap-5" style={{ backgroundColor: '#F0EDE6' }}>
          <p
            className="text-[22px] leading-[1.3] text-[#0D1A0F]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Prêt à passer à l'action ?
          </p>
          <p className="text-[15px] text-[#333] leading-[1.6]">
            L'équipe Vania vous offre un diagnostic gratuit de 20 minutes pour analyser votre présence digitale et vous proposer un plan d'action sur mesure.
          </p>
          <Link to="/consultation" className="w-full">
            <motion.button
              className="w-full h-[52px] rounded-[26px] font-[500] text-[15px]"
              style={{ backgroundColor: '#1A3A1F', color: '#FAF8F4' }}
              whileHover={{ filter: 'brightness(1.12)' }}
              whileTap={{ scale: 0.97 }}
            >
              Obtenir mon diagnostic gratuit →
            </motion.button>
          </Link>
          <p className="text-center text-[13px] text-[#0D1A0F]/40">
            Gratuit · Sans engagement · 20 minutes
          </p>
        </div>

        {/* Chapter pills navigation */}
        <div className="mt-10 overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex gap-2 w-max">
            {CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => { setActiveChapter(ch.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-3 py-2 rounded-full text-[12px] font-[600] whitespace-nowrap transition-all"
                style={{
                  backgroundColor: activeChapter === ch.id ? '#C8A96A' : 'rgba(200,169,106,0.15)',
                  color: activeChapter === ch.id ? '#0D1A0F' : '#C8A96A',
                }}
              >
                {ch.emoji} {ch.number}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <div className="border-t py-6 text-center px-4" style={{ borderColor: 'rgba(13,26,15,0.1)' }}>
        <p className="text-[13px] text-[#0D1A0F]/40">
          © 2026 Vania Studio Marketing · <Link to="/" className="underline hover:text-[#1A3A1F]">Retour à l'accueil</Link>
        </p>
      </div>
    </div>
  );
}
