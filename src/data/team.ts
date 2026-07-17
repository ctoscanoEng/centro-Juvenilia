export interface Professionista {
  slug: string;
  nome: string;
  ruolo: string;
  founder: boolean;
  bio: string;
  formazione: string[];
  tecniche: string[];
  /** slug dei trattamenti di competenza, per il suggerimento dal corpo 3D */
  trattamenti: string[];
  placeholder?: boolean;
}

/**
 * Elenco confermato dal committente (Checkpoint 1, 17/7/2026).
 * Ivano e Michele: cognomi e bio [PLACEHOLDER] in attesa di dati verificati.
 */
export const TEAM: Professionista[] = [
  {
    slug: 'alessandro-bossa',
    nome: 'Dott. Alessandro Bossa',
    ruolo: 'Osteopata · Fisioterapista · Posturologo — Co-founder',
    founder: true,
    bio: 'Co-fondatore dello Studio Juvenilia, unisce fisioterapia, osteopatia e posturologia in percorsi di recupero costruiti sulla persona. Ha maturato una lunga esperienza nella rieducazione sportiva di alto livello e nell’uso delle terapie strumentali, con una particolare dedizione ai casi complessi.',
    formazione: [
      'Laurea in Fisioterapia — Seconda Università degli Studi di Napoli',
      'Master di I livello in Osteopatia — Università Federico II di Napoli',
      'D.O. quinquennale — AEMO Aversa (Accademia Europea di Medicina Osteopatica)',
      'Master in Posturologia applicata — Sapienza Università di Roma',
      'Tirocinio triennale in neurologia, ortopedia e neurochirurgia — I Policlinico di Napoli',
    ],
    tecniche: [
      'Tecniche osteopatiche e miofasciali',
      'Rieducazione posturale (metodo Mézières)',
      'Tecarterapia e onde d’urto',
      'Rinforzo muscolare isocinetico',
      'Riabilitazione del pavimento pelvico',
      'Riatletizzazione post-traumatica',
      'Fibrolisi percutanea e taping',
    ],
    trattamenti: [
      'osteopatia',
      'posturologia',
      'tecarterapia',
      'onde-durto',
      'rieducazione-isocinetica',
      'riabilitazione-pavimento-pelvico',
      'riabilitazione-sportiva',
    ],
  },
  {
    slug: 'luigi-gagliardi',
    nome: 'Dott. Luigi Gagliardi',
    ruolo: 'Fisioterapista — Co-founder',
    founder: true,
    bio: 'Co-fondatore dello Studio Juvenilia, fisioterapista con esperienza nella riabilitazione ortopedica e nel recupero funzionale dell’atleta. [PLACEHOLDER: bio dettagliata da completare con i dati forniti dallo studio]',
    formazione: ['[PLACEHOLDER: formazione da confermare]'],
    tecniche: ['Fisioterapia ortopedica', 'Recupero funzionale', 'Riabilitazione sportiva'],
    trattamenti: ['fisioterapia', 'riabilitazione-sportiva', 'rieducazione-isocinetica'],
  },
  {
    slug: 'donato-eremita',
    nome: 'Dott. Donato Eremita',
    ruolo: 'Fisioterapista',
    founder: false,
    bio: 'Fisioterapista dello Studio Juvenilia con lunga esperienza nella medicina fisica e riabilitativa. [PLACEHOLDER: bio dettagliata da completare con i dati forniti dallo studio]',
    formazione: ['[PLACEHOLDER: formazione da confermare]'],
    tecniche: ['Fisioterapia', 'Kinesiterapia', 'Medicina manuale'],
    trattamenti: ['fisioterapia', 'osteopatia'],
  },
  {
    slug: 'ivano',
    nome: 'Dott. Ivano [PLACEHOLDER cognome]',
    ruolo: '[PLACEHOLDER ruolo]',
    founder: false,
    bio: '[PLACEHOLDER: bio in attesa di dati verificati dallo studio]',
    formazione: [],
    tecniche: [],
    trattamenti: ['fisioterapia'],
    placeholder: true,
  },
  {
    slug: 'michele',
    nome: 'Dott. Michele [PLACEHOLDER cognome]',
    ruolo: 'Fisioterapista',
    founder: false,
    bio: 'Il più giovane del team: fisioterapista neolaureato, porta nello studio energia, aggiornamento continuo e uno sguardo fresco sui protocolli riabilitativi. [PLACEHOLDER: bio da completare]',
    formazione: ['Laurea in Fisioterapia [PLACEHOLDER ateneo]'],
    tecniche: [],
    trattamenti: ['fisioterapia'],
    placeholder: true,
  },
];
