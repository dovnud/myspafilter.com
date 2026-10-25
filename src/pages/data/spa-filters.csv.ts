import { toCsv } from '../../lib/dataset';
export const GET = () => new Response(toCsv(), { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
