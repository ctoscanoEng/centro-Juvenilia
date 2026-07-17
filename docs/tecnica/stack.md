# FASE 6 — Stack tecnologico (decisione e alternative)

## Stack scelto

| Livello | Scelta | Motivazione lungo termine |
|---|---|---|
| Framework | **Astro 5** (SSG) | HTML statico → SEO e CWV massimi; zero server da mantenere; "islands" = JS solo dove serve; un futuro dev junior lo mantiene senza conoscere React |
| CSS | **Tailwind 4** | Design token in CSS nativo (`@theme`), niente config JS, purge automatico |
| Animazioni | **GSAP 3 + ScrollTrigger** (gratuito al 100% dal 2024) + **Lenis** | Standard industriale scroll-telling; Lenis = smooth scroll accessibile |
| 3D | **Three.js** lazy-load | Solo hero + pagina Tecnologie; import dinamico on-visibility |
| Font | Fontsource self-hosted | GDPR (no Google CDN), performance, nessun costo |
| Dati futuri | **Supabase-ready** (adapter pattern su form/booking) | Tier gratuito generoso; auth+Postgres quando servirà l'area pazienti |
| Hosting | **Cloudflare Pages** (primario) o Netlify | Tier gratuito illimitato per siti statici, CDN globale, form handling |

Costi ricorrenti a regime: **solo il dominio (~12 €/anno)**.

## Alternative valutate e scartate

### Next.js — scartato
+ Ecosistema enorme, ottimo se il booking diventasse un'app complessa
− Runtime React ~90KB anche per pagine statiche → CWV peggiori su mobile 4G
− SSR/ISR di fatto ottimizzati per Vercel (lock-in); su altri host degrada
− Manutenzione più onerosa per terzi (App Router, RSC in evoluzione continua)
→ Per un sito contenutistico con isole interattive, Astro vince su ogni asse rilevante.

### WordPress — scartato (e perché non è la scelta giusta qui)
+ Familiare, editor visuale per il cliente
− Hosting PHP+DB a pagamento (60–200 €/anno) + manutenzione aggiornamenti/sicurezza
− Animazioni GSAP/Three custom = combattere col tema; performance mediocri senza
  caching a pagamento
− Il valore commerciale (5.000 €) si giustifica con un custom che WP renderebbe
  indistinguibile dai competitor
→ L'esigenza editoriale (blog) è coperta dalle content collections di Astro in
  Markdown; se in futuro servisse un CMS visuale: Decap/Sveltia CMS gratuiti su Git.

### Astro vs SvelteKit/Nuxt
SvelteKit e Nuxt sono eccellenti ma orientati ad app; Astro è nato per content site
SEO-first. Meno concetti, build più semplice, output più leggero.

## Flusso Git
Lavoro direttamente su `main` con commit atomici conventional (progetto a sviluppatore
singolo, niente ambiente di staging separato: un branch `develop` aggiungerebbe
cerimonia senza benefici). Se in futuro il sito andrà in produzione con dominio
cliente, si introdurrà branch `develop` + preview deploy automatici.
