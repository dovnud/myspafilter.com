import type { Page } from './fitment';
/** Coleman Spas and Maax Spas of AZ lookups (published 2026-11-08).
 *  Part numbers, sizes and the 2001/2002 number-format note are from Unicel 2026.
 *  Filbur’s Coleman Spas section and Pleatco’s 2023 spec tables, cross-reference and deactivated list
 *  are the other two catalogs. Unicel names Coleman models nowhere. Maax of AZ names three models on one
 *  cartridge and “Elite Spas” on another, and a second Unicel heading rates that Elite cartridge at 50 sq ft.
 *  Where a page disagrees, both figures are shown. Nothing is estimated. */
export const FITMENT10_DATE = '2026-11-08';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const coleman: Page = {
  slug: 'coleman-spas-filter-by-model-year', brandSlug: 'coleman-spas', brandName: 'Coleman Spas', crumbBrand: 'Coleman Spas', date: FITMENT10_DATE,
  title: 'Coleman spa filter by part number (3301 through 2001, 100xxx since 2002)',
  h1: 'Which filter does my Coleman spa take?',
  desc: 'Coleman filter numbers from Unicel’s 2026 guide: 3301-xxxx through 2001 and 100xxx since 2002, the 1-1/2 inch versus 2 inch MPT pairs, and where Pleatco and Filbur disagree on the short 2 inch cartridge.',
  answer: 'Unicel does not name a Coleman model. It names the <strong>part number</strong>, and it says the <strong>3301-xxxx</strong> format was used through 2001 and the <strong>100xxx</strong> format since 2002. Three lengths come in a pair that is the same body with a different bottom thread. The 7" × 8" pair is <strong>100432 / 3301-1018</strong> (1-1/2" MPT, 7CH-32) or <strong>100520 / 3301-2109</strong> (2" MPT, 7CH-322). The 7" × 9-3/4" pair is <strong>100433 / 3301-1019</strong> (7CH-40) or <strong>100521 / 3301-2110</strong> (7CH-402). The 7" × 14-3/4" pair is <strong>100434 / 3301-1020</strong> (7CH-50) or <strong>100522 / 3301-2111</strong> (7CH-502). Measuring the cartridge body does not tell those pairs apart. The thread does. The short 2" cartridge is also the one the catalogs do not agree on: Unicel’s spec table and Filbur print <strong>32 sq ft</strong> at 7" × 8", and Pleatco prints <strong>35 sq ft</strong> at 7-1/8" × 7-9/16" for the same OEM numbers.',
  aftHead: 'Catalog equivalents',
  partsNote: 'The 3301 number and the 100xxx number on one row are both printed by Unicel for that cartridge. Filbur’s Coleman section prints the 100xxx number and not the 3301 number. Pleatco’s own spec table prints a Coleman OEM only for 100520 / 3301-2109, 100586, 100533, 100593 / 3301-2261 and 100594 / 3301-2262. The other Pleatco strings in this table are the ones Filbur prints, and Pleatco’s 2023 deactivated list sends them to N/A. They are not stored as live Pleatco equivalents on the cartridge pages.',
  parts: [
    { oem: 'FIL11100303', what: '25 sq ft top-load. Unicel’s Coleman note: the original is 4-3/4" OD. No 3301 twin on this row. The same OEM is also on Unicel’s Cal Spas line.', unicel: 'Unicel 4CH-252. Pleatco cross-reference: PMA20-F2M. Not in Filbur’s Coleman section.', size: 'Unicel spec: 4-5/8" × 8", cone handle, 2" MPT, 213 pleats, 25 sq ft', href: ['/coleman-spas/4ch-252/', '/cal-spas/4ch-252/'] },
    { oem: '100432 (3301-1018 through 2001)', what: '32 sq ft, 1-1/2" MPT. The short half of the first thread pair.', unicel: 'Unicel 7CH-32. Filbur FC-0425. Filbur’s Pleatco cell: PCS32P, which Pleatco’s deactivated list does not keep.', size: '7" × 8", handle, 175 pleats, 32 sq ft in Unicel’s spec and in Filbur’s Coleman section', href: ['/coleman-spas/7ch-32/'] },
    { oem: '100520 (3301-2109 through 2001)', what: 'The 2" MPT twin of 100432. This is the cartridge Pleatco sizes differently.', unicel: 'Unicel 7CH-322. Pleatco PAS35-F2M. Filbur FC-0420 (Pleatco cell PAS35-2).', size: 'Unicel and Filbur: 7" × 8", 32 sq ft. Pleatco: 7-1/8" × 7-9/16", 35 sq ft. Unicel’s Artesian line also prints 35 sq ft for 7CH-322.', href: ['/coleman-spas/7ch-322/', '/master-spas/7ch-322/'] },
    { oem: '100433 (3301-1019 through 2001)', what: '40 sq ft, 1-1/2" MPT. Unicel’s spec line also names Vita Spas.', unicel: 'Unicel 7CH-40. Filbur FC-0435. Filbur’s Pleatco cell: PCS40P.', size: '7" × 9-3/4", 178 pleats, 40 sq ft', href: ['/coleman-spas/7ch-40/'] },
    { oem: '100521 (3301-2110 through 2001)', what: '40 sq ft, 2" MPT. Same body as 100433.', unicel: 'Unicel 7CH-402. Filbur FC-0430. Filbur’s Pleatco cell: PCS40-F2M, which Pleatco deactivates with replacement N/A.', size: '7" × 9-3/4", 178 pleats, 40 sq ft', href: ['/coleman-spas/7ch-402/'] },
    { oem: '100434 (3301-1020 through 2001)', what: '50 sq ft, 1-1/2" MPT. Unicel’s spec line also names Vita Spas.', unicel: 'Unicel 7CH-50. Filbur FC-0463. Filbur’s Pleatco cell: PVT50P.', size: '7" × 14-3/4", 144 pleats, 50 sq ft', href: ['/coleman-spas/7ch-50/'] },
    { oem: '100522 (3301-2111 through 2001)', what: '50 sq ft, 2" MPT. Same body as 100434.', unicel: 'Unicel 7CH-502. Filbur FC-0460. Filbur’s Pleatco cell: PCS50-F2M, deactivated by Pleatco with replacement N/A.', size: '7" × 14-3/4", 144 pleats, 50 sq ft', href: ['/coleman-spas/7ch-502/'] },
    { oem: '100586 (3301-2242 through 2001)', what: '25 sq ft open cartridge. Pleatco lists 100586 on PRB25-IN with several other brands’ numbers.', unicel: 'Unicel C-4326. Pleatco PRB25-IN. Filbur FC-2375.', size: '4-15/16" × 13-5/16", open 2-1/8", 25 sq ft', href: ['/coleman-spas/c-4326/'] },
    { oem: '100585 (3301-2241 through 2001)', what: '40 sq ft open cartridge. Filbur calls the row Waterway 40.', unicel: 'Unicel C-4339. Filbur FC-2915. Filbur’s Pleatco cell PWW40 is on Pleatco’s deactivated list as N/A.', size: '4-15/16" × 11-1/4", open 2-1/8", 216 pleats, 40 sq ft', href: ['/coleman-spas/c-4339/'] },
    { oem: '100533 (3301-2145 through 2001)', what: '50 sq ft open cartridge. The same OEM is on Unicel’s Maax Spas of AZ list, with no model name there either.', unicel: 'Unicel C-4950. Pleatco PRB50-IN. Filbur FC-2390.', size: '4-15/16" × 13-5/16", open 2-1/8", 50 sq ft', href: ['/coleman-spas/c-4950/', '/maax-spas/c-4950/'] },
    { oem: '100593 (3301-2261 through 2001)', what: '50 sq ft, 2" male slip. Unicel’s note under the row: model dated after 1992. Maax lists the same OEM.', unicel: 'Unicel C-8450. Pleatco PCS50N. Filbur FC-3310.', size: '8" × 9". Opening 2-1/16" (Unicel, Filbur) or 2-1/8" (Pleatco). 50 sq ft.', href: ['/coleman-spas/c-8450/', '/maax-spas/c-8450/'] },
    { oem: '100594 (3301-2262 through 2001)', what: '75 sq ft, 2" male slip. Same after-1992 note. Maax lists the same OEM.', unicel: 'Unicel C-8475. Pleatco PCS75N. Filbur FC-3320.', size: '8" × 13". Opening 2-1/16" (Unicel, Filbur) or 2-1/8" (Pleatco). 75 sq ft.', href: ['/coleman-spas/c-8475/', '/maax-spas/c-8475/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>The three thread pairs</h2>
<p>Unicel’s Coleman block opens with one note and no model names: “3301-xxxx part number format used thru 2001; 100xxx part number used since 2002.” Each of the next six rows prints both numbers. Filbur’s Coleman Spas section prints the 100xxx number, the Unicel number and a Pleatco cell, and it does not print the 3301 number.</p>
${tbl(
  ['Length', '1-1/2" MPT', '2" MPT', 'What agrees'],
  [
    ['7" × 8", 175 pleats', '100432 / 3301-1018 = 7CH-32. Filbur FC-0425, cell PCS32P.', '100520 / 3301-2109 = 7CH-322. Filbur FC-0420, cell PAS35-2. Pleatco’s own number is PAS35-F2M.', 'Unicel spec and Filbur’s Coleman section: 32 sq ft. Pleatco’s spec for 100520 and 3301-2109: 7-1/8" × 7-9/16", 35 sq ft. Unicel’s Artesian line also prints 7CH-322 at 35 sq ft, and adds “Original is 7-7/8" OD and 7-5/8" overall length.”'],
    ['7" × 9-3/4", 178 pleats', '100433 / 3301-1019 = 7CH-40. Filbur FC-0435, cell PCS40P. Spec line also names Vita.', '100521 / 3301-2110 = 7CH-402. Filbur FC-0430, cell PCS40-F2M.', '40 sq ft in Unicel and in Filbur. Pleatco’s 2023 cross-reference has no 7CH-40 or 7CH-402 line. PCS40-F2M is on the deactivated list with replacement N/A.'],
    ['7" × 14-3/4", 144 pleats', '100434 / 3301-1020 = 7CH-50. Filbur FC-0463, cell PVT50P. Spec line also names Vita.', '100522 / 3301-2111 = 7CH-502. Filbur FC-0460, cell PCS50-F2M.', '50 sq ft in Unicel and in Filbur. Pleatco’s cross-reference has no 7CH-50 or 7CH-502 line. PVT50P4 and PCS50-F2M are deactivated with replacement N/A.'],
  ],
)}
<p>A 1-1/2" MPT bottom and a 2" MPT bottom do not interchange. <a href="/guides/open-end-vs-threaded-hot-tub-filters/">Open-end versus threaded</a> is the fitting check, and the measuring order is in <a href="/guides/how-to-find-your-spa-filter-size/">how to find your spa filter size</a>. Unicel’s discontinued-cartridge notes use the same split elsewhere: C-7432 is replaced by 7CH-32 if the pad adapter is 1-1/2" MPT and by 7CH-322 if it is 2" MPT, and the adapter has to come out of the skim well. That note is about the old open cartridge, not a Coleman model.</p>
<p>Filbur is not perfectly consistent about 7CH-32. The Coleman section and the dimensional listing print FC-0425 at 32 sq ft. A Water’s Edge Spas row prints the same FC-0425 / PCS32P / 7CH-32 at <strong>35 sq ft</strong>. Coleman’s own row is the 32.</p>
<p>Pleatco’s deactivated list sends “PCS32-2 (W/ 2")” to PAS35-F2M. That is the old name with a 2" adapter, not a second live cartridge. Filbur still prints PAS35-2 in the cell for FC-0420. The live Pleatco number for 100520 is PAS35-F2M.</p>

<h2>Open cartridges, and the slip pair dated after 1992</h2>
<p>Under the threaded pairs, Unicel prints four open or slip cartridges. None of them has a model name. Two of the OEM numbers, 100533 and 100593 / 100594, are repeated on the <a href="/fitment/maax-spas-filter-by-model-year/">Maax Spas of AZ</a> list. Unicel’s Maax heading says “see also Coleman Spas.”</p>
${tbl(
  ['OEM', 'Unicel', 'Filbur', 'Pleatco'],
  [
    ['100586 / 3301-2242', 'C-4326, 25 sq ft, 4-15/16" × 13-5/16"', 'FC-2375, PRB25-IN, 25 sq ft', 'PRB25-IN spec lists OEM 100586 among other brands, 5" × 13-5/16", open 2-1/8", 25 sq ft'],
    ['100585 / 3301-2241', 'C-4339, 40 sq ft, 4-15/16" × 11-1/4", 216 pleats, open 2-1/8"', 'FC-2915, OEM 100585, cell PWW40, described as Waterway 40', 'PWW40 is deactivated with replacement N/A. No Coleman OEM on a live Pleatco row.'],
    ['100533 / 3301-2145', 'C-4950, 50 sq ft, 4-15/16" × 13-5/16"', 'FC-2390, OEM 100533, cell printed PRB50-IN', 'PRB50-IN spec lists OEM 100533, 5" × 13-5/16", open 2-1/8", 50 sq ft'],
    ['100593 / 3301-2261, after 1992', 'C-8450, 8" × 9", 2-1/16" open, 2" male slip, 193 pleats, 50 sq ft', 'FC-3310, 2-1/16" open, male slip, PCS50N, 50 sq ft, “Model dated after 1992.”', 'PCS50N, 8" × 9", 2-1/8" open, 2" slip, 50 sq ft, OEM 100593 and 3301-2261'],
    ['100594 / 3301-2262, after 1992', 'C-8475, 8" × 13", 2-1/16" open, 2" male slip, 197 pleats, 75 sq ft', 'FC-3320, OEM 100594, PCS75N, 75 sq ft, same after-1992 note', 'PCS75N, 8" × 13", 2-1/8" open, 2" slip, 75 sq ft, OEM 100594 and 3301-2262'],
  ],
)}
<p>100586 and 100533 are the familiar 25 sq ft and 50 sq ft open bodies. Same length, two areas: that is the pleat-count split in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters have different square-foot ratings</a>. Pleatco prints both at 5" OD. Unicel and Filbur print 4-15/16". The slip pair is a different fitting. A 2" male slip is not a 2" MPT and not an open 2-1/8" end.</p>
<p>FIL11100303 sits above the pairs, on 4CH-252. Unicel’s Coleman note says the original cartridge is 4-3/4" OD. The spec table prints 4-5/8". The same OEM is on the Cal Spas line. Filbur’s Coleman section does not list it. Pleatco’s cross-reference sends 4CH-252 to PMA20-F2M and does not print FIL11100303 on that spec line.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>No Coleman model names.</strong> Unicel’s Coleman block is part numbers, a year-format note, and one “model dated after 1992” note on the slip cartridges. Filbur’s Coleman section is the same kind of list.</li>
<li><strong>100520 / 7CH-322 area and length.</strong> Unicel spec and Filbur: 7" × 8", 32 sq ft. Pleatco PAS35-F2M: 7-1/8" × 7-9/16", 35 sq ft, for OEM 100520 and 3301-2109. Unicel’s Artesian line: 35 sq ft, and an original size of 7-7/8" × 7-5/8".</li>
<li><strong>Pleatco’s name for that cartridge.</strong> Pleatco’s cross-reference and spec table: PAS35-F2M. Filbur’s cell: PAS35-2. Pleatco’s deactivated list sends the 2" PCS32-2 to PAS35-F2M.</li>
<li><strong>7CH-32 at 35 sq ft.</strong> That figure is on Filbur’s Water’s Edge row, not on the Coleman row. Coleman and the size table say 32.</li>
<li><strong>The other five threaded Pleatco cells.</strong> PCS32P, PCS40P, PCS40-F2M, PVT50P and PCS50-F2M are Filbur’s cells. Pleatco’s 2023 Unicel cross-reference does not list 7CH-32, 7CH-40, 7CH-402, 7CH-50 or 7CH-502. PCS40-F2M, PCS50-F2M and PVT50P4 are deactivated with replacement N/A.</li>
<li><strong>Slip opening.</strong> Unicel and Filbur 2-1/16". Pleatco PCS50N and PCS75N 2-1/8".</li>
<li><strong>Open-cartridge OD.</strong> Unicel and Filbur 4-15/16" for C-4326 and C-4950. Pleatco 5".</li>
<li><strong>3301 numbers.</strong> Unicel prints them. Filbur’s Coleman section does not.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>Read the number on the old cartridge. A 3301-xxxx number is the through-2001 format. A 100xxx number is the later format. Unicel pairs them; it does not say a 2002 spa can only use the new number.</li>
<li>If the body is 7" across, the length picks the pair (8", 9-3/4" or 14-3/4") and the thread picks the half. Do not order the other thread because the square feet match.</li>
<li>If the number is 100520 or 3301-2109, read both sizes: 7" × 8" at 32 sq ft, and 7-1/8" × 7-9/16" at 35 sq ft. Hold the new cartridge against the old one.</li>
<li>If the bottom is a slip fitting rather than a thread, you are on 100593 or 100594, and only if the spa is in the “after 1992” note Unicel prints under those rows.</li>
<li>A Maax model name (Elegant, Intrigue, Joli, Elite) is a different list: <a href="/fitment/maax-spas-filter-by-model-year/">Maax Spas of AZ</a>.</li>
</ol>`,
  sources: [
    { t: 'Unicel 2026 Replacement Guide, Coleman Spas OEM block, PDF p.32 (printed p.28): the 3301-xxxx / 100xxx note, FIL11100303, the six threaded pairs, 100586, 100585, 100533, and the after-1992 slip rows 100593 and 100594', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide, spec table: 7CH-32 and 7CH-322, PDF p.14 (printed p.10), both 7" × 8", 175 pleats, 32 sq ft; 7CH-40 and 7CH-402 on the same page, 178 pleats, 40 sq ft; 7CH-50 and 7CH-502, PDF p.15 (printed p.11), 144 pleats, 50 sq ft; C-8450 and C-8475, PDF p.20 (printed p.16)', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide, Artesian Spas block, PDF p.29 (printed p.25): 7CH-322 printed at 35 sq ft, with the note that the original is 7-7/8" OD and 7-5/8" overall length', u: UNICEL },
    { t: 'Filbur Catalog, Product by Pool/Spa Manufacturer, Coleman Spas, PDF pp.16–17: FC-2915 / 100585, FC-2375 / 100586, FC-2390 / 100533, FC-0420 / 100520, FC-0425 / 100432, FC-0435 / 100433, FC-0430 / 100521, FC-0463 / 100434, FC-0460 / 100522, FC-3310 / 100593, FC-3320 / 100594. The 3301 numbers are not in this section.', u: FILBUR },
    { t: 'Filbur Catalog, dimensional listing, PDF p.11: FC-0420 and FC-0425 at 32 sq ft. A Water’s Edge Spas row prints the same FC-0425 / 7CH-32 / PCS32P at 35 sq ft.', u: FILBUR },
    { t: 'Pleatco 2023 Catalog, spec table PDF p.34: PAS35-F2M, 7-1/8" × 7-9/16", 2" MPT, 35 sq ft, Artesian Top Load Spa (Coleman), OEM 100520 and 3301-2109. PDF p.35: PCS50N and PCS75N with OEM 100593 / 3301-2261 and 100594 / 3301-2262. PDF p.32: PRB25-IN lists OEM 100586; PRB50-IN lists OEM 100533.', u: PLEATCO },
    { t: 'Pleatco 2023 Catalog, Unicel cross-reference PDF p.47: 7CH-322 = PAS35-F2M and 4CH-252 = PMA20-F2M. No line for 7CH-32, 7CH-40, 7CH-402, 7CH-50 or 7CH-502. Deactivated list PDF pp.22–25: PCS40-F2M, PCS50-F2M, PVT50P4 and PWW40 go to N/A; PCS32-2 (W/ 2") goes to PAS35-F2M.', u: PLEATCO },
  ],
};

const maax: Page = {
  slug: 'maax-spas-filter-by-model-year', brandSlug: 'maax-spas', brandName: 'Maax Spas', crumbBrand: 'Maax Spas', date: FITMENT10_DATE,
  title: 'Maax Spas filter by model (Elegant, Intrigue, Joli, Elite)',
  h1: 'Which filter does my Maax spa take?',
  desc: 'Unicel’s Maax Spas of AZ list: Elegant, Intrigue and Joli take OEM 108868 (5CH-25). Elite takes OEM 104309 (5CH-35), which one Unicel heading rates at 35 sq ft and another at 50. Pleatco’s cross-reference and its Elite spec row are not the same cartridge.',
  answer: 'Unicel’s Maax Spas of AZ list names three models on one cartridge and one line on another. <strong>Elegant, Intrigue and Joli</strong> take OEM <strong>108868</strong>, Unicel <strong>5CH-25</strong>, 5-5/8" × 6", 1-1/2" MPT, 201 pleats, <strong>25 sq ft</strong>. Pleatco <strong>PMAX25P4</strong> lists that same OEM at <strong>5-3/4" × 6"</strong>, still 25 sq ft and still 1-1/2" MPT. No Filbur row for 108868 or 5CH-25 turned up in the Filbur catalog. <strong>Elite Spas</strong> take OEM <strong>104309</strong>, Unicel <strong>5CH-35</strong>. The spec table and this Maax line say <strong>35 sq ft</strong>, 5-5/8" × 8", 203 pleats, 1-1/2" MPT. A separate Unicel heading, “Elite Spas by Maax,” prints the same diameter, length and thread at <strong>50 sq ft</strong> and does not print 104309. Pleatco’s cross-reference sends 5CH-35 to <strong>PMAX50P4</strong>, a 50 sq ft cartridge it files as Maax Spas of Canada. Pleatco’s spec table also has <strong>PAS35P4</strong> for “Elite Spas (Coleman)” at 5-7/8" × 7-3/4" and 35 sq ft, with no OEM. Filbur <strong>FC-0300</strong> is 5-5/8" × 8", 35 sq ft, and its Pleatco cell is PAS35P.',
  aftHead: 'Catalog equivalents',
  partsNote: 'Model names are Unicel’s Maax Spas of AZ list, PDF p.44 (printed p.40). The four rows with no model name are on that same list. 100533, 100593 and 100594 are also Coleman numbers; the Coleman page is the thread-pair lookup. Dimensions in the table are Unicel’s spec table unless the cell says otherwise.',
  parts: [
    { oem: '108868', what: 'Elegant, Intrigue and Joli. The only Maax row with those three names.', unicel: 'Unicel 5CH-25. Pleatco PMAX25P4. No Filbur number found for 5CH-25 or 108868.', size: 'Unicel: 5-5/8" × 6", 201 pleats, 25 sq ft, 1-1/2" MPT. Pleatco: 5-3/4" × 6", 25 sq ft, 1-1/2" MPT.', href: ['/maax-spas/5ch-25/'] },
    { oem: '104309', what: 'Elite Spas, on the Maax of AZ line. The separate “Elite Spas by Maax” heading prints 50 sq ft and no OEM.', unicel: 'Unicel 5CH-35. Pleatco cross-reference: PMAX50P4 (50 sq ft). Pleatco spec also prints PAS35P4 at 35 sq ft for Elite Spas (Coleman), with no OEM. Filbur FC-0300, cell PAS35P, 35 sq ft.', size: 'Unicel spec and the Maax of AZ line: 5-5/8" × 8", 203 pleats, 35 sq ft. Elite Spas by Maax heading: 50 sq ft, same diameter and length.', href: ['/maax-spas/5ch-35/'] },
    { oem: '100533', what: 'No model name on the Maax line. The same OEM is Coleman’s 50 sq ft open cartridge.', unicel: 'Unicel C-4950. Pleatco PRB50-IN. Filbur FC-2390.', size: '4-15/16" × 13-5/16", open, 50 sq ft', href: ['/maax-spas/c-4950/', '/coleman-spas/c-4950/'] },
    { oem: '107092', what: 'No model name. Maax’s line prints 65 sq ft. Pleatco’s cross-reference number is specified at 75.', unicel: 'Unicel C-5374. Pleatco cross-reference: PLBS75. Filbur FC-2971 at 65 sq ft.', size: 'Unicel spec: 5-5/16" × 14-13/16", open 2-1/8", 223 pleats, 65 sq ft. Pleatco PLBS75: 5-5/16" × 14-3/4", 75 sq ft. Filbur: 5-5/16" × 14-11/16", 65 sq ft.', href: ['/maax-spas/c-5374/'] },
    { oem: '100593', what: 'No model name on the Maax line. Coleman’s copy of this OEM carries the “model dated after 1992” note. The Maax line does not repeat that note.', unicel: 'Unicel C-8450. Pleatco PCS50N. Filbur FC-3310.', size: '8" × 9", 2" male slip, 50 sq ft. Opening 2-1/16" or 2-1/8".', href: ['/maax-spas/c-8450/', '/coleman-spas/c-8450/'] },
    { oem: '100594', what: 'No model name on the Maax line. Same slip cartridge as Coleman’s 75 sq ft row.', unicel: 'Unicel C-8475. Pleatco PCS75N. Filbur FC-3320.', size: '8" × 13", 2" male slip, 75 sq ft. Opening 2-1/16" or 2-1/8".', href: ['/maax-spas/c-8475/', '/coleman-spas/c-8475/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Elegant, Intrigue, Joli</h2>
<p>Those three names share one line in Unicel’s Maax Spas of AZ block: 25 sq ft, 5-5/8" × 6", 1-1/2" MPT, OEM 108868, Unicel 5CH-25. The spec table repeats the size, adds 201 pleats and 3 oz, and the description is “top load - Maax Spas.” Pleatco’s spec table prints PMAX25P4 at 5-3/4" × 6", handle, 1-1/2" MPT, 3 oz, 25 sq ft, OEM 108868, description “Maax Spas 25.” The application index says “Maax Spas 25 (1.50" MPT).” The eighth of an inch on the diameter is the disagreement. The area, the length, the thread and the OEM agree. A search of the Filbur catalog text did not find 5CH-25, PMAX25 or 108868.</p>
<p>Unicel’s Maax heading says “see also Coleman Spas.” Coleman’s threaded pairs are a different set of numbers. Do not move an Elegant spa onto a 7" Coleman cartridge because both brands sit near each other in the guide. The Coleman lookup is <a href="/fitment/coleman-spas-filter-by-model-year/">Coleman by part number</a>.</p>

<h2>Elite, and the 35 versus 50</h2>
<p>The next Maax of AZ line is “Elite Spas,” 35 sq ft, 5-5/8" × 8", 1-1/2" MPT, OEM 104309, 5CH-35. The spec table agrees: 5-5/8" × 8", semi-circular handle, 1-1/2" MPT, 203 pleats, 3 oz, 35 sq ft, “Elite Spas by Maax.” Later in the same guide, a heading that is only “Elite Spas by Maax” prints 50 sq ft for a 5-5/8" × 8" cartridge with a 1-1/2" MPT bottom and Unicel 5CH-35, and it prints no OEM number. Same Unicel number, two areas, in one catalog.</p>
${tbl(
  ['Source', 'What it prints for 5CH-35 or for Elite'],
  [
    ['Unicel spec table, PDF p.11', '5-5/8" × 8", 203 pleats, 35 sq ft, 1-1/2" MPT. Description: Elite Spas by Maax.'],
    ['Unicel Maax Spas of AZ, PDF p.44', 'Elite Spas, 35 sq ft, 5-5/8" × 8", 1-1/2" MPT, OEM 104309, 5CH-35.'],
    ['Unicel heading “Elite Spas by Maax,” PDF p.34', '50 sq ft, 5-5/8" × 8", 1-1/2" MPT, 5CH-35. No OEM on the line.'],
    ['Pleatco Unicel cross-reference, PDF p.47', '5CH-35 = PMAX50P4.'],
    ['Pleatco spec, PMAX50P4, PDF p.32', '5-3/4" × 8", handle, 1-1/2" MPT, 50 sq ft. Description: Maax Spas of Canada. No OEM.'],
    ['Pleatco spec, PAS35P4, PDF p.32', '5-7/8" × 7-3/4", handle, 1-1/2" MPT, 35 sq ft. Description: Elite Spas (Coleman). No OEM.'],
    ['Filbur FC-0300', '5-5/8" × 8", handle, 1-1/2" MPT, 35 sq ft, Pleatco cell PAS35P, Unicel 5CH-35. Coleman section: “Elite Spa by Coleman.” Another line: “Maax/Coleman Spas.” OEM 104309 is not in those cells.'],
  ],
)}
<p>So 104309 is a Unicel Maax-of-AZ number only. The 35 sq ft description is the spec table, the Maax of AZ line, Pleatco’s PAS35P4 row (at a different diameter and a shorter length), and Filbur. The 50 sq ft description is Unicel’s other heading and Pleatco’s PMAX50P4, which Pleatco does not call Elite and does not give an OEM. Ordering PMAX50P4 because the cross-reference says so gets the 50 sq ft Canada cartridge, not the 35 sq ft spec-table cartridge. Measure the old one: about 6" long is 5CH-25; about 8" long is the Elite body, and the area on the label may say 35 or 50.</p>

<h2>Rows with an OEM and no model</h2>
<p>The rest of the Maax of AZ block names no spa. 100533 is C-4950, the 50 sq ft open cartridge also on Coleman’s list. 107092 is C-5374. Unicel’s spec table prints that cartridge at 65 sq ft, 5-5/16" × 14-13/16", open 2-1/8", 223 pleats, for Rec Warehouse S2/G2, Rainbow and Waterway. The Maax line prints 65 sq ft for 107092. The S2/G2 line elsewhere in the same guide prints <strong>75 sq ft</strong> for C-5374. Pleatco’s cross-reference says C-5374 = PLBS75, and the PLBS75 spec is 5-5/16" × 14-3/4", 75 sq ft, with OEM numbers 817-0015, 303433 and R173600, not 107092. Filbur FC-2971 is 5-5/16" × 14-11/16", 65 sq ft, cell PLBS75, C-5374. Three lengths, and 65 or 75 sq ft. The <a href="/maax-spas/c-5374/">C-5374 page</a> keeps Unicel’s spec-table size and says so.</p>
<p>100593 and 100594 are the 8" slip cartridges, 50 and 75 sq ft. Coleman’s block puts “Model dated after 1992” under both. The Maax block does not. Treat that date as a Coleman note unless a Maax document says the same thing. This page did not find one. Openings are 2-1/16" in Unicel and Filbur and 2-1/8" in Pleatco, the same split as on the <a href="/fitment/coleman-spas-filter-by-model-year/">Coleman page</a>.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>108868 diameter.</strong> Unicel 5-5/8". Pleatco 5-3/4". Length 6", area 25 sq ft, and 1-1/2" MPT agree. No Filbur row.</li>
<li><strong>Elite area inside Unicel.</strong> Spec table and Maax of AZ: 35 sq ft, and only the Maax line prints OEM 104309. The “Elite Spas by Maax” heading: 50 sq ft, no OEM.</li>
<li><strong>Which Pleatco number is 5CH-35.</strong> The cross-reference says PMAX50P4 (50 sq ft, Maax of Canada, 5-3/4" × 8"). The spec table’s Elite row is PAS35P4 (35 sq ft, 5-7/8" × 7-3/4", no OEM). Filbur’s cell is PAS35P, at Unicel’s 5-5/8" × 8" and 35 sq ft.</li>
<li><strong>104309.</strong> Printed by Unicel’s Maax of AZ line. Not on the Elite Spas by Maax heading, and not in the Filbur cells read for FC-0300.</li>
<li><strong>C-5374 / 107092.</strong> Unicel spec, Maax line and Filbur: 65 sq ft. Pleatco PLBS75 spec, and Unicel’s S2/G2 line: 75 sq ft. Length 14-13/16" (Unicel), 14-3/4" (Pleatco) or 14-11/16" (Filbur).</li>
<li><strong>100533, 100593, 100594.</strong> On both the Maax list and the Coleman list. The after-1992 sentence is under Coleman’s rows only.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>Elegant, Intrigue or Joli: compare the old cartridge with 5-5/8" to 5-3/4" across and 6" long, 1-1/2" MPT, before ordering 108868 or PMAX25P4.</li>
<li>Elite: measure length. About 8" is 5CH-35. Read 35 and 50 as the two areas Unicel prints, and do not assume PMAX50P4 is the 35 sq ft cartridge.</li>
<li>If the number in your hand is 100533, 100593 or 100594, use the Coleman page as well. Those are not the Elegant cartridge.</li>
<li>If the cartridge is about 5-5/16" × 15" and open at both ends, compare it with 107092 and with both the 65 and the 75 sq ft figures before ordering PLBS75.</li>
</ol>`,
  sources: [
    { t: 'Unicel 2026 Replacement Guide, Maax Spas of AZ, PDF p.44 (printed p.40): Elegant, Intrigue, Joli = 108868 = 5CH-25 at 25 sq ft; Elite Spas = 104309 = 5CH-35 at 35 sq ft; 100533 = C-4950; 107092 = C-5374 at 65 sq ft; 100593 = C-8450; 100594 = C-8475. The heading says “see also Coleman Spas.”', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide, spec table PDF p.11 (printed p.7): 5CH-25, 5-5/8" × 6", 201 pleats, 25 sq ft, Maax Spas; 5CH-35, 5-5/8" × 8", 203 pleats, 35 sq ft, Elite Spas by Maax; C-5374, 5-5/16" × 14-13/16", 223 pleats, 65 sq ft', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide, heading “Elite Spas by Maax,” PDF p.34 (printed p.30): 50 sq ft, 5-5/8" × 8", 1-1/2" MPT, 5CH-35, no OEM. S2/G2 line, PDF p.43 (printed p.39): C-5374 at 75 sq ft.', u: UNICEL },
    { t: 'Pleatco 2023 Catalog, spec table PDF p.32: PMAX25P4, OEM 108868, 5-3/4" × 6", 25 sq ft; PMAX50P4, Maax Spas of Canada, 5-3/4" × 8", 50 sq ft, no OEM; PAS35P4, Elite Spas (Coleman), 5-7/8" × 7-3/4", 35 sq ft, no OEM; PLBS75, 5-5/16" × 14-3/4", 75 sq ft, OEM 817-0015, 303433, R173600.', u: PLEATCO },
    { t: 'Pleatco 2023 Catalog, application index PDF p.27: PMAX25P4 “Maax Spas 25 (1.50" MPT)”; PAS35P4 “Elite Spas (Coleman).” Unicel cross-reference PDF p.47: 5CH-25 = PMAX25P4, 5CH-35 = PMAX50P4, C-5374 = PLBS75.', u: PLEATCO },
    { t: 'Filbur Catalog: FC-0300, 5-5/8" × 8", 1-1/2" MPT, 35 sq ft, PAS35P, 5CH-35, described as Elite Spa by Coleman (Coleman Spas section, PDF p.16) and as Maax/Coleman Spas (PDF p.18). FC-2971, 5-5/16" × 14-11/16", 65 sq ft, PLBS75, C-5374. No 5CH-25 or 108868 row found.', u: FILBUR },
  ],
};

export const pages10: Page[] = [coleman, maax];
