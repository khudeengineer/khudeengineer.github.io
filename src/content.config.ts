import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    duration: z.string(),
    mentor_id: z.string(),
    order: z.number(),
    image: z.string().optional(),
    modules: z.array(z.object({
      title: z.string(),
      description: z.string(),
      price: z.string().optional()
    })).optional()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { courses, blog };
