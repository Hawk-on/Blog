# Prosjektkontekst

## Om bloggen
Personleg blogg for Håkon Hole Lønning. Skriv om geopolitikk,
politisk økonomi og teknologi frå eit strukturalistisk perspektiv.
Språk: Nynorsk med kløyvd infinitiv.

## Teknisk stack
- Astro 4.x
- Statisk HTML/CSS, ingen JS-framework
- GitHub Pages via GitHub Actions
- Markdown for innlegg

## Stilpreferansar
- Editorial estetikk — Playfair Display / Source Serif 4
- CSS-variablar i global.css, ikkje inline styling
- Komponentnamn på norsk (Grunnoppsett, Artikkel osv.)

## Domene
[ditt domene her]

## Prioriterte oppgåver
- [ ] RSS-feed (`/rss.xml`)
- [ ] Sitemap
- [ ] Dynamisk ruting med `[slug].astro`
- [ ] Mørk modus

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
- **Bokmålsformer som sniker seg inn:** "datter" → "dotter", "bli" → "verta", "vegner" → "vegne", "noen" → "nokon", "hvilken" → "kva slags / kva for ein"
- **Direkte omsetjingar frå engelsk** (calques) som ikkje er idiomatisk Nynorsk: "eksponere for" → "utsette for", "adressere problemet" → "ta tak i problemet", "implementere" → "setje i verk / gjennomføre"
- **Klunksleg genitiv:** føretrekkje "saka sin eigenverdi" framfor "sakens eigenverdi" der det passar rytmisk
- **Unødvendig fremmedord** der eit godt nynorskord finst: "konfidensialitet" → "fortrulegheit", "transparent" → "open / gjennomsiktig"
- **Hybridformer:** blandingar av bokmål og nynorsk morfologi i samansetjingar

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