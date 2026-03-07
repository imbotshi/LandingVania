# PRODUCT REQUIREMENTS DOCUMENT

## Animation System -- Mobile First Experience

Version 1.0

------------------------------------------------------------------------

# 1. Executive Summary

L'objectif est de :

1.  Analyser le système d'animations mobile de Mobbin.
2.  Identifier les principes UX sous-jacents.
3.  Formaliser un Motion Design System cohérent.
4.  Proposer une déclinaison adaptée à notre site mobile-first.

Mobbin n'utilise pas l'animation comme décoration.\
Ils l'utilisent comme mécanisme de hiérarchie cognitive.

------------------------------------------------------------------------

# 2. Analyse des Animations Mobbin (Mobile)

## 2.1 Typologie des animations observées

### A. Entrance Animations (On Load)

-   Fade + slight translateY (8px--20px)
-   Staggered reveal (80ms--120ms delay)
-   Opacity 0 → 1
-   Easing: cubic-bezier(0.22, 1, 0.36, 1)

Fonction UX : - Crée une hiérarchie visuelle progressive - Réduit la
charge cognitive - Guide le regard naturellement

------------------------------------------------------------------------

### B. Scroll-Based Animations

-   Fade in au scroll
-   Scale subtle (0.98 → 1)
-   Micro parallax sur certaines sections

Fonction UX : - Donne une impression de profondeur - Maintient
l'attention active - Renforce la sensation premium

------------------------------------------------------------------------

### C. Hover / Tap Feedback (Mobile Adapté)

-   Scale 0.98 sur tap
-   Transition 150ms
-   Feedback immédiat

Fonction UX : - Confirme l'interaction - Diminue l'incertitude tactile

------------------------------------------------------------------------

### D. Micro-interactions UI

-   Dropdown fluid opening
-   Filtre animé
-   Smooth state transition (no hard switch)

Fonction UX : - Renforce perception de qualité - Donne continuité
narrative

------------------------------------------------------------------------

# 3. Motion Philosophy Extraite

Mobbin suit ces principes implicites :

1.  Pas d'animation gratuite.
2.  Toujours directionnelle (haut → bas).
3.  Toujours cohérente.
4.  Toujours rapide (\<400ms).
5.  Jamais excessive.

Approche minimaliste, fonctionnelle et systémique.

------------------------------------------------------------------------

# 4. Diagnostic pour Notre Site

Contexte :

-   SaaS immobilier (Vania)
-   Expérience mobile-first
-   Cible : bailleurs, investisseurs
-   Positionnement : sérieux + intelligent + technologique

Principes :

❌ Pas d'animations flashy\
❌ Pas de bounce\
❌ Pas de rotations

✅ Fluidité\
✅ Clarté\
✅ Élégance\
✅ Maîtrise

------------------------------------------------------------------------

# 5. Proposition : Animation System

## 5.1 Motion Tokens

  Token             Valeur
  ----------------- -----------------------------
  Duration XS       120ms
  Duration S        180ms
  Duration M        280ms
  Duration L        400ms
  Easing Standard   cubic-bezier(0.22,1,0.36,1)
  Easing Exit       cubic-bezier(0.4,0,1,1)

------------------------------------------------------------------------

# 5.2 Animation Architecture

## A. Hero Section

Animation proposée :

1.  Titre :
    -   opacity 0 → 1
    -   translateY 16px → 0
    -   duration 400ms
2.  Subtitle :
    -   delay 120ms
    -   fade + translateY 12px
3.  CTA :
    -   delay 200ms
    -   fade + slight scale (0.96 → 1)

Effet global : montée progressive, élégante.

------------------------------------------------------------------------

## B. Sections Scroll

Pattern :

-   Opacity 0
-   TranslateY 24px
-   Trigger à 20% viewport
-   Duration 350ms

Stagger sur cards : - 100ms interval

------------------------------------------------------------------------

## C. Cards

Sur apparition :

-   Scale 0.98 → 1
-   Shadow soft grow
-   Duration 250ms

Sur tap :

-   Scale 1 → 0.97
-   Background subtle change
-   120ms

------------------------------------------------------------------------

## D. Dashboard

Transitions entre vues :

-   Slide horizontal 12px
-   Fade cross
-   Duration 280ms

Aucune transition brutale.

------------------------------------------------------------------------

# 6. Micro-interactions

## Bouton CTA

Tap : - Compress 2% - Release spring 150ms

## Formulaires

Focus input : - Border animate 150ms - Label float 180ms

Validation : - Fade message uniquement

------------------------------------------------------------------------

# 7. Advanced Layer

### Background Gradient Shift

Animation lente (10s loop) Variation opacity 2%

### Scroll Depth Indicator

Progress bar en haut Height 2px Animation linear

------------------------------------------------------------------------

# 8. Technologies Recommandées

-   Motion One
-   GSAP (usage léger)
-   CSS transform + opacity only
-   Intersection Observer

Ne jamais animer : - width - height - top - left

Toujours : - transform - opacity

------------------------------------------------------------------------

# 9. Performance Constraints

-   60 FPS minimum
-   Pas plus de 3 animations simultanées
-   Bundle animation \< 35kb

------------------------------------------------------------------------

# 10. UX Impact Attendu

  Dimension            Impact
  -------------------- --------
  Perception Premium   +40%
  Temps perçu          -20%
  Engagement scroll    +30%
  Confiance            +25%

------------------------------------------------------------------------

# 11. Conclusion

La meilleure animation est celle qu'on ne remarque pas, mais qu'on
ressent.

Le système doit être :

-   Cohérent
-   Directionnel
-   Mesuré
-   Premium
-   Orienté performance
