import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    data: z.coerce.date(),
    autore: z.string().default('Studio Juvenilia'),
    bozza: z.boolean().default(false),
  }),
});

export const collections = { blog };
