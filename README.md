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

Lag ei ny `.md`-fil i `src/content/blog/`:

```markdown
---
tittel: "Tittelen på innlegget"
dato: "2026-04-08"
ingress: "Ein kort beskriving som vises i lister."
tags: ["geopolitikk", "økonomi"]
lesetid: 8
---

Innhald her i vanleg Markdown...
```

Filnamnet vert URL-en: `mitt-innlegg.md` → `/blog/mitt-innlegg`

## Deploy

Push til `main`-greina → GitHub Actions bygger og deployer automatisk til GitHub Pages via GitHub Actions.

## Struktur

```
src/
├── content/
│   ├── blog/                # Blogginnlegg (Markdown)
│   └── config.ts            # Definisjon av innhaldssamlingar
├── layouts/
│   ├── Grunnoppsett.astro   # Hovudlayout (header, footer)
│   └── Artikkel.astro       # Layout for blogginnlegg
├── pages/
│   ├── index.astro          # Forsida
│   ├── om.astro             # Om-sida
│   ├── [slug].astro         # Dynamisk rute for innlegg
│   └── tag/
│       └── [tag].astro      # Tag-sider
└── styles/
    └── global.css           # All styling
```
