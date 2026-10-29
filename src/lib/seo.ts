import { brands, filters } from './data';
import { guides } from './guides';
import { pages as fitPages } from './fitment';
import { pageLastmod, fileDate } from './lastmod';
import { SITE, ORG_ID, EDITORIAL_ID, organization, editorialTeam, publisherRef } from './schema';

const WEBSITE_ID = `${SITE}#website`;
const PAGE_TYPES = new Set(['WebPage', 'AboutPage', 'CollectionPage', 'ContactPage', 'SearchResultsPage', 'ItemPage', 'ProfilePage', 'FAQPage', 'CheckoutPage']);

const PAD = 'Cited OEM, Unicel, Pleatco and Filbur spa filter numbers, with sizes and sources.';
const DANGLING = /^(and|or|the|a|an|of|to|for|with|how|each|from|by|in|on|&)$/i;

function tidy(s: string): string {
  let parts = s.replace(/\s+/g, ' ').trim().split(' ');
  while (parts.length > 4 && DANGLING.test(parts[parts.length - 1].replace(/[.,;:&|–—/-]+$/g, ''))) parts.pop();
  return parts.join(' ').replace(/[\s|–—,:;&/-]+$/g, '').trim();
}

export function metaTitle(raw: string): string {
  let s = tidy(raw);
  if (s.length > 60) s = s.replace(/\s+[|–—-]\s+MySpaFilter$/, '').trim();
  if (s.length > 60) {
    const cut = s.slice(0, 60);
    const sp = cut.lastIndexOf(' ');
    s = tidy(sp >= 15 ? cut.slice(0, sp) : cut);
  }
  if (s.length > 60) s = tidy(s.slice(0, 60));
  return s.length >= 15 ? s : tidy(raw).slice(0, 60);
}

export function metaDescription(raw: string): string {
  let s = tidy(raw);
  if (s.length < 120) {
    const joiner = /[.!?]$/.test(s) ? ' ' : '. ';
    const next = tidy(`${s}${joiner}${PAD}`);
    if (next.length >= 70 && next.length <= 155) s = next;
  }
  if (s.length > 155) {
    const cut = s.slice(0, 155);
    const sp = cut.lastIndexOf(' ');
    s = tidy(sp >= 70 ? cut.slice(0, sp) : cut);
  }
  if (!/[.!?]$/.test(s) && s.length < 155) s += '.';
  if (s.length > 160) s = tidy(s.slice(0, 150)) + '.';
  if (s.length < 70) s = tidy(`${s.replace(/\.$/, '')}. ${PAD}`.slice(0, 155));
  return s;
}

export function isoDate(d?: string): string {
  const day = (d || fileDate('src/pages/index.astro') || '2026-10-25').slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : '2026-10-25';
}

export function longDate(d: string): string {
  return new Date(isoDate(d) + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

const LABELS: Record<string, string> = {
  about: 'About', contact: 'Contact', guide: 'Measuring guide', guides: 'Guides', supplies: 'Supplies',
  data: 'Dataset', size: 'Size lookup', privacy: 'Privacy', terms: 'Terms', disclaimer: 'Disclaimer',
  'affiliate-disclosure': 'Affiliate disclosure', filter: 'Part number', fitment: 'Fitment',
};

function abs(href: string): string {
  if (href.startsWith('http')) return href;
  return new URL(href, SITE).href;
}

function pathOf(item: string): string {
  try { return new URL(item, SITE).pathname; } catch { return item; }
}

type Crumb = { name: string; href: string };

function fallbackCrumbs(pathname: string, title: string): Crumb[] {
  if (pathname === '/' || pathname === '') return [];
  const seg = pathname.split('/').filter(Boolean);
  const home: Crumb = { name: 'Home', href: '/' };
  const here = abs(pathname);
  if (seg[0] === 'guides' && seg.length === 1) return [home, { name: 'Guides', href: '/guides/' }];
  if (seg[0] === 'guides' && seg.length >= 2) {
    const g = guides.find((x) => x.slug === seg[1]);
    return [home, { name: 'Guides', href: '/guides/' }, { name: g?.title || title, href: pathname }];
  }
  if (seg[0] === 'fitment' && seg.length >= 2) {
    const p = fitPages.find((x) => x.slug === seg[1]);
    return [home, { name: p ? `${p.crumbBrand} filters` : 'Fitment', href: p ? `/${p.brandSlug}/` : '/guides/' }, { name: p?.h1 || title, href: pathname }];
  }
  if (seg[0] === 'filter' && seg.length >= 2) return [home, { name: seg[1].toUpperCase(), href: pathname }];
  if (seg.length === 1) {
    const b = brands().find((x) => x.slug === seg[0]);
    return [home, { name: b ? `${b.name} spa filters` : (LABELS[seg[0]] || title), href: pathname }];
  }
  if (seg.length >= 2) {
    const b = brands().find((x) => x.slug === seg[0]);
    const f = filters.find((x) => x.brandSlug === seg[0] && x.modelSlug === seg[1]);
    if (b) return [home, { name: b.name, href: `/${b.slug}/` }, { name: f?.model || title, href: pathname }];
  }
  return [home, { name: title, href: pathOf(here) }];
}

function crumbsFromLd(nodes: any[]): Crumb[] | null {
  const bc = nodes.find((n) => [].concat(n['@type']).includes('BreadcrumbList'));
  const items = bc?.itemListElement;
  if (!Array.isArray(items) || !items.length) return null;
  return items.map((it: any) => ({ name: String(it.name || 'Page'), href: it.item ? pathOf(String(it.item)) : '/' }));
}

function typesOf(n: any): string[] { return [].concat(n?.['@type'] || []); }

function flatten(extra: any[] = []): any[] {
  const out: any[] = [];
  for (const n of extra) {
    if (!n || typeof n !== 'object') continue;
    if (Array.isArray(n['@graph'])) out.push(...n['@graph']);
    else {
      const { ['@context']: _c, ...rest } = n;
      out.push(rest);
    }
  }
  return out;
}

/** One schema.org @graph for every page: Organization, WebSite, WebPage, and a BreadcrumbList off the homepage. */
export function buildPageGraph(opts: { pathname: string; title: string; description: string; modified: string; extra?: any[] }): { json: object; crumbs: Crumb[] } {
  const url = abs(opts.pathname);
  const modified = opts.modified?.includes('T') ? opts.modified : `${isoDate(opts.modified)}T00:00:00Z`;
  const incoming = flatten(opts.extra);
  const pageNode = incoming.find((n) => typesOf(n).some((t) => PAGE_TYPES.has(t) && t !== 'FAQPage'));
  const orgIn = incoming.find((n) => n['@id'] === ORG_ID || (typesOf(n).includes('Organization') && n.name === 'MySpaFilter' && n.url === SITE));
  const org = { ...organization, ...(orgIn || {}), '@type': 'Organization', '@id': ORG_ID, name: 'MySpaFilter', url: SITE, logo: organization.logo, sameAs: organization.sameAs, email: organization.email };
  const teamIn = incoming.find((n) => n['@id'] === EDITORIAL_ID);
  const team = { ...editorialTeam, ...(teamIn || {}), '@id': EDITORIAL_ID, name: 'MySpaFilter Editorial Team', url: `${SITE}about/` };

  const page = pageNode ? { ...pageNode } : { '@type': 'WebPage' };
  page['@id'] = page['@id'] || `${url}#webpage`;
  page.url = page.url || url;
  page.name = page.name || opts.title;
  page.description = opts.description;
  page.inLanguage = page.inLanguage || 'en-US';
  page.dateModified = modified;
  page.publisher = { '@id': ORG_ID };
  page.isPartOf = { '@id': WEBSITE_ID };
  if (!page.author) page.author = { '@id': EDITORIAL_ID };

  const rest = incoming.filter((n) => n !== pageNode && n !== orgIn && n !== teamIn && n['@id'] !== WEBSITE_ID && !typesOf(n).includes('BreadcrumbList'));
  for (const n of rest) {
    if (typesOf(n).includes('Article')) {
      n.dateModified = n.dateModified || modified;
      if (!n.publisher?.name) n.publisher = publisherRef;
      if (!n.author?.name) n.author = editorialTeam;
      if (n['@id']) page.mainEntity = { '@id': n['@id'] };
    }
    if (typesOf(n).includes('Dataset')) {
      n.dateModified = n.dateModified || modified;
      if (n['@id']) page.mainEntity = { '@id': n['@id'] };
    }
  }

  const isHome = opts.pathname === '/';
  const fromLd = crumbsFromLd(incoming);
  const crumbs = isHome ? [] : (fromLd || fallbackCrumbs(opts.pathname, opts.title));
  const nodes: any[] = [
    org,
    team,
    { '@type': 'WebSite', '@id': WEBSITE_ID, name: 'MySpaFilter', url: SITE, inLanguage: 'en-US', publisher: { '@id': ORG_ID } },
    page,
  ];
  if (!isHome && crumbs.length) {
    const bc = {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, ...(c.href ? { item: abs(c.href) } : {}) })),
    };
    page.breadcrumb = { '@id': bc['@id'] };
    nodes.push(bc);
  }
  nodes.push(...rest);
  return { json: { '@context': 'https://schema.org', '@graph': nodes }, crumbs };
}

export function modifiedFor(pathname: string): string {
  return isoDate(pageLastmod(pathname) || fileDate('src/pages/index.astro'));
}
