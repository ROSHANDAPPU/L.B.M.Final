# La Bella Mesa — Quick Reference Card

## 🎨 Color Discipline

### Neutrals (Primary Use)
```css
--cream: #EFE3D7   /* Backgrounds */
--stone: #C9C3BA   /* Borders, secondary bg */
--ink:   #36394C   /* ALL body text */
```

### Accents (Reserved Use)
```css
--burgundy: #5B2E34  /* CTAs + links ONLY */
--brass:    #C4A46A  /* Hairlines ONLY (max 1-2px) */
```

---

## ✅ DO

```tsx
// Light backgrounds
<section className="bg-[#EFE3D7]">

// Brass hairlines
<div className="h-[1px] bg-[#C4A46A]" />

// Burgundy CTAs
<button className="bg-[#5B2E34] text-[#EFE3D7]">

// Ink body text
<p className="text-[#36394C]">

// Short sentences
"Set the table. We'll do the rest."

// Generous spacing
<section className="section-padding">
```

---

## ❌ DON'T

```tsx
// ❌ Brass fills
<button className="bg-[#C4A46A]">

// ❌ Brass text
<p className="text-[#C4A46A]">

// ❌ Display serif body
<p style={{ fontFamily: 'Libre Baskerville' }}>

// ❌ Accent body text
<p className="text-[#5B2E34]">

// ❌ Bright blocks
<div className="bg-[#FF0000]">

// ❌ Hype copy
"Transform your magical experience!"

// ❌ Oversized type
<h1 style={{ fontSize: '96px' }}>
```

---

## 📝 Typography

### Display (Libre Baskerville)
```tsx
// ✅ Headings only
<h1>Title</h1>
<h2>Subtitle</h2>

// ❌ Never for paragraphs
<p style={{ fontFamily: 'Libre Baskerville' }}>Long text...</p>
```

### Body (Montserrat)
```tsx
// ✅ All body text
<p>Short sentences. Clear message.</p>
```

---

## 📏 Spacing

```css
/* Section padding */
.section-padding { padding: clamp(60px, 10vw, 120px) 0; }

/* Card padding */
.breathe { padding: clamp(40px, 8vw, 80px); }
```

---

## 🗣️ Voice

### ✅ Good
- "Set the table. We'll do the rest."
- "Elegance, handled."
- "Quality is our standard."

### ❌ Bad
- "Transform your event into magic!"
- "Unforgettable extraordinary experience!"
- "We'll wow your guests!"

---

## 🔍 Pattern Library

### Hairline
```tsx
<div className="h-[1px] bg-[#C4A46A] w-16" />
```

### CTA
```tsx
<button className="bg-[#5B2E34] text-[#EFE3D7] px-10 py-4">
  Inquire
</button>
```

### Link
```tsx
<a href="#" className="text-[#5B2E34] hover:text-[#C4A46A]">
  Contact
</a>
```

### Section Number
```tsx
<div className="section-number">
  <span className="inline-block px-3 py-1 border border-[#C4A46A]/30">
    01 · Network
  </span>
</div>
```

---

## ♿ Accessibility

```css
/* Body text contrast */
#36394C on #EFE3D7 = 13.2:1 (WCAG AAA)

/* Focus states */
outline: 2px solid var(--brass);
outline-offset: 2px;
```

---

## 🚫 Red Flags

Watch for:
- Brass backgrounds (should be hairlines only)
- Brass/Burgundy text in paragraphs
- Display serif in long text
- Missing spacing utilities
- Hype language
- Bright colors

---

**Remember:** Whisper elegance, don't shout it.
