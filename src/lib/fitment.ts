import lt from '../data/lt-fitment.json';
import { pages2 } from './fitment2';
/** Model-year lookup pages (/fitment/…). Model/year rows are parsed from the Leisure Time Inc. fitment guide (a single dealer table, fetched 2026-10-25);
 *  cross-references and sizes come from the Unicel 2026 Replacement Guide. Nothing here is estimated. */
export const FITMENT_DATE = '2026-10-25';
type G = { brand: string; title: string; oem: string; models: { name: string; years: string }[]; notes: string[] };
const groups = lt as unknown as G[];
export const UNICEL_URL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
export const LT_URL = 'https://leisuretimeinc.com/pages/filter-guide';
export type Part = { oem: string; what: string; unicel: string; size: string; href?: string[]; note?: string };
export type Row = { collection: string; model: string; fits: { oems: string[]; years: string }[] };
export type Page = { slug: string; brandSlug: string; brandName: string; title: string; h1: string; desc: string; answer: string; parts: Part[]; rows: Row[]; collections: string[]; notes: string[]; extraHtml: string; sources: { t: string; u: string }[]; crumbBrand: string; date?: string; aftHead?: string; partsNote?: string };

const rowsFor = (brand: string, collections: string[]): Row[] => {
  const m = new Map<string, Row>();
  for (const g of groups.filter((x) => x.brand === brand)) for (const mo of g.models) {
    const key = mo.name; let r = m.get(key);
    if (!r) { r = { collection: collections.find((c) => mo.name.startsWith(c)) || 'Other', model: mo.name, fits: [] }; m.set(key, r); }
    const f = r.fits.find((x) => x.years === mo.years); if (f) f.oems.push(g.oem); else r.fits.push({ oems: [g.oem], years: mo.years });
  }
  return [...m.values()].sort((a, b) => a.model.localeCompare(b.model, 'en', { numeric: true }));
};

const HS_COLL = ['Highlife', 'Limelight', 'Hot Spot', 'Tiger River', 'Solana'];
const CAL_COLL = ['Utopia', 'Paradise', 'Highland', 'Vacanza', 'Aquatic Melodies', 'C-Series'];

export const pages: Page[] = [
{ slug: 'hot-spring-filter-by-model-year', brandSlug: 'hot-spring', brandName: 'Hot Spring', crumbBrand: 'Hot Spring',
  title: 'Hot Spring hot tub filter by model and year (Highlife, Limelight, Hot Spot, Tiger River, Solana)',
  h1: 'Which filter does my Hot Spring hot tub take? Lookup by model and year',
  desc: 'Find the Hot Spring filter part number (71825, 71827, 79435 Tri-X, 78161 and more) for your Highlife, Limelight, Hot Spot, Tiger River or Solana model and year.',
  answer: 'The dealer fitment table lists six Hot Spring factory cartridge numbers across these collections: <strong>71825</strong> (pleated, 6" × 10-1/2"), <strong>71827</strong> (8-1/2" × 10-1/2", 65 sq ft), <strong>79435</strong> (Tri-X), <strong>78161</strong> (Limelight 2018 and newer), <strong>78286</strong> (Limelight Prism) and <strong>77004</strong> (Limelight Gleam). The same model name can change cartridge by year, for example Limelight Flair and Pulse take the 71827 for 2008–2017 and the 78161 for 2018–2026. Find your model below, then confirm against the part number on your old cartridge.',
  parts: [
    { oem: '71825 (also 31489, 71826)', what: 'Pleated cartridge, 6" × 10-1/2", 1-15/16" open ends', unicel: 'C-6430 (4 oz media); C-6330 (3 oz media)', size: '30 sq ft', href: ['/hot-spring/c-6430/', '/hot-spring/c-6330/'], note: 'Unicel notes C-6430 is for models dated after 1990.' },
    { oem: '71827 (also 31114, 71828)', what: 'Pleated cartridge, 8-1/2" × 10-1/2", 3" open ends', unicel: 'C-8465', size: '65 sq ft', href: ['/hot-spring/c-8465/'] },
    { oem: '78161 (also 1642301-1)', what: 'Limelight 2018 and newer, 14" long, open ends', unicel: 'C-6350 or C-6355', size: 'Sources disagree: 35, 50 and 75 sq ft', href: ['/hot-spring/c-6350/', '/hot-spring/c-6355/'], note: 'Unicel lists both for this OEM number; see the guide on why the same size carries different ratings.' },
    { oem: '79435 (Tri-X)', what: 'Tri-X cartridge, no pleats; dealers list 6" × 10-1/2"', unicel: 'None listed', size: 'Dealers list 65 sq ft', note: 'Not found in the Unicel 2026, Pleatco 2023 or Filbur catalogs we checked; order the Hot Spring part.' },
    { oem: '78286', what: 'Limelight Prism (2018–2026)', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '77004', what: 'Limelight Gleam (2013–2017)', unicel: 'None listed', size: 'Not given in our sources' },
  ],
  collections: HS_COLL, rows: rowsFor('Hot Spring Spas', HS_COLL),
  notes: [],
  extraHtml: `<h2>Highlife: pleated cartridge or Tri-X?</h2>
<p>For many Highlife models the dealer table lists both the pleated 71825 and the Tri-X 79435 over the same years. The dealer’s note says to use the pleated cartridge only where the spa specifies 71825 or its listed equivalent, and that models requiring Tri-X must use a Tri-X filter. Hot Spring’s own filter article says its Tri-X is compatible with all Highlife Collection models, including those that did not come with one as standard, and gives replacement intervals of 2–3 years for polyester cartridges and 4–6 years for Tri-X. If your spa came with Tri-X cartridges, stay with Tri-X.</p>
<h2>Where the dealer tables differ</h2>
<p>Model-year ranges are not identical between dealers. For the Aria, this page’s main source lists Aria AR for 2007–2018, while another Hot Spring dealer’s Tri-X listing gives Aria 2007–2015. Ranges for a model’s first and last year are the least reliable part of any dealer table.</p>
<h2>How to confirm yours</h2>
<ol><li>Read the part number on the old cartridge, or on the filter label if it has worn off.</li><li>If you cannot read it, measure the diameter and length: a 6" × 10-1/2" cartridge is the 71825 family and an 8-1/2" × 10-1/2" one is the 71827 family. Our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how.</li><li>Check how many cartridges your spa takes in your owner’s manual; we do not list counts per model.</li></ol>`,
  sources: [
    { t: 'Leisure Time Inc. — Hot Tub Filter Fitment Guide (Hot Spring tables; fetched 2026-10-25)', u: 'https://leisuretimeinc.com/pages/filter-guide' },
    { t: 'Unicel 2026 Replacement Guide — Hot Springs Spas cross-reference (printed p. 35) and spec tables (pp. 5–8)', u: UNICEL_URL },
    { t: 'Pleatco 2023 Catalog — Hot Spring PWK35B entry for OEM 1642301-1', u: 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf' },
    { t: 'Hot Spring Spas — How Do Hot Tub Filters Work? (Tri-X compatibility and replacement intervals)', u: 'https://www.hotspring.com/blog/how-do-hot-tub-filters-work' },
    { t: 'Prisco Hot Spring — 79435 Tri-X listing (size and model-year table)', u: 'https://priscohotspring.com/79435-hot-spring-spas-tri-x-ceramic-cartridge-filter-single/' },
    { t: 'HotSpring World UK — Tri-X 65 sq ft listing', u: 'https://www.hotspringworld.co.uk/shop/hot-tub-filters/tri-x-filter/' },
  ] },
{ slug: 'caldera-filter-by-model-year', brandSlug: 'caldera', brandName: 'Caldera', crumbBrand: 'Caldera',
  title: 'Caldera hot tub filter by model and year (Utopia, Paradise, Highland, Vacanza)',
  h1: 'Which filter does my Caldera hot tub take? Lookup by model and year',
  desc: 'Find the Caldera filter part number (73531, 73532, 73722, 74817, 74148, 76136) for your Utopia, Paradise, Highland or Vacanza model and year, with Unicel equivalents.',
  answer: 'The dealer fitment table lists seven Caldera cartridge numbers across these series, and several models <strong>switch cartridge partway through their run</strong>: for example the Utopia Geneva, Niagara and Tahitian take the 7" × 14-3/4" <strong>73531</strong> through 2004 and the 8" × 16-1/2" <strong>73722</strong> from 2005. Most current Paradise models (Salina, Reunion, Seychelles, Makena) are listed for 73531, and Kauai and Martinique for the shorter 73532. Find your model below and confirm against the number on the old cartridge, because the dealer table flags several model-years as needing a serial-number check.',
  parts: [
    { oem: '73531 (also 1019301)', what: '7" × 14-3/4", handle top, open bottom', unicel: 'C-7375', size: '75 sq ft', href: ['/caldera/c-7375/'] },
    { oem: '73532 (also 1019401)', what: '7" × 10-3/4", handle top, open bottom', unicel: 'C-7350', size: '50 sq ft', href: ['/caldera/c-7350/'] },
    { oem: '73722 (also 1039607)', what: '8" × 16-1/2", open top with lip seal', unicel: 'C-8399', size: '100 sq ft', href: ['/caldera/c-8399/'] },
    { oem: '74817', what: '8" × 16-1/2", open top with molded gasket', unicel: 'C-8300', size: '100 sq ft', href: ['/caldera/c-8300/'] },
    { oem: '74148', what: '4-15/16" × 9-1/4"', unicel: 'C-4335', size: '35 sq ft', href: ['/caldera/c-4335/'] },
    { oem: '76136', what: '8-1/2" × 10-1/2"', unicel: 'C-8465', size: '65 sq ft', href: ['/caldera/c-8465/'] },
    { oem: '31489 (Hot Spring part, used in Vacanza Celio and Tarino)', what: '6" × 10-1/2", 1-15/16" open ends', unicel: 'C-6430 / C-6330', size: '30 sq ft', href: ['/caldera/c-6430/'] },
  ],
  collections: CAL_COLL, rows: rowsFor('Caldera Spas', CAL_COLL),
  notes: [
    'Paradise Makena 2024: confirm the spa serial number before ordering. The table lists 73532 for 2024 only and 73531 for the other Makena years.',
    'Paradise Hawaiian HAA 2004: the dealer asks for the spa serial number before ordering.',
    'Aventine 2019: the dealer asks for the spa serial number to confirm the filter.',
    'Utopia Cantabria 2014: confirm the production quarter. Q1–Q2 production uses 74817 and Q3–Q4 uses 73722.',
  ],
  extraHtml: `<h2>Where the dealer tables differ</h2>
<p>The model-year table here comes from a single dealer, and other listings do not match it exactly. That dealer’s own product page for the 73531 gives Tahitian as 2002–2005 and Elation as 2003–2008, while its fitment guide gives Paradise Tahitian TAA as 2000–2005 and Elation as 2003–2004 for the 73531 (it moves Elation 2005–2008 to the 73722). A second retailer lists the 73531 for the Paradise series as 2003 to current, and sells the 8" × 16-1/2", 100 sq ft cartridge for the Utopia Geneva from 2005 on, which agrees with the table below. Treat first and last years as approximate.</p>
<h2>How to confirm yours</h2>
<ol><li>Read the part number printed on the old cartridge. The dealer itself says that even within one Caldera model line the filter can change by year, and that the part number is the most reliable method.</li><li>Measure the diameter and length if it is unreadable: 7" × 14-3/4" is the 73531 family, 7" × 10-3/4" the 73532, and 8" × 16-1/2" the 73722 or 74817. Our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how.</li><li>For the model-years flagged above, have the spa serial number ready and ask a Caldera dealer.</li></ol>`,
  sources: [
    { t: 'Leisure Time Inc. — Hot Tub Filter Fitment Guide (Caldera tables; fetched 2026-10-25)', u: 'https://leisuretimeinc.com/pages/filter-guide' },
    { t: 'Unicel 2026 Replacement Guide — Caldera Spas cross-reference (printed p. 26) and Hot Springs cross-reference (p. 35)', u: UNICEL_URL },
    { t: 'Leisure Time Inc. — Caldera 73531 product page (specifications, model-year list, filter FAQ)', u: 'https://leisuretimeinc.com/products/caldera-77813-filter-cartridge' },
    { t: 'SpaStore.com — Caldera 73531 / PCD75N listing (model years; related 8" × 16-1/2" Utopia filter)', u: 'https://www.spastore.com/7-x-14-3-4-caldera-paradise-utopia-series-spa-filter-73531-pcd75n-years-2003/' },
  ] },
...pages2,
];
export const fitmentPage = (slug: string) => pages.find((p) => p.slug === slug);
