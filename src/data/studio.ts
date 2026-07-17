/** Dati anagrafici dello studio — fonte unica per NAP (SEO locale) e schema.org */
export const STUDIO = {
  nome: 'Studio Juvenilia',
  descrizione:
    'Centro di fisioterapia, osteopatia e riabilitazione sportiva a Caserta. Percorsi di recupero personalizzati, terapie strumentali avanzate e il progetto Juvenilia Lab per la prevenzione degli infortuni.',
  indirizzo: {
    via: 'Via Giotto 28',
    cap: '81100',
    citta: 'Caserta',
    provincia: 'CE',
    regione: 'Campania',
  },
  // [PLACEHOLDER] numero reale da inserire prima del lancio
  telefono: '+39 0823 000000',
  whatsapp: '+39 320 0000000',
  email: 'info@studiojuvenilia.it',
  // [PLACEHOLDER] verificare orari reali (directory: 08:00–20:00)
  orari: [
    { giorni: 'Lunedì – Venerdì', ore: '08:00 – 20:00' },
    { giorni: 'Sabato', ore: '08:00 – 13:00' },
    { giorni: 'Domenica', ore: 'Chiuso' },
  ],
  geo: { lat: 41.0808, lng: 14.3379 }, // [PLACEHOLDER] coordinate esatte da verificare
  social: {
    instagram: 'https://www.instagram.com/studio.juvenilia/',
  },
  // [PLACEHOLDER] link recensioni Google Business Profile reale
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=PLACEHOLDER',
} as const;
