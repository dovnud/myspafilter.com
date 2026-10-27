import { c } from './guidesrc';
import type { Guide } from './guides';

const D = '2026-10-27';
const search = (h: string, intro: string, rows: [string, string, string][]) => [{ h, intro, search: rows }];

/** Original filter guides. Every dimension, part number and schedule below is taken from the cited catalog, manual or the cartridge row that quotes it. */
export const batchGuides: Guide[] = [
{slug:'open-end-vs-threaded-hot-tub-filters',published:D,reviewed:D,
title:'Open-end vs threaded hot tub filters: how to tell which fitting you have',
desc:'Why two spa cartridges with the same diameter and length can still be the wrong filter: open ends, handles, male slip, MPT and SAE threads, from the Unicel and Pleatco spec fields.',
answer:`Match the <strong>top and the bottom</strong>, not just the outside size. Unicel’s and Pleatco’s spec tables print an opening size, a handle, a male slip or a thread for each end${c('unicel26','pleatco23')}. A 7" × 10-3/4" Caldera cartridge with a 2" male slip bottom (<a href="/caldera/c-7451/">C-7451</a>, OEM 033016) is not the same fitting as the 7" × 10-3/4" cartridge with a 2-11/16" open bottom (<a href="/caldera/c-7350/">C-7350</a>, OEM 1019401), even though both are listed at 50 sq ft with a handle on top.`,
body:`<h2>What the catalogs actually list</h2>
<p>A spa filter cartridge is a stack of pleated media between two end caps. The outside diameter and the overall length tell you whether the cartridge fits the well. The end caps tell you whether it seals. Unicel’s 2026 Replacement Guide and the Pleatco 2023 catalog both give those four fields for each cartridge: diameter, length, top and bottom${c('unicel26','pleatco23')}. Square footage is a fifth field, and it describes media area, not the shape of the cap. Our <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">square-foot guide</a> covers that difference. This page is about the caps.</p>
<p>When you pull the old cartridge, look at each end before you measure across the pleats. The patterns that show up over and over in the spec tables are:</p>
<ul>
<li><strong>Open both ends.</strong> A round hole in the top cap and a round hole in the bottom cap. The catalog prints the hole size, for example 1-15/16" or 2-1/8". The cartridge slides over a standpipe or sits between two sealing surfaces in the housing.</li>
<li><strong>Handle on top, thread on the bottom.</strong> The top is a molded cone, a bar, or a semi-circular handle you grab to pull the cartridge out. The bottom is a male thread, printed as MPT or as an SAE thread of a stated size.</li>
<li><strong>Handle on top, male slip on the bottom.</strong> The bottom is a smooth pipe-like stub, not a thread. Caldera’s older 7" cartridges are printed this way.</li>
<li><strong>Handle on top, open bottom.</strong> Common on later Caldera cartridges: you still lift it by a handle, but the bottom is an open hole with a stated inside diameter instead of a slip fitting.</li>
<li><strong>Closed or castle top.</strong> Some Sundance cartridges are printed with a castle top or a closed top and an open bottom of a specific size. The top is not a hole you can see through.</li>
</ul>
<p>None of those descriptions is a guess about how a spa “usually” works. Each one is a column in the spec table for a particular part number${c('unicel26','pleatco23')}.</p>

<h2>Same length, different bottom: Caldera’s 7" cartridges</h2>
<p>Caldera’s Paradise, Utopia and Highland collections use several 7"-diameter cartridges with a semi-circular handle. Two lengths show up: 10-3/4" and 14-3/4". Inside each length, the bottom changed.</p>
<div class="tbl"><table><thead><tr><th>Unicel</th><th>OEM</th><th>Size</th><th>Bottom, as printed</th><th>Pleatco</th><th>Area</th></tr></thead><tbody>
<tr><td><a href="/caldera/c-7451/">C-7451</a></td><td>033016</td><td>7" × 10-3/4"</td><td>2" male slip</td><td>PCD50</td><td>50 sq ft</td></tr>
<tr><td><a href="/caldera/c-7350/">C-7350</a></td><td>1019401; 73532</td><td>7" × 10-3/4"</td><td>2-11/16" open</td><td>PCD50N</td><td>50 sq ft</td></tr>
<tr><td><a href="/caldera/c-7479/">C-7479</a></td><td>033017</td><td>7" × 14-3/4"</td><td>2" male slip</td><td>PCD75</td><td>75 sq ft</td></tr>
<tr><td><a href="/caldera/c-7375/">C-7375</a></td><td>1019301; 73531</td><td>7" × 14-3/4"</td><td>2-11/16" open</td><td>PCD75N</td><td>75 sq ft</td></tr>
</tbody></table></div>
<p>A tape measure across the pleats will not separate C-7451 from C-7350. You have to look at the bottom. The Unicel note on the C-7451 row says C-7350 can also be used, and the note on C-7479 says C-7375 can also be used${c('unicel26')}. That is an interchange note from Unicel, not a statement that the bottoms are printed the same. If your old cartridge still has a 2" male slip stub, order the slip-bottom number and compare it with the cartridge in your hand. If the bottom is an open hole, order the open-bottom number. The longer pair is the same story at 14-3/4". Read <a href="/guides/caldera-filter-bottom-fittings/">Caldera filter bottoms</a> before you buy for a Paradise, Utopia or Highland tub, and use the <a href="/fitment/caldera-filter-by-model-year/">Caldera model-year lookup</a> when you know the model.</p>

<h2>Open both ends: the Hot Spring footprint</h2>
<p>Many Hot Spring cartridges have no thread at all. <a href="/hot-spring/c-6430/">C-6430</a> is 6" in diameter and 10-1/2" long, open 1-15/16" at both ends, rated 30 sq ft. Unicel, Pleatco and Filbur list it for OEM 31489 (also printed as 71825 and 71826), as Pleatco PWK30-4 and Filbur FC-3915${c('unicel26','pleatco23','filburCat')}. <a href="/hot-spring/c-8465/">C-8465</a> is the larger open cartridge: 8-1/2" × 10-1/2", open 3" at both ends, 65 sq ft, OEM 31114 / 71827 / 71828, Pleatco PWK65, Filbur FC-3960${c('unicel26','pleatco23','filburCat')}. Both are open-end filters. They are not interchangeable with each other, because the diameter and the hole size differ. A full walk-through of which collection uses which one is in <a href="/guides/hot-spring-filter-sizes-by-collection/">Hot Spring filter sizes by collection</a>.</p>
<p>Open-end cartridges in the 4-15/16" family are just as specific. <a href="/caldera/c-4335/">C-4335</a> is 4-15/16" × 9-1/4" with 2-1/8" open ends (OEM 74148, Pleatco PRB35-IN, 35 sq ft). <a href="/hot-spring/c-4326/">C-4326</a> is 4-15/16" × 13-5/16" with the same 2-1/8" open ends, at 25 sq ft. The hole size matches. The length does not. Ordering by diameter alone would mix them.</p>

<h2>Threads: MPT and SAE are both “threaded,” and they are not one size</h2>
<p>Where the catalog says “male thread” or “MPT,” the bottom screws onto a fitting. Where it says “SAE thread,” it also screws on, but the thread series is the SAE thread printed for that part, not a generic pipe thread. The spec table gives the size either way${c('unicel26')}.</p>
<ul>
<li><a href="/sundance/4ch-35/">Sundance 4CH-35</a>, OEM 6540-486, is 4-5/8" × 16" with a molded cone handle and a 1-1/2" male MPT bottom, 40 sq ft.</li>
<li><a href="/bullfrog/8ch-951/">Bullfrog 8CH-951</a>, OEM 10-2870, is an 8" cartridge 5-3/4" long with a semi-circular handle and a 2" SAE thread. Pleatco lists it as PBF36${c('pleatco23')}.</li>
<li><a href="/jacuzzi/6ch-960/">Jacuzzi 6CH-960</a> is 6-3/4" × 15-1/2" with a semi-circular handle and a 2" SAE thread. The look-alike <a href="/jacuzzi/6ch-961/">6CH-961</a> uses the same OEM numbers in Unicel’s table but is printed “open with slots” on top, and Unicel says it requires an injection-molded semi-circular handle that is not furnished${c('unicel26')}.</li>
</ul>
<p>A 1-1/2" MPT bottom will not become a 2" SAE bottom because the lengths are close. If the old cartridge’s thread is worn, match the OEM number molded into the cap before you match the thread you can still see. <a href="/guides/sundance-and-jacuzzi-look-alike-filters/">Sundance and Jacuzzi look-alike filters</a> goes through the pairs that share a body and not a fitting.</p>

<h2>How to check the fitting on the cartridge in your hand</h2>
<ol>
<li>Turn the spa off before you open the filter well. Hot Spring and Jacuzzi both say to cut power first${c('hsManual','jac')}.</li>
<li>Read any number on the end cap or the band. Search it from the <a href="/">homepage</a>. A readable OEM, Unicel or Pleatco number beats a measurement.</li>
<li>If the number is gone, measure the outside diameter across the pleats and the overall length, including a handle or a threaded nipple. Then write down the top and the bottom in words: open (and the hole size, if you can measure the inside), handle, closed, slip, or thread. The <a href="/guide/">measuring guide</a> and the <a href="/size/">size lookup</a> use the same fields the catalogs use.</li>
<li>Compare your notes with the top and bottom lines on the cartridge page, not only with the diameter and length.</li>
<li>If two pages share a size, open both. The one whose ends match is the one to order.</li>
</ol>
<p>Pleatco’s cleaning sheet makes a related point about the media itself: a cartridge can look stained and still be the right part, and a white cartridge is not automatically a clean one${c('pleatcoWash')}. Stain is not a fitting. The end cap is.</p>

<h2>What to do when the sources disagree about the hole</h2>
<p>They sometimes do. On the Intex Type S1 cartridge, Unicel prints 2-1/16" open ends and Pleatco prints 1-5/8", while both print the body as 4-1/4" × 2-15/16"${c('unicel26','pleatco23')}. Our <a href="/intex/c-4317/">Intex C-4317 page</a> keeps both figures and tells you the body size is the part they agree on. When a page on this site says the catalogs disagree, order by the manufacturer’s part number and hold the new cartridge next to the old one before you drop it in the well.</p>
<p>Replacement intervals and cleaning are separate decisions. A correct fitting does not tell you how old the media is. Use <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a> and <a href="/guides/signs-your-hot-tub-filter-is-bad/">signs the filter is bad</a> for that, and <a href="/guides/how-to-install-a-hot-tub-filter/">how to install a cartridge</a> once the part number matches.</p>`,
faq:[['Can two spa filters with the same diameter and length be different parts?','Yes. Caldera C-7451 and C-7350 are both 7" × 10-3/4" and 50 sq ft with a handle on top. C-7451 (OEM 033016) has a 2" male slip bottom. C-7350 (OEM 1019401) has a 2-11/16" open bottom. Unicel notes that C-7350 can also be used in the C-7451 application, but the spec rows still print different bottoms, so compare the old cartridge.'],
['What is the difference between an MPT thread and an SAE thread?','Both are threaded bottoms in the Unicel spec table, and the table prints the size for each. A 1-1/2" male MPT bottom, as on Sundance 4CH-35, is not the same callout as a 2" SAE bottom, as on Bullfrog 8CH-951 or Jacuzzi 6CH-960. Match the callout on your part number.'],
['Do I measure the handle as part of the length?','Measure the overall length the way the catalogs do: end to end, including a handle or a threaded nipple. Then compare that length with the length on the cartridge page, and compare the ends separately.'],
['Where do these fitting descriptions come from?','From the top and bottom columns in the Unicel 2026 Replacement Guide and the Pleatco 2023 catalog, for the part numbers linked on this page. If a row is marked unverified, the page says what is missing.']],
src:['unicel26','pleatco23','filburCat','pleatcoWash','hsManual','jac'],
related:['caldera-filter-bottom-fittings','hot-spring-filter-sizes-by-collection','sundance-and-jacuzzi-look-alike-filters','how-to-find-your-spa-filter-size','why-same-size-spa-filters-have-different-square-feet','how-to-install-a-hot-tub-filter'],
pickHeading:'Search these cartridges on Amazon',
picks:search('Part-number searches','Each button searches Amazon for that part. Open the cartridge page first and match the top and bottom, then confirm the listing title shows the same number.',[
['Unicel C-6430','C-6430 spa filter','Hot Spring open-end cartridge, OEM 31489 / 71825, 6" × 10-1/2".'],
['Unicel C-7350','C-7350 spa filter','Caldera open-bottom cartridge, OEM 1019401, 7" × 10-3/4".'],
['Unicel C-7451','C-7451 spa filter','Caldera male-slip cartridge, OEM 033016, 7" × 10-3/4".'],
['Unicel 4CH-35','4CH-35 spa filter','Threaded bottom, 1-1/2" MPT, including Sundance OEM 6540-486.'],
])},

{slug:'hot-spring-filter-sizes-by-collection',published:D,reviewed:D,
title:'Hot Spring filter sizes by collection: Highlife, Limelight and Tiger River',
desc:'Which Hot Spring cartridge is the 6" open filter, which is the 8-1/2" open filter, and which Limelight part the catalogs rate three different ways. OEM numbers 31489, 71825, 71827 and 78161.',
answer:`Most Highlife spas in our cited listings use the <strong>6" × 10-1/2" open cartridge</strong> <a href="/hot-spring/c-6430/">C-6430</a> (OEM 31489 / 71825 / 71826, 30 sq ft). Many 2008–2017 Limelight and Tiger River models in those listings use the <strong>8-1/2" × 10-1/2" open cartridge</strong> <a href="/hot-spring/c-8465/">C-8465</a> (OEM 31114 / 71827 / 71828, 65 sq ft). 2018-and-later Limelight models in the same listings use OEM <strong>78161 / 1642301-1</strong>, which Unicel lists as both a 50 sq ft and a 75 sq ft 6" × 14" cartridge${c('unicel26','lt71825','lt71827','lt78161')}.`,
body:`<h2>Three bodies, not one “Hot Spring filter”</h2>
<p>Hot Spring is built by Watkins, and the brand has reused a small set of cartridge sizes across many collections. That reuse is why a model name alone is a weak way to order. The end cap number is the strong way. The three bodies below are the ones the Unicel 2026 guide, the Pleatco 2023 catalog, the Filbur catalog and the Leisure Time Inc. listings agree enough to publish. Where they do not agree, the paragraph says so.</p>
<div class="tbl"><table><thead><tr><th>Collection, from the cited listing</th><th>OEM numbers</th><th>Unicel</th><th>Size and ends</th><th>Area on our row</th></tr></thead><tbody>
<tr><td>Highlife models named for 71825, many from 1990 onward</td><td>31489; 71825; 71826</td><td><a href="/hot-spring/c-6430/">C-6430</a></td><td>6" × 10-1/2", open 1-15/16" both ends</td><td>30 sq ft</td></tr>
<tr><td>Limelight 2008–2017 and Tiger River models named for 71827</td><td>31114; 71827; 71828</td><td><a href="/hot-spring/c-8465/">C-8465</a></td><td>8-1/2" × 10-1/2", open 3" both ends</td><td>65 sq ft</td></tr>
<tr><td>Limelight 2018–2026 models named for 78161</td><td>1642301-1; 78161</td><td><a href="/hot-spring/c-6350/">C-6350</a> and <a href="/hot-spring/c-6355/">C-6355</a></td><td>6" × 14", open 1-15/16" both ends. Unicel notes the original OD is 6-3/8"</td><td>50 sq ft (C-6350) and 75 sq ft (C-6355)</td></tr>
</tbody></table></div>
<p>Pleatco’s cross-reference lists C-6430 as PWK30-4 and C-8465 as PWK65${c('pleatco23')}. Filbur lists FC-3915 and FC-3960 for those same OEM numbers${c('filburCat')}. The 2018 Limelight cartridge is the one the catalogs do not line up, and it has its own section below. Model-by-model years are on the <a href="/fitment/hot-spring-filter-by-model-year/">Hot Spring filter by model and year</a> page and on each cartridge page.</p>

<h2>The 6" Highlife cartridge, and the Tri-X warning</h2>
<p><a href="/hot-spring/c-6430/">C-6430</a> is an open-end cartridge: no handle threads onto the housing. Unicel dates the Hot Spring use of this size to models after 1990 and prints the media as 4 oz${c('unicel26')}. The Leisure Time listing for OEM 71825 says many of these hot tubs take three cartridges at once, and that some models use a Tri-X ceramic filter of the same footprint instead of a pleated cartridge. The same listing says to use the pleated cartridge only where the spa specifies 71825 or a listed equivalent, and that a model which requires Tri-X needs the Tri-X filter${c('lt71825')}.</p>
<p>That is a practical check, not a slogan. If you open the well and find a ceramic block rather than pleated fabric, C-6430 is the wrong object even if the footprint matches. If you find three pleated cartridges, order three. Hot Spring’s own maintenance page tells owners to replace with genuine Watkins filters${c('hsMaint')}. An aftermarket cross-reference matches size and fittings; it is not a Watkins part. Warranty language is in your owner’s manual, not in a catalog table.</p>
<p>Hot Spot and some Solana models are assigned this same 6" × 10-1/2" cartridge by the dealer listings we cite, which is why those brands point back at the Hot Spring tables. Start at <a href="/hot-spot/">Hot Spot</a> or <a href="/solana/">Solana</a> if that is the badge on the cabinet, then confirm the end-cap number.</p>

<h2>The 8-1/2" cartridge for earlier Limelight and Tiger River</h2>
<p><a href="/hot-spring/c-8465/">C-8465</a> is larger in diameter (8-1/2") and shorter than the 2018 Limelight cartridge. Both ends are open 3". Unicel, Pleatco and Filbur agree on OEM 31114 / 71827 / 71828, Pleatco PWK65 and Filbur FC-3960, at 65 sq ft${c('unicel26','pleatco23','filburCat')}. The Leisure Time listing for 71827 is the source of the model years on that page: Limelight Bolt 2012–2017, Flair, Glow and Pulse 2008–2017, and a long Tiger River list that includes Bengal, Caspian, Sumatran and others going back to the early 1990s${c('lt71827')}.</p>
<p>Do not put this cartridge in a 2018-or-later Limelight that calls for 78161. The diameter is 8-1/2", not 6", and the length is 10-1/2", not 14". The <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded</a> guide shows why the hole size matters even when you have already matched the brand.</p>

<h2>2018 and newer Limelight: one OEM number, three area ratings</h2>
<p>Unicel’s Hot Spring cross-reference ties both C-6350 (50 sq ft, 142 pleats) and C-6355 (75 sq ft, 229 pleats) to OEM 1642301-1 / 78161. Both replacements are printed 6" × 14" with 1-15/16" open ends, and Unicel notes that the original cartridge is 6-3/8" OD while the replacements are 6"${c('unicel26')}. A Leisure Time product page for 78161 gives 50 sq ft, 14" long, and about 6-1/4" OD with open 2" ends${c('lt78161')}. Pleatco’s 2023 catalog lists the same OEM number as PWK35B at 6-3/8" × 14" and 35 sq ft${c('pleatco23')}. Those are three different area ratings — 75, 50 and 35 sq ft — for what the sources treat as one factory part.</p>
<p>We do not pick a winner. Our <a href="/hot-spring/c-6350/">C-6350 page</a> leaves the Pleatco equivalent off because PWK35B’s printed size and area do not match Unicel’s 6" / 50 sq ft row. The <a href="/hot-spring/c-6355/">C-6355 page</a> shows PWK35B and repeats the disagreement. For a 2018-or-later Limelight Beam, Flair, Flash or Pulse, order by 78161 or 1642301-1 and compare OD, length and the open ends with the old cartridge. The dealer listing we cite names those five Limelight models for 2018–2026${c('lt78161')}.</p>
<p>The arithmetic Unicel publishes for area is pleats × 2 × pleat height × usable length ÷ 144${c('unicel26')}. That is why two cartridges with the same outside size can carry different ratings. It is also why a rating, by itself, is the wrong thing to shop for. The worked examples live in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters have different square-foot ratings</a>.</p>

<h2>Other Hot Spring numbers that are easy to mix in</h2>
<p>Not every Hot Spring row is one of the three bodies above. <a href="/hot-spring/4ch-35/">4CH-35</a> is OEM 31382 (formerly 31116): 4-5/8" × 16", molded cone handle, 1-1/2" male MPT, 35 sq ft, Pleatco PTL35-4, Filbur FC-0161. No model-year list is in the sources for that row, so we do not invent one. <a href="/hot-spring/c-6330/">C-6330</a> shares the 6" × 10-1/2" open body and the 30 sq ft rating with C-6430 but is listed under OEM 31489 as its own Unicel number; read that page before assuming the two Unicel numbers are identical in every column. <a href="/hot-spring/c-6600/">C-6600</a> is a different body again: 6-3/8" × 11-7/8", open 3" both ends.</p>
<p>If the number on your cap is not in this article, search it. The cross-reference is the index. This article is the map of the three sizes people confuse.</p>

<h2>Care, once the size is right</h2>
<p>Hot Spring’s filter article says a standard polyester cartridge is typically replaced every 2–3 years, and a TRI-X cartridge every 4–6 years${c('hsBlog')}. The owner maintenance page says every three years${c('hsMaint')}. Those are different sentences from the same brand, so treat them as a range and replace sooner if the media is torn or flow does not come back after a clean. The Hot Spot collection manual says to turn power off before removing filters, not to run the spa with the cartridge removed, and not to overtighten the retainer${c('hsManual')}. Cleaning steps are in <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>. A clogged cartridge is also the first thing Hot Spring names when a spa shows a no-flow fault; see <a href="/guides/clogged-or-missing-hot-tub-filter/">what a clogged or missing filter does</a>.</p>`,
faq:[['Which Hot Spring filter is OEM 71825?','71825 is one of the OEM numbers Unicel prints for C-6430, along with 31489 and 71826: 6" × 10-1/2", open 1-15/16" both ends, 30 sq ft. The Leisure Time listing for 71825 says to use that pleated cartridge only where the spa specifies it, because some models take a Tri-X filter of the same footprint.'],
['Which filter fits a 2018 or newer Limelight?','The cited dealer listing names OEM 78161 (also 1642301-1) for Limelight Beam, Flair, Flash and Pulse from 2018 through 2026. Unicel offers C-6350 at 50 sq ft and C-6355 at 75 sq ft for that number, both 6" × 14". Pleatco lists PWK35B at 35 sq ft and 6-3/8" OD. Order by the OEM number and compare the cartridge you take out.'],
['Can I use the 8-1/2" 71827 filter in a Highlife that takes 71825?','No. 71827 is the 8-1/2" × 10-1/2" C-8465 body. 71825 is the 6" × 10-1/2" C-6430 body. Diameter, length and the open-end size are all different.'],
['How many cartridges does a Highlife hold?','The Leisure Time listing for 71825 says many of these models take three cartridges. Count the cartridges in the well before you order. Do not assume every Hot Spring holds three; the 2018 Limelight listing is a different part.']],
src:['unicel26','pleatco23','filburCat','lt71825','lt71827','lt78161','hsMaint','hsBlog','hsManual'],
related:['open-end-vs-threaded-hot-tub-filters','why-same-size-spa-filters-have-different-square-feet','caldera-filter-bottom-fittings','how-often-to-replace-hot-tub-filter','clogged-or-missing-hot-tub-filter','spas-that-use-more-than-one-filter'],
pickHeading:'Search Hot Spring part numbers on Amazon',
picks:search('Part-number searches','These search Amazon for the part number. They are not a check that the listing is the Watkins OEM part. Read the title and compare it with the cartridge page.',[
['OEM 71825 / C-6430','71825 spa filter','6" × 10-1/2" open-end Highlife cartridge.'],
['OEM 71827 / C-8465','71827 spa filter','8-1/2" × 10-1/2" open-end cartridge.'],
['OEM 78161','78161 spa filter','2018-and-later Limelight cartridge. Confirm length and diameter on the listing.'],
['Unicel C-6355','C-6355 spa filter','Unicel’s 75 sq ft replacement tied to OEM 1642301-1.'],
])},

{slug:'caldera-filter-bottom-fittings',published:D,reviewed:D,
title:'Caldera filter bottoms: male slip, open end, and the 2014 Cantabria split',
desc:'Caldera 7" and 8" cartridges that share a length and not a bottom fitting, including OEM 033016 vs 1019401 and the 74817 / 73722 quarter split on Utopia Cantabria.',
answer:`On Caldera’s 7" handle cartridges, the older parts have a <strong>2" male slip</strong> bottom (C-7451, OEM 033016, and C-7479, OEM 033017) and the later parts have a <strong>2-11/16" open</strong> bottom (C-7350, OEM 1019401, and C-7375, OEM 1019301 / 73531)${c('unicel26')}. On the 8" × 16-1/2" pair, Leisure Time says Utopia Cantabria uses OEM 74817 through the second quarter of 2014 and OEM 73722 from the third quarter of 2014 on${c('lt74817','lt73722')}. Look at the bottom of the old cartridge either way.`,
body:`<h2>Why Caldera has two filters that measure the same</h2>
<p>Caldera and Hot Spring come from the same Watkins factory, but most Caldera collections do not use the Hot Spring open-end cartridge. Paradise, Utopia and Highland models in the cited listings use a 7"-diameter cartridge with a semi-circular handle on top. The length is either 10-3/4" (about 50 sq ft in the rows below) or 14-3/4" (about 75 sq ft). The detail that changed over time is the bottom.</p>
<div class="tbl"><table><thead><tr><th>Unicel</th><th>OEM</th><th>Pleatco</th><th>Filbur</th><th>Size</th><th>Bottom</th></tr></thead><tbody>
<tr><td><a href="/caldera/c-7451/">C-7451</a></td><td>033016</td><td>PCD50</td><td>FC-3084</td><td>7" × 10-3/4"</td><td>2" male slip</td></tr>
<tr><td><a href="/caldera/c-7350/">C-7350</a></td><td>1019401; 73532</td><td>PCD50N</td><td>FC-3963</td><td>7" × 10-3/4"</td><td>2-11/16" open</td></tr>
<tr><td><a href="/caldera/c-7479/">C-7479</a></td><td>033017</td><td>PCD75</td><td>FC-3085</td><td>7" × 14-3/4"</td><td>2" male slip</td></tr>
<tr><td><a href="/caldera/c-7375/">C-7375</a></td><td>1019301; 73531</td><td>PCD75N</td><td>FC-3964</td><td>7" × 14-3/4"</td><td>2-11/16" open</td></tr>
</tbody></table></div>
<p>Unicel’s note on C-7451 says C-7350 can also be used, and the note on C-7479 says C-7375 can also be used${c('unicel26')}. Read that as Unicel’s interchange note, and still look at the cartridge you removed. A male slip is a stub that pushes into a fitting. An open bottom is a hole. If you still have the stub, the slip-bottom part is the one the spec row describes. If you have a hole about 2-11/16" across, the open-bottom part is the one the spec row describes. Pleatco marks the open-bottom numbers with an N (PCD50N, PCD75N) and the slip-bottom numbers without it (PCD50, PCD75)${c('pleatco23')}.</p>
<p>The open-bottom 14-3/4" cartridge is the one with the long model list. <a href="/caldera/c-7375/">C-7375</a> is cited for Utopia Geneva, Hawaiian, Niagara, Provence and Tahitian years, and for Paradise Geneva, Hawaiian, Makena, Moorea, Niagara, Reunion, Salina and Seychelles years, among others. Two of those lines carry an extra warning from Leisure Time: a 2004 Hawaiian HAA and a 2024 Makena need a serial-number check before you order${c('unicel26')}. The short open-bottom cartridge, <a href="/caldera/c-7350/">C-7350</a>, is the one cited for later Utopia Ravello, several Paradise models including a 2024-only Makena note, and Highland Cascade, Cumberland, San Gabriel and Teton. The <a href="/fitment/caldera-filter-by-model-year/">Caldera model-year lookup</a> is the index of those rows. A model name without the year is how people order the slip bottom for a spa that left the factory with the open bottom.</p>

<h2>The 8" Cantabria cartridges are a quarter-year problem</h2>
<p>Two Caldera cartridges share an 8" diameter, a 16-1/2" length and a 100 sq ft rating, and they do not share end caps.</p>
<ul>
<li><a href="/caldera/c-8300/">C-8300</a>, OEM 74817, Filbur FC-3966. Top and bottom are 3-1/8" open with a molded gasket. No Pleatco number is shown: the Leisure Time listing also names Pleatco PWK100, and PWK100 is not in the Pleatco 2023 spec tables, so we do not list it as an equivalent. The cited fitment is Utopia Cantabria 2009 through the second quarter of 2014. Leisure Time says to confirm the production quarter on a 2014 Cantabria, because third and fourth quarter production uses 73722${c('lt74817')}.</li>
<li><a href="/caldera/c-8399/">C-8399</a>, OEM 1039607 / 73722, Pleatco PCD100W, Filbur FC-3965. The top is a semi-circular handle and the bottom is 3-5/8" open with a lip seal. Leisure Time says this is the cartridge for Cantabria from the third quarter of 2014 onward, and that first and second quarter 2014 uses 74817${c('lt73722')}. The same listing names later Utopia Geneva, Niagara, Tahitian, Florence and Elation years, plus Aquatic Melodies Aspire and Elation for 2005–2008.</li>
</ul>
<p>A 2014 Cantabria owner who only knows the model name has a coin flip. The serial number or the production quarter is the tie-break, and the cartridge in the spa is the better one. Measure the bottom: a 3-1/8" opening with gaskets is the C-8300 description; a handle and a 3-5/8" lip-seal bottom is the C-8399 description.</p>

<h2>Vacanza is the Caldera line that borrows Hot Spring sizes</h2>
<p>Vacanza Marino, Palatino (2010–2026) and Vanto (2011–2026) are listed on <a href="/caldera/c-8465/">Caldera C-8465</a> for OEM 76136: 8-1/2" × 10-1/2", open 3" both ends, 65 sq ft, Pleatco PWK65, Filbur FC-3960. That is the same Unicel body as Hot Spring’s 71827 cartridge, with a Caldera OEM number. <a href="/caldera/c-6430/">Caldera C-6430</a> is the 6" × 10-1/2" open cartridge under OEM 31489, shared with Hot Spring Highlife. If your Caldera is a Vacanza, do not assume it takes the 7" handle cartridge the Paradise and Utopia listings use. Read the end cap, or start at the model-year table.</p>
<p><a href="/caldera/c-4335/">C-4335</a> (OEM 74148, Pleatco PRB35-IN) and <a href="/caldera/c-4950/">C-4950</a> (OEM 302005, Pleatco PRB50-IN) are the smaller open-end Caldera cartridges, 4-15/16" in diameter, 9-1/4" and 13-5/16" long. They are a third family. The fitting guide <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded</a> puts the three families side by side.</p>

<h2>How to order without guessing the year</h2>
<ol>
<li>Read the OEM number on the cartridge. 033016 and 033017 are the slip-bottom pair. 1019401, 73532, 1019301 and 73531 are the open-bottom pair. 74817 and 73722 are the 8" pair.</li>
<li>If the number is gone, measure diameter, length, and the bottom. Write “slip,” “open,” or “gasket,” and the size of the opening if you can take it.</li>
<li>For a 2014 Cantabria, get the production quarter or compare the ends with the two descriptions above${c('lt73722','lt74817')}.</li>
<li>For a 2024 Makena or a 2004 Hawaiian, the cited listing says to check the serial number${c('unicel26')}.</li>
<li>Then confirm on the cartridge page, which cites the catalog page the numbers came from. <a href="/guides/how-filbur-unicel-and-pleatco-numbers-compare/">How Filbur, Unicel and Pleatco numbers compare</a> shows what those three columns mean.</li>
</ol>
<p>Hot Spring’s chemical page is the one we cite for Watkins water ranges if you are balancing after a filter change: free chlorine 1–5 ppm, pH 7.2–7.8, alkalinity 40–120 ppm, calcium hardness 75–150 ppm on a standard system${c('hsChem')}. The filter fitting and the water chemistry are different jobs. A correct bottom does not fix a low sanitizer reading, and a bottle of balancer does not seal a slip fitting.</p>`,
faq:[['Are Caldera PCD50 and PCD50N the same filter?','Pleatco uses PCD50 for the male-slip cartridge (Unicel C-7451, OEM 033016) and PCD50N for the open-bottom cartridge (Unicel C-7350, OEM 1019401). Both are 7" × 10-3/4" and 50 sq ft. The bottom is the difference. The 75 sq ft pair is PCD75 and PCD75N.'],
['Which Caldera filter does a 2014 Utopia Cantabria use?','Leisure Time says to confirm the production quarter. OEM 74817 (Unicel C-8300) is listed through the second quarter of 2014. OEM 73722 (Unicel C-8399) is listed from the third quarter of 2014. The end caps differ: gaskets and a 3-1/8" opening versus a handle and a 3-5/8" lip seal.'],
['Does Unicel say the open-bottom cartridge can replace the slip-bottom one?','The Unicel note on C-7451 says C-7350 can also be used, and the note on C-7479 says C-7375 can also be used. The spec rows still print different bottoms. Compare the cartridge you removed before you rely on the interchange note.'],
['Do Vacanza spas use the 7" Caldera handle filter?','The Vacanza Marino, Palatino and Vanto years in our table are listed on the 8-1/2" × 10-1/2" C-8465 cartridge, OEM 76136, not on the 7" handle cartridges. Check the end cap.']],
src:['unicel26','pleatco23','filburCat','lt73722','lt74817','hsChem'],
related:['open-end-vs-threaded-hot-tub-filters','hot-spring-filter-sizes-by-collection','how-filbur-unicel-and-pleatco-numbers-compare','how-to-find-your-spa-filter-size','spas-that-use-more-than-one-filter'],
pickHeading:'Search Caldera part numbers on Amazon',
picks:search('Part-number searches','Search results are not a fit check. Match the bottom fitting on the cartridge page before you order.',[
['Caldera 1019401 / C-7350','1019401 spa filter','7" × 10-3/4", open bottom.'],
['Caldera 73531 / C-7375','73531 spa filter','7" × 14-3/4", open bottom.'],
['Caldera 033016 / C-7451','033016 spa filter','7" × 10-3/4", 2" male slip.'],
['Caldera 73722 / C-8399','73722 spa filter','8" × 16-1/2" Cantabria cartridge from Q3 2014.'],
])},

{slug:'bullfrog-threaded-and-coreless-filters',published:D,reviewed:D,
title:'Bullfrog spa filters: short thread, long thread, and coreless cartridges',
desc:'How Unicel, Pleatco and Leisure Time describe Bullfrog 8CH-950, 8CH-951, and the coreless PBF17 and PBF40 cartridges, including the cage-and-cap note and the area ratings that do not match.',
answer:`Bullfrog’s older threaded cartridges are not one part. Unicel marks <strong>8CH-950 discontinued</strong> and says to use <strong>8CH-951</strong>${c('unicel26')}. Pleatco lists PBF35 against a short-thread OEM (10-2785, 2003–2012) and PBF36 against the long-thread OEM 10-2870 (2013–2017)${c('pleatco23')}. From 2017, Pleatco’s spec table adds <strong>coreless</strong> cartridges PBF17 (OEM 10-00281) and PBF40 (OEM 10-00282), and Leisure Time says those need the correct filter cage and cap installed${c('ltBullfrog281','ltBullfrog282')}.`,
body:`<h2>Two threaded 8" cartridges, and a discontinued number</h2>
<p>Bullfrog used a top-load cartridge with a handle and an SAE thread before it moved some models to a coreless design. The threaded pair is where people order the wrong length.</p>
<div class="tbl"><table><thead><tr><th>Part</th><th>OEM as printed</th><th>Size</th><th>Thread</th><th>What the source says</th></tr></thead><tbody>
<tr><td><a href="/bullfrog/8ch-950/">Unicel 8CH-950</a> / Pleatco PBF35 / Filbur FC-0536</td><td>Unicel: 10-1035. Pleatco’s PBF35 spec row: 10-2785</td><td>8" × 6"</td><td>2" SAE, described by Pleatco as the short thread</td><td>Unicel: discontinued, use 8CH-951. Pleatco: Bullfrog 35, 2003–2012${c('unicel26','pleatco23')}</td></tr>
<tr><td><a href="/bullfrog/8ch-951/">Unicel 8CH-951</a> / Pleatco PBF36</td><td>10-2870</td><td>8" × 5-3/4"</td><td>2" SAE, described by Pleatco as the long thread</td><td>Pleatco: Bullfrog 35, 2013–2017. Unicel’s note says the original element is 35 sq ft and that the spec table rates 8CH-951 at 40 sq ft${c('unicel26','pleatco23')}</td></tr>
</tbody></table></div>
<p>Read the disagreements instead of averaging them. Unicel’s OEM for 8CH-950 is 10-1035. Pleatco’s spec row for the cartridge it cross-references, PBF35, prints OEM 10-2785, not 10-1035${c('pleatco23')}. Unicel says 8CH-950 is discontinued in favor of 8CH-951. The length on our rows is 6" for 8CH-950 and 5-3/4" for 8CH-951, and Unicel also says 8CH-951 replaces a Bullfrog element with a 6" overall length and a shorter threaded end${c('unicel26')}. Area is not settled in a single number either: Unicel’s note says the original cartridge is 35 sq ft and that the spec table rates 8CH-951 at 40 sq ft. The compiled size field on our 8CH-951 page shows 50 sq ft. Do not buy this cartridge by the square-foot figure. Buy it by OEM 10-2870 if that is the number on a 2013–2017 long-thread filter, and compare the thread length and the 5-3/4" body with the old one.</p>
<p>There is also a smaller threaded Bullfrog row, <a href="/bullfrog/6ch-940/">6CH-940</a>, with no OEM number in the catalogs we used: 6" × 8-1/4", semi-circular handle, injection-molded 1-1/2" SAE thread, Pleatco PWW50P3, Filbur FC-0359, 50 sq ft on the row. No model years are attached. If your cartridge is about 6" across rather than 8", start there and measure.</p>

<h2>Coreless cartridges: the fabric is not the whole filter</h2>
<p>Pleatco’s 2023 spec table lists two Bullfrog coreless cartridges for 2017 onward${c('pleatco23')}. Neither has a Unicel number in the 2026 guide, which is why those pages are filed under the Pleatco part.</p>
<ul>
<li><a href="/bullfrog/pbf17/">PBF17</a>, OEM 10-00281. Pleatco prints 6-5/8" × 6-1/4", 3-3/8" open top, 4-1/2" open bottom, and calls it the Bullfrog 18 coreless cartridge, 2017 to current. Our row shows 18 sq ft from that Pleatco description. Leisure Time rates the same OEM number at about 27 sq ft, lists Bullfrog STIL spas, and says 2015–2017 STIL spas need Filter Core Cage and Cap Assembly 10-00417. The listing also says the cartridge is coreless and that the correct filter cage and cap must be installed${c('ltBullfrog281')}.</li>
<li><a href="/bullfrog/pbf40/">PBF40</a>, OEM 10-00282. Pleatco prints 8" × 6-1/4" with the same style of open ends and calls it the Bullfrog 30 coreless cartridge, 2017 to current (30 sq ft on our Pleatco-based row). Leisure Time rates OEM 10-00282 at 50 sq ft, says 2013–2017 A/R/X spas need the Filter Core Cage and Cap Assembly, and says 2023-and-newer A Series models use Simplicity flat filters instead${c('ltBullfrog282')}. The fitment we publish from that listing is A Series and R Series for 2018–2022, and X Series for 2018–2026.</li>
</ul>
<p>The area gap (18 vs about 27, and 30 vs 50) is the same kind of catalog disagreement described in <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">why same-size filters show different square feet</a>. For a coreless Bullfrog filter it has an extra consequence: the pleated sock is only half the assembly. Leisure Time’s sentence is to install the correct cage and cap${c('ltBullfrog281','ltBullfrog282')}. If the cage is broken, a new sock does not replace the cage. If the spa is a 2023-or-newer A Series, the same listing says the filter is a Simplicity flat filter, not PBF40. Confirm that on the listing or in the spa before you order a coreless cartridge.</p>

<h2>Open-end Bullfrog rows that are not the threaded 8"</h2>
<p>Bullfrog also appears on two open-end cartridges that other brands use: <a href="/bullfrog/c-4335/">C-4335</a> (4-15/16" × 9-1/4", 2-1/8" open both ends, 35 sq ft, Pleatco PRB35-IN) and <a href="/bullfrog/c-4950/">C-4950</a> (4-15/16" × 13-5/16", same open ends, 50 sq ft, Pleatco PRB50-IN). Those rows do not carry a Bullfrog OEM number in our table. They are size matches from the catalogs, not a model-year list. If your Bullfrog cartridge is a short 8" threaded filter or a coreless sock, these 4-15/16" parts are the wrong family. The way to tell is the end cap, which is the subject of <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded hot tub filters</a>.</p>

<h2>What to photograph before you order</h2>
<ol>
<li>The OEM number, especially 10-1035, 10-2785, 10-2870, 10-00281 or 10-00282.</li>
<li>The overall length. A 6" threaded cartridge and a 5-3/4" threaded cartridge are both “about six inches” if you only glance at them.</li>
<li>The thread: short versus long is the distinction Pleatco prints for the 2003–2012 and 2013–2017 Bullfrog 35 cartridges${c('pleatco23')}.</li>
<li>Whether there is a plastic cage around the media. Coreless cartridges are open fabric over a cage. Threaded cartridges have a handle and a screw bottom.</li>
<li>The series badge (STIL, A, R, X) and the year, then check <a href="/fitment/bullfrog-filter-by-model-year/">Bullfrog filters by series and year</a>.</li>
</ol>
<p>Unicel’s maintenance page still applies after you have the right part: cartridges are replaced when cleaning stops restoring flow, not on a calendar alone, and acid washing is the step Unicel warns against doing casually${c('unicel','unicelReplace')}. Installation steps that every brand shares — power off, don’t run the spa empty of a filter — are in <a href="/guides/how-to-install-a-hot-tub-filter/">how to install a hot tub filter</a>.</p>`,
faq:[['Is Bullfrog 8CH-950 the same as 8CH-951?','Unicel says 8CH-950 is discontinued and to use 8CH-951. They are not printed as the same length: our rows show 8" × 6" for 8CH-950 and 8" × 5-3/4" for 8CH-951. Pleatco calls PBF35 the short-thread 2003–2012 cartridge and PBF36 the long-thread 2013–2017 cartridge (OEM 10-2870). Compare the thread on the old filter.'],
['Why do Bullfrog area ratings disagree?','Pleatco describes PBF17 as the 18 coreless cartridge and PBF40 as the 30. Leisure Time rates OEM 10-00281 at about 27 sq ft and OEM 10-00282 at 50 sq ft. Unicel’s note on 8CH-951 mentions 35 sq ft for the original element and 40 sq ft in the spec table, while our compiled size field shows 50. Match the OEM number and the body, not the area.'],
['Do I need a cage with a Bullfrog coreless filter?','Leisure Time says the PBF17 and PBF40 cartridges are coreless and that the correct filter cage and cap must be installed. It also gives a cage-and-cap assembly number (10-00417) for 2015–2017 STIL spas using 10-00281, and says 2013–2017 A/R/X spas need the cage assembly with 10-00282.'],
['What filter does a 2023 Bullfrog A Series use?','The Leisure Time listing for OEM 10-00282 says 2023-and-newer A Series models use Simplicity flat filters, not the coreless cartridge listed for earlier A Series years. Confirm against your cartridge before ordering PBF40.']],
src:['unicel26','unicel','unicelReplace','pleatco23','ltBullfrog281','ltBullfrog282'],
related:['open-end-vs-threaded-hot-tub-filters','why-same-size-spa-filters-have-different-square-feet','how-to-install-a-hot-tub-filter','how-filbur-unicel-and-pleatco-numbers-compare','spas-that-use-more-than-one-filter'],
pickHeading:'Search Bullfrog part numbers on Amazon',
picks:search('Part-number searches','Coreless and threaded Bullfrog filters are different assemblies. Read the listing title against the OEM number before you buy.',[
['Bullfrog 10-2870','10-2870 spa filter','Long-thread cartridge Pleatco lists as PBF36 for 2013–2017.'],
['Bullfrog 10-00282','10-00282 spa filter','Coreless cartridge Pleatco lists as PBF40. Confirm the cage, and confirm the spa is not a 2023-or-newer A Series.'],
['Bullfrog 10-00281','10-00281 spa filter','Coreless cartridge Pleatco lists as PBF17 for STIL.'],
['Unicel 8CH-951','8CH-951 spa filter','Unicel’s replacement for the discontinued 8CH-950.'],
])},
];
