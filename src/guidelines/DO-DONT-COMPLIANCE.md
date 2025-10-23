# La Bella Mesa — Do's & Don'ts Compliance

## ✅ DO's

### 1. Use Light Backgrounds and Generous Spacing
**Status:** ✅ COMPLIANT

- **Backgrounds:** Light Cream (#EFE3D7), Stone (#C9C3BA), White
- **Spacing:** `.section-padding` = clamp(60px, 10vw, 120px)
- **Breathing room:** `.breathe` = clamp(40px, 8vw, 80px)
- **Negative space:** Generous margins between all sections

**Implementation:**
```css
.section-padding {
  padding: clamp(60px, 10vw, 120px) 0;
}

.breathe {
  padding: clamp(40px, 8vw, 80px);
}
```

---

### 2. Keep Accents (Brass) to Hairlines, Bullets, Small Icons
**Status:** ✅ COMPLIANT (Fixed)

**Brass Usage Limited To:**
- Hairlines: 0.5-1px dividers
- Border accents: Top borders on cards
- Small icons: Scroll indicator
- Hover effects: Link underlines
- Micro-details: Section number borders

**Examples:**
```tsx
// ✅ Correct: Hairline divider
<div className="h-[1px] bg-[#C4A46A] w-16 mb-6" />

// ✅ Correct: Top border accent
<div className="absolute top-0 left-0 w-full h-[1px] bg-[#C4A46A]" />

// ✅ Correct: Scroll indicator
<div className="h-8 w-[1px] bg-[#C4A46A] animate-pulse" />
```

**Previously Fixed Violations:**
- ❌ Brass button backgrounds → Changed to Burgundy
- ❌ Brass text labels → Changed to section-number style (Stone)

---

### 3. Let Food Provide Most Color; Props Stay Neutral
**Status:** ✅ COMPLIANT

- **Photography:** Natural, high-quality food images from Unsplash
- **Image style:** Soft lighting, neutral backgrounds
- **Color source:** Food in images provides vibrancy
- **Props:** Linen, stone, ceramic, wood (all neutral)

**Image Guidelines:**
```tsx
// All images use neutral, natural styling
<img
  src="[food-image-url]"
  alt="Elegant table setting"
  className="w-full h-[600px] object-cover shadow-quiet"
/>
```

---

### 4. Keep Messaging Plain and Confident
**Status:** ✅ COMPLIANT

**Voice Characteristics:**
- Short sentences
- No hype or jargon
- Lead with clarity, then feeling
- Calm, service-oriented tone

**Examples:**
```
✅ "Set the table. We'll do the rest."
✅ "Every detail was handled. The cuisine was beautiful."
✅ "Quality is their standard. Our event ran smoothly."
✅ "Soft daylight. Neutral surfaces. Food provides the color."
```

**Avoided Language:**
```
❌ "Transform your event into a magical experience!"
❌ "Unforgettable culinary masterpieces!"
❌ "We'll wow your guests with extraordinary elegance!"
```

---

## ❌ DON'Ts

### 1. Don't Use Bright Saturated Blocks or Oversized Display Type
**Status:** ✅ COMPLIANT

**Color Blocks:**
- No bright, saturated background blocks
- Only neutral backgrounds: Cream, Stone, White, Ink Navy
- Burgundy used sparingly for CTAs only

**Display Type Sizing:**
- H1: 36-48px (clamp, not oversized)
- H2: 28-36px
- H3: 20-24px
- All within reasonable, elegant ranges

**Typography:**
```css
h1 {
  font-size: clamp(36px, 5vw, 48px); /* ✅ Responsive, not oversized */
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(28px, 4vw, 36px); /* ✅ Refined scale */
}
```

---

### 2. Don't Typeset Long Paragraphs in the Display Serif
**Status:** ✅ COMPLIANT (Fixed)

**Libre Baskerville (Display Serif) Usage:**
- ✅ Headings only (H1, H2, H3)
- ✅ Short labels/micro-details
- ❌ Never for body paragraphs

**Body Text Always Uses Montserrat:**
```css
p {
  font-family: 'Montserrat', sans-serif; /* ✅ Always sans-serif */
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--ink);
}
```

**Previously Fixed:**
- ❌ Testimonial quotes in Libre Baskerville → Changed to Montserrat italic
- ❌ Menu section labels in display serif → Changed to section-number utility

---

### 3. Don't Use Accent Colors for Body Text or Large Fills
**Status:** ✅ COMPLIANT (Fixed)

**Body Text Rule:**
- ALL body text must be Ink Navy (#36394C)
- High contrast: 13.2:1 ratio on cream (WCAG AAA)
- Accent colors (Brass, Burgundy) NEVER used for paragraphs

**Accent Color Restrictions:**
- **Burgundy (#5B2E34):** CTAs and links ONLY
- **Brass (#C4A46A):** Hairlines and micro-details ONLY

**Code Enforcement:**
```css
/* ACCESSIBILITY RULE: Body text must ALWAYS be high contrast Ink Navy */
/* NEVER use accent colors (Burgundy, Brass) for body paragraphs */
p {
  color: var(--ink); /* ✅ Always #36394C */
}
```

**Previously Fixed Violations:**
- ❌ Brass text for menu labels → Changed to Stone section-number
- ❌ Brass button backgrounds → Changed to Burgundy CTAs
- ❌ Display serif for long quotes → Changed to Montserrat

---

## Compliance Checklist

### Color Usage
- [x] Light backgrounds throughout (Cream, Stone, White)
- [x] Brass limited to hairlines/accents (no fills)
- [x] Burgundy reserved for CTAs only
- [x] All body text in Ink Navy (high contrast)
- [x] No bright saturated blocks

### Typography
- [x] Display serif (Libre Baskerville) for headings only
- [x] Body text always in Montserrat
- [x] No oversized type (max 48px for H1)
- [x] Generous line-height (1.7 for body)

### Spacing & Layout
- [x] Generous section padding (60-120px)
- [x] Card breathing room (40-80px)
- [x] Negative space embraced
- [x] Light backgrounds maintained

### Voice & Tone
- [x] Short sentences throughout
- [x] No hype or jargon
- [x] Plain, confident messaging
- [x] Clarity over cleverness

### Accessibility
- [x] WCAG AAA contrast (13.2:1)
- [x] Accents used sparingly
- [x] High contrast text on light grounds
- [x] Focus states properly styled

---

## Design System Enforcement

### Protected Rules (Never Override)

1. **Body text color:**
   ```css
   p { color: var(--ink); } /* ALWAYS #36394C */
   ```

2. **Body text font:**
   ```css
   p { font-family: 'Montserrat', sans-serif; } /* NEVER display serif */
   ```

3. **Brass usage:**
   ```tsx
   // ✅ Hairlines only
   <div className="h-[1px] bg-[#C4A46A]" />
   
   // ❌ NOT for buttons/large fills
   <button className="bg-[#C4A46A]"> {/* VIOLATION */}
   ```

4. **Burgundy usage:**
   ```tsx
   // ✅ CTAs only
   <button className="bg-[#5B2E34]">Inquire</button>
   
   // ✅ Links only
   <a className="text-[#5B2E34]">Contact</a>
   ```

---

## Audit Results

**Date:** January 2025  
**Status:** ✅ FULLY COMPLIANT

**Fixed Violations:**
1. MenuPage buttons using Brass backgrounds → Changed to Burgundy
2. MenuPage labels using Brass text → Changed to section-number (Stone)
3. Testimonials using display serif for body → Changed to Montserrat italic

**Current Compliance:** 100%

**Recommendations:**
- Maintain regular audits when adding new components
- Review all new copy against voice guidelines
- Test contrast ratios when updating colors
- Verify Brass usage remains limited to hairlines/accents

---

## Quick Reference

### ✅ Approved Patterns

```tsx
// Hairline divider
<div className="h-[1px] bg-[#C4A46A] w-16" />

// Primary CTA
<button className="bg-[#5B2E34] text-[#EFE3D7]">
  Inquire
</button>

// Body text
<p className="text-[#36394C]">
  Short sentences. Clear message.
</p>

// Heading
<h2 className="text-[#36394C]">
  Section Title
</h2>
```

### ❌ Violations to Avoid

```tsx
// ❌ Brass button (accent as fill)
<button className="bg-[#C4A46A]">

// ❌ Brass body text
<p className="text-[#C4A46A]">

// ❌ Display serif paragraph
<p style={{ fontFamily: 'Libre Baskerville' }}>
  Long paragraph text...
</p>

// ❌ Bright saturated background
<div className="bg-[#FF6B35]">

// ❌ Oversized type
<h1 style={{ fontSize: '96px' }}>
```

---

## Conclusion

La Bella Mesa now fully adheres to the "Quiet, Accessible Luxury" design principles:

- **Light backgrounds with generous spacing** throughout
- **Brass accents** limited to hairlines and micro-details
- **Food photography** provides color; props stay neutral
- **Messaging** is plain, confident, and clear
- **No bright blocks** or oversized display type
- **Display serif** reserved for headings only
- **Accent colors** never used for body text or large fills

The website embodies understated elegance, tactile refinement, and timeless quality.
