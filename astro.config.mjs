import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { readFileSync } from 'node:fs';
const noindex = new Set(JSON.parse(readFileSync(new URL('./src/data/filters.json', import.meta.url))).filters.filter(f=>f.index===false).map(f=>`/${f.brandSlug}/${f.modelSlug}/`));
export default defineConfig({ site: 'https://myspafilter.com', output: 'static', trailingSlash: 'always', integrations: [react(), sitemap({ filter: (p) => !p.includes('/filter/') && !noindex.has(new URL(p).pathname) })] });
