/** Exact cartridge identity for the 12-month replacement signup. Numbers come from the dataset row or the fitment table. Nothing is invented. */

const clean = (value) => String(value ?? '').trim().replace(/\s+/g, ' ');

export const slugPart = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const hrefPath = (href) => {
  const path = String(href || '').split('?')[0].split('#')[0];
  if (!path.startsWith('/')) return '';
  return path.endsWith('/') ? path : `${path}/`;
};

/** One catalog token, or empty when the cell is a sentence, a list, or an explicit miss. */
export function singleCatalogNumber(raw) {
  const text = clean(raw);
  if (!text) return '';
  if (/none|not identified|not found|not listed|not printed|no oem|no strong/i.test(text)) return '';
  if (/[;()]/.test(text) || text.split(' ').length > 4) return '';
  return text;
}

export function exactFromFilter(filter) {
  const oemParts = String(filter.oemAll || filter.oem || '').split(';').map((part) => part.trim()).filter(Boolean);
  return {
    partId: `${filter.brandSlug}/${filter.modelSlug}`,
    oem: oemParts.join(', '),
    unicel: clean(filter.equivalents?.unicel),
    pleatco: clean(filter.equivalents?.pleatco),
    filbur: clean(filter.equivalents?.filbur),
  };
}

/**
 * One signup per exact cartridge on a fitment page.
 * A table row that links to cartridge pages uses those dataset rows (OEM plus Unicel, Pleatco, and Filbur).
 * A row with a real OEM number and no cartridge page still gets a signup; Pleatco and Filbur stay empty unless the cell is one number.
 */
export function signupsForFitment(page, filters) {
  const byHref = new Map(filters.map((filter) => [hrefPath(`/${filter.brandSlug}/${filter.modelSlug}/`), filter]));
  const out = [];
  const seen = new Set();
  const push = (exact) => {
    if (!exact?.partId || seen.has(exact.partId)) return;
    if (!exact.oem && !exact.unicel && !exact.pleatco && !exact.filbur) return;
    seen.add(exact.partId);
    out.push(exact);
  };
  for (const part of page.parts || []) {
    let matched = false;
    for (const href of part.href || []) {
      const filter = byHref.get(hrefPath(href));
      if (!filter) continue;
      matched = true;
      push(exactFromFilter(filter));
    }
    if (matched) continue;
    const oem = clean(part.oem);
    if (!/\d/.test(oem)) continue;
    const id = slugPart(oem);
    if (!id) continue;
    push({
      partId: `fitment/${page.slug}/${id}`.slice(0, 120),
      oem,
      unicel: singleCatalogNumber(part.unicel),
      pleatco: singleCatalogNumber(part.pleatco),
      filbur: singleCatalogNumber(part.filbur),
    });
  }
  return out;
}
