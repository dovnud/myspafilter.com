#!/usr/bin/env node
/**
 * Build-time Amazon Associates compliance check. Run after `astro build` (npm run build does this).
 *
 *   npm run check:amazon              full check (config + data + built pages in dist/)
 *   node scripts/check-amazon.mjs --src-only   config + data only (no dist/ needed)
 *
 * Fails (exit 1) when:
 *  - amazonTag is set but malformed (expected like "yourname-20"),
 *  - an ASIN record is malformed, or its listing part is not one of the row's Unicel/Pleatco/OEM parts,
 *  - any built page links to amazon.com/dp/<ASIN> without a verified record in src/data/amazon-asins.json or src/data/amazon-products.json (titleToken must appear in the verified title),
 *  - any built page with an Amazon link lacks the visible Associate disclosure text next to the buy buttons,
 *  - an Amazon link on a page lacks rel="sponsored nofollow", or carries a tag different from the configured one
 *    (so with an empty tag no tag may appear anywhere),
 *  - a page with Amazon links shows a hand-typed "$12" style price or has a mailto: link (mailto links elsewhere, e.g. /contact/, are fine).
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';
const errors = [];
const fail = (m) => errors.push(m);

// ---- config: tag ----
const cfgSrc = readFileSync(join(root, 'src/config/affiliate.ts'), 'utf8');
const tagMatch = cfgSrc.match(/amazonTag:\s*(['"`])([^'"`]*)\1/);
if (!tagMatch) fail('Could not find amazonTag in src/config/affiliate.ts');
const tag = tagMatch ? tagMatch[2] : '';
const TAG_RE = /^[a-z0-9][a-z0-9_-]{0,58}-\d{2}$/i; // e.g. yourname-20
if (tag && !TAG_RE.test(tag)) fail(`amazonTag "${tag}" is malformed (expected something like "yourname-20")`);

// ---- data: ASIN records ----
const asinFile = JSON.parse(readFileSync(join(root, 'src/data/amazon-asins.json'), 'utf8'));
const records = asinFile.asins || {};
const rows = JSON.parse(readFileSync(join(root, 'src/data/filters.json'), 'utf8')).filters;
const norm = (s) => String(s).toUpperCase().replace(/[^A-Z0-9]/g, '');
const labelOf = (f) => f.equivalents?.unicel || f.equivalents?.pleatco || f.oem;
const asinSet = new Set();
for (const [part, r] of Object.entries(records)) {
  const where = `amazon-asins.json "${part}"`;
  if (!/^[A-Z0-9]{10}$/.test(r.asin || '')) fail(`${where}: asin "${r.asin}" is not a 10-character ASIN`);
  for (const k of ['listingBrand', 'listingPart', 'titleSeen', 'verifiedNote']) if (!r[k]) fail(`${where}: missing ${k}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.verifiedDate || '')) fail(`${where}: missing/invalid verifiedDate`);
  if (r.titleSeen && r.listingPart && !norm(r.titleSeen).includes(norm(r.listingPart))) fail(`${where}: titleSeen does not contain listingPart "${r.listingPart}"`);
  if (r.verifiedNote && r.asin && !r.verifiedNote.includes(r.asin)) fail(`${where}: verifiedNote does not mention the ASIN`);
  const matching = rows.filter((f) => labelOf(f) === part);
  if (!matching.length) fail(`${where}: no cartridge row uses this part label`);
  for (const f of matching) {
    const ok = [f.equivalents?.unicel, f.equivalents?.pleatco, ...(f.oemAll || f.oem || '').split(';')]
      .filter(Boolean).some((p) => norm(p.trim()) === norm(r.listingPart));
    if (!ok) fail(`${where}: listingPart "${r.listingPart}" is not a Unicel/Pleatco/OEM part of ${f.brandSlug}/${f.modelSlug}`);
  }
  asinSet.add(r.asin);
}

// ---- data: non-cartridge product records (src/data/amazon-products.json) ----
const productFile = JSON.parse(readFileSync(join(root, 'src/data/amazon-products.json'), 'utf8'));
const productRecords = productFile.products || {};
const productAsins = new Set();
for (const [key, r] of Object.entries(productRecords)) {
  const where = `amazon-products.json "${key}"`;
  if (!/^[A-Z0-9]{10}$/.test(r.asin || '')) fail(`${where}: asin "${r.asin}" is not a 10-character ASIN`);
  for (const k of ['name', 'brand', 'category', 'says', 'titleToken', 'titleSeen', 'verifiedNote']) if (!r[k]) fail(`${where}: missing ${k}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.verifiedDate || '')) fail(`${where}: missing/invalid verifiedDate`);
  if (r.titleSeen && r.titleToken && !r.titleSeen.toLowerCase().includes(r.titleToken.toLowerCase())) fail(`${where}: titleSeen does not contain titleToken "${r.titleToken}"`);
  if (r.verifiedNote && r.asin && !r.verifiedNote.includes(r.asin)) fail(`${where}: verifiedNote does not mention the ASIN`);
  if (/\$\s?\d|\bstars?\b|\brating/i.test(`${r.name} ${r.says}`)) fail(`${where}: name/says must not contain prices or ratings`);
  productAsins.add(r.asin);
}
for (const a of productAsins) asinSet.add(a);

// ---- built pages ----
const srcOnly = process.argv.includes('--src-only');
const stats = { pages: 0, amazonPages: 0, dp: 0, search: 0, tagged: 0 };
const distinctDp = new Set();
const distinctSearch = new Set();
if (!srcOnly) {
  const dist = join(root, 'dist');
  if (!existsSync(dist)) fail('dist/ not found: run `npm run build` first (or use --src-only)');
  else {
    const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []; });
    for (const file of walk(dist)) {
      stats.pages++;
      const html = readFileSync(file, 'utf8');
      const page = '/' + relative(dist, file).replace(/index\.html$/, '');
      const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map((m) => m[0]);
      const amz = anchors.filter((a) => /href=["']https?:\/\/(www\.)?amazon\.com\//i.test(a));
      for (const img of [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0])) {
        const src = (img.match(/\bsrc=["']([^"']+)["']/i) || [])[1] || '';
        const source = (img.match(/\bdata-image-source=["']([^"']+)["']/i) || [])[1] || '';
        let host = '';
        try { host = new URL(src, 'https://myspafilter.com').hostname; } catch { /* relative or empty */ }
        const cdn = /(^|\.)(media-amazon\.com|ssl-images-amazon\.com|images-amazon\.com)$/.test(host);
        const widget = host === 'ws-na.amazon-adsystem.com' || host === 'ws-eu.amazon-adsystem.com';
        if (cdn && source !== 'pa-api') fail(`${page}: Amazon product-photo hotlink is not allowed (${src}). Use a PA-API image or leave the card without an image.`);
        if (widget && source !== 'sitestripe') fail(`${page}: amazon-adsystem image without data-image-source="sitestripe" (${src})`);
        if ((source === 'pa-api' || source === 'sitestripe') && !/\bloading=["']lazy["']/.test(img)) fail(`${page}: product image must set loading="lazy"`);
        if (source && source !== 'pa-api' && source !== 'sitestripe') fail(`${page}: unknown data-image-source "${source}"`);
      }
      if (/url\(\s*['"]?https?:\/\/[^)'"]*(media-amazon\.com|ssl-images-amazon\.com|images-amazon\.com)/i.test(html)) fail(`${page}: CSS hotlinks an Amazon product image`);
      if (!amz.length) continue;
      stats.amazonPages++;
      if (/href=["']mailto:/i.test(html)) fail(`${page}: page with Amazon links contains a mailto: link`);
      // visible disclosure next to the buy buttons (the sitewide bar does not count)
      const note = html.match(/<p[^>]*data-amazon-disclosure[^>]*>[\s\S]*?<\/p>/i);
      if (!note || !note[0].replace(/<[^>]+>/g, '').includes(DISCLOSURE)) fail(`${page}: Amazon link without "${DISCLOSURE}" in the data-amazon-disclosure note`);
      const buyIdx = html.indexOf('class="buy"');
      if (note && buyIdx > -1 && html.indexOf(note[0]) < buyIdx) fail(`${page}: disclosure note must come after the buy buttons`);
      const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
      if (/\$\s?\d/.test(text)) fail(`${page}: shows a dollar price on a page with Amazon links (no hand-typed prices)`);
      for (const a of amz) {
        const href = (a.match(/href=["']([^"']+)["']/i) || [])[1].replace(/&amp;/g, '&');
        const rel = (a.match(/rel=["']([^"']+)["']/i) || [])[1] || '';
        if (!/\bsponsored\b/.test(rel) || !/\bnofollow\b/.test(rel)) fail(`${page}: Amazon link missing rel="sponsored nofollow": ${href}`);
        const u = new URL(href);
        const t = u.searchParams.get('tag') || '';
        if (t) stats.tagged++;
        // a tag must sit at the END of the URL (?tag= on /dp/ links, &tag= on search links)
        if (tag && !href.endsWith(`${u.pathname.startsWith('/dp/') ? '?' : '&'}tag=${tag}`)) fail(`${page}: Amazon link does not end with the expected tag parameter: ${href}`);
        if (t !== tag) fail(`${page}: Amazon link tag "${t}" does not match configured amazonTag "${tag}": ${href}`);
        const dp = u.pathname.match(/^\/dp\/([A-Z0-9]{10})\/?$/);
        if (dp) {
          stats.dp++; distinctDp.add(dp[1]);
          if (!asinSet.has(dp[1])) fail(`${page}: /dp/${dp[1]} has no verified record in src/data/amazon-asins.json`);
        } else if (u.pathname.startsWith('/dp/') || u.pathname.includes('/dp/')) fail(`${page}: unsupported Amazon product URL ${href}`);
        else if (u.pathname === '/s') { stats.search++; distinctSearch.add(u.searchParams.get('k')); }
        else fail(`${page}: unexpected Amazon URL ${href}`);
      }
    }
  }
}

if (errors.length) {
  console.error(`check:amazon FAILED (${errors.length}):`);
  for (const e of errors.slice(0, 60)) console.error(' - ' + e);
  if (errors.length > 60) console.error(` ...and ${errors.length - 60} more`);
  process.exit(1);
}
console.log(`check:amazon OK. tag=${tag ? '"' + tag + '"' : '(none)'}; ${asinSet.size} verified ASIN records (${Object.keys(records).length} cartridge + ${productAsins.size} product); ` +
  (srcOnly ? 'dist not checked.' : `${stats.amazonPages}/${stats.pages} pages have Amazon links (${stats.dp} direct /dp/ links to ${distinctDp.size} distinct ASINs, ${stats.search} search links to ${distinctSearch.size} distinct queries; ${stats.tagged} links carry the tag).`));
