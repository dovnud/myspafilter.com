import { c } from './guidesrc';
import type { Guide } from './guides';

const D = '2026-10-27';
const search = (h: string, intro: string, rows: [string, string, string][]) => [{ h, intro, search: rows }];

export const moreGuides: Guide[] = [
{slug:'intex-and-bestway-inflatable-spa-filters',published:D,reviewed:D,
title:'Intex PureSpa and Bestway Lay-Z-Spa filters: S1, S2 and Type VI',
desc:'Which inflatable hot tub uses the Intex Type S1 cartridge, which uses Type S2, and which Bestway tubs use the Type VI cartridge. Sizes and part numbers from the manufacturers’ pages.',
answer:`Intex PureSpa tubs use two different cartridges. <strong>Type S1</strong> is sold as 29001E (two-pack), 29011E (six-pack) and single part 11692; Unicel lists it as C-4317 and Pleatco as PIN4PAIR, at 4-1/4" × 2-15/16"${c('intexS1','intexS1List','unicel26','pleatco23')}. <strong>Type S2</strong> is 29012E (two-pack) and single part 13435, and Intex gives the size as 3.375" × 5.125" for PureSpa models whose cartridge is built into the control unit${c('intexS2','intexS2List')}. Bestway’s SaluSpa Type VI cartridge is 4.2" × 3.1", and Lay-Z-Spa says Type VI fits every Lay-Z-Spa except the Monte Carlo${c('bestwayVI','layzVI')}.`,
body:`<h2>Why the set number matters more than the brand name</h2>
<p>An inflatable spa does not use the 6" or 8" cartridge a hardshell Hot Spring or Caldera uses. The cartridges are a few inches each way, and Intex has sold two of them under names that look alike. The set number on the box or on the spa, including the letters at the end, is what Intex’s own compatible-item lists use. A retailer search for “Intex spa filter” mixes S1 and S2. The lists do not.</p>
<p>These cartridges are also absent from the usual hardshell cross-reference in one important way. S1 is in the Unicel 2026 guide and the Pleatco 2023 catalog. S2 and the Bestway Type VI cartridge are not in those catalogs, so there is no Unicel C-number or Pleatco P-number to fall back on. You order the manufacturer’s part, then compare the size Intex or Bestway prints.</p>

<h2>Type S1: 29001E, 29011E and part 11692</h2>
<p>Intex’s product page for the Type S1 twin pack is SKU 29001E, described as the PureSpa replacement filter. The six-pack is SKU 29011E. The replacement-part page for a single cartridge is part 11692, and that page is the compatible-item list${c('intexS1','intexS1List')}. Unicel prints OEM 29001 and 11692 and lists the cartridge as C-4317. Pleatco’s spec table prints OEM 29001E as PIN4PAIR, which is a two-cartridge pack, not a different body${c('unicel26','pleatco23')}.</p>
<div class="tbl"><table><thead><tr><th>What you might see</th><th>What it refers to</th></tr></thead><tbody>
<tr><td>29001E</td><td>Intex Type S1 twin pack</td></tr>
<tr><td>29011E</td><td>Intex Type S1 six-pack</td></tr>
<tr><td>11692</td><td>Intex single S1 replacement cartridge</td></tr>
<tr><td>Unicel C-4317</td><td>Unicel’s listing of that S1 body</td></tr>
<tr><td>Pleatco PIN4PAIR</td><td>Pleatco’s two-cartridge pack for OEM 29001E</td></tr>
</tbody></table></div>
<p>Body size is the number the catalogs agree on: 4-1/4" diameter by 2-15/16" long, rated 4 sq ft on the Unicel row. The end-cap opening is the number they do not agree on. Unicel prints 2-1/16" open at both ends. Pleatco prints 1-5/8"${c('unicel26','pleatco23')}. Our <a href="/intex/c-4317/">C-4317 page</a> keeps both and treats the body size as the match. Hold a new cartridge against the old one if you are crossing from one brand’s listing to the other.</p>
<p>Intex’s 11692 compatible-item list is the model list on that page. It includes, among others, PureSpa set numbers 28403E, 28405E, 28407E and 28409E (Intex marks those four 2019 sets with the year), plus 28421E, 28425E, 28427E, 28429E, 28431E, 28433EP, 28433WL, 28435E, 28439E, 28441E and 28453E${c('intexS1List')}. A retailer listing for 29001E has named extra set numbers that are not on Intex’s list. We do not add those. If your set number is not on the 11692 page, do not assume S1 fits. Check the S2 list next, because several of the same digits move to S2 when the suffix changes.</p>

<h2>Type S2: the suffix is the whole story</h2>
<p>Intex’s S2 twin pack is SKU 29012E. The single replacement is part 13435. Intex prints the size as 3.375" × 5.125" and says the S2 is only for PureSpa models with the cartridge built into the control unit${c('intexS2')}. That is a different shape from S1: S1 is a short, wide cartridge (4-1/4" across and under 3" tall). S2 is narrower and taller. They do not swap.</p>
<p>The 13435 compatible-item list names 28425EG, 28425EH, 28427EG, 28427EH, 28439EH, 28441EH and 28449EH${c('intexS2List')}. Compare that with the S1 list. 28425E, 28427E, 28439E and 28441E are on the S1 list. The same digits with an EG or EH suffix are on the S2 list. “28425” without the suffix is not a filter choice. Read the full set number on the box or in the manual.</p>
<p>Our <a href="/intex/29012e/">29012E page</a> also records that one retailer listing prints 3.5" × 6.25" per filter. That figure does not match Intex’s 3.375" × 5.125", so the page shows Intex’s size. There is no Unicel or Pleatco equivalent in the catalogs we use. Search by 29012E or 13435, not by a C-number.</p>

<h2>Bestway Type VI, and the Monte Carlo exception</h2>
<p>Bestway’s US product page for the SaluSpa Type VI two-pack gives the size as 4.2" across and 3.1" tall, for Bestway’s SaluSpa line${c('bestwayVI')}. The Lay-Z-Spa UK page for Filter Cartridge VI says it is compatible with all Lay-Z-Spa hot tubs except the Monte Carlo, which has its own rigid-spa cartridge${c('layzVI')}. Neither of those manufacturer pages is where we got a numeric part. The retail model 58323 / 58323E-BW is the number recorded on our <a href="/bestway/58323/">Bestway 58323 page</a> from the retailer listing that page cites. Order from a listing whose title says Type VI, and compare 4.2" × 3.1" with the old cartridge. If the spa is a Monte Carlo, stop and use the rigid-spa cartridge Lay-Z-Spa sells for that model. The Type VI page says it does not fit.</p>
<p>Unicel, Pleatco and Filbur do not list a Type VI equivalent. There is no honest C-number to print, and the page does not invent one.</p>

<h2>How these small cartridges get used</h2>
<p>S1 and S2 are small media areas next to a hardshell cartridge of 30 to 75 sq ft. Intex sells them in multi-packs because owners go through them, not because the spa holds two different types at once. A twin pack is two of the same cartridge in the box. It is not a statement that the spa takes an S1 and an S2 together.</p>
<p>Nothing on Intex’s S1 or S2 pages reprints the hose-and-soak procedure Unicel publishes for pleated spa cartridges${c('unicel')}. Follow the care card that came with the spa. What does transfer from the hardshell manuals is the reason to keep a spare: Jacuzzi says not to run a spa with no filter installed, because unfiltered water carries debris to the pump and the heater${c('jac')}. That warning is not written for PureSpa specifically. It is the reason a two-pack is useful. Rinse or swap before the little cartridge collapses, and see <a href="/guides/clogged-or-missing-hot-tub-filter/">what a clogged or missing filter does</a> for the flow faults hardshell controls display when a cartridge plugs.</p>
<p>If you also own a hardshell tub, do not borrow its cartridge. A Hot Spring C-6430 is 6" × 10-1/2". It will not fit a PureSpa. The <a href="/size/">size lookup</a> will show you that immediately if you type the diameter and length.</p>

<h2>A short decision list</h2>
<ol>
<li>Find the full set number, letters included.</li>
<li>If it is on Intex’s 11692 list, you need Type S1 (29001E, 29011E or 11692)<a href="/intex/c-4317/">. Open the S1 page</a>.</li>
<li>If it is on Intex’s 13435 list, or the letters are EG or EH on a number that looks like an S1 set, you need Type S2 (29012E or 13435)<a href="/intex/29012e/">. Open the S2 page</a>.</li>
<li>If the spa is a SaluSpa or a Lay-Z-Spa other than Monte Carlo, you need Type VI, about 4.2" × 3.1"<a href="/bestway/58323/">. Open the Type VI page</a>.</li>
<li>If it is a Monte Carlo, use Lay-Z-Spa’s rigid-spa cartridge, not Type VI${c('layzVI')}.</li>
</ol>
<p>If you would rather start from your set number or model year, the <a href="/fitment/intex-filter-by-model-year/">Intex filter by set number and year</a> and <a href="/fitment/bestway-filter-by-model-year/">Bestway filter by model and year</a> lookups list every set and model Intex’s and Bestway’s own documents name, with the year each appears.</p>
<p>Hardshell cross-reference, for when the tub is not inflatable, starts at <a href="/guides/how-filbur-unicel-and-pleatco-numbers-compare/">how Filbur, Unicel and Pleatco numbers compare</a>.</p>`,
faq:[['Is Intex 29001E the same filter as 29012E?','No. 29001E is the Type S1 twin pack (Unicel C-4317, about 4-1/4" × 2-15/16"). 29012E is the Type S2 twin pack, which Intex sizes at 3.375" × 5.125" and limits to PureSpa models with the cartridge in the control unit.'],
['My set number is 28425E. Which filter?','28425E is on Intex’s S1 compatible list (part 11692). 28425EG and 28425EH are on the S2 list (part 13435). The letters decide it.'],
['Does every Lay-Z-Spa use the Type VI cartridge?','Lay-Z-Spa’s Type VI page says it fits all Lay-Z-Spa hot tubs except the Monte Carlo. Bestway’s US page gives the Type VI size as 4.2" × 3.1" for SaluSpa. The Monte Carlo uses a separate rigid-spa cartridge.'],
['Why is there no Unicel number for the Bestway filter or the Intex S2?','Those parts are not in the Unicel 2026 or Pleatco 2023 catalogs we use. S1 is in both. S2 and Type VI are identified from the manufacturers’ own pages, so we do not invent a C-number.']],
src:['intexS1','intexS1List','intexS2','intexS2List','unicel26','pleatco23','bestwayVI','layzVI','unicel','jac'],
related:['how-to-find-your-spa-filter-size','clogged-or-missing-hot-tub-filter','how-filbur-unicel-and-pleatco-numbers-compare','open-end-vs-threaded-hot-tub-filters','how-to-clean-a-hot-tub-filter'],
pickHeading:'Search inflatable-spa filters on Amazon',
picks:search('Part-number searches','Match the listing title to S1, S2 or Type VI. A search can return both Intex types.',[
['Intex 29001E (Type S1)','Intex 29001E spa filter','S1 twin pack. About 4-1/4" × 2-15/16".'],
['Intex 29012E (Type S2)','Intex 29012E spa filter','S2 twin pack. Intex size 3.375" × 5.125".'],
['Intex 11692','Intex 11692 spa filter','Single Type S1 replacement cartridge.'],
['Bestway Type VI','Bestway Type VI spa filter','SaluSpa / Lay-Z-Spa cartridge, about 4.2" × 3.1". Not for Monte Carlo.'],
])},

{slug:'sundance-and-jacuzzi-look-alike-filters',published:D,reviewed:D,
title:'Sundance and Jacuzzi look-alike filters: core plugs, bottom holes and handles',
desc:'Cartridges that share a Sundance or Jacuzzi OEM number, or a diameter and length, and still differ: C-8326 vs C-8327, C-7465 vs C-7466, 6CH-960 vs 6CH-961, and OEM 373045.',
answer:`Several Sundance and Jacuzzi cartridges share a body and not a detail Unicel bothers to print. <strong>C-8326 and C-8327</strong> are both 8-7/16" × 19", 125 sq ft, OEM 6540-488; Unicel says C-8326 has a core plug and fits spas before 2006, and C-8327 has no core plug and fits spas after 2005${c('unicel26')}. <strong>C-7465 and C-7466</strong> are both 7-1/2" × 14-3/4" castle-top cartridges at 65 sq ft; the bottom opening is 2-1/16" (OEM 6540-480) or 2-5/8" (OEM 6540-481)${c('unicel26')}. Match the OEM number, then the note in the spec table.`,
body:`<h2>The 125 sq ft pair: core plug or no core plug</h2>
<p><a href="/sundance/c-8326/">C-8326</a> and <a href="/sundance/c-8327/">C-8327</a> are the cartridges people shorten to “the big Sundance filter.” The spec rows print the same outside size and the same ends: 8-7/16" diameter, 19" long, a 1-1/2" male slip fitting on top, and a 2-1/2" open bottom with a beveled edge. Both are rated 125 sq ft. Both are tied to OEM 6540-488. Pleatco lists PSD125-2000 and Filbur lists FC-2780 against that OEM number${c('unicel26','pleatco23','filburCat')}.</p>
<p>Unicel still splits them. The note on C-8326 says it contains a core block or plug, and the fitment Unicel gives is Sundance spas before 2006. The note on C-8327 says there is no core block or plug, the fitment is Sundance spas after 2005, and Unicel also prints OEM 6540-507 on that row. A Leisure Time listing describes C-8326 and C-8327 as the same cartridge${c('ltC8327')}. Unicel does not. When a dealer treats them as one part and the manufacturer’s filter guide treats the plug as the difference, keep the plug. Look down the core of the old cartridge. If your spa is dated before 2006 and the cartridge you removed has the plug, C-8326 is the row Unicel points at. If it is after 2005 and there is no plug, C-8327 is the row. If you cannot see a plug and cannot date the spa, order by the full OEM number on the cap (6540-488 or 6540-507) and compare the new cartridge with the old one before you install it.</p>

<h2>The 65 sq ft castle-top pair: the bottom hole changes</h2>
<p><a href="/sundance/c-7465/">C-7465</a> and <a href="/sundance/c-7466/">C-7466</a> are both 7-1/2" × 14-3/4", both have a castle top, and both are rated 65 sq ft. The bottom inside diameter is the spec line that changes.</p>
<div class="tbl"><table><thead><tr><th>Unicel</th><th>OEM</th><th>Bottom</th><th>Pleatco</th><th>Filbur</th></tr></thead><tbody>
<tr><td>C-7465</td><td>6540-480</td><td>2-1/16" open</td><td>PSD65</td><td>FC-2730</td></tr>
<tr><td>C-7466</td><td>6540-481</td><td>2-5/8" open</td><td>PSD65-2</td><td>FC-2740</td></tr>
</tbody></table></div>
<p>Pleatco’s “-2” on PSD65-2 is doing the same job as the different OEM number: it marks the larger bottom opening. Filbur splits them into FC-2730 and FC-2740${c('filburCat')}. A castle top tells you that you are in this family. It does not tell you which bottom you have. Measure the open end, or read 6540-480 versus 6540-481. The fitting guide <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded filters</a> shows the same pattern on other brands.</p>

<h2>Same OEM numbers, different top: 6CH-960 and 6CH-961</h2>
<p>Jacuzzi <a href="/jacuzzi/6ch-960/">6CH-960</a> and <a href="/jacuzzi/6ch-961/">6CH-961</a> are both 6-3/4" × 15-1/2" cartridges with a 2" SAE thread, and Unicel prints the same OEM set on both rows: 6540-164, 6540-476 and 6541-383. The area on the rows is 75 sq ft, with a note that square footage is 75 or 60 depending on the OEM part number${c('unicel26')}. The tops differ. 6CH-960 is printed with a semi-circular handle. 6CH-961 is printed “open with slots,” and Unicel says it requires an injection-molded semi-circular handle that is not furnished. Pleatco splits them into PJW60TL-F2S and PJW60TL-OT-F2S. Filbur lists FC-2800 and FC-2715. If your old cartridge has the handle molded on, you are looking at the 6CH-960 description. If the top is open and the handle is a separate piece, you are looking at the 6CH-961 description. Ordering the one that does not include the handle, when yours is molded on, gives you a cap you did not have before.</p>

<h2>One Jacuzzi OEM number printed on two areas</h2>
<p>Jacuzzi OEM 373045 appears on two open-end cartridges of the same body size and different media area: <a href="/jacuzzi/c-4326/">C-4326</a> at 25 sq ft and <a href="/jacuzzi/c-4950/">C-4950</a> at 50 sq ft. Both are 4-15/16" × 13-5/16" with 2-1/8" open ends. The note on the C-4950 row says the same OEM part number is listed for 25 and 50 sq ft${c('unicel26')}. This is the upgrade pattern Unicel describes elsewhere: more pleats in the same can, which is the subject of <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters have different square-foot ratings</a>. Pleatco lists PRB25-IN and PRB50-IN for that size family. If the only number you have is 373045, you still have to know whether the cartridge you removed is the 25 sq ft or the 50 sq ft version. Count the pleats if the printing is gone. Unicel’s own lookup instructions include a pleat count within about two pleats${c('unicel26')}.</p>

<h2>J-460 and the shared 6540-series numbers</h2>
<p>Sundance and Jacuzzi Premium share a large family of 6540-series OEM numbers. <a href="/sundance/5ch-402/">Sundance 5CH-402</a> and <a href="/jacuzzi/5ch-402/">Jacuzzi 5CH-402</a> are both OEM 6540-723: 5-3/16" × 10-3/4", bar handle, 2" male MPT, 50 sq ft. Sharing the number across the two brands means the cartridge is the same row, not that every Jacuzzi takes every Sundance cartridge.</p>
<p>The opposite warning is on the J-460. Leisure Time’s listing for <a href="/jacuzzi/6ch-945/">6CH-945</a> (OEM 6540-498, 6" × 13-1/2", 2" SAE, 45 sq ft, Pleatco PJP45-F2S) says J-460 spas used several cartridges that are not interchangeable, and that you should confirm size and thread against the old filter${c('lt6ch945')}. A J-460 owner who orders “the J-460 filter” from a single photo has not finished the job. Measure length and look at the thread. The <a href="/fitment/jacuzzi-filter-by-model-year/">Jacuzzi model-year lookup</a> and the <a href="/fitment/sundance-filter-by-model-year/">Sundance lookup</a> are the indexes. <a href="/jacuzzi/">All Jacuzzi cartridges</a> and <a href="/sundance/">all Sundance cartridges</a> are the full tables.</p>

<h2>What to write down</h2>
<ol>
<li>The full OEM number, including 6540-488 versus 6540-507, 6540-480 versus 6540-481, and 6540-164 versus the other numbers on that cap.</li>
<li>Whether you can see a core plug.</li>
<li>The bottom opening or the thread, measured, not guessed from the length.</li>
<li>Whether the handle is molded on or is a separate piece.</li>
<li>The year of the spa when the Unicel note is “before 2006” or “after 2005.”</li>
</ol>
<p>Installation after you have the match is covered in <a href="/guides/how-to-install-a-hot-tub-filter/">how to install a hot tub filter</a>. If the spa throws a flow code the first time the new cartridge runs, the code list is in <a href="/guides/hot-tub-flow-error-codes-and-your-filter/">flow errors and the filter</a>.</p>`,
faq:[['Are Sundance C-8326 and C-8327 interchangeable?','They share OEM 6540-488, the 8-7/16" × 19" body, 125 sq ft, Pleatco PSD125-2000 and Filbur FC-2780. Unicel says C-8326 has a core plug (spas before 2006) and C-8327 has no core plug (spas after 2005, also OEM 6540-507). A Leisure Time listing calls them the same cartridge. Compare the plug before you treat them as identical.'],
['What is the difference between Sundance C-7465 and C-7466?','Both are 7-1/2" × 14-3/4" castle-top cartridges at 65 sq ft. C-7465 (OEM 6540-480, Pleatco PSD65, Filbur FC-2730) has a 2-1/16" bottom opening. C-7466 (OEM 6540-481, Pleatco PSD65-2, Filbur FC-2740) has a 2-5/8" bottom opening.'],
['Why does Jacuzzi OEM 373045 show 25 and 50 sq ft?','Unicel lists that OEM number on both C-4326 (25 sq ft) and C-4950 (50 sq ft). The body size is the same: 4-15/16" × 13-5/16" with 2-1/8" open ends. The media area is not. Use the part printed on your cartridge, or a pleat count, to separate them.'],
['Does every J-460 use 6CH-945?','Leisure Time warns that J-460 spas used several cartridges that are not interchangeable, and says to confirm size and thread against the old filter. 6CH-945 (OEM 6540-498) is one of the cartridges in that family, not a universal J-460 part.']],
src:['unicel26','pleatco23','filburCat','ltC8327','lt6ch945'],
related:['open-end-vs-threaded-hot-tub-filters','why-same-size-spa-filters-have-different-square-feet','how-filbur-unicel-and-pleatco-numbers-compare','how-to-install-a-hot-tub-filter','hot-tub-flow-error-codes-and-your-filter'],
pickHeading:'Search these Sundance and Jacuzzi numbers on Amazon',
picks:search('Part-number searches','Look-alike cartridges share photos. Read the OEM number in the listing title.',[
['Sundance 6540-488','6540-488 spa filter','125 sq ft body used for both C-8326 and C-8327. Check the core plug.'],
['Sundance 6540-480','6540-480 spa filter','C-7465, 2-1/16" bottom opening.'],
['Sundance 6540-481','6540-481 spa filter','C-7466, 2-5/8" bottom opening.'],
['Jacuzzi 6540-498','6540-498 spa filter','6CH-945. Confirm it against the old J-460 cartridge.'],
])},

{slug:'master-spas-eco-pur-filters',published:D,reviewed:D,
title:'Master Spas Eco-Pur filters: outer cartridges, the inner element, and the stand pipe',
desc:'Unicel’s dates and installation notes for Master Spas Eco-Pur cartridges: C-7330 (2002–2005), C-8341 (2006 on, two required), the C-3310AM inner element, and when to remove the black stand pipe.',
answer:`Unicel splits Master Spas Eco-Pur filtration into two eras. <strong>C-7330</strong> is the outer cartridge for 2002–2005 (7" × 7-1/4", 30 sq ft). <strong>C-8341</strong> is the outer cartridge from 2006 on (8" × 6-3/4", 40 sq ft), and Unicel says <strong>two</strong> of those 40 sq ft cartridges are required${c('unicel26')}. The small <strong>C-3310AM</strong> element (3-7/8" × 7", antimicrobial media) is used with either outer cartridge. On the threaded Eco-Pur replacements, Unicel says to remove the black stand pipe${c('unicel26')}.`,
body:`<h2>Eco-Pur is an assembly, not a single cartridge</h2>
<p>Master Spas cartridges fall into two groups in the Unicel 2026 guide: ordinary threaded top-load cartridges, and the Eco-Pur system, which pairs an outer cartridge with a small inner element. Ordering “a Master Spas filter” does not say which half you need, or whether the spa holds one outer cartridge or two. The notes below are Unicel’s, from the Master Spas section of the 2026 guide and the spec table${c('unicel26')}.</p>
<div class="tbl"><table><thead><tr><th>Unicel</th><th>Role Unicel gives it</th><th>Size</th><th>Ends</th><th>Pleatco / Filbur</th></tr></thead><tbody>
<tr><td><a href="/master-spas/c-7330/">C-7330</a></td><td>Eco-Pur outer, 2002–2005</td><td>7" × 7-1/4", 30 sq ft</td><td>4-1/8" open both ends</td><td>PMA30-2002-R / FC-1003</td></tr>
<tr><td><a href="/master-spas/c-8341/">C-8341</a></td><td>Eco-Pur outer, 2006 to present; two 40 sq ft cartridges required</td><td>8" × 6-3/4", 40 sq ft</td><td>4" open with a raised ring, both ends</td><td>PMA45-2004-R / FC-1007</td></tr>
<tr><td><a href="/master-spas/c-3310am/">C-3310AM</a></td><td>Antimicrobial inner element, used with C-7330 or C-8341</td><td>3-7/8" × 7", 8 sq ft</td><td>2-3/16" open both ends</td><td>PMA10; no Filbur number on our row</td></tr>
</tbody></table></div>
<p>Count what comes out of the housing. If you remove two large cartridges and one slim element, that is the C-8341 arrangement Unicel describes, and you replace both outers plus the inner on its own schedule. If you remove one outer and one inner from a 2002–2005 system, C-7330 is the outer Unicel names. The diameters differ (7" versus 8"), so a 2002 outer does not take the place of a 2006 outer. Pleatco’s numbers carry the year in the part itself: PMA30-2002-R and PMA45-2004-R${c('pleatco23')}. Filbur lists FC-1003 and FC-1007${c('filburCat')}.</p>
<p>C-3310AM is not a substitute for the outer. It is 3-7/8" across. Unicel calls out antimicrobial media and says it is used with a C-7330 or a C-8341${c('unicel26')}. Replacing only the inner leaves the outer media in place. Replacing only the outer leaves the inner element in place. They are different part numbers because they are different pieces.</p>

<h2>The stand-pipe note on the threaded replacements</h2>
<p>Other Master Spas rows are threaded cartridges rather than the open-end Eco-Pur outers, and Unicel attaches an installation note to them.</p>
<ul>
<li><a href="/master-spas/6ch-352/">6CH-352</a>, OEM PMA-R1. 6" × 8", semi-circular handle, 2" male MPT, 35 sq ft, Pleatco PAS40-F2M. Unicel says to remove the black stand pipe. Filbur cross-references 6CH-352 to FC-0312 but lists FC-0312 at 6" × 7", not 6" × 8"${c('unicel26','filburCat')}. When the two catalogs disagree on length, measure the cartridge you removed. Do not average 7" and 8" into a length neither book printed.</li>
<li><a href="/master-spas/7ch-322/">7CH-322</a>. 7" × 8", semi-circular handle, 2" male MPT, 32 sq ft on our row, Pleatco PAS35-F2M, Filbur FC-0420. Unicel says it is a replacement for 7" or 8" OD Eco-Pur systems, and to remove the black stand pipe for an 8" OD system${c('unicel26')}.</li>
<li><a href="/master-spas/4ch-935/">4CH-935</a> and <a href="/master-spas/4ch-949/">4CH-949</a> are Unicel’s replacements for 5" OD Eco-Pur systems. 4CH-935 is 4-15/16" × 9-1/4". 4CH-949 is 4-15/16" × 13-1/2". Neither row has an OEM number in our table, and Unicel says to verify the overall length. “Verify OAL” means measure. A 9-1/4" cartridge and a 13-1/2" cartridge are both 4-15/16" in diameter and they are not the same part.</li>
</ul>
<p>The stand pipe is a plastic tube in the filter well. Unicel’s instruction is to remove it when you install these replacements. That instruction is on the cartridge, not a general rule for every Master Spas model. If your housing does not have a black stand pipe, there is nothing to remove. If it does, and you are installing 6CH-352 or an 8" application of 7CH-322, the note says it comes out${c('unicel26')}. Forcing a threaded cartridge down over a stand pipe the note says to remove is how a new filter fails to seat.</p>

<h2>How this differs from “buy a spare”</h2>
<p>A second set of cartridges, which Unicel, Pleatco and Jacuzzi recommend so one set can soak while the other is in the spa, is a spare${c('unicel','pleatcoCat','jac')}. Two C-8341 cartridges in the housing at the same time are not a spare. They are the system Unicel says the 2006-and-later Eco-Pur filter uses. Buy two outers because the housing holds two, and keep a further spare only if you want one soaking. The guide to that distinction, including Hot Spring’s three-cartridge wells, is <a href="/guides/spas-that-use-more-than-one-filter/">spas that use more than one filter</a>.</p>

<h2>What to check before you order</h2>
<ol>
<li>Count the large cartridges and look for a slim inner element.</li>
<li>Measure the outer diameter: about 7" points at C-7330, about 8" at C-8341, about 6" at 6CH-352, about 4-15/16" at the 4CH Eco-Pur replacements.</li>
<li>Read any OEM number, especially PMA-R1.</li>
<li>If the spa is around 2005 or 2006, use the year Unicel prints rather than a photo of “an Eco-Pur filter.”</li>
<li>Read the stand-pipe note on the page for the part you are about to buy.</li>
<li>Use the <a href="/fitment/master-spas-filter-by-model-year/">Master Spas filter by series and year</a> lookup, then the <a href="/master-spas/">Master Spas brand table</a> for the rows that have no year.</li>
</ol>
<p>Threaded versus open ends are covered in <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded hot tub filters</a>. Length disagreements between catalogs are the same problem as the square-foot disagreements in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters differ</a>: the outside dimensions in the two books are not always identical, so the cartridge in your hand is the measurement that counts.</p>`,
faq:[['How many filters does a Master Spas Eco-Pur system use?','Unicel says the 2006-and-later outer cartridge, C-8341, is used two at a time (40 sq ft each). The inner element C-3310AM is used with that outer, or with the 2002–2005 outer C-7330. Count the pieces in your housing.'],
['What is the Master Spas black stand pipe note?','On 6CH-352, Unicel says to remove the black stand pipe. On 7CH-322, Unicel says to remove it for an 8" OD Eco-Pur system. The note is about those replacements, not a rule we found for the open-end C-7330 and C-8341 cartridges.'],
['Why does Filbur list a different length for 6CH-352?','Unicel’s row for 6CH-352 is 6" × 8". Filbur cross-references it to FC-0312 and lists FC-0312 at 6" × 7". Measure the old cartridge instead of picking one catalog’s length.'],
['Is C-3310AM a full-size replacement filter?','No. Unicel lists it as an antimicrobial inner element, 3-7/8" × 7", used together with outer cartridge C-7330 or C-8341. It does not replace the outer.']],
src:['unicel26','pleatco23','filburCat','unicel','pleatcoCat','jac'],
related:['spas-that-use-more-than-one-filter','open-end-vs-threaded-hot-tub-filters','how-filbur-unicel-and-pleatco-numbers-compare','why-same-size-spa-filters-have-different-square-feet','how-to-install-a-hot-tub-filter'],
pickHeading:'Search Master Spas Eco-Pur numbers on Amazon',
picks:search('Part-number searches','A search may return one cartridge when the housing holds two. Read Unicel’s “two required” note before you buy a single C-8341.',[
['Unicel C-8341','C-8341 spa filter','8" Eco-Pur outer, 2006 on. Unicel says two are required.'],
['Unicel C-7330','C-7330 spa filter','7" Eco-Pur outer, 2002–2005.'],
['Unicel C-3310AM','C-3310AM spa filter','Inner antimicrobial element used with the outer cartridge.'],
['Master Spas PMA-R1','PMA-R1 spa filter','OEM number Unicel lists for 6CH-352.'],
])},

{slug:'how-to-install-a-hot-tub-filter',published:D,reviewed:D,
title:'How to install a hot tub filter cartridge',
desc:'The install steps that Hot Spring, Jacuzzi, Sundance and Unicel actually print: power off, match the ends, do not overtighten, do not run the spa with the cartridge out, and keep a second set.',
answer:`Turn the spa off, put the new cartridge in the same orientation as the one you removed, and do not overtighten the retainer. Hot Spring’s manual says to cut power before you remove filters, not to use the spa with the cartridge removed, and not to overtighten the filter retainer${c('hsManual')}. Jacuzzi says the same about power and about running with no filter, because debris then goes to the pump and heater, and it says to keep a second cartridge so the spa is never filter-less while one soaks${c('jac')}.`,
body:`<h2>Before you open the well</h2>
<p>Installation starts with the right part, not with the lid. If you are not sure the new cartridge matches, stop and use the <a href="/">part-number search</a> or the <a href="/guides/how-to-find-your-spa-filter-size/">size guide</a>. A cartridge that is close in length and wrong on the bottom will sit in the housing and not seal. Which ends the catalogs care about is covered in <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded hot tub filters</a>.</p>
<p>Then make the spa safe to open. Hot Spring’s Hot Spot collection manual and Jacuzzi’s filter instructions both say to turn the power off before you remove the filter${c('hsManual','jac')}. Jacuzzi’s reason is specific: it stops the pump from starting while your hands are in the well, and it avoids pulling air into the plumbing. Sundance’s air-lock procedure has you take the filter out only with the power off, purge the air, and put the filter back before you restore power${c('sd780')}.</p>

<h2>The steps the manuals share</h2>
<ol>
<li><strong>Power off</strong> at the spa’s disconnect or the breaker the manual names, not only by setting the jets to zero${c('hsManual','jac')}.</li>
<li><strong>Lift the old cartridge</strong> the way that spa is built. Handle-top cartridges lift by the handle. Open-end cartridges slide off a standpipe. Unicel’s general instruction is to remove the cartridge following the spa maker’s instructions${c('unicel')}.</li>
<li><strong>Look at which end was up.</strong> The spec table’s “top” is the end that faced you: a handle, an open hole of a stated size, or a closed cap. Put the new cartridge back the same way. On a threaded bottom, the thread goes onto the fitting you just unscrewed the old one from. On a male-slip bottom, the stub goes into the receiver. Do not flip an open-end cartridge end for end if the two holes are different sizes. Sundance C-8326, for example, has a 1-1/2" male slip on one end and a 2-1/2" opening on the other${c('unicel26')}.</li>
<li><strong>Seat it and snug the retainer.</strong> Hot Spring says not to overtighten the filter retainer${c('hsManual')}. Cracking an end cap by cranking the retainer is a failed install, not a tighter seal.</li>
<li><strong>Restore power only after the cartridge is in.</strong> Sundance’s purge steps end with the filter reinstalled before power returns${c('sd780')}. Hot Spring says not to use the spa with the cartridge removed${c('hsManual')}. Jacuzzi advises against running with no filter installed${c('jac')}.</li>
<li><strong>Watch the first cycle.</strong> A flow error right after a filter change is often air or water level, not a bad new cartridge. The code-by-code version is <a href="/guides/hot-tub-flow-error-codes-and-your-filter/">hot tub flow errors and your filter</a>.</li>
</ol>

<h2>If the housing holds more than one</h2>
<p>Some spas do not hold a single cartridge. The Leisure Time listing for Hot Spring OEM 71825 says many of those models take three of the 6" cartridges${c('lt71825')}. Unicel says Master Spas Eco-Pur systems from 2006 on require two C-8341 cartridges, plus the separate inner element${c('unicel26')}. Sundance’s 680 and 780 manuals describe a pleated outer filter and a disposable MicroClean insert, and they give those two pieces different replacement intervals${c('sd680','sd780')}. Count the pieces you removed. Install the same count. A guide to those systems is <a href="/guides/spas-that-use-more-than-one-filter/">spas that use more than one filter</a>.</p>
<p>The insert is not cleaned like the outer cartridge. Sundance says never to use filter cleaners on the inner inserts, and its 680 manual specifies a low-pressure rinse and no chemicals on the insert, while the outer pleated filter is the one that gets a stronger hose rinse${c('sd680')}. Putting the insert through the degreaser soak Unicel describes for a pleated cartridge is the wrong procedure for that piece.</p>

<h2>The second cartridge is a spare, not a stack</h2>
<p>Unicel, Pleatco and Jacuzzi all tell owners to alternate two sets so one can be cleaned and dried while the other is in the spa${c('unicel','pleatcoCat','jac')}. Jacuzzi says a filter can go back in damp, and that letting a set dry completely is what extends its life. That second set lives on a shelf. It is not a second cartridge shoved into a housing designed for one, unless the spa’s own list says the housing holds two or three. Buying a two-pack of an Intex S1 cartridge is the same idea: the pack is spares of one type, and Intex’s lists still require you to pick S1 or S2. See <a href="/guides/intex-and-bestway-inflatable-spa-filters/">Intex and Bestway filters</a>.</p>

<h2>What not to do in the same visit</h2>
<ul>
<li>Do not run the pump “just to test” with the well empty. That is the thing Jacuzzi and Hot Spring say not to do${c('jac','hsManual')}.</li>
<li>Do not acid-wash a new cartridge. Acid is Unicel’s last step for mineral scale on a cartridge you are trying to save, and only after a degrease. Unicel calls acid washing a leading cause of early cartridge failure${c('unicel')}. A new cartridge does not need it. The full caution is in <a href="/guides/should-you-acid-wash-a-spa-filter/">should you acid wash a spa filter?</a></li>
<li>Do not put any cartridge in a dishwasher. Jacuzzi says dishwashers and washing machines can warp end caps and do not clean between the pleats${c('jac')}.</li>
<li>Do not ignore a retainer that will not close. If the lid or the retainer will not seat, the cartridge is too long, the handle is on the wrong end, or a stand pipe Unicel told you to remove is still in the well. Master Spas notes that stand pipe on specific part numbers${c('unicel26')}. See <a href="/guides/master-spas-eco-pur-filters/">Master Spas Eco-Pur filters</a>.</li>
</ul>

<h2>After it is in</h2>
<p>Rinse residue matters on a cartridge you just cleaned, more than on one fresh from the package. Jacuzzi warns that cleaner left in the media foams once the jets run${c('jac')}. If you installed a cartridge that has been soaking, rinse it until the water runs clear, using the top-down hose method Unicel and Pleatco describe${c('unicel','pleatcoCat')}. Then balance the water. A new filter does not set pH. Hot Spring’s published ranges for its own spas are a separate job, covered in <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">how to balance pH and alkalinity</a>.</p>
<p>Replace, rather than reinstall, when the media is torn, the core is collapsed, or cleaning no longer restores flow${c('unicelReplace','pleatcoCat')}. Those signs are listed in <a href="/guides/signs-your-hot-tub-filter-is-bad/">signs your hot tub filter is bad</a>. Intervals by brand are in <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>.</p>`,
faq:[['Should the hot tub be on while I change the filter?','No. Hot Spring and Jacuzzi both say to turn the power off before you remove the filter. Sundance’s air-lock steps put the filter back in before power is restored.'],
['Can I run the spa for a minute with the filter out to see if the flow error clears?','The manuals we checked say not to. Jacuzzi advises against running with no filter because debris reaches the pump and heater. Hot Spring says not to use the spa with the cartridge removed. Sundance has you reinstall the filter before turning power back on.'],
['How tight should the filter retainer be?','Hot Spring says not to overtighten it. Snug enough that the cartridge is seated. A retainer that only closes when you force it usually means the cartridge is the wrong length or the wrong way up.'],
['Do I need two filters installed at once?','Only if the spa was built that way. Some Hot Spring models are listed as holding three of the 6" cartridges, and Unicel says later Master Spas Eco-Pur systems require two outer cartridges. A second set for rotating while one soaks is a spare on the shelf, which Unicel, Pleatco and Jacuzzi recommend, and it is not the same thing.']],
src:['hsManual','jac','sd780','sd680','unicel','unicel26','pleatcoCat','unicelReplace','lt71825'],
related:['how-to-clean-a-hot-tub-filter','clogged-or-missing-hot-tub-filter','spas-that-use-more-than-one-filter','hot-tub-flow-error-codes-and-your-filter','open-end-vs-threaded-hot-tub-filters','signs-your-hot-tub-filter-is-bad'],
pickHeading:'Search replacement cartridges on Amazon',
picks:search('Part-number searches','Install the part that matches the old cartridge. These buttons only open a search.',[
['Unicel C-6430','C-6430 spa filter','A common Hot Spring open-end cartridge. Some listings of this size are used three at a time.'],
['Unicel C-4950','C-4950 spa filter','4-15/16" × 13-5/16" open-end cartridge used by several brands.'],
['Unicel C-7350','C-7350 spa filter','Caldera 7" open-bottom cartridge.'],
['Intex 29001E','Intex 29001E Type S1','Inflatable PureSpa S1 twin pack, not a hardshell cartridge.'],
])},

{slug:'clogged-or-missing-hot-tub-filter',published:D,reviewed:D,
title:'What a clogged or missing hot tub filter does',
desc:'Why Hot Spring, Jacuzzi, Sundance, Gecko and the CDC treat a dirty cartridge as a flow and water-quality problem, and why the manuals say not to run the spa with the filter removed.',
answer:`A clogged cartridge restricts flow. Hot Spring says that can weaken the jets, limit circulation, and trip the high-limit thermostat so the spa shuts off${c('hsManual')}. Jacuzzi lists cloudy water, a musty odor, and FLO or low-flow errors, and says not to run the spa with no filter installed because unfiltered water carries debris into the pump and heater${c('jac')}. The CDC’s hot-tub Legionella guidance includes replacing cartridges on the manufacturer’s schedule as part of controlling germs${c('cdcLeg')}.`,
body:`<h2>A filter is a restriction on purpose, until it is too much</h2>
<p>Pleated media works by catching oils, lotions, scale and fine particles. Unicel’s point is that the cartridge does not have a moving part that fails on a date. It plugs${c('unicelReplace')}. Some of that loading is the filter doing its job. Unicel also says cleaning too often can lower efficiency, because the cartridge uses the debris it has caught, and cleaning too rarely shortens the cartridge’s life${c('unicel')}. The failure is the point where flow no longer recovers after a proper clean, or the media itself is torn or the core has collapsed${c('unicelReplace','pleatcoCat')}.</p>
<p>You can see the early stage before a code appears. Jets feel weaker. The spa is louder or the water looks dull. Jacuzzi names cloudy water and a musty odor that survive a normal clean, limp pleats that do not spring back, cracked end caps, and a flow error that returns immediately after cleaning${c('jac')}. Hot Spring names discolored or worn media as a reason to replace, with the caution that color alone is not the whole test: Pleatco says white does not mean clean, and that media can discolor with age${c('hsBlog','pleatcoWash')}. The checklist is in <a href="/guides/signs-your-hot-tub-filter-is-bad/">signs your hot tub filter is bad</a>.</p>

<h2>What the control systems do when flow drops</h2>
<p>Heaters in these spas are not supposed to fire when water is not moving. The panel messages are the control system saying it cannot see that flow. They are not a filter brand.</p>
<ul>
<li>Hot Spring’s Hot Spot manual says a clogged filter can reduce jet performance, limit flow, and trip the high-limit thermostat${c('hsManual')}. The 2023 Highlife manual’s E2 message is literally “NO FLOW-CHECK FILTER,” with the heater off, and it tells the owner to check and clean the filter and to call for service if the heater trips often${c('hsHighlife')}.</li>
<li>Sundance’s 2024 780 manual lists an excessively dirty filter as one cause of FL--1 (flow switch open), along with a bad switch or an air lock. FL--3 tells you to clean the filters and correct the water level before you call the dealer${c('sd780')}.</li>
<li>Gecko’s troubleshooting guide for its Y-series and in.xe systems says FLO means no flow was detected while the main pump runs, and its HL (high-limit) note tells you to make sure nothing is blocking flow, including a dirty filter or a closed valve${c('geckoTS')}.</li>
<li>Balboa’s TP600/TP400 guide uses HFL for reduced heater flow and LF when flow stays too low for the heater. Its checks start with low water, closed valves and too many closed jets, which sit alongside a blocked filter as reasons water is not moving${c('balboaTP')}.</li>
</ul>
<p>The code-by-code order of checks is already written up in <a href="/guides/hot-tub-flow-error-codes-and-your-filter/">hot tub flow errors and your filter</a>. The short version: power off, confirm the water level, clean or replace the cartridge, purge air, open valves, then reset the way that control describes. If the error survives a clean cartridge and a full water level, Jacuzzi and Sundance say to call a dealer${c('jac','sd780')}.</p>

<h2>Taking the filter out is not a test</h2>
<p>It is tempting to pull the cartridge, turn the jets on, and see if the error goes away. That tells you the cartridge was a restriction. It also runs the spa with no filtration, which is the state the manuals reject.</p>
<ul>
<li>Jacuzzi advises against running with no filter installed. Unfiltered water carries contaminants to the pumps and the heater. Jacuzzi’s alternative is a second, clean cartridge you can swap in${c('jac')}.</li>
<li>Hot Spring says not to use the spa with the cartridge removed${c('hsManual')}.</li>
<li>Sundance’s air-lock fix has the filter out only while you purge, and back in before power is on${c('sd780')}.</li>
</ul>
<p>If you need the spa tonight and the cartridge is soaking, the second set is the supported method. Unicel and Pleatco describe the same rotation: one set in the spa, one set drying after a soak of at least an hour${c('unicel','pleatcoCat')}. How to put the spare in without forcing the retainer is <a href="/guides/how-to-install-a-hot-tub-filter/">how to install a hot tub filter</a>.</p>

<h2>Water quality is the other half of a missing filter</h2>
<p>Flow codes are the mechanical symptom. The CDC’s hot-tub module on Legionella treats filtration as part of germ control, and it tells operators to replace cartridges according to the manufacturer${c('cdcLeg')}. The CDC’s hot-tub rash page tells bathers and operators to keep disinfectant and pH in range, which a filter does not do by itself${c('cdcRash')}. A torn cartridge and a sanitizer at zero are two different failures. Test the water. Hot Spring’s published owner ranges are free chlorine 1–5 ppm, pH 7.2–7.8, total alkalinity 40–120 ppm and calcium hardness 75–150 ppm on a standard system${c('hsChem')}. CDC’s rash page uses a free-chlorine floor of at least 3 ppm for hot tubs and a bromine range of 4–8 ppm, and its pH band on that page is 7.0–7.8, which is not identical to Hot Spring’s 7.2–7.8${c('cdcRash')}. Follow the manual for your spa when the numbers differ. The order of balancing is in <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">how to balance pH and alkalinity</a>, and sanitizer choices are in <a href="/guides/best-hot-tub-sanitizer-bromine-chlorine-mineral/">bromine, chlorine and mineral systems</a>.</p>
<p>Cloudy water has a filter chapter and a chemistry chapter. Jacuzzi lists it as a filter symptom when it persists after the water is balanced${c('jac')}. If the water is cloudy and the test strip says the sanitizer is at zero, fix the sanitizer. If the sanitizer is in range and the pleats are crushed, replace the cartridge. Doing only one of those leaves the other problem in the tub.</p>

<h2>How a cartridge gets to that state</h2>
<p>Heavy bather loads, oils and unbalanced water are the loads Pleatco and Unicel name${c('pleatcoCat','unicel')}. Hot Spring notes that more use means more frequent cleaning${c('hsBlog')}. Jacuzzi’s baseline for a family tub is a weekly rinse and a deep clean every 4–6 weeks, sooner with heavy use${c('jac')}. Cleaning technique matters as much as the calendar. A pressure washer or a stiff brush can tear the media Pleatco says not to scrub, and a torn cartridge bypasses in the sense that water takes the hole instead of the pleat${c('pleatcoCat','jac')}. Acid washing before the oils are removed is the failure Unicel flags as causing a permanent restriction${c('unicel')}. The procedures, including what not to soak in, are in <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a> and <a href="/guides/spa-filter-cleaner-vs-diy-soak/">filter cleaner vs DIY soaks</a>.</p>
<p>Replacement intervals are not one number. Jacuzzi says 12–24 months for pleated cartridges. Hot Spring says 2–3 years for a standard polyester cartridge and 4–6 years for TRI-X, while its maintenance page says three years${c('jac','hsBlog','hsMaint')}. Disposable inserts are on a much shorter clock: Sundance’s 780 manual says every 3 months for the small MicroClean cartridge, and the 680 manual says every 4 months for the Mini insert${c('sd780','sd680')}. When the interval has passed and the flow codes have started, cleaning is the experiment and replacement is the result if flow does not return. Search the part from the <a href="/">homepage</a>.</p>`,
faq:[['Can a dirty filter shut a hot tub off?','Yes. Hot Spring says a clogged filter can trip the high-limit thermostat. Its Highlife manual’s E2 message tells you to check the filter. Gecko’s HL note and Sundance’s FL--1 message also name a blocked or excessively dirty filter.'],
['Should I remove the filter to test whether it is the problem?','Do not run the spa that way. Jacuzzi, Hot Spring and Sundance all have you put a filter back in before the spa runs. Use a second, clean cartridge if you need the spa while one is soaking.'],
['Does a new filter fix cloudy water by itself?','Only if the filter was the cause. Jacuzzi lists persistent cloudiness, after the water is balanced, as a filter symptom. If a test shows the sanitizer is low, the CDC and Hot Spring ranges say to correct that too. A cartridge does not add chlorine or bromine.'],
['How do I know the cartridge is finished rather than dirty?','Unicel and Pleatco point to shorter times between cleanings, flow that stays low, torn media or a collapsed core. Jacuzzi adds pleats that stay limp, cracked end caps, odor that survives cleaning, and flow errors that come back right after a clean.']],
src:['hsManual','hsHighlife','hsBlog','hsMaint','hsChem','jac','sd780','sd680','geckoTS','balboaTP','cdcLeg','cdcRash','unicel','unicelReplace','pleatcoCat','pleatcoWash'],
related:['hot-tub-flow-error-codes-and-your-filter','signs-your-hot-tub-filter-is-bad','how-to-clean-a-hot-tub-filter','how-to-install-a-hot-tub-filter','how-often-to-replace-hot-tub-filter','how-often-to-clean-hot-tub-filter'],
pickHeading:'Filters and the cleaner you use before you replace one',
picks:[
{h:'Search common replacement cartridges',intro:'If cleaning no longer restores flow, search the part number from your old cartridge. These are searches, not checked listings.',search:[
['Unicel C-6430','C-6430 spa filter','Hot Spring 6" × 10-1/2" open-end cartridge.'],
['Unicel C-8465','C-8465 spa filter','Hot Spring 8-1/2" × 10-1/2" cartridge.'],
['Unicel C-4950','C-4950 spa filter','4-15/16" × 13-5/16" cartridge used across several brands.'],
]},
{h:'A cleaner for the soak, if the cartridge is still worth saving',intro:'Unicel and Pleatco describe a degreasing soak of at least an hour before you decide the cartridge is finished.',keys:['lt-filter-clean-o','spaguard-filter-cleaner']},
]},

{slug:'how-filbur-unicel-and-pleatco-numbers-compare',published:D,reviewed:D,
title:'How Filbur, Unicel and Pleatco numbers compare on the same spa filter',
desc:'What an OEM number, a Unicel C-number or CH-number, a Pleatco P-number and a Filbur FC-number each refer to, with rows where the three catalogs agree and rows where they do not.',
answer:`They are four names for a match, not four shapes. The spa maker’s <strong>OEM</strong> number is the one molded for that brand. <strong>Unicel</strong> prints a C-number or a CH-number. <strong>Pleatco</strong> prints a P-number and a cross-reference to the Unicel number. <strong>Filbur</strong> prints an FC-number in its own catalog${c('unicel26','pleatco23','filburCat')}. When the size and the ends agree, the numbers are equivalents. When a catalog prints a different length or a different area, the page on this site says so instead of hiding the conflict.`,
body:`<h2>Four columns, one cartridge</h2>
<p>Retail sites often list a single part number and a photo. The catalogs list the same physical cartridge once for each company that sells it. Our cartridge pages put those numbers in one place so you can search whichever one is still readable. The columns are:</p>
<ul>
<li><strong>OEM.</strong> The spa maker’s number. Hot Spring 31489, Caldera 74148, Sundance 6540-488, Softub 90-802, Bullfrog 10-2870. Some cartridges accumulated several OEM numbers over the years. C-6430’s row prints 31489, 71825 and 71826${c('unicel26')}.</li>
<li><strong>Unicel.</strong> Usually C- followed by four digits (C-6430, C-4950) or a size-series CH number (4CH-35, 6CH-940, 8CH-951). The 2026 Replacement Guide is both a cross-reference, by spa brand, and a spec table of diameter, length, ends, pleats and area${c('unicel26')}.</li>
<li><strong>Pleatco.</strong> A P-number such as PWK30-4, PRB35-IN, PCD50N or PSD125-2000. The 2023 catalog includes a Unicel-to-Pleatco cross-reference and its own spec tables${c('pleatco23')}.</li>
<li><strong>Filbur.</strong> An FC-number such as FC-3915 or FC-2780, in the Filbur Catalog and Reference Guide, which also sorts parts by spa manufacturer${c('filburCat')}.</li>
</ul>
<p>A worked example that agrees: Hot Spring OEM 31489 / 71825 / 71826, Unicel C-6430, Pleatco PWK30-4, Filbur FC-3915. All three catalogs are cited on the <a href="/hot-spring/c-6430/">C-6430 page</a> for a 6" × 10-1/2" cartridge open 1-15/16" at both ends, 30 sq ft. Another that agrees: Caldera OEM 74148, Unicel C-4335, Pleatco PRB35-IN, a 4-15/16" × 9-1/4" cartridge with 2-1/8" open ends. Searching any one of those strings from the <a href="/">homepage</a> should land on the same family of pages. <a href="/guides/oem-vs-unicel-vs-pleatco-spa-filters/">OEM vs Unicel vs Pleatco</a> is the shorter version of this idea. This page adds Filbur and the rows where the books diverge.</p>

<h2>Where the catalogs agree on size and disagree on a detail</h2>
<p>Agreement on the body is not agreement on every cell.</p>
<ul>
<li><strong>Softub 90-802.</strong> Unicel 6CH-25, Pleatco PTL20W-SV-P4 and Filbur FC-0305 all print 6" × 5-1/2" with a handle and a 1-1/2" MPT bottom. Unicel and Filbur rate it at 25 sq ft. Pleatco rates the same OEM number at 20 sq ft${c('unicel26','pleatco23','filburCat')}. The <a href="/softub/6ch-25/">Softub page</a> keeps the disagreement visible. Size, OEM number and fitting are the match. Area is not a single number.</li>
<li><strong>Intex S1.</strong> Unicel C-4317 and Pleatco PIN4PAIR agree on 4-1/4" × 2-15/16". They do not agree on the end opening (2-1/16" versus 1-5/8")${c('unicel26','pleatco23')}. Details are in <a href="/guides/intex-and-bestway-inflatable-spa-filters/">Intex and Bestway filters</a>.</li>
<li><strong>Master Spas 6CH-352.</strong> Unicel prints 6" × 8". Filbur’s cross-reference to FC-0312 prints 6" × 7"${c('unicel26','filburCat')}. Measure. The Eco-Pur context is in <a href="/guides/master-spas-eco-pur-filters/">Master Spas Eco-Pur filters</a>.</li>
<li><strong>Hot Spring 78161 / 1642301-1.</strong> Unicel offers C-6350 at 50 sq ft and C-6355 at 75 sq ft, both 6" × 14". Pleatco lists PWK35B at 35 sq ft and 6-3/8" × 14". A dealer page lists 50 sq ft and a slightly different OD again${c('unicel26','pleatco23','lt78161')}. We do not collapse those into one rating. See <a href="/guides/hot-spring-filter-sizes-by-collection/">Hot Spring sizes by collection</a>.</li>
</ul>
<p>Unicel’s area formula — pleat count times two, times pleat height, times usable length, divided by 144 — is why two honest measurements of “the same” cartridge can still print different square footage when the pleat count differs${c('unicel26')}. <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">Why same-size filters differ</a> walks through the groups in the spec table, including Unicel’s own upgrade notes such as C-4637 for a 25 sq ft cartridge of the same outside size.</p>

<h2>When a column is blank on purpose</h2>
<p>A blank is not a zero. It means that catalog did not give us a number we are willing to print.</p>
<ul>
<li><a href="/hot-spring/c-6350/">C-6350</a> has no Pleatco equivalent on the page, because PWK35B’s printed size and area do not match that Unicel row.</li>
<li><a href="/intex/29012e/">Intex 29012E</a> and <a href="/bestway/58323/">Bestway Type VI</a> have no Unicel, Pleatco or Filbur numbers. They are not in those books. The manufacturer pages identify them.</li>
<li>Bullfrog <a href="/bullfrog/pbf17/">PBF17</a> and <a href="/bullfrog/pbf40/">PBF40</a> are Pleatco coreless parts with no Unicel number in the 2026 guide. Inventing a C-number would make the search box lie.</li>
<li>Some rows are marked unverified and kept out of the search index when we have only one source or the sources conflict on the OEM number. The <a href="/data/">dataset</a> still lists them, with the citation, so you can see the gap. The <a href="/about/#methodology">methodology</a> is the rule we use.</li>
</ul>

<h2>What the spa maker says about “equivalent”</h2>
<p>A cross-reference is the filter maker’s statement that its cartridge matches the OEM part’s size and fittings. It is not the spa maker’s statement that the aftermarket part is the one they want in the spa. Hot Spring’s maintenance page says to replace with genuine Watkins filters${c('hsMaint')}. Jacuzzi recommends filters designed for the specific model${c('jac')}. Check the warranty before you switch. We are not Watkins, Jacuzzi, Unicel, Pleatco or Filbur, and the pages do not say an aftermarket cartridge is “genuine.” They say which numbers the catalogs tie together.</p>
<p>Filbur’s catalog is doing the same kind of work as the other two. On Marquis cartridges it lists the brand as Pacific Marquis, which is why a search for a Marquis OEM number can land on an FC-number you have not seen on the spa. The Marquis rows on this site cite that naming. If Filbur’s length or area differs from Unicel’s, the cartridge page carries the note, the way the Master Spas 6CH-352 page does.</p>

<h2>How to use the numbers you can still read</h2>
<ol>
<li>Search the string on the cap, whatever prefix it has. C-, FC-, P-, PRB, PCD, PWK, 6540- and a plain OEM code all go through the same box.</li>
<li>Read all four columns on the page you land on. If one is blank, believe the blank.</li>
<li>Read the size line and the top and bottom. Equivalence means those match, not merely that two brands sell “a filter for this spa.”</li>
<li>If two pages share an OEM number and not an area or a plug or a bottom hole, open both. Sundance C-8326 and C-8327, and Jacuzzi C-4326 and C-4950, are the cases in <a href="/guides/sundance-and-jacuzzi-look-alike-filters/">look-alike Sundance and Jacuzzi filters</a>.</li>
<li>Then use the retailer buttons on that cartridge page if you want to shop. A search for a Unicel number and a search for the OEM number should be the same physical cartridge only when our page says they are equivalents.</li>
</ol>
<p>The whole table, including a source for every row, is the <a href="/data/">downloadable dataset</a>. If a number on your cartridge is missing, the correction address is on the <a href="/about/#corrections">corrections policy</a>.</p>`,
faq:[['Is a Filbur FC-number the same filter as a Unicel C-number?','When our page lists them on the same row, Filbur’s catalog and Unicel’s guide are cross-referencing the same OEM part. Confirm the diameter, length and ends. On Master Spas 6CH-352, Filbur’s FC-0312 is printed at 6" × 7" while Unicel prints 6" × 8", so the cross-reference is not a perfect size match and the page says so.'],
['Why does one spa filter have three OEM numbers?','Spa makers supersede numbers. Unicel prints 31489, 71825 and 71826 together for C-6430. Any one of those should bring you to the same cartridge page. The number on your cap is the one to compare with a retail listing.'],
['Are Unicel and Pleatco the OEM filter?','No. They are aftermarket manufacturers that publish cross-reference tables. Hot Spring tells owners to use genuine Watkins filters, and Jacuzzi recommends the filter designed for the model. A cross-reference matches size and fittings; it does not make the cartridge a Watkins or Jacuzzi part.'],
['What if Pleatco has no number for my Unicel filter?','Then we leave the Pleatco column blank. C-6350 is blank because Pleatco’s PWK35B does not match Unicel’s size and area for that row. Intex S2 and Bestway Type VI are blank because those parts are not in the Pleatco catalog at all.']],
src:['unicel26','pleatco23','filburCat','lt78161','hsMaint','jac'],
related:['oem-vs-unicel-vs-pleatco-spa-filters','why-same-size-spa-filters-have-different-square-feet','sundance-and-jacuzzi-look-alike-filters','hot-spring-filter-sizes-by-collection','open-end-vs-threaded-hot-tub-filters','master-spas-eco-pur-filters'],
pickHeading:'Search one number from each catalog',
picks:search('Part-number searches','These are the same Hot Spring cartridge under three catalog numbers, plus a Caldera OEM number. Compare the listing title with the cartridge page.',[
['OEM 31489','31489 spa filter','Hot Spring OEM number for the 6" × 10-1/2" cartridge.'],
['Unicel C-6430','C-6430 spa filter','Unicel’s number for that same cartridge.'],
['Pleatco PWK30-4','PWK30-4 spa filter','Pleatco’s number for that same cartridge.'],
['Filbur FC-3915','FC-3915 spa filter','Filbur’s number for that same cartridge.'],
])},

{slug:'spas-that-use-more-than-one-filter',published:D,reviewed:D,
title:'Spas that use more than one filter cartridge at the same time',
desc:'When a hot tub holds two or three cartridges at once, when a slim insert sits inside a pleated filter, and when a second cartridge is only a spare on the shelf.',
answer:`Some housings are built for more than one cartridge. Leisure Time’s listing for Hot Spring OEM 71825 says many of those models take <strong>three</strong> of the 6" cartridges${c('lt71825')}. Unicel says Master Spas Eco-Pur systems from 2006 on require <strong>two</strong> C-8341 cartridges, and a separate inner element is used with them${c('unicel26')}. Sundance’s 680 and 780 manuals describe a pleated filter plus a disposable MicroClean insert, on two different replacement clocks${c('sd680','sd780')}. A second set you rotate while one soaks is a spare, which Unicel, Pleatco and Jacuzzi recommend, and it is not the same as a housing that holds two${c('unicel','pleatcoCat','jac')}.`,
body:`<h2>Three different meanings of “two filters”</h2>
<p>Owners get sold a two-pack and then are not sure whether both cartridges go in the spa today. The documents use “two” in three ways, and only one of them means the housing is full when a single cartridge is installed.</p>
<ol>
<li><strong>The housing holds more than one at the same time.</strong> You replace every cartridge that was in the well, because each one is part of the flow path.</li>
<li><strong>One pleated cartridge and one smaller insert</strong> occupy the same well and are not the same part. They can have different lifetimes and different cleaning rules.</li>
<li><strong>A spare set</strong> waits while the set in the spa gets dirty. The spare is not installed on top of a full housing.</li>
</ol>
<p>A retail “2-pack” is usually the third meaning, or simply how the manufacturer boxes the part. Intex 29001E is a two-pack of Type S1 cartridges. Intex’s pages do not say a PureSpa holds an S1 and an S2 together. They say which set numbers take which type. That split is in <a href="/guides/intex-and-bestway-inflatable-spa-filters/">Intex and Bestway filters</a>.</p>

<h2>Hot Spring wells that hold three</h2>
<p>The 6" × 10-1/2" open cartridge <a href="/hot-spring/c-6430/">C-6430</a> (OEM 31489 / 71825 / 71826) is the Highlife size. The Leisure Time listing for 71825 says many of these models take three cartridges, and that some models of the same footprint use a Tri-X ceramic filter instead of pleated media. Use the pleated cartridge only where the spa specifies 71825 or a listed equivalent${c('lt71825')}.</p>
<p>If you open the well and see three pleated cartridges, order three of the part that matches, not one. If you see a ceramic block, C-6430 is the wrong object even though the footprint is the one the listing mentions. The collection-by-collection sizes, including the 8-1/2" cartridge and the 2018 Limelight cartridge that is not this 6" part, are in <a href="/guides/hot-spring-filter-sizes-by-collection/">Hot Spring filter sizes by collection</a>. Hot Spot models that the dealer assigns to this cartridge are on the <a href="/hot-spot/">Hot Spot</a> page; count the filters in that housing too, because several Hot Spot tubs are listed with more than one.</p>

<h2>Master Spas: two outers, plus an inner</h2>
<p>Unicel’s note on <a href="/master-spas/c-8341/">C-8341</a> is direct: from 2006 onward this Eco-Pur outer is a 40 sq ft cartridge and two of them are required. Each one is 8" × 6-3/4" with 4" open ends and a raised ring. The 2002–2005 outer is the different part <a href="/master-spas/c-7330/">C-7330</a>, 7" × 7-1/4", 30 sq ft. The inner element <a href="/master-spas/c-3310am/">C-3310AM</a> is 3-7/8" × 7" and is used with either outer. Unicel calls that inner piece antimicrobial media${c('unicel26')}.</p>
<p>Buying one C-8341 leaves the housing half serviced if both outers were due. Buying a C-8341 for a 2004 spa ignores the 7" versus 8" change. The stand-pipe note on the threaded Master Spas replacements is a separate installation step and is explained in <a href="/guides/master-spas-eco-pur-filters/">Master Spas Eco-Pur filters</a>.</p>

<h2>Sundance’s outer cartridge and disposable insert</h2>
<p>Sundance’s 2024 manuals describe a two-stage arrangement rather than two copies of one cartridge. On the 680 Series, the pleated MicroClean Mini filter is on a 12-month replacement and the insert is on a 4-month replacement. On the 780 Series, the small disposable MicroClean cartridge is replaced every 3 months, or earlier${c('sd680','sd780')}. Those are not suggestions from a retailer. They are the intervals in the owner’s manuals.</p>
<p>The cleaning rules differ inside the same well. Sundance says not to use filter cleaners on the inner inserts. The 680 manual calls for a high-pressure hose nozzle on the outer pleated filter and a low-pressure nozzle with no chemicals on the insert${c('sd680')}. Unicel’s one-hour degreaser soak is written for a pleated cartridge you intend to reuse${c('unicel')}. It is the wrong soak for the insert Sundance says not to chemically clean. Replace the insert on its short interval. Clean or replace the outer on its longer one. Our general cleaning steps are in <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>, with that Sundance exception spelled out.</p>

<h2>A cage is not a second cartridge</h2>
<p>Bullfrog’s coreless filters are a pleated element plus a plastic cage and cap. Leisure Time says the cage and cap must be installed with OEM 10-00281 and 10-00282, and it names a cage assembly for specific years${c('ltBullfrog281','ltBullfrog282')}. You do not stack two coreless socks to make up for a missing cage. You install the cage the listing calls for, or you confirm the spa has moved to the Simplicity flat filter that the 10-00282 listing assigns to 2023-and-newer A Series models. The thread-versus-coreless split is in <a href="/guides/bullfrog-threaded-and-coreless-filters/">Bullfrog threaded and coreless filters</a>.</p>

<h2>The spare set, which is the recommendation you can apply to any of these</h2>
<p>Unicel and Pleatco tell owners to keep two sets and alternate them. The set that comes out gets a hose rinse and a degreasing soak of at least an hour, overnight if you can, and then it dries. The other set goes into the spa so you are not running without filtration${c('unicel','pleatcoCat')}. Jacuzzi gives the same advice and adds that a cartridge may be reinstalled damp, while a full dry extends its life${c('jac')}. For a three-cartridge Hot Spring well, a “set” is three cartridges, not one. For a two-cartridge Eco-Pur well, a set is two outers, and the inner element is its own part. For a Sundance two-stage well, the spare you rotate is the pleated outer; the insert is a disposable on a shorter clock, not a piece you soak and put back.</p>
<p>Running while a set soaks, with nothing in the well, is the case Jacuzzi and Hot Spring reject${c('jac','hsManual')}. The consequences — weak jets, high-limit trips, flow codes — are in <a href="/guides/clogged-or-missing-hot-tub-filter/">what a clogged or missing filter does</a>. Putting the spare in without overtightening the retainer is in <a href="/guides/how-to-install-a-hot-tub-filter/">how to install a hot tub filter</a>.</p>

<h2>How to count yours</h2>
<ol>
<li>Power off, then remove every cartridge and lay them in a row${c('hsManual','jac')}.</li>
<li>If they are the same part, count them. That count is what you replace.</li>
<li>If one is much smaller, or is a thin insert inside a pleated cartridge, treat it as a different part number and a different interval.</li>
<li>Read the OEM number off one of the large cartridges and search it here. The page’s fitment notes are where “three required” or “two required” is written when a source says it.</li>
<li>Order that many, and order a second set only if you want the rotation. Do not install the spare set in a housing that is already full.</li>
</ol>`,
faq:[['Does every Hot Spring hold three filters?','No. The Leisure Time listing for OEM 71825 says many models that use that 6" cartridge take three. The 8-1/2" cartridge and the 2018 Limelight cartridge are different parts with their own listings. Count the cartridges in the well.'],
['Is a two-pack of Intex filters two filters installed together?','A two-pack is how Intex sells Type S1 (29001E) and Type S2 (29012E). The spa takes one type or the other, based on the set number. It is not an S1 plus an S2.'],
['What is the difference between a spare filter and a dual-filter spa?','A spare is the second set Unicel, Pleatco and Jacuzzi recommend so one set can be cleaned while the other is in use. A dual-filter spa, such as Unicel’s note that two C-8341 cartridges are required, holds both cartridges in the housing at once. You replace both.'],
['Can I clean a Sundance MicroClean insert with spa filter cleaner?','Sundance says no. The 680 and 780 manuals put the disposable insert on a short replacement interval, and the 680 manual says no chemicals and a low-pressure rinse for the insert. The pleated outer filter is the piece that gets the stronger rinse.']],
src:['lt71825','unicel26','sd680','sd780','unicel','pleatcoCat','jac','hsManual','ltBullfrog281','ltBullfrog282'],
related:['hot-spring-filter-sizes-by-collection','master-spas-eco-pur-filters','how-to-install-a-hot-tub-filter','how-to-clean-a-hot-tub-filter','clogged-or-missing-hot-tub-filter','bullfrog-threaded-and-coreless-filters'],
pickHeading:'Search multi-cartridge parts on Amazon',
picks:search('Part-number searches','Order the quantity the housing holds. A single search result is not a count of how many the spa uses.',[
['Hot Spring 71825','71825 spa filter','6" cartridge. The cited listing says many of these models take three.'],
['Unicel C-8341','C-8341 spa filter','Master Spas Eco-Pur outer. Unicel says two are required from 2006.'],
['Unicel C-3310AM','C-3310AM spa filter','The inner element used with the Eco-Pur outer.'],
['Sundance MicroClean','Sundance MicroClean filter','Search only. Confirm outer versus disposable insert in the manual.'],
])},
];
