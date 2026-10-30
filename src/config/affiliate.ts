/**
 * Affiliate / outbound retailer link settings.
 *
 * This is the ONLY place retailer outbound links are built. Pages call
 * `retailerLinks(partNumber)` from here and never assemble retailer URLs themselves.
 *
 * The Amazon tag below is this site's own Associates ID. Other retailer IDs ship
 * empty on purpose: an empty ID renders no link (not a plain search, and not
 * another site's ID). Never put a made-up ID here.
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
  /** Awin publisher ID (the number after "awinaffid") for the FiltersFast program (Awin merchant 73760). Empty = no FiltersFast link is rendered. */
  awinFiltersFast: '',
  /** Doheny's tracking-link ID from Ascend (Pepperjam), the segment after "pjtra.com/t/". Empty = no Doheny's link is rendered. */
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

/** Retailer buttons for one part. Amazon first. FiltersFast and Doheny's only after this site's own ID is set. */
export function retailerLinks(part: string, cfg = affiliate): RetailerLink[] {
  if (!part) return [];
  const links: RetailerLink[] = [amazonButton(part, cfg)];
  if (cfg.awinFiltersFast) links.push({ id: 'filtersfast', name: 'FiltersFast', href: filtersFastLink(part, cfg) });
  if (cfg.dohenyId) links.push({ id: 'dohenys', name: "Doheny's", href: dohenysLink(part, cfg) });
  return links;
}

type CartridgeRef = {
  searchTerm?: string;
  oem?: string;
  oemAll?: string;
  equivalents?: { unicel?: string; pleatco?: string; filbur?: string };
};

const primaryPart = (f: CartridgeRef) => f.searchTerm || f.equivalents?.unicel || f.equivalents?.pleatco || f.oem || '';

/**
 * Amazon buttons for one cartridge row. A checked /dp/ link for every distinct
 * verified ASIN already on file for this row's part numbers, then one search
 * only when the primary part has no ASIN. No second button is invented.
 * Unapproved retailers stay off the page until their ID is filled in above.
 */
export function cartridgeBuyLinks(f: CartridgeRef, cfg = affiliate): RetailerLink[] {
  const primary = primaryPart(f);
  const bits: string[] = [];
  const pushBit = (raw?: string) => {
    for (const bit of String(raw || '').split(/[;/]/)) {
      const t = bit.trim();
      if (t && !bits.includes(t)) bits.push(t);
    }
  };
  pushBit(primary);
  pushBit(f.oem);
  pushBit(f.oemAll);
  pushBit(f.equivalents?.unicel);
  pushBit(f.equivalents?.pleatco);
  pushBit(f.equivalents?.filbur);
  const direct: RetailerLink[] = [];
  const seenAsin = new Set<string>();
  for (const part of bits) {
    const rec = verifiedAsins[part];
    if (!rec || seenAsin.has(rec.asin)) continue;
    seenAsin.add(rec.asin);
    direct.push(amazonButton(part, cfg));
  }
  const links = [...direct];
  if (primary && !verifiedAsins[primary]) links.push(amazonButton(primary, cfg));
  if (cfg.awinFiltersFast && primary) links.push({ id: 'filtersfast', name: 'FiltersFast', href: filtersFastLink(primary, cfg) });
  if (cfg.dohenyId && primary) links.push({ id: 'dohenys', name: "Doheny's", href: dohenysLink(primary, cfg) });
  return links;
}

/** Attributes every outbound retailer link must carry. noopener because these open in a new tab. */
export const outboundRel = 'sponsored nofollow noopener';


// ---------------------------------------------------------------------------
// Non-cartridge products (guides, supplies): verified /dp/ links + generic search links.
// Every Amazon URL on the site is still built in this file, so the tag is a single setting above.
// ---------------------------------------------------------------------------

/**
 * An image is allowed only when Amazon handed it to us.
 * `pa-api` — URL returned by the Product Advertising API (Amazon image CDN).
 * `sitestripe` — image URL inside an official SiteStripe text+image or image link (amazon-adsystem.com widget).
 * Never a file we downloaded, a copied product photo, or a CDN address taken from a product page.
 */
export type CompliantProductImage = {
  source: 'pa-api' | 'sitestripe';
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SITESTRIPE_HOSTS = new Set(['ws-na.amazon-adsystem.com', 'ws-eu.amazon-adsystem.com']);

/** Returns the image only when source and host match Amazon's allowed channels. Otherwise null (card renders with no image). */
export function asCompliantImage(image: Partial<CompliantProductImage> | null | undefined): CompliantProductImage | null {
  if (!image || (image.source !== 'pa-api' && image.source !== 'sitestripe')) return null;
  if (!image.src || !image.alt || !image.width || !image.height) return null;
  let url: URL;
  try { url = new URL(image.src); } catch { return null; }
  if (url.protocol !== 'https:') return null;
  if (image.source === 'sitestripe' && !SITESTRIPE_HOSTS.has(url.hostname)) return null;
  if (image.source === 'pa-api' && !/(^|\.)(media-amazon\.com|ssl-images-amazon\.com)$/.test(url.hostname)) return null;
  return { source: image.source, src: image.src, alt: image.alt, width: image.width, height: image.height };
}

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
  /** Optional. Set only from a PA-API response or a SiteStripe export. Absent means the card has no image. */
  image?: CompliantProductImage;
};

export const products = (productData as { products: Record<string, ProductRecord> }).products;

/** Compliant image for a verified product key, or null when we do not have one. */
export function productImage(key: string): CompliantProductImage | null {
  return asCompliantImage(products[key]?.image);
}

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
