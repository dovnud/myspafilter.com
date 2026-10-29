import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { readFileSync } from 'node:fs';
import { pageLastmod } from './src/lib/lastmod.ts';
import { writeLlmsFull } from './src/lib/llmsFull.ts';
writeLlmsFull();
const rows = JSON.parse(readFileSync(new URL('./src/data/filters.json', import.meta.url))).filters;
const noindex = new Set(rows.filter(f=>f.index===false).map(f=>`/${f.brandSlug}/${f.modelSlug}/`));
// brand pages with no indexable cartridge page are noindex too, so keep them out of the sitemap
for (const b of new Set(rows.map(f=>f.brandSlug))) if (!rows.some(f=>f.brandSlug===b && f.index!==false)) noindex.add(`/${b}/`);
export default defineConfig({ site: 'https://myspafilter.com', output: 'static', trailingSlash: 'always',
  // inline the (small, shared) stylesheet so first paint never waits on a render-blocking CSS request
  build: { inlineStylesheets: 'always' }, integrations: [react(), sitemap({
  filter: (p) => !p.includes('/filter/') && !noindex.has(new URL(p).pathname),
  // real per-page dates from git / reviewed dates (src/data/lastmod.json via scripts/gen-lastmod.mjs), never build time
  serialize(item) { const d = pageLastmod(new URL(item.url).pathname); if (d) item.lastmod = `${d}T00:00:00.000Z`; return item; }
})] });
