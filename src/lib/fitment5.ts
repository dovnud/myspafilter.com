import type { Page } from './fitment';
/** Nordic Hot Tubs, Arctic Spas and Softub model-year pages (published 2026-10-31).
 *  Nordic: models and part numbers from Nordic's own 2023 filter chart, owner's manual (01.2024) and 2022 service parts list.
 *  Arctic: build-year and series eras from Arctic Spas dealers (Arctic Spas Ontario, Premier Pools & Spas, arcticspastore.com,
 *  Arctic Spas Spokane parts) and Arctic's 2026 owner's manual. Softub: build-year split from Softub dealers (SoftubDirect,
 *  SpaStore.com, Simply Softub Spas, ezhottubparts) and Softub's 2025 owner's manual. Catalog equivalents are from the
 *  Unicel 2026, Pleatco 2023 and Filbur catalogs. Where sources disagree the page shows both; nothing is estimated. */
export const FITMENT5_DATE = '2026-10-31';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* ---------- Nordic Hot Tubs ---------- */
const N_CHART = 'https://www.nordichottubs.com/wp-content/uploads/2023/03/FILTER-CARTRIDGES-BY-MODEL-2023-3-8-23.pdf';
const N_CHART21 = 'https://www.nordichottubs.com/wp-content/uploads/2021/09/FILTER-CARTRIDGES-BY-MODEL-2021-9-10-21.pdf';
const N_MAN = 'https://www.nordichottubs.com/wp-content/uploads/2024/02/Nordic-Hot-Tubs-Owners-Manual-01.2024.pdf';
const N_PL = 'https://www.nordichottubs.com/wp-content/uploads/2022/04/2022-North-American-Service-Parts-List_040722.pdf';
const nRows: string[][] = [
  ['Crown', 'Before 2008', '<strong>CARTRIDGE</strong> (25 sq ft, open both ends)'],
  ['Crown', 'After 2014', '<strong>CARTRIDGE-T35</strong> (35 sq ft, threaded)'],
  ['110 Crown', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Warrior', 'Before 2008', '<strong>CARTRIDGE</strong>'],
  ['DLX, DLX w HS, Nordic, Nordic w HS, Omni, Insider, Quadra', 'Not given', '<strong>CARTRIDGE</strong>'],
  ['Escape, Escape R, Escape Pre, Escape Pre R', 'Not given', '<strong>CARTRIDGE</strong>'],
  ['Impulse, Rendezvous 1, Rendezvous 2, Sport', 'Not given', '<strong>CARTRIDGE</strong> (the owner’s manual lists Impulse under CARTRIDGE-E; see below)'],
  ['Crown II, Crown XL, Escape MS, Escape SE, Escape LS, Impulse DP, Rendezvous LS, 110 Sport, Warrior XL, 110 Warrior XL', 'Before Sept 2021', '<strong>CARTRIDGE</strong>'],
  ['Same models as the row above', 'After Sept 2021', '<strong>CARTRIDGE-E</strong> (45 sq ft, open both ends)'],
  ['D’Amour: 110 D’Amour, D’Amour MS, D’Amour SE', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Encore: Encore, Encore Pre, 110 Encore, Encore MS, SE, LS', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Jubilee: 110 Jubilee, Jubilee MS, SE, LS', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Retreat: Retreat, 110 Retreat, Retreat MS, Retreat SE', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Stella: Stella, 110 Stella, Stella MS, Stella SE', 'Not given', '<strong>CARTRIDGE-T35</strong>'],
  ['Bella, Bella MS', 'Not given', '<strong>CARTRIDGE14.5</strong> (14.5 sq ft “Space Saver”)'],
  ['Bella MS', 'After 2017', '<strong>CARTRIDGE-BELLA</strong> (20 sq ft per Nordic)'],
];
const nordic: Page = { slug: 'nordic-hot-tubs-filter-by-model-year', brandSlug: 'nordic-hot-tubs', brandName: 'Nordic Hot Tubs', crumbBrand: 'Nordic Hot Tubs', date: FITMENT5_DATE,
  title: 'Nordic Hot Tubs filter by model and year (Crown, Encore, Escape, Warrior, Bella and more)',
  h1: 'Which filter does my Nordic hot tub take? Lookup by model and year',
  desc: 'Nordic Hot Tubs filter part numbers by model: CARTRIDGE (C-4326), CARTRIDGE-E (C-5345, after Sept 2021), CARTRIDGE-T35 (4CH-935), CARTRIDGE14.5 and CARTRIDGE-BELLA, with Unicel, Pleatco and Filbur equivalents, sizes and source conflicts.',
  answer: 'Nordic’s own spa filter chart uses five cartridges. Most Escape, Sport, Impulse, Rendezvous, Warrior and older Crown spas take the 25 sq ft <strong>CARTRIDGE</strong> (4-15/16" × 13-5/16", open both ends): <strong>Unicel C-4326, Pleatco PRB25-IN, Filbur FC-2375</strong>. Crown II, Crown XL, Escape MS/SE/LS, Impulse DP, Rendezvous LS, 110 Sport and Warrior XL spas built <strong>after September 2021</strong> take the 45 sq ft <strong>CARTRIDGE-E</strong> (5-5/16" × 10-1/8"): <strong>Unicel C-5345, Pleatco PLBS50-M, Filbur FC-2970M</strong>. Crown (after 2014), D’Amour, Encore, Jubilee, Retreat and Stella spas take the threaded 35 sq ft <strong>CARTRIDGE-T35</strong>: <strong>Unicel 4CH-935, Pleatco PWW35L</strong>. Bella spas take the slim CARTRIDGE14.5 or CARTRIDGE-BELLA.',
  aftHead: 'Aftermarket equivalents (Nordic chart and catalogs)',
  partsNote: 'The Nordic part numbers and their Unicel, Pleatco, Filbur and Waterway equivalents are printed in Nordic Hot Tubs’ own 2023 filter chart. Sizes are from Nordic’s 2024 owner’s manual where it gives them, otherwise from the Unicel 2026 guide. Nordic’s parts list sells each one with a “31” prefix (for example 31CARTRIDGE-T35).',
  parts: [
    { oem: 'CARTRIDGE (31CARTRIDGE)', what: 'Open both ends (2-1/8"); most Nordic spas, and the Sept 2021 switch models built before the change', unicel: 'Unicel C-4326 (4-15/16" × 13-5/16"); Pleatco PRB25-IN; Filbur FC-2375; Waterway 817-2500', size: '25 sq ft', href: ['/nordic-hot-tubs/c-4326/'] },
    { oem: 'CARTRIDGE-E (31CARTRIDGE-E)', what: 'Open both ends (2-1/8"), 5-5/16" × 10-1/8" (Nordic manual); Crown II, Crown XL, Escape MS/SE/LS, Impulse DP, Rendezvous LS, 110 Sport, Warrior XL built after Sept 2021', unicel: 'Nordic’s chart prints Unicel C-5345AM, Pleatco PLBS50-M, Filbur FC-2970M. The Unicel guide lists C-5345 (same size, 45 sq ft)', size: '45 sq ft (Nordic manual, Unicel); Pleatco rates PLBS50 at 50', note: 'For Escape SE after Sept 2021 the chart prints PLBS50 rather than PLBS50-M.' },
    { oem: 'CARTRIDGE-T35 (31CARTRIDGE-T35)', what: 'Handle top, 2" SAE female thread, 4-15/16" × 9-1/4"; sits in the Teleweir skimmer. Crown (after 2014), D’Amour, Encore, Jubilee, Retreat and Stella models', unicel: 'Unicel 4CH-935; Pleatco PWW35L; Waterway 817-4035. Filbur: none (the chart prints NA)', size: '35 sq ft', href: ['/nordic-hot-tubs/4ch-935/'], note: 'Pleatco’s spec table prints PWW35L as 5" × 8-1/2" with a 1-1/2" bottom.' },
    { oem: 'CARTRIDGE14.5 (31CARTRIDGE14.5)', what: 'Slim “Space Saver” cartridge, 2-7/8" × 17-1/16", 1-1/16" open ends; Bella and Bella MS', unicel: 'Unicel C-2302; Pleatco PRB14.5; Filbur FC-2320. Waterway: none', size: '14.5 sq ft (Pleatco: 15)' },
    { oem: 'CARTRIDGE-BELLA (31CARTRIDGE-BELLA)', what: 'Slim cartridge, 2-7/8" × 19-9/16" per Nordic’s manual (19-1/2" in the chart and catalogs), 1-1/16" open; Bella MS after 2017', unicel: 'Unicel C-2612; Pleatco PRB12-4; Filbur FC-2340; Waterway 817-3640', size: '20 sq ft (Nordic); 12 sq ft (Unicel, Pleatco)', note: 'Unicel’s 2026 price list says “C-2612 USE C-2608”.' },
    { oem: 'No Nordic number (catalogs only)', what: 'Open both ends; Unicel and Filbur list it for Nordic models dated before 7/99. Not in Nordic’s chart', unicel: 'Unicel C-4301 (4-15/16" × 14-7/8"); Pleatco PMT27.5; Filbur FC-1610', size: '28 sq ft', href: ['/nordic-hot-tubs/c-4301/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your model and year</h2>
<p>This table is Nordic Hot Tubs’ own “Filter Cartridges List by Model” (March 2023 edition). Nordic gives a date only where a model changed filter; “Not given” means the chart lists the model without years.</p>
${tbl(['Model', 'Built', 'Nordic filter'], nRows)}
<h2>How many filters, and how they come out</h2>
<p>Nordic’s 2024 owner’s manual says the hot tub filter sits either under a floating weir, which you pull up and turn counter-clockwise to reach the cartridge, or in a basket you can see. The threaded CARTRIDGE-T35 sits in a Teleweir skimmer. Nordic’s 2022 parts list sells two versions of the Teleweir cage, one for 2017 and older tubs and one for 2018 and newer. The cartridge number, 31CARTRIDGE-T35, is the same for both. The manual says to rinse the spa filter with a high-pressure hose weekly and soak it in a filter cleaner monthly.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>Crown, 2008 to 2014.</strong> The chart lists Crown “before 2008” under CARTRIDGE and “after 2014” under CARTRIDGE-T35. A Crown built from 2008 to 2014 is not covered. The owner’s manual says “all Crown models” take the T35, yet it also lists the Crown II and Crown XL under CARTRIDGE-E. Check the old cartridge: threaded with a handle means T35; open at both ends means CARTRIDGE or CARTRIDGE-E.</li>
<li><strong>Impulse.</strong> The chart lists Impulse under CARTRIDGE and Impulse DP under the Sept 2021 change. The manual lists both Impulse and Impulse DP under CARTRIDGE-E.</li>
<li><strong>CARTRIDGE-E: 45 or 50 sq ft.</strong> Nordic’s manual, Unicel’s C-5345 and Hot Tub Outpost’s 31CARTRIDGE-E listing all say 45 sq ft. Nordic’s 2022 parts list files it under a “50 SQ FT Filters &amp; Parts” heading, and Pleatco rates PLBS50 at 50. Filbur prints FC-2970 at 50 in one table and 45 in another. The size is the same in every source.</li>
<li><strong>C-5345AM.</strong> Nordic’s chart prints “C-5345AM”, which is not in the Unicel 2026 guide; the guide lists C-5345 at the same size.</li>
<li><strong>CARTRIDGE-BELLA rating and number.</strong> Nordic’s manual rates it 20 sq ft. Unicel rates C-2612 at 12 (13 in some tables), Pleatco rates PRB12-4 at 12, and Unicel’s price list says to use C-2608 (8 sq ft) in place of C-2612. Nordic’s 2021 chart printed no aftermarket numbers for this cartridge; the 2023 chart added them.</li>
<li><strong>The pre-7/99 cartridge.</strong> Unicel and Filbur list a 28 sq ft C-4301 (FC-1610) for Nordic models dated before 7/99 and C-4326 after. Nordic’s chart does not mention C-4301 or the 7/99 date.</li>
<li><strong>PWW35L size.</strong> Nordic and Unicel give 4-15/16" × 9-1/4" with a 2" female SAE thread; Pleatco’s spec table prints 5" × 8-1/2" with a 1-1/2" fitting for PWW35L. Unicel notes 4CH-935 screws onto a 1-1/2" male SAE stand pipe, which may explain the different figure.</li>
<li><strong>CARTRIDGE-E housing.</strong> Hot Tub Outpost says the 31CARTRIDGE-E fits filter assemblies 30100706 and 30100708. Nordic’s parts list names those as the 25 sq ft housings and lists a separate Elite canister, 30100709, for the CARTRIDGE-E.</li>
</ul>
<h2>Known limits</h2>
<ul><li>Nordic gives model years only for the Crown, the Warrior, the Bella MS and the Sept 2021 change. For other models the chart names the filter without dates.</li>
<li>Models not in the 2023 chart (for example any introduced after March 2023) are not covered here.</li>
<li>CARTRIDGE-E, CARTRIDGE14.5 and CARTRIDGE-BELLA do not have their own Nordic rows in our dataset yet, so they have no cartridge page to link to.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the number on the old cartridge’s end cap and <a href="/">search it here</a>.</li><li>No number? Look at the ends: a handle with a threaded bottom is the T35; open at both ends and 13-5/16" long is the CARTRIDGE; open at both ends, fatter (5-5/16") and 10-1/8" long is the CARTRIDGE-E. Measure as in our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a>.</li><li>Compare the result with the <a href="/nordic-hot-tubs/">Nordic Hot Tubs brand table</a>, then see <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Nordic Hot Tubs — Filter Cartridges List by Model, 2023 (models, Nordic numbers, Unicel/Pleatco/Filbur/Waterway equivalents)', u: N_CHART },
    { t: 'Nordic Hot Tubs — Filter Cartridges List by Model, 2021 edition (earlier chart; no CARTRIDGE-BELLA equivalents)', u: N_CHART21 },
    { t: 'Nordic Hot Tubs — Filter cartridge listed by model (page linking the chart)', u: 'https://www.nordichottubs.com/filter-cartridge-listed-by-model/' },
    { t: 'Nordic Hot Tubs — Owner’s manual, 01.2024 (Filter Quick Reference by Model, p. 22; filter care and removal)', u: N_MAN },
    { t: 'Nordic Hot Tubs — 2022 North American service parts list (31CARTRIDGE, 31CARTRIDGE-E, 31CARTRIDGE-T35, housings and Teleweir cages)', u: N_PL },
    { t: 'Hot Tub Outpost — Nordic 31CARTRIDGE-E listing (45 sq ft, 5-5/16" × 10-1/8", models after Sept 2021)', u: 'https://www.hottuboutpost.com/nordic-hot-tub-filter-31cartridge-e/' },
    { t: 'Unicel 2026 Replacement Guide — Nordic Hot Tubs cross-reference (printed p. 42), spec tables and price list', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — spec tables (PRB25-IN, PLBS50, PWW35L, PRB14.5, PRB12-4) and Unicel cross-reference', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — Nordic Hot Tubs (printed p. 44) and spec tables', u: FILBUR },
  ] };

/* ---------- Arctic Spas ---------- */
const AON = (s: string) => `https://arcticspasontario.com/${s}`;
const PREM = 'https://premierpools.com/';
const aRows: string[][] = [
  ['All Arctic Spas, and most Coyote spas, with the drop-in (floating weir) filter', '2008 or earlier (1998–2008 per two dealers)', 'Pleated <strong>PRT-115LOT</strong>, 50 sq ft, open both ends', 'Unicel C-4950, Pleatco PRB50-IN, Filbur FC-2390 (dealer-confirmed). Disposable: Silver Sentinel drop-in PRT-900004 or Atlantis drop-in PRT-900008, except the Marmot'],
  ['All Arctic Spas with the threaded “ArcticSpas” logo intake', '2009–2019', 'Pleated <strong>PRT-900020</strong>, 50 sq ft, threaded', 'One dealer names Unicel 4CH-949 (see below). Disposable: Silver Sentinel / Atlantis threaded PRT-900007 (replaces PRT-900003)'],
  ['Classic Series and Core Series', '2020 and newer', 'Same threaded filters as 2009–2019: <strong>PRT-900020</strong> or <strong>PRT-900007</strong>', 'Same as above'],
  ['Custom Series', '2020 and newer', '<strong>Polar Pro</strong> filter system (formerly Progressive / Pro-Filter with an RFID chip): assemblies PRT-900150 (pleated) or PRT-900140 (pleated and depth combo); inserts PRT-900170, PRT-900180, PRT-900190 (Silver Core)', 'No catalog equivalent'],
];
const arctic: Page = { slug: 'arctic-spas-filter-by-model-year', brandSlug: 'arctic-spas', brandName: 'Arctic Spas', crumbBrand: 'Arctic Spas', date: FITMENT5_DATE,
  title: 'Arctic Spas hot tub filter by year and series (drop-in, threaded, Polar Pro)',
  h1: 'Which filter does my Arctic Spas hot tub take? Lookup by year and series',
  desc: 'Arctic Spas filter by build year and series: PRT-115LOT drop-in (C-4950) for 2008 and older, threaded PRT-900020 and Silver Sentinel PRT-900007 for 2009–2019 and Classic/Core, and Polar Pro for 2020+ Custom Series, with sources and conflicts.',
  answer: 'The right Arctic Spas spa filter depends on the <strong>build year and series</strong>, not the model name. Spas built in <strong>2008 or earlier</strong> use a drop-in, open-ended 50 sq ft cartridge: factory <strong>PRT-115LOT</strong>, matched by dealers to <strong>Unicel C-4950, Pleatco PRB50-IN and Filbur FC-2390</strong>. From <strong>2009</strong>, and on 2020-and-newer <strong>Classic and Core</strong> models, the filter screws into the threaded ArcticSpas-logo intake: pleated <strong>PRT-900020</strong> or the disposable Silver Sentinel / Atlantis <strong>PRT-900007</strong>. Open-ended C-4950-type cartridges do not fit that intake. 2020-and-newer <strong>Custom Series</strong> spas use the Polar Pro system (formerly Pro-Filter).',
  aftHead: 'Aftermarket equivalents (dealers and catalogs)',
  partsNote: 'Arctic’s owner’s manual does not print filter part numbers, and the Unicel guide has no Arctic table: it points to Blue Falls Mfg. (Canada), Arctic’s maker. The factory numbers and year ranges below come from Arctic Spas dealers; catalog equivalents are from Unicel, Pleatco and Filbur.',
  parts: [
    { oem: 'PRT-115LOT', what: 'Pleated drop-in, open both ends; Arctic and most Coyote spas built 2008 or earlier', unicel: 'Unicel C-4950 (4-15/16" × 13-5/16"); Pleatco PRB50-IN; Filbur FC-2390 (Arctic Spas Ontario)', size: '50 sq ft', href: ['/arctic-spas/c-4950/'] },
    { oem: 'PRT-900004 / PRT-900008', what: 'Silver Sentinel and Atlantis disposable drop-in filters; 1998–2008 Arctic spas except the Marmot', unicel: 'No catalog equivalent', size: 'Not given' },
    { oem: 'PRT-900020', what: 'Pleated threaded filter for the ArcticSpas-logo intake; 2009–2019 spas and 2020+ Classic and Core', unicel: 'Arctic Spas Ontario lists no equivalent. Premier Pools & Spas names Unicel 4CH-949 (4-15/16" × 13-1/2", 2" female SAE thread, 50 sq ft) and 4CH-949AM', size: '50 sq ft' },
    { oem: 'PRT-900007 (replaces PRT-900003)', what: 'Silver Sentinel / Atlantis disposable threaded filter; same spas as PRT-900020', unicel: 'None (Arctic Spas Ontario: proprietary, no aftermarket equivalent)', size: 'Not given' },
    { oem: 'PRT-900013 / PRT-900011', what: 'Short threaded pleated filter and Silver Sentinel “stubby”, used with the PRT-900010 Rescue Bag on pre-2020 spas (Premier)', unicel: 'No catalog equivalent', size: 'Not given' },
    { oem: 'PRT-900150 / PRT-900140; inserts PRT-900170, PRT-900180, PRT-900190', what: 'Polar Pro filter assemblies (pleated; pleated and depth combo) and replacement inserts; 2020+ Custom Series', unicel: 'No catalog equivalent', size: 'Not given' },
    { oem: 'No Arctic number (catalogs only)', what: 'Same size as C-4950 at half the area; Unicel and Filbur list it for Arctic / Blue Falls', unicel: 'Unicel C-4326; Pleatco PRB25-IN; Filbur FC-2375', size: '25 sq ft', href: ['/arctic-spas/c-4326/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your year and series</h2>
<p>Arctic Spas dealers sort filters by build year and, for 2020 and newer, by series rather than by model name. The one model they single out is the Marmot (see below). Find your era:</p>
${tbl(['Spa', 'Built', 'Factory filter', 'Equivalents and alternatives'], aRows)}
<h2>How to tell the systems apart</h2>
<p>Arctic’s 2026 owner’s manual describes two removal methods. On Custom Series spas you lift out the telescoping insert and the pre-filter, then pull the cartridge up by its handle. On Classic and Core spas you unscrew the cartridge from the threaded intake. Dealers describe the older drop-in filter as an open-ended cartridge that sits in the floating weir well with nothing to screw into. Arctic recommends replacing disposable filters about every three months and rinsing reusable hot tub filters weekly with a deeper clean monthly.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>Where the drop-in years start and end.</strong> Arctic Spas Ontario says “2008 or earlier”; arcticspastore.com and Premier say 1998 through 2008. Arctic Spas Spokane’s parts site lists the drop-in weir parts for 2002–2008 and the threaded weir assembly for 2011–2019, which leaves 2009–2010 unclear there. Every source agrees the threaded intake was in use by 2011.</li>
<li><strong>The Marmot.</strong> Two dealers exclude the Marmot from the 1998–2008 drop-in Silver Sentinel, and none of the sources we found says what the Marmot takes.</li>
<li><strong>4CH-949 for Arctic.</strong> Premier names Unicel 4CH-949 for 2009–2019 and Classic/Core spas. Arctic Spas Ontario sells only the factory PRT-900020 for the threaded intake, and the Unicel guide lists 4CH-949 for Waterway, Dynasty and Rising Dragon, not Arctic or Blue Falls.</li>
<li><strong>C-4310.</strong> Unicel’s Blue Falls list includes a small C-4310 (4-1/4" × 4", 10 sq ft); Premier states “C-4310 is not the correct filter” for these Arctic spas.</li>
<li><strong>25 or 50 sq ft drop-in.</strong> Unicel and Filbur list both C-4326 (25 sq ft) and C-4950 (50 sq ft) for Arctic. They are the same size; the dealer factory filter is the 50 sq ft PRT-115LOT.</li>
<li><strong>Pro-Filter vs Polar Pro.</strong> arcticspastore.com says the original Custom Series Pro-Filter set is discontinued in favor of Polar Pro and that its older pre-filter is not compatible with Polar Pro. Arctic Spas Ontario still sells Pro-Filter 2-packs for all 2020+ Custom Series spas. Match the insert to the housing you have.</li>
</ul>
<h2>Known limits</h2>
<ul><li>Arctic Spas does not publish a part-number chart; the factory numbers here come from dealers, and the manual gives no part numbers.</li>
<li>No source gives filter area for the Silver Sentinel, Atlantis or Polar Pro filters.</li>
<li>Only the drop-in C-4950 and C-4326 cartridges are in our dataset for Arctic; the threaded and Polar Pro filters have no catalog cross-reference.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Look at the intake: an ArcticSpas logo with threads means the threaded filter; an open well with no thread means the drop-in; a telescoping insert and pre-filter means Custom Series Pro-Filter or Polar Pro.</li><li>Read the number on the old filter and <a href="/">search it here</a>, or measure it with our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a>. Our <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded guide</a> explains why an open cartridge will not seal on a threaded intake.</li><li>Compare with the <a href="/arctic-spas/">Arctic Spas brand table</a>.</li></ol>`,
  sources: [
    { t: 'Arctic Spas — Owner’s manual, international edition V0504-2026 (filter removal by series, care intervals)', u: 'https://www.arcticspas.com/wp-content/uploads/Arctic-Hot-Tub-Manual-International_V0504-2026.pdf' },
    { t: 'Arctic Spas Ontario — Filter 50 pleated drop-in (PRT-115LOT; C-4950 / PRB50-IN / FC-2390; 2008 or earlier)', u: AON('products/filter-50-pleated-drop-in') },
    { t: 'Arctic Spas Ontario — Filter 50 pleated thread-in (PRT-900020; open-core cartridges do not fit)', u: AON('products/filter-50-pleated-thread-in') },
    { t: 'Arctic Spas Ontario — Silver Sentinel thread-in (PRT-900007, replaces PRT-900003; no aftermarket equivalent)', u: AON('products/silver-sentinel-thread-in') },
    { t: 'Arctic Spas Ontario — Polar Pro filters (2020+ Custom Series)', u: AON('collections/polar-pro-filters') },
    { t: 'Premier Pools & Spas — Arctic Spa filters 2009–2019 and 2020 Classic and Core filter guide (4CH-949, C-4310 note, Rescue Bag filters)', u: PREM + 'blogs/news/arctic-spa-filters-2009-2019-2020-classic-core-series-filter-guide' },
    { t: 'Premier Pools & Spas — New Arctic Spas Polar Pro filters for Custom Series spas (PRT-900150, -900140, -900170, -900180, -900190)', u: PREM + 'blogs/hot-tub-info-customer-guides/new-arctic-spas-polar-pro-filters-for-custom-series-spas' },
    { t: 'Premier Pools & Spas — Arctic Silver Sentinel drop-in PRT-900004 (1998–2008, not Marmot)', u: PREM + 'products/arctic-silver-sentinal-pre-2000' },
    { t: 'Premier Pools & Spas — Arctic Atlantis drop-in PRT-900008 (1998–2008, not Marmot)', u: PREM + 'products/arctic-spas-prt-900008-silver-sentinel-filter-drop-in-copy' },
    { t: 'Arctic Spas Spokane — Arctic parts: filters and weir parts by year', u: 'https://usparts.arcticspas.com/filters/' },
    { t: 'Unicel 2026 Replacement Guide — Arctic Spas entry pointing to Blue Falls Mfg. (printed pp. 24–25) and spec tables', u: UNICEL },
    { t: 'Filbur Catalog & Reference Guide — Arctic Spas and Blue Falls Mfg. (printed p. 27)', u: FILBUR },
  ] };

/* ---------- Softub ---------- */
const SD = (s: string) => `https://www.softubdirect.com/${s}/`;
const sRows: string[][] = [
  ['Softub T-140, T-220, T-300 (and Portico, per one dealer)', 'July 2009 and newer (June 2009 in some dealer listings)', '<strong>5020</strong> snap-on, P/N 2003905; 5-1/2" drain cap held by 2 screws', 'Great Barrier 8553 (aftermarket)'],
  ['Older Softubs', 'Before July 2009', '<strong>5015</strong> snap-on, P/N 2005400; 4" drain cap held by 1 screw', 'Great Barrier 8555 / 8555CA (aftermarket)'],
  ['Older T-140 and the Chameleon', 'Before July 2009', '<strong>5010</strong> short snap-on, P/N 2002200', '—'],
  ['Older Softub with a broken 4" drain cap and an exposed threaded pipe', 'Before July 2009', 'Screw-on “thinner” filter', 'Diamond Filtration 4CH-23DF (1-1/2" MPT, 5" diameter)'],
];
const softub: Page = { slug: 'softub-filter-by-model-year', brandSlug: 'softub', brandName: 'Softub', crumbBrand: 'Softub',
  date: FITMENT5_DATE,
  title: 'Softub hot tub filter by year (5020 vs 5015 vs 5010)',
  h1: 'Which filter does my Softub take? Lookup by year and model',
  desc: 'Softub filter by build year: 5020 (P/N 2003905) for July 2009 and newer T-140, T-220 and T-300; 5015 (2005400) and 5010 (2002200) for older Softubs, plus the threaded 6CH-25 and 4CH-20 catalog listings, sizes and conflicts.',
  answer: 'Softubs use a <strong>snap-on</strong> spa filter that pushes over the suction cover (drain cap), not a threaded cartridge. If your Softub was built in <strong>July 2009 or later</strong> (T-140, T-220, T-300) it takes the <strong>5020</strong>, Softub P/N <strong>2003905</strong>, which fits the 5-1/2" drain cap held by <strong>two screws</strong>. SoftubDirect says that covers about 90% of owners. Older Softubs with a 4" cap held by <strong>one screw</strong> take the <strong>5015</strong> (P/N 2005400) or the shorter <strong>5010</strong> (P/N 2002200). Count the screws on the cap if you are not sure of the year. Unicel, Pleatco and Filbur do not list the snap-on filters.',
  aftHead: 'Equivalents (dealers and catalogs)',
  partsNote: 'Softub’s owner’s manual does not print filter part numbers. The 5020, 5015 and 5010 numbers, Softub P/Ns and year split come from Softub dealers. The threaded cartridges at the bottom are the ones the Unicel, Pleatco and Filbur catalogs list for Softub.',
  parts: [
    { oem: '5020 (P/N 2003905)', what: 'Snap-on, closed top, fits the 5-1/2" two-screw drain cap; Softubs built July 2009 and newer (T-140, T-220, T-300). Current version has blue end caps (SpaStore)', unicel: 'Great Barrier 8553 (aftermarket, per dealers). Not in the Unicel, Pleatco or Filbur catalogs', size: '6" × 7-3/4" (SpaStore); area not given' },
    { oem: '5015 (P/N 2005400)', what: 'Snap-on, 4" opening, for the 4" one-screw drain cap; Softubs built before July 2009', unicel: 'Great Barrier 8555 / 8555CA (ezhottubparts: 35 sq ft, closed top, 4" slip collar). Unicel and Filbur: none', size: '6" × 7-3/4" (SpaStore)' },
    { oem: '5010 (P/N 2002200)', what: 'Shorter snap-on with an offset hole of about 3-3/4"; older T-140 and the Chameleon', unicel: 'None found', size: '6" × 5-1/2", 25 sq ft (SoftubDirect)' },
    { oem: '4CH-23DF (Diamond Filtration)', what: 'Screw-on filter for an older Softub whose 4" drain cap broke and left a threaded pipe exposed (SoftubDirect)', unicel: 'Sold under its own number', size: '5" diameter, 1-1/2" MPT' },
    { oem: '90-802 (catalogs only)', what: 'Threaded handle-top cartridge that Unicel and Pleatco list for Softub (Pleatco also names Leisure Bay); no Softub dealer we found sells it for a Softub', unicel: 'Unicel 6CH-25; Pleatco PTL20W-SV-P4; Filbur FC-0305 (filed under Softsider)', size: '6" × 5-1/2"; 25 sq ft (Unicel, Filbur), 20 sq ft (Pleatco)', href: ['/softub/6ch-25/'] },
    { oem: 'No OEM number (Unicel only)', what: 'Small threaded cone-top cartridge, 1-1/2" MPT, listed for Softub by Unicel only', unicel: 'Unicel 4CH-20', size: '4-5/8" × 6-3/4", 20 sq ft', href: ['/softub/4ch-20/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your year</h2>
<p>Softub does not sort filters by model: the dividing line is mid-2009, when the suction cover (drain cap) changed. The table is built from SoftubDirect, SpaStore.com, Simply Softub Spas and ezhottubparts listings.</p>
${tbl(['Softub', 'Built', 'Filter', 'Aftermarket'], sRows)}
<h2>How the filter comes off, and how often</h2>
<p>Softub’s 2025 owner’s manual says the hot tub filter snaps over the gray or pearl suction covers and should be removed only when the spa is warm, so the collar is soft enough to slide off; soaking the collar in warm water helps. The manual says to clean the filter at least monthly and replace it at least once a year. The manual describes one filter, with a filter sock, that snaps onto either of the two suction covers.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>June or July 2009.</strong> SoftubDirect’s guide says July 2009 and its 5020 listing says June 2009 and later; Simply Softub Spas says “purchased after June 2009”; SpaStore says July 2009. SoftubDirect also mixes “made” and “bought” in 2009. For a 2009 tub, count the drain-cap screws instead.</li>
<li><strong>Drain-cap size.</strong> SoftubDirect and Simply Softub Spas say the newer cap is 5-1/2"; ezhottubparts calls it 5".</li>
<li><strong>Filter area.</strong> ezhottubparts rates the 8555 at 35 sq ft; SoftubDirect rates the shorter 5010 at 25 sq ft. None of the sources gives an area for the 5020 or 5015.</li>
<li><strong>Filbur FC-9900.</strong> ezhottubparts lists Filbur FC-9900 for the 2009-and-newer filter. We could not find FC-9900 in the Filbur catalog.</li>
<li><strong>Threaded catalog cartridges.</strong> Unicel lists 6CH-25 (OEM 90-802) and 4CH-20 for Softub, and Pleatco lists PTL20W-SV-P4 for Softub and Leisure Bay. Softub’s manual and the Softub dealers describe only snap-on filters (plus the 4CH-23DF for a broken cap). We could not find which Softubs, if any, took the threaded cartridges.</li>
<li><strong>90-802 rating.</strong> Unicel and Filbur rate it 25 sq ft; Pleatco rates PTL20W-SV-P4 at 20.</li>
</ul>
<h2>Known limits</h2>
<ul><li>Softub does not publish part numbers in its manual; the snap-on numbers come from dealers.</li>
<li>The 4CH-20 listing stays flagged: only Unicel lists it for Softub, and the retailer tables that repeat it give no OEM number or model.</li>
<li>The snap-on filters are not in our dataset because the Unicel, Pleatco and Filbur catalogs do not list them.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>With the spa warm, pull the filter and look at the drain cap: two screws and a 5-1/2" cap means the 5020; one screw and a 4" cap means the 5015 or 5010 (measure the length: 7-3/4" or 5-1/2").</li><li>A threaded cartridge instead? Read its number and <a href="/">search it here</a>, or measure it with our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a>, and compare with the <a href="/softub/">Softub brand table</a>.</li><li>See <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Softub — Owner’s manual (domestic), October 2025 (snap-on filter, removal, cleaning and replacement)', u: 'https://softub.com/wp-content/uploads/2025/10/Owners_Manual_Domestic_20251006.pdf' },
    { t: 'SoftubDirect — Which Softub filter do I need? (5020 vs older filters, drain-cap test)', u: SD('which-softub-filter-do-i-need') },
    { t: 'SoftubDirect — Softub filter 5020 (P/N 2003905; T-140, T-220, T-300)', u: SD('product/softub-filter-5020-for-july-2009-softub-or-newer-pn-2003905') },
    { t: 'SoftubDirect — Snap-on filter 5010 for much older Softubs (P/N 2002200, 25 sq ft)', u: SD('product/softub-snap-on-filter-for-much-older-softubs-5010') },
    { t: 'SoftubDirect — Diamond thinner screw-on filter for older Softubs (4CH-23DF)', u: SD('product/diamond-thinner-screw-on-filter-for-much-older-softubs') },
    { t: 'SpaStore.com — Softub filter cartridges (5020 / 2003905 and 5015 / 2005400, sizes)', u: 'https://www.spastore.com/softub-filter-cartridge/' },
    { t: 'Simply Softub Spas — 5020 filter for tubs purchased after 2009', u: 'https://simplysoftubspas.com/product/5020-filter-for-tubs-purchased-after-2009/' },
    { t: 'ezhottubparts — Softub filters (5020 / 2003905, Great Barrier 8553, 8555)', u: 'https://ezhottubparts.com/product-category/shop-part-by-spa-brand/softub-spas-parts/softub-filter/' },
    { t: 'ezhottubparts — Softub 8555 pre-2009 snap-on filter (35 sq ft, 4" slip collar)', u: 'https://ezhottubparts.com/product/softub-8555-filter-pre-2009-snap-on/' },
    { t: 'Unicel 2026 Replacement Guide — Softub cross-reference (printed p. 51) and spec tables', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — PTL20W-SV-P4 (Softub; Leisure Bay; OEM 90-802)', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — Softsider Spas, FC-0305 (OEM 90-802)', u: FILBUR },
  ] };

export const pages5: Page[] = [nordic, arctic, softub];
