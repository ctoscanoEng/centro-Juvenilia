// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// [PLACEHOLDER] sostituire con il dominio definitivo al momento del deploy
const SITE_URL = 'https://www.studiojuvenilia.it';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Rispetta la porta assegnata dall'ambiente (es. preview/CI); default 4321
  server: { port: Number(process.env.PORT) || 4321 },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacy') &&
        !page.includes('/cookie-policy') &&
        !page.includes('/note-legali'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
    // Nessuno script/asset inline nell'HTML: consente una CSP con
    // `script-src 'self'` (vedi public/_headers) e migliora il caching.
    build: { assetsInlineLimit: 0 },
  },
});
