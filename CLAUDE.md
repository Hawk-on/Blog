# Prosjektkontekst

## Om bloggen
Personleg blogg for Håkon Hole Lønning. Skriv om geopolitikk,
politisk økonomi og teknologi frå eit strukturalistisk perspektiv.
Språk: Nynorsk med kløyvd infinitiv.

## Teknisk stack
- Astro 4.x
- Statisk HTML/CSS, ingen JS-framework
- GitHub Pages via GitHub Actions
- Content Collections for blogginnlegg (src/content/blog/)
- Markdown for innlegg

## Stilpreferansar
- Editorial estetikk — Playfair Display / Source Serif 4
- CSS-variablar i global.css, ikkje inline styling
- Komponentnamn på norsk (Grunnoppsett, Artikkel osv.)

## Domene
https://hawk-on.github.io/Blog

## Prioriterte oppgåver
- [x] RSS-feed med fulltekst og sanitisering (`/rss.xml`)
- [x] Mørk modus (dark/light switch)
- [x] Sitemap (`@astrojs/sitemap`)
- [x] Innhaldssamlingar (Content Collections)
- [x] Automatisk lesetid (200 ord/min)
- [x] Automatisk utdrag (Excerpts) viss ingress manglar
- [x] SEO-bilete og OpenGraph/JSON-LD (Schema.org)
- [x] Dynamisk ruting (`[slug].astro`)
- [x] Relaterte artiklar (basert på felles tags)
- [ ] Biletoptimalisering med `astro:assets` (for artiklar)

# Redaksjonell kontekst — CLAUDE.md tillegg

## Tematisk fokus
Bloggen analyserer det amerikanske imperiet sin strukturelle krise
gjennom desse linser:
- Petrodollarsystemet og de-dollarisering
- Korporativ fascisme (samanslåing av stat og kapital)
- Nordisk tryggingspolitikk post-NATO
- Teknologioligarki og demokratisk erosjon

## Språk og tone
- Analytisk, ikkje agitatorisk
- Strukturalistisk — system framfor einskildpersonar
- Nynorsk, aldri bokmål
- Kjeldebasert der mogleg

## Språkvask — sjekk alltid for dårlege omsetjingar
Gå gjennom ferdig tekst og sjekk spesifikt for:
- **Terminologi:** 'atomvåpen' -> 'kjernefysiske våpen', 'atomvåpenprogram' -> 'kjernefysisk våpenprogram', 'atom-' -> 'kjernefysisk'.
- **Oppdikta ord:** Språkmodellen kan laga ord som høyrast nynorske ut ved å setja saman kjende morfem, men som ikkje eksisterer. Døme: «bombetoninga» → «bombinga», «nullsårbarheit» → `zero-day-sårbarheit`, «tverrplatform» → `cross-platform` eller `plattformuavhengig`. Sjekk særleg substantiv med uvanleg suffiks.
- **Bokmålsformer som sniker seg inn:**
  - Fleirtal: `-ene` på hankjønn (→ `-ane`), `plattformer` (→ `plattformar`), `marknadene` (→ `marknadene`/`marknadane` — avhengig av kjønn)
  - Verb i presens: `trekker`/`trekk` (→ `trekkjer`), `bygger` (→ `byggjer`), `følger` (→ `følgjer`), `føretrekk` (→ `føretrekkjer`), `virkar` (→ `verkar`), `trengte` (→ `trong`)
  - Preteritum/perfektum: `falt` (→ `fall`), `stjålet` (→ `stole`), `blei` (→ `vart`), `blitt` (→ `vorte`), `bekrefta` (→ `stadfesta`), `ankom` (→ `kom`), `brøt` (→ `braut`)
  - Adjektiv: `bredare` (→ `breiare`), `beryktede` (→ `berykta`), `første` (→ `fyrste` for stilkonsistens på denne bloggen)
  - Konjunksjonar: `verken...eller` (→ `korkje...eller`), `noen` (→ `nokon`)
  - Pronomen/substantiv: "datter" (→ "dotter"), "bli" (→ "verta"), "mer" (→ "meir"), "mye" (→ "mykje"), "siden" (→ "sidan")
- **Adjektivbøying:** `ein truverdige` (→ `ein truverdig`), `bilateralt avtale` (→ `bilateral avtale`)
- **Feil infinitivsklasse:** lange verb (polysyllabiske) tek `-e`, ikkje `-a` — t.d. `invitara` → `invitere`, `handtera`, `vurdera`.
- **Kløyvd infinitiv:** Korte verb skal ha -a ending: `vera`, `gjera`, `koma`, `sova`, `gjennomføra`.
- **Direkte omsetjingar frå engelsk** (calques) som ikkje er idiomatisk nynorsk:
  - "eksponere for" → "utsette for"
  - "adressere problemet" → "ta tak i problemet"
  - "implementere" → "setje i verk"
  - "drog ned" (pulled down) → "lasta ned"
  - "handar over" (hand over) → "overleverer"/"gjev vidare"
  - "rulle tilbake" (roll back) → "reversere"/"vende tilbake"
  - "arbeidande exploit" (working) → "fungerande exploit"
  - "startstad" (starting place) → "utgangspunkt"
- **Anglisismar som bør forenklast:** `autoritarianisme` → `autoritarisme`, "konfidensialitet" → "fortrulegheit", "transparent" → "open/gjennomsiktig", "malisiøs" → "vondsinna" (intensjon) eller "skadeleg" (verknad), "ekstrahere" → "hente ut"/"tappe ut", "defendere" → "forsvararar"
- **Nyanse-omsetjingar:**
  - `malicious` → `vondsinna` (intensjon — om aktøren planta noko med vilje), ikkje `skadeleg` (verknad — kva koden gjer). Aldri `malisiøs`.
- **Klunksleg genitiv:** føretrekkje "saka sin eigenverdi" framfor "sakens eigenverdi" der det passar rytmisk
- **Hybridformer (bokmål/nynorsk):** blandingar av bokmål og nynorsk morfologi i samansetjingar

### Engelske fagtermer — rein engelsk eller rein nynorsk, aldri hybrid
Engelske fagord kan stå på engelsk, men **må ikkje fornorskast med nynorske endingar**. Anten:
1. **Behald den engelske termen intakt:** `breach`, `dependencies`, `exploit`, `cross-platform`, `zero-day`
2. **Omset heilt til nynorsk:** `innbrot`, `avhengnader`, `konstruksjonsteikningar`, `versjonsintervall`, `plattformuavhengig`

**Aldri hybridformer:** `breachane`, `dependenciane`, `blueprintar`, `versjonsrangar`, `tverrplatform`.

Samansetjing av engelsk rot + nynorsk beskrivande ledd er OK så lenge den engelske delen står intakt utan påklistra nynorsk-ending: `zero-day-sårbarheit`, `Mercor-innbrotet`, `SLSA-attestasjon`.

### Verifisering
Bruk [ordbokene.no](https://ordbokene.no/) (Nynorskordboka, vedlikehalde av lingvistar ved UiB og Språkrådet) for å verifisere tvilstilfelle — særleg:
- Om samansette ord eksisterer (unngå oppdikta ord)
- Rett infinitivsklasse og bøying
- Korrekt nynorsk-form av bokmålsord

Føretrekk ordboka framfor eiga språkkjensle ved tvil — særleg for låneord og tekniske termar.

## Kjeldebruk og referansar
- Bruk IEEE-referansestil for alle kjelder i artiklane
- Legg til inline-sitatmerke [N] i teksten og ei nummerert referanseliste under overskrifta `## Kjelder` nedst i artikkelen
- Søk etter og verifiser kjelder før dei vert lagde inn — ikkje lenk til ukontrollerte URLar
- Format for nettbaserte kjelder:
  `[N] Forfattar/org, "Tittel," *Publikasjon*, Dato. [Online]. Available: URL. [Accessed: dato].`
- Deutsche Bank, Citigroup og liknande interne rapportar som ikkje er offentleg tilgjengelege skal merkast eksplisitt utan lenkje

## Git og GitHub-proxy
- GitHub-proxyen køyrer lokalt på telefonen via `127.0.0.1:62343`
- Koplinga kan brytast dersom ein byter app — dette skuldast Android/iOS sin bakgrunnssuspensjon
- Løysing: kvitelist Claude-appen i batteriinnstillingane per app (ikkje global bryter — den vart fjerna i Android 12+)
  - Stock Android 12+: Innstillingar → Appar → Claude → Batteri → «Ingen restriksjonar»
  - Samsung One UI: Innstillingar → Batteri → Bakgrunnsbruk → legg til Claude
- Ved nettverksfeil: prøv push på nytt opptil 4 gonger med eksponentiell backoff (2s, 4s, 8s, 16s)
