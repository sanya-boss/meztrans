# Handoff: A-Mežtrans — one-page landing (ET / RU / EN)

## Overview
Single-page marketing site for **A-Mežtrans OÜ** (Tallinn passenger & cargo transport, since 2004). Goal: build trust and lead visitors to contact (phone / email). Three languages: Estonian (default), Russian, English — switched client-side, choice persisted.

## About the Design Files
`landing.dc.html` is a **design reference built in HTML** (a prototype showing intended look and behavior), not production code. Recreate it in the target codebase's environment (React/Next, Vue, Astro, etc.) using its own patterns. If no codebase exists, a static-friendly framework (Astro or Next.js static export) + plain CSS/CSS Modules is a good fit — the page has no backend needs.

To view the reference: serve this folder over HTTP (e.g. `npx serve .`) and open `landing.dc.html`. It loads `support.js` (prototype runtime) and the design-system bundle in `_ds/`.

## Fidelity
**High-fidelity.** Colors, type, spacing, motion and copy are final. Recreate pixel-accurately.

## Page structure (top → bottom)
Content column everywhere: `width: min(100% - 40px, 810px); margin: 0 auto;` (narrow container with wide side margins is intentional).
Page background `#F9F9F9`. Font: **Manrope** (substitute for Tilda Sans) 300–800.

### 1. Hero wrapper (`position: relative; overflow: hidden`)
Contains header, hero, cards, about, steps, stripe, contact. Overflow hidden only clips the decorative stamp.

**Decorative stamp (background)** — `aria-hidden`, `pointer-events: none`, `z-index: 0`, `opacity: .32`, `filter: blur(4px)`.
- Two stacked SVGs, same 354.52 viewBox, each `position:absolute; inset:0; 100%×100%`:
  - `assets/site/stamp-bus.svg` — red disc with bus (static).
  - `assets/site/stamp-ring2.svg` — red outer ring + black "A-MEZTRANS TRANSPORT" lettering. **Rotates** 360° linear, 40 s, infinite.
- Size: `width: min(520px, max(88vw, min(105vw, 420px)))`, `aspect-ratio: 1`.
- Position: `top: clamp(24px, calc(520px - 100vw), 200px)`; `left: min(calc(50% + 405px - min(520px, 88vw) + min(150px, 18vw)), calc(100% - min(520px, 105vw) * .55))`.
  - Desktop: sits right of content, bleeding past the container's right edge, top ≈ header level.
  - Mobile: pushed right so ~45% is off-screen, vertically around the H1/lead.
- Respect `prefers-reduced-motion` (no rotation).

### 2. Header (in flow, not sticky)
`padding-top: 40px; display:flex; flex-wrap:wrap; align-items:center; gap: 20px 36px`.
- Logo `assets/site/logo-a-red.svg`, height 30px (red "a" disc `#F56866`, wordmark `#1A1A1A`). Links to `#top`.
- Language switch: shows the **two languages other than the current one** (ET page → `ENGLISH`, `Русский`; RU page → `EESTI`, `ENGLISH`; EN page → `EESTI`, `Русский`). Labels: `EESTI`, `ENGLISH`, `Русский` (rendered uppercase).
  - Button: height 40, padding 0 18px, min-width 98, transparent bg, 2px border; 1st button border `#F56866`, 2nd `#6097F5`; radius 4px; text `#1A1A1A` 600 13px, letter-spacing .04em, uppercase. Gap 16px.
  - **Hover: border turns `#1A1A1A`** (180ms `cubic-bezier(.2,.7,.2,1)`).

### 3. Hero
`padding-top: 36px`.
- **H1**: max-width 440px; 700, `clamp(26px, 4vw, 31px)` / 1.2; letter-spacing -0.01em; `#1A1A1A`; `text-wrap: balance`.
- **Lead**: margin-top 36px; max-width 390px; 400 14px / 1.65; `#1A1A1A`.
- **CTA row**: margin-top 34px; flex-wrap, gap 14px.
  - Primary "More details" → smooth-scroll to `#about` (offset −20px). Filled `#F56866`, hover `#E5504E`, white 700 14px text, height 56px, padding 0 26px, min-width 124px, radius 4px, shadow `0 8px 20px rgba(245,104,102,.35)`. Press: `translateY(1px) scale(.98)`.
  - Secondary "Contact us" → smooth-scroll to `#contact`. Filled `#6097F5` (hover base `#4A80E0`), shadow `0 8px 20px rgba(96,151,245,.35)`.
    - **Special hover**: while hovering/focusing the secondary button its bg becomes `#1A1A1A` with shadow `0 8px 20px rgba(0,0,0,.18)` AND Feature Card 1 slides away (see below).

### 4. Feature cards (asymmetric)
Wrapper: `margin-top: clamp(-24px, calc(560px - 100vw), 44px)` — on desktop the top card **overlaps the bottom ~half of the CTA row** (its top edge crosses the "Contact us" label; first letters "Võtke"/"Связ" remain readable). Column flex, gap 13px, full container width.
- **Card 1 (white glass)** — `position:relative; z-index:2`; width `max(calc((100% - 13px)/2), min(100%, 280px))` (= same width as bottom cards).
  - Rest: `margin-left: clamp(0px, calc(100% - 410px), 280px)` (≈280px on desktop, 0 on mobile).
  - When secondary CTA hovered: `margin-left: calc(100% - <card width>)` → aligns right, exactly above Card 3.
  - Transition: `margin-left 900ms cubic-bezier(.2,.7,.2,1)`.
- **Cards 2 (red tint) + 3 (blue tint)**: grid `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`, gap 13px.
- Card style: padding 28px 20px 26px; radius 10px; `backdrop-filter: blur(14px)`; border 1px `rgba(255,255,255,.7)`; shadow `0 6px 24px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04)`; hover lift −2px + shadow `0 14px 40px rgba(0,0,0,.12)` (400ms).
  - Backgrounds: white `rgba(255,255,255,.72)`, red `rgba(250,229,228,.78)`, blue `rgba(227,236,250,.78)`.
  - Title row: 18px line icon + title, 700 16px / 1.35, gap 8, margin-bottom 18. Body 400 14px / 1.6.
  - Icons (Lucide, outline): Card1 `alarm-clock`, Card2 `users`, Card3 `bus`.

### 5. About (`#about`)
`padding-top: clamp(56px, 9vw, 90px)`; flex-wrap, space-between, gap 40px.
- Left column (flex 1 1 300px, max 450px):
  - H2: 700 `clamp(26px,4vw,31px)` / 1.25, -0.01em.
  - Subtitle: margin-top 12px, 14px, `#5C5C5C`.
  - **Bus animation row** (margin-top 28px, width min(100%,300px), flex, align-items flex-end, gap 10px, aria-hidden):
    - Left: house **with door** `house1.svg`, 26×26, colored `#F56866` (use as CSS mask).
    - Middle track: flex 1, height 26, relative. Bus `icon3.svg` 34×20, color `#1A1A1A`, absolute, bottom 2px.
    - Right: house **without door** `house2.svg`, 26×26, `#6097F5`.
    - Loop 9 s infinite (WAAPI/CSS keyframes), `transform` uses `perspective(200px) rotateY()` for the U-turn:
      - 0% left 0, rotY 0 → (ease `cubic-bezier(.45,0,.25,1)`) → 36% left `calc(100% - 34px)`
      - 36–44% hold at right
      - 44→50% rotateY 0→180° (ease-in-out) — turning around
      - 50→86% drive back to left 0
      - 86–94% hold at left
      - 94→100% rotateY 180→360°
    - Reduced motion: static.
  - Paragraph: margin-top 28px; 14px / 1.7; starts with **A-Mežtrans** in bold.
- Right: `assets/site/mersik.png` (cut-out red coach, transparent bg), width 330 max 100%, aspect 1, `object-fit: contain`, margin `-30px 0 -40px`. No frame/radius.

### 6. Steps
`padding-top: clamp(56px, 9vw, 80px)`. H2 + subtitle as above.
Grid margin-top 50px: `repeat(auto-fit, minmax(min(100%, 160px), 1fr))`, gap 36px 40px (4 → 2 → 1 columns).
Each step: numeral 300 40px/1 (1 & 3 `#F56866`, 2 & 4 `#6097F5`); gap 12; title 700 16px; body 14px / 1.6. No cards, lines or arrows.

### 7. Stripe divider
margin-top 48px; full-bleed: 6px `#F56866` directly over 6px `#6097F5`.

### 8. Contact (`#contact`)
Padding `clamp(48px,7vw,66px) 0 clamp(56px,9vw,90px)`. H2 + subtitle (max 420px).
Margin-top 52px, column:
- `+372 502 9918` → `tel:+3725029918`, 700 20px/1.3, `#1A1A1A`, no underline.
- `aleksandr@a-meztrans.ee` → `mailto:`, same style, margin-top 6.
- Address, margin-top 26, 14px `#5C5C5C`.
(No contact form — intentionally removed.)

### 9. Footer
Bg `#1A1A1A`. Inner container padding 24px 0; flex-wrap, space-between, center, gap 16px 40px.
- Left: tagline 14px `#B8B8B8` — **hidden ≤600px**.
- Right (flex-wrap, gap 4px 16px, 500 14px/1.6 `#B8B8B8`, may wrap on mobile):
  - `© A-MežTrans OÜ 2026`
  - `Designed by ` + link **Mežennõi** → `https://sanya-boss.github.io/cv.html` (new tab, `rel="noopener"`), white 700, hover `#F7A9A8`.

## Interactions & Behavior summary
- Smooth scroll for CTAs (no scroll-jacking).
- Language switch: updates all copy, `<html lang>`, meta description; persist in `localStorage['ameztrans-lang']` (default `et`). For production consider real routes `/`, `/ru`, `/en` (original site uses these) with hreflang.
- Focus: `outline: 2px solid #6097F5; outline-offset: 2px` on `:focus-visible`.
- Secondary CTA hover/focus → button black + Card 1 slides right (900ms).
- Stamp ring rotation 40 s; bus loop 9 s; both off under `prefers-reduced-motion`.

## State
- `lang: 'et' | 'ru' | 'en'`
- `contactHover: boolean`

## Copy (all three languages)
Complete strings live in the `I18N` object at the top of the `<script data-dc-script>` block in `landing.dc.html` (keys: heroTitle, heroLead, more, contact, c1t/c1…c3t/c3, aboutT, aboutSub, aboutBody, busAlt, stepsT, stepsSub, s1t/s1…s4t/s4, contactT, contactSub, address, tagline, homeAria). Estonian is from the live site a-meztrans.ee; RU and EN are translations made for this design — check against the client's existing /ru and /en pages if exact wording matters.

## Design tokens
Full set in `_ds/.../tokens/*.css`. Key values:
- Red 500 `#F56866` · 600 `#E5504E` · 700 `#C63D3B` · 300 `#F7A9A8` · 100 `#FAE5E4`
- Blue 500 `#6097F5` · 600 `#4A80E0` · 700 `#3767C0` · 100 `#E3ECFA`
- Ink 800 `#1A1A1A` · 500 `#5C5C5C` · 300 `#B8B8B8` · 50 `#F9F9F9` (page)
- Radii: 2 / 4 / 10px. Blur glass 14px.
- Shadows: card `0 6px 24px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.04)`; float `0 14px 40px rgba(0,0,0,.12)`; red/blue CTA glows above.
- Easing `cubic-bezier(.2,.7,.2,1)`; durations 120 / 200 / 400ms.
- Type: Manrope; sizes used 12, 13, 14, 16, 20, 26–31 (clamp), 40 (step numerals).

## Assets (`assets/site/`)
From a-meztrans.ee (Tilda CDN), recolored where noted:
- `logo-a-red.svg` — logotype, fills inlined (a-disc red, wordmark ink).
- `stamp-bus.svg`, `stamp-ring2.svg` — hero stamp layers, fills inlined.
- `house1.svg` (door), `house2.svg` (no door), `icon3.svg` (bus) — used as CSS masks.
- `mersik.png` — cut-out coach photo (1.5 MB; optimize to WebP/AVIF ~660px for production).
- Card icons: Lucide (`lucide-static` CDN) — install `lucide-react` or similar.

## SEO & social
All tags are in the `<helmet>` of `landing.dc.html` — port them into the framework's head management (per-locale for `/`, `/ru`, `/en`):
- `<title>`, meta description/keywords/robots/theme-color, canonical, `hreflang` alternates (et, ru, en, x-default).
- Open Graph + Twitter `summary_large_image` → `assets/og-image.png` (1200×630, logo on white). Absolute URLs assume `https://www.a-meztrans.ee`.
- JSON-LD `LocalBusiness` (name, phone, email, address, foundingDate 2004).
- Per-language title/description strings: `SEO` map inside `syncDoc()` in the logic class. With real routes, render them server-side (crawlers don't run JS).
- Favicons: `assets/favicon.svg` (primary), `favicon-32.png`, `apple-touch-icon.png` (180), `favicon-192/512.png`; `site.webmanifest`.
- `robots.txt`, `sitemap.xml` (with xhtml:link hreflang) — place at web root.

## Files
- `landing.dc.html` — the design reference (template + logic + I18N).
- `support.js` — prototype runtime (reference only, do not ship).
- `_ds/…` — design-system tokens CSS + compiled component bundle.
- `reference_components/*.jsx` — source of the design-system components used (Button, Icon, FeatureCard, StepCard, StripeDivider, LangSwitch) for exact styles.
