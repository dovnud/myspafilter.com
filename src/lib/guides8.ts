import { c } from './guidesrc';
import type { Guide } from './guides';

const D = '2026-11-03';
/** Tuesday guides 2026-11-03. Every part number below is read from the Unicel 2026 guide, the Pleatco 2023 catalog or the Filbur catalog; where they disagree the page says so. No retailer links. */
export const mediaGuides: Guide[] = [
{slug:'antimicrobial-hot-tub-filters',published:D,reviewed:D,
title:'Antimicrobial (blue) hot tub filters: what the AM, RA and -M part numbers mean',
desc:'What Unicel AM, older Unicel RA, Filbur M and retired Pleatco -M spa filter numbers mean, which antimicrobial cartridges are still listed, what the treatment does and does not do under EPA rules, and how to cross a blue cartridge to a standard one.',
answer:`An antimicrobial hot tub filter is a normal pleated cartridge whose media (or end caps) carries a treatment meant to stop bacteria and mold growing <em>on the filter itself</em>. The suffix tells you which maker: Unicel uses <strong>AM</strong> (formerly <strong>RA</strong>)${c('unicel26')}, Filbur uses <strong>M</strong> on its blue cartridges${c('filburCat')}, and Pleatco’s <strong>-M</strong> (Microban) numbers are retired, with the 2023 catalog pointing each one to the standard number without the -M${c('pleatco23')}. The size, fittings and square feet match the standard cartridge. Under EPA’s treated-article rule the treatment may only protect the filter, not the people in the tub, so sanitizer and cleaning schedules do not change${c('epaTreated','ecfr15225')}.`,
body:`<p>Blue spa filters confuse people for two reasons. The part number on the end cap has an extra letter that a search will not always match, and the word “antimicrobial” sounds like it does the sanitizer’s job. This page covers both. The numbers come from the Unicel 2026 Replacement Guide${c('unicel26')}, the Pleatco 2023 catalog${c('pleatco23')} and the Filbur catalog${c('filburCat')}.</p>

<h2>The suffixes, maker by maker</h2>
<div class="tbl"><table><thead><tr><th>Maker</th><th>Suffix</th><th>Status in the source we read</th><th>Example</th></tr></thead><tbody>
<tr><td>Unicel</td><td><strong>AM</strong></td><td>Current. Spec notes say “Manufactured with antimicrobial filter media.”${c('unicel26')}</td><td>8CH-202AM, “formerly 8CH-202RA”</td></tr>
<tr><td>Unicel (older)</td><td><strong>RA</strong></td><td>Earlier suffix. Unicel’s notes give the RA number as the former number of an AM part${c('unicel26')}. Filbur’s cross reference still prints RA numbers${c('filburCat')}.</td><td>8CH-852RA → 8CH-852AM (now discontinued, use 8CH-66)</td></tr>
<tr><td>Filbur</td><td><strong>M</strong></td><td>Current. Blue “Premium Antimicrobial Cartridges”, “more than 50 sizes”${c('filburCat')}</td><td>FC-2390M (Rainbow 50 in-line)</td></tr>
<tr><td>Pleatco</td><td><strong>-M</strong></td><td>Retired. Listed under “Deactivated Pleatco part numbers” with a standard replacement${c('pleatco23')}</td><td>PRB75-M → PRB75</td></tr>
</tbody></table></div>
<p>Hot Tub Outpost’s listing for PRB75-M describes the -M as “the blue Microban color”, says the standard version without Microban is PRB75, and marks the -M as discontinued${c('htoPrb75m')}. That matches the Pleatco list.</p>

<h2>What the treatment claims, and what it cannot claim</h2>
<p>Filbur says its antimicrobial protection prevents the growth of bacteria on the cartridge, is applied during manufacturing, will not wash out or wear away, and lasts as long as the cartridge. Fewer bacteria on the filter means fewer odors, algae and mold fouling it. Filbur gives the blue cartridges a one-year warranty${c('filburCat')}. Filbur’s standard (white) cartridges also have what it calls reinforced antimicrobial end caps, which it says repel odor-causing bacteria and mold${c('filburCat')}. So a white Filbur cartridge is not “untreated” in every part.</p>
<p>In the US, a product treated with a pesticide to protect the product itself is a “treated article”. It is exempt from pesticide registration only if its claims stay limited to protecting the article${c('ecfr15225','epaPrn')}. EPA’s consumer page gives sample wording for such products: the antimicrobial properties are built in to inhibit bacteria that may affect the product, and they “do not protect users or others against bacteria, viruses, germs, or other disease organisms”${c('epaTreated')}. For a hot tub that means:</p>
<ul>
<li>A blue cartridge does not replace bromine or chlorine, and it does not change the sanitizer level you test for. See <a href="/guides/best-hot-tub-sanitizer-bromine-chlorine-mineral/">sanitizer types</a>.</li>
<li>It still loads with oils and scale and needs the same rinse and soak. See <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a> and <a href="/guides/how-often-to-clean-hot-tub-filter/">how often to clean it</a>.</li>
<li>None of the three catalogs gives a longer replacement interval for the treated version. The intervals in <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a> apply.</li>
</ul>

<h2>Unicel AM cartridges in the 2026 guide</h2>
<p>These are the spa-size AM numbers in Unicel’s 2026 price index, with the area and application Unicel prints${c('unicel26')}. Where we have a cross-reference page, the part links to it.</p>
<div class="tbl"><table><thead><tr><th>Unicel AM</th><th>Area</th><th>Application Unicel lists</th><th>Note</th></tr></thead><tbody>
<tr><td>C-3310AM</td><td>8 sq ft</td><td>Master Spas Eco-Pur inner element</td><td>Used with C-7330 or C-8341 outer cartridges. See <a href="/guides/master-spas-eco-pur-filters/">Master Spas Eco-Pur filters</a>.</td></tr>
<tr><td>C-4314AM / C-4327AM</td><td>13.5 / 27.5 sq ft</td><td>Saratoga</td><td>Need the existing tabbed thread adapter in the skim well (not furnished). Not eligible to ship into Canada.</td></tr>
<tr><td>C-4950AM</td><td>50 sq ft</td><td>Rainbow in-line</td><td>Same size as <a href="/caldera/c-4950/">C-4950</a></td></tr>
<tr><td>C-6430AM</td><td>30 sq ft</td><td>Watkins</td><td>The price index says “C-6430 USE C-6430AM” (see below)</td></tr>
<tr><td>C-9450AM / C-9489AM</td><td>150 / 200 sq ft</td><td>Waterway</td><td>OEM 817-1150M / 817-1200M. Waterway’s own numbers also end in M.</td></tr>
<tr><td>4CH-949AM</td><td>50 sq ft</td><td>13-1/2" long, 2" SAE thread</td><td></td></tr>
<tr><td>5CH-352AM / 5CH-502AM</td><td>35 / 50 sq ft</td><td>Marquis</td><td>Standard 35 sq ft version: <a href="/marquis-spas/5ch-352/">5CH-352</a></td></tr>
<tr><td>5CH-902AM</td><td>90 sq ft</td><td>Marquis (OEM 20499)</td><td>5-3/16" × 30", bar handle, 2" MPT. Dealer sizes differ slightly (see the <a href="/fitment/marquis-filter-by-model-year/">Marquis lookup</a>).</td></tr>
<tr><td>6CH-940AM</td><td>40 sq ft</td><td></td><td>Standard version: <a href="/master-spas/6ch-940/">6CH-940</a></td></tr>
<tr><td>6CH-960AM / 6CH-961AM</td><td>52 / 60 sq ft</td><td>Jacuzzi Premium</td><td>Standard version: <a href="/jacuzzi/6ch-960/">6CH-960</a></td></tr>
<tr><td>8CH-202AM</td><td>120 sq ft</td><td>Diamante</td><td>Formerly 8CH-202RA</td></tr>
<tr><td>8CH-852AM</td><td>85 sq ft</td><td>Diamante</td><td>Discontinued by Unicel. Unicel says use 8CH-66.</td></tr>
</tbody></table></div>

<h2>The C-6430 note (Hot Spring 71825 / 31489)</h2>
<p>Unicel’s 2026 price index has a line that reads “C-6430 USE C-6430AM”, while its spec table still prints the standard C-6430 (6" × 10-1/2", 1-15/16" open bottom, 4 oz media, 30 sq ft)${c('unicel26')}. In other words, Unicel’s ordering list sends the plain C-6430 to the antimicrobial version of the same size. If a dealer ships a blue C-6430AM against an order for the Hot Spring 30 sq ft cartridge, that is the reason, and the fit is the same. Our <a href="/hot-spring/c-6430/">Hot Spring C-6430 page</a> carries the note. Hot Spring spas that use a Tri-X ceramic cartridge in that position need the Tri-X part, not either Unicel number.</p>

<h2>Retired Pleatco -M numbers and their replacements</h2>
<p>The Pleatco 2023 catalog lists these spa -M numbers as deactivated, each with the replacement Pleatco names${c('pleatco23')}. In almost every case the replacement is the same number without -M.</p>
<div class="tbl"><table><thead><tr><th>Deactivated</th><th>Pleatco replacement</th><th>Prefix family</th></tr></thead><tbody>
<tr><td>PRB25-IN-M, PRB35-IN-M, PRB50-IN-M</td><td>PRB25-IN, PRB35-IN, PRB50-IN</td><td>Rainbow</td></tr>
<tr><td>PRB37-IN-M</td><td><strong>PRB50-IN</strong> (not a PRB37-IN)</td><td>Rainbow</td></tr>
<tr><td>PRB75-M, PRB8.5-M, PRB14.5-M</td><td>PRB75, PRB8.5, PRB14.5</td><td>Rainbow</td></tr>
<tr><td>PLBS50-M, PLBS75-M, PLBS100-M</td><td>PLBS50, PLBS75, PLBS100</td><td>Leisure Bay</td></tr>
<tr><td>PLB50-M</td><td>N/A (no replacement given)</td><td>Leisure Bay</td></tr>
<tr><td>PMA10-M, PMA25-M, PMA40-F2M-M, PMA45-2004R-M</td><td>PMA10, PMA25, PMA40-F2M, PMA45-2004R</td><td>Master Spas</td></tr>
<tr><td>PJW23-M, PJW60TL-F2S-M</td><td>PJW23, PJW60TL-F2S</td><td>Jacuzzi / Whirlpool</td></tr>
<tr><td>PDO75-2000-M</td><td>PDO75-2000</td><td>Dimension One</td></tr>
<tr><td>PSD125-2000-M</td><td>PSD125-2000</td><td>Sundance</td></tr>
<tr><td>PCST80-M, PCST120-M</td><td>PCST80, PCST120</td><td>Coast Spas</td></tr>
<tr><td>PSG27.5-M</td><td><strong>PSG27.5-XP4</strong></td><td>Saratoga</td></tr>
<tr><td>PCS50N-M, PCS75N-M</td><td>PCS50N, PCS75N</td><td>Coleman</td></tr>
<tr><td>PBF35-M</td><td>PBF35</td><td>Bullfrog</td></tr>
<tr><td>PLAS35-M</td><td>PLAS35</td><td></td></tr>
<tr><td>PJC147-M</td><td>N/A</td><td></td></tr>
</tbody></table></div>
<p>Three rows break the drop-the-M rule: PRB37-IN-M goes to a 50 sq ft PRB50-IN, PSG27.5-M goes to PSG27.5-XP4, and PLB50-M and PJC147-M have no replacement. Several standard numbers have pages here: <a href="/filter/prb25-in/">PRB25-IN</a>, <a href="/filter/prb35-in/">PRB35-IN</a>, <a href="/filter/prb50-in/">PRB50-IN</a>, <a href="/filter/pma45-2004-r/">PMA45-2004-R</a>, <a href="/filter/pjw60tl-f2s/">PJW60TL-F2S</a>, <a href="/filter/pdo75-2000/">PDO75-2000</a>, <a href="/filter/psd125-2000/">PSD125-2000</a> and <a href="/filter/pbf35/">PBF35</a>.</p>

<h2>Filbur M cartridges: examples and the Unicel numbers Filbur crosses them to</h2>
<p>Filbur’s antimicrobial table prints a Unicel cross for many of its M cartridges, usually an RA number${c('filburCat')}. Examples:</p>
<div class="tbl"><table><thead><tr><th>Filbur</th><th>Use Filbur lists</th><th>Area</th><th>Unicel number Filbur prints</th></tr></thead><tbody>
<tr><td>FC-2390M</td><td>Rainbow in-line 50</td><td>50 sq ft</td><td>C-4950RA</td></tr>
<tr><td>FC-2375M</td><td>Rainbow Dynamic in-line 25</td><td>25 sq ft</td><td>C-4335RA</td></tr>
<tr><td>FC-2810M</td><td>Sundance MicroClean 80</td><td>80 sq ft</td><td>C-8380RA</td></tr>
<tr><td>FC-3965M</td><td>Caldera 100 (Pleatco PCD100W-M)</td><td>100 sq ft</td><td>C-8399RA</td></tr>
<tr><td>FC-3960M</td><td>Watkins 65 (PWK65-M)</td><td>65 sq ft</td><td>C-8465RA</td></tr>
<tr><td>FC-0536M</td><td>Bullfrog 10-1035, 7-7/8" × 5-3/4", 2" SAE</td><td>35 sq ft</td><td></td></tr>
<tr><td>FC-1007M</td><td>Master Spas Eco-Pur outer, new style (PMA45-2004-R-M)</td><td>40 sq ft</td><td></td></tr>
<tr><td>FC-1001M</td><td>Master Spas Eco-Pur inner, 4" × 7-1/8"</td><td>10 sq ft</td><td>Unicel’s inner, C-3310AM, is rated 8 sq ft</td></tr>
</tbody></table></div>
<p><strong>Where the RA numbers lead.</strong> Filbur crosses its cartridges to 29 different Unicel RA numbers. Only six of them have an AM listing in Unicel’s 2026 guide: 5CH-352, 6CH-940, 6CH-960, 8CH-202, C-4950 and C-6430${c('filburCat','unicel26')}. For the other 23, among them C-4335RA, C-8380RA, C-8399RA and C-8465RA, Unicel 2026 lists only the standard number. If you search an RA number and find nothing, drop the RA and look up the plain number (for example <a href="/filter/c-8380/">C-8380</a>, <a href="/filter/c-8399/">C-8399</a>, <a href="/filter/c-8465/">C-8465</a>, <a href="/filter/c-4335/">C-4335</a>). That gets you the same size in standard media.</p>

<h2>Swapping a blue cartridge for a white one (or back)</h2>
<p>Every cross in the three catalogs pairs the treated and untreated versions at the same diameter, length, end fittings and area${c('unicel26','pleatco23','filburCat')}, with the exceptions listed above. Read the number on the end cap, remove the AM, RA, M or -M, and check the result in the <a href="/">part-number search</a>. Then confirm the measurements as described in <a href="/guides/how-to-find-your-spa-filter-size/">how to find your spa filter size</a>. If your spa maker’s manual calls for an antimicrobial cartridge by part number, follow the manual. Why two same-size spa filters can still carry different area ratings is covered in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">different square feet on the same size</a>.</p>`,
faq:[
['What does AM mean on a Unicel spa filter?','It is Unicel’s suffix for a cartridge “manufactured with antimicrobial filter media”. Older Unicel numbers used RA for the same thing; the 2026 guide gives 8CH-202RA as the former number of 8CH-202AM.'],
['Are blue Pleatco Microban (-M) filters still made?','The Pleatco 2023 catalog lists the -M numbers as deactivated and gives a replacement for each, usually the same number without -M (PRB75-M to PRB75, PBF35-M to PBF35). PRB37-IN-M goes to PRB50-IN, and PLB50-M has no replacement.'],
['Does an antimicrobial hot tub filter mean I can use less sanitizer?','No. Under EPA’s treated-article rule the treatment may only protect the filter itself. EPA’s sample wording says such properties do not protect users against bacteria, viruses, germs or other disease organisms. Keep the same sanitizer levels and cleaning schedule.'],
['Can I replace a blue antimicrobial cartridge with a standard white one?','The catalogs pair each treated cartridge with an untreated one of the same diameter, length, fittings and area, so the fit is the same. Drop the AM, RA, M or -M and look up the plain number, unless your spa’s manual calls for the antimicrobial part.'],
['Why did I get a C-6430AM when I ordered a C-6430?','Unicel’s 2026 price index says “C-6430 USE C-6430AM”. It is the antimicrobial version of the same 6" × 10-1/2", 30 sq ft Hot Spring / Watkins cartridge.']],
src:['unicel26','pleatco23','filburCat','htoPrb75m','epaTreated','epaPrn','ecfr15225'],
related:['how-filbur-unicel-and-pleatco-numbers-compare','discontinued-spa-filter-part-numbers','master-spas-eco-pur-filters','how-to-find-your-spa-filter-size','how-to-clean-a-hot-tub-filter','best-hot-tub-sanitizer-bromine-chlorine-mineral']},

{slug:'discontinued-spa-filter-part-numbers',published:D,reviewed:D,
title:'Discontinued spa filter numbers: what Unicel and Pleatco list as the replacement',
desc:'A lookup of discontinued hot tub filter cartridges (Unicel C-4303, C-6601, C-7432, 8CH-950, C-8320, C-5615 and more) with the replacement each maker names, what changes in size, area or thread, and where the two Unicel lists disagree.',
answer:`When a spa filter number is discontinued, the maker usually names one replacement, and it is not always the same size. Unicel’s 2026 guide prints a “discontinued … use” note under each retired cartridge and a matching “USE” line in its price index${c('unicel26')}; Pleatco’s 2023 catalog has a “Deactivated Pleatco part numbers” table${c('pleatco23')}. Several of Unicel’s skim-filter replacements are threaded MPT cartridges that need the old <strong>PAD adapter removed</strong> from the skim well, and some replacements have a different filter area (C-5302 at 50 sq ft becomes C-5624 at 25). Check the table below, then compare the new part’s size and bottom fitting against your old cartridge before you order.`,
body:`<p>A cartridge number that no longer turns up anywhere is usually not a dead end. Unicel and Pleatco both publish what they want you to buy instead. This page collects the spa and hot tub filter numbers from those lists, with the old and new specs side by side, so you can see what changes. The sources are the Unicel 2026 Replacement Guide (spec-table notes and price index)${c('unicel26')}, the Pleatco 2023 catalog${c('pleatco23')} and, for the adapter step, the Filbur catalog${c('filburCat')}.</p>

<h2>Unicel: discontinued spa cartridges and the named replacement</h2>
<div class="tbl"><table><thead><tr><th>Discontinued</th><th>Old cartridge (Unicel spec row)</th><th>Unicel says use</th><th>What changes</th></tr></thead><tbody>
<tr><td>C-4303</td><td>4-5/8" × 6-3/4", molded cone handle, 15 sq ft. Pleatco skim filter, Softsider, Vita</td><td><a href="/filter/4ch-20/">4CH-20</a> if the PAD adapter is MPT</td><td>Threaded 1-1/2" MPT, 20 sq ft. Remove the threaded PAD adapter from the skim well.</td></tr>
<tr><td>C-4324</td><td>4-5/8" × 9-3/4", molded cone handle, 25 sq ft. Skim filter, Spa Manufacturers, Gatsby</td><td>4CH-24 if the PAD adapter is MPT</td><td>Threaded 1-1/2" MPT, same 25 sq ft. Remove the PAD adapter.</td></tr>
<tr><td>C-4431</td><td>4-15/16" × 10-3/8", closed top, 30 sq ft. Skim filter, Lifestyle</td><td>No replacement named</td><td>Match by size (<a href="/guides/how-to-find-your-spa-filter-size/">how to measure</a>)</td></tr>
<tr><td>C-4430</td><td>4-15/16" × 11-7/8", 2-1/8" open, 30 sq ft. Santanna</td><td>C-4332</td><td>Same size, 32 sq ft</td></tr>
<tr><td>C-4347</td><td>4-15/16" × 14-7/8", 2-1/8" open, 45 sq ft. Santanna</td><td><a href="/sundance/c-4305/">C-4305</a></td><td>Same size, 50 sq ft</td></tr>
<tr><td>C-4970</td><td>4-15/16" × 23-5/8", 2-1/8" open, 75 sq ft. Waterway</td><td><a href="/filter/c-4995/">C-4995</a></td><td>Same size, 95 sq ft</td></tr>
<tr><td>C-5615</td><td>5" × 13-5/16", 2-3/8" open, no center core, 15 sq ft. Jacuzzi CFR-15 in-line</td><td>Spec note: <a href="/jacuzzi/c-5625/">C-5625</a> (25 sq ft). Price index: <a href="/jacuzzi/c-5635/">C-5635</a> (37 sq ft)</td><td>The two Unicel lists disagree. Both are the same 5" × 13-5/16" size. Jacuzzi also discontinued the CFR-15.</td></tr>
<tr><td>C-5636</td><td>5-3/16" × 19-5/8", 1-1/16" open, 6 oz media, 36 sq ft. Marquis</td><td>C-5637</td><td>Same size, 4 oz media, 40 sq ft</td></tr>
<tr><td>C-5302</td><td>5-3/4" × 11-7/8", 2-1/8" open, 50 sq ft. Teledyne Spa Pak</td><td>C-5624</td><td>Same size, but <strong>25 sq ft</strong></td></tr>
<tr><td>C-6601</td><td>6" × 9-3/4", 4 oz, 25 sq ft. Four Seasons, Aqua Spa</td><td>Spec note: 6CH-35 (35 sq ft) or <a href="/sundance/6ch-47/">6CH-47</a> (47 sq ft) if the PAD adapter is MPT; <a href="/master-spas/6ch-940/">6CH-940</a> if it is SAE. Price index omits 6CH-47.</td><td>Threaded replacements; check the thread on your adapter</td></tr>
<tr><td>C-6450</td><td>6" × 13-7/16", molded cone handle, 50 sq ft. Pleatco skim filter, Hercules</td><td>6CH-50 if the PAD adapter is MPT</td><td>Threaded, 50 sq ft. Remove the PAD adapter.</td></tr>
<tr><td>C-6475</td><td>6" × 14-3/4", 75 sq ft. Advanced Spa</td><td>6CH-50 if the PAD adapter is MPT</td><td>6" × 13-7/16", <strong>50 sq ft</strong>, shorter. Remove the PAD adapter.</td></tr>
<tr><td>C-7432</td><td>7" × 8", 4 oz, 32 sq ft. Softsider, Pleatco skim filter</td><td>7CH-32 (1-1/2" MPT) or <a href="/master-spas/7ch-322/">7CH-322</a> (2" MPT)</td><td>Pick by the thread on your PAD adapter, then remove it</td></tr>
<tr><td>C-7439</td><td>7" × 9-3/4", 4 oz, 40 sq ft. Softsider, Pleatco skim filter</td><td>7CH-40 (1-1/2" MPT) or 7CH-402 (2" MPT)</td><td>Same</td></tr>
<tr><td>C-7400</td><td>7" × 14-3/4", 4 oz, 50 sq ft. Goldkey (one blue and one orange end cap)</td><td>7CH-50 (1-1/2" MPT) or 7CH-502 (2" MPT)</td><td>Same</td></tr>
<tr><td>C-7449</td><td>7" × 14-3/4", 4 oz, 50 sq ft. Vita, Pleatco skim filter</td><td>7CH-50 (1-1/2" MPT)</td><td>Remove the PAD adapter</td></tr>
<tr><td>8CH-950</td><td>8" × 6", 2" SAE, 50 sq ft. Bullfrog (OEM 10-1035)</td><td><a href="/bullfrog/8ch-951/">8CH-951</a></td><td>8" × 5-3/4", 2" SAE. See our <a href="/bullfrog/8ch-950/">8CH-950 page</a> for the area ratings, which the sources print differently.</td></tr>
<tr><td>8CH-60</td><td>8" × 11-5/8", 2" MPT, 60 sq ft. Continental</td><td><a href="/filter/8ch-66/">8CH-66</a></td><td>8" × 9-1/4", 60 sq ft, shorter</td></tr>
<tr><td>8CH-852AM</td><td>85 sq ft antimicrobial. Diamante</td><td>8CH-66</td><td>Standard media, 60 sq ft</td></tr>
<tr><td>C-8320</td><td>8-7/16" × 18-1/8", castle top, 120 sq ft. Sundance</td><td><a href="/sundance/c-8325/">C-8325</a></td><td>8-7/16" × 18", 125 sq ft, Sundance universal length</td></tr>
</tbody></table></div>
<p>All rows are from the Unicel 2026 guide${c('unicel26')}. Where a cell says “price index”, the line comes from Unicel’s ordering list, not from the spec-table note.</p>

<h2>Where Unicel’s two lists disagree</h2>
<ul>
<li><strong>C-5615 (Jacuzzi CFR-15).</strong> The spec note says use C-5625 (25 sq ft). The price index says use C-5635 (37 sq ft). Both have the same 5" × 13-5/16" body, so either fits the housing. They differ in area.</li>
<li><strong>C-6601.</strong> The spec note offers 6CH-35, 6CH-47 or 6CH-940. The index offers only 6CH-35 (MPT) or 6CH-940 (SAE).</li>
<li><strong>C-2612 (Rainbow 19X).</strong> The price index says “C-2612 USE C-2608” (12 sq ft to 8 sq ft, same 2-7/8" × 19-1/2" size). The spec table still prints C-2612 without a discontinued note.</li>
<li><strong>C-6430.</strong> The index says “C-6430 USE C-6430AM”, the antimicrobial version of the same Hot Spring / Watkins cartridge. See <a href="/guides/antimicrobial-hot-tub-filters/">antimicrobial hot tub filters</a>.</li>
<li>Pool-size cartridges show the same pattern (C-7650, C-7487, C-8421: the spec note gives two choices and the index gives one).</li>
</ul>
<p>When the lists disagree, both answers are the same diameter and length. Pick by the area and the fittings of your old cartridge, or ask your spa dealer which one the housing was rated for.</p>

<h2>The PAD adapter step</h2>
<p>Many old skim-filter cartridges were open-ended and screwed into the skimmer through a separate threaded PAD adapter. Their replacements are cartridges with the thread molded into the end cap. Unicel’s notes for C-4303, C-4324, C-6450, C-6475, C-7432, C-7439, C-7400 and C-7449 all say the threaded PAD adapter <em>must be removed from the skim well</em>, and they pick the replacement by the adapter’s thread: 1-1/2" MPT, 2" MPT, or SAE for C-6601${c('unicel26')}. Filbur gives the same instruction for its top-load cartridges: remove the PAD adapter, if installed, before threading the filter into the suction fitting. It also says independent testing found cartridges used with PAD adapters had lower flow than cartridges with integrated threads${c('filburCat')}.</p>
<p>Before you unscrew the adapter, note its thread size (1-1/2" or 2"; MPT or SAE). That decides between 7CH-32 and 7CH-322, for example. Thread types are explained in <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded hot tub filters</a>.</p>

<h2>Pleatco: deactivated spa numbers with a different replacement</h2>
<p>Pleatco’s 2023 “Deactivated Pleatco part numbers” table includes these spa examples where the replacement is a different part, not just the same number with a suffix removed${c('pleatco23')}:</p>
<div class="tbl"><table><thead><tr><th>Deactivated</th><th>Pleatco replacement</th><th>Note</th></tr></thead><tbody>
<tr><td>PRB37-IN, PRB37-IN-M</td><td><a href="/filter/prb50-in/">PRB50-IN</a></td><td>Rainbow in-line; replacement is the 50 sq ft cartridge</td></tr>
<tr><td>PFAB30</td><td><a href="/filter/prb25-in/">PRB25-IN</a></td><td></td></tr>
<tr><td>PCS32-2 (without adapter)</td><td><a href="/filter/pas35-f2m/">PAS35-F2M</a></td><td></td></tr>
<tr><td>PJ200</td><td>PJ150</td><td></td></tr>
<tr><td>PSD125-2006</td><td><a href="/filter/psd125-2000/">PSD125-2000</a></td><td>Sundance</td></tr>
<tr><td>PDC510-AFS, PDC520-AFS, PDC530-AFS, PDC560-AFS, PDC100-AFS</td><td><a href="/filter/pwk30/">PWK30</a>, <a href="/filter/prb35-in/">PRB35-IN</a>, PLBS50, <a href="/filter/plbs75/">PLBS75</a>, PRB75</td><td>Dual-core cartridges replaced by standard ones</td></tr>
<tr><td>Microban -M numbers</td><td>Usually the same number without -M</td><td>Full list in <a href="/guides/antimicrobial-hot-tub-filters/">antimicrobial hot tub filters</a></td></tr>
</tbody></table></div>
<p>Pleatco also lists some deactivated spa numbers with no replacement (“N/A”). Our Dimension One rows are examples: retailers still cross 1561-12, 1561-02 and 1561-10 to PDO75P3, PTL75XW-F2M and PTL55XW-F2M, which Pleatco lists as deactivated with no replacement${c('pleatco23')}. For those, use the Unicel or Filbur number on the <a href="/fitment/dimension-one-filter-by-model-year/">Dimension One lookup</a>.</p>

<h2>If your number is not on either list</h2>
<ol>
<li>Search the number in the <a href="/">part-number search</a>. It covers OEM, Unicel, Pleatco and Filbur numbers in our dataset.</li>
<li>Try the other makers’ numbers printed on the end cap or the box. Our <a href="/guides/how-filbur-unicel-and-pleatco-numbers-compare/">Filbur, Unicel and Pleatco number guide</a> explains the prefixes.</li>
<li>Measure diameter, length, the top and the bottom fitting, and use the <a href="/tools/cross-reference/">size lookup</a>. A different area rating at the same size is normal. See <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size spa filters have different square feet</a>.</li>
</ol>`,
faq:[
['What replaced the Unicel C-4303 spa filter?','Unicel says use 4CH-20 if the PAD adapter is MPT, and that the threaded PAD adapter must be removed from the skim well. The 4CH-20 is the same 4-5/8" × 6-3/4" size with a molded 1-1/2" MPT thread and is rated 20 sq ft against the C-4303’s 15.'],
['What replaced the Bullfrog 8CH-950 filter?','Unicel lists 8CH-950 (OEM 10-1035) as discontinued and says use 8CH-951, an 8" × 5-3/4" cartridge with a 2" SAE thread.'],
['What replaced the Sundance C-8320?','Unicel says use C-8325, the 8-7/16" Sundance universal-length cartridge rated 125 sq ft.'],
['Is the C-5615 replaced by C-5625 or C-5635?','Unicel’s two lists disagree. The spec-table note says C-5625 (25 sq ft); the price index says C-5635 (37 sq ft). Both are 5" × 13-5/16" Jacuzzi in-line cartridges.'],
['Why does the replacement filter have a different square footage?','Some replacements are rated differently even at the same size (C-4970 at 75 sq ft becomes C-4995 at 95), and a few are smaller (C-5302 at 50 sq ft becomes C-5624 at 25; C-6475 at 75 becomes the shorter 6CH-50 at 50). The catalog names the replacement; it does not promise the same rating.'],
['Do I need to remove the PAD adapter when switching to a threaded cartridge?','Yes, according to both Unicel and Filbur. Unicel’s notes for the discontinued skim-filter cartridges say the threaded PAD adapter must be removed from the skim well, and Filbur says to remove it before threading its top-load cartridges into the suction fitting.']],
src:['unicel26','pleatco23','filburCat'],
related:['antimicrobial-hot-tub-filters','how-filbur-unicel-and-pleatco-numbers-compare','open-end-vs-threaded-hot-tub-filters','how-to-find-your-spa-filter-size','why-same-size-spa-filters-have-different-square-feet','bullfrog-threaded-and-coreless-filters']}
];
