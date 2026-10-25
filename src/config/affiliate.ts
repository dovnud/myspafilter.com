/**
 * Affiliate / outbound retailer link settings.
 *
 * This is the ONLY place retailer outbound links are built. Pages call
 * `retailerLinks(partNumber)` from here and never assemble retailer URLs themselves.
 *
 * Everything below ships EMPTY on purpose. While a value is an empty string the
 * matching retailer link is a plain search URL with no tracking parameter.
 * Never put a made-up ID here: paste the real one from your affiliate dashboard.
 */
import asinData from '../data/amazon-asins.json';
import productData from '../data/amazon-products.json';

export const affiliate = {
  /**
   * Amazon Associates tracking ID for myspafilter.com ONLY (never reuse on another site). Empty = no tag on any Amazon link.
   * THIS IS THE ONE-LINE SWAP: paste your real ID here and every Amazon link (direct /dp/ and search) gets it.
   * `npm run check:amazon` fails the build if the value is set but malformed.
   */
  amazonTag: 'myspafilter-20',
  /** Awin publisher ID (the number after "awinaffid") for the FiltersFast program (Awin merchant 73760). Empty = plain filtersfast.com search link. */
  awinFiltersFast: '',
  /** Doheny's tracking-link ID from Ascend (Pepperjam), the segment after "pjtra.com/t/". Empty = plain doheny.com search link. */
  dohenyId: '',
};

/** Awin merchant ID for FiltersFast (from the Awin merchant profile, ui.awin.com/merchant-profile/73760). */
export const FILTERSFAST_AWIN_MID = '73760';

export type RetailerLink = {
  id: 'filtersfast' | 'amazon' | 'dohenys';
  name: string;
  href: string;
  /** Amazon only: true when href is a verified direct /dp/<ASIN> link (false = search link). */
  direct?: boolean;
  /** Amazon direct links only: the brand + part number of the listing the button opens. */
  listing?: string;
};

export type AsinRecord = {
  asin: string;
  listingBrand: string;
  listingPart: string;
  titleSeen: string;
  verifiedDate: string;
  verifiedNote: string;
};

/** Verified Amazon ASINs keyed by the retail part label (src/data/amazon-asins.json). */
export const verifiedAsins = (asinData as { asins: Record<string, AsinRecord> }).asins;

const q = (term: string) => encodeURIComponent(term.trim()).replace(/%20/g, '+');

/** Search term used on every retailer: the part number plus "spa filter". */
const searchTerm = (part: string) => `${part} spa filter`;

/**
 * Amazon link for a part. Uses the direct https://www.amazon.com/dp/<ASIN> link only when a verified
 * ASIN record exists for the part; otherwise falls back to an amazon.com search URL.
 */
export function amazonLink(part: string, cfg = affiliate): string {
  const rec = verifiedAsins[part];
  if (rec) {
    const base = `https://www.amazon.com/dp/${rec.asin}`;
    return cfg.amazonTag ? `${base}?tag=${encodeURIComponent(cfg.amazonTag)}` : base;
  }
  const base = `https://www.amazon.com/s?k=${q(searchTerm(part))}`;
  return cfg.amazonTag ? `${base}&tag=${encodeURIComponent(cfg.amazonTag)}` : base;
}

export function filtersFastLink(part: string, cfg = affiliate): string {
  const plain = `https://www.filtersfast.com/search?q=${q(searchTerm(part))}`;
  return cfg.awinFiltersFast
    ? `https://www.awin1.com/cread.php?awinmid=${FILTERSFAST_AWIN_MID}&awinaffid=${encodeURIComponent(cfg.awinFiltersFast)}&ued=${encodeURIComponent(plain)}`
    : plain;
}

export function dohenysLink(part: string, cfg = affiliate): string {
  const plain = `https://www.doheny.com/search?q=${q(searchTerm(part))}`;
  return cfg.dohenyId ? `https://www.pjtra.com/t/${encodeURIComponent(cfg.dohenyId)}?url=${encodeURIComponent(plain)}` : plain;
}

function amazonButton(part: string, cfg: typeof affiliate): RetailerLink {
  const rec = verifiedAsins[part];
  return {
    id: 'amazon',
    name: 'Amazon',
    href: amazonLink(part, cfg),
    direct: !!rec,
    listing: rec ? `${rec.listingBrand} ${rec.listingPart}` : undefined,
  };
}

/** All retailer buttons for a part number, in display order. */
export function retailerLinks(part: string, cfg = affiliate): RetailerLink[] {
  if (!part) return [];
  return [
    { id: 'filtersfast', name: 'FiltersFast', href: filtersFastLink(part, cfg) },
    amazonButton(part, cfg),
    { id: 'dohenys', name: "Doheny's", href: dohenysLink(part, cfg) },
  ];
}

/** Attributes every outbound retailer link must carry. */
export const outboundRel = 'sponsored nofollow';


// ---------------------------------------------------------------------------
// Non-cartridge products (guides, supplies): verified /dp/ links + generic search links.
// Every Amazon URL on the site is still built in this file, so the tag is a single setting above.
// ---------------------------------------------------------------------------

export type ProductRecord = {
  asin: string;
  /** Short display name we show on the page. */
  name: string;
  /** Brand as printed by the listing. */
  brand: string;
  /** Guide category: tests, sanitizer, shock, balance, filter-clean, stain, water-fix, tools, cover, steps. */
  category: string;
  /** What the listing title itself states (kept factual, no prices or ratings). */
  says: string;
  /** Text that must appear in titleSeen (brand or model). Enforced by check:amazon. */
  titleToken: string;
  titleSeen: string;
  verifiedDate: string;
  verifiedNote: string;
};

export const products = (productData as { products: Record<string, ProductRecord> }).products;

const withTag = (url: string, cfg = affiliate) => {
  if (!cfg.amazonTag) return url;
  return `${url}${url.includes('?') ? '&' : '?'}tag=${encodeURIComponent(cfg.amazonTag)}`;
};

/** Direct amazon.com/dp/<ASIN> link for a verified product key. Throws at build time if the key has no record. */
export function productLink(key: string, cfg = affiliate): string {
  const rec = products[key];
  if (!rec) throw new Error(`No verified product record for "${key}" in src/data/amazon-products.json`);
  return withTag(`https://www.amazon.com/dp/${rec.asin}`, cfg);
}

/** Generic Amazon search link, used where the right item depends on your spa model (headrests, cover protectors, straps...). */
export function searchLink(query: string, cfg = affiliate): string {
  return withTag(`https://www.amazon.com/s?k=${q(query)}`, cfg);
}
