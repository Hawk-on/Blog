import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hawk-on.github.io',
  base: '/Blog',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
