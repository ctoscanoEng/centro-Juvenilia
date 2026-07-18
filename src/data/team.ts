export interface Professionista {
  slug: string;
  nome: string;
  ruolo: string;
  bio: string;
  formazione: string[];
  tecniche: string[];
  /** slug dei trattamenti di competenza, per il suggerimento dal corpo 3D */
  trattamenti: string[];
}

/** Elenco confermato dal committente (Checkpoint 1, 17/7/2026). */
export const TEAM: Professionista[] = [
  {
    slug: 'alessandro-bossa',
    nome: 'Dott. Alessandro Bossa',
    ruolo: 'Osteopata · Fisioterapista · Posturologo',
    bio: 'Unisce fisioterapia, osteopatia e posturologia in percorsi di recupero costruiti sulla persona. Ha maturato una lunga esperienza nella rieducazione sportiva di alto livello e nell’uso delle terapie strumentali, con una particolare dedizione ai casi complessi.',
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
      'valutazione-baropodometrica',
    ],
  },
  {
    slug: 'luigi-gagliardi',
    nome: 'Dott. Luigi Gagliardi',
    ruolo: 'Fisioterapista',
    bio: 'Fisioterapista con esperienza nella riabilitazione ortopedica e nel recupero funzionale dell’atleta. Segue il paziente lungo tutto il percorso, dalla fase acuta al ritorno alle attività quotidiane e sportive.',
    formazione: [],
    tecniche: ['Fisioterapia ortopedica', 'Recupero funzionale', 'Riabilitazione sportiva', 'Massoterapia'],
    trattamenti: ['fisioterapia', 'riabilitazione-sportiva', 'rieducazione-isocinetica', 'massoterapia'],
  },
  {
    slug: 'donato-eremita',
    nome: 'Dott. Donato Eremita',
    ruolo: 'Fisioterapista',
    bio: 'Fisioterapista con lunga esperienza nella medicina fisica e riabilitativa. Si dedica in particolare alla terapia manuale e ai percorsi di recupero dei dolori muscolo-scheletrici cronici.',
    formazione: [],
    tecniche: ['Fisioterapia', 'Kinesiterapia', 'Medicina manuale', 'Massoterapia'],
    trattamenti: ['fisioterapia', 'osteopatia', 'massoterapia', 'ozonoterapia'],
  },
];
