# La Bella Mesa — Quiet, Accessible Luxury

## Style Description

**Look & Feel:** Understated, tactile, timeless  
**Approach:** Neutral canvas with selective, disciplined color  
**Materials:** Linen, stone, ceramic, olive wood; brass as accent  
**Composition:** Generous negative space, refined typography, micro-details (hairlines, ligatures, rules)  
**Accessibility:** High contrast text on light grounds; accents used sparingly (never for body paragraphs)

---

## Color Discipline

### Neutrals (Primary Use)
- **Light Cream** `#EFE3D7` — Primary background, creates the canvas
- **Stone** `#C9C3BA` — Secondary background, subtle borders, section numbers
- **Ink Navy** `#36394C` — ALL body text (13.2:1 contrast on cream = WCAG AAA)

### Accents (Reserved Use Only)
- **Burgundy** `#5B2E34` — CTAs and links ONLY. Never for body text.
- **Brass** `#C4A46A` — Hairlines, dividers, micro-details ONLY. Never for paragraphs.

### Rules
1. Body paragraphs are ALWAYS Ink Navy on Cream/Stone background
2. Burgundy reserved for interactive elements (buttons, links)
3. Brass reserved for decorative elements (hairlines, accents, borders)
4. No gradients, no color fills outside these rules

---

## Typography Hierarchy

### Display — Libre Baskerville 700
- **H1:** 36-48px, -0.02em tracking
- **H2:** 28-36px, -0.01em tracking  
- **H3:** 20-24px, 0 tracking
- **Color:** Always Ink Navy `#36394C`

### Body — Montserrat 400
- **Base:** 16px, 1.7 line-height
- **Color:** Always Ink Navy `#36394C`
- **Rule:** High contrast only. Never use accent colors for body.

### Micro-Details — Montserrat 600
- **Section Numbers:** 11px, 0.08em tracking, uppercase
- **Labels:** 13px, 0.05em tracking, uppercase
- **Color:** Stone `#C9C3BA` or Brass `#C4A46A` (for accents only)

---

## Voice & Tone

### Personality
Calm, warm, exacting, service-oriented.

### Tone Guardrails
- Short sentences
- No hype, no jargon
- Lead with clarity, then feeling
- Understated confidence

### Words to Avoid
- Cheap, poor quality
- Difficult, unreliable
- Loud, "noisy"
- Overcomplicated language

### Voice Examples
✅ "Set the table. We'll do the rest."  
✅ "Elegance, handled."  
✅ "La mesa, sin complicaciones."

✅ "Every detail was handled. The cuisine was beautiful. Service was seamless."  
✅ "Quality is their standard. Our event ran smoothly. Clients were impressed."

❌ "Transform your event into a magical, unforgettable experience!"  
❌ "We craft extraordinary culinary masterpieces that will wow your guests!"

---

## Spatial Rhythm

### Section Padding
```css
padding: clamp(60px, 10vw, 120px) 0;
```

### Card Breathing Room
```css
padding: clamp(40px, 8vw, 80px);
```

### Negative Space
- Generous margins between sections
- Never crowd elements
- White space is a design element, not empty space

---

## Grid System — Asymmetric Splits

### Kalm Kitchen Modular Grids
- **60/40 Split:** Content-heavy layouts
- **70/30 Split:** Editorial layouts with sidebar
- **50/50 Split:** Balanced visual/text pairing

### Mobile
All grids collapse to single column on mobile.

---

## Micro-Details

### Hairlines (Brass)
- **Width:** 0.5-1px
- **Opacity:** 60% typically
- **Use:** Section dividers, card accents, decorative rules

### Section Numbers
- **Format:** `01 · Network` or `02 · Services · La Mesa`
- **Style:** 11px, uppercase, Stone color, bordered box
- **Placement:** Top of each major section

### Brass Arc Tessellation
- Subtle geometric pattern background
- 5% opacity
- Used on Footer, Contact form, cards

---

## Shadows — Quiet Luxury

### Standard Shadow
```css
box-shadow: 
  0 1px 2px rgba(54, 57, 76, 0.05),
  0 4px 8px rgba(54, 57, 76, 0.04);
```

### Hover Shadow
```css
box-shadow: 
  0 4px 8px rgba(54, 57, 76, 0.06),
  0 8px 16px rgba(54, 57, 76, 0.08);
```

**Rule:** Shadows are whispers, not shouts. Barely perceptible depth.

---

## Accessibility Requirements

### Contrast Ratios
- **Body Text:** 13.2:1 (Ink on Cream) — WCAG AAA
- **Headings:** 13.2:1 (Ink on Cream) — WCAG AAA
- **Links:** 8.5:1 (Burgundy on Cream) — WCAG AA Large

### Focus States
- 2px solid Brass outline
- 2px offset for breathing room

### Motion Respect
```css
@media (prefers-reduced-motion: reduce)
```
All animations respect user preferences.

---

## Component Guidelines

### Buttons — Primary CTA
- **Background:** Burgundy `#5B2E34`
- **Text:** Light Cream `#EFE3D7`
- **Hover:** Darken to `#4F272C`
- **Copy:** Short, direct ("Inquire", "View Menu")

### Links
- **Color:** Burgundy (default), Brass (hover)
- **Underline:** Brass 1px line on hover (smooth transition)

### Forms
- **Inputs:** Light Cream background, Stone bottom border
- **Focus:** Burgundy bottom border (2px)
- **Labels:** 13px uppercase, Ink Navy

### Cards
- **Background:** White or Light Cream
- **Border:** Stone 1px
- **Shadow:** Quiet shadow
- **Padding:** Breathe utility (40-80px)
- **Accent:** Brass 1px top border

---

## Image Guidelines

### Photography Style
- Natural light preferred
- Neutral backgrounds (stone, linen, wood)
- Food provides the color
- Soft shadows, tactile textures

### Image Treatment
- No filters or heavy editing
- Maintain natural color palette
- High resolution (min 1080px width)
- Responsive sizing

---

## Do's and Don'ts

### ✅ Do
- Use short sentences
- Maintain high contrast
- Embrace white space
- Reserve colors for specific uses
- Let typography breathe
- Use Brass sparingly (hairlines only)
- Keep voice calm and confident

### ❌ Don't
- Use accent colors for body text
- Crowd elements together
- Add unnecessary decoration
- Use hype language
- Override default typography sizing
- Add gradients or heavy effects
- Make CTAs compete visually

---

## Technical Implementation

### CSS Custom Properties
```css
:root {
  --cream: #EFE3D7;
  --stone: #C9C3BA;
  --ink: #36394C;
  --burgundy: #5B2E34;
  --brass: #C4A46A;
}
```

### Typography Scale
```css
/* Headers: Libre Baskerville 700 */
h1, h2, h3 { 
  font-family: 'Libre Baskerville', Georgia, serif;
  color: var(--ink);
}

/* Body: Montserrat 400 */
p { 
  font-family: 'Montserrat', sans-serif;
  color: var(--ink);
}
```

---

## Inspiration Reference

**Kalm Kitchen (kalmkitchen.co.uk)**
- Modular, asymmetrical grids
- Numbered sections (01, 02, 03)
- Generous negative space
- Disciplined color usage
- Understated elegance
- Quiet confidence

---

## Summary

La Bella Mesa embodies **Quiet, Accessible Luxury** through:
1. High-contrast, accessible typography (WCAG AAA)
2. Disciplined color usage (neutrals for content, accents for interaction)
3. Generous spacing and breathing room
4. Short, clear voice with no hype
5. Tactile micro-details (hairlines, rules, ligatures)
6. Timeless, understated elegance

**Philosophy:** The design should feel like walking into a beautifully set table — calm, refined, and effortlessly welcoming.
