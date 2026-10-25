# Publish log

One row per page published under the "few links, real data" rule (no bulk Amazon link expansion; existing links and the `myspafilter-20` tag are untouched).
"Retailer links" = affiliate/retailer links (`rel="sponsored nofollow"`). "Internal" = links to other pages on this site inside the article body (not header/footer). "Cited sources" = outbound source links in the Sources list.

| Date | URL | What it answers | Sources | Retailer links | Internal | Cited sources |
|---|---|---|---|---|---|---|
| 2026-10-25 | /guides/why-same-size-spa-filters-have-different-square-feet/ | Why cartridges of the same diameter and length carry different sq ft ratings (pleat count, Unicel's area formula), what Unicel's "upgrade" listings mean, how to tell which you have; includes the unresolved Hot Spring Limelight 35/50/75 sq ft conflict. | Unicel 2026 Replacement Guide (printed pp. 5, 6, 8, 74); Unicel Maintenance & FAQ; Pleatco 2023 catalog; Leisure Time Inc. pages for Hot Spring 78161 and Caldera 73531 | 0 | 9 | 5 |
| 2026-10-25 | /fitment/hot-spring-filter-by-model-year/ | Which Hot Spring filter (71825, 71827, 79435 Tri-X, 78161, 78286, 77004) fits each Highlife, Limelight, Hot Spot, Tiger River and Solana model and year, with Unicel equivalents. | Leisure Time Inc. Filter Fitment Guide (fetched 2026-10-25; single dealer table); Unicel 2026 (Hot Springs xref p. 35, spec tables); Pleatco 2023; hotspring.com filter article; Prisco and HotSpring World Tri-X listings | 0 | 11 | 6 |
| 2026-10-25 | /fitment/caldera-filter-by-model-year/ | Which Caldera filter (73531, 73532, 73722, 74817, 74148, 76136, 31489) fits each Utopia, Paradise, Highland, Vacanza, Aquatic Melodies and C-Series model and year, incl. mid-run cartridge changes. | Leisure Time Inc. Filter Fitment Guide (fetched 2026-10-25; single dealer table); Unicel 2026 (Caldera xref p. 26); LT 73531 page; SpaStore 73531 listing | 0 | 13 | 4 |

## Known limits / not verified
- Model-year ranges on both fitment pages come from one dealer table (Leisure Time Inc.). Cross-references and sizes are from Unicel 2026. Other dealers differ at the edges (examples noted on each page).
- Hot Spring Limelight 78161 sq ft is not resolved: Unicel offers C-6350 (50) and C-6355 (75), a dealer lists 50, Pleatco PWK35B lists 35.
- No Unicel/Pleatco/Filbur match was found for Hot Spring 79435 (Tri-X), 78286, 77004; their sizes are not given in our sources, except dealer-listed Tri-X size (6" x 10-1/2", 65 sq ft).
- The 10 `needs_verification` rows were not touched.
- Source data/parser: `src/data/lt-fitment.json` is parsed from the saved LT guide page.
