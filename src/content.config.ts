import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number().min(1).max(6),
    lesson: z.number().min(1),
    description: z.string(),
    isExercise: z.boolean().default(false),
    code: z.string().optional(),
  }),
});

export const collections = { lessons };
