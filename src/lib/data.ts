import raw from '../data/filters.json';
export type Filter = { brand:string; brandSlug:string; model:string; modelSlug:string; oem:string;
  equivalents?: { unicel?:string; pleatco?:string; filbur?:string };
  dimensions: { diameterIn:number; lengthIn:number; topCore?:string; bottomCore?:string; sqft?:number };
  notes?:string; searchTerm?:string; label?:string;
  series?:string; oemAll?:string; status?:string; gaps?:string; sources?:{source:string;url:string;where:string}[];
  fitment?:{model:string;years:string;note:string;src:string}[]; pleatcoNote?:string; filburNote?:string; index?:boolean;
  dimensions2?:never };
export type Dim = Filter['dimensions'] & { diameterText?:string; lengthText?:string };
export const isExample: boolean = (raw as any).example === true;
export const filters: Filter[] = (raw as any).filters;
export const slug = (s:string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const brands = () => [...new Map(filters.map(f=>[f.brandSlug,f.brand])).entries()].map(([slug,name])=>({slug,name}));
export const allParts = () => { const m = new Map<string,Filter[]>();
  const add = (f: Filter, raw?: string) => {
    for (const p of String(raw || '').split(/[;/]/)) {
      const t = p.trim(); if (!t) continue;
      const k = slug(t); if (!k) continue;
      const cur = m.get(k) || [];
      if (!cur.includes(f)) cur.push(f);
      m.set(k, cur);
    }
  };
  for (const f of filters) {
    add(f, f.oem);
    add(f, f.oemAll);
    for (const v of Object.values(f.equivalents || {})) add(f, String(v));
  }
  return m; };
export const partLabel = (f:Filter) => f.equivalents?.unicel || f.equivalents?.pleatco || f.oem;
export const fitSrc: Record<string,string> = { lt:'Leisure Time Inc. dealer listing', unicel:'Unicel 2026 Replacement Guide', pleatco:'Pleatco 2023 Catalog', hd:'Home Depot listing for Intex 29001E', intex:'Intex compatible-item list', bestway:'Bestway USA product page', layzspa:'Lay-Z-Spa UK (Bestway) product page', spd:'Spa Parts Depot listing', marquis:'Marquis Spas filter finder', hto:'Hot Tub Outpost OEM listing' };
/** Sq ft text, or empty when no source gives a media area. */
export const sqftText = (d:{sqft?:number}) => d.sqft!=null ? `${d.sqft} sq ft` : '';

/** A page is indexable unless its row is flagged index:false (thin or single-source rows stay noindex). */
export const isIndexable = (f:Filter) => f.index !== false;
export const modelHref = (f:Filter) => `/${f.brandSlug}/${f.modelSlug}/`;
/** A brand page is indexable when at least one of its cartridge pages is. */
export const brandIndexable = (brandSlug:string) => filters.some(f=>f.brandSlug===brandSlug && isIndexable(f));
/** Other brands that list at least one of the same Unicel/Pleatco part numbers, with the parts they share (most shared first). */
export const relatedBrands = (brandSlug:string, max=5) => {
  const mine = filters.filter(f=>f.brandSlug===brandSlug);
  const out = new Map<string,{slug:string;name:string;parts:Set<string>}>();
  for (const f of mine) { const pk = partLabel(f); if (!pk) continue;
    for (const o of filters) if (o.brandSlug!==brandSlug && partLabel(o)===pk && brandIndexable(o.brandSlug)) {
      const e = out.get(o.brandSlug) || {slug:o.brandSlug,name:o.brand,parts:new Set<string>()}; e.parts.add(pk); out.set(o.brandSlug,e); } }
  return [...out.values()].sort((a,b)=>b.parts.size-a.parts.size || a.name.localeCompare(b.name)).slice(0,max).map(e=>({slug:e.slug,name:e.name,parts:[...e.parts]}));
};
