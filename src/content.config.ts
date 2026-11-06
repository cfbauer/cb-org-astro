import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		draft: z.boolean().optional(),
		hideDate: z.boolean().optional(),
	}),
});

const albums = defineCollection({
	loader: glob({ pattern: '**/*.yaml', base: './src/content/albums' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string().optional(),
		cover: image(),
	})
});

export const collections = { blog, albums };
