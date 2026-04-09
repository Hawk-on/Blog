# hakon-blogg

Personleg blogg bygd med [Astro](https://astro.build).

## Kome i gang

```bash
npm install
npm run dev       # lokalt på http://localhost:4321
npm run build     # bygg til ./dist
npm run preview   # førehandsvis produksjonsbygg
```

## Legg til eit nytt innlegg

Lag ei ny `.md`-fil i `src/pages/blogg/`:

```markdown
---
layout: ../../layouts/Artikkel.astro
tittel: "Tittelen på innlegget"
dato: "2026-04-08"
ingress: "Ein kort beskriving som vises i lister."
tags: ["geopolitikk", "økonomi"]
lesetid: 8
---

Innhald her i vanleg Markdown...
```

Filnamnet vert URL-en: `mitt-innlegg.md` → `/blogg/mitt-innlegg`

## Deploy

Push til `main`-greina → GitHub Actions bygger og deployer automatisk til GitHub Pages.

**Oppsett første gong:**
1. Gå til repo Settings → Pages
2. Set Source til "GitHub Actions"
3. Oppdater `site`-feltet i `astro.config.mjs` med ditt domene

## Struktur

```
src/
├── layouts/
│   ├── Grunnoppsett.astro   # Hovudlayout (header, footer)
│   └── Artikkel.astro       # Layout for blogginnlegg
├── pages/
│   ├── index.astro          # Forsida
│   ├── om.astro             # Om-sida
│   └── blogg/
│       ├── index.astro      # Blogg-lista
│       └── *.md             # Innlegg (eitt per fil)
└── styles/
    └── global.css           # All styling
```
