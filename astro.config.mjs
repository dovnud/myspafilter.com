import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
export default defineConfig({ site: 'https://myspafilter.com', output: 'static', trailingSlash: 'always', integrations: [react(), sitemap({ filter: (p) => !p.includes('/filter/') })] });
