import type { Page } from './fitment';
/** Intex PureSpa and Bestway Lay-Z-Spa / SaluSpa model-year pages (published 2026-11-01).
 *  Intex: set numbers and names from Intex's own compatible-item lists for parts 11692 (S1) and 13435 (S2); model years from the
 *  folders Intex's replacement-parts archive files part 11692 under; packs, sizes and care from Intex product pages.
 *  Bestway: cartridge numbers by era from Bestway's 2011 and 2013 Lay-Z-Spa owner's manuals and its 2021 and 2025 Lay-Z-Spa
 *  catalogs; current SKUs from the Lay-Z-Spa UK and Bestway USA stores. Catalog equivalents are from the Unicel 2026,
 *  Pleatco 2023 and Filbur catalogs. Where sources disagree the page shows both; nothing is estimated. */
export const FITMENT6_DATE = '2026-11-01';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* ---------- Intex PureSpa ---------- */
const I_S1 = 'https://intexcorp.com/replacement-parts/purespa/purespa-bubble-massage/77in-x-28in/11692-spa-s1-filter-cartridge/';
const I_S2 = 'https://intexcorp.com/replacement-parts/13435-spa-cartridge-s2/';
const I_ARCH = 'https://intexcorp.com/replacement-parts-archive/purespa/';
const S1 = '<strong>S1</strong>';
const s1Rows: string[][] = [
  ['28403E', 'PureSpa Bubble Massage, 77in × 28in', '2017–2019, 2022–2026', S1],
  ['28405E', 'PureSpa Plus Bubble Massage Set, 77in × 28in', '2017, 2018', S1],
  ['28407E', 'PureSpa Bubble Massage, 85in × 28in', '2017–2026', S1],
  ['28409E', 'PureSpa Plus Bubble Massage Set, 85in × 28in', '2017–2019', S1],
  ['28413WL', 'PureSpa Bubble Spa Set, 79in × 79in × 28in', '2017, 2018, 2022–2026', S1],
  ['28421E', 'PureSpa Jet Massage, 77in × 28in', '2016, 2024–2026', S1],
  ['28425E', 'PureSpa Bubble Massage, 4-person (77in × 28in)', '2020–2022', S1],
  ['28427E', 'PureSpa Bubble Massage, 6-person (85in × 28in)', '2020–2022', S1],
  ['28429E', 'PureSpa Plus Bubble Set, 4-person (77in × 28in)', '2020–2022', S1],
  ['28431E', 'PureSpa Plus Bubble Set, 6-person (85in × 28in)', '2020–2022', S1],
  ['28433EP, 28433WL', 'PureSpa Bubble Deluxe Set, 4-person', 'Not given', S1],
  ['28435E', 'PureSpa Jet Massage Set, 86in × 86in × 28in', '2016, 2024–2026', S1],
  ['28439E', 'PureSpa Greywood Deluxe, 4-person (77in × 28in)', '2020–2022', S1],
  ['28441E', 'PureSpa Greywood Deluxe, 6-person (85in × 28in)', '2020–2022', S1],
  ['28453E', 'PureSpa Jet and Bubble Deluxe, 79in × 79in × 28in', '2017–2019', S1],
  ['28455E', 'PureSpa Jet and Bubble Deluxe, 6-person (86in × 86in × 28in)', '2017–2019', S1],
  ['28457E', 'PureSpa Jet and Bubble Deluxe, 4-person (79in × 79in × 28in)', '2020–2022', S1],
  ['28457EP', '4-Person Onyx Black Octagon Combo Spa Set', 'Not given', S1],
  ['28461E', 'PureSpa Jet and Bubble Deluxe, 6-person (86in × 86in × 28in)', '2020–2022', S1],
  ['28473E', 'PureSpa Bubble Massage with Energy Efficient Cover, 4-person (77in × 28in)', '2019–2026', S1],
  ['28475E', 'PureSpa Bubble Massage with Energy Efficient Cover, 4-person (77in × 28in)', '2021', S1],
  ['28481E', 'SimpleSpa Bubble Massage, 4-person (77in × 26in)', '2020–2022', S1],
  ['28491E', 'PureSpa Bubble Spa with Pool Set, 152in × 70in × 28in', '2017, 2019–2021, 2024–2026', S1],
];
const s2Rows: string[][] = [
  ['28425EG', 'PureSpa Olive Green Round Bubble, 4-person', '<strong>S2</strong>'],
  ['28425EH', 'PureSpa Sahara Tan Round Bubble, 4-person', '<strong>S2</strong>'],
  ['28427EG', 'PureSpa Olive Green Round Bubble, 6-person', '<strong>S2</strong>'],
  ['28427EH', 'PureSpa Sahara Tan Round Bubble, 6-person', '<strong>S2</strong>'],
  ['28439EH', 'PureSpa Greywood Deluxe Round Bubble, 4-person', '<strong>S2</strong>'],
  ['28441EH', 'Greywood Deluxe Round Bubble, 6-person', '<strong>S2</strong>'],
  ['28449EH', 'PureSpa Greystone Deluxe Square Bubble, 4-person', '<strong>S2</strong>'],
];
const intex: Page = { slug: 'intex-filter-by-model-year', brandSlug: 'intex', brandName: 'Intex', crumbBrand: 'Intex', date: FITMENT6_DATE,
  title: 'Intex PureSpa filter by set number and year (Type S1 or S2, 2016–2026)',
  h1: 'Which filter does my Intex PureSpa take? Lookup by set number and year',
  desc: 'Intex PureSpa and SimpleSpa filter by set number and model year: which sets take the Type S1 cartridge (11692, 29001E; Unicel C-4317, Pleatco PIN4PAIR) and which take Type S2 (13435, 29012E), with Intex archive years and source conflicts.',
  answer: 'Look at the full set number on the box or spa label, including the letters at the end. Intex’s own lists put <strong>24 PureSpa and SimpleSpa set numbers ending in E, WL or EP</strong> (28403E, 28407E, 28413WL, 28473E, 28491E and others) on the <strong>Type S1</strong> cartridge: single part 11692, two-pack 29001E or six-pack 29011E, 4-1/4" × 2-15/16", <strong>Unicel C-4317, Pleatco PIN4PAIR</strong>. Intex’s parts archive files the S1 cartridge under those sets from <strong>2016 to 2026</strong>. Seven newer sets ending in <strong>EG or EH</strong> (28425EG/EH, 28427EG/EH, 28439EH, 28441EH, 28449EH) take the <strong>Type S2</strong> cartridge instead: single part 13435 or two-pack 29012E, 3.375" × 5.125", with no Unicel, Pleatco or Filbur equivalent. 28425E and 28425EG look alike but take different cartridges.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'The Intex part and pack numbers are from Intex’s own product and replacement-part pages. The aftermarket numbers are from the Unicel 2026 guide and the Pleatco 2023 catalog. Filbur’s catalog lists neither cartridge.',
  parts: [
    { oem: 'Type S1: 11692 (single), 29001E (2-pack), 29011E (6-pack)', what: 'Open both ends; the set numbers in the first table below', unicel: 'Unicel C-4317 (OEM 29001, 11692); Pleatco PIN4PAIR (OEM 29001E, a two-cartridge set). Filbur: none found', size: '4-1/4" × 2-15/16"; end openings 2-1/16" (Unicel) or 1-5/8" (Pleatco); 4 sq ft', href: ['/intex/c-4317/'], note: 'Intex now marks the single 11692 as discontinued; the 29001E and 29011E packs are still listed.' },
    { oem: 'Type S2: 13435 (single), 29012E (2-pack)', what: 'Intex: “Only for PureSpa models with control unit cartridge integration”; the EG/EH sets in the second table', unicel: 'None in Unicel 2026, Pleatco 2023 or Filbur', size: '3.375" × 5.125" (Intex)', href: ['/intex/29012e/'], note: 'A Target listing prints 3.5" × 6.25" per filter.' },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Type S1 sets: set number and year</h2>
<p>The set numbers and names are Intex’s own compatible-item list for part 11692. The years are the model-year folders that Intex’s replacement-parts archive files part 11692 under for each set. “Not given” means the set is on the compatible list but not in the archive.</p>
${tbl(['Set number', 'Intex name and size', 'Years in Intex’s parts archive', 'Cartridge'], s1Rows)}
<p>The archive also files part 11692 under four set numbers that are <em>not</em> on the compatible list: 28403VM (2018, 2022–2025), 28405CA (2017, 2018, 2022–2025), 28407VM (2018, 2022–2025) and 28417WL (2017, 2018, 2022–2025). They look like regional versions of the sets above, but Intex does not say so. Treat them as S1 only after checking the old cartridge.</p>
<h2>Type S2 sets</h2>
<p>These are the seven sets on Intex’s compatible-item list for part 13435. Intex’s archive does not file the S2 cartridge under any model year, so there are no years to show. Intex’s page for 28425EG lists “2 S2 filter cartridges” in the box.</p>
${tbl(['Set number', 'Intex name', 'Cartridge'], s2Rows)}
<h2>Cleaning and replacement</h2>
<p>Intex’s 29001E page says to clean S1 cartridges each week and replace them once a month or sooner, and describes the media as heavy-duty Dacron paper. Because the 11692 single is discontinued, the 29001E two-pack is the S1 part Intex still lists. Intex lists two spa cartridge housings (11798 and 13436) as related parts on the S2 pages, but it does not say which housing goes with which cartridge. For the S1 versus S2 sizes in more depth, and the Bestway equivalent, see <a href="/guides/intex-and-bestway-inflatable-spa-filters/">Intex and Bestway inflatable spa filters</a>.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>S1 end opening.</strong> Unicel prints 2-1/16" open at both ends for C-4317. Pleatco prints 1-5/8" for PIN4PAIR. The body size agrees. Retailer pages we checked on 2026-11-01 repeat one figure or the other and give no measurement of their own, so the conflict stands and the <a href="/intex/c-4317/">C-4317 page</a> stays flagged.</li>
<li><strong>The “2019” sets.</strong> Intex’s compatible list names 28403E, 28405E, 28407E, 28409E and 28453E with “(2019)”. The archive files 28405E only under 2017 and 2018, and the other four under more years than 2019.</li>
<li><strong>Same base number, different cartridge.</strong> Intex lists 28425E, 28427E, 28439E and 28441E under S1, but 28425EG/EH, 28427EG/EH, 28439EH and 28441EH under S2.</li>
<li><strong>Retailer model lists.</strong> A Home Depot listing for 29001E names 28413E, 28423E and 28443E, which are not on Intex’s S1 list.</li>
<li><strong>28491E size.</strong> The compatible list calls it 152in × 70in; the archive folder is 152in × 72in.</li>
<li><strong>S2 size.</strong> Intex gives 3.375" × 5.125"; a Target listing for 29012E prints 3.5" × 6.25".</li>
</ul>
<h2>Known limits</h2>
<ul><li>The years show where Intex’s archive files the part. They are not a statement from Intex that every unit sold in those years shipped with it.</li>
<li>Some 2026 archive pages on Intex’s site load empty, so a 2026 set could be missing here.</li>
<li>No source gives years for the S2 sets, for 28433EP/28433WL or for 28457EP.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the full set number, including the suffix, from the box, the spa label or the owner’s manual, and find it in the tables above.</li><li>Not listed? Measure the old cartridge: about 4-1/4" wide and under 3" tall is S1; about 3-3/8" wide and 5-1/8" tall is S2. See our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a>.</li><li>Compare with the <a href="/intex/">Intex brand table</a> and the <a href="/intex/c-4317/">S1</a> and <a href="/intex/29012e/">S2</a> cartridge pages.</li></ol>`,
  sources: [
    { t: 'Intex — 11692, Spa Cartridge (S1): compatible item list of 24 set numbers (now marked discontinued)', u: I_S1 },
    { t: 'Intex — Replacement parts archive, PureSpa (set number and model-year folders that list part 11692)', u: I_ARCH },
    { t: 'Intex — Archive example: 79in × 79in × 28in, 2018, 28413WL (part 11692 listed)', u: 'https://intexcorp.com/replacement-parts-archive/purespa/purespa-bubble-massage/79in-x-79in-x-28in/2018/28413wl/' },
    { t: 'Intex — Type S1 filter cartridge 2-pack, SKU 29001E (cleaning and replacement interval)', u: 'https://intexcorp.com/products/spas/spa-accessories/filter-cartridge-s1-twin-pack/' },
    { t: 'Intex — Type S1 filter cartridge 6-pack, SKU 29011E', u: 'https://intexcorp.com/products/spas/spa-accessories/filter-cartridge-s1-six-pack/' },
    { t: 'Intex — 13435, Spa Cartridge (S2): compatible item list of 7 set numbers', u: I_S2 },
    { t: 'Intex — Filter Cartridge S2 Twin Pack, SKU 29012E (3.375" × 5.125"; control-unit models only)', u: 'https://intexcorp.com/spa-accessories/filter-cartridge-s2-twin-pack-for-spa/' },
    { t: 'Intex — PureSpa Olive Green Round Bubble 4-person, 28425EG (“2 S2 filter cartridges”)', u: 'https://intexcorp.com/products/spas/purespa-olive-green-round-bubble-inflatable-spa-set-4-person/' },
    { t: 'Unicel 2026 Replacement Guide — Intex section (PureSpa, 11692 / 29001 / Type S1 = C-4317) and 4000-series spec table', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — PIN4PAIR (Intex EZ Set Pure Spa S1, OEM 29001E)', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — checked; no Intex spa cartridge listed', u: FILBUR },
    { t: 'Home Depot — Intex 29001E listing (retailer model list)', u: 'https://www.homedepot.com/p/Intex-4-25-in-Dia-Type-S1-Pool-Replacement-Filter-Cartridge-4-Pack-2-x-29001E/310718769' },
    { t: 'Target — Intex 29012E listing (retailer size)', u: 'https://www.target.com/p/intex-29012e-purespa-filter-cartridge-type-s2-for-various-purespa-models-2-pack/-/A-1001846352' },
  ] };

/* ---------- Bestway Lay-Z-Spa / SaluSpa ---------- */
const B_CAT25 = 'https://www.lay-z-spa.no/25ss_LayZSpa.pdf';
const B_CAT21 = 'https://bestway-store.ru/upload/bestwaycatalog/BESTWAY_2021_Lay-Z-Spa_bestway-store.ru.pdf';
const B_MAN11 = 'https://www.zwembadenwebshop.nl/Files/10/229000/229484/FileBrowser/files/lay-z-spa-handleiding.pdf';
const B_MAN13 = 'https://files.drinkstuff.com/pdf/BestwayLay-Z-SpaManual2013.pdf';
const LZ = (h: string) => `https://www.lay-z-spa.co.uk/products/${h}`;
const BU = (h: string) => `https://bestwayusa.com/products/${h}`;
const bRows: string[][] = [
  ['Lay-Z-Spa round #54075 and oval #54090', '2011 owner’s manual (Dutch edition, July 2011)', '<strong>58094</strong> filter cartridge'],
  ['Lay-Z-Spa Vegas #54112 and Monaco #54113', '2013 owner’s manual (April 2013)', '<strong>58239 (VI)</strong> cartridge in filter set P6600'],
  ['AirJet: St. Lucia, Miami, Bahamas, Cancun, Tahiti, Ibiza, Honolulu, Hawaii, St. Moritz, Helsinki. AirJet Plus: Milan, Vancouver. HydroJet Pro: Hawaii, Maldives', '2021 Lay-Z-Spa catalog', '<strong>60311</strong> Filter Cartridge (VI), in the box of every model'],
  ['Miami AirJet 4 and 6; Hollywood Luxe AirJet 6; Hawaii, Bali and Rome Smart AirJet 6 and 7; Dominica and Cabo Smart HydroJet 6; Santorini, Maldives and San Francisco Smart HydroJet Pro 7; Carrara Smart AirJet 6 and Toronto Smart AirJet 7 (ThermaCore)', '2025 Lay-Z-Spa catalog', '<strong>60311</strong> Filter Cartridge (VI), every model in the compatibility matrix'],
  ['All Lay-Z-Spa hot tubs except Monte Carlo', 'Lay-Z-Spa UK store, current', '<strong>BW60311</strong> (2-pack), BW15196 (12-pack)'],
  ['Lay-Z-Spa Monte Carlo (rigid wall)', 'Lay-Z-Spa UK store, current', '<strong>BWA0024</strong> Monte Carlo filter cartridge'],
  ['SaluSpa (US)', 'Bestway USA store, current', '<strong>60311E</strong> SaluSpa Type VI (2-pack), 60311E-CASE (24)'],
];
const housing: string[][] = [
  ['B-BWP05343 (UK)', 'Lay-Z-Spa with an external pump; “not compatible with UltraFit”; size 8 cm', 'Lay-Z-Spa UK'],
  ['BWP07805 (UK), P07805 (US)', 'Lay-Z-Spa / SaluSpa with the UltraFit built-in pump; size 8 cm (UK)', 'Lay-Z-Spa UK, Bestway USA'],
  ['P05343 (US)', 'SaluSpa and Coleman AirJet and HydroJet hot tubs', 'Bestway USA'],
  ['P07674 (US)', 'SaluSpa HydroJet hot tubs', 'Bestway USA'],
  ['P6600', 'Filter set holding the 58239 (VI) cartridge, Vegas #54112 and Monaco #54113', 'Bestway 2013 manual'],
];
const bestway: Page = { slug: 'bestway-filter-by-model-year', brandSlug: 'bestway', brandName: 'Bestway', crumbBrand: 'Bestway', date: FITMENT6_DATE,
  title: 'Bestway Lay-Z-Spa and SaluSpa filter by model and year (58094, 58239, 60311 Type VI, Monte Carlo)',
  h1: 'Which filter does my Lay-Z-Spa or SaluSpa take? Lookup by model and year',
  desc: 'Bestway Lay-Z-Spa and SaluSpa filter cartridge by model and year: 58094 in the 2011 manual, 58239 (VI) in 2013, 60311 Type VI for every model in the 2021 and 2025 catalogs, BWA0024 for the Monte Carlo, plus filter housings and source conflicts.',
  answer: 'Every inflatable Lay-Z-Spa in Bestway’s 2021 and 2025 catalogs, AirJet, AirJet Plus, HydroJet and HydroJet Pro alike, uses the <strong>Type VI cartridge, item 60311</strong>: 10.6 × 8.0 cm (4.2" × 3.1"), two per pack. It is sold as <strong>BW60311</strong> on the Lay-Z-Spa UK store and <strong>60311E</strong> on Bestway USA for SaluSpa; retailers also carry it as <strong>58323</strong>, and Bestway’s 2013 manual printed it as <strong>58239 (VI)</strong>. The rigid-wall <strong>Monte Carlo</strong> is the exception and takes <strong>BWA0024</strong>. Bestway’s 2011 manual for the earlier round #54075 and oval #54090 lists a different cartridge, <strong>58094</strong>. None of these is in the Unicel, Pleatco or Filbur catalogs.',
  aftHead: 'Catalog equivalents',
  partsNote: 'Bestway part numbers are from Bestway’s manuals, catalogs and stores. The Unicel 2026 guide, the Pleatco 2023 catalog and the Filbur catalog list no Bestway spa cartridge, so there is no aftermarket number to cross to.',
  parts: [
    { oem: 'Type VI: 60311 (catalog item), BW60311 (UK 2-pack), 60311E (US 2-pack), 58323 / 58323E (retail), 58239 (2013 manual)', what: 'Every inflatable Lay-Z-Spa except the Monte Carlo; SaluSpa', unicel: 'None in Unicel, Pleatco or Filbur', size: '10.6 × 8.0 cm / 4.2" × 3.1" (Bestway catalogs, Bestway USA)', href: ['/bestway/58323/'] },
    { oem: 'BWA0024', what: 'Monte Carlo rigid-wall hot tub only', unicel: 'None', size: 'Not printed by Bestway', note: 'Lay-Z-Spa UK says it lasts at least three months with proper care.' },
    { oem: '58094', what: 'Lay-Z-Spa round #54075 and oval #54090 (2011 manual)', unicel: 'None', size: 'Not printed in the manual', note: 'Retailers call 58094 the Type II cartridge and sell it for pre-2012 Lay-Z-Spas.' },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your model and year</h2>
<p>Bestway does not publish one chart for all years. This table puts the cartridge printed in each Bestway document next to the models that document covers.</p>
${tbl(['Models', 'Source and year', 'Cartridge'], bRows)}
<p>The 2025 catalog’s compatibility matrix marks Filter Cartridge (60311) for every one of its hot tubs, including the ThermaCore Carrara and Toronto. The 2021 catalog lists “filter cartridge (VI)” in the box contents of each of its 14 models and sells the spare as 60311, “Contents: 2 filter cartridges”.</p>
<h2>Filter housings are not all the same</h2>
<p>The cartridge is shared, but the housing it sits in depends on the pump. If the housing is cracked or lost, order by pump type:</p>
${tbl(['Housing', 'Fits', 'Source'], housing)}
<h2>How often to change it</h2>
<p>Bestway’s own advice has changed over the years. The 2011 manual says to clean the cartridge daily and replace it every two weeks. The 2013 manual says to check and clean it every day if needed and recommends changing it every three days, depending on use. Bestway USA’s current filter collection page says to clean or replace every two weeks. For the Monte Carlo, Lay-Z-Spa UK says the BWA0024 lasts at least three months. Compare these with other brands in <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>Part number.</strong> The same Type VI cartridge appears as 58239 (2013 manual), 58323 / 58323E (UK and US retailers, including Home Depot’s 58323E-BW) and 60311 (2021 and 2025 catalogs, Bestway USA, Lay-Z-Spa UK). A UK retailer describes 58323 as replacing 58239 for 2012-onward Lay-Z-Spas. Bestway itself does not print a cross-reference between the numbers.</li>
<li><strong>Type IV or Type VI.</strong> Bestway USA’s SaluSpa Hot Springs AirJet bundle is titled “with Type IV Filter Cartridge 2-Pack”, but its description says it includes a Type VI cartridge and a replacement 2-pack of Type VI.</li>
<li><strong>58094 as “Type II”.</strong> Bestway’s 2011 manual prints 58094 but not a type letter. The Type II name and the “pre-2012” cut-off come from retailers.</li>
<li><strong>HydroJet housing.</strong> Bestway USA sells both P05343 (SaluSpa and Coleman AirJet and HydroJet) and P07674 (SaluSpa HydroJet) as HydroJet filter sets.</li>
<li><strong>Replacement interval.</strong> Three days (2013 manual), two weeks (2011 manual and Bestway USA) and three months (Monte Carlo) all appear; see above.</li>
</ul>
<h2>Known limits</h2>
<ul><li>We have Bestway documents for 2011, 2013, 2021 and 2025. Models sold only between those years are not listed by name.</li>
<li>Coleman-branded SaluSpa tubs appear in Bestway USA’s housing listing (P05343) but in no Bestway cartridge list we found.</li>
<li>No Bestway source gives an end-cap opening or a square-foot rating for Type VI.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Find the model name and the item number on the spa, the box or the manual, and match it in the table.</li><li>Inflatable Lay-Z-Spa from 2012 on: Type VI. Rigid Monte Carlo: BWA0024. Older tub with a cartridge inside the pump: check the number on the old cartridge for 58094.</li><li>See the <a href="/bestway/58323/">Type VI cartridge page</a>, the <a href="/bestway/">Bestway brand table</a> and the <a href="/guides/intex-and-bestway-inflatable-spa-filters/">Intex and Bestway filter guide</a>.</li></ol>`,
  sources: [
    { t: 'Bestway — Lay-Z-Spa 2025 catalog (contents pages; Technical Features & Accessory Compatibility matrix; Filter Cartridge (VI) 60311, 10.6 × 8.0 cm)', u: B_CAT25 },
    { t: 'Bestway — Lay-Z-Spa Collection 2021 catalog (model list; box contents; Filter Cartridge (VI) 60311)', u: B_CAT21 },
    { t: 'Bestway — Lay-Z-Spa owner’s manual, Dutch edition for #54075 and #54090 (PDF dated July 2011; 58094 filter cartridge; clean daily, replace every two weeks)', u: B_MAN11 },
    { t: 'Bestway — Lay-Z-Spa owner’s manual 2013, Vegas #54112 and Monaco #54113 (58239 (VI) cartridge, P6600 filter set, three-day interval)', u: B_MAN13 },
    { t: 'Lay-Z-Spa UK — Official Lay-Z-Spa Filter Cartridge 2-pack, BW60311 (“all Lay-Z-Spa hot tubs (Except Monte Carlo)”)', u: LZ('filter-cartridge-lay-z-spa-vi') },
    { t: 'Lay-Z-Spa UK — Filter Cartridge 12-pack, BW15196', u: LZ('lay-z-spa-filter-cartridge-vi-box') },
    { t: 'Lay-Z-Spa UK — Monte Carlo Filter Cartridge, BWA0024', u: LZ('rigid-spa-filter-cartridge') },
    { t: 'Lay-Z-Spa UK — Filter Housing Set for external-pump spas, B-BWP05343', u: LZ('lay-z-spa-spa-filter-set-not-inc-cartridge-1') },
    { t: 'Lay-Z-Spa UK — Filter Housing Set for UltraFit pump, BWP07805', u: LZ('filter-housing-set-ultrafit') },
    { t: 'Bestway USA — SaluSpa Type VI Filter Cartridge 2-pack, 60311E (Ø4.2" × 3.1")', u: BU('saluspa-type-vi-filter-cartridge-2-pack-1060311usx21') },
    { t: 'Bestway USA — Hot tub filter cartridges collection (clean or replace every two weeks)', u: 'https://bestwayusa.com/collections/hot-tub-filter-cartridges' },
    { t: 'Bestway USA — SaluSpa Hot Springs AirJet bundle, BUN-6004 (title says Type IV; description says Type VI)', u: BU('saluspa-hot-springs-airjet-2-4-person-inflatable-hot-tub-with-type-iv-filter-cartridge-2-pack') },
    { t: 'Bestway USA — SaluSpa, Coleman AirJet and HydroJet filter set, P05343', u: BU('saluspa-coleman-airjet-and-hydrojet-hot-tub-filter-set-replacement-1a60p0534321') },
    { t: 'Bestway USA — SaluSpa HydroJet filter set, P07674', u: BU('saluspa-hydrojet-hot-tub-filter-set-replacement-1a60p0767423') },
    { t: 'Bestway USA — SaluSpa UltraFit filter set, P07805', u: BU('saluspa-ultrafit-hot-tub-filter-set-replacement-1a60p0780524') },
    { t: 'Splash and Relax (UK retailer) — Type VI cartridge 58323: 2012-onward Lay-Z-Spas, replaces 58239', u: 'https://www.splashandrelax.co.uk/products/Pool+Accessories/Pool+Filters/Type+VI+Cartridge+Filter-+1+Pair+by+Bestway/1028173232' },
    { t: 'Splash and Relax (UK retailer) — 58094 Type II cartridge for pre-2012 Lay-Z-Spas', u: 'https://www.splashandrelax.co.uk/products/Pool+Accessories/Pool+Filters/58094+Type+II+Cartridge+Filter-+1+Pair+by+Bestway/1414730080' },
    { t: 'Home Depot — Bestway Type VI 2-pack, 58323E-BW (retailer)', u: 'https://www.homedepot.com/p/Bestway-4-2-in-Dia-Type-VI-SaluSpa-Hot-Tub-Replacement-Pool-Filter-Cartridge-2-Pack-2-x-58323E-BW/310718619' },
    { t: 'Unicel 2026, Pleatco 2023 and Filbur catalogs — checked; no Bestway spa cartridge listed', u: UNICEL },
  ] };

export const pages6: Page[] = [intex, bestway];
