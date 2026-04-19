# Marketing UI kit — Eirik Hodne

Clickable recreation of the two public pages in the source repo.

## Views

- **Startside** — landing/nav screen. The dark block slides in (right in landscape, bottom in portrait). Name + three pill buttons fade up in sequence.
- **Rutenettside** — Undervisningsopplegg grid. Filter by `Fremhevet / Alle / [fag]`, click a tile to read the opplegg, back arrow returns to grid.

## Files

- `index.html` — demo harness with a switcher between the two views.
- `Startside.jsx` — landing component, handles the slide-in choreography via React state.
- `Rutenettside.jsx` — grid + filter + detail view with a tiny markdown renderer.
- `kit.css` — all visual styles, mirroring `source/eksempelnettsider/*.html` 1:1.

## How to reuse

Drop `kit.css` in, then import whichever component(s) you need. The components are namespaced with `eh-` so they won't collide with other systems.

Clicking **Undervisningsopplegg** on the startside navigates to the rutenettside; clicking **← eirikhodne.no** in the header goes back.

## Caveats

- **Demo data only.** The six undervisningsopplegg are invented, in Eirik's voice, but they are not real teaching plans. Replace `DEMO` in `Rutenettside.jsx` with real data when available.
- **No real photography** — tiles use a flat surface with a subtle radial. The source file expects `opplegg.bilde` to be a URL to a real image.
- **No `/kode-eksempler` or `/svg` pages** — they're linked from the startside but not yet designed (the source repo doesn't define them).
