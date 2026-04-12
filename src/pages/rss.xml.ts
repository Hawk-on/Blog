import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const innleggModules = import.meta.glob('./*.md', { eager: true }) as Record<string, any>;
  const innlegg = Object.entries(innleggModules)
    .map(([filsti, modul]) => ({
      ...modul.frontmatter,
      slug: filsti.split('/').pop()?.replace('.md', ''),
    }))
    .sort((a, b) => new Date(b.dato).valueOf() - new Date(a.dato).valueOf());

  return rss({
    title: 'Håkon Hole Lønning',
    description: 'Analysar av politikk, økonomi og teknologi.',
    site: context.site!.toString(),
    items: innlegg.map((post) => ({
      title: post.tittel,
      pubDate: new Date(post.dato),
      description: post.ingress || '',
      link: `/Blog/${post.slug}/`,
    })),
  });
}
