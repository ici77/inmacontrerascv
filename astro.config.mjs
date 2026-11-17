import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inmacontreras.com',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/dossier/') })],
  vite: { plugins: [tailwindcss()] },
});
