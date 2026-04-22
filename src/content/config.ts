import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		tittel: z.string(),
		dato: z.coerce.date(),
		ingress: z.string(),
		tags: z.array(z.string()).default([]),
		lesetid: z.number().optional(),
		bilete: z.string().optional(),
		bileteAlt: z.string().optional(),
		utkast: z.boolean().default(false),
	}),
});

export const collections = { blog };
