/** Inch to millimetre helpers. Only converts numbers already in the dataset (1 in = 25.4 mm, rounded to the nearest mm). */
export const toMm = (inch) => (inch == null || inch === '' || !Number.isFinite(+inch) ? null : Math.round(+inch * 25.4));
/** "4-5/8\"" + 4.625 -> "4-5/8\" (117 mm)". Leaves the text alone when there is no number. */
export const inMm = (text, inch) => { const m = toMm(inch); return text ? (m == null ? text : `${text} (${m} mm)`) : ''; };
/** Leading inch size on a fitting string: 2-1/8", 1-15/16", 3", 4.2" -> number, else null. */
export function leadInch(s) {
  const m = String(s || '').match(/^\s*(\d+(?:\.\d+)?)(?:-(\d+)\/(\d+))?\s*["”]/);
  return m ? +m[1] + (m[2] ? +m[2] / +m[3] : 0) : null;
}
/** Kind of end a fitting string describes. Opening sizes are drawn to scale only for open ends. */
export function fitKind(s) {
  const t = String(s || '').toLowerCase();
  if (!t) return 'none';
  if (/thread|mpt|sae/.test(t)) return 'thread';
  if (/slip/.test(t)) return 'slip';
  if (/handle|castle/.test(t)) return 'handle';
  if (/closed/.test(t)) return 'closed';
  if (/open/.test(t)) return 'open';
  return 'other';
}
/** Adds mm after the leading size of an open end only. Thread and slip sizes are nominal pipe sizes, so they are not converted. */
export function fitMm(s) {
  const v = leadInch(s);
  if (v == null || fitKind(s) !== 'open') return s || '';
  return String(s).replace(/^(\s*[\d.\-/]+\s*["”])/, `$1 (${toMm(v)} mm)`);
}
