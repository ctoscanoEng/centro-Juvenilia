import { TRATTAMENTI } from './trattamenti';
import { TEAM } from './team';

export interface ZonaCorpo {
  id: string;
  nome: string;
  descrizione: string;
}

/** Zone selezionabili sul corpo interattivo 3D */
export const ZONE: ZonaCorpo[] = [
  { id: 'testa', nome: 'Testa e mandibola', descrizione: 'Cefalee, emicranie, disturbi temporo-mandibolari' },
  { id: 'cervicale', nome: 'Collo e cervicale', descrizione: 'Cervicalgia, rigidità, colpo di frusta' },
  { id: 'spalla', nome: 'Spalla', descrizione: 'Tendinopatie, calcificazioni, instabilità' },
  { id: 'gomito', nome: 'Gomito', descrizione: 'Epicondilite, epitrocleite' },
  { id: 'polso', nome: 'Polso e mano', descrizione: 'Tunnel carpale, esiti di frattura' },
  { id: 'schiena', nome: 'Schiena e zona lombare', descrizione: 'Lombalgia, ernie, sciatalgia' },
  { id: 'bacino', nome: 'Bacino e pavimento pelvico', descrizione: 'Dolore pelvico, incontinenza, post-parto' },
  { id: 'anca', nome: 'Anca', descrizione: 'Coxalgia, conflitto femoro-acetabolare' },
  { id: 'ginocchio', nome: 'Ginocchio', descrizione: 'Crociato, menisco, tendinopatia rotulea' },
  { id: 'caviglia', nome: 'Caviglia e piede', descrizione: 'Distorsioni, fascite plantare, tendine d’Achille' },
];

export function trattamentiPerZona(zonaId: string) {
  return TRATTAMENTI.filter((t) => t.zone.includes(zonaId));
}

export function professionistiPerZona(zonaId: string) {
  const slugs = new Set(trattamentiPerZona(zonaId).map((t) => t.slug));
  return TEAM.filter((p) => p.trattamenti.some((t) => slugs.has(t)));
}
