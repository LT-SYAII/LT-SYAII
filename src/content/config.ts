import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tech: z.array(z.string()),
    projectUrl: z.string(),
    githubUrl: z.string(),
    image: z.string().optional(),
  })
});

export const collections = {
  'projects': projectsCollection,
};