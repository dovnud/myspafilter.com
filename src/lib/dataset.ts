import { filters, partLabel, modelHref, type Filter } from './data';
import { rowDate } from './lastmod';
import { SITE } from './schema';
const norm = (s?: string) => (s || '').trim();
const srcText = (f: Filter) => (f.sources || []).map((s) => `${s.source} (${s.where}) ${s.url}`).join(' | ');
export const csvColumns = ['brand','model','oem_part_numbers','unicel_part','pleatco_part','filbur_part','diameter_in','length_in','diameter_text','length_text','top_fitting','bottom_fitting','square_feet','status','not_in_sources','row_last_changed','model_page_url','sources'] as const;
export const csvRow = (f: Filter): Record<(typeof csvColumns)[number], string | number> => { const d: any = f.dimensions; return {
  brand: f.brand, model: f.model, oem_part_numbers: norm(f.oemAll || f.oem), unicel_part: norm(f.equivalents?.unicel), pleatco_part: norm(f.equivalents?.pleatco), filbur_part: norm(f.equivalents?.filbur),
  diameter_in: d.diameterIn ?? '', length_in: d.lengthIn ?? '', diameter_text: d.diameterText ?? '', length_text: d.lengthText ?? '', top_fitting: norm(d.topCore), bottom_fitting: norm(d.bottomCore),
  square_feet: d.sqft ?? '', status: f.status === 'verified' ? 'verified' : 'unverified', not_in_sources: norm(f.gaps), row_last_changed: rowDate(f), model_page_url: new URL(modelHref(f), SITE).href, sources: srcText(f) }; };
const esc = (v: string | number) => { const s = String(v); return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
export const toCsv = () => [csvColumns.join(','), ...filters.map((f) => csvColumns.map((c) => esc(csvRow(f)[c])).join(','))].join('\r\n') + '\r\n';
export const toJson = (updated: string, cite: string) => JSON.stringify({
  name: 'MySpaFilter spa filter cartridge cross-reference dataset', url: `${SITE}data/`, publisher: 'MySpaFilter Editorial Team', cite_as: cite, dateModified: updated, count: filters.length,
  note: 'Part numbers, dimensions and fittings are transcribed from the cited catalog pages; a row marked unverified lacks a second source or has a conflict. Measure your old cartridge before ordering.',
  filters: filters.map((f) => ({ ...csvRowJson(f) })) }, null, 1) + '\n';
const csvRowJson = (f: Filter) => { const d: any = f.dimensions; return {
  brand: f.brand, model: f.model, series: f.series ?? null, oem_part_numbers: norm(f.oemAll || f.oem), oem: norm(f.oem),
  equivalents: { unicel: f.equivalents?.unicel ?? null, pleatco: f.equivalents?.pleatco ?? null, filbur: f.equivalents?.filbur ?? null },
  dimensions: { diameter_in: d.diameterIn ?? null, length_in: d.lengthIn ?? null, diameter_text: d.diameterText ?? null, length_text: d.lengthText ?? null, top_fitting: d.topCore ?? null, bottom_fitting: d.bottomCore ?? null, square_feet: d.sqft ?? null },
  status: f.status === 'verified' ? 'verified' : 'unverified', not_in_sources: f.gaps || null, notes: f.notes || null, row_last_changed: rowDate(f), model_page_url: new URL(modelHref(f), SITE).href,
  fitment: (f.fitment || []).map((x) => ({ model: x.model, years: x.years || null, note: x.note || null, source_key: x.src })),
  sources: (f.sources || []).map((s) => ({ source: s.source, where: s.where, url: s.url })) }; };
export const distinctSources = () => [...new Map(filters.flatMap((f) => f.sources || []).map((s) => [s.url, s])).values()];
export { partLabel };
