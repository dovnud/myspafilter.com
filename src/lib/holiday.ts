/** Cartridge and brand pages that get the holiday CTA. Chosen from indexable pages with the most listed models, plus the cartridges this site already treats as the lookup for that brand. */
export const HOLIDAY_CARTRIDGES = new Set([
  'caldera/c-7375',
  'caldera/c-7350',
  'caldera/c-8399',
  'caldera/c-4950',
  'caldera/c-8465',
  'caldera/c-4335',
  'hot-spring/c-6430',
  'hot-spring/c-8465',
  'hot-spring/c-6350',
  'hot-spring/c-6355',
  'hot-spot/c-6430',
  'hot-spot/c-8465',
  'solana/c-6430',
  'intex/c-4317',
  'intex/29012e',
  'bullfrog/pbf40',
  'sundance/c-8326',
  'sundance/c-8327',
  'jacuzzi/6ch-960',
  'jacuzzi/6ch-945',
  'jacuzzi/c-4950',
  'master-spas/c-8341',
  'bestway/58323',
]);

export const HOLIDAY_BRANDS = new Set([
  'hot-spring', 'hot-spot', 'solana', 'caldera', 'sundance', 'jacuzzi', 'bullfrog', 'master-spas', 'intex', 'bestway',
]);

const HOLIDAY_PARTS = new Set([
  'c-6430', 'c-6330', 'c-7375', 'c-7350', 'c-8465', 'c-8399', 'c-8326', 'c-8327', 'c-4950', 'c-4335', 'c-4317',
  'c-6350', 'c-6355', '29012e', 'pbf40', '6ch-960', '6ch-945', '6ch-961', '71825', '71826', '31489', '73531',
  '1019301', '6540-476', '6540-488', '29001e', '58323',
]);

export const holidayOnCartridge = (brand: string, model: string) => HOLIDAY_CARTRIDGES.has(`${brand}/${model}`);
export const holidayOnBrand = (slug: string) => HOLIDAY_BRANDS.has(slug);
export const holidayOnPart = (part: string, rows: { brandSlug: string; modelSlug: string }[] = []) =>
  HOLIDAY_PARTS.has(part) || rows.some((r) => holidayOnCartridge(r.brandSlug, r.modelSlug));
