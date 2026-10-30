import { SRC, REVIEWED, REVIEWED_NEW, c } from './guidesrc';
import type { PickGroup } from '../components/ProductPicks.astro';
import { extraGuides } from './guides2';
import { newGuides } from './guides3';
import { batchGuides } from './guides4';
import { moreGuides } from './guides5';
import { holidayGuides } from './guides6';
export { SRC, REVIEWED };
export type Guide={slug:string;title:string;desc:string;answer:string;body:string;faq:[string,string][];src:string[];picks?:PickGroup[];pickHeading?:string;related?:string[];reviewed?:string;intro?:string;published?:string};
const baseGuides: Guide[] = [
{slug:'how-often-to-replace-hot-tub-filter',title:'How often should you replace a hot tub filter?',
desc:'Replacement intervals for hot tub filter cartridges from Hot Spring, Jacuzzi, Sundance, Unicel and Pleatco, and why there is no single number.',
answer:`Most pleated spa cartridges are replaced somewhere between <strong>12 months and 3 years</strong>, depending on the brand and how hard the tub is used. Jacuzzi says 12–24 months${c('jac')}, Hot Spring says 2–3 years for standard cartridges${c('hsBlog')}. Disposable inner filters (such as Sundance MicroClean inserts) are on a much shorter schedule of a few months${c('sd780')}.`,
body:`<h2>What the manufacturers say</h2>
<div class="tbl"><table><thead><tr><th>Source</th><th>Filter</th><th>Replace</th></tr></thead><tbody>
<tr><td>Jacuzzi${c('jac')}</td><td>Pleated cartridges</td><td>Every 12–24 months, sooner if torn, flattened or heavily stained</td></tr>
<tr><td>Hot Spring${c('hsBlog')}</td><td>Polyester (“paper”) cartridge</td><td>Every 2–3 years</td></tr>
<tr><td>Hot Spring${c('hsBlog')}</td><td>TRI-X cartridge</td><td>Every 4–6 years</td></tr>
<tr><td>Hot Spring owner page${c('hsMaint')}</td><td>Cartridges</td><td>Every three years</td></tr>
<tr><td>Sundance 680 (2024 manual)${c('sd680')}</td><td>MicroClean Mini pleated filter / insert</td><td>12 months / 4 months</td></tr>
<tr><td>Sundance 780 (2024 manual)${c('sd780')}</td><td>Small MicroClean disposable cartridge</td><td>Every 3 months, or earlier</td></tr>
</tbody></table></div>
<p>Note that Hot Spring’s own pages give slightly different figures (“every three years” on the owner maintenance page versus “2–3 years” on its filter article), so treat any number as a starting point, not a deadline.</p>
<h2>Why there is no fixed lifespan</h2>
<p>Unicel and Pleatco both make the same point: a cartridge has no moving parts, so it doesn’t “fail” on a date. The media gradually plugs with body oils, soaps, chemicals and very fine particles${c('unicelReplace','pleatcoCat')}. They tie the end of a cartridge’s life to three things: shorter and shorter intervals between cleanings, low flow / high pressure, or physical failure such as torn media or a collapsed core${c('pleatcoCat')}.</p>
<h2>What makes a filter wear out faster</h2>
<ul><li>More bathers and more frequent use (Hot Spring notes that more use means more frequent cleaning)${c('hsBlog')}.</li><li>Unbalanced water chemistry${c('pleatcoCat')}.</li><li>Scrubbing with a stiff brush${c('pleatcoCat')}, or unnecessary acid washing — Unicel calls acid washing “perhaps the biggest single factor leading to premature cartridge failure”${c('unicel')}.</li></ul>
<h2>Stretch the life with two cartridges</h2><p>Unicel, Pleatco and Jacuzzi all recommend alternating two sets of cartridges so one can be soaked and dried fully while the other is in use${c('unicelReplace','pleatcoCat','jac')}. Find your replacement by OEM number on the <a href="/">homepage search</a>, or browse <a href="/hot-spring/">Hot Spring</a>, <a href="/jacuzzi/">Jacuzzi</a> and <a href="/sundance/">Sundance</a> cartridges.</p>`,
faq:[['Do I need to replace my hot tub filter every year?','Not necessarily. Jacuzzi gives a 12–24 month range and Hot Spring gives 2–3 years for standard cartridges; replace sooner if the cartridge is torn, flattened or no longer restores flow after cleaning.'],
['How long do disposable inner filters last?','They are on a much shorter schedule. Sundance’s 2024 780 Series manual says to replace the small MicroClean cartridge every 3 months, and its 680 Series manual says to replace the MicroClean Mini insert every 4 months.'],
['Does rotating two filters make them last longer?','Unicel, Pleatco and Jacuzzi all recommend alternating two sets so each can be cleaned and dried thoroughly between uses.']],
src:['jac','hsBlog','hsMaint','sd680','sd780','pleatcoCat','unicelReplace','unicel']},

{slug:'how-to-clean-a-hot-tub-filter',title:'How to clean a hot tub filter (step by step)',
desc:'The cartridge cleaning procedure Unicel and Pleatco publish: hose rinse, degreasing soak, optional acid soak, and rinse — plus what to avoid.',
answer:`Turn the spa off, remove the cartridge, hose it from the top down at about a 45° angle between every pleat, then soak it for at least an hour (overnight is better) in a filter cleaner, rinse thoroughly and reinstall. That is the procedure Unicel and Pleatco both publish${c('unicel','pleatcoCat')}.`,
body:`<h2>The full procedure</h2><ol>
<li><strong>Power off.</strong> Hot Spring and Jacuzzi both say to cut power before removing filters${c('hsManual','jac')}.</li>
<li><strong>Remove the cartridge</strong> following your spa maker’s instructions${c('unicel')}.</li>
<li><strong>Hose rinse.</strong> Use a straight-flow nozzle, work from the top down, hold it at about 45°, and focus between the pleats; rinse until all debris is gone${c('unicel','pleatcoCat')}.</li>
<li><strong>Degreasing soak.</strong> For spa cartridges, soak at least one hour (overnight is most effective) in a commercial filter cleaner, or 1 cup trisodium phosphate (TSP) per 5 gallons of water, or 1 cup dishwasher detergent per 5 gallons${c('unicel','pleatcoCat')}.</li>
<li><strong>Rinse again</strong> to remove oils and cleaner${c('unicel')}. Jacuzzi warns that leftover residue can cause foaming once the jets run${c('jac')}.</li>
<li><strong>Acid soak only if needed</strong> for mineral scale — see <a href="/guides/should-you-acid-wash-a-spa-filter/">should you acid wash a spa filter?</a></li>
<li><strong>Reinstall</strong> and restart. Don’t overtighten the filter retainer${c('hsManual')}.</li></ol>
<h2>Things to avoid</h2><ul><li>Stiff brushes on the media${c('pleatcoCat')}.</li><li>Pressure washers or high-pressure nozzles that can tear fibers${c('jac')} (some Sundance manuals do call for a high-pressure hose nozzle on the outer pleated filter — follow your own manual${c('sd680')}).</li><li>Dishwashers and washing machines${c('jac')} — see <a href="/guides/can-you-put-a-hot-tub-filter-in-the-dishwasher/">dishwasher guide</a>.</li><li>Any cleaner on disposable inner inserts — Sundance says never to use filter cleaners on them${c('sd680')}.</li></ul>
<h2>Using the spa while the filter soaks</h2><p>Jacuzzi advises against running the spa with no filter installed; keep a second clean cartridge to swap in${c('jac')}. Hot Spring’s manual also says not to use the spa with the cartridge removed${c('hsManual')}. Look up a spare by part number on the <a href="/">homepage</a>.</p>`,
faq:[['How long should I soak a hot tub filter?','Unicel and Pleatco say at least one hour, with overnight most effective. Pleatco’s FilterWash tablets are designed for a 25–30 minute soak.'],
['Do filters need to dry before going back in?','Jacuzzi says filters can be reinstalled damp; rotating two sets lets each dry completely, which it says extends life.'],
['Should I turn the hot tub off to clean the filter?','Yes. Hot Spring and Jacuzzi both instruct owners to turn power off before removing the filter.']],
src:['unicel','pleatcoCat','pleatcoWash','jac','hsManual','sd680']},

{slug:'how-often-to-clean-hot-tub-filter',title:'How often should you clean a hot tub filter?',
desc:'Rinse and deep-clean schedules for spa filter cartridges according to Hot Spring, Jacuzzi, Sundance, Pleatco and Unicel.',
answer:`A common baseline is a <strong>quick hose rinse weekly</strong> and a <strong>deep clean with filter cleaner every 4–6 weeks</strong> (Jacuzzi)${c('jac')}. Hot Spring recommends cleaning monthly${c('hsMaint','hsManual')}, and Pleatco notes most spa makers recommend monthly, every two weeks with heavy use, and after parties${c('pleatcoWash')}.`,
body:`<h2>Schedules compared</h2><div class="tbl"><table><thead><tr><th>Source</th><th>Rinse</th><th>Deep clean</th></tr></thead><tbody>
<tr><td>Jacuzzi${c('jac')}</td><td>Weekly (every 2–3 days with heavy use)</td><td>Every 4–6 weeks (3–4 with heavy use; 6–8 with light use)</td></tr>
<tr><td>Hot Spring${c('hsBlog','hsManual')}</td><td>Monthly</td><td>Soak whenever you drain the tub</td></tr>
<tr><td>Pleatco${c('pleatcoWash')}</td><td colspan="2">Monthly; every 2 weeks with heavy use; after heavy-use events</td></tr>
<tr><td>Sundance 680/780 (2024)${c('sd680','sd780')}</td><td colspan="2">Clean the pleated filter monthly</td></tr>
<tr><td>Unicel${c('unicel')}</td><td colspan="2">Set a routine based on how much the spa is used</td></tr></tbody></table></div>
<h2>Can you clean too often?</h2><p>Unicel notes cartridge filters use the debris they collect to improve filtration, so cleaning too often lowers efficiency while cleaning too rarely shortens cartridge life${c('unicel')}. On systems with a pressure gauge (more common on pools), Unicel suggests cleaning when pressure rises 8 psi above the new-cartridge starting pressure${c('unicel')}.</p>
<h2>Signs you are overdue</h2><p>Hot Spring warns a clogged filter can reduce jet performance, limit flow, and trip the high-limit thermostat${c('hsManual')}; Jacuzzi lists cloudy water, musty odor and FLO errors${c('jac')}. See <a href="/guides/signs-your-hot-tub-filter-is-bad/">signs your filter is bad</a>.</p>`,
faq:[['Is weekly rinsing necessary?','Jacuzzi recommends a weekly rinse for a regularly used family tub; Hot Spring’s baseline is monthly. Rinse more often with heavy use.'],
['Should I clean the filter after a party?','Pleatco says it is good practice to clean after heavy use such as a party.'],
['Do I clean the filter when I drain the tub?','Hot Spring recommends soaking (or replacing) the filters every time you drain.']],
src:['jac','hsMaint','hsBlog','hsManual','pleatcoWash','sd680','sd780','unicel']},

{slug:'how-to-find-your-spa-filter-size',title:'How to find your spa filter size',
desc:'Find the right replacement cartridge by its part number or by measuring diameter, length and end-cap fittings.',
answer:`First look for a part number printed on the end cap or label and <a href="/">search it here</a>. If there is none, measure the <strong>diameter</strong> across the widest point, the <strong>overall length</strong> end to end, and note the <strong>top and bottom fittings</strong> (open hole size, thread, handle or closed cap), then match them on the <a href="/size/">size lookup</a>. These are the same fields Unicel and Pleatco catalogs list for every cartridge${c('unicel26','pleatco23')}.`,
body:`<h2>Step 1: look for a number</h2><p>OEM, Unicel (e.g. C-xxxx) and Pleatco (e.g. Pxxx / PRBxx) numbers can all be looked up from the <a href="/">homepage search</a>. Our cross-reference comes from the Unicel 2026 Replacement Guide and the Pleatco 2023 catalog${c('unicel26','pleatco23')}. If your spa is a Hot Spring, Caldera, Jacuzzi, Sundance, Bullfrog or Master Spas, you can also look up the part by model and year: <a href="/fitment/hot-spring-filter-by-model-year/">Hot Spring</a>, <a href="/fitment/caldera-filter-by-model-year/">Caldera</a>, <a href="/fitment/jacuzzi-filter-by-model-year/">Jacuzzi</a>, <a href="/fitment/sundance-filter-by-model-year/">Sundance</a>, <a href="/fitment/bullfrog-filter-by-model-year/">Bullfrog</a> or <a href="/fitment/master-spas-filter-by-model-year/">Master Spas</a>. Two cartridges of the same size can carry different square-foot ratings; <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">here is why</a>.</p>
<h2>Step 2: measure</h2><div class="tbl"><table><thead><tr><th>Measurement</th><th>How</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Diameter</td><td>Across the widest point of the pleats / end cap</td><td>Must fit the filter well or housing</td></tr>
<tr><td>Length</td><td>End to end, including any handle or threaded nipple</td><td>Must fit the housing height</td></tr>
<tr><td>Top fitting</td><td>Open hole (measure inside), handle, or closed</td><td>Affects how it is held in place</td></tr>
<tr><td>Bottom fitting</td><td>Open hole size, or male/female thread size</td><td>Must seal on the standpipe or the water bypasses the media</td></tr></tbody></table></div>
<p>Catalog tables list diameter, length, top and bottom fittings and media area (sq ft) for each cartridge${c('unicel26','pleatco23')}. See an example with a to-scale diagram: <a href="/caldera/c-4335/">Caldera C-4335</a>.</p>
<h2>Square footage is not the deciding factor</h2><p>Media area (sq ft) helps distinguish two cartridges with the same dimensions, but match size and fittings first. Our <a href="/guide/">measuring guide</a> covers this in more detail.</p>`,
faq:[['Where is the part number on a hot tub filter?','Usually printed on an end cap or the label/band on the pleats. It may be an OEM spa-maker number or an aftermarket Unicel or Pleatco number.'],
['What if two cartridges have the same diameter and length?','Compare the top and bottom fittings and the square footage listed in the catalog.'],
['Do I measure the handle?','Measure the full overall length end to end; then compare with catalog length values and your old cartridge.']],
src:['unicel26','pleatco23']},

{slug:'oem-vs-unicel-vs-pleatco-spa-filters',title:'OEM vs Unicel vs Pleatco spa filters: what’s the difference?',
desc:'Why the same hot tub cartridge has an OEM number, a Unicel number and a Pleatco number, and how cross-references work.',
answer:`Spa makers (OEMs such as Hot Spring, Jacuzzi or Sundance) assign their own part numbers; Unicel and Pleatco are aftermarket cartridge makers that publish cross-reference tables mapping those OEM numbers to their own replacements${c('unicel26','pleatco23')}. A cross-referenced replacement is listed as matching the original’s dimensions and fittings.`,
body:`<h2>How the numbers relate</h2><div class="tbl"><table><thead><tr><th></th><th>Who makes it</th><th>Example numbering</th></tr></thead><tbody>
<tr><td>OEM</td><td>Sold by or for the spa maker</td><td>Brand-specific (e.g. Caldera 74148)</td></tr>
<tr><td>Unicel</td><td>Unicel (aftermarket)</td><td>C-xxxx (e.g. C-4335)</td></tr>
<tr><td>Pleatco</td><td>Pleatco (aftermarket)</td><td>Pxxx / PRBxx (e.g. PRB35-IN)</td></tr></tbody></table></div>
<p>Example from our data: <a href="/caldera/c-4335/">Caldera OEM 74148 ↔ Unicel C-4335 ↔ Pleatco PRB35-IN</a>, cross-referenced in the Unicel 2026 guide and Pleatco 2023 catalog${c('unicel26','pleatco23')}.</p>
<h2>What spa makers recommend</h2><p>Spa makers generally recommend their own filters: Hot Spring says to replace with genuine Watkins filters${c('hsMaint')}, and Jacuzzi recommends filters designed for your specific spa model${c('jac')}. Check your spa’s warranty terms before switching.</p>
<h2>Things to verify before buying</h2><ul><li>Diameter, length and both end fittings match.</li><li>Special designs (e.g. Hot Spring TRI-X, or Sundance two-stage assemblies with disposable inserts${c('sd780')}) may not have a direct aftermarket equivalent.</li><li>We flag rows we could not confirm in two sources as <em>unverified</em>.</li></ul><p>Browse by brand: <a href="/caldera/">Caldera</a>, <a href="/hot-spring/">Hot Spring</a>, <a href="/hot-spot/">Hot Spot</a>, <a href="/jacuzzi/">Jacuzzi</a>, <a href="/sundance/">Sundance</a>.</p>`,
faq:[['Are Unicel and Pleatco filters the same as OEM?','They are aftermarket cartridges that their makers cross-reference to OEM part numbers based on matching size and fittings. They are not made by the spa manufacturer.'],
['Will an aftermarket filter void my warranty?','We can’t say for your spa; check your warranty. Hot Spring, for example, recommends genuine Watkins replacement filters.'],
['Is a Unicel C-number the same as a Pleatco number?','Pleatco’s catalog cross-references Unicel numbers to its own, so a matched pair should fit the same housing.']],
src:['unicel26','pleatco23','hsMaint','jac','sd780']},

{slug:'signs-your-hot-tub-filter-is-bad',title:'Signs your hot tub filter is bad (and needs replacing)',
desc:'How to tell when a spa filter cartridge is worn out rather than just dirty, according to Unicel, Pleatco, Jacuzzi and Hot Spring.',
answer:`Replace a cartridge when cleaning no longer restores it: the time between cleanings keeps getting shorter, flow stays low, or the media is torn or the core collapsed${c('pleatcoCat','unicelReplace')}. Jacuzzi adds persistent cloudiness despite balanced water, limp pleats that don’t spring back, lasting odor after cleaning, cracked end caps, and flow errors right after cleaning${c('jac')}.`,
body:`<h2>Checklist</h2><div class="tbl"><table><thead><tr><th>Sign</th><th>Source</th></tr></thead><tbody>
<tr><td>Shorter cycles between cleanings</td><td>Unicel, Pleatco${c('unicelReplace','pleatcoCat')}</td></tr>
<tr><td>Low flow / high differential pressure</td><td>Unicel, Pleatco${c('unicelReplace','pleatcoCat')}</td></tr>
<tr><td>Torn media or collapsed center core</td><td>Unicel, Pleatco${c('unicelReplace','pleatcoCat')}</td></tr>
<tr><td>Limp or flattened pleats; cracked end caps</td><td>Jacuzzi${c('jac')}</td></tr>
<tr><td>Cloudy water or odor that persists after cleaning and balancing</td><td>Jacuzzi${c('jac')}</td></tr>
<tr><td>FLO / low-flow errors right after cleaning</td><td>Jacuzzi${c('jac')}</td></tr>
<tr><td>Discolored or worn media</td><td>Hot Spring${c('hsBlog')}</td></tr></tbody></table></div>
<h2>Discoloration alone isn’t proof</h2><p>Pleatco notes that “white does not indicate clean” and media can discolor over time, while faded end caps can come from chlorine and cyanuric acid — though it can also indicate an old cartridge${c('pleatcoWash')}.</p>
<h2>Why it matters</h2><p>Hot Spring warns a clogged filter can trip the high-limit thermostat and shut the spa off${c('hsManual')}. CDC advises regular cartridge replacement per the manufacturer as part of controlling germs like Legionella in hot tubs${c('cdcLeg')}. Ready to replace? <a href="/">Search your part number</a>.</p>`,
faq:[['Can a filter look dirty but still be fine?','Yes. Pleatco says white does not mean clean and media can discolor naturally; judge by flow and condition after a proper clean.'],
['What does a FLO error have to do with the filter?','Jacuzzi lists FLO/low-flow errors as a filter-related symptom; rinse and inspect the filter first, and call a dealer if it persists with a clean filter.']],
src:['pleatcoCat','unicelReplace','jac','hsBlog','hsManual','pleatcoWash','cdcLeg']},

{slug:'spa-filter-cleaner-vs-diy-soak',title:'Spa filter cleaner vs DIY soaks (TSP, dishwasher detergent, vinegar, bleach)',
desc:'Which cleaning solutions cartridge makers actually approve for hot tub filters, and which to avoid.',
answer:`Unicel and Pleatco approve three soaks: a commercial filter cleaner, 1 cup TSP per 5 gallons, or 1 cup dishwasher detergent per 5 gallons${c('unicel','pleatcoCat')}. Jacuzzi prefers commercial non-foaming cleaners, allows a 1:3 white vinegar solution for light mineral scale, and says to avoid chlorine bleach, harsh degreasers, bathroom cleaners and abrasive powders${c('jac')}.`,
body:`<h2>Comparison</h2><div class="tbl"><table><thead><tr><th>Option</th><th>What sources say</th></tr></thead><tbody>
<tr><td>Commercial spa filter cleaner</td><td>Approved by Unicel/Pleatco${c('unicel','pleatcoCat')}; Jacuzzi’s preferred choice${c('jac')}; Hot Spring recommends a filter degreaser${c('hsManual')}</td></tr>
<tr><td>Trisodium phosphate (TSP)</td><td>1 cup per 5 gallons, soak ≥1 hour${c('unicel','pleatcoCat')}</td></tr>
<tr><td>Dishwasher detergent</td><td>1 cup per 5 gallons${c('unicel','pleatcoCat')}; Jacuzzi warns detergents can foam if not rinsed extremely well${c('jac')}</td></tr>
<tr><td>White vinegar</td><td>1 part to 3 parts water for light mineral scale; weak on oils${c('jac')}</td></tr>
<tr><td>Chlorine bleach</td><td>Avoid — can damage fibers${c('jac')}; Pleatco says bleaching agents can damage filtration fabric${c('pleatcoWash')}</td></tr>
<tr><td>Muriatic acid</td><td>Only for confirmed mineral scale, after degreasing — <a href="/guides/should-you-acid-wash-a-spa-filter/">see guide</a></td></tr></tbody></table></div>
<h2>Special cases</h2><ul><li><strong>Biguanide (Baquacil) users:</strong> Unicel and Pleatco say the cartridge must be cleaned with Baqua Clean before any cartridge cleaner${c('unicel','pleatcoCat')}.</li><li><strong>Disposable inserts:</strong> Sundance says never use filter cleaners on its inner inserts${c('sd680')}.</li><li><strong>Tablets:</strong> Pleatco FilterWash is meant for a 25–30 minute soak and the solution should not be saved${c('pleatcoWash')}.</li></ul><p>Always rinse thoroughly before reinstalling. Need a fresh cartridge instead? <a href="/">Find yours</a>.</p>`,
faq:[['Can I use bleach on a hot tub filter?','Jacuzzi says to avoid chlorine bleach, and Pleatco says bleaching agents can damage filtration fabric.'],
['Is dishwasher detergent safe for spa filters?','Unicel and Pleatco list 1 cup per 5 gallons of water as an option; rinse very thoroughly because detergent residue can foam.'],
['Does vinegar clean a hot tub filter?','Jacuzzi says a 1:3 vinegar solution helps with light mineral deposits but is less effective on oils and sunscreen.']],
src:['unicel','pleatcoCat','pleatcoWash','jac','hsManual','sd680']},

{slug:'should-you-acid-wash-a-spa-filter',title:'Should you acid wash a spa filter?',
desc:'When muriatic acid soaking is appropriate for a hot tub cartridge, Unicel’s bubble test, and the safety rules.',
answer:`Usually not. Unicel calls acid washing “perhaps the biggest single factor leading to premature cartridge failure” and says to acid wash only when required, and never without degreasing first${c('unicel')}. If a drop of acid on clean, rinsed media bubbles, there’s mineral buildup and a mild soak of 1 part muriatic acid to 20 parts water is the published remedy${c('unicel')}.`,
body:`<h2>Unicel’s bubble test</h2><ol><li>Degrease the cartridge thoroughly and rinse away all soap${c('unicel')}.</li><li>Put a few drops of acid on a small area of media.</li><li>Bubbling = calcium/mineral buildup → mild acid soak. No bubbling = no acid wash needed${c('unicel')}.</li></ol>
<h2>The soak</h2><p>1 part muriatic acid to 20 parts water until bubbling stops, then rinse${c('unicel','pleatcoCat')}. Unicel warns that acid-soaking before removing all oils and cleaner causes a permanent flow restriction${c('unicel')}.</p>
<h2>Safety</h2><ul><li>Wear rubber gloves and safety glasses; don’t add water to acid; never mix chlorine and acid${c('unicel')}.</li><li>Jacuzzi says strong acids like muriatic acid should only be used by professionals and never as a first-step cleaner${c('jac')}.</li></ul>
<p>If the cartridge is old and scaled, a replacement may be the safer choice — <a href="/">search your part number</a>.</p>`,
faq:[['What ratio of muriatic acid for a spa filter?','Unicel and Pleatco publish 1 part muriatic acid to 20 parts water, used only after degreasing and rinsing.'],
['Why degrease before acid?','Unicel warns acid-soaking with oils or cleaner still present causes a permanent restriction of flow and premature failure.']],
src:['unicel','pleatcoCat','jac']},

{slug:'can-you-put-a-hot-tub-filter-in-the-dishwasher',title:'Can you put a hot tub filter in the dishwasher or use a pressure washer?',
desc:'What Jacuzzi, Pleatco and Sundance say about dishwashers, washing machines, pressure washers and stiff brushes on spa filter cartridges.',
answer:`No to the dishwasher: Jacuzzi says dishwashers and washing machines aren’t recommended because high heat and aggressive spray can warp end caps and don’t clean deep between the pleats${c('jac')}. For rinsing, use a garden hose; Jacuzzi says to avoid pressure washers that can tear fibers${c('jac')}.`,
body:`<h2>Quick answers</h2><div class="tbl"><table><thead><tr><th>Method</th><th>Verdict</th></tr></thead><tbody>
<tr><td>Dishwasher / washing machine</td><td>Not recommended${c('jac')}</td></tr>
<tr><td>Pressure washer</td><td>Avoid — can tear fibers or damage seams${c('jac')}</td></tr>
<tr><td>Garden hose, top-down at ~45°</td><td>Recommended${c('unicel','pleatcoCat')}</td></tr>
<tr><td>Stiff brush</td><td>Never on the media${c('pleatcoCat')}</td></tr>
<tr><td>Dishwasher detergent as a bucket soak</td><td>Allowed by Unicel/Pleatco (1 cup per 5 gal)${c('unicel','pleatcoCat')}</td></tr></tbody></table></div>
<p>Note the difference: putting dishwasher <em>detergent</em> in a soaking bucket is a published option; running the cartridge through a dishwasher is not. Sundance’s 2024 680 manual specifies a high-pressure hose nozzle for its outer pleated filter but a low-pressure nozzle and no chemicals for the insert${c('sd680')} — follow your own spa’s manual. Full steps in <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>.</p>`,
faq:[['Will a dishwasher damage a hot tub filter?','Jacuzzi says high heat and aggressive spray can warp end caps, and dishwashers don’t clean deep between the pleats.'],
['What about filter-cleaning wands?','Unicel and Pleatco describe a garden hose with a straight-flow nozzle. Jacuzzi warns against high-pressure tools that can tear fibers, so avoid anything aggressive on the media.']],
src:['jac','unicel','pleatcoCat','sd680']},
];
// Product picks attached to the original filter-care guides (all links built in src/config/affiliate.ts).
const attach: Record<string, PickGroup[]> = {
  'how-to-clean-a-hot-tub-filter': [
    {h:'Filter cleaners for the soak step',intro:'Unicel and Pleatco describe a degreasing soak of at least an hour; these are purpose-made cartridge cleaners.',keys:['lt-filter-clean-o','spaguard-filter-cleaner','powersoak','aquadoc-filter-soak']},
    {h:'Spray-on cleaner and tools',keys:['black-diamond-spray','filter-flosser']}],
  'how-often-to-clean-hot-tub-filter': [
    {h:'Cleaners to keep on hand',keys:['lt-filter-clean-o','spaguard-filter-cleaner','powersoak']}],
  'spa-filter-cleaner-vs-diy-soak': [
    {h:'Purpose-made filter cleaners',keys:['lt-filter-clean-o','spaguard-filter-cleaner','powersoak','aquadoc-filter-soak','black-diamond-spray']}],
  'should-you-acid-wash-a-spa-filter': [
    {h:'Degreasing cleaners (the step to do before any acid)',keys:['lt-filter-clean-o','spaguard-filter-cleaner','powersoak']}],
  'can-you-put-a-hot-tub-filter-in-the-dishwasher': [
    {h:'Safer ways to clean: filter cleaners',keys:['lt-filter-clean-o','spaguard-filter-cleaner','aquadoc-filter-soak']}],
  'signs-your-hot-tub-filter-is-bad': [
    {h:'Check the water too',intro:'Cloudy or foamy water can come from the filter or the chemistry; test before you replace anything.',keys:['aquachek-spa-6in1','aquachek-yellow-4way','lt-filter-clean-o']}],
  'how-often-to-replace-hot-tub-filter': [
    {h:'Care products that help a cartridge last',intro:'Unicel and Pleatco tie cartridge life to cleaning and chemistry; these are the basics.',keys:['lt-filter-clean-o','spaguard-filter-cleaner','aquachek-spa-6in1']}],
};
for (const g of baseGuides) if (attach[g.slug]) { g.picks = attach[g.slug]; g.reviewed = REVIEWED_NEW; }

export const guides: Guide[] = [...baseGuides, ...extraGuides, ...newGuides, ...batchGuides, ...moreGuides, ...holidayGuides];
