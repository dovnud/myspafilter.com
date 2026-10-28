# CRO audit — myspafilter.com

## Implemented (28 Oct 2026)

Shipped the affiliate and navigation items. Checked with `npm run build` (Amazon + SEO checks passed) and in the browser at 390px and 1280px.

- Part search now includes every `oemAll` number. `6540-476` opens a page. A single partial match, such as `PTL47W`, goes straight to that page. Home chips: 6540-476, C-8326, PTL47W-P4.
- Amazon is the accent button: **See on Amazon** for a checked listing, **Search on Amazon** when the link is a search. Tag remains `myspafilter-20`. The same block sits on the part page (above the spec table) and is repeated after the measuring section on the cartridge page.
- A second Amazon button is coded only for another verified ASIN already on that row. No current row has two, so pages show one button.
- Guides with product picks show one product under the short answer, with the disclosure beside it, and “Products we checked” jumps to the full list.
- Brand hubs use a card list with “See replacement →” under 600px. The size table stays empty until a diameter or length is typed.
- FiltersFast and Doheny’s are not rendered. Their ID fields stay empty placeholders.

**Updated moneymaker score: 7/10** (expert estimate of the setup, not a forecast). Affiliate **7/10**. AdSense still **1/10** because no ad work was done. Leads still later.

Skipped on purpose: every AdSense item (no slots, no `ads.txt`, no privacy edits); any new affiliate ID; the large pass that would retarget guide and fitment links onto cartridge URLs; a leads form.

Reviewed live on 27 Oct 2026 as a first-time visitor at 390px and 1280px (home, part lookup, cartridge page, brand hub, size lookup, a guide, supplies, contact, affiliate disclosure) and checked against the repo. Scores below that line are the original estimates, not measured data. No traffic or revenue figures.

## 1. Conversion score

**5/10.** The job is obvious and the cartridge page already opens a checked Amazon listing, but the main path drops the paid click and the accent button does not earn.

**Affiliate-click likelihood: low.** Home search, the part page it opens, brand tables, the size tool, and the guide’s first screen have no retailer button. On `/jacuzzi/5ch-402/` three buttons are above the fold; the accent one is an untagged FiltersFast search, and Amazon (`tag=myspafilter-20`) is the second, sand button.

## 2. Scorecard (1–5)

| Item | Score | Note |
|---|---|---|
| Purpose in 5 seconds | 4 | “Read the end cap” is immediate. The commission bar leads, and the end-cap figure is hidden under 860px. |
| CTA visibility | 2 | “Find filter” is above the fold. Affiliate buttons exist on the cartridge page only. |
| CTA wording | 3 | “Find filter” and guide “View on Amazon” fit. “Check FiltersFast / Amazon / Doheny’s” does not say search vs listing. |
| Disclosure | 5 | Sitewide bar, `rel="sponsored"`, per-button note, disclosure page, required Amazon sentence. |
| Mobile | 3 | Full-width buttons work. Nav clips About/Contact. Brand and size tables scroll sideways. |
| Nav and internal links | 4 | Brands, related cartridges, guides, supplies, and fitment hubs connect. Search misses the cartridge URL. |
| Trust | 5 | MySpaFilter Editorial Team, dates, catalog citations, verified/unverified labels, legal pages, `contact@myspafilter.com`. |
| Visual design | 4 | Readable type. Checked pairs meet AA (muted 5.9:1, nav 9.3:1). Tables and repeated notes are dense. |
| Page-speed feel | 4 | HTML in ~0.2–0.4s, pages under 80KB. Homepage still loads React cards plus Lenis/GSAP after idle. |
| Accessibility | 4 | Skip link, labels, focus ring, reduced motion. New-tab retailer links unlabeled. No mobile menu. |

## 3. Top 10 fixes

1. **Index every OEM number the hero invites.** `allParts()` in `src/lib/data.ts` skips `oemAll`, so hero sample `6540-476` returns no match (37 such numbers). `PTL47W` only suggests `ptl47w-p4`. **S. High.** The first number the page suggests fails.
2. **Make the tagged Amazon link the accent button.** `retailerLinks()` lists Amazon second; `.buy .btn:first-child` in `src/layouts/Base.astro` paints FiltersFast. Live FiltersFast and Doheny’s URLs are plain searches (`awinFiltersFast` and `dohenyId` are empty). **S. High.**
3. **Buy row on the part page.** Search lands on `/filter/[part]/`, which only has the text link “Full details & buy options.” **S. High.**
4. **One product under the guide short answer** (`src/pages/guides/[slug].astro`). The clean-a-filter guide shows no product on the first screen. Keep the full grid and disclosure lower. **S. Med.**
5. **Repeat the Amazon button** after “How to confirm this is your filter,” same `myspafilter-20` href. **S. Med.**
6. **Brand hub as cards under 600px** (`src/pages/[brand]/index.astro`): part, size, “See replacement →”. The 7-column table scrolls sideways at 390px. **M. Med.**
7. **Size lookup starts empty** (`src/pages/size/index.astro`). Show rows only after diameter or length, each linking to the cartridge page. **S. Med.**
8. **Another Amazon button only if that part is already in `src/data/amazon-asins.json`.** 93 of 116 cartridge pages already use a checked `/dp/` link; 23 fall back to search. **M. Med.**
9. **Ad slots clear of the buy row.** No ad code; live `/ads.txt` is 404. With this site’s own AdSense publisher ID: `ads.txt`, a privacy sentence, a labeled slot under the answer and one above the footer. **M. Med** for AdSense.
10. **Aim guide and fitment links at the cartridge URL** that carries the buy row. **L. Med.**

## 4. Where the primary CTA sits

- **Home.** Commission bar, then the field. Primary control: **Find filter**. Under it, chips for numbers that resolve (`C-8326`, `6540-476` once indexed). “Search by size” stays a text link.
- **Part page and cartridge page.** Equivalents and size, then the buy row above the spec table: accent **View Unicel 5CH-402 on Amazon** when the ASIN is verified, or **Search Amazon for {part}** on a search fallback. Under it, one line that includes “As an Amazon Associate I earn from qualifying purchases.” **Search FiltersFast** and **Search Doheny’s** as text links. Repeat the Amazon button after the measuring section on the cartridge page. Cleaner picks stay below that.
- **Guide with picks.** Short answer, disclosure line, one card (name, listing-title sentence, **View on Amazon**). Full grid before the FAQ.
- **Guide without picks, fitment, supplies, brand hub, size results.** Text link to the cartridge, size tool, or guide. Retailer buttons stay on the cartridge page.
- **Contact and legal.** No affiliate CTA. Mail stays `contact@myspafilter.com`.

## 5. Quick wins (under an hour)

Include `oemAll` in `allParts()`. Order Amazon first and use the labels in section 4. Copy the `.buy` block into `src/pages/filter/[part].astro`. Add `id="picks"` and a “Products we checked” link on guides that have picks. Hide size-table rows until an input is filled.

## 6. Moneymaker scale

**Current moneymaker score at review: 4/10** (expert estimate of the setup then, not a forecast). The implemented score is 7/10, in the section at the top.

| Channel | Score | Why |
|---|---|---|
| Affiliate | 5/10 | `myspafilter-20` is live and most cartridge pages open a checked listing, with disclosures kept. The accent click is unpaid, and search, hubs, and guide first screens never show it. |
| AdSense | 1/10 | No units, no `ads.txt`, privacy policy does not mention display ads. |
| Leads | Later | Contact is a corrections form to `contact@myspafilter.com`. |

**Path** (each step keeps the one before it):

| After | Action | Effort | Channel |
|---|---|---|---|
| 4 → 5 | Index `oemAll`. Amazon accent button, honest label, this tag only. | S | Affiliate |
| 5 → 6 | Buy row on `/filter/[part]/`. | S | Affiliate |
| 6 → 7 | One checked product under the guide answer; Amazon button repeated at the end of the cartridge page. | S | Affiliate |
| 7 → 8 | Paste this site’s own Awin ID into `awinFiltersFast` and this site’s own Ascend ID into `dohenyId` only after those accounts are approved for myspafilter.com. Extra Amazon buttons only for ASINs already on file. | M | Affiliate |
| 8 → 9 | This site’s AdSense publisher ID in `ads.txt`, privacy sentence, two labeled slots clear of `.buy` and the hero. Guide and fitment links aimed at cartridge URLs. | M | AdSense, SEO |
| 9 → 10 | Later: unmatched-part form (number, diameter, length) emailed only to `contact@myspafilter.com`, answered with the cartridge page, plus more fitment and care guides. | L | Leads, SEO |

Highest gain per hour is 4 → 7. Ship the accent label **View {brand} {part} on Amazon** or **Search Amazon for {part}**, with the disclosure line left in place.

**Would lower the score:** sticky, interstitial, or autoplay ads, or any ad in `.buy`, the hero, or between the part number and Amazon; a retailer button in every table cell; countdown copy, “only a few left,” or invented star ratings; dropping the disclosure or the Amazon Associate sentence; any tag other than `myspafilter-20`, or another site’s Awin or Ascend ID; thin doorway pages; hiding the unverified badge; an email popup before the match; replacing a verified `/dp/` link with a generic search.

**Ads, when applied:** About, Contact, Privacy, and the cited guides are already in place. Mark slots “Advertisement” and keep them at least a button-height away from **View on Amazon**. Approval is not guaranteed; that gap is what keeps ads from crowding the affiliate click.
