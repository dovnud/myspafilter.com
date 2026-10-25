import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { readFileSync } from 'node:fs';
const rows = JSON.parse(readFileSync(new URL('./src/data/filters.json', import.meta.url))).filters;
const noindex = new Set(rows.filter(f=>f.index===false).map(f=>`/${f.brandSlug}/${f.modelSlug}/`));
// brand pages with no indexable cartridge page are noindex too, so keep them out of the sitemap
for (const b of new Set(rows.map(f=>f.brandSlug))) if (!rows.some(f=>f.brandSlug===b && f.index!==false)) noindex.add(`/${b}/`);
export default defineConfig({ site: 'https://myspafilter.com', output: 'static', trailingSlash: 'always', integrations: [react(), sitemap({ filter: (p) => !p.includes('/filter/') && !noindex.has(new URL(p).pathname) })] });
