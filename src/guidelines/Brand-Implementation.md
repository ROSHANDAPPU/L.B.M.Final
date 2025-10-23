# La Bella Mesa Brand Implementation

## Color Palette Implementation

### Primary Colors
- **Light Cream** `#EFE3D7` - Main background, cards
- **Ink Navy** `#36394C` - Body text, headings
- **Reserved Burgundy** `#5B2E34` - CTAs, links, key elements
  - Hover state: `#4F272C`

### Accent Colors
- **Brass** `#C4A46A` - Thin lines (2px max), icon accents, bullets
- **Stone** `#C9C3BA` - Section backgrounds, borders, dividers
- **Soft Blush** `#E2B9B3` - Reserved for future use (badges/tags)
- **Muted Sage** `#98A989` - Reserved for textiles/props

## Typography Scale

### Headlines (Libre Baskerville)
- **H1**: 48px / line-height 1.15 / weight 700
- **H2**: 36px / line-height 1.2 / weight 700  
- **H3**: 28px / line-height 1.25 / weight 600

### Body (Montserrat)
- **H4**: 22px / line-height 1.3 / weight 700
- **Body/P**: 18px / line-height 1.6 / weight 400
- **Lead**: 18px / line-height 1.5 / weight 500
- **Small/Captions**: 14px / line-height 1.5 / weight 400-500
- **Labels/Buttons**: 16px / line-height 1.4 / weight 600 / letter-spacing 0.02em

## Component Specifications

### Buttons
- **Primary**: Burgundy background, Light Cream text
- **Border radius**: 12-14px
- **Padding**: px-8 py-4 (large), px-6 py-3 (standard)
- **Hover**: #4F272C background
- **Focus**: 2px outer ring #5B2E34

### Cards
- **Background**: Light Cream or White
- **Border**: 1px Stone (#C9C3BA)
- **Padding**: 16-24px
- **Featured cards**: Add 2px Brass top rule

### Forms
- **Inputs**: Light Cream background, Stone border
- **Focus**: Burgundy ring (2px)
- **Labels**: Montserrat 600, 0.02em letter-spacing

### Accent Usage
- **Brass**: Only for hairlines (1-2px), bullets, small icons
- **Never use**: Brass or Blush for body text
- **Dividers**: 1px Stone standard, 2px Brass for key sections only

## Accessibility
- Ink Navy on Light Cream/Stone passes WCAG AA
- Body text minimum: 16-18px
- Burgundy for links/CTAs (sufficient contrast)
- Maintain 4.5:1 contrast ratio

## Brand Voice
- Short sentences
- No hype, no jargon  
- Lead with clarity, then feeling
- Examples:
  - "Set the table. We'll do the rest."
  - "Elegance, handled."
  - "La mesa, sin complicaciones."

## Do's
✓ Use light backgrounds with generous spacing
✓ Keep Brass to hairlines, bullets, small icons
✓ Let food provide most color; props stay neutral
✓ Keep messaging plain and confident
✓ Use high contrast text on light grounds

## Don'ts
✗ No bright saturated blocks or oversized display type
✗ Don't typeset long paragraphs in display serif
✗ Don't use accent colors for body text or large fills
✗ Don't use font-size/font-weight Tailwind classes (rely on semantic HTML)
