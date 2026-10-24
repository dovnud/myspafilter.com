import raw from '../data/filters.json';
export type Filter = { brand:string; brandSlug:string; model:string; modelSlug:string; oem:string;
  equivalents?: { unicel?:string; pleatco?:string; filbur?:string };
  dimensions: { diameterIn:number; lengthIn:number; topCore?:string; bottomCore?:string; sqft?:number };
  buy?: { filtersfast?:string; amazon?:string; dohenys?:string }; notes?:string;
  series?:string; oemAll?:string; status?:string; gaps?:string; sources?:{source:string;url:string;where:string}[];
  fitment?:{model:string;years:string;note:string;src:string}[]; pleatcoNote?:string; filburNote?:string; index?:boolean;
  dimensions2?:never };
export type Dim = Filter['dimensions'] & { diameterText?:string; lengthText?:string };
export const isExample: boolean = (raw as any).example === true;
export const filters: Filter[] = (raw as any).filters;
export const slug = (s:string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const brands = () => [...new Map(filters.map(f=>[f.brandSlug,f.brand])).entries()].map(([slug,name])=>({slug,name}));
export const allParts = () => { const m = new Map<string,Filter[]>();
  for (const f of filters) for (const p of [f.oem, ...Object.values(f.equivalents||{}).flatMap(v=>String(v).split('/'))]) if (p && p.trim()) { const k=slug(p); m.set(k,[...(m.get(k)||[]),f]); }
  return m; };
export const partLabel = (f:Filter) => f.equivalents?.unicel || f.equivalents?.pleatco || f.oem;
export const fitSrc: Record<string,string> = { lt:'Leisure Time Inc. dealer listing', unicel:'Unicel 2026 Replacement Guide', pleatco:'Pleatco 2023 Catalog' };
