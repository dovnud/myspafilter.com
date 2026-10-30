import { c } from './guidesrc';
import type { Guide } from './guides';
import type { PickGroup } from '../components/ProductPicks.astro';

const D = '2026-10-30';

const stockPicks: PickGroup[] = [
  { h: 'Care products with a listing we checked', intro: 'These are not a sale and not a ranked list. Each button opens a listing whose title we read. The price is on Amazon. We do not print it, and we do not claim a percent off.', keys: ['lt-filter-clean-o', 'aquachek-spa-6in1', 'spaguard-shock', 'cover-rockit'] },
  { h: 'Replacement cartridges, by the number on the old one', intro: 'A search is not one cartridge we pre-checked. Read the listing title against the part number, then confirm diameter, length and both fittings.', search: [
    ['Hot Spring 71825 / C-6430', '71825 spa filter', '6" cartridge used on many Hot Spring, Hot Spot and Solana tubs. Some housings hold more than one.'],
    ['Caldera 73531 / C-7375', '73531 spa filter', 'Open-bottom Caldera cartridge. Match the bottom, not only the length.'],
    ['Sundance 6540-488 / C-8326', '6540-488 spa filter', 'The 125 sq ft body. C-8326 and C-8327 differ by a core plug. Compare before you treat them as the same gift.'],
    ['Intex 29001E (Type S1)', 'Intex 29001E spa filter', 'PureSpa Type S1. Not the taller Type S2 cartridge (29012E).'],
  ] },
];

export const holidayGuides: Guide[] = [
{ slug: 'black-friday-hot-tub-filter-and-spa-care', published: D, reviewed: D,
  title: 'Black Friday hot tub filters and spa care (2026 dates)',
  desc: 'Black Friday is Friday, November 27, 2026, and Cyber Monday is Monday, November 30. What to have on hand — a spare cartridge, chemicals and cover care — plus the USPS and UPS send-by dates. No prices and no made-up discount.',
  answer: `Black Friday 2026 is <strong>Friday, November 27</strong>, the Friday after Thanksgiving. Cyber Monday is <strong>Monday, November 30</strong>. Amazon’s news post states both dates and says shoppers can browse early Holiday Shop deals now, and it says to check back for more information${c('amazonBf')}. It does not name a hot tub filter, a percent off, or a start and end time for a Black Friday event. This page does not invent one. What is worth doing before guests arrive is the same thing the filter makers already say: keep a second cartridge, and clean the one that is in the tub${c('unicel','pleatcoCat','jac')}.`,
  body: `<h2>The dates, and only the dates</h2>
<p>Every date below is a date a carrier or Amazon published. When that page says the real delivery day can move, this page says that too.</p>
<div class="tbl"><table><thead><tr><th>What</th><th>2026</th><th>Where it is written</th></tr></thead><tbody>
<tr><td>Thanksgiving</td><td>Thursday, November 26</td><td>UPS is closed. It labels the day Thanksgiving${c('upsHoliday','upsYearEnd')}.</td></tr>
<tr><td>Black Friday</td><td>Friday, November 27</td><td>Amazon says Black Friday is always the Friday after Thanksgiving and that this year it is November 27. UPS labels November 27 “Day after Thanksgiving (Black Friday).” Its year-end schedule lists normal pickup and delivery that day${c('amazonBf','upsHoliday','upsYearEnd')}.</td></tr>
<tr><td>Cyber Monday</td><td>Monday, November 30</td><td>Amazon says Cyber Monday is always the following Monday, and that this year it is November 30${c('amazonBf')}.</td></tr>
<tr><td>The five-day shopping period</td><td>Thanksgiving through the following Monday</td><td>The National Retail Federation describes Black Friday and Cyber Monday as part of that five-day period, and says retailers now spread holiday deals across the season rather than holding them for one day${c('nrfHoliday')}.</td></tr>
</tbody></table></div>
<p>FedEx’s holiday page lists November 26 as closed, November 27 as modified service, December 24 as modified service (including modified Ground pickups), and December 25 as closed. FedEx says that schedule can change${c('fedexHoliday')}. UPS is open on November 27${c('upsYearEnd')}.</p>
<h2>What Amazon has not published</h2>
<p>Amazon’s Black Friday post says customers can shop early deals in the Holiday Shop now, and it says to check back soon for more information${c('amazonBf')}. That is the whole product claim we are willing to repeat. The post does not list a spa filter, a cover, or a chemical, and it does not give a percent off. NRF makes the same broader point: holiday deals now show up through the season, not only on the Friday${c('nrfHoliday')}.</p>
<p>The button on a product card below says “Check price on Amazon” because the price lives on Amazon. We do not type a price, a star rating, or “was / now” pair onto this page. If a listing is not one we opened, the button says “Search on Amazon” and the note says so.</p>
<h2>What to have on the shelf</h2>
<p>Stocking up, on this page, means the spare the manufacturers already tell you to keep. It does not mean buying a cartridge because a banner said the price changed.</p>
<ul>
<li><strong>A second cartridge that actually fits.</strong> Unicel, Pleatco and Jacuzzi all say to alternate two sets so one can be cleaned and dried while the other is in the spa${c('unicel','pleatcoCat','jac')}. Jacuzzi also says not to run the spa with no filter installed${c('jac')}. Start from the number on the end cap: <a href="/hot-spring/c-6430/">Hot Spring C-6430</a> (OEM 31489 / 71825), <a href="/caldera/c-7375/">Caldera C-7375</a> (OEM 1019301 / 73531), <a href="/sundance/c-8326/">Sundance C-8326</a>, <a href="/intex/c-4317/">Intex Type S1</a>, <a href="/bullfrog/pbf40/">Bullfrog 10-00282</a>. The <a href="/">homepage search</a> takes OEM, Unicel, Pleatco and Filbur numbers. If two cartridges share a size, read <a href="/guides/open-end-vs-threaded-hot-tub-filters/">open-end vs threaded</a> and <a href="/guides/sundance-and-jacuzzi-look-alike-filters/">Sundance and Jacuzzi look-alikes</a> before you order the look-alike.</li>
<li><strong>Filter cleaner for the soak.</strong> Unicel and Pleatco describe a hose rinse and then a degreasing soak of at least an hour${c('unicel','pleatcoCat')}. The steps are in <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a hot tub filter</a>.</li>
<li><strong>Test strips, sanitizer and shock.</strong> CDC says to check disinfectant and pH${c('cdcRash')}. Hot Spring’s published ranges are free chlorine 1–5 ppm, pH 7.2–7.8, total alkalinity 40–120 ppm and calcium hardness 75–150 ppm${c('hsChem')}. CDC’s rash page uses a free-chlorine floor of at least 3 ppm, bromine 4–8 ppm, and pH 7.0–7.8, which is not the same band${c('cdcRash')}. Follow the manual for your spa when the numbers differ. The order of balancing is in <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">pH and alkalinity</a>, and storage rules are in <a href="/guides/hot-tub-chemical-safety-and-storage/">chemical safety</a>.</li>
<li><strong>The cover, before the weather does the choosing.</strong> Hot Spring says to remove snow so the foam core is protected, and not to put a plastic tarp over the cover${c('hsManualUK')}. That is the winter page: <a href="/guides/winter-spa-care/">winter spa care</a>. A gift-shaped version of the same list is <a href="/guides/gifts-for-hot-tub-owners-2026/">gifts for hot tub owners 2026</a>.</li>
</ul>
<p>Pleatco says most spa makers recommend a monthly clean, every two weeks with heavy use, and after a party${c('pleatcoWash')}. A holiday weekend is that party. Jacuzzi’s weekly rinse shortens to every two or three days with heavy use${c('jac')}.</p>
<h2>Shipping cutoffs, from the carriers</h2>
<p>These are send-by dates for expected arrival, not a promise. USPS says the actual delivery date depends on origin, destination, when the Post Office accepts the piece, and other conditions${c('uspsHoliday')}. UPS says some lanes need an earlier ship date and tells you to check Calculate Time and Cost, and it says a limited number of Ground packages from November 16, 2026 through January 8, 2027 need extra time in transit${c('upsYearEnd','upsHoliday')}.</p>
<h3>USPS, for delivery before December 25</h3>
<p>USPS also notes that Hanukkah in 2026 is December 4–12, earlier than Christmas, so the Christmas dates below are too late for the start of Hanukkah${c('uspsHoliday')}.</p>
<div class="tbl"><table><thead><tr><th>Service</th><th>Contiguous U.S. (not Alaska or Hawaii)</th></tr></thead><tbody>
<tr><td>USPS Ground Advantage</td><td>Thursday, December 17</td></tr>
<tr><td>First-Class Mail</td><td>Thursday, December 17</td></tr>
<tr><td>Priority Mail</td><td>Friday, December 18</td></tr>
<tr><td>Priority Mail Express</td><td>Saturday, December 19</td></tr>
</tbody></table></div>
<p>For Alaska, Hawaii, Puerto Rico and U.S. territories, USPS prints the same First-Class (December 17), Priority Mail (December 18) and Priority Mail Express (December 19) dates, and it does <em>not</em> print one Ground Advantage date. It says Ground Advantage to or from those places has a service expectation of 10 days or more, and that you should look up the ZIP codes${c('uspsHoliday')}. International First-Class Package and Priority Mail International are Wednesday, December 9, and Priority Mail Express International is Wednesday, December 16, for every region on USPS’s international table. Military mail is earlier: USPS recommends Ground Advantage to the APO/FPO/DPO ZIP groups it lists by Wednesday, November 4${c('uspsHoliday')}.</p>
<h3>UPS, for delivery on December 24</h3>
<div class="tbl"><table><thead><tr><th>U.S. domestic service</th><th>Recommended last ship date</th></tr></thead><tbody>
<tr><td>UPS Ground</td><td>No single date. UPS says to check ups.com/ctc${c('upsYearEnd')}.</td></tr>
<tr><td>UPS 3 Day Select</td><td>Monday, December 21. UPS also says a limited number of 3 Day Select packages tendered December 14 or 15 may take an extra day${c('upsYearEnd')}.</td></tr>
<tr><td>UPS 2nd Day Air</td><td>Tuesday, December 22. A limited number tendered December 14, 15, 16 or 21 may take an extra day${c('upsYearEnd')}.</td></tr>
<tr><td>UPS Next Day Air</td><td>Wednesday, December 23, with a scheduled pickup or a drop-off at a UPS Store or UPS Authorized Service Location${c('upsYearEnd')}.</td></tr>
</tbody></table></div>
<p>December 24 is a delivery day. Pickup that day is Air and international Air only, and only if it was prearranged by Friday, December 18. There is no Ground pickup on Christmas Eve. December 25 is a UPS holiday: no pickup or delivery${c('upsHoliday','upsYearEnd')}. November 26 is also closed, so a filter ordered for the Thanksgiving weekend does not move that day${c('upsYearEnd')}.</p>
<p>FedEx’s holiday page is the open-and-closed schedule cited above, and FedEx says that schedule can change${c('fedexHoliday')}. That page does not print one nationwide Ground send-by date, so this page does not invent one.</p>
<h2>Where to go next</h2>
<p>Match the cartridge on the <a href="/">homepage</a> or the <a href="/size/">size lookup</a>. Water-care guides are grouped on <a href="/supplies/">supplies</a>. Replacement timing is in <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>. A correction to any date on this page: <a href="/contact/">contact</a>, which reaches contact@myspafilter.com and no other address.</p>`,
  faq: [
    ['When is Black Friday 2026?', 'Friday, November 27, 2026. Amazon says Black Friday is the Friday after Thanksgiving and that this year it falls on November 27. UPS labels that day “Day after Thanksgiving (Black Friday).”'],
    ['When is Cyber Monday 2026?', 'Monday, November 30, 2026. Amazon says Cyber Monday is the Monday after Black Friday.'],
    ['Are hot tub filters discounted that week?', 'We do not know, and we do not print a percent off. Amazon’s Black Friday post says early Holiday Shop deals are available and to check back for more. It does not name a spa filter or a price. The price is on the Amazon listing.'],
    ['What is the USPS send-by date for Christmas?', 'For the contiguous United States, USPS recommends Ground Advantage and First-Class Mail by Thursday, December 17, 2026, Priority Mail by Friday, December 18, and Priority Mail Express by Saturday, December 19, for expected delivery before December 25. USPS says the actual day can vary. Hanukkah is December 4–12, so those Christmas dates are too late for the start of Hanukkah.'],
    ['Does UPS publish one Ground cutoff?', 'No. Its 2026 year-end schedule says to check Calculate Time and Cost for Ground. It does print last ship dates for delivery on December 24: 3 Day Select on December 21, 2nd Day Air on December 22, and Next Day Air on December 23. It also says some of those air packages, and some Ground packages from November 16 through January 8, may need extra transit time.'],
  ],
  src: ['amazonBf', 'nrfHoliday', 'uspsHoliday', 'upsHoliday', 'upsYearEnd', 'fedexHoliday', 'unicel', 'pleatcoCat', 'jac', 'pleatcoWash', 'cdcRash', 'hsChem', 'hsManualUK'],
  related: ['gifts-for-hot-tub-owners-2026', 'winter-spa-care', 'how-often-to-replace-hot-tub-filter', 'how-to-clean-a-hot-tub-filter', 'hot-tub-chemical-safety-and-storage', 'hot-tub-cover-lifters-and-cover-care'],
  pickHeading: 'Filters and care products to check on Amazon',
  picks: stockPicks,
},

{ slug: 'gifts-for-hot-tub-owners-2026', published: D, reviewed: D,
  title: 'Gifts for hot tub owners 2026',
  desc: 'Gifts that match a real spa: the correct replacement cartridge, test strips, a filter cleaner, and cover care. 2026 shipping dates from USPS and UPS. No prices and no invented bundles.',
  answer: `The gift that fits is the <strong>cartridge whose part number matches the one in the tub</strong>. Unicel, Pleatco and Jacuzzi all tell owners to keep a second set${c('unicel','pleatcoCat','jac')}. If you do not have that number, do not guess a diameter: give test strips, a filter cleaner, or a cover tool, and let the owner match the cartridge. Black Friday is Friday, November 27, 2026, and Cyber Monday is Monday, November 30${c('amazonBf')}. Neither date is a price.`,
  body: `<h2>Give the cartridge only if you can read the cap</h2>
<p>The number is usually on the end cap or a band in the pleats. Search it on the <a href="/">homepage</a>. The page you land on lists the OEM, Unicel, Pleatco and Filbur numbers and the diameter, length and fittings. Two filters with the same diameter are not the same part: <a href="/guides/why-same-size-spa-filters-have-different-square-feet/">square-foot ratings</a> and <a href="/guides/open-end-vs-threaded-hot-tub-filters/">end fittings</a> are the usual misses. Sundance C-8326 and C-8327 share a body and not a core plug; that split is in <a href="/guides/sundance-and-jacuzzi-look-alike-filters/">look-alike Sundance and Jacuzzi filters</a>.</p>
<p>Useful pages when you do know the tub: <a href="/hot-spring/c-6430/">Hot Spring C-6430</a>, <a href="/caldera/c-7375/">Caldera C-7375</a>, <a href="/sundance/c-8326/">Sundance C-8326</a>, <a href="/jacuzzi/6ch-960/">Jacuzzi 6CH-960</a>, <a href="/bullfrog/pbf40/">Bullfrog coreless 10-00282</a>, <a href="/intex/c-4317/">Intex Type S1</a>. Model-year lookups, when the cap is gone: <a href="/fitment/hot-spring-filter-by-model-year/">Hot Spring</a>, <a href="/fitment/caldera-filter-by-model-year/">Caldera</a>, <a href="/fitment/sundance-filter-by-model-year/">Sundance</a>, <a href="/fitment/jacuzzi-filter-by-model-year/">Jacuzzi</a>.</p>
<p>How long that gift lasts depends on the brand. Jacuzzi’s range for a pleated cartridge is 12–24 months. Hot Spring’s article says 2–3 years for a standard cartridge${c('jac','hsBlog')}. The comparison is <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a hot tub filter</a>.</p>
<h2>Gifts that do not require the part number</h2>
<ul>
<li><strong>Test strips for the sanitizer they already use.</strong> CDC says to check disinfectant and pH with test strips${c('cdcRash')}. A bromine tub and a chlorine tub do not use the same strip. The buying notes are in <a href="/guides/best-hot-tub-test-strips/">best hot tub test strips</a>.</li>
<li><strong>A filter cleaner, not a dishwasher.</strong> The soak Unicel and Pleatco publish is a bucket, at least an hour, not a dishwasher cycle${c('unicel','pleatcoCat','jac')}. See <a href="/guides/how-to-clean-a-hot-tub-filter/">how to clean a filter</a>.</li>
<li><strong>Shock and balancers, stored the way CDC describes.</strong> Keep each chemical in its own labeled container, below 95°F, dry, and out of the sun${c('cdcChem')}. Do not make a “kit” by pouring two products into one bottle. The storage page is <a href="/guides/hot-tub-chemical-safety-and-storage/">chemical safety</a>, and the water guides are on <a href="/supplies/">supplies</a>.</li>
<li><strong>A cover lifter only if you know the clearance.</strong> Hot Spring’s own lifters need 24, 14 or 7 inches behind the spa${c('hsLifters')}. Its manual says not to use a lifter the maker did not recommend, and not to drag the cover by the straps${c('hsManualUK')}. Details: <a href="/guides/hot-tub-cover-lifters-and-cover-care/">cover lifters and cover care</a>.</li>
<li><strong>Not a solar blanket in place of a safety cover.</strong> CPSC says to use a locked safety cover when the spa is not in use, and it warns that a solar cover can let a child slip through while the cover looks like it is still on${c('cpsc96','cpscHome')}.</li>
</ul>
<h2>So it arrives in 2026</h2>
<p>Amazon’s post dates Black Friday as November 27 and Cyber Monday as November 30, and it says early Holiday Shop deals are already up, with more information to come${c('amazonBf')}. NRF says the busy stretch is the five days from Thanksgiving through that Monday, and that deals are no longer saved for a single Friday${c('nrfHoliday')}. None of those sentences is a coupon for a filter.</p>
<p>For a gift that should be there before Christmas (December 25), USPS recommends these send-by dates in the contiguous United States: Ground Advantage and First-Class Mail on Thursday, December 17; Priority Mail on Friday, December 18; Priority Mail Express on Saturday, December 19. USPS says the actual day can vary. Hanukkah is December 4–12, so mail for the start of Hanukkah has to go earlier than the Christmas table. Ground Advantage to the APO/FPO/DPO groups USPS lists is Wednesday, November 4${c('uspsHoliday')}.</p>
<p>UPS prints last ship dates for delivery on December 24: 3 Day Select on December 21, 2nd Day Air on December 22, Next Day Air on December 23. It does not print one Ground date; it says to check Calculate Time and Cost. A limited number of Ground packages from November 16, 2026 through January 8, 2027 need extra transit time, and some 2nd Day Air and 3 Day Select packages tendered on the dates UPS lists may take an extra day${c('upsYearEnd','upsHoliday')}. UPS is closed Thanksgiving, November 26, and Christmas Day, December 25. Christmas Eve pickup is Air only, and only if it was arranged by December 18${c('upsHoliday')}.</p>
<p>The same dates, next to the spare-filter list, are on <a href="/guides/black-friday-hot-tub-filter-and-spa-care/">Black Friday hot tub filters and spa care</a>. What to do with the cover once it is cold is <a href="/guides/winter-spa-care/">winter spa care</a>.</p>`,
  faq: [
    ['What is a good gift for a hot tub owner if I do not know the filter number?', 'Test strips for the sanitizer they use, or a filter cleaner for the soak Unicel and Pleatco describe. A cartridge is the right gift only when the part number on the old one matches. Guessing a diameter is how the wrong filter shows up.'],
    ['When should I mail a Christmas gift in 2026?', 'USPS recommends, for the contiguous United States and expected delivery before December 25: Ground Advantage and First-Class Mail by December 17, Priority Mail by December 18, Priority Mail Express by December 19. USPS says the actual day can vary. Hanukkah starts December 4, so those Christmas dates are late for it.'],
    ['Is Black Friday a specific hot-tub sale?', 'Black Friday is Friday, November 27, 2026, and Cyber Monday is Monday, November 30. Amazon says early Holiday Shop deals are available and to check back for more. We do not publish a price or a percent off.'],
    ['Is a solar cover a safety gift?', 'No. CPSC says to use a locked safety cover when the spa is not in use, and it warns that a solar cover can let a child slip into the water while the cover appears to stay in place.'],
  ],
  src: ['unicel', 'pleatcoCat', 'jac', 'amazonBf', 'nrfHoliday', 'uspsHoliday', 'upsHoliday', 'upsYearEnd', 'hsBlog', 'cdcRash', 'cdcChem', 'hsLifters', 'hsManualUK', 'cpsc96', 'cpscHome'],
  related: ['black-friday-hot-tub-filter-and-spa-care', 'winter-spa-care', 'how-to-find-your-spa-filter-size', 'hot-tub-cover-lifters-and-cover-care', 'best-hot-tub-test-strips', 'how-often-to-replace-hot-tub-filter'],
  pickHeading: 'Gift ideas with a listing or a part-number search',
  picks: stockPicks,
},

{ slug: 'winter-spa-care', published: D, reviewed: D,
  title: 'Winter spa care: cover, filter and water',
  desc: 'What Hot Spring, CDC and CPSC actually say about a hot tub in cold weather: snow on the cover, a locked safety cover, filter cleaning when use goes up, and chemical storage. No universal winterizing recipe.',
  answer: `Keep the safety cover locked when the tub is not in use${c('cpsc96')}, and brush snow off the cover so the foam core is not carrying the load${c('hsManualUK')}. Clean the cartridge on the shorter schedule if the tub is busy: Pleatco says after a party and every two weeks with heavy use${c('pleatcoWash')}, and Jacuzzi says not to run the spa with the filter out${c('jac')}. We do not publish a drain-and-shut-down procedure. The manuals we cite do not give one recipe for every brand.`,
  body: `<h2>The cover is the winter part</h2>
<ul>
<li><strong>Lock it.</strong> CPSC says to use a locked safety cover whenever the spa is not in use, and to keep children away unless an adult is right there${c('cpsc96')}. A solar blanket is not that cover. CPSC warns a child can slip through while a solar cover still looks like it is in place${c('cpscHome')}.</li>
<li><strong>Get the snow off.</strong> Hot Spring’s manual says to remove snow buildup to protect the foam core${c('hsManualUK')}.</li>
<li><strong>Do not walk on it, sit on it, or cap it with a plastic tarp.</strong> The same manual says not to drag the cover by the flaps or lock straps, and not to put metal or heat-holding objects or a plastic tarp on it${c('hsManualUK')}.</li>
<li><strong>Wind.</strong> Hot Spring says its cover and retractable systems are not recommended in winds above 25 mph (40 km/h). Extra cover-lock straps are the remedy it names where wind is the problem${c('hsManualUK')}.</li>
<li><strong>Clean it monthly.</strong> Hose it, then a very mild soap solution on vinyl (Hot Spring’s quick-start figure is 1 teaspoon of dish soap in 2 gallons of water) with a soft brush, and rinse so the soap does not dry on the cover. The underside is water only, then wiped dry${c('hsQuick','hsManualUK')}. Conditioner that is for vinyl should not go on polyester${c('hsQuick')}.</li>
</ul>
<p>Lifter clearance, if you are adding one before the cover gets heavier, is in <a href="/guides/hot-tub-cover-lifters-and-cover-care/">cover lifters and cover care</a>. Hot Spring’s lifters need 24, 14 or 7 inches behind the spa${c('hsLifters')}.</p>
<h2>The filter, when the holidays fill the tub</h2>
<p>Cold weather does not change the fitting. It changes how often people get in. Pleatco says a monthly clean is the usual maker recommendation, every two weeks with heavy use, and after a party${c('pleatcoWash')}. Jacuzzi’s baseline is a weekly rinse and a deep clean every 4–6 weeks, shortened when use is heavy${c('jac')}. Hot Spring’s owner page says clean the cartridge monthly, and soak or replace it when you drain${c('hsMaint','hsBlog')}.</p>
<p>Keep the spare set Unicel, Pleatco and Jacuzzi describe, so the tub is not running bare while a cartridge soaks${c('unicel','pleatcoCat','jac')}. A clogged filter is not only a clarity problem: Hot Spring warns it can trip the high-limit and shut the spa off${c('hsManual')}. Look up the spare from the end cap: <a href="/hot-spring/c-6430/">Hot Spring C-6430</a>, <a href="/caldera/c-7375/">Caldera C-7375</a>, <a href="/sundance/c-8326/">Sundance C-8326</a>, <a href="/bullfrog/pbf40/">Bullfrog 10-00282</a>, or the <a href="/">homepage search</a>. Replacement intervals, which are not the same number for every brand, are in <a href="/guides/how-often-to-replace-hot-tub-filter/">how often to replace a filter</a>.</p>
<h2>Water and chemicals</h2>
<p>CPSC says to keep spa water at 104°F or below${c('cpsc96')}. Test before you add anything. CDC’s rash page says to check disinfectant and pH, with free chlorine at least 3 ppm, bromine 4–8 ppm, and pH 7.0–7.8${c('cdcRash')}. Hot Spring’s own ranges are free chlorine 1–5 ppm, pH 7.2–7.8, total alkalinity 40–120 ppm and calcium hardness 75–150 ppm${c('hsChem')}. When those bands differ, the manual for that spa wins. The sequence is <a href="/guides/how-to-balance-hot-tub-ph-and-alkalinity/">pH and alkalinity first</a>, then sanitizer (<a href="/guides/best-hot-tub-sanitizer-bromine-chlorine-mineral/">bromine, chlorine or mineral</a>) and <a href="/guides/hot-tub-shock-chlorine-vs-non-chlorine/">shock</a>.</p>
<p>Store the bottles the way CDC describes for pool chemicals, which it applies to hot tubs too: below 95°F, low humidity, out of sunlight, dry, each product in its own original labeled container, away from children${c('cdcChem')}. A bin that gets rained or snowed on fails the “protect from getting wet” line. Never mix chlorine and acid${c('unicel','cdcChem')}. Full notes: <a href="/guides/hot-tub-chemical-safety-and-storage/">chemical safety and storage</a>.</p>
<p>CDC treats cartridge replacement on the manufacturer’s schedule as part of controlling Legionella, and it says to scrub surfaces when the tub is drained${c('cdcLeg')}. Hot Spring’s fix for water that will not come right is often to drain, clean and refill${c('hsWater')}. That is a maintenance drain, not a set of winter shutdown steps.</p>
<h2>What we will not invent</h2>
<p>We do not publish a temperature to “set and leave,” an antifreeze dose, or a valve map for winterizing. Those steps belong to the manual for that spa. If the manual says the tub is built to run through the winter, follow that. If it says to drain, follow the drain procedure it prints, including where the lines have to be emptied. Our cited pages do not add a shortcut.</p>
<p>Buying the spare and the care products ahead of the guest weekends is the <a href="/guides/black-friday-hot-tub-filter-and-spa-care/">Black Friday filters and spa-care</a> page, with the USPS and UPS dates on it. Giving the same things to someone else is <a href="/guides/gifts-for-hot-tub-owners-2026/">gifts for hot tub owners 2026</a>.</p>`,
  faq: [
    ['Should I remove snow from a hot tub cover?', 'Yes. Hot Spring’s manual says to remove snow buildup to protect the foam core. It also says not to walk or sit on the cover and not to put a plastic tarp over it.'],
    ['Can I close the tub for the winter with these steps?', 'Not from this page. We do not publish a universal drain-and-winterize procedure. Follow the shutdown steps in your own spa’s manual.'],
    ['How often do I clean the filter if people are in the tub all weekend?', 'Pleatco says to clean monthly, every two weeks with heavy use, and after a party. Jacuzzi shortens its weekly rinse when use is heavy. Keep a second cartridge so you are not running the spa with the filter out.'],
    ['Where do the chemicals go in cold weather?', 'CDC says below 95°F, dry, out of direct sunlight, each chemical separate and in its original labeled container. A wet shed fails the “keep them dry” rule. Do not mix products together.'],
  ],
  src: ['cpsc96', 'cpscHome', 'hsManualUK', 'hsQuick', 'hsLifters', 'pleatcoWash', 'jac', 'hsMaint', 'hsBlog', 'unicel', 'pleatcoCat', 'hsManual', 'cdcRash', 'hsChem', 'cdcChem', 'cdcLeg', 'hsWater'],
  related: ['black-friday-hot-tub-filter-and-spa-care', 'gifts-for-hot-tub-owners-2026', 'hot-tub-cover-lifters-and-cover-care', 'how-to-clean-a-hot-tub-filter', 'how-often-to-replace-hot-tub-filter', 'hot-tub-chemical-safety-and-storage'],
  pickHeading: 'Cover, cleaner and test strips',
  picks: [
    { h: 'Listings we checked', intro: 'The note under each name is the listing title, not a sale price. Snow removal and the lock are still the manual’s job, not the bottle’s.', keys: ['cover-rockit', 'lt-filter-clean-o', 'aquachek-spa-6in1', 'spaguard-shock'] },
    { h: 'Searches, because the right one depends on your cover or cartridge', search: [
      ['Hot tub cover wind straps', 'hot tub cover straps', 'Hot Spring says extra lock straps where wind is a problem. Match the clip and the length to your cover.'],
      ['Vinyl cover cleaner', 'vinyl hot tub cover cleaner conditioner', 'Hot Spring’s vinyl conditioner is not for polyester. Read the label for your cover.'],
      ['Your cartridge, by part number', 'spa filter cartridge', 'Better: search the number from the end cap on the homepage, then use the button on that cartridge page.'],
    ] },
  ],
}];
