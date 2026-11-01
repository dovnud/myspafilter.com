import lm from '../data/lastmod.json';
import { filters, type Filter } from './data';
import { guides } from './guides';
import { extraGuides } from './guides2';
import { REVIEWED } from './guidesrc';
import { FITMENT_DATE, pages as fitPages } from './fitment';
type LM = { rows: Record<string, string>; files: Record<string, string>; first: Record<string, string> };
const L = lm as unknown as LM;
const max = (xs: (string | undefined)[]) => xs.filter(Boolean).sort().at(-1) as string;
export const rowDate = (f: Filter) => L.rows[`${f.brandSlug}/${f.modelSlug}`] || L.files['src/pages/index.astro'];
export const fileDate = (p: string) => L.files[p];
export const dataDate = () => max(filters.map(rowDate));
export const dataFirstDate = () => L.first['src/data/filters.json'];
export const brandDate = (slug: string) => max([...filters.filter((f) => f.brandSlug === slug).map(rowDate), fileDate('src/lib/brandcopy.ts')]);
export const guideDate = (g: { reviewed?: string }) => g.reviewed || REVIEWED;
const extra = new Set(extraGuides.map((g) => g.slug));
/** First-published date: first commit of the file that defines the guide, never later than its review date. */
export const guidePublished = (g: { slug: string; reviewed?: string; published?: string }) => {
  if (g.published) return g.published;
  const f = extra.has(g.slug) ? 'src/lib/guides2.ts' : 'src/lib/guides.ts';
  return [L.first[f], guideDate(g)].sort()[0];
};
export const isSupplies = (slug: string) => extra.has(slug);
export const guidesDate = () => max(guides.map(guideDate));
/** Sitemap lastmod for a built pathname (date only, YYYY-MM-DD). */
export function pageLastmod(pathname: string): string | undefined {
  const seg = pathname.split('/').filter(Boolean);
  if (seg.length === 0) return max([fileDate('src/pages/index.astro'), dataDate()]);
  if (seg[0] === 'guides') { if (seg.length === 1) return max([fileDate('src/pages/guides/index.astro'), guidesDate()]); const g = guides.find((x) => x.slug === seg[1]); return g ? guideDate(g) : undefined; }
  if (seg[0] === 'fitment' && seg.length === 2) return fitPages.find((x) => x.slug === seg[1])?.date || FITMENT_DATE;
  if (seg[0] === 'supplies') return max([fileDate('src/pages/supplies/index.astro'), ...guides.filter((g) => extra.has(g.slug)).map(guideDate)]);
  if (seg[0] === 'size') return max([fileDate('src/pages/size/index.astro'), dataDate()]);
  if (seg[0] === 'tools' && seg.length === 1) return fileDate('src/pages/tools/index.astro') || '2026-11-01';
  if (seg[0] === 'tools' && seg[1] === 'cross-reference') return max([fileDate('src/pages/tools/cross-reference.astro'), fileDate('src/lib/xref.mjs'), dataDate()]) || '2026-11-01';
  if (seg[0] === 'tools' && seg[1] === 'filter-schedule') return max([fileDate('src/pages/tools/filter-schedule.astro'), fileDate('src/lib/care-calc.mjs')]) || '2026-11-01';
  if (seg[0] === 'data') return max([fileDate('src/pages/data/index.astro'), dataDate()]);
  const st: Record<string, string> = { about: 'about', contact: 'contact', guide: 'guide', 'affiliate-disclosure': 'affiliate-disclosure', disclaimer: 'disclaimer', privacy: 'privacy', terms: 'terms' };
  if (st[seg[0]] && seg.length === 1) return fileDate(`src/pages/${st[seg[0]]}.astro`);
  if (seg.length === 1) return brandDate(seg[0]);
  if (seg.length === 2) { const f = filters.find((x) => x.brandSlug === seg[0] && x.modelSlug === seg[1]); return f ? rowDate(f) : undefined; }
  return undefined;
}
