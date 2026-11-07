import type { Page } from './fitment';
/** Freeflow and Freedom Spas lookups (published 2026-11-06).
 *  Model names and sizes are from Unicel 2026 (OEM cross-reference, PDF p.35 / printed p.31, and the spec tables).
 *  Filbur’s Freedom Spas section (PDF p.18, printed p.35) and its dimensional listing, and Pleatco’s 2023 spec table,
 *  application index and Unicel cross-reference, are the second and third catalogs. They do not agree with Unicel on
 *  which Freeflow model takes the open cartridge. Freedom’s Franklin and Statesman names sit on two different Unicel rows.
 *  Where a page disagrees, both figures are shown. Nothing is estimated. */
export const FITMENT8_DATE = '2026-11-06';
const UNICEL = 'https://www.unicelfilters.com/wp-content/uploads/2026/02/2026-Unicel-Replacement-Guide.pdf';
const PLEATCO = 'https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/catalogs/pleatco/Pleatco-Catalog-2023-PRINT-Master.pdf';
const FILBUR = 'https://filbur.com/wp-content/uploads/2024/11/Filbur-Catalog-Reference-Guide.pdf';
const ALADDIN30 = 'https://www.aladdin1950.com/product/cartridge-filter-element-86/';
const ALADDIN45 = 'https://www.aladdin1950.com/product/cartridge-filter-element-133/';
const tbl = (head: string[], rows: string[][]) => `<div class="tbl"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const freeflow: Page = {
  slug: 'freeflow-filter-by-model-year', brandSlug: 'freeflow-spas', brandName: 'Freeflow Spas', crumbBrand: 'Freeflow Spas', date: FITMENT8_DATE,
  title: 'Freeflow spa filter by model (TLX, RLX, CLX, Legend): open top or closed top',
  h1: 'Which filter does my Freeflow spa take?',
  desc: 'Freeflow TLX, RLX and CLX filters are the same 4-15/16" × 6-5/8" body with a 1-1/2" MPT bottom, but Unicel assigns the open top to TLX/RLX and the closed top to CLX, while Filbur and Pleatco swap those models. Legend is the longer cartridge, rated 45 sq ft by Unicel and 50 by Pleatco.',
  answer: 'Look at the <strong>top</strong> of the old cartridge before you trust the model name. Unicel’s spec table makes <strong>TLX and RLX</strong> the open-top cartridge <strong>4CH-22</strong> and <strong>CLX</strong> the closed-top cartridge <strong>4CH-23</strong>. Both are 4-15/16" × 6-5/8", 212 pleats, 3 oz, 25 sq ft, with a 1-1/2" MPT bottom. Filbur and Pleatco <strong>swap the models</strong>: they put CLX on the open cartridge and TLX/RLX on the closed one. The Unicel number’s top style does not swap. 4CH-22 is the open one and 4CH-23 is the closed one in both Unicel’s spec table and Filbur. <strong>Legend</strong> is a different, longer spa filter, 5-5/16" × 10", open 2-1/8" on top, 1-1/2" MPT, Unicel <strong>5CH-45</strong> at 45 sq ft. Pleatco rates that Legend cartridge at 50 sq ft. Unicel’s model list also puts <strong>Passport</strong> on 5CH-45. The spec table, Filbur and Pleatco name Legend and do not name Passport.',
  aftHead: 'Catalog equivalents',
  partsNote: 'The top style and the pleat counts are from Unicel’s spec table. Filbur agrees which Unicel number is open and which is closed, and disagrees which Freeflow model takes which. Pleatco’s own Unicel cross-reference sends 4CH-22 to PFF25W-P4, a 5" cartridge, while Filbur sends 4CH-22 to PFF25P4, the 4-5/8" open cartridge. Those are not the same Pleatco part. FF-150 and FF-100 are printed by Filbur and Pleatco, not by Unicel, so they are not used as OEM lookup numbers on this site.',
  parts: [
    { oem: 'No Freeflow part number in Unicel', what: 'Open top, 2-1/8". Unicel: TLX and RLX. Filbur and Pleatco: CLX (Pleatco also says Lagas, FF-150).', unicel: 'Unicel 4CH-22. Filbur FC-2399 = Pleatco PFF25P4. Pleatco’s Unicel cross says 4CH-22 = PFF25W-P4 instead.', size: 'Unicel and Filbur: 4-15/16" × 6-5/8", 25 sq ft. Pleatco PFF25P4: 4-5/8" × 6-5/8". PFF25W-P4: 5" × 6-5/8".', href: ['/freeflow-spas/4ch-22/'] },
    { oem: 'No Freeflow part number in Unicel', what: 'Closed top. Unicel: CLX. Filbur and Pleatco: TLX and RLX (Pleatco also says Lagas, FF-100, Claro).', unicel: 'Unicel 4CH-23; Pleatco PFF25TC-P4; Filbur FC-2400', size: 'Unicel and Filbur: 4-15/16" × 6-5/8", 25 sq ft. Pleatco: 4-5/8" × 6-5/8", 25 sq ft.', href: ['/freeflow-spas/4ch-23/'] },
    { oem: 'No Freeflow part number in Unicel', what: 'Legend, open 2-1/8" top. Unicel’s model list also names Passport on this row. The other catalogs name Legend only.', unicel: 'Unicel 5CH-45; Pleatco PFF50P4 (Filbur’s cell says PFF50P); Filbur FC-2401', size: 'Unicel and Pleatco: 5-5/16" × 10". Filbur’s Freedom section: 5-1/4" × 10". Area 45 sq ft (Unicel, Filbur) or 50 (Pleatco).', href: ['/freeflow-spas/5ch-45/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>The short pair: same body, two tops</h2>
<p>Unicel’s Freeflow heading lists three model groups and no factory part number. The two short rows are the same outside size. The spec table, not the model list, is where the tops are printed.</p>
${tbl(
  ['', '4CH-22', '4CH-23'],
  [
    ['Unicel spec table', '4-15/16" × 6-5/8", open 2-1/8", 1-1/2" MPT, 212 pleats, 3 oz, 25 sq ft. Model cell: Freeflow TLX, RLX.', 'Same size, closed top, 212 pleats, 3 oz, 25 sq ft, 1-1/2" MPT. Model cell: Freeflow CLX.'],
    ['Unicel Freeflow model list', 'TLX and RLX', 'CLX'],
    ['Filbur dimensional listing', 'FC-2399, 4-15/16" × 6-5/8", open 2-1/8", 1-1/2" MPT, 25 sq ft. Description: Freeflow 25, CLX. Pleatco cell: PFF25P4.', 'FC-2400, 4-15/16" × 6-5/8", closed, 1-1/2" MPT, 25 sq ft. Description: Freeflo 25, closed top, TLX. Pleatco cell: PFF25TC-P4.'],
    ['Filbur Freedom Spas section', 'CLX, FF-150, PFF25P4, 4CH-22. Filbur files this under the heading Freedom Spas, not under a Freeflow heading.', 'TLX, RLX, FF-100, closed, PFF25TC-P4, 4CH-23. Same Freedom Spas heading.'],
    ['Pleatco spec table', 'PFF25P4: 4-5/8" × 6-5/8", open 2-1/8", 1-1/2" MPT, 3 oz, 25 sq ft. Lagas, CLX, FF-150.', 'PFF25TC-P4: 4-5/8" × 6-5/8", closed, 1-1/2" MPT, 3 oz, 25 sq ft. Lagas, TLX, RLX, FF-100, Claro.'],
    ['Pleatco Unicel cross-reference', '4CH-22 = PFF25W-P4, not PFF25P4', '4CH-23 = PFF25TC-P4'],
  ],
)}
<p>PFF25W-P4 is a third short cartridge. Pleatco’s spec table prints it at <strong>5" × 6-5/8"</strong>, open 2-1/8", 1-1/2" MPT, 25 sq ft, for Freeflow Lagas, with no TLX, RLX or CLX name. That is the number Pleatco’s cross-reference gives for 4CH-22. It is not the 4-15/16" body Unicel and Filbur print for 4CH-22, and it is not PFF25P4. If the cartridge in your hand is about 5" across rather than just under 5", you are in the PFF25W-P4 row, and neither Unicel’s TLX line nor Filbur’s CLX line has finished the identification.</p>
<p>Filbur has no Freeflow heading. The CLX, TLX, RLX and Legend lines sit in the section titled Freedom Spas. Unicel gives Freeflow its own heading, directly after Freedom Spas, with different model names on the Freedom side. This page does not treat the two headings as one brand. The <a href="/fitment/freedom-spas-filter-by-model-year/">Freedom Spas lookup</a> is the other list.</p>
<p>A closed top and an open top are not interchangeable, whatever the model badge says. <a href="/guides/open-end-vs-threaded-hot-tub-filters/">Open-end versus threaded</a> is the fitting check, and <a href="/guides/how-to-find-your-spa-filter-size/">how to find your spa filter size</a> is the measuring order. Unicel’s own measuring note excludes handles from the length. Both of these short cartridges are specified at 6-5/8" including the end caps.</p>

<h2>Legend, and Passport</h2>
<p>Unicel’s spec table prints 5CH-45 as 5-5/16" × 10", open 2-1/8", 1-1/2" MPT, 225 pleats, 3 oz, 45 sq ft, and the model cell says Freeflow Spas Legend. The Freeflow model list puts Legend and Passport on that same 45 sq ft row. Passport is not repeated in the spec-table model cell. Filbur’s dimensional listing prints FC-2401 at 5-5/16" × 10", open 2-1/8", 1-1/2" MPT, 45 sq ft, Pleatco cell PFF50P. Filbur’s Freedom Spas section prints the same FC-2401 at <strong>5-1/4" × 10"</strong> for Legend, still at 45 sq ft, still PFF50P. Pleatco’s spec table prints PFF50P4 at 5-5/16" × 10", open 2-1/8", 1-1/2" MPT, 3 oz, <strong>50 sq ft</strong>, for Freeflow Spas Legend. The application index names “Spa Freeflow Legend 50.” None of those Pleatco or Filbur lines name Passport.</p>
<p>So a Legend cartridge is the long open one, and the area is 45 or 50 depending on the catalog. A Passport owner has only Unicel’s model list. Measure the old cartridge against 5-5/16" × 10" before ordering 5CH-45, and read both areas on the <a href="/freeflow-spas/5ch-45/">5CH-45 page</a>. Why the same body can be given two areas is covered in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters have different square-foot ratings</a>.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>Which model is open.</strong> Unicel: TLX and RLX are 4CH-22 (open), CLX is 4CH-23 (closed). Filbur and Pleatco: CLX is the open cartridge, TLX and RLX are the closed one. The Unicel number’s top does not move. The model name does.</li>
<li><strong>Pleatco’s number for 4CH-22.</strong> Pleatco’s cross-reference says PFF25W-P4. Filbur says PFF25P4. Pleatco prints those at 5" and 4-5/8", and Unicel prints 4CH-22 at 4-15/16".</li>
<li><strong>Outside diameter of the short pair.</strong> Unicel and Filbur 4-15/16". Pleatco PFF25P4 and PFF25TC-P4 4-5/8".</li>
<li><strong>Legend area.</strong> Unicel 45 sq ft (225 pleats). Filbur 45 sq ft. Pleatco 50 sq ft.</li>
<li><strong>Legend diameter inside Filbur.</strong> Dimensional listing 5-5/16". Freedom Spas section 5-1/4".</li>
<li><strong>Passport.</strong> Named only on Unicel’s Freeflow model list, on the 5CH-45 row with Legend.</li>
<li><strong>Lagas, FF-150, FF-100, Claro.</strong> Pleatco and Filbur print them. Unicel’s Freeflow heading does not.</li>
<li><strong>The section heading.</strong> Filbur files these model names under Freedom Spas. Unicel files them under Freeflow Spas.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>If the cartridge is about 6-5/8" long, the top decides it. Open 2-1/8" is 4CH-22 / FC-2399. Closed is 4CH-23 / FC-2400 / PFF25TC-P4. Do not pick from “CLX” or “TLX” alone.</li>
<li>If it is about 5" across rather than 4-15/16" or 4-5/8", compare it with Pleatco PFF25W-P4 before you order 4CH-22.</li>
<li>If it is about 10" long and about 5-5/16" across, with an open top and a 1-1/2" MPT bottom, it is the Legend cartridge. Read 45 and 50 sq ft as the two printed areas.</li>
<li>Compare the cartridge with the <a href="/freeflow-spas/">Freeflow table</a> before ordering. A Freedom model name (Franklin, Statesman, Liberty, Concord) is a different list.</li>
</ol>`,
  sources: [
    { t: 'Unicel 2026 Replacement Guide: Freeflow Spas model list, PDF p.35 (printed p.31), TLX/RLX = 4CH-22, CLX = 4CH-23, Legend and Passport = 5CH-45', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide: spec table, PDF p.8 (printed p.4), 4CH-22 open top for TLX/RLX and 4CH-23 closed top for CLX, both 212 pleats, 25 sq ft; PDF p.11 (printed p.7), 5CH-45, 225 pleats, 45 sq ft, model cell Legend', u: UNICEL },
    { t: 'Pleatco 2023 Catalog: spec table PDF p.31, PFF25P4 (Lagas, CLX, FF-150) and PFF25TC-P4 (Lagas, TLX, RLX, FF-100, Claro); PDF p.32, PFF25W-P4 (Lagas, 5" OD) and PFF50P4 (Legend, 50 sq ft)', u: PLEATCO },
    { t: 'Pleatco 2023 Catalog: application index PDF p.27 (PFF25TC-P4 Lagas TLX/RLX, PFF25W-P4 Freeflow Lagas, PFF50P4 Freeflow Legend 50); Unicel cross-reference PDF p.47 (4CH-22 = PFF25W-P4, 4CH-23 = PFF25TC-P4, 5CH-45 = PFF50P4)', u: PLEATCO },
    { t: 'Filbur Catalog: dimensional listing, PDF p.9 (printed pp.16–17), FC-2399 open CLX = 4CH-22 = PFF25P4 and FC-2400 closed TLX = 4CH-23 = PFF25TC-P4; PDF p.10 (printed pp.18–19), FC-2401 at 5-5/16" × 10", 45 sq ft, PFF50P', u: FILBUR },
    { t: 'Filbur Catalog: Product by Pool/Spa Manufacturer, Freedom Spas section, PDF p.18 (printed p.35), CLX FF-150, TLX/RLX FF-100, and Legend at 5-1/4" × 10". Filbur has no separate Freeflow heading.', u: FILBUR },
  ],
};

const freedom: Page = {
  slug: 'freedom-spas-filter-by-model-year', brandSlug: 'freedom-spas', brandName: 'Freedom Spas', crumbBrand: 'Freedom Spas', date: FITMENT8_DATE,
  title: 'Freedom Spas filter by model (Franklin, Statesman, Liberty, Concord)',
  h1: 'Which filter does my Freedom spa take?',
  desc: 'Freedom Spas filters from Unicel’s model list: Franklin, Statesman and Revere on the 30 sq ft 4CH-30, and those names again plus Lexington, Enterprise and Aristocrat on the 45 sq ft 6CH-45. Liberty is only on the short open cartridge. A 1993 note sits on two rows that name no model.',
  answer: 'Unicel’s Freedom Spas list names <strong>Franklin, Statesman and Revere</strong> for a 4-5/8" × 11-7/8" cartridge with a 1-1/2" MPT bottom, <strong>4CH-30</strong>, at <strong>30 sq ft</strong>. The same list names <strong>Statesman, Lexington, Enterprise, Aristocrat and Franklin</strong> for a 6" × 12-3/8" cartridge, <strong>6CH-45</strong>, at 45 sq ft. Franklin and Statesman are on both rows, so the model name does not finish the order. Filbur prints 6CH-45 at <strong>12-1/4"</strong> long, not 12-3/8". <strong>Liberty</strong> is named only on the short open cartridge, 35 sq ft <strong>C-4401</strong>. The next row, 50 sq ft <strong>C-4405</strong>, has no model name and the note “Model dated after 1993.” <strong>Concord, Patriot, Ambassador and Executive</strong> are named only on the 37 sq ft <strong>C-4637</strong>. The 50 sq ft <strong>C-4950</strong> row under them also has no model name and the same 1993 note.',
  aftHead: 'Catalog equivalents',
  partsNote: 'Model names in the first column are Unicel’s, except where the cell says otherwise. Filbur’s Freedom Spas section lists the same Unicel numbers and does not print Franklin, Liberty or Concord. It describes several of those rows as Rainbow cartridges, and it also files Freeflow’s CLX, TLX, RLX and Legend in this section. Those Freeflow names are on the <a href="/fitment/freeflow-filter-by-model-year/">Freeflow lookup</a>, not in the table below. Aladdin is a second catalog for the two threaded cartridges only.',
  parts: [
    { oem: 'No Freedom part number in Unicel', what: 'Franklin, Statesman, Revere. Aladdin 13005 uses that same model string and lists Freedom among many brands.', unicel: 'Unicel 4CH-30; Filbur FC-0141; Pleatco number in Filbur’s cell: PTL25P-4. Not in Pleatco’s Unicel cross-reference.', size: '4-5/8" × 11-7/8", cone handle, 1-1/2" MPT. 30 sq ft on the Freedom line, the spec table, Filbur’s size table and Aladdin. 25 sq ft on Unicel’s Sundance line for OEM 6540-484.', href: ['/freedom-spas/4ch-30/'] },
    { oem: 'No Freedom part number in Unicel', what: 'Statesman, Lexington, Enterprise, Aristocrat, Franklin. Aladdin 14506 uses that model string for Freedom Spas and Master Spas.', unicel: 'Unicel 6CH-45; Filbur FC-0330; Pleatco number in Filbur’s cell: PTL45W-P-4', size: 'Unicel and Aladdin: 6" × 12-3/8", 158 pleats, 45 sq ft, 1-1/2" MPT. Filbur: 6" × 12-1/4".', href: ['/freedom-spas/6ch-45/'] },
    { oem: 'No Freedom part number in Unicel', what: 'Liberty, on the 35 sq ft row only. Filbur does not print Liberty. It calls this row Rainbow DSF 35, two per set.', unicel: 'Unicel C-4401; Pleatco PRB17.5SF-PAIR; Filbur FC-2386', size: '4-15/16" × 4-5/8", open 2-1/8", 35 sq ft, two per set in the spec note and in Filbur', href: ['/freedom-spas/c-4401/'] },
    { oem: 'No model name on this row', what: '50 sq ft open cartridge. Note under the row: “Model dated after 1993.” Filbur repeats that note and calls the row Rainbow DSF 50, two per set.', unicel: 'Unicel C-4405; Pleatco PRB25SF-PAIR; Filbur FC-2387', size: '4-15/16" × 6-5/8", open 2-1/8", 50 sq ft', href: ['/freedom-spas/c-4405/'] },
    { oem: 'No Freedom part number in Unicel', what: 'Concord, Patriot, Ambassador, Executive, on this 37 sq ft row only. Filbur calls it Rainbow Dynamic 37 and does not print those model names. The spec table’s application line names Rainbow, Waterway, Morgan, Leisure Bay and Custom Molded Products, not Freedom.', unicel: 'Unicel C-4637; Filbur FC-2380; Pleatco number in Filbur’s cell: PRB37-IN-4', size: '4-15/16" × 13-5/16", open 2-1/8" both ends, 158 pleats, 4 oz, 37 sq ft', href: ['/freedom-spas/c-4637/'] },
    { oem: 'No model name on this row', what: '50 sq ft open cartridge. Note under the row: “Model dated after 1993.” Filbur repeats that note as Rainbow Dynamic 50.', unicel: 'Unicel C-4950; Pleatco PRB50-IN; Filbur FC-2390', size: '4-15/16" × 13-5/16", open 2-1/8", 50 sq ft', href: ['/freedom-spas/c-4950/'] },
  ],
  collections: [], rows: [], notes: [],
  extraHtml: `<h2>Two threaded cartridges, and two models on both</h2>
<p>Unicel prints no Freedom factory number. The model names are the left-hand column of the Freedom Spas block. Franklin, Statesman and Revere share the line with 4CH-30. Statesman, Lexington, Enterprise, Aristocrat and Franklin share the next line with 6CH-45. Franklin and Statesman are in both groups. A Statesman owner still has to measure.</p>
${tbl(
  ['', '4CH-30', '6CH-45'],
  [
    ['Unicel Freedom list and spec table', '4-5/8" × 11-7/8", molded cone handle, 1-1/2" MPT, 158 pleats, 4 oz, 30 sq ft', '6" × 12-3/8", semi-circular handle, 1-1/2" MPT, 158 pleats, 3 oz, 45 sq ft'],
    ['Unicel Sundance line, same 4CH-30 number', 'OEM 6540-484, 25 sq ft, not 30. Same diameter, length and thread.', 'Not on that line'],
    ['Filbur size table', 'FC-0141, 4-5/8" × 11-7/8", 30 sq ft, PTL25P-4', 'FC-0330, 6" × 12-1/4", 45 sq ft, PTL45W-P-4'],
    ['Filbur Freedom section', 'FC-0141, 30 sq ft. No Franklin / Statesman / Revere names.', 'FC-0330, 6" × 12-1/4", 45 sq ft. No Lexington names.'],
    ['Aladdin', 'Part 13005. Model field: “4CH-Top Load, Franklin, Statesman, Revere.” 30 sq ft, 158 pleats, 4-5/8" × 11-7/8", cone handle, 1-1/2" male thread. Freedom is one brand in a long manufacturer list that also includes Dimension One and Sundance.', 'Part 14506. Model field: “6CH-Top Load/Statesman/Lexington/Enterprise/Aristocrat/Franklin.” 45 sq ft, 158 pleats, 6" × 12-3/8". Manufacturers named: Freedom Spas, Master Spas, and the filter brands.'],
  ],
)}
<p>The 30-versus-25 sq ft split on 4CH-30 is already how the <a href="/sundance/4ch-30/">Sundance 6540-484</a> row is filed: that OEM line says 25, and the spec table says 30. Freedom’s own line matches the spec table. Order for a Freedom spa from the 30 sq ft description, then hold the new cartridge against the old one. The length fight on 6CH-45 is 12-3/8" (Unicel spec, Unicel’s Freedom line, Aladdin) against 12-1/4" (Filbur’s size table and Filbur’s Freedom section). An eighth of an inch is inside some catalogs’ measuring tolerance and outside others. Measure the cartridge you removed. The <a href="/master-spas/6ch-45/">Master Spas 6CH-45</a> row uses Unicel’s 12-3/8" and has no Freedom model names.</p>

<h2>Liberty, the 1993 note, and the open cartridges</h2>
<p>Under the threaded pair, Unicel prints Liberty on one row only: 35 sq ft, 4-15/16" × 4-5/8", C-4401, 4 oz. The following row is 50 sq ft, 4-15/16" × 6-5/8", C-4405, with a blank model cell, and the note “Model dated after 1993” sits under that row. The note does not say “Liberty.” It does not say the 35 sq ft cartridge was dropped. Filbur’s Freedom section lists FC-2386 / C-4401 as “Rainbow DSF 35, 2/set” and FC-2387 / C-4405 as “Rainbow DSF 50, 2/set,” and it puts “Model dated after 1993” on the 50 sq ft row. Filbur does not print the word Liberty. Unicel’s spec note on C-4401 says two cartridges per set with a stick handle, which matches Filbur’s “2/set” and the <a href="/beachcomber/c-4401/">Beachcomber pre-1995 set</a> that uses the same Unicel number for a different brand.</p>
<p>Concord, Patriot, Ambassador and Executive are printed on the 37 sq ft row: 4-15/16" × 13-5/16", C-4637, 4 oz. The spec table gives that cartridge 158 pleats, 2-1/8" open ends, and calls it an upgrade of the 25 sq ft C-4326 and C-4625. The brands on that spec line are Rainbow, Waterway Plastics, Morgan Spas, Leisure Bay Spas and Custom Molded Products. Freedom is not among them. The Freedom model names for C-4637 come from the OEM cross-reference only. Filbur’s Freedom section lists FC-2380 / C-4637 as “Rainbow Dynamic 37” and does not print Concord, Patriot, Ambassador or Executive.</p>
<p>The last Freedom row is 50 sq ft, 4-15/16" × 13-5/16", C-4950, blank model cell, and another “Model dated after 1993” note under it. Filbur repeats the note on FC-2390 and calls the row Rainbow Dynamic 50. C-4950 is a cartridge several other brands use. Unicel does not say it replaced C-4637. The note is the only date either catalog gives, and it is attached to the 50 sq ft row, not to the Concord names.</p>
<p>Same outside length, two areas: C-4637 at 37 sq ft and C-4950 at 50 sq ft are both 13-5/16" long. That is the pleat-count difference in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters have different square-foot ratings</a>. Both are open at 2-1/8", so a thread is the wrong clue. <a href="/guides/open-end-vs-threaded-hot-tub-filters/">Open-end versus threaded</a> shows the difference.</p>

<h2>Where the sources disagree</h2>
<ul>
<li><strong>Franklin and Statesman.</strong> Unicel names both on 4CH-30 and on 6CH-45. Aladdin’s two model fields do the same. The cartridges are 4-5/8" × 11-7/8" and 6" × 12-3/8".</li>
<li><strong>4CH-30 area.</strong> Freedom list, spec table, Filbur’s size table and Aladdin: 30 sq ft. Unicel’s Sundance line for OEM 6540-484: 25 sq ft. Filbur’s Sundance line for that OEM also prints 25.</li>
<li><strong>6CH-45 length.</strong> Unicel and Aladdin 12-3/8". Filbur 12-1/4".</li>
<li><strong>Liberty.</strong> Unicel only, and only on the 35 sq ft row. Filbur’s matching row says Rainbow DSF 35, two per set.</li>
<li><strong>“Model dated after 1993.”</strong> Printed under the blank-model C-4405 row and under the blank-model C-4950 row, in Unicel and again in Filbur. Not printed on the Liberty row or the Concord row.</li>
<li><strong>Concord and the other three names.</strong> Unicel’s Freedom list only. Filbur says Rainbow Dynamic 37. The spec table does not name Freedom.</li>
<li><strong>Freeflow names inside Filbur’s Freedom section.</strong> CLX, TLX, RLX and Legend are in that section. Unicel files them under Freeflow, on the next heading. They are not Freedom model names in Unicel.</li>
</ul>
<h2>How to confirm yours</h2>
<ol>
<li>A threaded cartridge about 4-5/8" × 11-7/8" is 4CH-30 / FC-0141. One about 6" across and about 12" long is 6CH-45 / FC-0330. Franklin or Statesman on a brochure does not choose between them.</li>
<li>An open cartridge about 4-5/8" long, two to a set, is the C-4401 / Liberty description. About 6-5/8" long, still open and two to a set, is the C-4405 row with the 1993 note and no model name.</li>
<li>An open cartridge about 13-5/16" long is either 37 sq ft (C-4637) or 50 sq ft (C-4950). The 1993 note is on the 50, not on the Concord names.</li>
<li>Use the <a href="/freedom-spas/">Freedom Spas table</a> for the sizes, and the <a href="/fitment/freeflow-filter-by-model-year/">Freeflow lookup</a> if the model is TLX, RLX, CLX, Legend or Passport.</li>
</ol>`,
  sources: [
    { t: 'Unicel 2026 Replacement Guide: Freedom Spas model list, PDF p.35 (printed p.31). Franklin/Statesman/Revere = 4CH-30 at 30 sq ft; Statesman/Lexington/Enterprise/Aristocrat/Franklin = 6CH-45; Liberty = C-4401; C-4405 and C-4950 carry the “Model dated after 1993” note and no model name; Concord/Patriot/Ambassador/Executive = C-4637.', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide: spec table PDF p.7 (printed p.3), 4CH-30, 158 pleats, 4 oz, 30 sq ft; PDF p.12 (printed p.8), 6CH-45, 158 pleats, 3 oz, 45 sq ft, 12-3/8"; PDF p.8 (printed p.4), C-4401, two per set; PDF p.9 (printed p.5), C-4637, 158 pleats, 37 sq ft, upgrade of C-4326/C-4625, application line does not name Freedom', u: UNICEL },
    { t: 'Unicel 2026 Replacement Guide: Sundance line, PDF p.59 (printed p.55), OEM 6540-484 = 4CH-30 at 25 sq ft, same 4-5/8" × 11-7/8" and 1-1/2" MPT', u: UNICEL },
    { t: 'Filbur Catalog: dimensional listing, PDF p.9 (printed pp.16–17), FC-0141 = 4CH-30 at 30 sq ft; PDF p.10 (printed pp.18–19), FC-0330 = 6CH-45 at 6" × 12-1/4", 45 sq ft, PTL45W-P-4', u: FILBUR },
    { t: 'Filbur Catalog: Freedom Spas section, PDF p.18 (printed p.35). FC-0141, FC-2386 (Rainbow DSF 35, 2/set), FC-2387 (Rainbow DSF 50, 2/set, “Model dated after 1993”), FC-2380 (Rainbow Dynamic 37), FC-2390 (Rainbow Dynamic 50, same 1993 note), FC-0330 at 12-1/4". No Franklin, Liberty or Concord names. CLX, TLX, RLX and Legend are also in this section.', u: FILBUR },
    { t: 'Pleatco 2023 Catalog: Unicel cross-reference, PDF p.47, C-4401 = PRB17.5SF-PAIR and C-4950 = PRB50-IN. 4CH-30 is not in that cross-reference. Filbur is the source of PTL25P-4, PTL45W-P-4 and PRB37-IN-4 on the Freedom rows.', u: PLEATCO },
    { t: 'Aladdin Equipment: cartridge 13005, model field “4CH-Top Load, Franklin, Statesman, Revere,” 30 sq ft, 158 pleats, 4-5/8" × 11-7/8", Freedom Spas in the manufacturer list (fetched 2026-11-06)', u: ALADDIN30 },
    { t: 'Aladdin Equipment: cartridge 14506, model field “6CH-Top Load/Statesman/Lexington/Enterprise/Aristocrat/Franklin,” 45 sq ft, 158 pleats, 6" × 12-3/8", Freedom Spas and Master Spas (fetched 2026-11-06)', u: ALADDIN45 },
  ],
};

export const pages8: Page[] = [freeflow, freedom];
