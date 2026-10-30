import type { Page } from './fitment';
/** Marquis and Dimension One model-year pages (published 2026-10-30).
 *  Marquis: series and years from Marquis's own Filter Finder (marquisspas.com), filter counts from Marquis owner's manuals,
 *  sizes from two Marquis parts dealers. Dimension One: models and years from Hot Tub Outpost's OEM listings, checked against
 *  SpaStore.com and D1's own owner's manuals (filter count, removal). Equivalents are from the Unicel 2026, Pleatco 2023 and
 *  Filbur catalogs. Where sources disagree the page shows both; nothing is estimated. */
export const FITMENT4_DATE = '2026-10-30';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const MQ = 'https://www.marquisspas.com/options-and-accessories/hot-tub-filters';
const MQD = 'https://www.marquisspas.com/documents/';
const HTO = (s: string) => `https://www.hottuboutpost.com/${s}/`;
const D1M = 'https://cdn.prod.website-files.com/64c7c5a50c05aa73147967fd/';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* ---------- Marquis ---------- */
const mqRows: string[][] = [
  ['Crown Series', '2021 and newer', '<strong>20690</strong>, threaded, 50 sq ft', '2021–2023 Crown manuals: two filter canisters on Summit, Epic, Euphoria, Resort and Destiny; one on Wish (1- and 2-pump) and Spirit'],
  ['Signature Series', '2000–2021', '<strong>20091</strong> (threaded, 50 sq ft) or <strong>20092</strong> (threaded, 35 sq ft)', '2021 Signature manual: two canisters on Show, Epic, Euphoria, Wish, Reward and Resort; one on Promise (1- and 2-pump) and Spirit'],
  ['Signature Series', '1997–1999', '<strong>20044</strong>, slip-on, 50 sq ft', '—'],
  ['Signature Series', 'Before 1997', '<strong>20045</strong>, slip-on, 35 sq ft', '—'],
  ['Vector21 (V65L, V77L, V84, V84L, V94, V94L)', '2016 and newer', '<strong>20092</strong>, threaded, 35 sq ft', '2021 V21 manual: one filter on the V77L; two on the V84, V84L and V94L (the V65L and V94 counts are in images we could not read)'],
  ['e-Series', '2010–2018', '<strong>20364</strong>, slip-on, 35 sq ft', '2017 e-Series manual: two canisters on the 750, 660 and 545; one on the 524, 435, 425 and 322'],
  ['e-Series', '2008–2010', '<strong>20342</strong>, slip-on, 25 sq ft', '—'],
  ['Elite: Woodstock, Vegas, Hollywood, Broadway, Monaco Elite', '2020 and newer', '<strong>20690</strong>, threaded, 50 sq ft', 'Elite manuals 2020–2026: one filter'],
  ['Elite: Nashville Elite', '2020 and newer', '<strong>20042</strong>, threaded, 35 sq ft', 'One filter (see the conflict below on its rating)'],
  ['Celebrity Series Elite models (Woodstock, Vegas, Hollywood, Broadway, Monaco Elite)', '2018–2019', '<strong>20690</strong>, threaded, 50 sq ft', '2018 Celebrity manual: one filter, 50 sq ft in Celebrity Elite'],
  ['Celebrity Series: Nashville Elite', '2018–2019', '<strong>20042</strong>, threaded, 35 sq ft', 'One filter'],
  ['Celebrity hot tubs', '2019 and newer', '<strong>20042</strong>, threaded, 35 sq ft', 'Celebrity manuals 2020–2026: one filter, 35 sq ft'],
  ['Celebrity hot tubs', '2012–2018', '<strong>20342</strong>, slip-on, 25 sq ft', 'One filter'],
];
const marquis: Page = { slug: 'marquis-filter-by-model-year', brandSlug: 'marquis-spas', brandName: 'Marquis', crumbBrand: 'Marquis Spas', date: FITMENT4_DATE,
  title: 'Marquis hot tub filter by series and year (Crown, Signature, Vector21, e-Series, Elite, Celebrity)',
  h1: 'Which filter does my Marquis hot tub take? Lookup by series and year',
  desc: 'Marquis Spas filter part numbers by series and model year from Marquis’s own filter finder: 20690, 20091, 20092, 20042, 20044, 20045, 20364 and 20342, with filters per spa from the owner’s manuals and Unicel, Pleatco and Filbur equivalents and sizes.',
  answer: 'Per Marquis’s own filter finder: <strong>Crown Series from 2021</strong> and the big <strong>Elite</strong> models (Woodstock, Vegas, Hollywood, Broadway, Monaco Elite) from 2020 take the threaded 50 sq ft <strong>20690</strong> (Unicel 5CH-512, 5-3/16" × 16"). <strong>Signature Series 2000–2021</strong> take threaded <strong>20091</strong> (50 sq ft) or <strong>20092</strong> (35 sq ft); <strong>Vector21</strong> takes 20092. <strong>Celebrity from 2019</strong> and the Nashville Elite take threaded <strong>20042</strong> (35 sq ft). Older slip-on filters: <strong>20044</strong> (Signature 1997–1999), <strong>20045</strong> (before 1997), <strong>20364</strong> (e-Series 2010–2018) and <strong>20342</strong> (e-Series 2008–2010, Celebrity 2012–2018). Many larger Signature, Crown and e-Series models hold two filters, so you may need a pair.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Equivalents and sizes are from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog, matched on the Marquis number. Unicel and Pleatco also list older Marquis numbers in the 370-xxxx series; they are shown in brackets. “None listed” means none of the three catalogs lists that Marquis number.',
  parts: [
    { oem: '20690 (370-0699)', what: 'Threaded filter with bar handle: Crown 2021+, Elite 2020+, Celebrity Series Elite models 2018–2019', unicel: 'Unicel 5CH-512 (5-3/16" × 16", 2" MPT). No Pleatco or Filbur entry', size: '50 sq ft', href: ['/marquis-spas/5ch-512/'], note: 'Two Marquis parts dealers give the same 5-3/16" × 16", handle, 2" MPT, 50 sq ft size; they describe it as used on Celebrity Elite and V150 models.' },
    { oem: '20091 (20041, 370-0237)', what: 'Threaded filter, Signature Series 2000–2021', unicel: 'Unicel 5CH-502 (5-3/16" × 12-1/2", 2" MPT); Pleatco PPM50SC-F2M; Filbur FC-0195', size: '50 sq ft', href: ['/marquis-spas/5ch-502/'] },
    { oem: '20092 / 20042 (370-0240, 370-0242, 370-0243, 370-0683, 370-0698)', what: 'Threaded filter: 20092 for Signature 2000–2021 and Vector21 2016+; 20042 for Celebrity 2019+ and Nashville Elite', unicel: 'Unicel 5CH-352 (5-3/16" × 12-1/2", 2" MPT); Pleatco PPM35SC-F2M; Filbur FC-0196', size: '35 sq ft', href: ['/marquis-spas/5ch-352/'], note: 'Unicel cross-references both 20042 and 20092 to the same 5CH-352.' },
    { oem: '20044 (370-0236)', what: 'Slip-on filter, closed top, Signature Series 1997–1999', unicel: 'Unicel C-5346 (5-3/16" × 14-1/8", 1-5/8" open bottom); Pleatco PPM50TC; Filbur FC-3638', size: '50 sq ft', href: ['/marquis-spas/c-5346/'], note: 'Filbur prints the second Marquis number as 370-217, not Unicel’s 370-0236.' },
    { oem: '20045 (370-0215)', what: 'Slip-on filter, closed top, Signature Series before 1997', unicel: 'Unicel C-5423 (5-3/16" × 11-15/16", 1-5/8" open bottom); Pleatco PPM35TC; Filbur FC-3623', size: '35 sq ft (Marquis); Unicel rates its replacement 34 and says the original was 25', href: ['/marquis-spas/c-5423/'] },
    { oem: '20364', what: 'Slip-on filter, e-Series 2010–2018 (dealer: 5" × 13-1/4", 2-1/8" hole top and bottom, Microban)', unicel: 'None listed', size: '35 sq ft (Marquis and dealer)' },
    { oem: '20342', what: 'Slip-on filter, e-Series 2008–2010 and Celebrity 2012–2018 (dealer: 5" × 6-5/8", 2-1/8" holes)', unicel: 'None listed. Same outside size as Pleatco PRB25SF and Unicel C-4405, but neither catalog lists it for Marquis', size: '25 sq ft (Marquis and dealer)' },
    { oem: '20043 (370-0216)', what: 'Closed-top slip-on filter that Unicel lists as “Pacific Marquis (new)”. Not in Marquis’s current finder', unicel: 'Unicel C-5434 (5-3/16" × 19-5/8"); Pleatco PPM60TC; Filbur FC-3634', size: '60 sq ft (Unicel says the original was 40)', href: ['/marquis-spas/c-5434/'] },
    { oem: '20499 (370-0694)', what: 'Long threaded antimicrobial filter. Listed only by Unicel; not in Marquis’s current finder and no source we found names the models', unicel: 'Unicel 5CH-902AM (5-3/16" × 30", 2" MPT)', size: '90 sq ft (Unicel)', href: ['/marquis-spas/5ch-902am/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your series and year</h2>
<p>Marquis sorts its filters by series and build year, and its own filter finder is the source for every row below. The last column adds what Marquis’s owner’s manuals say about how many filters each model holds: when a model has two canisters, buy two cartridges. A Signature spa from 2000–2021 can take either the 50 or the 35 sq ft threaded filter; the finder does not say which models take which, so read the part number or measure the length (12-1/2" for both, so check the label).</p>
${tbl(['Series', 'Model years', 'Filter (Marquis part)', 'Filters per spa (owner’s manuals)'], mqRows)}
<h2>Threaded or slip-on: how to tell</h2>
<p>Marquis’s finder splits filters into two families. A <strong>threaded</strong> filter has a handle on top and screws into the canister; Marquis’s 2026 Celebrity manual says to turn the raised bar counter-clockwise to remove it. A <strong>slip-on</strong> filter has no thread and pushes onto a standpipe. Every Marquis filter from 2019 on in the finder is threaded; the slip-on parts (20044, 20045, 20364, 20342) are for older spas.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>Crown filter size.</strong> The finder lists the 50 sq ft 20690 for Crown 2021 and newer, and the 2021–2023 Crown manuals show two filter canisters on most models. Marquis’s 2026 Crown owner’s manual instead says the spa “features one filter, 35 sq ft cartridge”. If you have a 2026 Crown, check the label on the installed cartridge before ordering.</li>
<li><strong>Which models take 20690.</strong> The finder ties it to Crown, Elite and the 2018–2019 Celebrity Elite models. Two dealers describe it only as the filter for Celebrity Elite and V150 models.</li>
<li><strong>Nashville Elite rating.</strong> The finder gives the Nashville Elite the 35 sq ft 20042, while the 2020–2026 Elite manuals say the Elite filter is 50 sq ft without singling out the Nashville.</li>
<li><strong>Celebrity 2018.</strong> The finder lists the 25 sq ft slip-on 20342 for Celebrity hot tubs 2012–2018 and the 35 sq ft 20042 from 2019. The 2018 Celebrity manual already says “one filter, 35 sq ft in Celebrity”. One dealer listing for 20342 says Celebrity 2012–2018 in one place and 2010–2018 in another.</li>
<li><strong>Signature 2000 and later.</strong> Marquis’s 2001 and 2002 owner’s manuals say all 2000-and-later spas use #5040, a 50 sq ft T-handle cartridge; the current finder splits the same years between 20091 (50) and 20092 (35).</li>
<li><strong>20045 rating.</strong> Marquis calls 20045 a 35 sq ft filter. Unicel says the original was 25 sq ft (115 pleats) and rates its C-5423 replacement at 34.</li>
<li><strong>Second number for 20044.</strong> Unicel lists 370-0236; Filbur prints 370-217 for the same 5-3/16" × 14-1/8" closed-top size.</li>
</ul>
<h2>Known limits</h2>
<ul><li>None of the three catalogs lists 20364 or 20342, so no aftermarket equivalent is given for them. Their sizes come from dealer listings only.</li>
<li>Marquis’s finder does not cover 20043 or 20499, and no source we found gives the models or years for either.</li>
<li>The finder gives no dimensions; sizes in the parts table come from the catalogs and dealers.</li>
<li>Filter counts per model come from the spec tables in the 2017, 2021 and 2022 manuals. The 2026 manuals show these tables as images we could not read.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the number on the old cartridge’s label or end cap and <a href="/">search it here</a>.</li><li>No number? Measure the length and check for a thread. Threaded 5-3/16" cartridges are 12-1/2" (20091, 20092 or 20042) or 16" (20690); our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how to measure.</li><li>Marquis’s owner’s manuals recommend cleaning the filter monthly; see <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Marquis Spas — Hot tub filters: Filter Finder (series, model years, slip-on or threaded, sq ft, part numbers; fetched 2026-10-30)', u: MQ },
    { t: 'Marquis Spas — 2026 Crown owner’s manual (“one filter, 35 sq ft cartridge”)', u: 'https://www.marquisspas.com/media/177637/2026-crown-owners-manual.pdf' },
    { t: 'Marquis Spas — 2022 Crown owner’s manual (filter canisters per model)', u: MQD + '2022/2022_Crown%20OwnersManual_3.23.2022.pdf' },
    { t: 'Marquis Spas — 2021 Crown owner’s manual (filter canisters per model)', u: MQD + '2021/2021_Crown%20Owners%20Manual_5.17.21.pdf' },
    { t: 'Marquis Spas — 2021 Signature owner’s manual (filter canisters per model)', u: MQD + '2021/2021_Signature%20OwnersManual_3.30.2021_web.pdf' },
    { t: 'Marquis Spas — 2021 Vector21 owner’s manual (Vortex filters per model)', u: MQD + '2021/2021_V21_OwnersManual_6.16.2021web.pdf' },
    { t: 'Marquis Spas — 2017 e-Series owner’s manual (filter canisters per model)', u: MQD + '2017/2017_eSeriesOwnersManual.pdf' },
    { t: 'Marquis Spas — 2026 Elite owner’s manual (one filter, 50 sq ft)', u: 'https://www.marquisspas.com/media/177635/2026-elite-owners-manual.pdf' },
    { t: 'Marquis Spas — 2026 Celebrity owner’s manual (one filter, 35 sq ft; removal)', u: 'https://www.marquisspas.com/media/177639/2026-celebrity-owners-manual.pdf' },
    { t: 'Marquis Spas — 2018 Celebrity owner’s manual (35 sq ft Celebrity, 50 sq ft Celebrity Elite)', u: MQD + '2018/OM/18%20Celebrity%20Owners%20Manual%207.5.18.pdf' },
    { t: 'Marquis Spas — 2001 owner’s manual (#5040 50 sq ft cartridge for 2000 and later)', u: MQD + '2001/2001_OM.pdf' },
    { t: 'Canada Hot Tub Parts — Marquis filter 20690 (size, fitting, models)', u: 'https://canadahottubparts.ca/marquis-spa-filter-20690/' },
    { t: 'Hot Spring Supply — Marquis Crown Collection 2021 threaded 50 sq ft filter 20690', u: 'https://hotspringsupply.com/products/marquis-crown-collection-2021-threaded-50-sq-ft-filter' },
    { t: 'Canada Hot Tub Parts — Marquis filter 20364 (size, e-Series 2010+)', u: 'https://canadahottubparts.ca/marquis-spa-filter-20364/' },
    { t: 'Pool and Hot Tub Depot — Marquis filter 20342 (size, e-Series and Celebrity years)', u: 'https://poolandhottubdepot.com/products/marquis-spa-filter-20342-for-e-series-2008-2010-celebrity-2010-2018' },
    { t: 'Unicel 2026 Replacement Guide — Marquis Spas cross-reference (printed p. 40) and spec tables', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — PPM35SC-F2M, PPM50SC-F2M, PPM50TC, PPM35TC, PPM60TC, PRB25SF', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — Marquis Spas section (FC-0195, FC-0196, FC-3623, FC-3634, FC-3638)', u: FILBUR },
  ] };

/* ---------- Dimension One ---------- */
const d1Rows: string[][] = [
  ['Legend, Californian, Ambassador, Chancellor', '1991', '<strong>1561-05</strong>'],
  ['SRX, Impulse, Duet', '1991 and 1993', '<strong>1561-14</strong>'],
  ['El Nino', '1991', '<strong>1561-04</strong>'],
  ['Californian, Challenger, Legend 1500 Series', '1992', '<strong>1561-05</strong>'],
  ['Platinum Series', '1992–1994', '<strong>1561-02</strong>'],
  ['Arena', '1993', '<strong>1561-05</strong>'],
  ['Californian SL', '1993–1994', '<strong>1561-02</strong>'],
  ['Elite SL', '1993', '<strong>1561-02</strong>'],
  ['Seville SL, Ultra Series, Legend Series', '1994', '<strong>1561-02</strong>'],
  ['Arena, Diamante', '1994', '<strong>1561-03</strong> or <strong>1561-10</strong> (the retailer lists both; see below)'],
  ['Quadra', '1994', '<strong>1561-03</strong>'],
  ['Little Dipper', '1994–1995', '<strong>1561-14</strong>'],
  ['Platinum Series', '1995', '<strong>1561-10</strong>'],
  ['Legend', '1996', '<strong>1561-14</strong>'],
  ['Little Dipper', '1996–1998', '<strong>1561-04</strong>'],
  ['Madrid, Barcelona', '1996–2000', '<strong>1561-12</strong>'],
  ['@Home hot tubs', '2000', '<strong>1561-12</strong> (all 2000 models), or 1561-00 (“2000 and newer”); see below'],
  ['All D1 spas: Reflections Collection, Bay Collection, @Home, AquaFit swim spa', '2000 to current', '<strong>1561-00</strong> (01561-00-A), the EZ twist-lock filter'],
  ['Spas with the Crystal Pure water management system', 'Years not given', '<strong>1561-09</strong> (ozone cartridge)'],
  ['Retro-fit Vision, Seville', 'Years not given', '<strong>1561-11</strong>'],
];
const d1: Page = { slug: 'dimension-one-filter-by-model-year', brandSlug: 'dimension-one-spas', brandName: 'Dimension One', crumbBrand: 'Dimension One Spas', date: FITMENT4_DATE,
  title: 'Dimension One (D1) hot tub filter by model and year (1991 to now)',
  h1: 'Which filter does my Dimension One hot tub take? Lookup by model and year',
  desc: 'Dimension One Spas filter part numbers by model and year: 1561-00 EZ twist-lock for 2000 to current, and 1561-02, 1561-03, 1561-04, 1561-05, 1561-10, 1561-12 and 1561-14 for 1991–2000 models, with Unicel, Pleatco and Filbur equivalents and sizes.',
  answer: 'If your D1 was built <strong>from 2000 on</strong> (Reflections, Bay, @Home, AquaFit), it takes the <strong>1561-00</strong> (sold as 01561-00-A): a 75 sq ft, 7-1/8" × 10-1/2" cartridge with a closed castle top and an EZ twist-lock bottom. Aftermarket: <strong>Unicel C-7367, Pleatco PDO75-2000, Filbur FC-3059</strong>. Reflections and Bay spas hold <strong>two</strong> filters; @Home spas hold one. Older D1 spas used threaded cartridges that changed almost every year: for example <strong>1561-12</strong> for 1996–2000 Madrid and Barcelona, <strong>1561-02</strong> for 1992–1994 Platinum Series and <strong>1561-05</strong> for many 1991–1993 models. Use the table below.',
  aftHead: 'Aftermarket equivalents (catalogs)',
  partsNote: 'Equivalents and sizes are from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog, matched on the D1 number. Several older Pleatco numbers are now on Pleatco’s own deactivated list; the table says so. Retailer sizes that differ from the catalogs are noted.',
  parts: [
    { oem: '1561-00 (01561-00-A)', what: 'EZ twist-lock cartridge, closed castle top, 2" open bottom; D1 spas from 2000 on, @Home 2000 and newer. Fits filter screen 01510-501', unicel: 'Unicel C-7367 (7-1/8" × 10-1/2"); Pleatco PDO75-2000; Filbur FC-3059', size: '75 sq ft', href: ['/dimension-one-spas/c-7367/'], note: 'Pleatco prints 7-1/4" × 10-5/8".' },
    { oem: '1561-12', what: 'Handle top, 1-1/2" SAE coarse thread; 1996–2000 Madrid and Barcelona, 2000 @Home', unicel: 'Unicel 7CH-975 (7" × 10-1/2"); Filbur FC-0475. Pleatco PDO75P3 is on Pleatco’s deactivated list with no replacement', size: '75 sq ft', href: ['/dimension-one-spas/7ch-975/'], note: 'Hot Tub Outpost gives 7" × 10-5/8".' },
    { oem: '1561-02', what: 'Handle top, 2" MPT fine thread; 1992–1994 Platinum and other 1993–1994 SL, Ultra and Legend models', unicel: 'Unicel 7CH-752 (7" × 14-3/4"); Filbur FC-0470. Pleatco PTL75XW-F2M is deactivated with no replacement', size: '75 sq ft', href: ['/dimension-one-spas/7ch-752/'] },
    { oem: '1561-10', what: 'Handle top, 2" MPT fine thread; 1995 Platinum Series, 1994 Arena and Diamante', unicel: 'Unicel 7CH-552 (7" × 10-1/2"). Retailers name Pleatco PTL55XW-F2M (deactivated) and Filbur FC-0465 (not in the Filbur catalog)', size: '52 sq ft (Unicel spec table and two retailers); Unicel’s D1 cross-reference prints 75', href: ['/dimension-one-spas/7ch-552/'] },
    { oem: '1561-05', what: 'Handle top, 1-1/2" MPT fine thread; 1991–1993 models', unicel: 'Unicel 4CH-50 (4-5/8" × 14-3/4"); Pleatco PTL50P-4; Filbur FC-0151', size: '50 sq ft', href: ['/dimension-one-spas/4ch-50/'], note: 'Hot Tub Outpost gives a 4-3/4" diameter.' },
    { oem: '1561-14', what: 'Handle top, 1-1/2" MPT fine thread; 1991 and 1993 SRX, Impulse and Duet, 1994–1995 Little Dipper, 1996 Legend', unicel: 'Unicel 4CH-30 (4-5/8" × 11-7/8"); Pleatco PTL25P-4; Filbur FC-0141', size: '25 sq ft (Unicel cross-reference, Filbur); 30 in Unicel’s spec table', href: ['/dimension-one-spas/4ch-30/'] },
    { oem: '1561-04', what: 'Handle top, 1-1/4" SAE coarse thread; 1996–1998 Little Dipper, 1991 El Nino (also Saratoga Spas)', unicel: 'Unicel 4CH-950 (4-5/8" × 12"); Pleatco PDO-UF25P2; Filbur FC-0173', size: '25 sq ft', href: ['/dimension-one-spas/4ch-950/'] },
    { oem: '1561-13', what: 'Handle top, 1-1/4" SAE coarse thread. No source we found names the models', unicel: 'Unicel 4CH-940 (4-5/8" × 15"); Pleatco PDO-UF40P2; Filbur FC-0177', size: '40 sq ft', href: ['/dimension-one-spas/4ch-940/'] },
    { oem: '1561-06 / 1561-07', what: 'Long handle-top cartridge, 1-1/2" MPT. No source we found names the models', unicel: 'Unicel 4CH-65 (4-5/8" × 19-5/8"; Unicel says the original was 23-3/4" overall). Retailers also name Pleatco PTL65H-P4 and Filbur FC-0171, which neither catalog lists', size: '65 sq ft (1561-06) / 80 sq ft (1561-07)', href: ['/dimension-one-spas/4ch-65/'] },
    { oem: '1561-03', what: 'Open both ends (2-1/8"); 1994 Arena, Diamante and Quadra. Discontinued by Dimension One', unicel: 'Unicel C-4340 (4-15/16" × 11-5/8"); Pleatco PMT40; Filbur FC-3081', size: '40 sq ft', href: ['/dimension-one-spas/c-4340/'] },
    { oem: '1561-09', what: 'Ozone cartridge, 12 concentric holes in the top, 2-7/8" open bottom; spas with Crystal Pure water management', unicel: 'Unicel C-5404 (5-1/2" × 17"); Pleatco PDO40-4; Filbur FC-3097', size: '40 sq ft', href: ['/dimension-one-spas/c-5404/'] },
    { oem: '1561-11', what: 'Ozone-style cartridge, 5-1/2" × 11-7/8" (retailer); Retro-fit Vision and Seville only', unicel: 'Unicel C-5402 (discontinued by Unicel, listed without an OEM number). The retailer also names Filbur FC-3096 and Pleatco PDO25-4', size: '25 sq ft (Unicel)' },
    { oem: 'No OEM number (SpaBerry)', what: 'Short twist-lock cartridge, closed top with Y stand-offs', unicel: 'Unicel C-7335 (7-1/8" × 5-7/8"); Filbur FC-3058', size: '35 sq ft', href: ['/dimension-one-spas/c-7335/'], note: 'Filbur prints the length as 5-1/8" and names it “SpaBerry 25” in one table and “Spa Berry 35” in another.' },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Find your model and year</h2>
<p>Dimension One does not publish a filter-by-year chart, and its current owner’s manuals do not print part numbers. The model and year rows below come from Hot Tub Outpost’s product listings for each D1 factory part, checked against SpaStore.com’s D1 listings and the Unicel and Filbur catalogs. For pre-2000 spas these are the least certain part of this page; the number on your old cartridge wins.</p>
${tbl(['Model', 'Model years', 'Filter (D1 part)'], d1Rows)}
<h2>How many filters, and how they come out</h2>
<p>D1’s own owner’s manuals (2017, 2022 and 2025 editions) say Reflections Collection and Bay Collection spas have <strong>two filters</strong>: one under the skimmer basket and one under a twist-off lid (the UltraPure filter on Bay models). Each one comes out by twisting it a quarter turn counter-clockwise and lifting it out of its canister, which is the EZ twist-lock bottom of the 1561-00. The @Home manuals describe a single filter cartridge under the skimmer basket. The AquaFit swim spa manual says it has two filters, or three in the AquaFit Plus. All of these manuals recommend cleaning the filters monthly.</p>
<h2>Where the sources disagree</h2>
<ul>
<li><strong>1994 Arena and Diamante.</strong> Hot Tub Outpost lists these models under both 1561-03 (open-ended, 4-7/8" × 11-5/8") and 1561-10 (threaded, 7" × 10-1/2"). The two look nothing alike, so check which style is in your spa.</li>
<li><strong>2000 @Home.</strong> The retailer says all 2000 model-year @Home tubs used 1561-12, but also says the 1561-00 fits @Home spas from 2000 on. Unicel and Filbur say the 1561-00 is for models dated after 2000. A 2000 tub could have either; look at the bottom of the old cartridge (thread or twist-lock).</li>
<li><strong>1561-10 rating.</strong> Unicel’s D1 cross-reference rates 1561-10 / 7CH-552 at 75 sq ft; Unicel’s own spec table, Hot Tub Outpost and SpaStore all say 52 sq ft.</li>
<li><strong>1561-00 size.</strong> Unicel, Filbur and both retailers give 7-1/8" × 10-1/2"; Pleatco prints 7-1/4" × 10-5/8" for PDO75-2000.</li>
<li><strong>Small size differences on older parts.</strong> Hot Tub Outpost gives 4-3/4" for 1561-14 and 1561-05 (Unicel and Filbur: 4-5/8") and 10-5/8" for 1561-12 (Unicel and Filbur: 10-1/2").</li>
<li><strong>Retired Pleatco numbers.</strong> Retailers still cross 1561-12, 1561-02 and 1561-10 to Pleatco PDO75P3, PTL75XW-F2M and PTL55XW-F2M, but Pleatco’s 2023 catalog lists all three as deactivated with no replacement. Use the Unicel or Filbur part instead.</li>
</ul>
<h2>Known limits</h2>
<ul><li>No source we found gives models or years for 1561-13, 1561-06 or 1561-07, or years for the Crystal Pure (1561-09) and Vision retrofit (1561-11) cartridges.</li>
<li>The pre-2000 model and year list comes from one retailer’s listings and could not be checked against a D1 document.</li>
<li>The SpaBerry cartridge (C-7335) has no D1 part number in any source.</li></ul>
<h2>How to confirm yours</h2>
<ol><li>Read the number on the old cartridge’s end cap and <a href="/">search it here</a>.</li><li>No number? A twist-lock bottom with prongs on top means the 1561-00. Otherwise measure the diameter and length and note the thread (our <a href="/guides/how-to-find-your-spa-filter-size/">filter-size guide</a> shows how): 7" threaded cartridges are 1561-12 (10-1/2", SAE thread), 1561-10 (10-1/2", MPT) or 1561-02 (14-3/4").</li><li>See <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean a hot tub filter</a>.</li></ol>`,
  sources: [
    { t: 'Hot Tub Outpost — Dimension One filters category and OEM listings 01561-00, -02, -03, -04, -05, -10, -11, -12, -13, -14 and D1561-09 (models, years, sizes; fetched 2026-10-30)', u: HTO('dimension-one-filters') },
    { t: 'Hot Tub Outpost — Dimension One 75 sq ft filter 01561-12 (1996–2000 Madrid and Barcelona, 2000 @Home)', u: HTO('dimension-one-75-square-foot-spa-filter-01561-12') },
    { t: 'Hot Tub Outpost — Dimension One 75 sq ft filter 01561-00 (2000 to current, @Home 2000 and newer)', u: HTO('dimension-one-75-square-foot-spa-filter-01561-00') },
    { t: 'Hot Tub Outpost — Dimension One 52 sq ft filter 01561-10 (1995 Platinum, 1994 Arena and Diamante)', u: HTO('dimension-one-52-square-foot-spa-filter-01561-10') },
    { t: 'Hot Tub Outpost — Dimension One 75 sq ft filter 01561-02 (1992–1994 models)', u: HTO('dimension-one-75-square-foot-spa-filter-01561-02') },
    { t: 'SpaStore.com — Dimension One filters (OEM to Unicel, Pleatco and Filbur, sizes)', u: 'https://www.spastore.com/dimension-one-spas-d1/' },
    { t: 'SpaStore.com — D1 1561-10 / 7CH-552 listing (52 sq ft, 7" × 10-1/2", 2" MPT)', u: 'https://www.spastore.com/spa-filter-baleen-ak-9026-oem-1561-10-pleatco-ptl55xw-f2m-unicel-7ch-552-filbur-fc-0465/' },
    { t: 'Dimension One Spas — Owner’s manuals page', u: 'https://www.d1spas.com/manuals' },
    { t: 'Dimension One Spas — Bay Collection owner’s manual, 2022 (two filters, quarter-turn removal)', u: D1M + '6515fb5a39544d1ead52ddd3_Bay-2022-6530-538H-Rev-C-web-L.pdf' },
    { t: 'Dimension One Spas — Reflections Collection owner’s manual, 2017 (two filters)', u: D1M + '6515e15aca8b27fa34b11070_Reflections-2017-English_May1st.pdf' },
    { t: 'Dimension One Spas — @Home owner’s manual, 2022 (single filter cartridge)', u: D1M + '6515fb6a117825516fee99fc_At-Home-2022-6530-437H-EN-Rev-C-web-L.pdf' },
    { t: 'Dimension One Spas — AquaFit owner’s manual (two filters, three in AquaFit Plus)', u: D1M + '651cc6f70fcc453d1a8cad77_AquaFit-Owner-Manual-2014-Doc-1536-Rev-G.pdf' },
    { t: 'Unicel 2026 Replacement Guide — Dimension One Spas cross-reference (printed pp. 29–30) and spec tables', u: UNICEL },
    { t: 'Pleatco 2023 Catalog — PDO75-2000 spec table; deactivated part numbers (PDO75P3, PTL75XW-F2M, PTL55XW-F2M)', u: PLEATCO },
    { t: 'Filbur Catalog & Reference Guide — Dimension One Spas section', u: FILBUR },
  ] };

export const pages4: Page[] = [marquis, d1];
