/**
 * Layer prenotazioni con adapter pattern.
 * Oggi: MockBookingProvider (disponibilità deterministiche, nessun backend).
 * Domani: SupabaseBookingProvider con la stessa interfaccia — il componente
 * UI non cambia di una riga.
 */
export interface Slot {
  data: string; // ISO date
  ora: string; // HH:mm
  professionista: string; // slug
}

export interface BookingProvider {
  disponibilita(professionista: string, daGiorno: Date, giorni: number): Promise<Slot[]>;
  prenota(slot: Slot, dati: { nome: string; telefono: string }): Promise<{ ok: boolean; codice: string }>;
}

const ORARI_BASE = ['09:00', '10:00', '11:30', '15:00', '16:30', '18:00'];

/** hash deterministico per rendere le disponibilità mock stabili ma varie */
function seed(str: string): number {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h);
}

export class MockBookingProvider implements BookingProvider {
  async disponibilita(professionista: string, daGiorno: Date, giorni: number): Promise<Slot[]> {
    const slots: Slot[] = [];
    for (let d = 0; d < giorni; d++) {
      const day = new Date(daGiorno);
      day.setDate(day.getDate() + d);
      const dow = day.getDay();
      if (dow === 0) continue; // chiuso la domenica
      const iso = day.toISOString().slice(0, 10);
      for (const ora of ORARI_BASE) {
        if (dow === 6 && ora >= '13:00') continue; // sabato solo mattina
        // ~metà slot occupati, in modo deterministico
        if (seed(professionista + iso + ora) % 5 < 2) continue;
        slots.push({ data: iso, ora, professionista });
      }
    }
    return new Promise((res) => setTimeout(() => res(slots), 250)); // simula latenza rete
  }

  async prenota(slot: Slot): Promise<{ ok: boolean; codice: string }> {
    const codice = 'SJ-' + seed(slot.data + slot.ora).toString(36).toUpperCase().slice(0, 6);
    return new Promise((res) => setTimeout(() => res({ ok: true, codice }), 400));
  }
}

/*
 * FUTURO (fase 2) — SupabaseBookingProvider:
 *   import { createClient } from '@supabase/supabase-js';
 *   disponibilita() -> select su tabella `slots` where prenotato = false
 *   prenota()       -> insert su `prenotazioni` + RLS policy
 */
export const bookingProvider: BookingProvider = new MockBookingProvider();
