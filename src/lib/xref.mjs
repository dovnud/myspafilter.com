/** Part-number matching for the cross-reference lookup. Numbers only, from fields already on a row. */

export function norm(s) {
  return String(s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function add(arr, v) {
  if (v && !arr.includes(v)) arr.push(v);
}

/** Index OEM, Unicel, Pleatco, Filbur, and search-term strings already stored on a row. */
export function indexParts(raws) {
  const wholes = [];
  const tokens = [];
  for (const raw of raws) {
    for (const piece of String(raw ?? '').split(/[;/]/)) {
      const t = piece.trim();
      if (!t) continue;
      const whole = norm(t);
      if (whole && /\d/.test(whole)) add(wholes, whole);
      for (const run of t.match(/[a-z0-9]+/gi) || []) {
        const n = norm(run);
        if (n.length >= 4 && /\d/.test(n) && n !== whole) add(tokens, n);
      }
    }
  }
  return { wholes, tokens: tokens.filter((t) => !wholes.includes(t)) };
}

function keysOf(query) {
  const raw = String(query ?? '');
  const split = raw.split(/[;/]/).map((s) => norm(s)).filter((q) => q.length >= 3 && /\d/.test(q));
  const full = norm(raw);
  const keys = [...split];
  if (full.length >= 3 && /\d/.test(full) && !keys.includes(full)) keys.push(full);
  return keys;
}

function rank(row, keys) {
  let best = 0;
  for (const q of keys) {
    if (row.wholes.includes(q)) best = Math.max(best, 3);
    else if (row.tokens.includes(q)) best = Math.max(best, 2);
    else if (q.length >= 4 && row.wholes.some((w) => w.includes(q))) best = Math.max(best, 1);
  }
  return best;
}

/** Classify dataset rows against one typed part number. Partial hits are hidden once an exact or token hit exists. */
export function classify(rows, query) {
  const keys = keysOf(query);
  if (!keys.length) return { kind: 'need-number', exact: [], token: [], partial: [], partialTotal: 0 };
  const exact = [];
  const token = [];
  const partial = [];
  for (const row of rows) {
    const r = rank(row, keys);
    if (r === 3) exact.push(row);
    else if (r === 2) token.push(row);
    else if (r === 1) partial.push(row);
  }
  if (exact.length || token.length) return { kind: 'match', exact, token, partial: [], partialTotal: 0 };
  return {
    kind: partial.length ? 'partial' : 'none',
    exact,
    token,
    partial: partial.slice(0, 20),
    partialTotal: partial.length,
  };
}

export function resultMessage(result) {
  if (result.kind === 'need-number') return 'Type a part number that includes a digit. A brand name belongs on the homepage, not in this lookup.';
  const n = result.exact.length;
  const m = result.token.length;
  if (result.kind === 'match' && n && !m) {
    return n === 1
      ? '1 cartridge in this dataset uses that exact part number. Open its filter page for the fittings, the cited sources, and the retailer links.'
      : `${n} cartridges in this dataset use that exact part number. Each row is a separate filter page. Compare diameter, length, and both fittings before you order. A shared number is not always one cartridge.`;
  }
  if (result.kind === 'match' && n && m) {
    return `${n} ${n === 1 ? 'cartridge uses' : 'cartridges use'} that exact part number. ${m} more include those digits inside a longer part number. A longer number is not the same part. The Match column says which is which. Compare the full number on each filter page.`;
  }
  if (result.kind === 'match' && m) {
    return `No cartridge uses that as its whole part number. ${m} ${m === 1 ? 'cartridge includes' : 'cartridges include'} it inside a longer number. Open the filter page and compare the full number before you order.`;
  }
  if (result.kind === 'partial') {
    const extra = result.partialTotal > result.partial.length ? ` Showing the first ${result.partial.length} of ${result.partialTotal}.` : '';
    return `No exact part number matched. ${result.partialTotal} longer part ${result.partialTotal === 1 ? 'number contains' : 'numbers contain'} what you typed. They are not a cross-reference for each other.${extra}`;
  }
  return 'That number is not in this dataset. This lookup does not invent a match. If the end cap is worn off, use the size lookup. If you know the spa brand and year, use the model-year pages linked from the homepage.';
}
