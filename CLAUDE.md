# Prosjektkontekst: Blogg

## Om bloggen
Personleg blogg for Håkon Hole Lønning. Analyserer geopolitikk og teknologi.
Språk: Nynorsk med kløyvd infinitiv.

## Teknisk stack
- **Framework:** Astro 6.x (Content Layer API)
- **Søk:** Pagefind (statisk indeksering)
- **Kommentarar:** Giscus (React Island med dynamisk tema)
- **UI:** Statisk HTML + React Islands
- **Deploy:** GitHub Pages (Node 22)

## Viktig mandat
**Hugs å oppdatere denne fila (CLAUDE.md), README.md og gemini.md kvar gong det vert gjort endringar i arkitektur, teknisk stack eller viktige funksjonar.**

## Arkitektur og konfigurasjon
- **Innhald:** `src/content.config.ts` brukar den nye `glob`-loaderen.
- **Søk:** `npm run build` køyrer `pagefind` etter Astro-bygginga.
- **SEO:** JSON-LD for `BlogPosting` i `Grunnoppsett.astro`.

## Språkvask — sjekk alltid
- **Terminologi:** 'atomvåpen' -> 'kjernefysiske våpen', 'oppmerksomhet' -> 'merksemd'.
- **Kløyvd infinitiv:** Korte verb endar på -a (`vera`, `gjera`), lange på -e (`analysere`).
- **Bokmålssnik:** Unngå `første` (-> `fyrste`), `blei` (-> `vart`), `noen` (-> `nokon`).

## Git og Deploy
- Push til `master` trigger auto-deploy.
- Bruk `;` som separator i PowerShell.
- Ved push-feil via proxy (127.0.0.1:62343), sjekk at Claude-appen er vaken.
