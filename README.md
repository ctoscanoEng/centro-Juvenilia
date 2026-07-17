# Studio Juvenilia — Sito web

Sito web professionale dello **Studio Juvenilia**, centro di fisioterapia, osteopatia
e riabilitazione sportiva in Via Giotto 28, 81100 Caserta (CE).

Design custom animato (GSAP + Lenis), interazioni 3D (Three.js), SEO locale
tecnica, compliance GDPR sanitaria. Lighthouse mobile: **Perf 99 · A11y 100 ·
BP 100 · SEO 100**.

## Stack

| Livello | Tecnologia |
|---|---|
| Framework | [Astro 5](https://astro.build) (SSG, zero JS di default) |
| Stile | Tailwind CSS 4 (design token in `src/styles/global.css`) |
| Animazioni | GSAP 3 + ScrollTrigger, Lenis smooth scroll |
| 3D | Three.js (lazy-load on-visibility, procedurale, zero asset esterni) |
| Font | Fraunces + Figtree variable, self-hosted via Fontsource (GDPR) |
| Contenuti blog | Astro Content Collections (Markdown) |
| Dati futuri | Adapter pattern pronto per Supabase (`src/lib/booking.ts`) |

Motivazioni complete e alternative scartate: [docs/tecnica/stack.md](docs/tecnica/stack.md).

## Setup e demo locale

Prerequisiti: **Node.js ≥ 20** (testato con Node 24) e npm.

```bash
npm install        # installa le dipendenze
npm run dev        # dev server su http://localhost:4321
npm run build      # build statica in dist/
npm run preview    # serve la build su http://localhost:4321
```

## Struttura

```
src/
├── components/     # Header, Footer, Hero animata, CorpoInterattivo (3D), …
├── content/blog/   # articoli in Markdown (content collections)
├── data/           # fonte unica: studio (NAP), team, trattamenti, zone corpo
├── layouts/        # Base.astro (SEO, schema.org, skip-link, cookie banner)
├── lib/            # motion (GSAP/Lenis), body3d, machine3d, booking adapter
├── pages/          # route del sito (una pagina per trattamento = SEO)
└── styles/         # global.css con design token Tailwind 4
docs/
├── ricerca/        # fase 1: ricerca team, benchmark, analisi di mercato
├── design/         # direzione creativa, palette, piano animazioni
└── tecnica/        # stack decision record
```

## Contenuti e placeholder

I dati reali mancanti sono marcati `[PLACEHOLDER]` nel codice (grep-abile):
telefono, orari definitivi, P.IVA, bio di alcuni professionisti, place ID Google.
Fonte unica dei dati anagrafici: `src/data/studio.ts`.

## Deploy (previsto)

Hosting statico su **Cloudflare Pages** o Netlify (tier gratuito): build command
`npm run build`, output `dist/`. Aggiornare `SITE_URL` in `astro.config.mjs` e
`public/robots.txt` col dominio definitivo.

## Roadmap (fase 2)

- Booking reale con Supabase (auth + Postgres + RLS) — l'interfaccia UI è già pronta
- Area riservata pazienti con schede esercizi
- Dashboard founder (prenotazioni, richieste, statistiche)
- Invio reale del form contatti (endpoint serverless + notifica email)
- Foto/video reali dello studio e tour virtuale
