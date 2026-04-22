import { getCollection } from 'astro:content';

export async function GET() {
  const innlegg = await getCollection('blog', ({ data }) => {
    return !data.utkast;
  });

  const sorterteInnlegg = innlegg
    .sort((a, b) => b.data.dato.valueOf() - a.data.dato.valueOf())
    .slice(0, 3)
    .map(i => ({
      tittel: i.data.tittel,
      dato: i.data.dato,
      ingress: i.data.ingress,
      url: `https://hawk-on.github.io/Blog/${i.id}/`
    }));

  return new Response(JSON.stringify(sorterteInnlegg), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
