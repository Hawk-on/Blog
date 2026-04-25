# Blogg-referanse for Claude

Rask oppslagsguide for denne bloggens tekniske struktur, stilmønster og konvensjonar.
Bruk denne fila for å sleppe å re-utforska kodebasen i nye sesjonar.

---

## Teknisk stack

- **Framework:** Astro 6.x (Content Layer), statisk HTML/CSS
- **Hosting:** GitHub Pages via GitHub Actions
- **Innhald:** Markdown-filer (`.md`) i `src/content/blog/`
- **Ingen JS-framework** — berre Astro og `@astrojs/rss` (med React Islands for spesifikke komponentar)

---

## Filstruktur

```
src/
├── content/
│   └── blog/
│       └── *.md             # Blogginnlegg
├── content.config.ts        # Schema for innhaldssamlingar
├── layouts/
│   ├── Grunnoppsett.astro   # Hovudlayout (header, footer, tema-bryter)
│   └── Artikkel.astro       # Artikkellayout (innhaldstabell, leseprosessbar)
├── pages/
│   ├── index.astro          # Startsida (listar alle .md-innlegg)
│   ├── om.astro             # Om-sida
│   ├── 404.astro            # 404-side
│   ├── rss.xml.ts           # RSS-feed
│   ├── tag/[tag].astro      # Dynamiske tag-sider
│   └── [slug].astro         # Dynamisk ruting for blogginnlegg
├── styles/
│   └── global.css           # All CSS (éi fil, ingen komponent-CSS)
└── utils/
    └── dato.ts              # Datoformatering: formaterDato(dato, 'kort'|'lang')
```

---

## Frontmatter-schema for innlegg

```yaml
---
tittel: "Tittelen på innlegget"             # Påkravd
publisertDato: "2026-04-14"                  # Påkravd, format YYYY-MM-DD
oppdatertDato: "2026-04-24"                  # Valfritt
ingress: "Kort ingress..."                  # Viast på startsida og i meta-tags
tags: ["geopolitikk", "økonomi"]            # Valfritt, driv tag-sidene automatisk
lesetid: 12                                 # Valfritt, tal i minutt
---
```

---

## Rutingmønster

| URL                        | Fil                          |
|----------------------------|------------------------------|
| `/`                        | `src/pages/index.astro`      |
| `/om`                      | `src/pages/om.astro`         |
| `/mitt-innlegg`            | `src/content/blog/mitt-innlegg.md` (via `[slug].astro`) |
| `/tag/geopolitikk`         | automatisk frå tag-array     |
| `/rss.xml`                 | `src/pages/rss.xml.ts`       |

**Merk:** Innlegg ligg i `src/content/blog/`.
Prosjektet brukar `getCollection('blog')` for å henta innlegg i staden for `Astro.glob`.

---

## Slug-konvensjon for filnamn

- Berre små bokstavar og bindestrek
- Norske spesialbokstavar: `ø→o`, `å→a`, `æ→e`
- Eksempel: `petrodollaren-og-imperiet-sitt-sjolvmord.md`

---

## Komponentar

### `Grunnoppsett.astro`
Props: `tittel` (påkravd), `beskriving`, `erArtikkel` (boolean)

Rendrar: sticky header med logo + navigasjon, mobil-meny (CSS checkbox-hack, ikkje JS),
tema-bryter (lys/mørk), footer, Umami-analyse.

### `Artikkel.astro`
Props: `tittel`, `dato`, `ingress`, `tags[]`, `lesetid`

Rendrar: automatisk innhaldstabell (frå alle `##`/`###`-overskrifter, viss ≥2),
leseprosessbar øvst, «attende til toppen»-knapp, Umami scroll-analyse (25/50/75/100 %).

---

## CSS-designsystem (`src/styles/global.css`)

### Fargepaletten (CSS-variablar)
```css
--svart:    #0f0f0f   /* tekst */
--kvit:     #f5f0e8   /* bakgrunn (krem) */
--grå:      #6b6560
--lys-grå:  #e8e2d8
--raud:     #b8001f   /* lenkjer og aksent */
--gull:     #c4933f   /* highlight */
```

### Typografi
```css
--skrift-brei:  'Playfair Display', serif   /* overskrifter */
--skrift-brød:  'Source Serif 4', serif     /* brødtekst */
--skrift-kode:  'JetBrains Mono', monospace /* kode og metadata */
```

### Layout-klassar
- `.container` — maks 720px (smal, for lesbarheit)
- `.container--brei` — maks 960px (header/footer)

### Mørk modus
Aktivert via `html[data-theme="dark"]`. Preferanse lagrast i `localStorage`.
Respekterer `prefers-color-scheme: dark` som fallback.

---

## Skrivestil og språk

- **Språk:** Nynorsk med kløyvd infinitiv
  - Korte verb (monosyllabisk stamme): `-a` — `vera`, `gjera`, `ta`, `sjå`, `gå`, `stå`, `la`, `ha`, `fara`
  - Lange verb: `-e` — `skrive`, `lese`, `analysere`, `utvikle`, `fortelje`
- **Tone:** Analytisk, ikkje agitatorisk. Strukturalistisk — system framfor einskildpersonar
- **Aldri bokmål**

---

## Kjeldereferansar (IEEE-stil)

Alle kjelder brukar IEEE-stil:

### Inline i tekst
```
... som dokumentert i fleire studiar [1][2].
```

### Referanseliste nedst (under `## Kjelder`)

**Nettbaserte kjelder:**
```
[N] Forfattar/org, "Tittel," *Publikasjon*, Dato. [Online]. Available: URL. [Accessed: dato].
```

**Interne/ikkje-offentlege rapportar (Deutsche Bank, Citigroup ol.):**
```
[N] Deutsche Bank Research, "Tittel," intern rapport, mars 2026. (ikkje offentleg tilgjengeleg)
```

---

## Innleggsstruktur (etablert mønster)

```markdown
[Innleiingsparagraf utan overskrift — set kontekst og hovudpåstand]

## Seksjon 1
...

## Seksjon 2
...

---

*Dette innlegget er del av ein serie om det amerikanske imperiet sin strukturelle krise.*

## Kjelder

[1] ...
[2] ...
```

---

## Taggsystem

Tags er sjølvoppdagande — berre legg dei til i frontmatter-arrayet.
Kvar ny tag får automatisk ei side på `/tag/<tag>` via `src/pages/tag/[tag].astro`.
Ingen manuell registrering nødvendig.

---

## Konfigurasjon

```js
// astro.config.mjs
site: 'https://hawk-on.github.io'
base: '/Blog'
// Markdown: Shiki syntax highlighting, github-dark tema, tekstbryting på
```

---

## Git-oppsett

- **Produksjonsgrein:** `master`
- **Feature-greinar:** `claude/<namn>-<id>`
- **Deploy:** automatisk frå `master` via GitHub Actions til GitHub Pages
- **GitHub-proxy:** køyrer på `127.0.0.1:62343` (telefon) — ved nettverksfeil, prøv push på nytt opptil 4 gonger med eksponentiell backoff (2s, 4s, 8s, 16s)
