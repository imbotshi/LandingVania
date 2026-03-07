# 🎨 Mobbin.com — Design & Animation Reference

> Analysé à **440px** de large (mobile-first) · Source de référence pour reproduire le style Mobbin

---

## 1. Design Tokens (Variables CSS)

```css
:root {
  /* ── Couleurs ────────────────────────────────── */
  --bg-page: #f0f0f5; /* gris-bleu très clair (fond général) */
  --bg-glow: rgba(173, 193, 240, 0.35); /* halo bleu-lavande latéral */
  --bg-white: #ffffff;
  --bg-card: #ffffff;
  --bg-inverse: #141414; /* noir doux (bouton primaire) */
  --bg-glass: rgba(237, 237, 237, 0.72); /* navbar glassmorphism */
  --bg-pill-inactive: rgba(0, 0, 0, 0.06); /* fond onglet inactif */

  --text-primary: #141414; /* quasi-noir */
  --text-secondary: #666666; /* gris moyen */
  --text-inverse: #ffffff;
  --text-accent: #141414; /* pas de couleur vive = tout en contraste */

  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-glass: rgba(0, 0, 0, 0.05);
  --divider: #e5e5e5;

  /* ── Rayon ───────────────────────────────────── */
  --radius-pill: 9999px; /* boutons CTA */
  --radius-navbar: 28px; /* floating island header */
  --radius-card-lg: 24px; /* grandes cartes / screenshot */
  --radius-card-sm: 12px; /* petites tuiles */
  --radius-icon: 22px; /* icônes app style iOS squircle */
  --radius-badge: 6px;

  /* ── Espacements ─────────────────────────────── */
  --gutter-h: 16px; /* marges horizontales de page */
  --section-gap: 80px; /* espacement vertical entre sections */
  --item-gap: 10px; /* gap standard dans les grilles */

  /* ── Ombres ──────────────────────────────────── */
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-navbar: 0 1px 0 rgba(0, 0, 0, 0.04);
  --shadow-button: inset 0 0 0 1.5px rgba(0, 0, 0, 0.12); /* outline buttons */

  /* ── Typographie ─────────────────────────────── */
  --font-main: "Saans", "Inter", sans-serif; /* Saans = géométrique custom */
  --font-mono: "JetBrains Mono", monospace;
}
```

---

## 2. Typographie

| Rôle             | Taille    | Poids | Line-height | Letter-spacing |
| ---------------- | --------- | ----- | ----------- | -------------- |
| Hero H1          | `44px`    | `700` | `1.0`       | `-0.022em`     |
| Section H2       | `32–36px` | `700` | `1.05`      | `-0.018em`     |
| Stats / Chiffres | `32px`    | `700` | `1.1`       | `-0.01em`      |
| Body             | `16px`    | `400` | `1.5`       | `0`            |
| Caption / Label  | `13px`    | `600` | `1.3`       | `0.01em`       |
| Tag / Badge      | `12px`    | `600` | `1`         | `0.02em`       |
| Nav links        | `15px`    | `500` | `1`         | `0`            |

> **Font stack recommandé** : `'Inter', 'Figtree', system-ui, sans-serif`
> Mobbin utilise "Saans" (propriétaire), Inter est le meilleur équivalent open-source.

---

## 3. Composants UI

### 3.1 Floating Navbar (Header)

```css
.navbar {
  position: fixed;
  top: 12px;
  left: 16px;
  right: 16px;
  height: 56px;
  border-radius: var(--radius-navbar); /* 28px */
  background: var(--bg-glass); /* rgba(237,237,237,0.72) */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border-glass); /* rgba(0,0,0,0.05) */
  box-shadow: var(--shadow-navbar);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}
/* Au scroll : légère intensification du blur */
.navbar.scrolled {
  background: rgba(245, 245, 245, 0.88);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

---

### 3.2 Bouton Primaire (CTA noir)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 24px;
  border-radius: var(--radius-pill); /* 9999px */
  background: var(--bg-inverse); /* #141414 */
  color: var(--text-inverse); /* #fff */
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  border: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
}
.btn-primary:hover {
  background: #2a2a2a;
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0px) scale(0.98);
}
```

### 3.3 Bouton Secondaire (outline)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 48px;
  padding: 0 20px;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 500;
  border: none;
  box-shadow: inset 0 0 0 1.5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    transform 0.15s ease;
}
.btn-secondary:hover {
  box-shadow: inset 0 0 0 1.5px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}
```

---

### 3.4 Segmented Control (Onglets "pill slider")

Signature Mobbin : un pill blanc glisse sous l'onglet actif.

```css
.tabs {
  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 9999px;
  padding: 4px;
  position: relative;
  gap: 2px;
}
.tab-item {
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.25s ease;
  white-space: nowrap;
}
.tab-item.active {
  color: var(--text-primary);
}
/* Le "slider" blanc anime entre onglets */
.tab-slider {
  position: absolute;
  top: 4px;
  height: calc(100% - 8px);
  background: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition:
    left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}
```

```jsx
// React — déplacement du slider via refs
const sliderStyle = {
  left: activeTab.offsetLeft + "px",
  width: activeTab.offsetWidth + "px",
};
```

---

### 3.5 App Icon Card

```css
.app-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-icon); /* 22px — iOS squircle approx */
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.2s ease;
}
.app-icon:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
}
```

### 3.6 Screenshot Card (mobile screen preview)

```css
.screen-card {
  border-radius: var(--radius-card-lg); /* 24px */
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.screen-card:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}
```

### 3.7 Badge "New" / "Updated"

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.badge-new {
  background: #141414;
  color: #fff;
}
.badge-updated {
  background: rgba(0, 0, 0, 0.07);
  color: #555;
}
```

---

## 4. Backgrounds & Ambiance Visuelle

### 4.1 Fond de page avec halo latéral (signature Mobbin)

```css
body {
  background: #f0f0f5;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Halos bleu-lavande sur les côtés */
body::before,
body::after {
  content: "";
  position: fixed;
  top: 0;
  width: 80px;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
body::before {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(173, 193, 240, 0.5) 0%,
    transparent 100%
  );
}
body::after {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(173, 193, 240, 0.5) 0%,
    transparent 100%
  );
}
```

### 4.2 Section avec profondeur (carte flottante)

```css
.floating-section {
  background: #fff;
  border-radius: var(--radius-card-lg);
  margin: 0 var(--gutter-h);
  padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}
```

---

## 5. Animations & Transitions

### 5.1 Entrance Hero — Fade + Slide Up

```css
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-subtitle {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
.hero-buttons {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}
.hero-trust {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}
```

### 5.2 Scroll-triggered Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
// IntersectionObserver pour activer .visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
```

### 5.3 Ticker / Logo Scroll Infini

```css
@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker 20s linear infinite;
}
.ticker-track:hover {
  animation-play-state: paused;
}
```

### 5.4 App Icons — Floating Carousel lateral scroll

```css
.scroll-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  padding: 8px var(--gutter-h);
}
.scroll-row::-webkit-scrollbar {
  display: none;
}
.scroll-row > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

### 5.5 Icône centrale isolée — Flottement doux

```css
@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}
.hero-icon {
  animation: floatIcon 4s ease-in-out infinite;
}
```

### 5.6 Hover Card — Spring Bounce (React/Framer Motion)

```jsx
// Avec Framer Motion (déjà installé dans le projet comme "motion")
import { motion } from "motion/react";

<motion.div
  whileHover={{ y: -4, scale: 1.015 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
  className="screen-card"
>
  {/* contenu */}
</motion.div>;
```

### 5.7 Button Press — Tap feedback

```jsx
<motion.button
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.1 }}
  className="btn-primary"
>
  Commencer le diagnostic gratuit
</motion.button>
```

---

## 6. Layout Patterns (440px Mobile)

### Structure de page type

```css
.page {
  max-width: 440px;
  margin: 0 auto;
  padding: 72px 0 40px; /* 72px = navbar height + safe area */
}

.section {
  padding: var(--section-gap) var(--gutter-h);
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.018em;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 32px;
}
```

### Grille de statistiques (chiffres impactants)

```css
.stats-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}
.stat-number {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}
```

### 2-Colonnes pour paires de boutons

```css
.btn-row {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
```

---

## 7. Icônes

- **Style** : contour (outline), strokeWidth `1.5px`, caps arrondis
- **Librairie** : `lucide-react` (déjà installée dans ce projet ✅)
- **Taille standard** : `20px` dans les boutons, `24px` seul
- **Couleur** : hérite de `currentColor` pour suivre le thème

```jsx
import { ArrowRight, Phone, Building2, MapPin } from "lucide-react";

<button className="btn-secondary">
  See our plans <ArrowRight size={16} strokeWidth={1.75} />
</button>;
```

---

## 8. Effets Glassmorphism

```css
/* Pattern standard */
.glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

/* Variante sombre (sur fond coloré) */
.glass-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
```

---

## 9. Palette Mobbin résumée (tokens prêts à copier)

| Variable           | Valeur                   | Usage               |
| ------------------ | ------------------------ | ------------------- |
| `--bg-page`        | `#F0F0F5`                | Fond principal      |
| `--bg-glow`        | `rgba(173,193,240,0.35)` | Halos latéraux      |
| `--text-primary`   | `#141414`                | Titres, corps       |
| `--text-secondary` | `#666666`                | Sous-titres, labels |
| `--bg-inverse`     | `#141414`                | Bouton CTA          |
| `--bg-glass`       | `rgba(237,237,237,0.72)` | Navbar              |
| `--radius-pill`    | `9999px`                 | Boutons CTA         |
| `--radius-navbar`  | `28px`                   | Header flottant     |
| `--radius-card-lg` | `24px`                   | Cards               |
| `--radius-icon`    | `22px`                   | Icons iOS           |
| `--section-gap`    | `80px`                   | Espacement sections |
| `--gutter-h`       | `16px`                   | Marges latérales    |

---

## 10. Easing de référence

```css
/* Spring-like — pour hover, entrées de cartes */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Soft deceleration — pour fade-in, scroll reveal */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

/* Standard — pour transitions de couleur */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* Linear — pour les tickers */
--ease-linear: linear;
```

---

> 📁 Screenshots capturés : `graphic/` → voir les captures dans `brain/`
> 🔗 Source : https://mobbin.com · Analysé le 2026-02-24 à 440px
