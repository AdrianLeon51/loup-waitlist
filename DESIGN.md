---
version: alpha
name: LOUP
description: Calm, editorial circular-fashion identity for a Lisbon-first platform that helps premium brands and boutiques go circular. Deep forest ink on warm ivory, square editorial photography doing the colour work, forest pills as the only call to action, and an asymmetric magazine composition. Palette and fonts are LOUP's own (src/input.css); structure, contrast handling, type sizing and placement are synthesised from the Farfetch and Nudea extractions in packless/design-extract.
# METHOD NOTES
# - Colours: unchanged from the live @theme block in src/input.css. Keys below map 1:1 onto those --color-brand-* tokens.
# - Fonts: unchanged (Syne + Space Grotesk, Google Fonts). Only sizes, weights, casing, tracking and placement are new.
# - References: D:\Websites\packless\design-extract\farfetch\DESIGN.md (F) and ...\nudea\DESIGN.md (N).
#   Every structural rule below names its source with (F), (N) or (F+N).
# - Contrast ratios are WCAG 2.x, computed from the hex tokens.
# - Audience: premium brands and boutiques going circular through whichever model fits them (rental, try before you buy, resale, take-back or their own). Their customers are secondary.
colors:
  # --- surfaces -----------------------------------------------------------
  surface: "#FAF7F1"                # brand-ivory. Page canvas (N "cotton" role). Never pure white as the page
  surface-bright: "#FFFFFF"         # form field well only, one step lighter than the page (F tonal layering)
  surface-container: "#F1ECE1"      # brand-panel. Contained inset panel, one per page (F "How it works" panel)
  on-surface: "#1E3A2C"             # brand-forest. All ink and icons, 11.57:1 on ivory (F "ink, never black")
  on-surface-variant: "#5C7566"     # brand-sage. Muted copy, eyebrows, idle tabs. 4.69:1 on ivory, 5.01:1 on white; 4.25:1 on panel → large text only there
  outline: "#1E3A2C"                # 1px stroke on outline pills and the waitlist field
  outline-variant: "#E2DDCE"        # brand-outline. Hairlines and tab tracks only, 1.27:1 — never text
  on-media: "#FAF7F1"               # text and outline pills set over photography (N)
  scrim: "rgba(30, 58, 44, 0.4)"    # forest at 40% behind on-media text when the photo is not dark enough (F scrim pattern)
  # --- actions ------------------------------------------------------------
  primary: "#1E3A2C"                # brand-forest. The only CTA fill (F: CTA is ink, no accent)
  on-primary: "#FAF7F1"             # ivory on forest, 11.57:1
  primary-hover: "#12241B"          # brand-forestDeep. Hover goes deeper and calmer, never brighter; ivory 15.18:1
  # --- colour blocks (full-bleed, flush, max two kinds per page) ----------
  block-dark: "#1E3A2C"             # announcement bar + footer: the page opens and closes in forest (N brick bookends)
  block-dark-soft: "#2F5241"        # brand-forestSoft. Inner panels/hover inside forest blocks; ivory 8.17:1
  on-block-dark: "#FAF7F1"
  on-block-dark-muted: "rgba(250, 247, 241, 0.7)"  # secondary footer text (live footer pattern)
  outline-on-dark: "rgba(250, 247, 241, 0.16)"     # brand-outlineOnDark. Hairlines inside forest blocks
  block-mid: "#5C7566"              # brand-sage as one full-bleed block (N olive role)
  on-block-mid: "#FAF7F1"           # ivory on sage, 4.69:1 — keep text ≥16px
  # --- status (reserved, forms only) --------------------------------------
  error: "#9B2C1F"                  # form validation only. 7.08:1 on ivory. = --color-brand-error in src/input.css
typography:
  # Display sizes step by breakpoint (N), not fluid clamp. Mobile values in comments apply at ≤768px.
  display-lg:
    # hero h1. Mobile 36/40
    fontFamily: Syne
    fontSize: 56px
    fontWeight: "600"
    lineHeight: 60px
    letterSpacing: -0.02em
  display-md:
    # statement + closing waitlist heading. Mobile 28/34
    fontFamily: Syne
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    # section headings. Mobile 22/28
    fontFamily: Syne
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.01em
  title-md:
    # step titles, "Why LOUP" rows, FAQ questions. Mobile 18/26
    fontFamily: Syne
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.01em
  wordmark:
    # "LOUP." logo in the header (existing .logo-text treatment kept)
    fontFamily: Syne
    fontSize: 30px
    fontWeight: "800"
    lineHeight: 30px
    letterSpacing: -0.04em
  body-lg:
    # hero sub-copy, ~48ch. Mobile 17/26
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    # running copy, ≤65ch
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-caps:
    # eyebrows, tabs, footer column heads — uppercase (keeps the live .eyebrow tracking)
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.16em
  button:
    # CTA labels, sentence case. The only 600-weight Grotesk on the page (F: bold only on buttons)
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.02em
  caption:
    # announcement bar, trust line, legal, image credits
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 18px
rounded:
  none: 0px        # photos, panels, colour blocks, footer, tabs (F+N)
  card: 10px       # reserved for future garment / partner cards only (N product cards)
  full: 999px      # every button and the waitlist field (N pills)
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 24px          # default gap inside components (F 24px)
  lg: 48px          # header → hero; block-internal padding
  section: 96px     # standard beat between content sections
  section-break: 160px  # the one deliberate double break, before the closing waitlist (F 72→144)
  page-inset: 48px      # desktop side margin (live md:px-12)
  page-inset-mobile: 24px
  page-max-width: 1536px  # live max-w-screen-2xl
  editorial-indent: 1col  # ~100px at 1440: statement and section copy start one column in (N 100px indent)
  header-height: 88px     # (N)
  announcement-height: 32px
  hero-copy-width: 480px  # (F 484px)
  statement-width: 940px  # (N)
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-outline:
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 0 20px
  button-outline-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-on-media:
    textColor: "{colors.on-media}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 0 20px
  waitlist-field:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 56px
    padding: 0 4px 0 24px
  announcement-bar:
    backgroundColor: "{colors.block-dark}"
    textColor: "{colors.on-block-dark}"
    typography: "{typography.caption}"
    height: 32px
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    height: 88px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    height: 44px
    padding: 0 12px
  eyebrow:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-caps}"
  tab-active:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    height: 44px
  tab-idle:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-caps}"
    height: 44px
  hero-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-lg}"
  statement:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-md}"
    width: 940px
  step-title:
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
  sage-block:
    backgroundColor: "{colors.block-mid}"
    textColor: "{colors.on-block-mid}"
    typography: "{typography.title-md}"
  inset-panel:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
  faq-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    height: 72px
  footer:
    backgroundColor: "{colors.block-dark}"
    textColor: "{colors.on-block-dark}"
    typography: "{typography.body-md}"
  footer-heading:
    textColor: "{colors.on-block-dark}"
    typography: "{typography.label-caps}"
  caption:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.caption}"
motion:
  duration-link: 150ms                                    # (F functional-s)
  duration-control: 300ms                                 # buttons, tabs, nav (F functional-m, N 0.3s)
  duration-reveal: 600ms                                  # scroll reveal (N, shortened from 1s)
  easing-link: cubic-bezier(0.66, 0, 0.2, 1)              # (F functional standard)
  easing-control: cubic-bezier(0, 0, 0, 1)                # (F functional decelerated)
  easing-reveal: cubic-bezier(0, 0, 0.3, 1)               # (N ease-out-slow)
  reveal-distance: 16px
  header-hide: transform 0.2s ease-in-out                 # (F sticky header)
  reduced-motion: none                                    # prefers-reduced-motion disables reveals and header slide
---

## Brand & Style

LOUP is a Lisbon-first circular-fashion platform. This page speaks first to
**premium brands and boutiques** that want to put their pieces into
circulation, whether through rental, try before you buy, resale, take-back
or a model of their own, and second to the customers who rent, try, buy or
return through them. It has to feel
curated, trustworthy, modern and calm. The brief's test applies to every
section: does it feel high-quality and trustworthy, does it support a more
sustainable use of fashion, and does it feel connected to Lisbon?

The redesign keeps LOUP's own palette and typefaces and borrows *structure*
from two references:

- **Farfetch (F)** gives the restraint: the interface is a gallery wall and
  the photography is the art. The UI is near-monochrome ink on a light page,
  the CTA is ink-coloured, there are no shadows, headings are in sentence
  case at a quiet weight, and sections use asymmetric splits with one
  deliberate double gap.
- **Nudea (N)** gives the warmth: a warm off-white page, earthy full-bleed
  colour blocks that bookend the scroll and touch their neighbours, outlined
  pills, copy anchored off-centre against images, and display type that
  steps down by breakpoint.

The result reads like a slow fashion magazine with a clear business
proposition, not a startup landing page. Personality comes from
composition and photography. It does not come from decoration.

## Colors

The hex values are unchanged from `src/input.css`. What changes is the
**role** each colour plays. Both references keep the interface almost
colourless and let the photos carry colour, and LOUP follows that rule.

- **Ivory `#FAF7F1`** (`brand-ivory`) is the page. It plays the role of
  Nudea's cotton `#fbfaf2`, which is nearly the same value. Pure white
  `#FFFFFF` appears only inside the waitlist field, a single tonal step up
  (F tonal layering).
- **Forest `#1E3A2C`** (`brand-forest`) is the ink for all text, icons and
  strokes, and the **only** CTA fill. It plays Farfetch's `#222` role: a
  dark that is never black. On ivory it reaches 11.57:1.
- **Forest deep `#12241B`** is the hover state for primary buttons. Like
  Farfetch's CTA, the hover changes value rather than hue, but LOUP goes
  *deeper*, not lighter, to stay calm and keep contrast (15.18:1).
- **Sage `#5C7566`** (`brand-sage`) does two jobs:
  1. Muted text, eyebrows and idle tabs (F `#727272` role). It reaches
     4.69:1 on ivory and 5.01:1 on white. **On the panel it drops to
     4.25:1**, so inside the panel, small text is forest and sage is only
     for text 24px and up.
  2. The page's one mid-tone **full-bleed colour block** (N olive role),
     with ivory text at 4.69:1. Keep that text at 16px or larger.
- **Panel `#F1ECE1`** (`brand-panel`) is used once, as a contained inset
  panel (F `#f5f5f5` "How it works" panel). It is never full-bleed.
- **Outline `#E2DDCE`** (`brand-outline`) is for hairlines, dividers and
  tab tracks. At 1.27:1 it is never used for text or for a control's only
  boundary.
- **Forest as a block**: the announcement bar opens the page in forest and
  the footer closes it in forest, the way Nudea opens and closes with
  brick. `#2F5241` (`brand-forestSoft`) is only for surfaces inside those
  blocks.

### Colour-blocking rules (N)
- There are at most two kinds of colour block on a page: forest (bar and
  footer) and sage (one section). Both are full-bleed and flush, with 0px
  gap to their neighbours.
- No accent colour gets invented for CTAs, badges or highlights (F).
- No gradients, glows or tinted overlays. The old theme `glow` and `grid`
  layers stay deleted.

### Imagery and colour (F+N)
Photography is the only place where colour is saturated. Both references
depend on it: Farfetch's burgundy and ochre and Nudea's skin tones and
velvet greens come from the photos, not the CSS.

- **Palette of the photos**: warm and desaturated, in linen, stone,
  plaster, oat, olive and tobacco tones that sit naturally on ivory. The
  current `hero.jpg` (a model in linen against a plaster wall) is exactly
  right. Avoid cool blue casts, neon and studio-white sweeps.
- **Light**: natural, side-lit, with soft shadows. Film-like grain is
  welcome (N).
- **Text over photography** uses `on-media` ivory and sits in a dark, calm
  area of the frame. If the photo cannot give enough contrast (4.5:1 for
  text), add a local `scrim` gradient-free fill of forest at 40% behind the
  copy block only. Never tint the whole image.
- **Assets**: four free Unsplash photos (hero, inset, block, detail), credited
  in `assets/images/CREDITS.md`. They are cropped to 4:5 (detail 1:1) and
  served as WebP `srcset` with one JPEG fallback per slot. The OG/Twitter
  image is a 1200×630 crop of the boutique interior (`og-1200x630.jpg`).
  Originals live in the git-ignored `assets/images/src/`.

## Typography

Both families stay: **Syne** for display and headings, **Space Grotesk**
for body and UI. The references change *how* they are used.

- **Quieter weight (F)**: Syne headings drop from 700/800 to **600**. Only
  the "LOUP." wordmark keeps 800. Farfetch proves a luxury page doesn't
  need heavy headlines; hierarchy comes from size and space.
- **Sentence case (F)**: "Premium fashion, circular by design." Never use
  title case, and only eyebrows, tabs and footer heads are uppercase.
- **Bold is for buttons (F)**: Space Grotesk is 400 everywhere, 500 on
  label-caps, and 600 only on button labels.
- **Tracking (N)**: proportional. Syne display gets −0.02em. Uppercase
  labels get +0.16em (keeping the live `.eyebrow`). Body text gets none.
- **Stepped, not fluid (N)**: display sizes change at one breakpoint
  (768px) instead of using `clamp()`, so line breaks stay designed.

| Token | Desktop | ≤768px | Use |
|---|---|---|---|
| display-lg | Syne 600 56/60 | 36/40 | hero h1 |
| display-md | Syne 600 36/44 | 28/34 | statement, closing heading |
| headline-md | Syne 600 24/32 | 22/28 | section headings |
| title-md | Syne 600 20/28 | 18/26 | step titles, list rows, FAQ |
| body-lg | Grotesk 400 18/28 | 17/26 | hero sub-copy |
| body-md | Grotesk 400 16/24 | 16/24 | running copy |
| label-caps | Grotesk 500 12/16 +0.16em UPPER | same | eyebrows, tabs, footer heads |
| button | Grotesk 600 14/20 +0.02em | same | CTAs |
| caption | Grotesk 400 13/18 | same | bar, trust line, legal |

**Emphasis.** Nudea emphasises key words with a light italic, and its
press ticker fades inactive names to 20%. LOUP adapts this without adding
a typeface: the *secondary clause* of a display line is set in sage and
the primary clause in forest ("Premium fashion, **circular by design.**").
Use it at most once per section. It is never italic, never a third colour,
and never used on body text.

**Measure.** Hero copy is about 48ch (F), body copy is 65ch at most, and
the statement is 940px wide (N).

## Layout & Spacing

- Max width **1536px**, page inset **48px** (24px at ≤768px), 12 columns
  with 24px gutters.
- **Editorial indent (N)**: statement and section copy start one column in
  (about 100px at 1440). Commerce elements (forms, tabs, rows) hug the page
  inset.
- The spacing scale is 4 / 8 / 12 / 24 / 48. Components use 24px gaps
  inside (F).
- Sections are separated by **96px**, broken **once** with **160px**
  before the closing waitlist. That gap marks the switch from "the pitch"
  to "the ask" (F 72→144). Colour blocks touch their neighbours with **0px**
  (N).

### Composition

The page is deliberately irregular. Every section has its own split,
image scale and text anchor. Don't normalise them. Values are for
1440×900.

| # | Section | Split | Primary media | Copy placement | Background | Source |
|---|---|---|---|---|---|---|
| 0 | Announcement bar, 32px | centred | — | caption "Opening soon in Lisbon · for premium brands & boutiques" (no dates) | forest | N brick bar |
| 1 | Header, 88px, sticky | wordmark left · nav, PT toggle, outline pill "Join" right | — | — | ivory | F sticky header that hides on scroll down |
| 2 | Hero | copy 40% · image 56%, image **flush to the right viewport edge** | large 4:5 portrait, square corners, about 800px wide | 480px column, **left-aligned and anchored low**: its bottom lines up with the image's lower third. Eyebrow → h1 → body-lg → waitlist field → trust caption | ivory | F split + N off-centre anchoring |
| 3 | Statement | single block at the editorial indent | — | display-md, 940px, sage secondary clause | ivory | N brand statement |
| 4 | How it works | model tabs (Rental · Try before you buy · Resale · Take-back · Your model), then **25/75** | small 4:5 inset image, about 340px | 3 numbered step columns (title-md + body-md), top-anchored, starting about 120px below the tab row | ivory | F rewards tabs + 25/75 grid |
| 5 | Why LOUP | **full-bleed 50/50**, photo flush right | tall portrait, 720px+ | 3–4 title-md rows with ivory hairlines (`outline-on-dark` equivalent at 24%), left at the editorial indent, vertically centred | **sage block**, flush | N olive Bra Styles panel |
| 6 | Standards and trust | contained panel inside the page inset, **57/37** | optional garment-detail crop **rising from the panel's bottom edge**, `object-fit: contain` | copy in the right column, top-aligned 72px in, sitting high against the image | panel `#F1ECE1` | F "How it works" panel |
| 7 | FAQ | full width | — | 72px rows, question left, +/− right, `#E2DDCE` hairlines | ivory | F member-support rows |
| 8 | Closing waitlist, after the **160px** break | **50/50** | — | display-md heading left, waitlist field right, both starting on the same baseline | ivory | F newsletter block |
| 9 | Footer | 3 link columns + a giant "LOUP." wordmark watermark in `#2F5241` | — | label-caps heads, body-md links, caption legal | forest, flush | N footer + live footer |

### Image size families
Each section uses a different scale and shape on purpose (F+N):
- **Hero**: a large 4:5 portrait, about 56% of the container, bleeding to
  the viewport edge.
- **Inset**: a small 4:5 portrait, about 25% of the container (F rewards
  inset).
- **Block portrait**: half the viewport, full height of the sage block
  (N olive panel).
- **Detail crop**: a garment texture or label, contained, cropped by the
  panel edge (F device mock).
- **Future cards**: 4:5 with a 10px radius, in partner and garment grids
  only (N product cards).

### Text placement
- Copy is almost never centred against its image. It is anchored **low**
  (hero), **high** (standards panel), **starting below** the tabs (how it
  works), or **vertically centred in a colour block** (why LOUP).
- Centred text is reserved for small moments: the announcement bar and any
  single-line card label. This differs from Farfetch's centred hero,
  because a B2B ask with a form reads better left-aligned.
- Everything else is left-aligned (`start`).

### Responsive recomposition (≤768px)
- **Hero**: the image moves **above** the copy at full content width, 4:5,
  and the waitlist field stacks with a full-width button.
- **Display type** steps down to 36px (h1) and 28px (statement).
- **Tabs**: the tablist is hidden and every model panel stacks under its own
  label-caps heading, so nothing is behind a tap.
- **Header**: the "Circular fashion · Lisbon" descriptor is hidden below 640px.
- **Sage block**: the image goes on top, then the rows, still full-bleed.
- **Panel**: the detail crop is dropped, as Farfetch drops its device mock.
- **Section beat**: 72px, with 112px before the closing waitlist.
- **Inset**: 24px.

## Elevation & Depth

Flat. **No box shadows anywhere** (F+N), so the old `--shadow-brand` and
`--shadow-brand-sm` tokens are not used by redesigned pages. They are deleted
from `src/input.css` once every page has migrated. Depth comes from:
- **tonal layering**: ivory page → `#F1ECE1` panel → white field;
- **full-bleed colour blocks** against ivory;
- **photography** and a detail crop rising out of the panel edge.

The sticky header has no shadow. It separates from content with a 1px
`#E2DDCE` hairline that appears once the page scrolls.

## Motion

Two quiet families, both with an off switch:

- **Functional (F)**:
  - links change colour and underline over **150ms** on
    `cubic-bezier(0.66, 0, 0.2, 1)`;
  - buttons, tabs and nav change over **300ms** on
    `cubic-bezier(0, 0, 0, 1)`, so state changes feel immediate but soft.
- **Reveal (N, softened)**: section headings and images fade in and rise
  **16px** over **600ms** on `cubic-bezier(0, 0, 0.3, 1)`, once per
  element, triggered at 15% visibility. Nothing staggers word by word.
- **Header**: hides on scroll down and returns on scroll up, using
  `transform 0.2s ease-in-out` (F).
- **`prefers-reduced-motion: reduce`** turns off reveals and the header
  slide. Colour transitions stay.
- No parallax, marquees, auto-carousels, or `active:scale-95` button press.

## Shapes

Two shape languages, as in Nudea, each with a clear job:
- **Square, 0px**: every photograph, panel, colour block, tab, FAQ row and
  the footer (F+N). Editorial content is architectural.
- **Pill, 999px**: every button and the waitlist field (N). This is the
  "subtle rounded shape" the brand brief asks for, and it marks everything
  you can interact with.
- **10px**: reserved for future garment and partner cards (N product
  cards). Nothing on the waitlist page uses it.

The old `--radius-brand` (8px) and `--radius-xl-brand` (20px) are not used by
redesigned pages and are deleted once every page has migrated.
Strokes are 1px; tab indicators are 2px.

## Components

### Buttons
- **Primary**: forest pill, ivory 14px/600 label, 48px tall, 0/28px
  padding. Hover → `#12241B` over 300ms on the control easing. Focus
  shows a 2px forest outline with a 3px offset (`:focus-visible` only).
- **Outline**: transparent with a 1px forest stroke, 40px tall, 0/20px
  padding. Hover fills forest and turns the label ivory (N). Used for the
  header "Join" and for secondary actions.
- **On-media**: the same outline pill in ivory, used over photography.

### Waitlist field
A white pill, 56px tall, with a 1px forest stroke. The email input sits on
the left (body-md, 24px left padding) and the primary button is **inset
4px inside the pill** on the right. On mobile it becomes two stacked pills
(field, then a full-width button).
- **Focus-within**: the stroke thickens to 2px. No ring glow.
- **Error**: a caption under the field in `error` `#9B2C1F`
  (`--color-brand-error`).
- The trust caption below it has a lock icon and sage text.

### Announcement bar
32px forest strip with a centred ivory caption. It can rotate up to two
messages with a 250ms slide (N), and stays static under reduced motion.

### Header
88px on ivory, with the wordmark (Syne 800, −0.04em) and the label-caps
sage descriptor "Circular fashion · Lisbon" under it. On the right are nav
links (14px/600, 44px hit area), the PT toggle, and the outline "Join"
pill.

### Tabs (F)
Label-caps text, 44px tall, sitting on a 1px `#E2DDCE` track. The active
tab is forest with a 2px forest indicator; idle tabs are sage. There is no
fill and no pill. Below 768px the tablist is hidden and every panel shows,
stacked, under a label-caps heading (`.l-tab-heading`).

### Step columns
A label-caps number ("01"), then title-md, then body-md at 43ch or less,
with 24px between columns.

### Why LOUP rows (on sage)
Title-md ivory rows, 80px tall, separated by ivory hairlines at 24%, with
an optional one-line body-md description. They are not links unless they
navigate.

### FAQ rows (F)
72px, full width, title-md question with a +/− icon on the right and
`#E2DDCE` dividers. The answer expands with body-md at 65ch or less. Use a
native `<details>` element.

### Footer
Full-bleed forest block (N). Three columns with label-caps ivory headings,
ivory links at 70% that go to 100% on hover over 150ms, and a caption
legal line. A giant "LOUP." text wordmark (Syne 800, 22vw,
`#2F5241`, pushed 0.2em below the bottom edge) sits behind as a watermark,
Nudea's watermark idea done in type. It is decorative and `aria-hidden`.

## Page templates

Every page shares the same **chrome**: skip link, forest announcement bar,
sticky header and forest footer with the watermark, copied verbatim from the
home page. On sub-pages the nav links point to `/#how`, `/#faq` and
`/#waitlist`, and the language toggle points to the same page in the other
language. Body content then follows one of three templates.

- **Home**: the composition table above.
- **Document** (privacy, terms): a single column starting at the editorial
  indent (`md:col-start-2 md:col-span-8`), body text at 65ch or less, 72px
  below the header. Label-caps sage eyebrow ("Legal"), h1 in display-md, a
  caption "Last updated" line, h2 in headline-md with 48px above, body-md,
  inline links underlined. No images and no colour blocks: these pages are
  read, not browsed.
- **Message** (waitlist confirmation, 404): a small centred moment, the one
  place centred text is allowed. Label-caps eyebrow, display-md heading, one
  body-md line and a primary pill back to the home page, on ivory, with the
  160px break before the footer.

## Implementation

How this document maps onto the code, so new pages reuse it instead of
re-deriving it.

- **Tokens** live in the `@theme` block of `src/input.css` as
  `--color-brand-*`, `--radius-pill` and `--ease-link/control/reveal`.
  `npm run build:css` compiles everything to the committed, minified
  `assets/css/site.css` (Tailwind v4 CLI).
- **Components** are the `l-`-prefixed classes in the `@layer components`
  block of `src/input.css`:
  - type: `.l-display-lg`, `.l-display-md`, `.l-headline`, `.l-title`,
    `.l-body-lg`, `.l-body`, `.l-label`, `.l-caption`, `.l-soft` (sage
    secondary clause);
  - controls: `.l-btn`, `.l-btn-outline`, `.l-field` (pill with the button
    inset), `.l-link`, `.l-tab`;
  - frame: `.l-page`, `.l-wrap`, `.l-grid`, `.l-beat`, `.l-beat-break`;
  - sections: `.l-bar`, `.l-header`, `.l-hero-copy`/`.l-hero-media`,
    `.l-tablist`/`.l-tabpanel`, `.l-block`, `.l-panel`, `.l-faq`,
    `.l-footer`/`.l-watermark`;
  - behaviour hooks: `.l-reveal`, `.l-skip`.
  Layout details inside sections use plain Tailwind utilities.
- **Frame math**: `.l-page` sets `--inset` (24px, 48px from 768px) and
  `--gutter-x: max(var(--inset), (100vw − 1536px) / 2 + var(--inset))`.
  Bleeds use negative margins of `--gutter-x`; the sage block's copy starts
  at `--gutter-x` plus one column. Beats are 72/112px on mobile and 96/160px
  from 768px. The hero image height is `clamp(560px, 100svh − 120px, 880px)`
  from 1024px.
- **Behaviour** is `assets/js/site.js` (vanilla, deferred):
  - header hides on scroll down after 240px, shows on scroll up, and gains a
    hairline after 40px;
  - `.l-reveal` elements fade up once, only when JS and motion are allowed
    (the script adds `.js` to `<html>`, so content is visible without it);
  - tabs follow the WAI-ARIA pattern (click, arrows, Home/End).
- **Tab panels are toggled with the `is-inactive` class, never `[hidden]`.**
  Tailwind's preflight hides `[hidden]` with `!important` in the earlier
  `base` layer, and an important rule in an earlier layer beats one in
  `components`, so the mobile "show every panel" rule could never win.
- **Images**: crop with Pillow from the originals in
  `assets/images/src/`, export WebP at hero 800/1200/1600, inset 400/700,
  block 720/1200, detail 600/900, plus one JPEG fallback per slot; give every
  `<img>` explicit `width`/`height`, `loading="lazy"` except the hero, and
  credit new photos in `CREDITS.md`.
- **Static chrome**: the bar, header and footer are duplicated in every HTML
  page (there is no templating). Any change to them must be made on every
  page, EN and PT.

## Do's and Don'ts

**Do**
- Keep the UI near-monochrome: forest on ivory. Let warm, desaturated
  photography supply the colour.
- Make forest the only CTA colour, and make every interactive control a
  pill.
- Keep photos, panels and colour blocks square.
- Run colour blocks full-bleed and flush: forest at the top and bottom,
  sage once in the middle.
- Set headings in Syne 600, sentence case, and step their size at 768px.
- Give each section its own split (40/56, 25/75, 50/50, 57/37, 50/50) and
  its own image scale.
- Anchor copy off-centre against images: low, high, or below the tabs.
- Keep the 96px beat and break it once with 160px before the closing ask.
- Check contrast on every pairing. Sage text stays on ivory or white only,
  unless it is 24px or larger.

**Don't**
- Don't add box shadows, gradients, glows, grid overlays or glassmorphism.
- Don't round photographs or panels, and don't make buttons rectangular.
- Don't introduce an accent colour, pure black `#000`, or pure white as the
  page.
- Don't use Syne at 700/800 for headings (the wordmark is the exception),
  or title case.
- Don't equalise section heights, gaps or image sizes, and don't default to
  50/50 everywhere.
- Don't centre body copy against images.
- Don't use `#E2DDCE` for text, or sage for small text on the panel.
- Don't bring back the old `?theme=` palette scaffold described in
  `palette-changelog.md`. It belongs to the previous site, not this design.

## Agent Prompt Guide

> Build the LOUP waitlist page.
> - **Colour**: ivory `#FAF7F1` page, forest `#1E3A2C` ink and the only
>   CTA colour (hover `#12241B`), sage `#5C7566` for muted text on ivory,
>   panel `#F1ECE1` for one contained inset, hairlines `#E2DDCE`. Forest
>   full-bleed bar at the top and footer at the bottom; one full-bleed sage
>   block mid-page with ivory text. No shadows, no gradients, no accent
>   colour. Photography is warm and desaturated and carries all the colour.
> - **Type**: Syne 600, sentence case, −0.02em, at 56/60 for the hero
>   (36/40 mobile), 36/44 for statement and close (28/34), 24/32 for
>   section heads and 20/28 for titles. Space Grotesk 400 at 18/28 and
>   16/24; 12px uppercase labels at 500 and +0.16em; button labels 14px
>   600. Emphasise the second clause of a display line in sage.
> - **Shape**: square photos and panels; pill buttons and a pill email
>   field with the forest button inset at the right.
> - **Layout**: max width 1536px, 48px inset (24 mobile), 96px between
>   sections and 160px before the closing waitlist. Sections:
>   - forest announcement bar;
>   - sticky 88px header;
>   - hero with a 480px left column anchored low beside a 4:5 portrait
>     bleeding to the right edge;
>   - 940px statement at a one-column indent;
>   - circular-model tabs (Rental · Try before you buy · Resale · Take-back · Your model) over a 25/75 grid (small 4:5 image + three
>     numbered steps);
>   - full-bleed sage 50/50 with a list left and photo right;
>   - contained panel 57/37 with copy high on the right;
>   - FAQ rows at 72px with hairlines;
>   - 50/50 closing waitlist;
>   - forest footer with a giant wordmark watermark.
> - **Motion**: links 150ms `cubic-bezier(.66,0,.2,1)`, controls 300ms
>   `cubic-bezier(0,0,0,1)`, 16px/600ms fade-up reveals, all off under
>   reduced motion.
> - **Mobile**: images above copy, left-aligned, model panels stacked under
>   their own headings, full-width CTA.
