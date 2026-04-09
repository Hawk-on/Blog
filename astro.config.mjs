import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hawk-on.github.io',
  base: '/blog',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
