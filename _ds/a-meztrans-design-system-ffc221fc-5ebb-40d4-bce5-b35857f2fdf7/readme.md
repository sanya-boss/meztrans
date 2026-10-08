# A-Meztrans Design System

**A-Mežtrans OÜ** is a Tallinn-based transport company (founded 2004) offering contract passenger transport (coach/bus charters) and cargo transport in Estonia and beyond. Its one public surface is a one-page marketing/lead-gen site, **a-meztrans.ee** (built on Tilda), in Estonian with Russian and English versions. Goal of the site: build trust (safety, reliability, 20+ years) and collect transport requests via a form.

Brief for this system: *slick, modern, light landing with blue, red and black.*

## Sources
- `uploads/Opera Снимок_2026-10-08_195222_www.a-meztrans.ee.png` — full-page screenshot of https://www.a-meztrans.ee (ET). Copied to `assets/reference-homepage.png`. **This is the only source** — no codebase, Figma or brand book. All values are sampled from it.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, elevation, glass, stripe, logo, imagery)
- `components/` — React primitives (see below)
- `ui_kits/website/` — interactive recreation of the landing page
- `assets/` — `logo.png` (raster crop), `bus-photo.png` (cut-out fleet photo), `reference-homepage.png`
- `thumbnail.html`, `SKILL.md`

## Components
- **core/** — Button, Badge, Icon
- **forms/** — TextField, PhoneField, RangeField, Checkbox
- **content/** — FeatureCard, StepCard, SectionHeading, StripeDivider
- **navigation/** — LangSwitch, SiteFooter

Derived from the screenshot: Button (filled red/blue, outlined lang buttons), FeatureCard, StepCard, SectionHeading, StripeDivider, TextField, PhoneField, RangeField, LangSwitch, SiteFooter.
**Intentional additions:** Icon (wrapper for the substituted Lucide set), Badge (meta labels for a modernised landing), Checkbox (consent in forms).

## CONTENT FUNDAMENTALS
- **Languages:** Estonian primary; Russian and English alternates. Keep diacritics (ä, õ, ü, š, ž) — the company name is written **A-Mežtrans** in copy; the logo wordmark is lowercase "a-meztrans".
- **Voice:** formal, reassuring, service-minded. Addresses the client with polite plural **"Teie/teie"** (formal you); the company speaks as **"meie/we"**. e.g. "Meie maine on teie garantii." (*Our reputation is your guarantee.*)
- **Themes:** safety, reliability, compliance, since 2004, professional drivers, best price, comfort.
- **Casing:** sentence case for headings and buttons ("Rohkem detaile", "Võtke ühendust", "Saada"). Language buttons are UPPERCASE. Feature-card titles end with a full stop: "Reisijatevedu.", "Aja järgi testitud."
- **Length:** headlines are long, declarative statements broken over 3 lines ("Pühendumine ohutusele ja usaldusväärsusele - see on meie peamine eesmärk."). Body copy is 1–3 sentences. Section subtitles are a single short line.
- **Contact** is shown plainly and large: "+372 502 9918", "aleksandr@a-meztrans.ee".
- **No emoji**, no exclamation-heavy marketing, no slang. Numbers are factual (2004, 0–60 passengers).

## VISUAL FOUNDATIONS
- **Colors:** Meztrans Red `#F56866` (warm coral-red, primary CTA, logo dot, accents), Meztrans Blue `#6097F5` (secondary CTA, slider, focus), Ink `#1A1A1A` text/footer, true black `#000` for the deepest band, Paper `#F9F9F9` page background. Red and blue always appear as a pair and alternate (lang buttons, step numerals, cards, stripe).
- **Type:** one sans family (live site: Tilda Sans → **Manrope** substitute). Semibold headings 36–42px, regular 18px lead, 14px card/body text, light 40px step numerals. Tight negative tracking on headings only.
- **Backgrounds:** flat off-white page; no gradients behind content apart from the hero watermark. The hero uses a large pale-red circular "MEZTRANS TRANSPORT" stamp graphic bleeding off the right edge (not available as an asset — see caveats). Footer is a solid near-black band, then a black sub-band.
- **Signature motif:** a full-bleed **red-over-blue double stripe** (≈8px each) separating content from the contact section.
- **Cards:** 10px radius, frosted glass (semi-opaque white / red-tint / blue-tint + backdrop blur ~14px), thin white inner border, soft wide shadow (`--shadow-card`). They overlap the watermark so the blur reads.
- **Imagery:** cut-out vehicle photography (red coach at dusk) fading into the page background — no frames, no rounded crops. Warm, slightly desaturated, cinematic.
- **Corner radii:** tight — 2px inputs, 4px buttons, 10px cards. No pills except badges.
- **Borders:** inputs 1px `rgba(0,0,0,.18)`; outlined buttons 2px brand colour.
- **Shadows:** soft neutral on cards; filled CTAs carry a coloured glow (`--shadow-red`, `--shadow-blue`).
- **Layout:** 1200px container, left-aligned content, generous 120px section gaps, 4-column process row, 2-column about/contact. Nothing fixed/sticky.
- **Hover:** buttons darken one step (500→600); cards lift 2px and deepen shadow; lang buttons fill with their colour when active. **Press:** 1px drop + scale .98. **Focus:** blue border + 3px blue 18% ring.
- **Motion:** quick and calm — 120–400ms, `cubic-bezier(.2,.7,.2,1)`; fades and small lifts, no bounces. Smooth scrolling between sections.
- **Transparency/blur:** only on feature cards over the hero watermark.

## ICONOGRAPHY
- The live site uses Tilda's built-in thin line icons (≈1.5px stroke, outline, monochrome ink or red/blue): alarm clock, users, bus, house.
- No source files were available, so the system uses **Lucide** (via `lucide-static` CDN, masked so icons inherit colour) as the closest match — **substitution, flagged**. Use `<Icon name="bus"/>`.
- Icons are 16–20px, placed inline before card titles or as small accent rows. No emoji, no unicode-as-icon. Flags in the phone field come from flagcdn.com.

## Fonts
Tilda Sans is not included → **Manrope** (Google Fonts) substitutes. Replace `tokens/fonts.css` with `@font-face` rules once real font files are supplied.

## Caveats
- Logo is a raster crop on #F9F9F9 (not transparent, not vector).
- Hero stamp watermark not reproduced.
