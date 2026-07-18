/** Dati anagrafici dello studio — fonte unica per NAP (SEO locale) e schema.org */
export const STUDIO = {
  nome: 'Studio Juvenilia',
  tagline: 'Studio di Medicina Fisica e Riabilitazione',
  descrizione:
    'Studio di medicina fisica e riabilitazione a Caserta: fisioterapia, osteopatia, ozonoterapia e riabilitazione sportiva. Percorsi di recupero personalizzati, terapie strumentali avanzate e il progetto Juvenilia Lab per la prevenzione degli infortuni.',
  indirizzo: {
    via: 'Via Giotto 28',
    cap: '81100',
    citta: 'Caserta',
    provincia: 'CE',
    regione: 'Campania',
  },
  // Fonte: post Instagram @studio.juvenilia (luglio 2026)
  telefono: '+39 0823 325585',
  whatsapp: '+39 349 3011533', // linea diretta Alessandro — sostituire se lo studio preferisce altro numero
  contattiDiretti: [
    { nome: 'Alessandro', numero: '+39 349 3011533' },
    { nome: 'Luigi', numero: '+39 333 3358253' },
    { nome: 'Donato', numero: '+39 339 3762771' },
    { nome: 'Studio (fisso)', numero: '+39 0823 325585' },
  ],
  email: 'info@studiojuvenilia.it', // [PLACEHOLDER] confermare casella reale
  // Fonte: post Instagram "Si riceve su appuntamento"
  orari: [
    { giorni: 'Lunedì – Venerdì', ore: '08:30 – 13:30 · 14:30 – 20:30' },
    { giorni: 'Sabato', ore: '09:00 – 13:00' },
    { giorni: 'Domenica', ore: 'Chiuso' },
  ],
  riceveSuAppuntamento: true,
  geo: { lat: 41.0808, lng: 14.3379 }, // coordinate approssimative di Via Giotto — verificare al lancio
  social: {
    instagram: 'https://www.instagram.com/studio.juvenilia/',
  },
  // [PLACEHOLDER] link recensioni Google Business Profile reale
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=PLACEHOLDER',
} as const;
