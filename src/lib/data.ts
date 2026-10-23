import raw from '../data/filters.json';
export type Filter = { brand:string; brandSlug:string; model:string; modelSlug:string; oem:string;
  equivalents?: { unicel?:string; pleatco?:string; filbur?:string };
  dimensions: { diameterIn:number; lengthIn:number; topCore?:string; bottomCore?:string; sqft?:number };
  buy?: { filtersfast?:string; amazon?:string; dohenys?:string }; notes?:string };
export const isExample: boolean = (raw as any).example === true;
export const filters: Filter[] = (raw as any).filters;
export const slug = (s:string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const brands = () => [...new Map(filters.map(f=>[f.brandSlug,f.brand])).entries()].map(([slug,name])=>({slug,name}));
export const allParts = () => { const m = new Map<string,Filter[]>();
  for (const f of filters) for (const p of [f.oem, ...Object.values(f.equivalents||{})]) if (p) { const k=slug(p); m.set(k,[...(m.get(k)||[]),f]); }
  return m; };
