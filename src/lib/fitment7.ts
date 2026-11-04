import type { Page } from './fitment';
/** Beachcomber and Strong Spas lookups (published 2026-11-04).
 *  Beachcomber stock numbers, sizes, pleat counts and the 1995 split are from Beachcomber's own product pages;
 *  the 2025 owner's guide (tubs built from 1 Nov 2009) supplies the care interval. Catalog crosses are from
 *  Unicel 2026, Pleatco 2023 and the Filbur catalog. Strong's series/year areas are from Strong's own FAQ;
 *  Strong prints no part number there, and the catalogs' Strong cartridge does not match that FAQ.
 *  Where a page disagrees with a catalog, both figures are shown. Nothing is estimated. */
export const FITMENT7_DATE = '2026-11-04';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const B25 = 'https://www.beachcomberhottubs.com/en_us/beachcomber-25-square-foot-medium';
const B50 = 'https://www.beachcomberhottubs.com/en_us/microfilter-cartridge';
const B35 = 'https://www.beachcomberhottubs.com/en_us/pos/genuine-parts/filtration-systems/microfilter-35-sq-ft';
const B50P = 'https://www.beachcomberhottubs.com/en_us/pos/genuine-parts/filtration-systems/2-x-50-sqft-microfilter-cartridge';
const BCAT = 'https://www.beachcomberhottubs.com/en_us/catalog/category/view/id/9';
const BMAN = 'https://www.beachcomberhottubs.com/media/pdf/2025-09-09_BHT_OwnersGuides_ESMS_EN_V1.pdf';
const STRONG = 'https://strongspas.com/learning-center/hot-tub-info-guide/frequently-asked-questions/';

const beach: Page = {
  slug: 'beachcomber-filter-by-model-year', brandSlug: 'beachcomber', brandName: 'Beachcomber', crumbBrand: 'Beachcomber', date: FITMENT7_DATE,
  title: 'Beachcomber hot tub filter by year (25 or 50 sq ft microfilter, and the pre-1995 two-piece set)',
  h1: 'Which filter does my Beachcomber hot tub take?',
  desc: 'Beachcomber spa filter by year: the 25 and 50 sq ft microfilters (SKU 3005845 and 3005815) share one body from 1995 on, and pre-1995 tubs take a shorter two-piece set (3005820 or 3005825), with Unicel, Pleatco and Filbur equivalents.',
  answer: 'From 1995 to the present, Beachcomber sells two hot tub filters of the <strong>same outside size</strong>. SKU <strong>3005845</strong> is 25 sq ft (107 pleats) and SKU <strong>3005815</strong> is 50 sq ft (212 pleats). Both are 4-15/16" across, 13-5/16" long, with a 2-1/8" open core and 3 oz fiber. Unicel lists them as <strong>C-4326</strong> and <strong>C-4950</strong>. Beachcomber does not assign either one to a model name, so the number or the pleat count on the old cartridge decides. A tub from before 1995 takes a different, two-piece spa filter: SKU <strong>3005820</strong> (35 sq ft) or <strong>3005825</strong> (50 sq ft). Beachcomber prints no length for those; Unicel and Filbur size them at 4-5/8" and 6-5/8" long.',
  aftHead: 'Catalog equivalents',
  partsNote: 'Beachcomber’s stock numbers, outside size, pleat counts and the 1995 split are from Beachcomber’s product pages. Unicel’s 2026 guide is the source of the C-numbers and of the pre-1995 lengths. Pleatco’s numbers are its cross-reference to those Unicel parts; Pleatco does not name Beachcomber. Filbur files the four sizes under Beachcomber without the 30058xx stock numbers.',
  parts: [
    { oem: '3005845', what: '25 sq ft microfilter, one cartridge, 1995 to present', unicel: 'C-4326; Pleatco PRB25-IN; Filbur FC-2375', size: '4-15/16" × 13-5/16"; 107 pleats (Beachcomber) or 106 (Unicel); 25 sq ft', href: ['/beachcomber/c-4326/'] },
    { oem: '3005815', what: '50 sq ft microfilter, one cartridge, 1995 to present', unicel: 'C-4950; Pleatco PRB50-IN; Filbur FC-2390', size: 'Same body; 212 pleats; 50 sq ft', href: ['/beachcomber/c-4950/'] },
    { oem: '3005820', what: '35 sq ft, two pieces, generally pre-1995', unicel: 'C-4401; Pleatco PRB17.5SF-PAIR; Filbur FC-2386', size: 'Unicel/Filbur: 4-15/16" × 4-5/8", two per set. Beachcomber prints no length.', href: ['/beachcomber/c-4401/'] },
    { oem: '3005825', what: '50 sq ft, two pieces, generally pre-1995', unicel: 'C-4405; Pleatco PRB25SF-PAIR; Filbur FC-2387', size: 'Unicel/Filbur: 4-15/16" × 6-5/8", two per set. Beachcomber prints no length.', href: ['/beachcomber/c-4405/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>1995 to present: one body, two areas</h2>
<p>Beachcomber’s pages for both current cartridges are headed “For Beachcomber Hot Tubs from 1995 to present.” The 25 sq ft page also says it is approved for tubs manufactured from 1995 to current. Neither page names a model, a series or a year inside that span. The 50 sq ft page says it has double the filtration medium of the 25, and that the tighter pleats strain the water at a finer rate. It does not print a micron rating, and neither does Unicel.</p>
${tbl(
  ['', 'SKU 3005845', 'SKU 3005815'],
  [
    ['Beachcomber area', '25 sq ft', '50 sq ft'],
    ['Pleats Beachcomber counts', '107, 3 oz fiber', '212, 3 oz fiber'],
    ['Diameter / core / height', '4-15/16" / 2-1/8" open / 13-5/16"', 'Same'],
    ['Unicel', 'C-4326, 106 pleats, 3 oz, 25 sq ft', 'C-4950, 212 pleats, 3 oz, 50 sq ft'],
    ['Pleatco (via the Unicel number)', 'PRB25-IN, printed at 5" OD', 'PRB50-IN, printed at 5" OD'],
    ['Filbur, under Beachcomber', 'FC-2375, 4-15/16" × 13-5/16", 25 sq ft', 'FC-2390, 4-15/16" × 13-5/16", 50 sq ft'],
  ],
)}
<p>Unicel’s spec note calls C-4950 an upgrade of the 25 sq ft C-4326: same outside size, more media. Beachcomber’s 107 pleats is one off Unicel’s 106. Unicel’s own lookup instructions treat a count within two pleats as a match, so the counts agree for identification, and the pages still print different numbers. Why the same body can carry 25 or 50 sq ft is the pleat count, which is worked out in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size spa filters have different square-foot ratings</a>.</p>

<h2>Before 1995: a two-piece set, and a different length</h2>
<p>Beachcomber’s filtration category titles SKU 3005820 “MICROFILTER 35 SQ (PRE 1995)” and SKU 3005825 “MICROFILTER 50 SQ (PRE 1995).” Each product page says these are generally for pre-1995 tubs, including some older off-brand spas, that use the upfront weir. Each SKU is two pieces. The piece with the blue stem, partly glued in place, goes in first; the piece without the stem goes on top. Beachcomber says to keep two sets, one clean and one ready. Neither page prints a diameter or a length.</p>
<p>Unicel is the catalog that ties the stock numbers to a size: 3005820 is C-4401, 4-15/16" × 4-5/8", 35 sq ft, 4 oz, and 3005825 is C-4405, 4-15/16" × 6-5/8", 50 sq ft, 4 oz. The spec table adds 158 pleats and “2 cartridges per set with stick handle” for both, which matches Beachcomber’s two-piece description. Filbur’s Beachcomber section lists the same two lengths as FC-2386 and FC-2387, “2/set,” at 35 and 50 sq ft. The 50 is longer than the 35. It is not the current 13-5/16" body, and it is not two of the 35s stacked.</p>
<p>Beachcomber’s 3005825 page says the 50 sq ft medium “doubles the amount of filtration capacity.” Against its own 35 sq ft set, 50 is not double. The doubling description matches the current 25-to-50 pair, not this pre-1995 pair. Pleatco, which never names Beachcomber, crosses C-4401 to PRB17.5SF-JH-PAIR and C-4405 to PRB25SF-JH-PAIR, and prints both at a <strong>5" outside diameter</strong> rather than 4-15/16". The 35 sq ft JH version also has a 2-3/16" bottom hole in Pleatco’s table, against 2-1/8" on the non-JH pair and on Unicel. If the old set is in your hand, measure it. The <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> is the measuring order, and <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end versus threaded</a> is the fitting check: every Beachcomber cartridge on this page is open at both ends.</p>

<h2>Cleaning and replacement</h2>
<p>Beachcomber’s 2025 owner’s guide covers tubs manufactured from 1 November 2009. It says to rinse the microfilter once a week, and once a month to soak it 12–18 hours, alternating Filter Cure and Filter Pure, then rinse so cleaner does not go back into the water. Keep two cartridges, one in the tub and one clean. The control’s rCL reminder is every 30 days (clean) and rCH is every 365 days (install a new microfilter). The guide says to put the tub in Standby before the cartridge comes out, so the circulation pump is off while the basket is empty. The product pages say a microfilter can last for years with rinsing and a soak in Filter Soak. That is a longer life than the 365-day reminder. Follow the guide that came with the tub, and treat 365 days as the reminder Beachcomber programmed, not as a statement that the pleats fail on that day.</p>
<p>The same filtration category sells different housings by year, separate from the cartridge: a skimmer lid for 2002 and newer and one for pre-2002, a basket for 2001 and newer, a locking ring for 2001–2008 and another for 2008 to now, and a weir top and bottom for 2001–2008. A cartridge of the right size still will not seat if the weir era is wrong. Those parts are not given dimensions on the category page.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>Pleat count on the 25 sq ft cartridge.</strong> Beachcomber prints 107. Unicel prints 106 for C-4326. One pleat, inside Unicel’s ±2 identification rule, and still two printed numbers.</li>
<li><strong>Outside diameter.</strong> Beachcomber, Unicel and Filbur print 4-15/16". Pleatco prints 5" for PRB25-IN, PRB50-IN, PRB17.5SF-PAIR and PRB25SF-PAIR.</li>
<li><strong>Pre-1995 length.</strong> Only Unicel and Filbur print it. Beachcomber describes the set and the weir, not the inches.</li>
<li><strong>“Doubles the capacity” on SKU 3005825.</strong> That page is the 50 sq ft pre-1995 set. The other pre-1995 set is 35 sq ft, which is not half of 50, and Unicel makes the 50 longer, not just denser.</li>
<li><strong>How long a cartridge lasts.</strong> The 2009-and-later owner’s guide sets a 365-day “install new microfilter” reminder. The product pages say a microfilter can last for years.</li>
<li><strong>No model table.</strong> Beachcomber does not say which series takes the 25 and which takes the 50. Both current pages cover 1995 to the present.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>Read the stock number embossed on the cartridge. Beachcomber says it is there for ordering. 3005845 and 3005815 are the long pair; 3005820 and 3005825 are the short two-piece sets.</li>
<li>If the number is gone, measure length. About 13-5/16" is the current pair; then count pleats (near 107 is the 25, near 212 is the 50). About 4-5/8" or 6-5/8", in two pieces with a blue stem, is the pre-1995 set.</li>
<li>Compare the cartridge in your hand with the <a href="/beachcomber/">Beachcomber cartridge table</a> before ordering an aftermarket number. Pleatco’s 5" diameter is the catalog’s figure, not Beachcomber’s.</li>
</ol>`,
  sources: [
    { t: 'Beachcomber Hot Tubs: Microfilter 25 sq ft, SKU 3005845 (4-15/16" × 13-5/16", 2-1/8" core, 107 pleats, 3 oz, 1995 to current)', u: B25 },
    { t: 'Beachcomber Hot Tubs: Microfilter 50 sq ft, SKU 3005815 (same body, 212 pleats, 1995 to present, double the medium of the 25)', u: B50 },
    { t: 'Beachcomber Hot Tubs: Microfilter 35 sq ft, SKU 3005820 (two-piece, generally pre-1995, upfront weir; no length printed)', u: B35 },
    { t: 'Beachcomber Hot Tubs: Microfilter 50 sq ft, SKU 3005825 (two-piece, generally pre-1995; no length printed)', u: B50P },
    { t: 'Beachcomber Hot Tubs: filtration parts category (pre-1995 cartridge titles; skimmer lid, basket, locking ring and weir year splits)', u: BCAT },
    { t: 'Beachcomber Hot Tubs: Owner’s Guide, 9 Sept 2025, for tubs built from 1 November 2009 (weekly rinse, 12–18 hour monthly soak, rCL 30 days, rCH 365 days, Standby)', u: BMAN },
    { t: 'Unicel 2026 Replacement Guide: Beachcomber OEM cross-reference, PDF p.29 (printed p.25); spec table C-4401 and C-4405, PDF p.8 (printed p.4); C-4326 and C-4950, PDF p.9 (printed p.5)', u: UNICEL },
    { t: 'Pleatco 2023 Catalog: Unicel cross-reference, PDF p.47 (C-4326 = PRB25-IN, C-4950 = PRB50-IN, C-4401 = PRB17.5SF-JH-PAIR, C-4405 = PRB25SF-JH-PAIR); spec table PDF pp.31–32 (5" OD)', u: PLEATCO },
    { t: 'Filbur Catalog: Beachcomber Spas section, PDF p.15 (FC-2386, FC-2387, FC-2375, FC-2390)', u: FILBUR },
  ],
};

const strongRows: string[][] = [
  ['Premium', 'Vienna 60 and Madrid 60', '50 sq ft', 'Not stated'],
  ['Summit, SL and S models', 'Built in 2023 or later', '50 sq ft', 'Not stated'],
  ['Summit, SL and S models', 'Built in 2022 or earlier', '75 sq ft', 'Not stated'],
  ['Ascent, SL and S models', 'Built in 2023 or later', '50 sq ft', 'Not stated'],
  ['Ascent, SL and S models', 'Built in 2022 or earlier', '75 sq ft', 'Not stated'],
  ['Embark', 'All models', '50 sq ft', 'Not stated'],
  ['G-2', 'All models', '50 sq ft', 'Not stated'],
];

const strong: Page = {
  slug: 'strong-spas-filter-by-model-year', brandSlug: 'strong-spas', brandName: 'Strong Spas', crumbBrand: 'Strong Spas', date: FITMENT7_DATE,
  title: 'Strong Spas hot tub filter by series and year (50 or 75 sq ft, and the 20 sq ft Antigua cartridge)',
  h1: 'Which filter does my Strong spa take?',
  desc: 'Strong Spas filter area by series and year from Strong’s own FAQ (50 or 75 sq ft, no part number), and the 20 sq ft Antigua / Futura cartridge the catalogs actually list, where Unicel, Pleatco and Filbur disagree on length.',
  answer: 'Strong’s own FAQ gives the hot tub filter <strong>area</strong>, not a part number. Vienna 60, Madrid 60, every Embark, every G-2, and Summit or Ascent SL and S models built in <strong>2023 or later</strong> take a <strong>50 sq ft</strong> filter. Summit and Ascent SL and S models built in <strong>2022 or earlier</strong> take a <strong>75 sq ft</strong> filter. None of Unicel, Pleatco or Filbur names those series. The Strong cartridge all three catalogs do list is a different spa filter: a <strong>20 sq ft</strong> cartridge with a 1-1/2" SAE thread for the Antigua / Futura (Unicel <strong>4CH-925</strong>, Pleatco <strong>PSANT20P3</strong>, Filbur <strong>FC-0126</strong>), and the three catalogs do not agree on its length.',
  aftHead: 'What the catalogs list',
  partsNote: 'The series table below is Strong’s FAQ, quoted for area only. Strong prints no diameter, thread or part number there. The catalog row is a different cartridge. Do not order 4CH-925 for a Vienna, Summit, Ascent, Embark or G-2 unless the old cartridge measures as that 20 sq ft part.',
  parts: [
    { oem: 'No Strong part number published', what: 'FAQ: 50 sq ft for Vienna 60, Madrid 60, Embark, G-2, and 2023-or-later Summit and Ascent SL/S', unicel: 'Not identified. Unicel lists a model-less 50 sq ft C-4950 under Strong Industries; that is not a model assignment.', size: 'Not printed by Strong' },
    { oem: 'No Strong part number published', what: 'FAQ: 75 sq ft for Summit and Ascent SL/S built in 2022 or earlier', unicel: 'None found in Unicel 2026, Pleatco 2023 or Filbur', size: 'Not printed by Strong' },
    { oem: 'Catalogs only (Antigua / Futura)', what: '20 sq ft, handle, 1-1/2" SAE. Not in Strong’s FAQ.', unicel: 'Unicel 4CH-925; Pleatco PSANT20P3; Filbur FC-0126', size: 'Unicel 4-5/8" × 7-1/4"; Pleatco 4-3/4" × 7-1/16"; Filbur 4-3/4" × 8"', href: ['/strong-spas/4ch-925/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>What Strong publishes</h2>
<p>Strong’s FAQ, “What size filter does my spa use?”, says to use the owner’s manual or contact Strong if the model is not on the list. The list it does print is area only. “SL &amp; S models” is Strong’s wording; the FAQ does not define SL or S. The year split is also Strong’s wording: “Built in/after 2023” for the 50 sq ft Summit and Ascent, and “Built in/before 2022” for the 75. A 2022 spa falls in the earlier group. A 2023 spa falls in the later group.</p>
${tbl(['Series', 'Models and years Strong names', 'Area', 'Part number'], strongRows)}
<p>Strong also says to deep-clean the filter each month, or to swap in a spare and clean the dirty one, and to replace the cartridge once the pleats are frayed. It does not give a replacement interval in months.</p>

<h2>What the catalogs list for Strong, which is not that chart</h2>
<p>Unicel’s Strong Industries section has two rows and no model names: a 20 sq ft cartridge, 4-5/8" × 7-1/4", 1-1/2" SAE thread, 190 pleats, 3 oz, part 4CH-925; and a 50 sq ft open cartridge, 4-15/16" × 13-5/16", 3 oz, part C-4950, with no OEM number. Filbur’s Strong Industries section lists only FC-0126. It does not list a 50 sq ft cartridge and it does not list a 75. So Unicel’s C-4950 line is not confirmed by Filbur, and it is not Strong’s statement that a Vienna takes C-4950. The <a href="/filter/c-4950/">C-4950 lookup</a> is the same Unicel number as used by other brands. Measure before treating it as the FAQ’s 50 sq ft filter.</p>
${tbl(
  ['Source', 'Part', 'Size it prints', 'Thread', 'Model name it uses'],
  [
    ['Unicel spec table and Strong section', '4CH-925', '4-5/8" × 7-1/4", 190 pleats, 3 oz, 20 sq ft', '1-1/2" SAE', 'Strong Industries; no model'],
    ['Pleatco spec table', 'PSANT20P3', '4-3/4" × 7-1/16", 3 oz, 20 sq ft', 'Handle top, 1-1/2" SAE', 'Futura Spa (Strong Industries)'],
    ['Pleatco application index', 'PSANT20P3', 'See the spec row', '1.50" SAE', 'Futura Spa, Strong Antigua'],
    ['Pleatco spec table (a different bottom)', 'PSANT20P4', '4-3/4" × 7-1/16", 20 sq ft', '1-1/2" MPT', 'Futura Spa (Strong Industries)'],
    ['Filbur Strong section', 'FC-0126', '4-3/4" × 8", 20 sq ft', 'Handle, 1-1/2" SAE', 'Antiqua (Filbur’s spelling). Unicel cell on this row is N/A; Pleatco PSANT20 / PSANT20P3'],
    ['Filbur size table', 'FC-0126', '4-3/4" × 8", 20 sq ft', '1-1/2" SAE', 'Strong Spas - Antiqua, crossed to 4CH-925 and PSANT20P3'],
    ['Filbur size table', 'FC-0208', '4-3/4" × 7-1/16", 20 sq ft', '1-1/2" MPT', 'Futura Spa (Strong Industries), Pleatco PSANT20P4'],
  ],
)}
<p>The SAE cartridge and the MPT cartridge are not interchangeable. Unicel’s Strong section lists only the SAE 4CH-925. Pleatco and Filbur also sell an MPT version (PSANT20P4, FC-0208) at Pleatco’s shorter length. Read the bottom of the old cartridge. <a href="/guides/open-end-vs-threaded-hot-tub-filters/">Open-end versus threaded</a> shows what SAE and MPT look like, and <a href="/guides/how-to-find-your-spa-filter-size/">how to find your spa filter size</a> is the measuring order.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>Length of the 20 sq ft SAE cartridge.</strong> Unicel 7-1/4". Pleatco 7-1/16". Filbur FC-0126 8". Those are not a rounding difference. Order from the cartridge you measured, not from the brand name.</li>
<li><strong>Outside diameter.</strong> Unicel 4-5/8". Pleatco and Filbur 4-3/4".</li>
<li><strong>The name.</strong> Pleatco says Antigua. Filbur says Antiqua. Strong’s FAQ says neither.</li>
<li><strong>Filbur’s Unicel cell.</strong> The Strong Industries section prints N/A in the Unicel column for FC-0126. A different Filbur table crosses the same Filbur number to 4CH-925.</li>
<li><strong>The 75 sq ft filter.</strong> Strong’s FAQ is the only source here that mentions it, and it gives no dimensions and no part number. No matching row in the three catalogs.</li>
<li><strong>The FAQ’s 50 sq ft filter.</strong> Strong does not say it is C-4950. Unicel lists a 50 sq ft C-4950 under Strong with no model. Filbur’s Strong section has no 50 sq ft row.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>If the spa is a Vienna 60, Madrid 60, Summit, Ascent, Embark or G-2, start from Strong’s area and the year, then measure the old cartridge. The FAQ does not finish the identification.</li>
<li>A 20 sq ft cartridge about 7" long with a 1-1/2" SAE thread is the Antigua / Futura part, 4CH-925 / PSANT20P3 / FC-0126. Compare the length you measure with all three catalog figures on the <a href="/strong-spas/4ch-925/">4CH-925 page</a>.</li>
<li>An MPT bottom is the other Pleatco/Filbur number (PSANT20P4 / FC-0208), not 4CH-925.</li>
<li>If the model is not on Strong’s list, Strong says to use the owner’s manual. The <a href="/strong-spas/">Strong Spas table</a> on this site has only the cartridge the catalogs document.</li>
</ol>`,
  sources: [
    { t: 'Strong Spas: FAQ, “What size filter does my spa use?” (Vienna, Madrid, Summit, Ascent, Embark, G-2; 50 or 75 sq ft; no part number)', u: STRONG },
    { t: 'Unicel 2026 Replacement Guide: Strong Industries section, PDF p.58 (printed p.54), 4CH-925 and C-4950; 4CH-925 spec table, PDF p.7 (printed p.3), 190 pleats', u: UNICEL },
    { t: 'Pleatco 2023 Catalog: PSANT20P3 and PSANT20P4 spec table, PDF p.31; application index PDF p.27 (Futura Spa, Strong Antigua, 1.50" SAE and 1.50" MPT)', u: PLEATCO },
    { t: 'Filbur Catalog: Strong Industries section, PDF p.26 (printed p.51), FC-0126 at 4-3/4" × 8" with Unicel N/A; size table PDF p.9 crosses FC-0126 to 4CH-925; FC-0208 is the MPT Futura cartridge', u: FILBUR },
  ],
};

export const pages7: Page[] = [beach, strong];
