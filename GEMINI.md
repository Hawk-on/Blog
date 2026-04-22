# Gemini Kontekst: Blogg

## Kommunikasjonsmodus
- **Caveman lite:** Terse, ingen artiklar eller filler, nynorsk med kløyvd infinitiv.
- **Mønster:** `[ting] [handling] [grunn]. [neste steg].`

## Viktig mandat
**Oppdater alltid denne fila, CLAUDE.md og README.md ved kvar endring i prosjektet.**

## Prosjektspesifikke instruksar
- **Språk:** Nynorsk (kløyvd infinitiv). 'kjernefysiske våpen' konsekvent.
- **Arkitektur:** Astro 6 (Content Layer), Pagefind, Giscus.
- **Søk:** Bruk `data-pagefind-body` i `Artikkel.astro`.

## Verifisering
- Sjekk mot `CLAUDE.md` sine språkvask-reglar før commit.
- Unngå bokmål: `første` (-> `fyrste`), `bli` (-> `verta`), `mye` (-> `mykje`).
- Bruk IEEE-stil for kjelder.

## Arbeidsflyt
- **Execution:** Plan → Act → Validate.
- **Git:** Push via GitHub proxy (`127.0.0.1:62343`) eller PowerShell.
