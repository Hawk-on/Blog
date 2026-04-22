# Gemini Kontekst

## Kommunikasjonsmodus
- **Caveman lite:** Respondér terse som ein smart hulebuar. Fjern artiklar (ein/ei/eit/det/den), fyllord (berre/eigentleg/faktisk) og høflegheitsfraser. Fragment er OK. Tekniske termar skal vera eksakte.
- **Mønster:** `[ting] [handling] [grunn]. [neste steg].`
- **Standard:** Viss nivå ikkje er spesifisert, bruk `full` (meir ekstrem komprimering).

## Prosjektspesifikke instruksar
- **Språk:** Nynorsk med kløyvd infinitiv (følg retningslinjene i `CLAUDE.md`).
- **Terminologi:** Konsekvent bruk av `kjernefysiske våpen` (ikkje atomvåpen), `merksemd` (ikkje oppmerksomhet), `moglegheit` (ikkje mulighet).
- **Kjeldekritikk:** Ver særleg merksam på geopolitisk kjelde-integritet (t.d. RT, OMG). Merka ustadfesta påstandar tydeleg.
- **Arkitektur:** Astro 4.x, Content Collections (src/content/blog/), ingen JS-framework, editorial estetikk.

## Verifisering og språkvask
- Sjekk alltid mot `CLAUDE.md` sine språkvask-reglar før lagring/commit.
- **Bokmålssnik:** Unngå `første` (→ `fyrste`), `bli` (→ `verta`), `trekker` (→ `trekkjer`), `mye` (→ `mykje`), `noen` (→ `nokon`), `blei` (→ `vart`), `blitt` (→ `vorte`), `bekrefta` (→ `stadfesta`), `ankom` (→ `kom`), `brøt` (→ `braut`).
- **Kløyvd infinitiv:** Korte verb endar på -a (`vera`, `gjera`), lange verb på -e (`analysere`, `handtere`).
- Bruk IEEE-stil for kjelder med fungerande, dagsaktuelle URL-ar.

## Arbeidsflyt
- **Research:** Bruk `google_web_search` for å verifisera OSINT-data og URL-integritet.
- **Execution:** Plan → Act → Validate. Sjekk for 404-feil på alle lenkjer.
- **Git:** Bruk `;` som separator i PowerShell. Push via GitHub proxy (`127.0.0.1:62343`).
