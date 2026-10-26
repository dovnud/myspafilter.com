import sdno from '../data/sundance-no.json';
import type { Page } from './fitment';
/** Jacuzzi and Sundance model-year pages (published 2026-10-26). Model/year rows come from two independent published tables per brand
 *  (Jacuzzi: Spa World AU + Jacuzzi Direct France; Sundance: Sundance Spas Norway + Leisure Time Inc.). Equivalents are from the
 *  Unicel 2026, Pleatco 2023 and Filbur catalogs. Where the tables disagree the page says so; nothing is estimated. */
export const FITMENT2_DATE = '2026-10-26';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const SW = 'https://ask.spaworld.com.au/portal/en/kb/articles/jacuzzi-filter-guide';
const JDF = 'https://jvg-boutique.fr/img/cms/Mars2024_tableau_filtres_JacuzziDirect.pdf';
const SDNO = 'https://www.sundance.no/wp-content/uploads/2026/05/Filteroversikt_pr_mai_2026.pdf';
const LT = 'https://leisuretimeinc.com/pages/filter-guide';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* ---------- Jacuzzi ---------- */
// [collection, model(s), years (and which table gives them), main/upper, lower, jet-pump filter, table]
const J: string[][] = [
  ['J-LX / J-LXL', 'J-LX, J-LXL', '2023 and newer', '6473-157J', '6473-161J', '6000-383AJ', 'Both'],
  ['J-LX / J-LXL', 'J-LX, J-LXL', '2011–2021 (Spa World) · 2011–2022 (France)', '6000-383AJ', '—', '6000-383AJ', 'Both'],
  ['J-500', 'J-585, J-575', '2015 and newer (France) · 2015–2021 (Spa World)', '6473-157J', '6473-161J', '6000-383AJ', 'Both'],
  ['J-400', 'All J-400 (Spa World names J-435, J-445, J-475, J-485, J-495)', '2013 and newer (France) · 2013–2023 (Spa World)', '6473-157J', '6473-161J', '6000-383AJ', 'Both'],
  ['J-400', 'J-495, J-425, J-415', '2012', '6473-157J', '6473-161J', '6000-383AJ', 'Both'],
  ['J-400', 'J-480, J-470, J-465', '2012', '6473-158', '6473-161J', '2540-387J', 'Both'],
  ['J-400', 'J-460', '2012', '6473-156', '6473-161J', '2540-384', 'Both'],
  ['J-400', 'J-480, J-470', '2006–2011', '2540-383J', '—', '2540-387J', 'Both'],
  ['J-400', 'J-465', 'May 2007–2011 (France) · “up to May 2011” (Spa World)', '2540-383J', '—', '2540-387J', 'Both'],
  ['J-400', 'J-465', 'Before May 2007 (France) · “up to April 2007” (Spa World)', '2000-498', '—', '2540-384', 'Both'],
  ['J-400', 'J-460', '2006–2011', '2000-498', '—', '2540-384', 'Both'],
  ['J-300', 'All J-300 (J-310 to J-385)', '2014 and newer', '6000-383AJ', '6473-161J only with the 2472-234 canister (Spa World)', '6000-383AJ (second filter)', 'Both'],
  ['J-300', 'All J-300', 'Through 2013', '6000-383AJ', '—', '6000-383AJ (second filter)', 'Both'],
  ['J-200', 'J-215, J-225, J-235, J-245, J-275, J-285 (ProClassic)', '2023 and newer', '6541-853J', '—', '—', 'Spa World'],
  ['J-200', 'J-210, J-215, J-220', 'Since 2005 (France) · J-220 2005–2008 and J-215/J-225 2016–2022 (Spa World)', '373045', '—', '—', 'Both'],
  ['J-200', 'J-230', 'Through 2007 (France) · 2005–2007 (Spa World)', '373045', '—', '—', 'Both'],
  ['J-200', 'J-230', 'Since 2008 (France) · 2008–2012 (Spa World)', '2540-381J', '—', '—', 'Both'],
  ['J-200', 'J-235', 'Through 2011', '6000-136', '—', '—', 'France only'],
  ['J-200', 'J-235, J-245, J-275', 'Since 2012 (France) · 2012–2022 (Spa World)', '373045', '—', '—', 'Both'],
  ['J-200', 'J-270', 'Since 2005 (France) · 2007–2012 (Spa World)', '2540-381J', '—', '—', 'Both'],
  ['J-200', 'J-280', 'Since 2005 (France) · 2007–2022 (Spa World)', '2540-381J', '—', '—', 'Both'],
  ['J-100', 'J-145, J-135', '2012–2022', '373045J', '—', '—', 'Spa World'],
  ['J-100', 'J-125, J-115', '2016–2022', '373045J', '—', '—', 'Spa World'],
];
const jacTable = ['J-LX / J-LXL', 'J-500', 'J-400', 'J-300', 'J-200', 'J-100'].map((c) => `<h3>${c} Collection</h3>` + tbl(['Model', 'Years', 'Main / upper filter', 'Lower filter', 'Jet-pump or second filter', 'Listed by'], J.filter((r) => r[0] === c).map((r) => [r[1], r[2], `<strong>${r[3]}</strong>`, r[4], r[5], r[6]]))).join('');

const jacuzzi: Page = { slug: 'jacuzzi-filter-by-model-year', brandSlug: 'jacuzzi', brandName: 'Jacuzzi', crumbBrand: 'Jacuzzi', date: FITMENT2_DATE,
  title: 'Jacuzzi hot tub filter by model and year (J-200, J-300, J-400, J-500, J-LX)',
  h1: 'Which filter does my Jacuzzi hot tub take? Lookup by collection, model and year',
  desc: 'Jacuzzi filter part numbers (373045, 2540-381, 6000-383A, 6473-157/161 and more) for J-100, J-200, J-300, J-400, J-500 and J-LX models by year, from two published tables, with Unicel, Pleatco and Filbur equivalents.',
  answer: 'It depends on the collection and, for several models, the year. In the two published tables we compared, most <strong>J-200 and J-100</strong> models take the <strong>373045</strong> (4-15/16" × 13-5/16"), while the J-230 from 2008, J-270 and J-280 take the <strong>2540-381</strong> (8" × 15-1/2"). <strong>J-300</strong> spas take two <strong>6000-383A</strong> ProClear 60 sq ft cartridges. Current <strong>J-400, J-500 and J-LX</strong> spas use a three-filter set: a <strong>6473-157</strong> pleated upper, a <strong>6473-161</strong> micron lower and a 6000-383A for the jet pump. Older J-400s (2006–2012) used different parts, and the 2023+ J-200 ProClassic uses an oval <strong>6541-853</strong>.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Sizes and equivalents come from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog, matched on the factory number. Where no catalog lists the factory number, the table says so rather than guessing a look-alike. A trailing “J” (for example 373045J) is how Jacuzzi suffixes the same part number in both dealer tables.',
  parts: [
    { oem: '373045 (373045J)', what: 'J-200 and J-100 cartridge, 4-15/16" × 13-5/16"', unicel: 'Unicel C-4950 (50 sq ft) or C-4326 (25 sq ft); Filbur FC-2390 (“J-200 Series”); Pleatco PRB50-IN (Pleatco’s interchange for C-4950 and FC-2390)', size: '50 or 25 sq ft', href: ['/jacuzzi/c-4950/', '/jacuzzi/c-4326/'], note: 'Unicel lists both cartridges for this number; they are the same size with 212 vs 106 pleats.' },
    { oem: '2540-381 (2540-381J)', what: 'J-230 (2008 on), J-270, J-280; 8" × 15-1/2", handle top, 2" male thread', unicel: 'Unicel 8CH-102; Pleatco PSD95-F2L; Filbur FC-2781 (“J-230, J-270, J-280 series”)', size: '95 sq ft', href: ['/sundance/8ch-102/'], note: 'Unicel files this number under Sundance; our 8CH-102 page is in the Sundance section.' },
    { oem: '6000-136', what: 'J-235 before 2012 (France table only); 4-15/16" × 9-1/4"', unicel: 'Unicel C-4335', size: '35 sq ft', href: ['/sundance/c-4335/'] },
    { oem: '6000-383A (6000-383AJ)', what: 'ProClear 60 sq ft, handle top. J-300 (two per spa), J-LX/J-LXL 2011–2021/22, and the jet-pump filter on newer J-400, J-500 and J-LX', unicel: 'None of the three catalogs lists this number. A Jacuzzi parts retailer lists Pleatco PJW60TL-F2S, Unicel 6CH-960 and Filbur FC-2800 as replacements; the catalogs list those against Jacuzzi 6540-476.', size: '60 sq ft; 15.45" tall × 6.697", 2.375" opening (retailer spec)', href: ['/jacuzzi/6ch-960/'], note: 'Check the retailer cross against your old cartridge: Unicel gives 6CH-960 as 6-3/4" × 15-1/2" with a 2" SAE thread.' },
    { oem: '6473-157 (6473-157J)', what: 'Pleated upper filter, 6" × 8-1/2", locking', unicel: 'Filbur FC-2764 (Unicel and Pleatco: none listed)', size: '40 sq ft' },
    { oem: '6473-158', what: 'Pleated upper filter, 6" × 12", locking (J-480/J-470/J-465, 2012)', unicel: 'Filbur FC-2765', size: '50 sq ft' },
    { oem: '6473-156', what: 'Pleated upper filter, 6" × 6-1/2", locking (J-460, 2012)', unicel: 'Filbur FC-2763', size: '30 sq ft' },
    { oem: '6473-161 (6473-161J)', what: 'Lower filter, 50-micron meltblown, closed end, 4-3/4" × 4-3/4"', unicel: 'Filbur FC-2767', size: 'Not rated in sq ft' },
    { oem: '2540-383 (2540-383J)', what: 'Main filter, J-480/J-470 2006–2011 and J-465 2007–2011', unicel: 'Unicel 6CH-959 (Unicel: “also replaces Jacuzzi Premium 2540-383”); 6" × 17-1/2"', size: '60 sq ft', href: ['/jacuzzi/6ch-959/'] },
    { oem: '2540-387 (2540-387J)', what: 'Jet-pump filter, J-480/J-470/J-465 2006–2012; 4-5/8" × 12-1/2", 2" SAE thread', unicel: 'Unicel 4CH-934; Filbur FC-2761', size: '35 sq ft', href: ['/jacuzzi/4ch-934/'] },
    { oem: '2000-498', what: 'Main filter, J-460 2006–2011 and early J-465', unicel: 'None listed by this number', size: 'Not given in our sources', note: 'Do not confuse with 6540-498 (Unicel 6CH-945), a different Jacuzzi number.' },
    { oem: '2540-384', what: 'Jet-pump filter, J-460 2006–2012 and early J-465', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '6541-853 (6541-853J)', what: 'J-200 ProClassic 2023+; oval, 248 × 203 mm, 76 mm opening', unicel: 'None listed', size: '50 sq ft (Spa World)', note: 'Spa World says this rinseable filter can be used for up to 18 months.' },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your model</h2>
<p>Rows combine two dealer tables: Spa World’s Jacuzzi filter guide (Australia) and the March 2024 Jacuzzi Direct filter table published by a French Jacuzzi dealer. Where they give different years, both are shown. Skimmer and filter bags (6570-392, 6570-398, 2540-389) and the J-LX weir (6540-188) are listed in those tables too but are not cartridges, so they are left out here.</p>
${jacTable}
<h2>Where the two tables differ</h2>
<ul><li><strong>J-235 before 2012:</strong> only the French table covers it, and it lists the 35 sq ft 6000-136. Spa World starts the J-235 at 2012 with the 373045.</li>
<li><strong>J-270 and J-280 start year:</strong> 2005 in the French table, 2007 in Spa World’s.</li>
<li><strong>J-LX / J-LXL end year</strong> for the two-ProClear setup: 2021 (Spa World) vs 2022 (France). Both move to the 157/161/383 set for 2023.</li>
<li><strong>J-465 cut-over:</strong> France says before May 2007 for 2000-498 and May 2007–2011 for 2540-383; Spa World words it as “up to April 2007” and “up to May 2011”. A 2007 J-465 needs a look at the old cartridge.</li>
<li><strong>J-400 end year:</strong> Spa World lists 2013–2023 for the named J-400 models; the French table says 2013 onward with no end.</li></ul>
<p>Both tables come from dealers outside the US (Australia and France), and we found no public fitment table from Jacuzzi itself, so treat the years as a strong guide rather than a guarantee.</p>
<h2>How to confirm yours</h2>
<ol><li>Read the part number printed on the old cartridge. Expect a J suffix on some (373045J, 6473-157J).</li><li>Jacuzzi’s owners center says filters are sold through local dealers, and that the spa serial number is in the equipment bay on top of the load box, typically 9 digits starting with 100. Give a dealer the serial if the year is near a change-over.</li><li>If the label is gone, measure diameter and length (our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how) and compare with the sizes above. A J-400 or J-500 with a short upper cartridge and a small closed-end lower one is the 157/161 set.</li></ol>`,
  sources: [
    { t: 'Spa World (Australia) — Jacuzzi Filter Guide (model, year, pleated/micron/jet-pump filters; fetched 2026-10-26)', u: SW },
    { t: 'Jacuzzi Direct filter table, March 2024 (published by Jacuzzi dealer JVG Boutique, France)', u: JDF },
    { t: 'Unicel 2026 Replacement Guide — Jacuzzi and Sundance cross-reference and spec tables', u: UNICEL },
    { t: 'Filbur Catalog & Reference Guide — Jacuzzi section (FC-2390, FC-2761, FC-2763/2764/2765, FC-2767, FC-2781)', u: FILBUR },
    { t: 'Pleatco 2023 Catalog — Jacuzzi and Sundance cross-reference', u: PLEATCO },
    { t: 'The Spa Supply Store — Jacuzzi ProClear 60 sq ft 6000-383AJ (dimensions)', u: 'https://thespasupplystore.com/products/jacuzzi%C2%AE-proclear%C2%AE-60-sq-ft-filter-6000-383aj' },
    { t: 'Hot Tub Things — 6000-383AJ listing (dimensions and listed replacements)', u: 'https://www.hottubthings.com/products/htt-6000-383aj' },
    { t: 'Spa World shop — Jacuzzi 50 sq ft ProClassic filter 6541-853 (size, 18-month note)', u: 'https://shop.spaworld.com.au/248-x-203mm-jacuzzi-50-sqft-proclassic-filter-6541' },
    { t: 'Jacuzzi — Owners Center (filters through dealers; serial number location)', u: 'https://www.jacuzzi.com/owners-center.html' },
  ] };

/* ---------- Sundance ---------- */
type SR = { model: string; years: string; serial: string; parts: string[]; alt: string[] };
const S = sdno as SR[];
const sdRows = S.map((r) => [esc(r.model), r.years, r.serial || '—', `<strong>${r.parts.join(' + ')}</strong>`, r.alt.length ? r.alt.join(' + ') : '—']);
const sundance: Page = { slug: 'sundance-filter-by-model-year', brandSlug: 'sundance', brandName: 'Sundance', crumbBrand: 'Sundance', date: FITMENT2_DATE,
  title: 'Sundance hot tub filter by model and year (680, 780, 880, 980 Series)',
  h1: 'Which filter does my Sundance hot tub take? Lookup by model, year and serial number',
  desc: 'Sundance filter part numbers for every model from 1995 to 2024+ (MicroClean, MicroClean Ultra, Ultra II, MicroClean Mini, 373045 and older cartridges), with serial ranges and Unicel, Pleatco and Filbur equivalents.',
  answer: 'Sundance changed filter systems several times, so the year matters. In Sundance Spas Norway’s model table: <strong>880 and 980 Series</strong> spas from about 2005/2006 to 2023 take the two-piece <strong>MicroClean Ultra</strong> set (<strong>6473-165</strong> outer + <strong>6473-164</strong> inner), with the one-piece <strong>6540-488</strong> as an alternative; <strong>780 Series</strong> spas take the two-part <strong>MicroClean</strong> (<strong>6540-501</strong> pleated + <strong>6540-502</strong> disposable upper), also with 6540-488 as the alternative; <strong>680 Series</strong> spas through 2022 take the <strong>373045</strong> and 2023+ models take the <strong>MicroClean Mini</strong> (6473-249S + 6473-283S); and 2024+ 880 models take <strong>MicroClean Ultra II</strong> (6473-452S + 6473-453S). Pre-2002 spas mostly use the 6540-490 or 6540-483.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Sizes and equivalents are from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog, matched on the factory number; “none listed” means none of the three lists that number. Sundance numbers often carry a trailing S (6473-165S); it is the same part.',
  parts: [
    { oem: '6473-165 + 6473-164 (set 6541-397)', what: 'MicroClean Ultra: pleated outer + meltblown inner core (880/980 Series)', unicel: 'Filbur FC-2771 outer (8-1/2" × 19-5/8"), FC-2769 inner (5-5/8" × 18-3/4"), FC-2772 kit; Unicel and Pleatco: none listed', size: 'Not given in our sources', note: 'A Sundance dealer lists the 6473-165S outer as 8.42" × 19.82", used with the 6473-164S inner.' },
    { oem: '6540-488', what: 'One-piece pleated cartridge, 8-7/16" × 19", the listed alternative for MicroClean, MicroClean Plus and original MicroClean Ultra systems', unicel: 'Unicel C-8326 (pre-2006, with core plug) or C-8327 (after 2005, no plug; also replaces 6540-507); Pleatco PSD125-2000; Filbur FC-2780', size: '125 sq ft', href: ['/sundance/c-8326/', '/sundance/c-8327/'] },
    { oem: '6540-501 + 6540-502', what: 'MicroClean: 8-7/16" × 14" pleated lower + disposable upper (780 Series, Caprio, Metro, Tango)', unicel: '6540-501: Unicel C-8380, Pleatco PSD85-2002, Filbur FC-2810. 6540-502: Pleatco PPS750, Filbur FC-2812 (7-3/4" × 5")', size: '80 sq ft (6540-501)', href: ['/sundance/c-8380/'], note: 'Filbur marks the FC-2812 upper “Replace after 3 months of use”.' },
    { oem: '6540-507', what: 'MicroClean Plus (Filbur: MicroClean II Plus); 880 Series 2005/2006–2008 per Leisure Time', unicel: 'Filbur FC-2791; Unicel says its C-8327 also replaces 6540-507', size: 'Not given in our sources', href: ['/sundance/c-8327/'] },
    { oem: '6473-452S + 6473-453S (complete 6541-964S)', what: 'MicroClean Ultra II, 880 Series 2024 on; one-piece alternative 6541-965S', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '6473-249S + 6473-283S', what: 'MicroClean Mini, 680 Series 2023 on; one-piece alternative 6541-468S', unicel: 'None listed', size: 'Not given in our sources' },
    { oem: '373045', what: '680 Series (Alicia, Edison, McKinley, Peyton, Prado, Ramona) through 2022, Burlington 2006–2007, Denali', unicel: 'Unicel C-4950 or C-4326 and Filbur FC-2390, listed under the same number for Jacuzzi J-200', size: '50 or 25 sq ft', href: ['/jacuzzi/c-4950/', '/jacuzzi/c-4326/'] },
    { oem: '373043', what: 'Burlington 2008+, Hartford, Hawthorne; 6" × 9-1/8", 1-1/2" male thread', unicel: 'Unicel 6CH-47', size: '45 sq ft', href: ['/sundance/6ch-47/'] },
    { oem: '6540-490', what: '1995–2001 Altamar, Cameo, Capri, Marin, Maxxus, Optima, plus Calypso, Montego, Rio; 8-7/16" × 18"', unicel: 'Unicel C-8325; Pleatco PSD125U', size: '125 sq ft', href: ['/sundance/c-8325/'] },
    { oem: '6540-483', what: 'Aruba, Bahia, Cyprus, Palermo 2000–2002; 7-1/2" × 17-3/4"', unicel: 'Unicel C-7370; Pleatco PSD75; Filbur FC-2760', size: '75 sq ft', href: ['/sundance/c-7370/'] },
    { oem: '6540-487', what: 'Solo, Tango 2000–2002; 7" × 19", 1-1/2" male thread', unicel: 'Unicel 7CH-90; Filbur FC-2770', size: '90 sq ft', href: ['/sundance/7ch-90/'] },
    { oem: '6540-495', what: 'Tango 1995–1999; 4-5/8" × 16-3/4"', unicel: 'Unicel C-4440', size: '40 sq ft', href: ['/sundance/c-4440/'] },
    { oem: '6000-134', what: 'Aspen 1998–1999, Vail / Bali; 4-15/16" × 4-5/8"', unicel: 'Unicel C-4401', size: 'Not consistent in Unicel’s tables', note: 'Unicel’s Sundance table prints 45 sq ft for it; Unicel’s other brand tables list C-4401 at 35 sq ft.' },
    { oem: '6000-136', what: 'Tacoma 2006+; 4-15/16" × 9-1/4"', unicel: 'Unicel C-4335', size: '35 sq ft', href: ['/sundance/c-4335/'] },
    { oem: '6540-723', what: 'Hermosa, Redondo; 5-3/16" × 10-3/4", 2" male thread', unicel: 'Unicel 5CH-402; Pleatco PJW40SC-F2M (Pleatco lists it as 5-1/4" × 9-7/8")', size: '50 sq ft (Unicel); 40 sq ft (Pleatco)', href: ['/sundance/5ch-402/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your model (with serial ranges)</h2>
<p>This table reproduces Sundance Spas Norway’s filter overview for all models from 1995 (version dated May 2026). Sundance Norway lists a serial-number range for most rows and asks owners to check against the serial number. “Alternative” is the part it lists as an alternative fit. Model names and years are as Sundance Norway prints them, including its spelling “Berkely”.</p>
${tbl(['Model', 'Years', 'Serial numbers', 'Factory filter(s)', 'Alternative'], sdRows)}
<p>Berkely, Brook and Paisley (2020 on, serials starting E2…) are listed with <strong>SC817</strong>. We could not find that number in any of the three aftermarket catalogs, so confirm it with a Sundance dealer.</p>
<h2>Which system is in my spa, and how often does it need attention?</h2>
<p>A Sundance dealer, The Sundance Spa Store, publishes these care intervals by system:</p>
${tbl(['Series and system', 'Clean', 'Replace'], [
  ['680 Series 2006–2022 (373045 style)', 'Monthly', 'Every 12 months'],
  ['680 Series 2023+ (MicroClean Mini)', 'Outer every 2–3 months', 'Outer every 12–18 months; Mini inner every 3–4 months'],
  ['780 Series (two-piece MicroClean)', '—', 'Pleated outer every 12–18 months; MicroClean upper every 3–5 months'],
  ['880 / 980 Series (MicroClean Ultra)', '—', 'Inner core every 6–9 months'],
])}
<p>Filbur prints “Replace after 3 months of use” on its FC-2812 version of the 6540-502 disposable upper. For our general advice, see <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>.</p>
<h2>Where the sources differ</h2>
<ul><li><strong>880 Series, 2005–2008.</strong> Leisure Time Inc. lists the <strong>6540-507 MicroClean Plus</strong> for 880 Maxxus, Cameo and Optima 2005–2008 and Altamar, Majesta, Marin and Capri 2006–2008. Sundance Norway puts those models on the MicroClean Ultra 6473-165/164 from 2005 or 2006. Check the old cartridge: the MicroClean Plus is a single cartridge, the Ultra is an outer plus an inner core.</li>
<li><strong>980 Series start and end dates.</strong> Leisure Time lists Claremont and Kingston for 2017–2025. A Sundance dealer (Snow Valley Spas) lists Claremont and Kingston from October 2016, and Lisbon and Odessa for 2019–March 2021. Sundance Norway gives 2017+ and 2019+.</li>
<li><strong>Bahia, Cayman, Palermo and Lagunas 2003–2005, Capri 2001 and Caprio 2000–2001.</strong> Sundance Norway lists the one-piece 6540-488 as the main filter for these and the 501/502 pair as the alternative, the reverse of later 780 models.</li>
<li><strong>680 Series, early 2023.</strong> Leisure Time says some early-2023 680 spas may still use the 373045. The serial ranges above are the best way to tell.</li>
<li><strong>2024 and 2026 changes.</strong> Leisure Time says to confirm the system on 2024 880 spas, and lists a MicroClean Ultra II Lite for 2026 780 models (Bristol, Chelsee, Dover, Hamilton, Montclair) using a 6473-608S outer with the 6473-453S inner. Sundance Norway’s table does not list the Ultra II Lite yet.</li>
<li><strong>Pre-2006 vs 2006+ one-piece cartridges.</strong> Unicel splits the 6540-488 into C-8326 (with core plug, for pre-2006 spas) and C-8327 (no plug, after 2005). Leisure Time’s tables follow the same split.</li></ul>
<p>Sundance Norway is a European distributor, and Leisure Time and Snow Valley are North American dealers. Model names match across them, but production dates can differ by market.</p>
<h2>How to confirm yours</h2>
<ol><li>Read the part number on the old cartridge or cartridges. A two-piece set (outer plus inner core) is MicroClean Ultra or Mini; a pleated cartridge plus a short disposable top is MicroClean.</li><li>Compare your spa’s serial number with the ranges in the table above, as Sundance Norway advises.</li><li>If the label is unreadable, measure diameter and length (see our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a>) and compare with the sizes above.</li></ol>`,
  sources: [
    { t: 'Sundance Spas Norway — Filteroversikt alle modeller fra 1995 (filter overview by model, year and serial number, May 2026)', u: SDNO },
    { t: 'Leisure Time Inc. — Hot Tub Filter Fitment Guide (Sundance tables; fetched 2026-10-26)', u: LT },
    { t: 'Snow Valley Spas — 6473-165S MicroClean Ultra outer (size and model years)', u: 'https://snowvalleyspas.ca/products/6473-165s-sundance-880-2009-2023-and-980-2016-microclean-ultra-outer-core' },
    { t: 'The Sundance Spa Store — Filter cleaning and maintenance instructions (intervals by series)', u: 'https://www.thesundancespastore.com/filter-cleaning-maintenance-instructions/' },
    { t: 'Unicel 2026 Replacement Guide — Sundance cross-reference and spec tables', u: UNICEL },
    { t: 'Filbur Catalog & Reference Guide — Sundance section (FC-2760, FC-2769/2771/2772, FC-2770, FC-2780, FC-2791, FC-2810, FC-2812)', u: FILBUR },
    { t: 'Pleatco 2023 Catalog — Sundance cross-reference (PSD125-2000, PSD85-2002, PPS750, PSD125U, PSD75)', u: PLEATCO },
  ] };
export const pages2: Page[] = [jacuzzi, sundance];
