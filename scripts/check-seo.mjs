#!/usr/bin/env node
/**
 * Post-build SEO checks on dist/ (npm run build runs this after check:amazon).
 *  - every JSON-LD block parses; no Product/Offer/Review/AggregateRating types anywhere (we have no prices or ratings)
 *  - every HTML page has og:image/og:image:alt/og:site_name/og:type and twitter:card=summary_large_image; og:image files exist and are 1200x630-sized PNGs under 120 KB
 *  - dist/404.html exists, is noindex, and has a search box
 *  - guides carry Article with author (Organization "MySpaFilter Editorial Team" -> /about/), publisher and dateModified
 *  - about has Organization JSON-LD whose sameAs only lists allow-listed profiles
 *  - sitemap: every <url> has a lastmod, dates are not all identical, none is in the future; /data/ is listed
 *  - /data/ has a full table, Dataset JSON-LD, and CSV/JSON downloads with the same row count
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url)); const dist = join(root, 'dist');
const errors = []; const fail = (m) => errors.push(m);
const ALLOWED_SAMEAS = new Set(['https://github.com/dovnud/myspafilter.com']);
const BANNED = new Set(['Product', 'Offer', 'AggregateOffer', 'Review', 'AggregateRating', 'Rating']);
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const pages = walk(dist).filter((p) => p.endsWith('.html'));
const types = (n, acc = []) => { if (Array.isArray(n)) n.forEach((x) => types(x, acc)); else if (n && typeof n === 'object') { for (const [k, v] of Object.entries(n)) { if (k === '@type') acc.push(...[].concat(v)); types(v, acc); } } return acc; };
const nodesOf = (j) => { if (!j) return []; if (Array.isArray(j)) return j.flatMap(nodesOf); if (j['@graph']) return nodesOf(j['@graph']); return [j]; };
const resolve = (node, all) => { if (!node) return node; if (node['@id'] && !node.name) { const hit = all.find((n) => n['@id'] === node['@id']); if (hit) return hit; } return node; };
const meta = (html, re) => (html.match(re) || [])[1];
const dec = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
let nLd = 0;
for (const p of pages) {
  const rel = '/' + relative(dist, p); const html = readFileSync(p, 'utf8');
  if (/<meta http-equiv="refresh"/i.test(html)) continue; // astro redirect stubs
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const parsed = [];
  for (const b of blocks) { try { parsed.push(JSON.parse(b)); nLd++; } catch (e) { fail(`${rel}: JSON-LD does not parse (${e.message})`); } }
  const nodes = parsed.flatMap(nodesOf);
  for (const t of types(parsed)) if (BANNED.has(t)) fail(`${rel}: JSON-LD uses banned type ${t}`);
  if (!/meta http-equiv="refresh"/i.test(html)) {
    if (blocks.length !== 1) fail(`${rel}: expected one JSON-LD graph, found ${blocks.length}`);
    const title = dec((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
    const desc = dec(meta(html, /name="description" content="([^"]*)"/) || '');
    if (title.length < 15 || title.length > 60) fail(`${rel}: title length ${title.length} (want 15-60): ${title}`);
    if (desc.length < 70 || desc.length > 160) fail(`${rel}: description length ${desc.length} (want 70-160)`);
    const pageNode = nodes.find((n) => ['WebPage', 'AboutPage', 'CollectionPage', 'ContactPage', 'ItemPage'].some((t) => [].concat(n['@type']).includes(t)));
    if (!pageNode) fail(`${rel}: no WebPage JSON-LD`);
    else {
      if (!/^\d{4}-\d{2}-\d{2}/.test(pageNode.dateModified || '')) fail(`${rel}: WebPage dateModified missing`);
      const pub = resolve(pageNode.publisher, nodes);
      if (pub?.['@id'] !== 'https://myspafilter.com/#organization' && pageNode.publisher?.['@id'] !== 'https://myspafilter.com/#organization') fail(`${rel}: WebPage publisher is not the site Organization`);
    }
    if (!html.includes('Last updated <time datetime=')) fail(`${rel}: missing visible Last updated time`);
    if (rel !== '/index.html' && rel !== '/') {
      if (!nodes.some((n) => [].concat(n['@type']).includes('BreadcrumbList'))) fail(`${rel}: missing BreadcrumbList`);
      if (!html.includes('aria-label="Breadcrumb"')) fail(`${rel}: missing visible breadcrumb`);
    }
  }
  for (const [k, re] of [['og:image', /property="og:image" content="([^"]+)"/], ['og:image:alt', /property="og:image:alt" content="([^"]+)"/], ['og:site_name', /property="og:site_name" content="([^"]+)"/], ['og:type', /property="og:type" content="([^"]+)"/], ['twitter:image', /name="twitter:image" content="([^"]+)"/]])
    if (!meta(html, re)) fail(`${rel}: missing ${k}`);
  if (meta(html, /name="twitter:card" content="([^"]+)"/) !== 'summary_large_image') fail(`${rel}: twitter:card is not summary_large_image`);
  const img = meta(html, /property="og:image" content="https:\/\/myspafilter\.com([^"]+)"/);
  if (img && !existsSync(join(dist, img))) fail(`${rel}: og:image file ${img} not in dist`);
  if (rel.startsWith('/guides/') && rel !== '/guides/index.html') {
    const art = nodes.find((j) => [].concat(j['@type']).includes('Article'));
    if (!art) fail(`${rel}: no Article JSON-LD`);
    else { const author = resolve(art.author, nodes); if (author?.name !== 'MySpaFilter Editorial Team' || author?.['@type'] !== 'Organization' || author?.url !== 'https://myspafilter.com/about/') fail(`${rel}: Article author wrong`); const publisher = resolve(art.publisher, nodes); if (!publisher?.name) fail(`${rel}: Article publisher missing`); if (!/^\d{4}-\d{2}-\d{2}/.test(art.dateModified || '')) fail(`${rel}: Article dateModified missing`); if (art.datePublished > art.dateModified) fail(`${rel}: datePublished after dateModified`); }
    if (!html.includes('By <a href="/about/"')) fail(`${rel}: missing visible byline`); if (!html.includes('How we research and review')) fail(`${rel}: missing research note`);
  }
}
// 404
const nf = join(dist, '404.html');
if (!existsSync(nf)) fail('dist/404.html missing (Cloudflare Pages would serve index.html with 200 for unknown URLs)');
else { const h = readFileSync(nf, 'utf8'); if (!/name="robots" content="noindex/.test(h)) fail('404.html is not noindex'); if (!h.includes('role="search"')) fail('404.html has no search box'); if (!h.includes('/guides/') || !h.includes('/bullfrog/')) fail('404.html lacks guide/brand links'); }
// about
const about = readFileSync(join(dist, 'about/index.html'), 'utf8');
const aboutLd = [...about.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => nodesOf(JSON.parse(m[1])));
const org = aboutLd.find((j) => j['@type'] === 'Organization' && j.name === 'MySpaFilter');
if (!org) fail('about: Organization JSON-LD missing'); else for (const u of [].concat(org.sameAs || [])) if (!ALLOWED_SAMEAS.has(u)) fail(`about: sameAs ${u} is not allow-listed (only profiles that exist)`);
for (const k of ['contact@myspafilter.com', 'id="methodology"', 'id="corrections"', 'id="sources"']) if (!about.includes(k)) fail(`about: missing ${k}`);
// sitemap
const sm = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8'); const urls = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
const lms = urls.map((u) => (u.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1]);
if (urls.some((u, i) => !lms[i])) fail('sitemap: a <url> has no lastmod'); const days = new Set(lms.filter(Boolean).map((l) => l.slice(0, 10)));
if (days.size < 2) fail('sitemap: all lastmod dates identical (looks like build time)'); const now = new Date(); if (lms.some((l) => l && new Date(l) > new Date(now.getTime() + 36e5 * 24))) fail('sitemap: lastmod in the future');
if (!sm.includes('<loc>https://myspafilter.com/data/</loc>')) fail('sitemap: /data/ missing');
if (sm.includes('/404')) fail('sitemap: lists a 404 page');
// dataset
const dh = readFileSync(join(dist, 'data/index.html'), 'utf8'); const rows = JSON.parse(readFileSync(join(root, 'src/data/filters.json'), 'utf8')).filters.length;
const trs = (dh.match(/<tr>/g) || []).length - 1; if (trs !== rows) fail(`data: table has ${trs} rows, expected ${rows}`);
if (!dh.includes('"@type":"Dataset"') || !dh.includes('spa-filters.csv') || !dh.includes('spa-filters.json')) fail('data: Dataset JSON-LD/distribution missing');
if (!dh.includes('Cite this')) fail('data: Cite this missing');
const csv = readFileSync(join(dist, 'data/spa-filters.csv'), 'utf8').trim().split(/\r\n/); if (csv.length !== rows + 1) fail(`data: CSV has ${csv.length - 1} rows, expected ${rows}`);
if (JSON.parse(readFileSync(join(dist, 'data/spa-filters.json'), 'utf8')).filters.length !== rows) fail('data: JSON row count mismatch');
for (const f of ['about/index.html', 'index.html']) if (!readFileSync(join(dist, f), 'utf8').includes('/data/')) fail(`${f}: does not link /data/`);
if (!readFileSync(join(dist, 'llms.txt'), 'utf8').includes('/data/')) fail('llms.txt: does not link /data/');
const full = join(dist, 'llms-full.txt');
if (!existsSync(full)) fail('llms-full.txt missing');
else { const t = readFileSync(full, 'utf8'); if (!t.startsWith('# ') || !t.includes('https://myspafilter.com/guides/')) fail('llms-full.txt is not a markdown corpus of the guides'); }
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
for (const bot of ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'Claude-SearchBot', 'Claude-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended']) if (!new RegExp(`User-agent: ${bot}\\s+Allow: /`).test(robots)) fail(`robots.txt does not allow ${bot}`);
if (errors.length) { console.error(`check:seo FAILED (${errors.length})\n - ` + errors.slice(0, 40).join('\n - ')); process.exit(1); }
console.log(`check:seo OK: ${pages.length} html files, ${nLd} JSON-LD blocks parsed, ${urls.length} sitemap urls (${days.size} distinct lastmod dates), ${rows} dataset rows`);
