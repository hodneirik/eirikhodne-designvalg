# Eirik Hodne — Design System

A design system for **eirikhodne.no**, Eirik Hodne's personal site — teacher, coder, and designer. The brand lives at the intersection of **Apple-inspired minimalism** and **Norwegian functional warmth**: high-contrast ink-on-paper, DM Sans display type, one slow motion curve, and a palette of soft earthy pastels that carry identity without shouting.

> Designet oppleves som profesjonelt, rolig og kontrollert, men samtidig lekent gjennom animasjon og bevegelse. Det gir en tydelig personlig profil uten å bli visuelt støyete.
> — *from the source `README.md`*

---

## Sources

- **GitHub repo:** `hodneirik/eirikhodne-designvalg` (branch: `main`). Imported to `source/` in this project.
  - `source/README.md` — the designer's own brand description (Norwegian).
  - `source/farger.md` — color palette for light + dark mode.
  - `source/eksempelnettsider/startside.html` — the landing/home page. The canonical interaction: a dark block slides in from the right (landscape) or bottom (portrait), with "Eirik Hodne" and three pill buttons fading up in sequence.
  - `source/eksempelnettsider/rutenettside.html` — the teaching-materials grid view. Sticky blurred header, pill filter buttons, Apple-style rounded cards with soft shadows, detail view with typographic markdown rendering.
- **Live site:** [eirikhodne.no](https://eirikhodne.no)
- **Products represented:**
  - **Startside** — minimalist landing/navigation page.
  - **Rutenettside (Undervisningsopplegg)** — grid of teaching materials ("undervisningsopplegg") with detail view.
  - *(Linked, not yet designed here: `/kode-eksempler` code-examples page, `/svg` "Vektorverkstedet" vector workshop.)*

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file — the brand brief. |
| `SKILL.md` | Agent-Skill manifest so this design system can be loaded as a Claude Code skill. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic helper classes (`.eh .btn`, `.card`, `.badge`, `.eyebrow`, etc). **Drop this file in and prefix a wrapper with `.eh` to adopt the system.** |
| `source/` | Raw imports from the GitHub repo — the ground truth for any disputed decision. |
| `assets/` | Logos, icons, example imagery. |
| `preview/` | Small HTML cards that populate the Design System tab — type, color, spacing, components. |
| `ui_kits/marketing/` | Interactive recreation of the two public pages (Startside + Rutenettside). |

---

## CONTENT FUNDAMENTALS

### Language
**Norwegian (bokmål).** All public-facing copy is in Norwegian. English is acceptable in code comments and technical documentation only. If producing copy for a mock in English, flag the substitution and ask before translating site strings.

### Voice & tone
- **Calm, grounded, understated.** "Rolig, men levende." Never hype, never exclamation, never emoji.
- **Personal but professional.** First-person signature ("Mine favorittopplegg," "KI-intervju med meg") sits next to pragmatic, teacher-like practicality.
- **Transparent about status.** Work-in-progress is acknowledged plainly: *"Undervisningsopplegg (under arbeid)"*, *"Mer ressurser og bilder kommer etterhvert."* No apologies, no marketing gloss — the reader is trusted.
- **Functional labels over cute labels.** Buttons say what they are: `Kodeeksempler`, `Vektorverkstedet`, `Undervisningsopplegg`, `← Tilbake til oversikten`, `↓ Last ned som PDF`. No "Explore" or "Dive in."

### Casing
- **Sentence case** for headlines and body (`Undervisningsopplegg`, not `Undervisningsopplegg For Deg`).
- **ALL CAPS** only inside pill buttons and badges, always paired with wide letter-spacing (`0.18em`–`0.2em`).
- Proper nouns keep their casing (`eirikhodne.no`, `DM Sans`, `SVG`).

### Pronouns
- Talks **about the site** in the third person or via the site name ("eirikhodne.no").
- **"meg" / "mine"** when referring to Eirik personally ("mine favorittopplegg", "intervju med meg").
- **"du"** is acceptable but used sparingly, only when directly instructing (rare).

### Emoji & decorative glyphs
- **No emoji in UI chrome or marketing copy.** The one existing emoji (`📚`) is a placeholder in a bildeplasseholder div that never renders if a real image loads — treat it as a bug, not a pattern.
- **Unicode arrows as functional markers** are the signature: `←` for back, `↓` for download. These are part of the voice — keep them.

### Example strings (pulled from the source)
- `Eirik Hodne` (display name, break after first name)
- `Kodeeksempler` · `Vektorverkstedet` · `Undervisningsopplegg`
- `Undervisningsopplegg (under arbeid)`
- `Noen av mine favorittopplegg. Tekstene er basert på KI-intervju med meg. Mer ressurser og bilder kommer etterhvert.`
- `← eirikhodne.no` (home link in detail-view header)
- `← Tilbake til oversikten` · `↓ Last ned som PDF`
- Filter categories: `Fremhevet` · `Alle` · `[Fag]`
- Empty/error: `Laster…` · `Kunne ikke laste opplegget.`

---

## VISUAL FOUNDATIONS

### The duo
Two colors carry 90% of the brand:
- **Paper** `#F7F9F8` — warm off-white, the light-mode ground.
- **Ink** `#12161C` — near-black navy, the primary foreground.

Everything inverts in dark mode. The duo is always full-contrast — no mid-gray softening between them.

### Accent palette — "earth pastels"
Six muted, low-chroma accents across two modes. They are **never** the dominant color of a screen; they appear as secondary surfaces (the dark-mode slide-in block uses `#788CA0`), as tag fills, or as illustrative accents.

| Role | Light | Dark |
|---|---|---|
| Blue / slate | `#788CA0` | `#8CAAD2` |
| Green / sage | `#AABEA0` | `#A0D2B9` |
| Sand | `#E6D2AA` | `#F0D2A0` |
| Clay / rose | `#C8A096` | `#EBA596` |
| Lilac | `#A096B4` | `#BEAFE1` |

Dark-mode accents are lifted and luminous; light-mode accents are dusty and pastel. They're mirrored around the same hue, never swapped.

### Typography
- **DM Sans 900** for the big display name and heading h1s. Tight line-height (1.1), slightly positive letter-spacing (+0.04em) for display sizes, tight negative (-0.02em) for smaller headings.
- **System sans** (`'Helvetica Neue', Helvetica, Arial, sans-serif`) for everything else. Body copy at ~0.93rem with generous 1.7 line-height for reading comfort.
- **SF Mono / Fira Code** for code — small (0.85em), light background, 5px radius.
- **ALL CAPS + tracked (0.18–0.2em)** at 11px is the "button voice" — it appears on every actionable pill.

### Spacing & layout
- **Generous negative space.** "Ren og luftig." Don't fill the frame.
- Grid columns use `auto-fill, minmax(260px, 1fr)` with a 1.5rem gutter. Max reading width 720px for body; max grid width 1100px.
- Page padding: `2rem` horizontal, `2.5rem` top.
- Header padding: `1.25rem 2rem`, flex-row with justify-between.

### Backgrounds
- **Flat color.** No gradients, no illustrations, no patterns, no grain. Background is always one of `--bg`, `--card`, or the `--ink` block.
- **Full-bleed imagery** in detail views: `max-height: 320px`, `object-fit: cover`, rounded to 1.25rem — never edge-to-edge untreated.

### Borders & hairlines
- **Hairlines** at `rgba(0,0,0,0.08)` separate the header from the body. Never heavier.
- **Button borders** are `2.5px solid --ink` — unusually thick, deliberately graphic. This is a signature.
- No inner shadows. No double-border tricks.

### Corner radii
- **Pills** (`999px`) for every button, badge, and tag. The pill is the brand's core shape.
- **Cards** at `1.25rem` (20px) — Apple's signature card radius.
- **Images inside cards** at `0.75rem` (12px) — nested, smaller.
- **Code blocks** at `0.75rem` for blocks, `5px` for inline.

### Shadows (elevation)
Two-layer, low-opacity, Apple-soft:
- **Resting:** `0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)`
- **Hover / lifted:** `0 10px 28px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)`

No hard shadows, no colored shadows, no ambient glows.

### Transparency & blur
- **Sticky blurred header** is THE place blur appears. `backdrop-filter: blur(20px)` over `rgba(245,245,247,0.85)`. Mimics iOS/macOS materials.
- **Tags & chips** use `rgba(0,0,0,0.06)` fills — the faintest possible wash.
- Nothing else is translucent. No frosted-glass cards, no glass hero panels.

### Motion — one curve, three durations
All easing is **`cubic-bezier(0.22, 1, 0.36, 1)`** — a fast-start, long-tail curve that feels expensive and controlled. Never swap it for `ease-in-out` or spring.

| Use | Duration |
|---|---|
| Hover color shift, card lift | `0.22s` · `0.25s` |
| Fade-up entry (button sequencing) | `0.9s` |
| Hero block slide-in (landing) | `2.2s` |

**Entry choreography:** content fades *up 18px* in a sequential stagger (name → btn1 → btn2 → btn3) with 250–300ms between each. The dark block slides in from the right (landscape) or bottom (portrait) over 2.2s — it's a single, deliberate gesture.

### Hover & press states
- **Buttons:** invert. Paper background + ink border/text becomes ink background + paper text. No scale, no shadow change. Just color.
- **Cards:** `translateY(-3px)` + deeper shadow. No border change.
- **Filter buttons:** same invert-on-hover, PLUS a persistent `.active` state that stays inverted.
- **Press states:** the source CSS doesn't define `:active` — treat them as matching `:hover` (don't add a scale-down).

### Responsive rules
- **Landscape:** split-screen — ink block on the right half.
- **Portrait:** ink block on the bottom half.
- **< 600px:** grid collapses to 1 column, header wraps, tile padding reduces.
- **Dark mode via `prefers-color-scheme`** is a full invert (not just a filter).

### Layout rules (fixed elements)
- The hero name + button stack on the landing page is `position: fixed; top: 50%; left: 0; right: 0; transform: translateY(-50%);` with 48px horizontal padding — it vertically centers regardless of viewport.
- The header on content pages is `position: sticky; top: 0; z-index: 10;` with backdrop blur.

### Image treatment
The source has no photography yet ("Mer ressurser og bilder kommer etterhvert"). When images arrive, the defined treatment is: **1:1 aspect square, `object-fit: cover`, rounded 0.75rem, muted default `--bg` as fallback.** Banners in detail views are wider (up to `max-height: 320px`) with the same rounding. No filters, no duotone, no warm/cool grading is prescribed — keep photos natural, and prefer cool Scandinavian light if choosing stock.

---

## ICONOGRAPHY

The source site uses **no icon library**. All visual markers are either:

1. **Unicode arrows** — `←` (back, home) and `↓` (download). These carry functional weight and are part of the voice.
2. **Pill-shaped text labels** replacing what would normally be iconography (e.g. `Fremhevet` badge, `Fag` tag, the filter chips).
3. **One placeholder emoji** (`📚`) in a fallback div — this is a bug, not a pattern. When authoring, replace with a subtle SVG placeholder (thin-stroke monochrome, matching the 2.5px border weight) or leave the square blank with `--bg` fill.

### When iconography is needed
- **Prefer Lucide** (CDN: `https://unpkg.com/lucide@latest`) — its 1.5–2px stroke weight and rounded line caps match the site's quiet, geometric energy better than Heroicons or Feather. **Flag this substitution** to the user on first use; it's a recommendation, not an approval.
- **Never** use filled, multicolor, or illustrative icon sets (no Fluent Emoji, no Noto, no brand-colored logos as icons).
- **Never** hand-draw SVG iconography unless explicitly asked.
- Icon size: match the line-height of surrounding text; use `currentColor` so they invert with the theme.
- Icon weight: stroke `1.75–2px`, rounded caps.

### Logo / wordmark
There is no formal logomark. The **wordmark is the name typeset in DM Sans 900**, broken after the first name:

```
Eirik
Hodne
```

Treat this as the logo. Minimum size: 32px cap height. Clear-space: at least one capital-letter height on every side. Never italicize, never add a tagline beneath, never stretch. Color is always `--ink` on `--paper` or inverted.

---

## How to use this system

1. **Drop `colors_and_type.css` into your page.**
2. **Wrap your content in a root with class `.eh`** to scope tokens + defaults.
3. Use `.btn`, `.card`, `.badge`, `.tag`, `.eyebrow`, `.display`, `.header-bar` as documented. Override via the CSS vars if you need a variant.
4. **Match the single motion curve** `var(--ease-standard)` for anything that moves. If you find yourself reaching for `ease-in-out`, stop.
5. **Default to high contrast.** When in doubt: ink on paper, paper on ink, pill-shaped.

## CAVEATS for agents working downstream

- **Fonts are loaded via Google Fonts** (DM Sans). No .ttf in `fonts/`. If you're packaging offline, download DM Sans 400/500/700/900 from Google Fonts and add an `@font-face` block.
- **Lucide is recommended, not validated.** The source site uses no icons — Lucide is an agent-chosen substitute based on stroke-weight compatibility. Confirm with the user before using.
- **Photography direction is unspecified.** Use sparingly and flag choices.
- **Norwegian copy is required** for production work. Do not auto-translate.
