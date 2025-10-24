# Kulmiye Polyclinic Pharmacy — Brand Identity Guidelines

A modern, professional identity for a trusted community pharmacy providing high‑quality healthcare, medication, and patient support services. The brand communicates care, trust, innovation, and wellness.

## Brand Essence
- Vision: Accessible, compassionate, and modern pharmacy care for every community member.
- Values: Care, Trust, Innovation, Wellness, Community.
- Tone: Calm, reassuring, knowledgeable, and approachable.

## Logo System
The Kulmiye mark combines a caring medical cross with a leaf, symbolizing health, safety, nature, and ongoing wellness.

- Primary mark: Rounded medical cross with a subtle leaf accent and blue→green gradient.
- Wordmark: “Kulmiye Polyclinic Pharmacy” set in a geometric, friendly sans-serif.
- Icon: Standalone symbol for avatars, favicons, and app icons.

Variants and files:
- Icon (full color): `brand/logo/kulmiye-logo-icon.svg`
- Horizontal lockup (full color): `brand/logo/kulmiye-logo-horizontal.svg`
- Horizontal lockup (monochrome): `brand/logo/kulmiye-logo-horizontal-mono.svg`
- Safe background: White or very light neutral.

Clearspace and sizing:
- Clearspace around the logo equals the height of the leaf in the mark (≈ the inner negative space of the cross). Keep this area free of text and graphics.
- Minimum sizes: Icon ≥ 24 px; Horizontal lockup ≥ 140 px width.

Misuse (don’t):
- Don’t change colors independently of approved palette.
- Don’t stretch, skew, or add outlines/drop-shadows to the logo.
- Don’t place on busy backgrounds without a white/neutral container.

## Color Palette
A calm clinical blue balanced with a restorative green. White and cool neutrals support clarity and trust.

- Primary Blue 600 `#1E88E5` — brand anchor, CTAs, links
- Primary Blue 700 `#1565C0` — hover/active states
- Emerald Green 600 `#0E9F6E` — wellness accents, success states
- Emerald Green 500 `#12B886` — gradients, highlights
- Slate 900 `#0F172A` — headlines on white
- Slate 700 `#334155` — body text on white
- Slate 100 `#F1F5F9` — subtle surfaces
- White `#FFFFFF` — primary surface

Primary gradient (for hero, highlights):
- `linear-gradient(135deg, #1E88E5 0%, #0E9F6E 100%)`

Accessibility
- Maintain WCAG AA contrast: body text ≥ 4.5:1, large text/buttons ≥ 3:1.
- Prefer dark text on white/light neutrals, with brand colors reserved for emphasis.

## Typography
Rounded, friendly, professional sans-serif. Recommended families:
- Primary: Inter (UI, body), weights 400–700
- Secondary: Poppins (display, headings), weights 500–700

Typesetting
- Headings: Tight letter-spacing for display (−0.5% to −1%).
- Body: Comfortable line-height (1.5–1.7). Keep paragraph width 60–75 characters.

Fallback Stack
- `font-family: "Inter", "Poppins", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";`

## Iconography
- Rounded corners, 2 px–2.5 px stroke, consistent grid (24 px or 32 px).
- Metaphors: pill/capsule, leaf, cross, caring hands, shield (trust), chat.
- Use solid/duotone for small sizes; outlined for 24 px+.

## Imagery
- Professional but welcoming: smiling pharmacists, clean shelves, natural light, green plants.
- Composition: generous whitespace; focus on care interactions.
- Avoid: cluttered shelves, harsh lighting, overly posed stock photos.

## UI Style
- Clean white interface with subtle medical gradients (blue → green).
- Soft-shadow or glassmorphism cards on light backgrounds.
- Clear hierarchy using color and weight; avoid excessive saturation.

Motion
- Use subtle, purposeful transitions (150–250 ms). Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

## Components (Principles)
- Buttons: 12 px–14 px radius; high-contrast text; clear hover/focus.
- Cards: soft shadows, 12–16 px radius, clear headings, comfortable padding.
- Forms: large tap targets (≥ 44 px), clear labels, informative errors.

## Voice & Messaging
- Calm, trustworthy, compassionate. Empower patients; avoid jargon.
- Examples:
  - “Your health, cared for — from trusted pharmacists.”
  - “Book a consultation or refill a prescription in minutes.”

## File Packaging
- See `web/assets/css/tokens.css` for design tokens.
- Use `kulmiye-logo-horizontal-mono.svg` on single-color/print.
- Export PNGs for office use as needed from the supplied SVGs.

## Credits
- Brand and system designed for Kulmiye Polyclinic Pharmacy — Somali community healthcare.
