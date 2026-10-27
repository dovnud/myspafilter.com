import type { Page } from './fitment';
/** Bullfrog and Master Spas model-year pages (published 2026-10-27).
 *  Bullfrog: years from Bullfrog Spas’ own parts store (shop.bullfrogspas.com) checked against the Leisure Time Inc. fitment guide
 *  and the Bullfrog Spa Parts Charlottesville dealer list. Master Spas: years from the Suntek Pools & Spas (masterspapartsonline.com)
 *  filter guide, checked against masterspaparts.com. Equivalents are from the Unicel 2026, Pleatco 2023 and Filbur catalogs.
 *  Where sources disagree the page shows both; nothing is estimated. */
export const FITMENT3_DATE = '2026-10-27';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const LT = 'https://leisuretimeinc.com/pages/filter-guide';
const BF = 'https://shop.bullfrogspas.com/shop/water-care/filters/';
const CVL = 'https://www.bullfrogspapartscharlottesville.com/Replacement-Filter-c1807912';
const MSG = 'https://masterspapartsonline.com/pages/master-spas-filter-guide';
const MSP25 = 'https://www.masterspaparts.com/master-spa-filters/2025-master-spas-filters.html';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* ---------- Bullfrog ---------- */
const bfRows: string[][] = [
  ['All Bullfrog spas', '1997–1999', '<strong>10-1086</strong> (50 sq ft)', 'Bullfrog store; Charlottesville dealer'],
  ['All Bullfrog spas', '2000–2002', '<strong>10-1085</strong> (50 sq ft)', 'Bullfrog store; Charlottesville dealer'],
  ['All Bullfrog and Tadpole spas', '2003–2012', '<strong>10-2785</strong> (Microban, threaded). No longer available; the dealer substitute is 10-2870', 'Bullfrog store (years); Charlottesville (substitute); Pleatco calls it the “short thread” 2003–2012 cartridge'],
  ['A, R and X Series', '2013–2016 (Bullfrog store) or 2013–2017 (Pleatco)', '<strong>10-2870</strong> (Microban, threaded), or coreless 10-00282 after fitting cage assembly 10-00417', 'Bullfrog store; Pleatco PBF36 “long thread”'],
  ['STIL (first years)', '2015–2017', '10-3430 originally (no longer available); now <strong>10-00281</strong> + cage assembly 10-00417', 'Bullfrog store (10-00810 page); Charlottesville (10-3430 substitute)'],
  ['A Series', '2018–2022', '<strong>10-00282</strong> coreless (sold as 2-pack 10-00416)', 'Bullfrog store; Leisure Time'],
  ['R Series', '2018 and later (Bullfrog store) or 2018–2022 (Leisure Time)', '<strong>10-00282</strong> coreless (2-pack 10-00416)', 'Bullfrog store; Leisure Time'],
  ['X Series', '2018 on (“all X Series” per the Bullfrog store; Leisure Time lists 2018–2026)', '<strong>10-00282</strong> coreless (2-pack 10-00416)', 'Bullfrog store; Leisure Time'],
  ['STIL (STIL5, STIL7)', '2018 and later', '<strong>10-00281</strong> coreless (2-pack 10-00810)', 'Bullfrog store; Leisure Time'],
  ['A Series', '2023 and later', '<strong>Simplicity flat filters 10-00814</strong> (4-pack)', 'Bullfrog store; Leisure Time; Bullfrog filter-care article'],
  ['M Series', 'All (Bullfrog store) or 2020 on (Leisure Time)', '<strong>Simplicity flat filters 10-00814</strong>', 'Bullfrog store; Leisure Time'],
  ['Swim Series', 'All (Bullfrog store) or 2020 on (Leisure Time)', '<strong>Simplicity flat filters 10-00814</strong>', 'Bullfrog store; Leisure Time'],
  ['CALM Series', '2026 and later', '<strong>10-05338</strong> (drop-in filter)', 'Bullfrog store; Charlottesville dealer'],
];
const bullfrog: Page = { slug: 'bullfrog-filter-by-model-year', brandSlug: 'bullfrog', brandName: 'Bullfrog', crumbBrand: 'Bullfrog', date: FITMENT3_DATE,
  title: 'Bullfrog hot tub filter by model and year (A, R, X, STIL, M Series, 1997 to now)',
  h1: 'Which filter does my Bullfrog hot tub take? Lookup by series and year',
  desc: 'Bullfrog Spas filter part numbers by series and model year, 1997 to 2026: 10-1086, 10-1085, 10-2785, 10-2870, coreless 10-00282 and 10-00281, Simplicity flat filters and CALM, with Unicel, Pleatco and Filbur equivalents and sizes.',
  answer: 'It depends on the series and the year. Per Bullfrog’s own parts store: <strong>A Series 2018–2022, R Series and X Series from 2018</strong> take the coreless <strong>10-00282</strong> (2-pack 10-00416); <strong>STIL from 2018</strong> takes the smaller coreless <strong>10-00281</strong> (2-pack 10-00810); <strong>A Series from 2023, M Series and Swim Series</strong> use <strong>Simplicity flat filters 10-00814</strong>. Older spas take threaded cartridges: <strong>10-2870</strong> for A/R/X 2013–2016, <strong>10-2785</strong> for 2003–2012, <strong>10-1085</strong> for 2000–2002 and <strong>10-1086</strong> for 1997–1999. A 2013–2017 A/R/X or 2015–2017 STIL can switch to coreless filters by fitting the <strong>10-00417</strong> cage and cap assembly.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Equivalents and sizes are from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog, matched on the Bullfrog number. Where a dealer gives a different size or rating, the table says so. “None listed” means none of the three catalogs lists that Bullfrog number.',
  parts: [
    { oem: '10-00282 (2-pack 10-00416)', what: 'Coreless cartridge for A, R and X Series; slides over the reusable cage', unicel: 'Pleatco PBF40 (8" × 6-1/4", open 3-3/8" top, 4-1/2" bottom)', size: '50 sq ft (Bullfrog dealers) or 30 sq ft (Pleatco)', href: ['/bullfrog/pbf40/'], note: 'Leisure Time lists it as 7-3/4" × 5-3/4" with 3-1/4" openings and 260 pleats; Southern Leisure Spas and Hot Tub Outpost give about 8" × 6-1/4", matching Pleatco.' },
    { oem: '10-00281 (2-pack 10-00810)', what: 'Coreless cartridge for STIL (STIL5, STIL7)', unicel: 'Pleatco PBF17 (6-5/8" × 6-1/4", open 3-3/8" top, 4-1/2" bottom)', size: 'About 27 sq ft (Leisure Time) or 18 sq ft (Pleatco)', href: ['/bullfrog/pbf17/'], note: 'Leisure Time gives 6-3/4" × 5-3/4" with 3-1/4" openings.' },
    { oem: '10-2870', what: 'Threaded Microban cartridge, A/R/X 2013–2016 (also the dealer substitute for 10-2785 and 10-1035)', unicel: 'Unicel 8CH-951 (8" × 5-3/4", 2" SAE); Pleatco PBF36 (8" × 5-7/8", “long thread”)', size: '35 sq ft (Pleatco; Unicel’s note on the original); Unicel’s 8CH-951 is printed as 50 in its Bullfrog listing and 40 in its spec table', href: ['/bullfrog/8ch-951/'] },
    { oem: '10-2785', what: 'Threaded Microban cartridge, all spas and Tadpole 2003–2012. No longer available', unicel: 'Pleatco PBF35 (8" × 5-7/8", “short thread”); Unicel and Filbur do not list this number', size: '35 sq ft (Pleatco)', note: 'Unicel says its 8CH-951 “also replaces Bullfrog 6" OAL filter element w/ shorter threaded end”.' },
    { oem: '10-1035', what: '“Filter, Cartridge, 35SF” (Charlottesville dealer). No longer available; substitute 10-2870. No source we found gives its model years', unicel: 'Unicel 8CH-950 (8" × 6", 2" SAE; discontinued by Unicel, which says use 8CH-951); Filbur FC-0536 (8" × 5-3/4"); Pleatco PBF35', size: '35 sq ft (dealer, Filbur, Unicel’s note on the original) vs 50 sq ft (Unicel 8CH-950)', href: ['/bullfrog/8ch-950/'] },
    { oem: '10-1085', what: 'Cartridge for spas built 2000–2002', unicel: 'None listed', size: '50 sq ft (Bullfrog store)' },
    { oem: '10-1086', what: 'Cartridge for spas built 1997–1999 (shown out of stock on the Bullfrog store)', unicel: 'None listed', size: '50 sq ft (Bullfrog store)' },
    { oem: '10-3430', what: 'Original STIL cartridge before coreless. No longer available; substitute 10-00281 with cage assembly 10-00417', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '10-00814', what: 'Simplicity flat filters, 4-pack (A Series 2023+, M Series, Swim Series); housing 10-04669 is standard in A, M and Swim Series from 2024', unicel: 'None listed', size: 'Not given in our sources', note: 'Bullfrog’s store says to clean or replace these monthly.' },
    { oem: '10-05338', what: 'Filter for CALM Series spas (2026 on)', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '10-00417', what: 'Filter core cage and cap assembly, not a filter. Converts 2013–2017 A/R/X and STIL spas to coreless; replacement part on 2018+ spas', unicel: '—', size: '—' },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your series and year</h2>
<p>Bullfrog sorts its filters by series and build year rather than by individual model, so the table works the same way: an A7L, A8 or any other A Series spa uses the A Series row for its year. Years come from the product pages on Bullfrog’s own parts store, cross-checked against Leisure Time Inc.’s fitment guide and the list kept by Bullfrog Spa Parts Charlottesville, a Bullfrog dealer.</p>
${tbl(['Series', 'Model years', 'Filter', 'Where the years come from'], bfRows)}
<h2>Threaded or coreless: how to tell in ten seconds</h2>
<p>Lift out the cartridge. If a plastic cage stays in the spa and the pleated sleeve slides off it, you have the coreless system (10-00282 or 10-00281). If the whole cartridge unscrews as one piece with a handle on top, it is a threaded cartridge (10-2870 or older). For A (2022 and earlier), R, X and STIL spas, Bullfrog’s filter-care article describes removal as turning the filter-core cap counter-clockwise and sliding the cartridge up off the core. A flat, rectangular filter is a Simplicity filter.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>When coreless started.</strong> Bullfrog’s store and Leisure Time say 2018. Pleatco labels both coreless cross-references (PBF40, PBF17) “2017–Current”, and labels the threaded PBF36 “2013–2017”. Bullfrog’s store limits the original 10-2870 to 2013–2016, while its cage-assembly page offers the conversion for 2013–2017 spas. For a 2017 spa, look at what is installed.</li>
<li><strong>R Series end year.</strong> Bullfrog’s 10-00416 page says R Series 2018 and later; Leisure Time and Southern Leisure Spas say R Series 2018–2022.</li>
<li><strong>Coreless in pre-2013 spas.</strong> The Charlottesville dealer lists 10-00282 for “All 2003–2012 except STIL” when used with the 10-00417 cage, and Hot Tub Outpost says 2002 and newer except STIL. Bullfrog’s own cage page only claims 2013 and newer. If your spa is older than 2013, ask a dealer before buying the cage.</li>
<li><strong>Size and rating of the coreless filters.</strong> 10-00282: 7-3/4" × 5-3/4" and 50 sq ft (Leisure Time) vs 8" × 6-1/4" (Pleatco, Southern Leisure, Hot Tub Outpost) and 30 sq ft for Pleatco’s PBF40. 10-00281: about 27 sq ft (Leisure Time) vs 18 sq ft (Pleatco PBF17).</li>
<li><strong>Rating of the threaded cartridges.</strong> The Charlottesville dealer and Filbur call 10-1035 a 35 sq ft cartridge, and Unicel notes the original is 35 sq ft, but Unicel rates its own 8CH-950 at 50. Unicel’s 8CH-951 (for 10-2870) appears as 50 sq ft in the Bullfrog listing and 40 in the spec table.</li>
<li><strong>Is 10-2870 for 2003 on?</strong> The Charlottesville dealer describes 10-2870 as “2003–Present except STIL” because it replaces 10-2785; Bullfrog’s store describes it as the original cartridge for 2013–2016 A/R/X spas.</li>
</ul>
<h2>Known limits</h2>
<ul><li>No source we found gives dimensions for 10-1085, 10-1086, 10-3430, the Simplicity filters or the CALM filter, and none of the three aftermarket catalogs lists them.</li>
<li>No catalog lists an aftermarket version of the Simplicity or CALM filters.</li>
<li>The 10-1035 is listed by Unicel and Filbur, but no source we found says which years it was fitted.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the number on the old cartridge’s end cap or label and <a href="/">search it here</a>.</li><li>No number? Measure diameter and length (our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how). A threaded 8" × about 6" cartridge is the 10-2870/10-2785 family; a coreless 8" sleeve is 10-00282; a coreless sleeve under 7" is the STIL 10-00281.</li><li>Bullfrog’s care article says to clean pleated cartridges every 3–6 weeks and replace them every 1–2 years; see also <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Bullfrog Spas official parts store — Filters category and product pages (10-1086, 10-1085, 10-2785, 10-2870, 10-00416, 10-00810, 10-00417, 10-00814, 10-05338, 10-04669; fetched 2026-10-27)', u: BF },
    { t: 'Bullfrog Spas official store — Coreless Filter for A, R and X Series, 2-pack 10-00416 (series and years)', u: 'https://shop.bullfrogspas.com/shop/water-care/coreless-filter-a-r-x-series-2-pack/' },
    { t: 'Bullfrog Spas official store — Filter Core Cage & Cap Assembly 10-00417', u: 'https://shop.bullfrogspas.com/shop/water-care/filters/filter-core-cage-cap-assembly/' },
    { t: 'Bullfrog Spas — How to clean, take care of and replace a hot tub filter (filter types by series, cleaning intervals)', u: 'https://www.bullfrogspas.com/how-to-clean-a-hot-tub-filter/' },
    { t: 'Leisure Time Inc. — Hot Tub Filter Fitment Guide (Bullfrog section)', u: LT },
    { t: 'Leisure Time Inc. — Bullfrog A/R/X 10-00282 product page (specifications)', u: 'https://leisuretimeinc.com/products/bullfrog-a-r-x-series-10-00282-filter-cartridges' },
    { t: 'Leisure Time Inc. — Bullfrog STIL 10-00281 product page (specifications)', u: 'https://leisuretimeinc.com/products/bullfrog-stil-series-10-00281-filter-cartridges' },
    { t: 'Bullfrog Spa Parts Charlottesville — Replacement filters (years, discontinued parts and substitutes)', u: CVL },
    { t: 'Southern Leisure Spas — Bullfrog coreless filters 10-00416 (dimensions, series years)', u: 'https://shop.southernleisurespas.com/products/bullfrog-spas-coreless-filter-for-a-series-r-series-x-series-2-pack' },
    { t: 'Hot Tub Outpost — Bullfrog 10-00282 coreless filter (dimensions)', u: 'https://www.hottuboutpost.com/bullfrog-spa-50sqft-filter-10-00282-coreless-a-r-x-series/' },
    { t: 'Pleatco 2023 Catalog — PBF17, PBF35, PBF36, PBF40 (sizes, ratings, application years)', u: PLEATCO },
    { t: 'Unicel 2026 Replacement Guide — Bullfrog Spas cross-reference and spec table (8CH-950, 8CH-951)', u: UNICEL },
    { t: 'Filbur Catalog & Reference Guide — Bullfrog (FC-0536)', u: FILBUR },
  ] };

/* ---------- Master Spas ---------- */
const P = '<strong>X268532</strong> EcoPur Charge';
const msRows: string[][] = [
  ['Twilight Series except TS 120/240 (TS 6.2, 7.2, 7.25, 8.2, 8.25, 8.3, 87.3 and others)', '2009–2024 (2009–2010 TS x.1 and x.15 models were documented without the EcoPur insert)', '<strong>X268546</strong> + ' + P + ' + <strong>X268543</strong>'],
  ['Twilight TS 120 / TS 240', '2010–2024', '<strong>X268548</strong> + ' + P + ' (some 2010–2014 units used the 13" X268553 instead)'],
  ['Twilight Series, 3-filter models (2025 “Heritage” models on the old platform keep the 2017–2024 set)', '2025 on', '<strong>X268566</strong> + ' + P + ' + <strong>X268560</strong>'],
  ['Twilight Series, 2-filter models', '2025 on', '<strong>X268567</strong> + ' + P],
  ['Twilight TS 240X', '2025 on', '<strong>X268568</strong> + ' + P],
  ['Legend (early)', '1996–2000', '<strong>X268500</strong> (single 70 sq ft)'],
  ['Legend', '2001–2003', '<strong>X268057</strong> old-style Eco-Pur + pleated outer (outer number varies)'],
  ['Legend LSX', '2004–2013', 'Usually two wells, each <strong>X268546</strong> + ' + P],
  ['Legend LSX', '2014–2024', '<strong>X268546</strong> + ' + P + ' + <strong>X268543</strong>'],
  ['MP Legend', '2025 on', '<strong>X268566</strong> or <strong>X268567</strong> + ' + P + ' + <strong>X268560</strong>'],
  ['Healthy Living (HL7, HL 7.5, HL8, HL 8.5, HL 628 and others)', '2013–2021', '<strong>X268548</strong> + ' + P],
  ['Clarity CLS 524 / 730 / 738 / 855 / 1055', '2013–2015', '<strong>X268548</strong> + ' + P],
  ['Clarity CLS 360 / 415', '2013–2015', 'Not confirmed by the dealer (X268521 is “likely” for the CLS 415)'],
  ['Balance and Precision', '2016–2024', '<strong>X268548</strong> + ' + P],
  ['Clarity (Balance, Precision)', '2025 on', '<strong>X268568</strong> + ' + P + ' (see the change-over note below)'],
  ['Getaway San Miguel, Ocho Rios, Bar Harbor', '2017–2024', '<strong>X268550</strong> + ' + P],
  ['Getaway', '2025 on', '<strong>X268569</strong> + ' + P],
  ['Down East', '1996–2001', '<strong>X268500</strong> (1996–2000; some 1999–2001 spas used the 5" X268201, 25 sq ft, now discontinued)'],
  ['Down East', '2002–2003 / 2004–2013', 'X268057 old-style / <strong>X268546</strong> + ' + P],
  ['Down East Somerset, East Hampton', '2010–2012', '<strong>X268548</strong> + ' + P],
  ['H2X swim spas (all)', '2006–2016', '<strong>X268549</strong> + ' + P + ' + <strong>X268542</strong>'],
  ['H2X Trainer 12', '2017–2024', '<strong>X268542</strong> only (×1)'],
  ['H2X Trainer 15/15D/18/18D, Challenger 15D/18D', '2017–2024', 'Two each of X268549, X268532 and X268542'],
  ['H2X Trainer 19/19D, Challenger 19D', '2017–2024', 'Seven-filter system: 2 × X268549, 2 × X268532, 3 × X268542'],
  ['H2X Trainer 15/15D/19/19D, Challenger 15D/19D; 19D MAX, 21, 21D', '2025 on', '<strong>X268566</strong> + ' + P + ' + <strong>X268560</strong>'],
  ['H2X Trainer 12, 18D, Challenger 18D', '2025 on', 'Unchanged: X268549 + X268532 + X268542'],
  ['H2X Therapool SE / D', '2017–2024 / 2025 on', 'X268546 + X268532 + X268543 / X268566 + X268532 + X268560'],
  ['H2X Therapool 13 / 15', '2019 on', '<strong>X268548</strong> + ' + P + ' + <strong>X268554</strong>'],
  ['Michael Phelps swim spas', '2011–2016', 'X268549 + X268532 + X268542; 2017–2024 Force/Signature use a 4-filter set, Momentum a 7-filter set of the same parts; 2025 models kept them'],
  ['Legacy (Whirlpool, Intrepid, Inspire, Enterprise, 730L, Acclaim)', '2023', '<strong>X268546</strong> + ' + P],
  ['Older Legacy and Freedom', 'Years not given', '<strong>X268080</strong> (some use X268300 or X268526)'],
  ['Contractor Series', 'Up to 2011 / 2012', 'X268519 (now <strong>X268558</strong>) / <strong>X268554</strong>; CS 415: <strong>X268521</strong>'],
  ['Instinct', '2025 / 2026', '<strong>X268554</strong> / <strong>X268563</strong>'],
];
const msParts = [
  { oem: 'X268546 (PMA-R1)', what: 'Pleated outer around the EcoPur core; Twilight, Legend, Down East, Therapool SE/D, Legacy 2023. Replaces X268551, X268512 and X268533', unicel: 'Unicel 6CH-352 (6" × 8", 2" MPT; Unicel: remove the black standpipe)', size: '35 sq ft (Unicel 6CH-352)', href: ['/master-spas/6ch-352/'], note: 'The dealer lists the factory part as 6.5" × 7.75", not Unicel’s 6" × 8".' },
  { oem: 'X268543 (was X268365)', what: 'Second, standalone cartridge on 3-filter Twilight and Legend models 2014–2024', unicel: 'Pleatco PMA40L-F2M (6" × 9-1/4", lists X268365); Unicel 6CH-402 (6" × 9-1/2"); Filbur FC-0317', size: '40 sq ft', href: ['/master-spas/6ch-402/'], note: 'Dealer size for X268543: 6.5" × 9.25".' },
  { oem: 'X268532', what: 'EcoPur Charge mineral core (1-7/8" × 7", 8" with handle). Replaces X268511, X268056, X268513, X268045', unicel: 'None listed. The dealer says there is no aftermarket version', size: 'Not a pleated filter', note: 'The dealer says to replace it every 6 months, never soak it in cleaner, and not to use it with bromine.' },
  { oem: 'X268548 (PMA-R3)', what: 'Pleated outer, 8.5" long; TS 120/240, Healthy Living, Clarity/Balance/Precision to 2024, Therapool 13/15. Replaces X268514, X268545, X268544, X268520', unicel: 'None listed by this number', size: 'Not given in our sources' },
  { oem: 'X268549 (PMA-R4)', what: 'Pleated outer, 6" × 7.25"; H2X and Michael Phelps swim spas', unicel: 'None listed by this number', size: 'Not given in our sources' },
  { oem: 'X268550 (PMA-R5)', what: 'Pleated outer, 5" × 8"; Getaway 2017–2024', unicel: 'None listed by this number', size: 'Not given in our sources' },
  { oem: 'X268542 (PWW50P3)', what: 'Standalone swim-spa cartridge, 6" × 7.63" (dealer). Replaces X265010', unicel: 'Pleatco PWW50P3 (Waterway front access, 1-1/2" SAE); Unicel 6CH-940 (6" × 8-1/4"); Filbur FC-0359', size: '45 sq ft (Unicel, Master Spas swim spas)', href: ['/master-spas/6ch-940/'] },
  { oem: 'X268554 (PWW35L)', what: '5" × 8.5" cartridge; Therapool 13/15, Contractor 2012, Instinct 2025', unicel: 'Pleatco PWW35L (5" × 8-1/2"); Unicel 4CH-935', size: '35 sq ft (Pleatco)' },
  { oem: 'X268500 (PMA70-F2M)', what: 'Single cartridge, 1996–2001 Legend and Down East', unicel: 'Pleatco PMA70-F2M (8" × 9-1/4"); the dealer lists Filbur FC-0516', size: '70 sq ft' },
  { oem: 'X268057 (PMA10)', what: 'Old-style Eco-Pur insert, 3-7/8" × 7-1/8"', unicel: 'Pleatco PMA10; Unicel C-3310AM (3-7/8" × 7")', size: '10 sq ft (Pleatco) / 8 sq ft (Unicel)', note: 'Pleatco says “2004 and later”; the dealer guide puts it in 2001–2003 spas.' },
  { oem: 'X268080 (PMA40-F2M)', what: 'Older Legacy and Freedom', unicel: 'Pleatco PMA40-F2M (7-1/8" × 7-3/16"); Filbur FC-0416', size: '40 sq ft (Pleatco)' },
  { oem: 'X268521 (PMA20-F2M)', what: 'Contractor Series CS 415 (dealer: 4.75" × 9.75" overall)', unicel: 'Unicel 4CH-252 (4-5/8" × 8"; Unicel notes the original is 4-3/4" OD); Pleatco PMA20-F2M (4-3/4" × 8-1/16")', size: '25 sq ft (Unicel) / 20 sq ft (Pleatco)', href: ['/master-spas/4ch-252/'] },
  { oem: 'X268566 / X268567 / X268560', what: '2025 platform: X268566 pleated 6" × 9", X268567 short version 6" × 7.5", X268560 standalone 6" × 9" (late units stamped X268572)', unicel: 'None listed (the catalogs predate them)', size: 'Not given in our sources' },
  { oem: 'X268568 / X268569 / X268559', what: '2025 platform: X268568 5" × 8.5" (TS 240X, Clarity), X268569 5" × 7.5" (Getaway), X268559 5" × 8.5" for systems without EcoPur', unicel: 'None listed', size: 'Not given in our sources' },
];
const masterSpas: Page = { slug: 'master-spas-filter-by-model-year', brandSlug: 'master-spas', brandName: 'Master Spas', crumbBrand: 'Master Spas', date: FITMENT3_DATE,
  title: 'Master Spas filter by model and year (Twilight, Legend, Clarity, Getaway, H2X, 1996 to 2026)',
  h1: 'Which filter does my Master Spas hot tub or swim spa take? Lookup by series and year',
  desc: 'Master Spas filter part numbers by series and year: X268546, X268532 EcoPur Charge, X268543, X268548, X268549, X268550, X268542 and the 2025 X268566/X268567/X268560 platform, with Unicel, Pleatco and Filbur equivalents and where sources disagree.',
  answer: 'Most Master Spas from 2004 to 2024 use a <strong>pleated outer cartridge around an X268532 EcoPur Charge core</strong>, and the outer depends on the series: <strong>X268546</strong> for Twilight and Legend (3-filter models add a standalone <strong>X268543</strong>), <strong>X268548</strong> for Healthy Living, Clarity, Balance and Precision and the TS 120/240, <strong>X268550</strong> for Getaway, and <strong>X268549</strong> plus a standalone <strong>X268542</strong> for H2X and Michael Phelps swim spas. <strong>2025 and newer</strong> models moved to new cartridges (<strong>X268566</strong>, <strong>X268567</strong>, <strong>X268560</strong>, <strong>X268568</strong>, <strong>X268569</strong>) that do not swap with the older ones. 1996–2001 Legend and Down East spas use the single 70 sq ft <strong>X268500</strong>.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Equivalents are from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog. Master Spas dealers sell some factory parts under Pleatco-style names (PMA-R1 for X268546 and so on), shown in brackets. Dealer sizes are from masterspapartsonline.com product listings.',
  parts: msParts,
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your series and year</h2>
<p>Rows are from the filter guide kept by Suntek Pools &amp; Spas, a Master Spas dealer (masterspapartsonline.com; its chart says it was last updated 22 July 2026), condensed to one line per series and period. Where a second dealer, masterspaparts.com, says something different, it is in the next section. “+” means the parts are used together in one filter well.</p>
${tbl(['Series / models', 'Years', 'Filters'], msRows)}
<h2>Where the sources disagree</h2>
<ul>
<li><strong>2025–2026 Clarity.</strong> The Suntek chart lists X268568. Suntek’s own X268566 listing says Clarity spas made on or after 15 April 2026 take X268566 and earlier 2025 models X268568. Masterspaparts.com says Master Spas changed the Clarity filter during 2026 and associates X268569 with “updated Clarity and Getaway” lines. Check the cartridge before ordering.</li>
<li><strong>2025 H2X swim spas.</strong> Suntek lists X268566 + X268532 + X268560 for most 2025 H2X models (and notes that the factory store lists X268559 for “most 2025 H2X”). Masterspaparts.com gives X268559 for most H2X swim spas.</li>
<li><strong>X268572.</strong> Suntek treats it as a late-production stamping of X268560. Masterspaparts.com presents it as the cartridge for most 2025 Twilight, MP Legend, Living Healthy and many H2X models.</li>
<li><strong>X268568.</strong> Masterspaparts.com says it is exclusively for the TS 240; Suntek also lists it for 2025 Clarity.</li>
<li><strong>Old-style Eco-Pur years.</strong> Pleatco labels PMA10 (X268057) “Eco-pur replacement 2004 and later”; Suntek puts X268057 in 2001–2003 spas and the black-standpipe X268546 set from 2004. Unicel splits its Eco-Pur outer cartridges as C-7330 for 2002–2005 and C-8341 (two required) for 2006 on.</li>
<li><strong>X268546 size.</strong> Unicel’s 6CH-352 is 6" × 8"; Suntek lists the factory part at 6.5" × 7.75". Unicel says to remove the black standpipe when using 6CH-352.</li>
<li><strong>Healthy Living years.</strong> Suntek lists 2013–2016 and 2017–2021, and notes the factory tables show 2018–2020.</li>
</ul>
<h2>Known limits</h2>
<ul><li>None of the three aftermarket catalogs lists X268548, X268549, X268550 or any 2025-platform part by number, and Suntek says there is no aftermarket EcoPur Charge.</li>
<li>Suntek marks several lines as “confirm with serial”: Clarity CLS 360/415 (2013–2015), Getaway Caribbean (2014–2016), Living Healthy L5–S7 (2025 on) and Michael Phelps Xtreme. We do not list a filter for them. For the LH line, Suntek reports that Master Spas’ official part finder shows a single cartridge, X268543 for 2023–2024 LH6/LH7 and X268560 for 2025–2026 LH6/LH7.</li>
<li>Sizes for X268546 to X268569 come from one dealer’s listings; Master Spas publishes no public spec sheet that we found.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the X2685xx number on the old cartridge and <a href="/">search it here</a>.</li><li>Use the serial number. Per Suntek, on most spas built since 2009 the first two digits are the model year (22… = 2022); Getaway serials start with R, swim spas with H, and spas built before 2009 start with M.</li><li>2025 cartridges do not fit older housings. Suntek says adapters X251168 and X251169 exist to retrofit 2025 filters into earlier spas.</li><li>Citing Master Spas’ owner’s manuals, Suntek suggests rinsing the pleated cartridges weekly, soaking them monthly, replacing them about every 12 months, and replacing the EcoPur Charge every 6 months. See also <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Suntek Pools & Spas (masterspapartsonline.com) — Master Spas Filter Guide (series and year tables, supersessions, serial-number tips; chart dated 2026-07-22, fetched 2026-10-27)', u: MSG },
    { t: 'masterspapartsonline.com — product listings for X268546, X268548, X268549, X268550, X268532, X268543, X268542, X268554, X268500, X268566, X268567, X268568, X268560, X268569, X268559 (sizes, Pleatco-style names)', u: 'https://masterspapartsonline.com/collections/all' },
    { t: 'masterspaparts.com — 2025 Master Spas filters', u: MSP25 },
    { t: 'Unicel 2026 Replacement Guide — Master Spas cross-reference (6CH-352, 6CH-402, 6CH-940, 4CH-252, C-3310AM, C-7330, C-8341)', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — PMA10, PMA20-F2M, PMA40-F2M, PMA40L-F2M, PMA70-F2M, PWW35L, PWW50P3', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — Master Spas (FC-0317, FC-0416, FC-0359)', u: FILBUR },
  ] };

export const pages3: Page[] = [bullfrog, masterSpas];
