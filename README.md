# MySpaFilter

Astro static site for myspafilter.com: a spa filter / hot tub filter cross reference built from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog (plus a few cited retailer listings for model fitment).

```
npm install
npm run dev      # local preview
npm run build    # outputs dist/ (pushing to main auto-deploys)
```

## Affiliate links: one-line swap

All retailer outbound links (FiltersFast, Amazon, Doheny's) are built in **one** file: [`src/config/affiliate.ts`](src/config/affiliate.ts). Pages never assemble retailer URLs themselves.

The Amazon tag is set to `myspafilter-20` (this tag belongs to myspafilter.com only and must never be reused on another site); the FiltersFast and Doheny's IDs may still be empty. While an ID is empty, While empty, every link is a plain search URL with no tracking parameter (for example `https://www.amazon.com/s?k=4CH-35+spa+filter`). Paste a real ID and rebuild:

```ts
export const affiliate = {
  amazonTag: '',        // Amazon Associates tag, e.g. 'yourname-20'  -> appended to every Amazon link (?tag= on /dp/ links, &tag= on search links)
  awinFiltersFast: '',  // Awin publisher ID for FiltersFast (merchant 73760) -> Awin deeplink
  dohenyId: '',         // Doheny's tracking ID from Ascend/Pepperjam -> pjtra.com/t/<id>?url=...
};
```

- **Amazon (the one-line tag swap)**: set `amazonTag: 'yourname-20'` in `src/config/affiliate.ts` and push. Direct links become `https://www.amazon.com/dp/<ASIN>?tag=yourname-20`; search links become `https://www.amazon.com/s?k=...&tag=yourname-20`. `npm run check:amazon` fails the build if the tag is set but malformed (must look like `name-20`).
- **FiltersFast**: set `awinFiltersFast` to your Awin publisher ID. Links become `https://www.awin1.com/cread.php?awinmid=73760&awinaffid=<id>&ued=<encoded filtersfast url>`.
- **Doheny's**: set `dohenyId`. The `pjtra.com/t/<id>?url=` pattern is the usual Ascend/Pepperjam deep-link form, but confirm the exact link format in your Ascend dashboard before relying on it (edit `dohenysLink()` if it differs).
- Do not invent IDs. Leave a value empty until you have the real one.
- Every outbound retailer link keeps `rel="sponsored nofollow"` (exported as `outboundRel`) and the site-wide disclosure in `src/layouts/Base.astro` plus `/affiliate-disclosure/`. If you change the Amazon tag, the Amazon Associates disclosure sentence is already in place.

## Amazon direct links (ASINs) and the compliance check

- `src/data/amazon-asins.json` holds **verified** ASINs keyed by the retail part label shown on the page (Unicel part, else Pleatco part, else OEM). `amazonLink()` uses `https://www.amazon.com/dp/<ASIN>` when a record exists and falls back to the `amazon.com/s?k=...` search link when not.
- **Adding an ASIN** (real ones only, never guess): open `https://www.amazon.com/dp/<ASIN>` and confirm the listing title shows the exact brand (Unicel/Pleatco/OEM) and part number. Then add a record:
  ```json
  "C-7350": { "asin": "B0039X2ZXU", "listingBrand": "Unicel", "listingPart": "C-7350",
              "titleSeen": "<title text you saw>", "verifiedDate": "YYYY-MM-DD",
              "verifiedNote": "Seen on amazon.com/dp/B0039X2ZXU (...) on YYYY-MM-DD: \"<title>\"" }
  ```
  `listingPart` must be one of that cartridge's Unicel/Pleatco/OEM parts, and `titleSeen` must contain it. If the listing is a Pleatco equivalent of a Unicel part, say so in `listingBrand`/`listingPart`; the page tells visitors which listing the Amazon button opens.
- `npm run check:amazon` (runs automatically at the end of `npm run build`) fails if: any built `/dp/` link has no verified record; any page with an Amazon link lacks the visible "As an Amazon Associate I earn from qualifying purchases." note next to the buy buttons; an Amazon link lacks `rel="sponsored nofollow"` or carries a tag other than the configured one (so an empty tag means no tag anywhere); `amazonTag` is malformed; or a page with Amazon links shows a dollar price or a `mailto:` link. Use `node scripts/check-amazon.mjs --src-only` to check config and data without a build.
- Do not hand-type prices anywhere on the site.

## Data

- Rows live in `src/data/filters.json`. Each row carries its sources (document, URL, page), a `status` (`verified` or `needs_verification`) and an `index` flag. Rows with `index: false` render with `noindex,follow` and are left out of the sitemap; a brand page is noindex when none of its cartridge pages are indexable.
- Part numbers and fitment must come from a cited source. Never add a number that is not in one.
- Optional `searchTerm` on a row overrides the term sent to retailers (used for Intex, whose retail part number is 29001E).
- The research dataset and generator scripts are kept outside the repo in `/workspace/spafilter/data` (`build.py`, `add_batch2.py`).

## SEO

- `public/robots.txt` points to `https://myspafilter.com/sitemap-index.xml`.
- IndexNow key file: `public/93fc1b7ff9bd45e89e61434f5455a4de.txt`.


## Product picks (non-cartridge Amazon links)

- `src/data/amazon-products.json` holds verified product records (asin, name, brand, category, `says` = what the listing title states, `titleToken`, `titleSeen`, `verifiedDate`, `verifiedNote`). Add a record only after opening `amazon.com/dp/<ASIN>` and confirming the title; never guess an ASIN, never store prices or ratings.
- `productLink(key)` and `searchLink(query)` in `src/config/affiliate.ts` build the tagged URLs. Use the `ProductPicks` component (`src/components/ProductPicks.astro`) for any list of products: it renders the visible Associates disclosure first and uses `rel="sponsored nofollow"`.
- Guides live in `src/lib/guides.ts` (original filter guides) and `src/lib/guides2.ts` (supplies and water-care guides). Safety and number claims must cite a source from `src/lib/guidesrc.ts`.
- `/supplies/` is the hub for the supplies guides. `npm run check:amazon` also validates `amazon-products.json` and reports distinct /dp/ vs search link counts and tagged-link totals.


## SEO and trust (build-time pieces)

- **404**: `src/pages/404.astro` builds `dist/404.html`. Cloudflare Pages serves unknown URLs with a real HTTP 404 only when a top-level `404.html` exists; without it Pages treats the site as a SPA and returns `index.html` with 200 (soft 404). Do not delete it. It is `noindex`.
- **Sitemap lastmod**: `scripts/gen-lastmod.mjs` (run first by `npm run build`) writes `src/data/lastmod.json` from git history (per-row change dates for `filters.json`, last commit of content files). In a shallow clone it leaves the committed file alone. `astro.config.mjs` uses it via `src/lib/lastmod.ts`. Guide pages use their `reviewed` date.
- **Open Graph / Twitter**: `Base.astro` adds og:* and twitter:* tags on every page with the 1200x630 images in `public/og/` (default, guides, brands, supplies, data). Regenerate with `python3 scripts/gen-og.py` (Pillow + fonttools).
- **Structured data**: shared entities in `src/lib/schema.ts`. There is no `Product`, `Offer`, `Review` or `AggregateRating` anywhere (we have no prices or ratings); `npm run check:seo` fails the build if one appears. Guides use `Article` with the `MySpaFilter Editorial Team` Organization as author. `sameAs` lists only profiles that exist (the GitHub repo).
- **Dataset**: `/data/` (HTML table + Dataset JSON-LD + cite snippet), `/data/spa-filters.csv` and `/data/spa-filters.json`, generated from `filters.json` by `src/lib/dataset.ts`.
- `npm run check:seo` validates all of the above on `dist/`.
