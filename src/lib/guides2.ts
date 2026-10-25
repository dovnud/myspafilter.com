import { c, REVIEWED_NEW as R } from './guidesrc';
import type { Guide } from './guides';

const NOTE = `<p><small>Product lists below are picks, not rankings. We checked that each Amazon listing exists and what its title says; we have not lab-tested any product, and we do not publish prices or star ratings because they change. Match any product to your spa maker’s guidance, and keep the label directions as your final word.</small></p>`;

export const extraGuides: Guide[] = [

{slug:'best-hot-tub-test-strips',reviewed:R,title:'Best hot tub test strips and test kits: how to choose',
desc:'What test strips and kits actually measure, which readings matter for chlorine vs bromine tubs, and a short list of strips and DPD kits to consider.',
answer:`Pick strips that read <strong>your</strong> sanitizer (free chlorine <em>or</em> bromine), plus pH, total alkalinity and calcium hardness. CDC says to use test strips to check disinfectant and pH${c('cdcRash')}, and Hot Spring’s own recommended ranges are free chlorine 1–5 ppm, pH 7.2–7.8, total alkalinity 40–120 ppm and calcium hardness 75–150 ppm${c('hsChem')}.`,
body:`<h2>What you are testing for</h2>
<div class="tbl"><table><thead><tr><th>Reading</th><th>Range given by source</th><th>Source</th></tr></thead><tbody>
<tr><td>Free chlorine</td><td>1.0–5.0 ppm (Hot Spring owners) · at least 3 ppm (CDC hot tub rash page)</td><td>${c('hsChem','cdcRash')}</td></tr>
<tr><td>Bromine</td><td>4–8 ppm</td><td>${c('cdcRash','cdcLeg')}</td></tr>
<tr><td>pH</td><td>7.2–7.8 (Hot Spring, CDC Legionella toolkit) · 7.0–7.8 (CDC rash page)</td><td>${c('hsChem','cdcLeg','cdcRash')}</td></tr>
<tr><td>Total alkalinity</td><td>40–120 ppm (Hot Spring)</td><td>${c('hsChem')}</td></tr>
<tr><td>Calcium hardness</td><td>75–150 ppm standard; 25–75 ppm with Hot Spring’s salt system</td><td>${c('hsChem')}</td></tr></tbody></table></div>
<p>The ranges differ a little between sources, which is normal: CDC’s numbers are public-pool baselines, while a spa maker’s numbers are tuned to its own equipment. Follow your owner’s manual if it gives different numbers.</p>
<h2>Strips vs liquid (DPD) kits</h2>
<p>Strips are quick: you dip, wait and compare the colors to the chart, which Hot Spring describes as giving “a working range” for pH, alkalinity, hardness and chlorine${c('hsChem')}. Liquid reagent kits (the DPD kits below) take more steps and are usually chosen when you want finer readings. CDC’s chemical-safety page also notes that if a reading is off the top of the scale you may need dilution or higher-range strips${c('cdcChem')}.</p>
<h2>How to choose</h2><ul>
<li><strong>Match the sanitizer.</strong> A strip made for bromine reads bromine; a chlorine strip reads chlorine. The AquaChek “Red” and “Yellow” listings below make this split in their titles.</li>
<li><strong>Salt-system tubs need the right strip.</strong> Hot Spring warns that calcium tolerances are lower with its salt system, so use the strips made for your spa model${c('hsChem')}.</li>
<li><strong>Check the date and keep the bottle closed.</strong> Strips are color chemistry; follow the package instructions for timing and storage.</li>
<li><strong>Test often.</strong> CDC’s toolkit tells <em>public</em> hot tub operators to test disinfectant and pH at least twice a day${c('cdcLeg')}; home owners usually test less often, but more frequent testing is better in heavy use. Check your own manual for its schedule.</li></ul>
<h2>Why bother</h2><p>CDC links hot tub rash to sitting in a poorly maintained tub and recommends checking disinfectant and pH with test strips${c('cdcRash')}. Our <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">pH and alkalinity guide</a> covers what to do with the numbers.</p>${NOTE}`,
picks:[
{h:'Spa strips for bromine tubs',intro:'Pick a strip whose listing names bromine.',keys:['aquachek-red-4way','aquachek-spa-6in1','aquachek-7way']},
{h:'Strips that read free chlorine',intro:'Pick one of these for chlorine-sanitized tubs.',keys:['aquachek-yellow-4way','leisure-45006a','lamotte-insta-test-3','hth-86138-strips']},
{h:'Manufacturer strips',intro:'If you own a Hot Spring tub, the brand’s own strips are designed around its ranges; confirm which strip fits your sanitizer system.',keys:['hotspring-freshwater-strips']},
{h:'Liquid DPD kits',intro:'More steps, finer color matching, refillable reagents.',keys:['poolmaster-5way-kit','taylor-k1005','taylor-k2005']}],
faq:[['How often should I test hot tub water?','CDC’s toolkit says public hot tubs should be tested at least twice a day; for a home tub, follow your spa maker’s manual. More often is better in heavy use.'],
['Do test strips read bromine and chlorine?','Only if the strip says so. Some strips read bromine, some read free chlorine, and some read both; check the listing title and package.'],
['What pH should a hot tub be?','Hot Spring and CDC’s Legionella toolkit both give 7.2–7.8; CDC’s hot tub rash page gives 7.0–7.8.']],
src:['hsChem','cdcRash','cdcLeg','cdcChem']},

{slug:'how-to-balance-hot-tub-ph-and-alkalinity',reviewed:R,title:'How to balance hot tub pH and alkalinity (in the right order)',
desc:'Total alkalinity first, then calcium, then pH: the order Hot Spring’s manual gives, target ranges, how to add chemicals, and pH/alkalinity products to consider.',
answer:`Hot Spring’s 2026 owner’s manual says to adjust <strong>total alkalinity first</strong> (target 80 ppm), then calcium hardness (target 100 ppm), then pH (target 7.4–7.8), because out-of-balance alkalinity affects your ability to adjust pH and keeps sanitizer from working effectively${c('hsManual')}.`,
body:`<h2>The order and the targets</h2>
<div class="tbl"><table><thead><tr><th>Step</th><th>Target</th><th>Acceptable range</th></tr></thead><tbody>
<tr><td>1. Total alkalinity</td><td>80 ppm</td><td>40–120 ppm</td></tr>
<tr><td>2. Calcium hardness</td><td>100 ppm (50 ppm with salt system)</td><td>75–150 ppm (25–75 ppm with salt system)</td></tr>
<tr><td>3. pH</td><td>7.4 (manual); 7.4–7.8 start-up instruction</td><td>7.2–7.8</td></tr></tbody></table></div>
<p>Figures are from Hot Spring’s Hot Spot owner’s manual${c('hsManual')} and its chemical FAQ${c('hsChem')}. CDC’s Legionella toolkit also lists pH 7.2–7.8${c('cdcLeg')}. Your own spa’s manual is the controlling document.</p>
<h2>How to add the chemicals</h2><ol>
<li><strong>Test first</strong> with a strip or kit (see <a href="/guides/best-hot-tub-test-strips/">test strip guide</a>).</li>
<li><strong>Add through the filter compartment with the jets on high.</strong> Hot Spring says granulated pH increaser/decreaser and alkalinity increaser go directly into the filter compartment with the jet pump on high for at least ten minutes${c('hsManual')}.</li>
<li><strong>Measure carefully and avoid splashing</strong> on hands, eyes or the shell surface${c('hsManual')}.</li>
<li><strong>Retest, then adjust again</strong> in small steps rather than one big dose.</li></ol>
<h2>Which product for which problem</h2><ul>
<li><strong>Alkalinity or pH too high:</strong> a pH/alkalinity decreaser (“down”). Hot Spring lists high total alkalinity/pH as a probable cause of scale and recommends pH/alkalinity down${c('hsWater')}.</li>
<li><strong>Alkalinity or pH too low:</strong> alkalinity increaser or pH increaser (“up”). Hot Spring lists low total alkalinity and/or pH as a probable cause of staining when source water also has iron or copper${c('hsWater')}.</li>
<li><strong>Calcium low:</strong> a calcium hardness increaser, mainly for soft fill water.</li></ul>
<h2>Safety</h2><ul><li>Read the label and safety data sheet and use protective equipment; CDC’s pool-chemical page says injuries happen when chemicals are mixed or protective equipment is not used${c('cdcChem')}.</li>
<li>Never combine two chemicals in one container or pour them together; add one at a time. CDC says to store each product separately, in its original labeled container${c('cdcChem')}.</li>
<li>Hot Spring’s manual says not to use chemicals other than those recommended by Watkins Wellness or its dealers${c('hsManualUK')}. If your tub is under warranty, ask your dealer before switching brands.</li></ul>${NOTE}`,
picks:[
{h:'pH and alkalinity “up”',keys:['spaguard-ph-up','spaguard-ta-up','hth-ph-up','hth-alk-up','spa-up','clorox-ph-up']},
{h:'pH “down”',keys:['spa-down','hth-ph-down','clorox-ph-down']},
{h:'Calcium hardness',keys:['spaguard-calcium']}],
faq:[['What do I adjust first, pH or alkalinity?','Hot Spring’s manual says total alkalinity first, then calcium hardness, then pH.'],
['Where do I add pH chemicals to a hot tub?','Hot Spring’s manual says into the filter compartment with the jet pump on high for at least ten minutes.'],
['Can I mix pH up and pH down?','No. Add one at a time and retest. CDC warns that pool chemicals can injure people when mixed together.']],
src:['hsManual','hsManualUK','hsChem','hsWater','cdcLeg','cdcChem']},

{slug:'best-hot-tub-sanitizer-bromine-chlorine-mineral',reviewed:R,title:'Hot tub sanitizer: bromine vs chlorine vs mineral systems',
desc:'How the main hot tub sanitizers differ, what CDC and Hot Spring say about residual levels and stabilized chlorine, and a short list of tablets, floaters and granules.',
answer:`CDC’s target residuals for hot tubs are <strong>free chlorine 3–10 ppm or bromine 4–8 ppm</strong> with pH 7.2–7.8${c('cdcLeg')}; Hot Spring’s owner range for chlorine is 1–5 ppm${c('hsChem')}. Whichever you choose, you need a test kit that reads it. One caution: CDC’s toolkit says cyanuric acid / stabilized chlorine products should not be used in hot tubs because they slow disinfection${c('cdcLeg')}, while Hot Spring’s own manual uses sodium dichlor (a stabilized chlorine) for superchlorinating${c('hsManual')}; follow your spa maker.`,
body:`<h2>The three common approaches</h2>
<div class="tbl"><table><thead><tr><th>System</th><th>How you use it</th><th>What to know</th></tr></thead><tbody>
<tr><td>Bromine</td><td>Tablets in a floater or in-line feeder, with a sodium-bromide “bromine reserve” sometimes used to start</td><td>CDC lists bromine 4–8 ppm for hot tubs${c('cdcRash','cdcLeg')}. Needs a strip or kit that reads bromine.</td></tr>
<tr><td>Chlorine (granules)</td><td>Measured doses of granules, added through the filter compartment</td><td>Hot Spring’s range is 1–5 ppm free chlorine${c('hsChem')}; CDC says 3–10 ppm${c('cdcLeg')}. Check the label for “stabilized/dichlor” (see the CDC note above).</td></tr>
<tr><td>Mineral / cartridge systems</td><td>A cartridge or floater that releases a sanitizer or mineral over weeks</td><td>Some products pair with a conventional sanitizer, so read the label. Follow the product’s own instructions and still test the water; the listings below describe what each product says it is.</td></tr></tbody></table></div>
<h2>Choosing</h2><ul>
<li><strong>Start from your owner’s manual.</strong> Hot Spring’s manual specifies adding chemicals through the filter compartment with the jets on high${c('hsManual')}; some spas ship with an in-line feeder instead.</li>
<li><strong>Floaters:</strong> a floating dispenser holds tablets sized for it, so check the tablet size on the listing. The two floaters below say they fit 1-inch tablets (440) or chlorine and bromine tablets (U.S. Pool Supply).</li>
<li><strong>Don’t switch sanitizers casually.</strong> Moving between bromine and chlorine is covered in your spa maker’s instructions; don’t guess.</li>
<li><strong>Hot water changes things.</strong> CDC notes that hot tubs sit in the temperature range favorable to Legionella (77–113°F) and make aerosols and speed up disinfectant decay${c('cdcLeg')}, which is why a steady, measured residual matters more than any brand.</li></ul>
<h2>Handling and storage</h2><p>CDC says to store pool chemicals below 95°F, away from sun and moisture, in their original labeled containers, with each product stored separately and incompatible chemicals kept apart${c('cdcChem')}. See our <a href="/guides/hot-tub-chemical-safety-and-storage/">chemical safety guide</a>.</p>${NOTE}`,
picks:[
{h:'Bromine tablets and reserve',keys:['leisure-45401-bromine','spaguard-bromine','hth-86108-bromine','leisure-be1','aquadoc-bromine-booster']},
{h:'Floating dispensers',keys:['floater-440','floater-uspool']},
{h:'Chlorine granules (check the label for stabilized/dichlor)',keys:['leisure-e5-granules','aquadoc-chlorine-granules','hth-86134r']},
{h:'Cartridge and mineral systems',intro:'The Hot Springs-compatible cartridge listing names Marquis, Caldera, Artesian and Hot Springs spas; confirm your model before ordering.',keys:['frog-ease','frog-ease-hotsprings']}],
faq:[['What chlorine level should a hot tub have?','CDC’s Legionella toolkit lists free chlorine 3–10 ppm for display hot tubs; Hot Spring’s owners’ range is 1–5 ppm. Follow your spa maker.'],
['What bromine level should a hot tub have?','CDC lists 4–8 ppm.'],
['Is stabilized chlorine OK in a hot tub?','CDC’s toolkit footnote says cyanuric acid or stabilized chlorine products should not be used in hot tubs because they slow disinfection. Hot Spring’s manual uses sodium dichlor for superchlorinating. Check what your spa maker specifies.']],
src:['cdcLeg','cdcRash','cdcChem','hsChem','hsManual']},

{slug:'hot-tub-shock-chlorine-vs-non-chlorine',reviewed:R,title:'Hot tub shock: chlorine vs non-chlorine (and when to use it)',
desc:'What “shocking” a hot tub means, what Hot Spring and CDC say about superchlorinating, and non-chlorine oxidizers to consider.',
answer:`“Shock” is a higher-than-normal dose of oxidizer. Hot Spring’s manual superchlorinates new water with <strong>1½ teaspoons of sodium dichlor per 250 gallons</strong> and lists MPS (non-chlorine shock) among the chemicals added through the filter compartment${c('hsManual')}. Hot Spring’s troubleshooting page repeatedly lists “shock spa with sanitizer” as a fix for water problems${c('hsWater')}.`,
body:`<h2>Two kinds of shock</h2><ul>
<li><strong>Chlorine shock</strong> (such as dichlor granules) raises chlorine for a while. Hot Spring’s start-up routine uses it${c('hsManual')}. CDC’s toolkit footnote cautions against stabilized chlorine in hot tubs${c('cdcLeg')}, so confirm what your spa maker recommends.</li>
<li><strong>Non-chlorine shock</strong> (MPS or similar oxidizer) is sold to oxidize contaminants without raising chlorine; Hot Spring’s manual includes “MPS” in the list of chemicals it tells owners to add to the filter compartment${c('hsManual')}. Several listings below describe themselves as non-chlorine.</li></ul>
<h2>When to shock</h2><p>Hot Spring’s troubleshooting list includes shocking when water is affected by dirty filters, excessive oils or organic matter, improper sanitizing or overused water${c('hsWater')}. It also advises letting free chlorine fall below 5 ppm before using the spa when the level is above 5 ppm${c('hsWater')}, so always wait and re-test after shocking.</p>
<h2>How to do it safely</h2><ol>
<li>Cover off, jets on high, <strong>chemicals into the filter compartment</strong>, ten minutes minimum${c('hsManual')}.</li>
<li>Measure the dose from the label for your water volume; don’t eyeball it.</li>
<li>Follow the label for how long to wait before anyone gets back in, then re-test and wait until chlorine is back in range (Hot Spring says below 5 ppm${c('hsWater')}).</li>
<li>Store leftover product dry, separate from other chemicals and sealed in its original container${c('cdcChem')}.</li></ol>
<p>When the water won’t clear after shocking, see our <a href="/guides/hot-tub-foam-cloudy-water-and-jet-cleaners/">foam, cloudy water and jet cleaner guide</a>; a clogged cartridge is a common reason, so <a href="/guides/how-to-clean-a-hot-tub-filter/">clean the filter</a> too.</p>${NOTE}`,
picks:[
{h:'Non-chlorine shock (oxidizer)',keys:['renu2','renu5','hth-86135-shock','aquadoc-nc-shock-32','aquadoc-nc-shock-5lb','frog-maintain']},
{h:'Chlorine and all-in-one',intro:'Read the label to see whether the active ingredient is stabilized (see the CDC note above).',keys:['frog-jumpstart','clorox-allinone','spaguard-shock']}],
faq:[['What is hot tub shock?','A higher-than-normal dose of oxidizer. Hot Spring’s manual uses sodium dichlor (chlorine) or MPS (non-chlorine shock).'],
['Can I use the hot tub right after shocking?','Follow the label. Hot Spring says to let free chlorine fall below 5 ppm before using the spa when it is above that.'],
['Where do I add shock to a hot tub?','Hot Spring says all spa chemicals go directly into the filter compartment with the jet pump running on high for at least ten minutes.']],
src:['hsManual','hsWater','cdcLeg','cdcChem']},

{slug:'best-hot-tub-filter-cleaners',reviewed:R,title:'Best hot tub filter cleaners: soaks, sprays and tools',
desc:'Soak vs spray vs DIY, what Unicel and Pleatco say about degreasing, and a short list of spa filter cleaners and cleaning tools.',
answer:`Unicel and Pleatco both say a spa cartridge needs a <strong>degreasing soak of at least one hour (overnight is best)</strong> in a commercial filter cleaner or a DIY alternative after a hose rinse${c('unicel','pleatcoCat')}; a purpose-made cleaner saves the guesswork. Always rinse thoroughly afterward because leftover residue can cause foaming${c('jac')}.`,
body:`<h2>Soak, spray or DIY?</h2><div class="tbl"><table><thead><tr><th>Method</th><th>Notes</th></tr></thead><tbody>
<tr><td>Concentrated soak (liquid or powder)</td><td>Dilute per label, submerge the cartridge, rinse. Matches the one-hour minimum Unicel and Pleatco describe${c('unicel','pleatcoCat')}.</td></tr>
<tr><td>Spray-on cleaner</td><td>Spray, wait per label, rinse. Convenient between full soaks; read the label for contact time.</td></tr>
<tr><td>DIY soak</td><td>Unicel/Pleatco list TSP or dishwasher detergent in a bucket; see <a href="/guides/spa-filter-cleaner-vs-diy-soak/">cleaner vs DIY</a>.</td></tr></tbody></table></div>
<h2>What to look for</h2><ul>
<li><strong>Made for cartridge filters</strong> — look for “filter cleaner” or “cartridge cleaner” on the label.</li>
<li><strong>Match your spa maker.</strong> Hot Spring names its own filter cleaners as the fix for dirty filters in its troubleshooting table${c('hsWater')}, and its manual tells owners not to use cleaners other than those recommended by the maker or dealers${c('hsManualUK')}; check before using other brands on a warranty tub.</li>
<li><strong>Quantity:</strong> a soak needs enough solution to submerge the cartridge, so bottle size matters more than price per ounce.</li>
<li><strong>Don’t add an acid soak by habit.</strong> Unicel warns acid washing is a major cause of premature cartridge failure${c('unicel')}; see our <a href="/guides/should-you-acid-wash-a-spa-filter/">acid wash guide</a>.</li></ul>
<h2>Tools</h2><p>The Filter Flosser listing describes itself as a cartridge filter cleaner for pools and hot tubs; Unicel and Pleatco tell you to use a straight-flow hose nozzle at about 45° and never a stiff brush on the media${c('unicel','pleatcoCat')}, and Jacuzzi warns against high-pressure tools${c('jac')}, so judge any tool against those limits.</p>
<p>Full step-by-step: <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>. Need a spare to swap in while one soaks? <a href="/">Search your part number</a>.</p>${NOTE}`,
picks:[
{h:'Soak-style cartridge cleaners',keys:['lt-filter-clean-o','spaguard-filter-cleaner','powersoak','aquadoc-filter-soak']},
{h:'Spray-on cleaner and tools',keys:['black-diamond-spray','filter-flosser']}],
faq:[['How long should a hot tub filter soak in cleaner?','Unicel and Pleatco say at least one hour, with overnight the most effective.'],
['Do I need to rinse after a filter cleaner soak?','Yes. Unicel says to rinse to remove oils and cleaner, and Jacuzzi warns residue can cause foaming.'],
['Is filter cleaner better than dishwasher detergent?','Both are published options from Unicel and Pleatco; a purpose-made cleaner is simply easier to dose correctly.']],
src:['unicel','pleatcoCat','jac','hsWater','hsManualUK']},

{slug:'hot-tub-stain-scale-and-metal-control',reviewed:R,title:'Hot tub stain, scale and metal control: causes and products',
desc:'What causes scale and metal staining according to Hot Spring’s troubleshooting guide, how stain-and-scale products are used, and options to consider.',
answer:`Hot Spring’s troubleshooting guide ties <strong>scale</strong> to total alkalinity and/or pH being too high and high calcium in the water, and <strong>staining</strong> to total alkalinity and/or pH being too low plus iron or copper in the source water; it recommends balancing the water and adding its Stain & Scale product to inhibit metals${c('hsWater')}.`,
body:`<h2>Two different problems</h2><div class="tbl"><table><thead><tr><th>Problem</th><th>Probable causes (Hot Spring)</th><th>Fix (Hot Spring)</th></tr></thead><tbody>
<tr><td>Scale</td><td>Total alkalinity and/or pH too high; high calcium content in the water</td><td>Lower alkalinity and pH; if scale must be removed, drain, scrub it off, clean the shell, refill; add a stain-and-scale product and rebalance${c('hsWater')}</td></tr>
<tr><td>Staining / discoloration</td><td>Total alkalinity and/or pH too low; high iron or copper in source water</td><td>Raise alkalinity/pH; use a stain-and-scale product to inhibit metals${c('hsWater')}</td></tr></tbody></table></div>
<h2>How the products are used</h2><p>Hot Spring’s manual lists “liquid stain and scale inhibitor” among the chemicals added directly into the filter compartment with the jet pump on high for ten minutes${c('hsManual')}. Metal-control products (such as the “metal gon” and “metal free” names below) are sold for the same fill-water problem; follow each label’s dose and timing.</p>
<h2>Prevent it first</h2><ul><li>Keep alkalinity and pH in range; see the <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">balancing guide</a> and measure with <a href="/guides/best-hot-tub-test-strips/">good test strips</a>.</li>
<li>CDC’s Legionella toolkit notes sediment and biofilm are key factors and recommends scrubbing surfaces each time the tub is drained${c('cdcLeg')}.</li>
<li>If your fill water is hard or has metals, a hose-end pre-filter on the fill hose may help; search below because the right size depends on your hose.</li>
<li><strong>Scale on the cartridge</strong> is a separate issue: see <a href="/guides/should-you-acid-wash-a-spa-filter/">acid washing</a>.</li></ul>${NOTE}`,
picks:[
{h:'Stain and scale control',keys:['lt-stain-scale-b','spaguard-stain-scale','aquadoc-stain-scale']},
{h:'Metal control',keys:['lt-metal-gon-d','aquadoc-metal-control','nc-metal-free','poolmate-metal-gone']},
{h:'Pre-filtering your fill water',search:[['Hot tub fill hose pre-filter','hose filter for filling hot tub','Fill-water filters come in different hose and capacity formats, so we send you to search rather than naming one listing.']]}],
faq:[['What causes scale in a hot tub?','Hot Spring lists high total alkalinity and/or pH and high calcium content in the water.'],
['What causes brown or green staining in a hot tub?','Hot Spring lists low total alkalinity/pH plus high iron or copper in the source water.'],
['Where do I add stain and scale control?','Hot Spring’s manual says liquid stain and scale inhibitor goes into the filter compartment with the jet pump on high for ten minutes.']],
src:['hsWater','hsManual','cdcLeg']},

{slug:'hot-tub-foam-cloudy-water-and-jet-cleaners',reviewed:R,title:'Hot tub foam, cloudy water and jet cleaners: what to try',
desc:'Probable causes Hot Spring lists for cloudy water and other problems, when defoamers, clarifiers, enzymes and plumbing flushes are used, and a short list of products.',
answer:`Start with the cause, not the bottle. Hot Spring lists dirty filters, excessive oils or organic matter, improper sanitizing, suspended particles and overused or old water among probable causes of water problems, and its fixes run from cleaning filters and shocking to <strong>draining, cleaning and refilling</strong>${c('hsWater')}. Defoamers, clarifiers and enzymes are add-ons after that.`,
body:`<h2>First checks</h2><ol>
<li><strong>Clean the filter.</strong> It is the first fix on Hot Spring’s list${c('hsWater')}; see <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>. Jacuzzi warns that leftover cleaner can foam once jets start${c('jac')}.</li>
<li><strong>Test</strong> sanitizer and pH. Hot Spring pairs low pH or low sanitizer with several water problems${c('hsWater')}.</li>
<li><strong>Shock</strong> if needed (see the <a href="/guides/hot-tub-shock-chlorine-vs-non-chlorine/">shock guide</a>).</li>
<li><strong>Consider the water’s age.</strong> CDC gives a formula for how often to replace hot tub water: (spa volume in gallons ÷ 3) ÷ average number of users per day, as days between changes${c('cdcLeg')}. A 400-gallon tub with 2 users a day works out to 400 ÷ 3 ÷ 2 ≈ 67 days.</li></ol>
<h2>What each product type is for</h2><div class="tbl"><table><thead><tr><th>Type</th><th>Use</th></tr></thead><tbody>
<tr><td>Defoamer</td><td>Knocks down surface foam. Hot Spring lists liquid defoamer among chemicals added to the filter compartment${c('hsManual')}. Foam usually returns if the cause (oils, residue, old water) stays.</td></tr>
<tr><td>Clarifier</td><td>Sold to help the filter catch fine particles; not a substitute for a clean cartridge.</td></tr>
<tr><td>Enzyme</td><td>Sold to break down oils and lotions; the listings below describe this.</td></tr>
<tr><td>Jet / plumbing cleaner or flush</td><td>Run through the plumbing before a drain to loosen buildup. CDC’s toolkit recommends scrubbing surfaces and cleaning filters whenever the tub is drained${c('cdcLeg')}.</td></tr></tbody></table></div>
<h2>When to drain</h2><p>Hot Spring’s last-resort fix for almost every problem is to drain, clean and refill${c('hsWater')}. If water is still cloudy after filter cleaning, shocking and balancing, plan a drain.</p>${NOTE}`,
picks:[
{h:'Defoamers',keys:['spaguard-antifoam','hth-defoamer','lt-foam-down']},
{h:'Clarifiers',keys:['spaguard-clarifier','hth-clarifier','lt-bright-clear-a']},
{h:'Enzymes',keys:['aquadoc-enzyme','lt-enzyme-sgq']},
{h:'Jet and plumbing cleaners',keys:['lt-jet-clean','oh-yuk','ahhsome-purge','spaguard-system-flush']}],
faq:[['Why is my hot tub foaming?','Hot Spring’s guide doesn’t give a single cause for foam; Jacuzzi warns leftover filter cleaner can foam, and oils or old water are common culprits. Clean and rinse the filter and consider a drain.'],
['How often should I change hot tub water?','CDC gives (spa gallons ÷ 3) ÷ average users per day as the days between changes.'],
['Does a clarifier replace filter cleaning?','No. A clogged cartridge is the first thing Hot Spring’s guide tells owners to fix.']],
src:['hsWater','hsManual','jac','cdcLeg']},

{slug:'hot-tub-cover-lifters-and-cover-care',reviewed:R,title:'Hot tub cover lifters and cover care: what to know before you buy',
desc:'How cover lifters differ by clearance, Hot Spring’s cover cleaning and handling rules, wind and snow cautions, and cover lifter options.',
answer:`Choose a lifter by the <strong>clearance behind your tub</strong>: Hot Spring’s own lifters need 24 inches (CoverCradle), 14 inches (Lift ’n Glide) or 7 inches (UpRite) behind the spa and 3 inches at the sides, and its manual says never to lift a cover by its skirting or lock straps${c('hsLifters','hsManualUK')}. Whatever you use, keep the cover locked when the tub isn’t in use${c('cpsc96')}.`,
body:`<h2>Pick a lifter by clearance</h2><div class="tbl"><table><thead><tr><th>Hot Spring lifter</th><th>Back clearance</th><th>Side</th></tr></thead><tbody>
<tr><td>CoverCradle / CoverCradle II</td><td>24 in</td><td>3 in</td></tr><tr><td>Lift ’n Glide</td><td>14 in</td><td>3 in</td></tr><tr><td>UpRite (also a privacy screen when open)</td><td>7 in</td><td>3 in</td></tr></tbody></table></div>
<p>${c('hsLifters')} Hot Spring notes actual clearance varies by model and location, and that its lifters hide the cross bar inside the cover seam; not all lifters are built that way${c('hsLifters')}. Third-party lifters like the two below are universal-style: check the listing’s dimensions against your cover and the space behind your tub. Hot Spring’s manual tells owners not to use lifting mechanisms other than those recommended by the maker or its dealers${c('hsManualUK')}, so if you own a Hot Spring under warranty ask your dealer first.</p>
<h2>Cover care (from Hot Spring’s manuals)</h2><ul>
<li><strong>Clean monthly.</strong> Hose it, then use a very mild soap solution (1 teaspoon dish soap in 2 gallons of water for vinyl) with a soft brush and rinse so the soap film doesn’t dry on it${c('hsQuick','hsManualUK')}.</li>
<li><strong>Underside: water only</strong>, then wipe dry${c('hsQuick')}.</li>
<li><strong>Vinyl only:</strong> Hot Spring’s Cover Shield conditioner is for vinyl covers and should not be used on polyester${c('hsQuick')}. Other brands’ protectants: read the label for your cover material.</li>
<li><strong>Don’t</strong> drag the cover by the flaps or lock straps, walk or sit on it, put metal or heat-transferring objects or a plastic tarp over it${c('hsManualUK')}.</li>
<li><strong>Snow:</strong> remove buildup to protect the foam core${c('hsManualUK')}.</li>
<li><strong>Wind:</strong> Hot Spring says its cover and retractable systems aren’t recommended in winds above 25 mph (40 km/h), and extra cover-lock straps can be added where wind is a problem${c('hsManualUK')}.</li></ul>
<h2>Safety</h2><p>CPSC’s tips: always use a locked safety cover when the spa is not in use, and keep young children away unless there is constant adult supervision${c('cpsc96')}. CPSC also warns that a solar cover can let a child slip into the water while the cover appears to stay in place${c('cpscHome')}; a solar blanket is not a safety cover.</p>${NOTE}`,
picks:[
{h:'Cover lifters',keys:['cover-rockit','covermate-1']},
{h:'Cover care and wind (model-specific, so we link searches)',search:[
['Hot tub cover wind straps','hot tub cover straps','Spare or extra tie-down straps; check the length and clip type against your cover.'],
['Waterproof cover protector / cap','hot tub cover protector','A weather-resistant outer cover; match the size to your cover.'],
['Vinyl cover cleaner and conditioner','vinyl hot tub cover cleaner conditioner','Use only products labeled for your cover material.']]}],
faq:[['How much clearance do I need for a cover lifter?','Hot Spring’s lifters need 24 in (CoverCradle), 14 in (Lift ’n Glide) or 7 in (UpRite) behind the spa and about 3 in on the sides.'],
['How often should I clean a hot tub cover?','Hot Spring recommends monthly cleaning.'],
['Is a solar blanket a safety cover?','No. CPSC warns solar covers can let a child slip into the water while the cover appears to stay in place; use a locked safety cover.']],
src:['hsLifters','hsQuick','hsManualUK','cpsc96','cpscHome']},

{slug:'hot-tub-steps-handrails-and-safe-entry',reviewed:R,title:'Hot tub steps and handrails: sizing and safe-entry checklist',
desc:'How to choose hot tub steps and a handrail by height and footprint, plus the CPSC safety tips that apply around any spa.',
answer:`Measure first: the step must reach from the ground to the tub’s rim height without a big gap, and fit the space beside the tub. CPSC’s spa tips also apply: use a locked cover when not in use, keep water at <strong>104°F or below</strong>, and avoid alcohol while soaking${c('cpsc96')}.`,
body:`<h2>Choosing steps (editorial advice)</h2><ul>
<li><strong>Measure rim height</strong> from the ground (or deck) to the top of the shell, and compare it with the step’s stated dimensions on the listing; the listings below describe themselves as three- or four-step units or a two-tier storage step.</li>
<li><strong>Footprint:</strong> the listing says 36 inches wide for the storage step. Check that your path to the tub isn’t blocked.</li>
<li><strong>Non-skid surface:</strong> the storage-step listing says non-skid; look for the same on any step you buy.</li>
<li><strong>Stable ground.</strong> Place steps on a flat, firm surface.</li></ul>
<h2>Handrails</h2><p>Handrails vary in how they attach: freestanding, clamp-on, or sliding under the cabinet. The Zelen listing says it adjusts from 39 to 60 inches and rotates 360°; confirm that it fits your spa’s cabinet and weight rating on the listing. Because attachment varies by spa, we also link a search so you can compare options.</p>
<h2>Safety (from CPSC)</h2><ul>
<li>Always use a locked safety cover when the spa is not in use, and keep young children away unless there is constant adult supervision${c('cpsc96')}.</li>
<li>Know where the pump cut-off switch is, check that drain covers are in place and not cracked or missing, and keep the water at 104°F or below${c('cpsc96')}.</li>
<li>If a child is missing, look in the pool or spa first${c('cpscHome')}.</li>
<li>Whatever steps or rails you add, keep the cover locked when the tub is not in use${c('cpsc96')}.</li></ul>
<p>Also see <a href="/guides/hot-tub-cover-lifters-and-cover-care/">cover lifters and cover care</a>.</p>${NOTE}`,
picks:[
{h:'Steps',keys:['confer-3step','confer-4step','confer-storage-step']},
{h:'Handrails',keys:['zelen-handrail'],search:[['Hot tub handrail / spa safety rail','hot tub handrail spa safety rail','Compare attachment styles and the height range against your spa.']]}],
faq:[['How high should hot tub steps be?','Measure from the ground to the rim of your tub and match the step’s stated dimensions; this is our editorial advice, not a published standard.'],
['What water temperature is safe?','CPSC says to keep spa water at 104°F or below.'],
['Do hot tubs need a locked cover?','CPSC says always use a locked safety cover when the spa is not in use.']],
src:['cpsc96','cpscHome']},

{slug:'hot-tub-cleaning-tools-skimmers-and-vacuums',reviewed:R,title:'Hot tub cleaning tools: skimmers, vacuums and scum absorbers',
desc:'What hand skimmers, mini spa vacuums and scum absorbers are for, with CDC guidance on scrubbing and draining, and a short list of tools.',
answer:`Tools handle what chemicals can’t: leaves, hair and debris, scum lines and the sediment on the floor. CDC’s toolkit says to scrub all surfaces each time the tub is drained${c('cdcLeg')}, and Hot Spring says to wipe off scum with a clean rag and, if severe, drain and clean the spa${c('hsWater')}.`,
body:`<h2>What each tool does</h2><div class="tbl"><table><thead><tr><th>Tool</th><th>Good for</th></tr></thead><tbody>
<tr><td>Hand skimmer</td><td>Leaves, bugs and floating debris; take it out before they sink and decay.</td></tr>
<tr><td>Mini spa vacuum</td><td>Sediment and grit on the seat and floor. Listings below range from manual to battery-powered or rechargeable.</td></tr>
<tr><td>Scum absorber</td><td>A sponge that floats to soak up surface oils.</td></tr></tbody></table></div>
<h2>Choosing</h2><ul><li><strong>Soft contact with the shell.</strong> Hot Spring’s quick start says household chemicals are harmful to the shell and a soft rag removes most dirt${c('hsQuick')}; avoid abrasive pads or stiff brushes.</li>
<li><strong>Size.</strong> Compare the listing’s reach with the depth of your tub.</li>
<li><strong>Power.</strong> Manual vacs need no charging; battery or rechargeable ones need to be kept dry between uses.</li>
<li><strong>Electric safety:</strong> don’t use mains-powered tools in or beside the water.</li></ul>
<h2>Routine</h2><ol><li>Skim as needed; wipe the waterline with a clean rag${c('hsWater')}.</li><li>Vacuum before shocking so loosened debris reaches the filter.</li><li>At each drain: scrub every surface${c('cdcLeg')} and clean the filter (<a href="/guides/how-often-to-clean-hot-tub-filter/">how often?</a>).</li></ol>${NOTE}`,
picks:[
{h:'Hand skimmers',keys:['skimmie-scoop','uspool-hand-skimmer']},
{h:'Spa vacuums',keys:['rolachem-spa-vac','pool-blaster-aqua-broom','pool-blaster-catfish']},
{h:'Scum control',keys:['scum-absorber']}],
faq:[['How often should I scrub the tub?','CDC says to scrub all surfaces every time the tub is drained.'],
['Can I use household cleaners on the shell?','Hot Spring’s quick start says most household chemicals are harmful to the shell and recommends a soft rag.']],
src:['cdcLeg','hsWater','hsQuick']},

{slug:'replacement-hot-tub-headrests-and-pillows',reviewed:R,title:'Replacement hot tub headrests and pillows: how to get the right fit',
desc:'Why spa pillows are model-specific, how to measure and identify yours, and search links for pillows and headrests by brand.',
answer:`Spa pillows are <strong>model-specific</strong>: mounting style, size and shape differ by maker and often by model year, so we link brand-specific Amazon searches rather than a single product. Identify your spa’s make and model first, then match the pillow’s listing text against your old one.`,
body:`<h2>Identify what you have</h2><ol>
<li><strong>Find the make and model</strong> on the cabinet label, the manual or the control panel.</li>
<li><strong>Look at the old pillow:</strong> does it clip, suction-cup, or use a pin or insert? Measure width, height and thickness.</li>
<li><strong>Read the new listing’s model fitment</strong> and the part number if one is given; some listings name the spas they replace (for example, a pillow listing may name a specific brand and year range) — confirm the year range.</li></ol>
<h2>Material and care</h2><ul><li>Pillows sit in hot, chemical-laden water and will wear. Rinse them with fresh water and keep sanitizer in range${c('cdcLeg')}.</li>
<li>Hot Spring’s quick start says most household chemicals are harmful to the spa shell${c('hsQuick')}; use mild products on pillows too and rinse well.</li></ul>
<h2>New or generic?</h2><p>A manufacturer part usually matches the clips exactly; generic replacements can be cheaper but you must verify dimensions and mounting. Our <a href="/hot-spring/">Hot Spring</a>, <a href="/jacuzzi/">Jacuzzi</a>, <a href="/sundance/">Sundance</a> and <a href="/caldera/">Caldera</a> pages cover your <em>filters</em>; for pillows, start from your model name on the searches below.</p>${NOTE}`,
picks:[
{h:'Search by spa brand',intro:'We link searches because fit depends on your exact model and year.',search:[
['Hot Spring hot tub pillows','hot spring hot tub pillows','Match model and year against the listing.'],
['Jacuzzi hot tub pillows','jacuzzi hot tub pillow','Match model line against the listing.'],
['Generic spa pillow replacement','hot tub pillow replacement','Verify mounting type and dimensions.'],
['Spa headrest replacement','hot tub headrest replacement','Verify mounting type and dimensions.']]}],
faq:[['How do I know which hot tub pillow fits?','Identify the spa make, model and year, check the mounting type and measure your old pillow, then match the listing’s fitment text.'],
['Are generic spa pillows the same as OEM?','They can look alike but differ in clip, thickness and shape; verify dimensions.']],
src:['hsQuick','cdcLeg']},

{slug:'hot-tub-chemical-safety-and-storage',reviewed:R,title:'Hot tub chemical safety and storage: what CDC says',
desc:'CDC’s pool-chemical storage and handling rules applied to a home hot tub: temperature, moisture, separation, labels, plus never-mix reminders.',
answer:`CDC says pool chemicals can injure people when <strong>mixed together</strong> or when protective equipment isn’t used, and to store each one separately in its original labeled container below 95°F, out of the sun and protected from getting wet${c('cdcChem')}.`,
body:`<h2>Storage rules (CDC)</h2><ul>
<li>Store below 95°F (35°C), in low humidity and out of direct sunlight, or as the manufacturer directs${c('cdcChem')}.</li>
<li>Protect from getting wet${c('cdcChem')}.</li>
<li>Store each chemical separately; keep incompatible chemicals away from each other; keep chemicals in original, manufacturer-labeled containers${c('cdcChem')}.</li>
<li>Keep away from heat sources and flames; don’t store ignition sources such as gas-powered equipment with chemicals${c('cdcChem')}.</li>
<li>Store and consume food and drinks away from pool chemicals${c('cdcChem')}.</li>
<li>Limit access, especially to children and animals${c('cdcChem')}.</li>
<li>Dispose of old, unwanted or unlabeled chemicals safely: contact the manufacturer or your local hazardous-materials group${c('cdcChem')}.</li></ul>
<h2>Handling</h2><ul><li>Read the label and keep the safety data sheet and protective equipment available${c('cdcChem')}.</li>
<li>Never mix different chemicals together. Unicel specifically warns never to mix chlorine and acid${c('unicel')}.</li>
<li>Add chemicals only through the filter compartment with jets on high as Hot Spring directs, taking care not to splash hands, eyes or shell${c('hsManual')}.</li>
<li>Water temperature: CPSC says 104°F or below${c('cpsc96')}.</li></ul>
<h2>A practical kit (editorial)</h2><p>A small bin that stays dry, a dedicated measuring scoop per product (never reused between chemicals), splash-resistant goggles and gloves, a good <a href="/guides/best-hot-tub-test-strips/">test kit</a> and the product labels. See the product guides for <a href="/guides/best-hot-tub-sanitizer-bromine-chlorine-mineral/">sanitizer</a>, <a href="/guides/hot-tub-shock-chlorine-vs-non-chlorine/">shock</a> and <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">pH balance</a>.</p>${NOTE}`,
picks:[
{h:'Safety gear and storage',intro:'Where fit isn’t model-specific, a search is the honest link.',search:[
['Chemical splash goggles','chemical splash goggles','Check the safety rating the listing states.'],
['Chemical-resistant gloves','chemical resistant gloves','Check the listing for the chemical resistance it states.'],
['Waterproof storage bin with latch','waterproof storage bin with latching lid','For keeping dry chemicals dry; keep each product in its own container.']]}],
faq:[['Where should I store hot tub chemicals?','CDC says below 95°F, dry, out of direct sunlight, each chemical separate and in its original labeled container.'],
['Can I mix hot tub chemicals?','No. CDC says chemicals can injure people when mixed; Unicel specifically warns never to mix chlorine and acid.'],
['What do I do with old chemicals?','CDC says to contact the manufacturer or your local or state hazardous materials group for proper disposal procedures.']],
src:['cdcChem','unicel','hsManual','cpsc96']},

];
