# MySpaFilter

Astro static site for myspafilter.com: a spa filter / hot tub filter cross reference built from the Unicel 2026 Replacement Guide, the Pleatco 2023 catalog and the Filbur catalog (plus a few cited retailer listings for model fitment).

```
npm install
npm run dev      # local preview
npm run build    # outputs dist/ (pushing to main auto-deploys)
```

## Affiliate links: one-line swap

All retailer outbound links (FiltersFast, Amazon, Doheny's) are built in **one** file: [`src/config/affiliate.ts`](src/config/affiliate.ts). Pages never assemble retailer URLs themselves.

The three IDs ship **empty**. While empty, every link is a plain search URL with no tracking parameter (for example `https://www.amazon.com/s?k=4CH-35+spa+filter`). Paste a real ID and rebuild:

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
