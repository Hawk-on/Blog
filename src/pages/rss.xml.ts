import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const base = import.meta.env.BASE_URL;
  const innleggModules = import.meta.glob('./*.md', { eager: true }) as Record<string, any>;
  const innlegg = Object.entries(innleggModules)
    .map(([filsti, modul]) => {
      const slug = filsti.split('/').pop()?.replace('.md', '');
      if (!slug) return null;
      return { ...modul.frontmatter, slug };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.dato).valueOf() - new Date(a.dato).valueOf());

  return rss({
    title: 'hawk-on',
    description: 'Analysar av politikk, økonomi og teknologi.',
    site: context.site!.toString(),
    items: innlegg.map((post) => ({
      title: post.tittel,
      pubDate: new Date(post.dato),
      description: post.ingress || '',
      link: `${base}/${post.slug}/`,
    })),
  });
}
