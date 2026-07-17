# FASE 2 — Direzione creativa

## Identità visiva

### Palette — 3 varianti proposte

**A. "Clinica Mediterranea"** ← ATTIVA (raccomandata)
- Base: `#f9f7f3` (carta calda) / Ink: `#10282e`
- Fiducia: teal profondo `#1c5a5e` → `#123c40`
- Empatia/CTA: corallo `#f46f4d`, supporto ambra `#f2b95c`
- Perché: comunica professionalità clinica senza freddezza; il corallo dà il calore
  umano che i competitor (tutti blu/bianco anonimi) non hanno. Contrasti AA verificati.

**B. "Sport Lab"**
- Base: `#0e1420` (dark) / testo `#f2f5f7`
- Accento: verde acido `#c8f542` + teal `#2e7d7d`
- Perché: taglio performance/sport-tech, perfetto per Juvenilia Lab. Rischio: troppo
  "palestra", meno rassicurante per pazienti anziani/post-operatori.

**C. "Fiducia Editoriale"**
- Base bianco puro / Ink blu notte `#101c3a`
- Accento unico: ambra `#e8a13c`
- Perché: elegantissima e sobria, stile studio medico premium. Rischio: meno
  distintiva, si avvicina ai siti medici classici.

Decisione: **A** come default; la B viene ripresa come tema della sola sezione
Juvenilia Lab (sezione dark) — così il sito ha entrambe le anime.

### Typography
- **Display**: Fraunces Variable (serif con personalità, ottima resa accenti italiani,
  asse "wonk" per titoli caldi ma autorevoli) — titoli, numeri grandi
- **Body**: Figtree Variable (sans geometrica leggibilissima, x-height alta)
- Self-hosted via Fontsource → zero richieste a Google Fonts (GDPR/Garante) e
  performance migliore (preload, nessun DNS esterno)

### Illustrazioni
Caricature/illustrazioni SVG scritte a mano (nessuna dipendenza, nessun tool a
pagamento): personaggi stilizzati "linea + macchia di colore" che fanno esercizi,
macchinario isocinetico, colonna vertebrale interattiva. Tono: professionale-simpatico,
non infantile. Stile: stroke uniforme 2.5px, riempimenti piatti nei colori token.

## Animazioni (FASE 2.2 — piano)
- **Hero**: sequenza scroll-driven "ingresso nello studio" — silhouette SVG/3D low-poly
  dei macchinari che prendono vita (GSAP ScrollTrigger + canvas Three.js lazy)
- **Scroll-telling homepage**: dolore → valutazione → trattamento → Juvenilia Lab →
  ritorno allo sport (pin + scrub)
- Micro-interazioni: magnetic buttons, hover reveal, transizioni View Transitions API
- 3D solo in: hero (low-poly) e pagina Tecnologie (macchinario isocinetico orbitabile)
- Budget performance: JS iniziale < 90KB, Three.js caricato solo on-visibility,
  Lighthouse mobile ≥ 90, `prefers-reduced-motion` disattiva tutto (fallback statico)

## Struttura sito (FASE 2.3)
1. `/` Home — hero animata, percorso paziente, trust, CTA
2. `/chi-siamo` — storia + team (Bossa, Gagliardi, Eremita + 2 card placeholder)
3. `/trattamenti` + pagina per trattamento (SEO):
   `/trattamenti/fisioterapia`, `/osteopatia`, `/posturologia`,
   `/riabilitazione-sportiva`, `/tecarterapia`, `/onde-durto`,
   `/rieducazione-isocinetica`, `/riabilitazione-pavimento-pelvico`
4. `/juvenilia-lab` — sezione dark "Sport Lab"
5. `/tecnologie` — showcase macchinari con 3D
6. `/testimonianze` — casi di successo + partnership [DA CONFERMARE]
7. `/contatti` — mappa, orari [PLACEHOLDER], form GDPR, click-to-call, WhatsApp
8. `/blog` — predisposto (content collections)
9. `/privacy`, `/cookie-policy`, `/note-legali` [PLACEHOLDER P.IVA]
