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
  amazonTag: '',        // Amazon Associates tag, e.g. 'yourname-20'  -> appends &tag=yourname-20
  awinFiltersFast: '',  // Awin publisher ID for FiltersFast (merchant 73760) -> Awin deeplink
  dohenyId: '',         // Doheny's tracking ID from Ascend/Pepperjam -> pjtra.com/t/<id>?url=...
};
```

- **Amazon**: set `amazonTag` to your Associates tracking ID. Links become `https://www.amazon.com/s?k=...&tag=<id>`.
- **FiltersFast**: set `awinFiltersFast` to your Awin publisher ID. Links become `https://www.awin1.com/cread.php?awinmid=73760&awinaffid=<id>&ued=<encoded filtersfast url>`.
- **Doheny's**: set `dohenyId`. The `pjtra.com/t/<id>?url=` pattern is the usual Ascend/Pepperjam deep-link form, but confirm the exact link format in your Ascend dashboard before relying on it (edit `dohenysLink()` if it differs).
- Do not invent IDs. Leave a value empty until you have the real one.
- Every outbound retailer link keeps `rel="sponsored nofollow"` (exported as `outboundRel`) and the site-wide disclosure in `src/layouts/Base.astro` plus `/affiliate-disclosure/`. If you change the Amazon tag, the Amazon Associates disclosure sentence is already in place.

## Data

- Rows live in `src/data/filters.json`. Each row carries its sources (document, URL, page), a `status` (`verified` or `needs_verification`) and an `index` flag. Rows with `index: false` render with `noindex,follow` and are left out of the sitemap; a brand page is noindex when none of its cartridge pages are indexable.
- Part numbers and fitment must come from a cited source. Never add a number that is not in one.
- Optional `searchTerm` on a row overrides the term sent to retailers (used for Intex, whose retail part number is 29001E).
- The research dataset and generator scripts are kept outside the repo in `/workspace/spafilter/data` (`build.py`, `add_batch2.py`).

## SEO

- `public/robots.txt` points to `https://myspafilter.com/sitemap-index.xml`.
- IndexNow key file: `public/93fc1b7ff9bd45e89e61434f5455a4de.txt`.
