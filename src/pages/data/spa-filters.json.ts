import { toJson } from '../../lib/dataset';
import { dataDate } from '../../lib/lastmod';
import { citeAs } from '../../lib/schema';
export const GET = () => new Response(toJson(dataDate(), citeAs(dataDate())), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
