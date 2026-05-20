# Palette Change Log

## 2026-05-19 20:36:00 +01:00
- Files updated: `script.js`, `assets/images/how-it-works-illustration-theme1.svg`, `assets/images/how-it-works-illustration-theme2.svg`, `assets/images/how-it-works-illustration-theme3.svg`, `assets/images/how-it-works-illustration-theme4.svg`
- Change batch: made the How It Works line-art illustration theme-aware for all versions.

### What changed
- Added per-theme SVG variants for the How It Works illustration.
- Added runtime source-switch in `script.js` so `.how-illustration` uses:
  - original: `how-it-works-illustration.svg`
  - theme 1: `how-it-works-illustration-theme1.svg`
  - theme 2: `how-it-works-illustration-theme2.svg`
  - theme 3: `how-it-works-illustration-theme3.svg`
  - theme 4: `how-it-works-illustration-theme4.svg`

### Preview coverage
- Works with `/`, `?theme=original`, `?theme=1`, `?theme=2`, `?theme=3`, `?theme=4`.

---

## 2026-05-19 20:31:00 +01:00
- Files updated: `styles.css`, `script.js`
- Change batch: added Palette 4 (Warm Stone Luxe) to the theme-switch scaffold.

### What changed
- Added `:root[data-theme="4"]` token block in `styles.css`.
- Included `theme=4` in URL theme-loader allowlist in `script.js`.
- Kept original/default and themes 1-3 behavior unchanged.

### Preview URL
- `?theme=4`

---

## 2026-05-19 20:27:00 +01:00
- Files updated: `styles.css`, `script.js`
- Change batch: added Palette 1 (Forest Signature) to the existing theme-switch scaffold.

### What changed
- Added `:root[data-theme="1"]` token block in `styles.css`.
- Included `theme=1` in URL theme-loader allowlist in `script.js`.
- Kept original default behavior unchanged (no query param still loads original).

### Preview URL
- `?theme=1`

---

## 2026-05-19 20:19:00 +01:00
- Backup created: `d:\Websites\loup_waitlist_v4__backup_20260519-2011`
- Files updated: `styles.css`, `script.js`, `index.html`
- Change batch: non-destructive palette testing scaffold (original + theme 2 + theme 3).

### What changed
- Added semantic color token system in `styles.css` with original values as default.
- Added theme override blocks:
  - `:root[data-theme="2"]` (Palette 2)
  - `:root[data-theme="3"]` (Palette 3)
- Replaced hardcoded color values in stylesheet selectors with semantic `var(...)` references.
- Preserved legacy aliases (`--charcoal`, `--light`, `--dusty`, `--beige`, `--beige-soft`, `--yellow`) for compatibility.
- Added URL-driven theme loader in `script.js`:
  - default/original: no attribute
  - `?theme=2`
  - `?theme=3`
  - `?theme=original`
  - invalid values fallback to original
- Updated inline SVG gradient stops in `index.html` to use CSS variables (`--accent-pale`) for theme consistency.

### Key token families introduced
- Core surfaces/text: `--bg-*`, `--surface-*`, `--text-*`
- Brand accents: `--accent-*`, `--primary`, `--secondary-warm*`
- Borders/overlays/effects: `--border-*`, `--overlay-*`, `--grid-*`, `--showcase-glow-*`, `--ring-*`

### Rollback options
- Full restore: copy from `d:\Websites\loup_waitlist_v4__backup_20260519-2011` over project folder.
- Partial restore:
  - revert stylesheet only from backup `styles.css`
  - revert behavior only from backup `script.js`
  - revert connector gradient markup from backup `index.html`


---

## 2026-05-19 20:50:45 +01:00
- Files updated: `styles.css`
- Change batch: hero section background flattened to a single color across all themes.

### What changed
- Disabled `.hero-glow` overlay.
- Disabled `.hero-grid-lines` overlay pattern in hero final overrides.
- Result: hero uses only the base background token color for each theme.



---

## 2026-05-19 21:39:12 +01:00
- Files updated: `styles.css`
- Change batch: footer background now follows active theme.

### What changed
- Updated `.site-footer` background from `var(--black)` to `var(--bg-dark)`.
- Result: footer now changes with `original`, `?theme=1`, `?theme=2`, `?theme=3`, and `?theme=4`.

---

## 2026-05-19 21:55:26 +01:00
- Files updated: `script.js`
- Change batch: Theme 3 is now the default site view.

### What changed
- Updated theme loader so no `theme` query param defaults to `data-theme="3"`.
- Invalid `theme` values now also fall back to Theme 3.
- `?theme=original` remains supported for baseline comparison.


---

## 2026-05-19 22:10:46 +01:00
- Files updated: `styles.css`
- Change batch: fixed About desktop gutter alignment and Explore mobile/narrow overflow.

### What changed
- About section: changed `.about-image-grid` breakout math from raw viewport full-bleed to gutter-locked viewport alignment.
- Explore section: removed fixed overflow trigger by setting `.product-showcase` to `min-width: min(576px, 100%)`.
- Explore section: constrained wrapper horizontal overflow in non-swipe mode.
- Explore section: added responsive glow inset/blur clamps at `768px`, `625px`, and `560px` to prevent visual spill.

### Expected result
- About right-side images align to page gutter without going past margin.
- Explore phones and glow stay inside margins at narrow widths (including ~560ï¿½625px).


---

## 2026-05-19 22:20:52 +01:00
- Files updated: `styles.css`, `script.js`
- Change batch: restored Explore composition and implemented uniform proportional scaling.

### What changed
- Restored baseline Explore CSS composition (fixed design canvas values for gap/padding/glow inset).
- Removed Explore-only breakpoint tweak set that caused the cropped/altered look.
- Added JS scaler for `.product-showcase`:
  - computes `scale = min(1, availableWidth / 706)`
  - writes scale to `--showcase-scale`
  - sets wrapper height from scaled content height to prevent clipping
  - runs on load, resize, and `ResizeObserver`
- Kept About gutter alignment fix and footer mobile stack behavior unchanged.

### Expected result
- Explore keeps the same visual composition at all widths, only scaled down as needed.
- No horizontal overflow or crop in Explore at narrow widths.


---

## 2026-05-19 22:58:15 +01:00
- Files updated: `styles.css`
- Change batch: hero image display size reduced to ~50% at all active breakpoints.

### What changed
- Halved .hero-stage .hero-image-wrap width values in base and responsive rules.
- Positioning logic preserved; only rendered size reduced.


---

## 2026-05-20 09:50:49 +01:00
- Files updated: `styles.css`
- Change batch: adjusted footer model anchoring + foreground layering after grouped upper-content shift.

### What changed
- Added footer tuning variables on `.site-footer`:
  - `--footer-upper-shift: 10%`
  - `--footer-model-bottom` for desktop/tablet model anchoring.
- Updated `.footer-upper` to use `translateY(var(--footer-upper-shift))`.
- Updated `.footer-model-wrap`:
  - `bottom: var(--footer-model-bottom)` to independently tune vertical placement.
  - `z-index: 8` so the model renders above footer text layers.
  - kept `pointer-events: none`.
- Tablet (`<=1024px`) receives its own `--footer-model-bottom` value to preserve balance.

### Result
- Upper block remains grouped and shifted.
- Model now sits lower and renders in the foreground layer over footer text.
- Mobile stacked footer behavior remains unchanged.

---

## 2026-05-20 10:02:11 +01:00
- Files updated: styles.css
- Change batch: corrected footer model overlap with LOUP wordmark and lowered model anchor.

### What changed
- Increased desktop/tablet model bottom offset (--footer-model-bottom) so the visible model sits lower in the footer.
- Set .footer-upper to position: relative; z-index: 6; so the model can paint above the LOUP wordmark layer.
- Kept mobile stacked footer behavior unchanged.

---

## 2026-05-20 10:07:02 +01:00
- Files updated: styles.css
- Change batch: anchored footer model to true section bottom edge.

### What changed
- Set --footer-model-bottom: 0px for desktop and tablet.
- Removed position: relative from .footer-upper so the absolute model anchor resolves to .footer-shell (the footer section container), not the shifted wrapper.
- Kept .footer-upper z-index layering and model foreground z-index behavior.

---

## 2026-05-20 10:11:23 +01:00
- Files updated: `index.html`, `styles.css`
- Change batch: footer model anchor and layering stabilization with structural move.

### What changed
- Moved `.footer-model-wrap` outside `.footer-upper` so it is a direct child of `.footer-shell`.
- Kept desktop/tablet model anchoring on `.footer-shell` with `left: 50%`, `bottom: 0`, `transform: translateX(-50%)`.
- Preserved grouped desktop/tablet shift for `.footer-upper` while decoupling model anchoring from that shift.
- Preserved mobile stack behavior by setting `.footer-upper` to `display: contents` at `<=780px` and assigning explicit row order:
  - `.footer-headline` row 1
  - `.footer-model-wrap` row 2
  - `.footer-stage` row 3
  - `.footer-glitch` row 4
  - `.copyright` row 5

### Result
- Model bottom lock is now based on the true footer section container, not the shifted wrapper.
- Model remains foreground over the `LOUP` wordmark on desktop/tablet.
- Mobile keeps the intended stacked composition order.

---

## 2026-05-20 10:13:42 +01:00
- Files updated: styles.css
- Change batch: footer model visual bottom-edge alignment nudge.

### What changed
- Set --footer-model-bottom to -14px on desktop and tablet footer rules to compensate for visual gap and align model to section edge.
- Mobile stacked behavior remains unchanged.

---

## 2026-05-20 10:17:57 +01:00
- Files updated: index.html, styles.css
- Change batch: footer navigation and socials copy update.

### What changed
- Updated footer navigation label from List a Piece to Early Access.
- Replaced multi-icon socials row with FOLLOW US: label and a single Instagram button.
- Added .socials-label styling and centered social row alignment.
