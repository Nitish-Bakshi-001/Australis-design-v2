# Design Prompt — Australis Property Conveyancing Website

> **Paste this whole document into Claude Design.** It is the complete creative brief and design system. Build the design system / tokens first, then the components, then the pages.

---

## 0. The Directive

You are designing the website for **Australis Property Conveyancing**, a boutique Melbourne conveyancing practice led by principal **R.K. Virk**. The site must feel **premium, minimal, modern, and deeply trustworthy** — the kind of restrained, confident design you'd expect from a high-end professional services brand, not a busy template.

This is a **mid-tier professional services lead-capture site**, optimised for Melbourne conveyancing search intent. Every page should move the visitor toward one action: **requesting a free quote / contract review.**

**The bar:** It must visibly outclass the current Melbourne/Sydney/Brisbane conveyancing field (Settle Easy, Pearson Chambers, LEAD, Complete Conveyancing, KRG, Keylaw, etc.). Those sites are functional but cluttered, generic, and dated. We win on **calm, whitespace, refined typography, authentic local imagery, radical fee transparency, and a frictionless quote flow.**

Deliver **high-fidelity, responsive designs (desktop + mobile)** for all six pages, plus a documented design system.

---

## 1. Aesthetic Direction

**Refined / luxury-minimal, with quiet Australian warmth.** Think: a calm, spacious editorial layout; deep navy authority; a single fresh teal accent used like a scalpel, not a paintbrush; large confident headlines; generous negative space; and one or two beautiful Melbourne images doing the emotional work.

Commit to this direction with precision. Minimalism here means **restraint, exceptional spacing, and typographic craft** — not emptiness. Nothing should feel like a stock template.

**One thing people remember:** the sense of *trust through calm* — a navy-and-teal world that feels like the most organised, reassuring conveyancer in Melbourne.

---

## 2. Brand & Positioning

- **Name:** Australis Property Conveyancing
- **Principal:** R.K. Virk (licensed conveyancer)
- **Location / market:** Melbourne, VIC — "Servicing Melbourne & Surrounds"
- **Positioning line / hero promise:** *"Expert Conveyancing You Can Trust."*
- **Four trust pillars** (must appear, matching the existing flyer's design language):
  1. **Experienced & Reliable**
  2. **Personalised Service**
  3. **Attention to Detail**
  4. **Your Property, Our Priority**
- **Commercial angle:** transparent **fixed-fee** positioning + **free quote / free contract review** as the primary conversion hook.
- **Tone:** calm, confident, plain-English, reassuring, local, premium-but-warm. Never salesy or jargon-heavy. Define legal terms in human language.

---

## 3. Colour System

Use CSS variables. Navy dominates, teal is the sharp accent, neutrals carry the whitespace. Do **not** distribute colours evenly — let navy + near-white own ~90% and let teal punctuate.

```
/* Brand — Navy (authority, dominant) */
--ink-navy:        #07203F;   /* darkest — footer, hero overlays, dark sections */
--australis-navy:  #0B2C54;   /* primary brand navy — headings, nav, buttons */
--navy-mid:        #14457E;   /* gradients, hovers, secondary navy */

/* Brand — Reef Teal (the single sharp accent) */
--reef-teal:       #0E9E99;   /* accent: links, icons, CTA, underlines */
--reef-bright:     #16BFB7;   /* hover / highlight only */
--teal-wash:       #E8F6F5;   /* tint backgrounds, icon chips, subtle bands */

/* Neutrals (carry the whitespace) */
--page:            #FCFDFE;   /* primary page background (near-white, faint cool) */
--mist:            #EEF3F5;   /* alternating section background */
--hairline:        #DFE5EA;   /* borders, dividers (1px) */
--charcoal:        #16202C;   /* body text */
--slate:           #56646F;   /* muted text, captions */
--white:           #FFFFFF;

/* Optional warm micro-accent — use VERY sparingly (star ratings, a thin
   underline flourish). Adds "premium southern warmth". Omit if unsure. */
--sand-gold:       #C6A15B;
```

**Usage rules:**
- Primary CTA = `--reef-teal` background, white text; hover → `--reef-bright`.
- Secondary CTA = navy outline or navy fill on light, white outline on dark.
- Teal as a **2–3px accent line** under eyebrows, beside step numbers, on active states.
- Dark sections (hero band, final CTA, footer) = `--ink-navy` / `--australis-navy` with white + teal.
- Never put teal on navy as body text (contrast) — use teal for accents/icons only on dark.

---

## 4. Typography

Avoid generic system fonts. Pair a **refined serif display** with a **clean, characterful sans**.

- **Display / headings:** **Fraunces** (soft, premium, optical serif). *Alt:* Newsreader.
- **Body / UI:** **Geist** (clean, modern, distinctive). *Alt:* Hanken Grotesk.
- **Eyebrows / labels:** Body sans, uppercase, `letter-spacing: 0.14em`, 13px, `--reef-teal` or `--slate`.

**Type scale (desktop → mobile):**

| Token | Desktop | Mobile | Font | Weight | Line-height |
|---|---|---|---|---|---|
| Display / H1 | 60px | 36px | Fraunces | 500 | 1.05 |
| H2 | 40px | 28px | Fraunces | 500 | 1.12 |
| H3 | 26px | 22px | Fraunces | 500 | 1.2 |
| H4 / lead | 20px | 18px | Geist | 500 | 1.4 |
| Body L | 19px | 17px | Geist | 400 | 1.6 |
| Body | 17px | 16px | Geist | 400 | 1.65 |
| Small | 15px | 14px | Geist | 400 | 1.5 |
| Eyebrow | 13px | 12px | Geist | 600 | 1 |

- Headlines: tight tracking, max measure ~14 words per line; let them breathe.
- Body copy measure: **max ~680px** wide for readability.
- Use Fraunces sparingly and large — its serif gravitas is the premium signal.

---

## 5. Layout, Spacing & Form

- **Grid:** 12-col, max content width **1200px**, gutters 24–32px.
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Section vertical padding:** 112–128px desktop, 64–72px mobile. Generous whitespace is the whole point — do not crowd.
- **Corner radius:** buttons 8px; inputs 10px; cards 18px; images/media 20px.
- **Borders:** 1px `--hairline`. Prefer hairlines + whitespace over boxes/shadows.
- **Shadows (very soft, rare):**
  `--shadow-sm: 0 1px 2px rgba(7,32,63,.06);`
  `--shadow-md: 0 12px 32px rgba(7,32,63,.08);`
- **Composition:** mostly clean and aligned, but introduce a few intentional moments — an asymmetric hero split, a number/eyebrow offset, an image bleeding to one edge. Calm, not flat.

---

## 6. Imagery & Art Direction

- **Hero & key imagery:** authentic, premium **Melbourne** photography — skyline (Yarra/Flinders Street/Docklands), elegant residential streetscapes, keys/handover, a real-feeling principal portrait. No cheesy stock handshakes or gavel clichés.
- **Treatment:** apply a subtle **navy → teal duotone** or a soft navy gradient overlay so images sit inside the palette rather than fighting it. Warm, natural, high-quality.
- **Use placeholder images with clear alt/intent labels** (e.g. "Melbourne skyline at dusk, navy duotone") so they can be swapped for licensed/real shots later.
- **Iconography:** thin-line, 1.5px stroke, rounded caps, single-colour `--reef-teal` or `--australis-navy`, often inside a `--teal-wash` rounded chip. Consistent set across the site.
- **Texture/atmosphere:** allowed but whisper-quiet — a faint grain on dark sections, a soft radial glow behind the hero. Never busy.
- **Trust badges:** licence number, AIC (Australian Institute of Conveyancers) membership, PEXA member, Google rating/stars — designed as refined monochrome lockups, not loud logos.

---

## 7. Motion

- **Page load:** one orchestrated, staggered reveal in the hero (fade + 12px rise, 60ms stagger). High impact, restrained.
- **Scroll:** gentle fade-up (8–16px) as sections enter; subtle, never bouncy.
- **Hover:** buttons lift 1–2px + colour shift; cards raise shadow slightly; links draw a teal underline.
- **Timing:** 200–280ms, `ease-out`. Respect `prefers-reduced-motion`.

---

## 8. Core Components

- **Top nav (sticky):** logo left; links — About, Services, Process & Pricing, Resources, Contact; click-to-call phone; primary CTA **"Get a Free Quote."** Transparent over hero → solid white with hairline on scroll. Mobile: clean slide-in drawer.
- **Buttons:** Primary (teal fill), Secondary (navy outline / white outline on dark), Tertiary (text + teal arrow). Clear 44px+ tap targets.
- **Trust-pillar card:** teal line-icon in a wash chip, bold short title, one line of support copy. 4-up desktop, 2-up tablet, stacked mobile.
- **Service card:** icon chip, service name (Fraunces H3), 1–2 line description, "Learn more →".
- **Process step:** large outline numeral, teal connector line, icon, title, short copy. Horizontal timeline desktop → vertical mobile.
- **Testimonial:** quote, name, Melbourne suburb, star rating (sand-gold or teal stars). Carousel or 2–3 static cards.
- **FAQ accordion:** hairline rows, teal +/− indicator, smooth expand. Grouped by category.
- **CTA band:** recurring navy/ink section with a Fraunces headline, one line, and the primary CTA. Appears at the foot of most pages.
- **Footer:** ink-navy. Columns — brand + short blurb + socials; quick links; services; contact (phone, email, WhatsApp, address). Bottom strip: licence no., ABN, AIC/PEXA badges, "Liability limited by a scheme…", copyright.

---

## 9. Page-by-Page Specifications

### 1) Home
Order of sections:
1. **Hero** — asymmetric split. Left: eyebrow ("Melbourne Property Conveyancing"), H1 **"Expert Conveyancing You Can Trust,"** one-line subhead (calm, fixed-fee, local), dual CTA (**Get a Free Quote** / **How it works**), and a thin trust micro-row (Licensed Conveyancer · AIC Member · PEXA · ★ rating). Right: Melbourne skyline image with navy/teal duotone. Optional: a small floating "Free contract review in 48 hrs" chip.
2. **Trust pillars** — the 4 pillars as cards (match flyer language).
3. **Services overview** — 6-service grid (3×2) previewing the Services page.
4. **Process snapshot** — 3–4 step mini-timeline → links to Process & Pricing.
5. **Fixed-fee / transparency band** — confident statement on transparent pricing + free quote CTA.
6. **Testimonials** — 2–3 with suburbs + stars.
7. **About R.K. Virk teaser** — portrait + short bio + credentials → links to About.
8. **Final CTA band** (navy).
9. **Footer.**

### 2) About R.K. Virk
- Hero: eyebrow, name + title, refined portrait.
- Professional bio narrative; experience; what drives the practice.
- **Credentials panel:** licence number, AIC membership, PEXA member — designed as a clean credential lockup.
- **Values** as cards (tie back to the 4 pillars).
- **Melbourne service commitment** — short statement + "Servicing Melbourne & Surrounds" with a map or suburb list.
- CTA band → footer.

### 3) Services
- Short intro hero.
- **Six service blocks**, each: icon chip, title (Fraunces), description, a short "what's included" list, and a quote CTA. Use a uniform card grid or gentle alternating left/right layout for premium rhythm:
  1. Residential Conveyancing
  2. Commercial Conveyancing
  3. Buying / Selling / Transfers
  4. Contract Review & Advice
  5. Off-the-Plan & Subdivisions
  6. First Home Buyers & Investors
- "Why choose Australis" trust reinforcement strip.
- CTA band → footer.

### 4) Process & Pricing
- **"How Conveyancing Works"** — a beautiful step-by-step explainer (numbered, teal-connected timeline). Suggested steps: 1 Enquiry & free quote → 2 Contract / Section 32 review → 3 Pre-settlement checks & searches → 4 Settlement → 5 Post-settlement. Plain-English copy per step.
- **Transparent pricing** — fixed-fee positioning. A clean "What's included / What can affect your fee" panel (avoid hard numbers if the client prefers quote-based; emphasise no hidden surprises). Prominent **Get a Free Quote** CTA.
- Short FAQ teaser (3–4 questions) → links to Resources/FAQ.
- CTA band → footer.

### 5) Resources / FAQ
- **FAQ accordion**, grouped for SEO: **Buying · Selling · Costs & Stamp Duty (VIC) · General.** Answer common buyer/seller questions in plain English. Must support **FAQPage schema**.
- **Optional Resources/blog grid** — cards for "First Home Buyer Guide," "Stamp Duty in VIC," etc. (CMS-driven, lightweight).
- Optional lead-magnet / "get the guide" capture.
- CTA band → footer.

### 6) Contact
- **Quote-request form is the hero of this page** (see §10).
- Contact methods: **click-to-call**, email, **WhatsApp click-to-chat** (sticky WhatsApp button site-wide).
- **Google Maps** embed of the Melbourne office + "Servicing Melbourne & Surrounds" coverage note.
- Areas served list + office hours.
- Footer.

---

## 10. The Quote-Request Form (key differentiator)

Design this as a **calm, premium multi-step (or smartly conditional) form** — the smoothest quote flow in the market.

- **Step 1 — "I am…":** segmented control → **Buying · Selling · Transferring.**
- **Conditional fields** by path (e.g. Buying → property address, purchase price range, finance status; Selling → property address, agent; Transferring → transfer type). Only show what's relevant.
- **Then:** name, email, phone, preferred contact method, optional message.
- **UX:** progress indicator, inline validation, clear focus states (teal ring), generous spacing, large tap targets, reassuring micro-copy ("Free, no obligation. We reply within 24 hours."), a privacy line.
- **Success state:** warm confirmation + what happens next + click-to-call fallback.
- Make it feel effortless and trustworthy — this is where we beat Settle Easy & co.

---

## 11. Functional & Technical Requirements

- **Mobile-first responsive** (design mobile + desktop; tablet graceful).
- Quote-request form with **conditional fields** (buying / selling / transferring).
- **WhatsApp click-to-chat + email + click-to-call** (persistent, accessible).
- **Google Maps** integration with "Servicing Melbourne & Surrounds."
- **Schema markup:** LegalService / ProfessionalService, LocalBusiness, FAQPage.
- **Lightweight CMS** for FAQ and Resources updates (design with editable content blocks in mind).
- **Performance:** speed-optimised, Core Web Vitals targets (lightweight assets, lazy-loaded imagery).
- Trust-pillar layout must **match the existing flyer's design language.**

---

## 12. Accessibility & Quality Bar

- **WCAG 2.1 AA:** text contrast ≥ 4.5:1 (check teal-on-white for small text; darken to `--reef-teal` or use navy for body links).
- Visible **focus states** (teal ring) on all interactive elements.
- Full keyboard navigation; semantic headings; descriptive alt text; labelled form fields.
- Honour `prefers-reduced-motion`.

---

## 13. Voice & Copy Direction (for placeholder copy)

Write all placeholder copy in this voice: **calm, confident, plain-English, local, reassuring.** Short sentences. Lead with the client's benefit and peace of mind. Use "you/your." Translate legal terms into everyday language. Emphasise: experienced & personal service, fixed-fee transparency, no surprises, fast updates, Melbourne-local.

---

## 14. What to Deliver

1. A documented **design system** (tokens above: colour, type, spacing, components).
2. **High-fidelity responsive designs** (desktop + mobile) for all **6 pages** in the order specified.
3. The **conditional quote form** fully designed across its states.
4. All recurring components (nav, footer, CTA band, cards, accordion) shown in context.

**Hold the line on the aesthetic:** premium, minimal, navy + reef teal, generous whitespace, refined Fraunces/Geist type, authentic Melbourne imagery, teal used sparingly. Every screen should feel like the most trustworthy, well-organised conveyancer in Melbourne — and unmistakably better than the competition.
