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
export const affiliate = {
  /** Amazon Associates tracking ID (looks like "yourname-20"). Empty = plain amazon.com search link. */
  amazonTag: '',
  /** Awin publisher ID (the number after "awinaffid") for the FiltersFast program (Awin merchant 73760). Empty = plain filtersfast.com search link. */
  awinFiltersFast: '',
  /** Doheny's tracking-link ID from Ascend (Pepperjam), the segment after "pjtra.com/t/". Empty = plain doheny.com search link. */
  dohenyId: '',
};

/** Awin merchant ID for FiltersFast (from the Awin merchant profile, ui.awin.com/merchant-profile/73760). */
export const FILTERSFAST_AWIN_MID = '73760';

export type RetailerLink = { id: 'filtersfast' | 'amazon' | 'dohenys'; name: string; href: string };

const q = (term: string) => encodeURIComponent(term.trim()).replace(/%20/g, '+');

/** Search term used on every retailer: the part number plus "spa filter". */
const searchTerm = (part: string) => `${part} spa filter`;

export function amazonLink(part: string, cfg = affiliate): string {
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

/** All retailer buttons for a part number, in display order. */
export function retailerLinks(part: string, cfg = affiliate): RetailerLink[] {
  if (!part) return [];
  return [
    { id: 'filtersfast', name: 'FiltersFast', href: filtersFastLink(part, cfg) },
    { id: 'amazon', name: 'Amazon', href: amazonLink(part, cfg) },
    { id: 'dohenys', name: "Doheny's", href: dohenysLink(part, cfg) },
  ];
}

/** Attributes every outbound retailer link must carry. */
export const outboundRel = 'sponsored nofollow';
