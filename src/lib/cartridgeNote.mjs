/**
 * Part-specific cartridge copy built only from fields already on the row.
 * Sentence frames rotate by slug so two cartridges from the same brand do not
 * share a long identical paragraph.
 */

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function variant(seed, n, list) {
  let h = 2166136261;
  const s = `${seed}:${n}`;
  for (let i = 0; i < s.length; i += 1) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return list[(h >>> 0) % list.length];
}

const clean = (s) => esc(String(s || '').replace(/\s+/g, ' ').trim());

function partBits(f) {
  const eq = f.equivalents || {};
  const oem = String(f.oemAll || f.oem || '').split(';').map((s) => s.trim()).filter(Boolean);
  const bits = [];
  if (oem.length) bits.push(`OEM ${oem.join(', ')}`);
  if (eq.unicel) bits.push(`Unicel ${eq.unicel}`);
  if (eq.pleatco) bits.push(`Pleatco ${eq.pleatco}`);
  if (eq.filbur) bits.push(`Filbur ${eq.filbur}`);
  return { oem, eq, bits };
}

function sizeClause(d) {
  const ends = [d.topCore ? `top ${d.topCore}` : '', d.bottomCore ? `bottom ${d.bottomCore}` : ''].filter(Boolean);
  const area = d.sqft != null ? `${d.sqft} sq ft` : 'no square-foot figure';
  return `${d.diameterText || 'diameter not given'} across, ${d.lengthText || 'length not given'} long${ends.length ? `, ${ends.join(', ')}` : ''}, ${area}`;
}

function labelOf(f) {
  return f.oem || f.equivalents?.pleatco || f.equivalents?.unicel || f.model;
}

function pleatcoSentence(f, eq) {
  const note = String(f.pleatcoNote || '');
  const pleat = clean(eq.pleatco || 'the Pleatco cell');
  const uni = clean(eq.unicel || f.model);
  const oem = clean(f.oem || f.model);
  if (/not found in the Pleatco 2023 Unicel cross reference/i.test(note) && /Filbur catalog/i.test(note)) {
    const page = (note.match(/printed p\.\s*[\d]+/i) || ['Filbur’s brand section'])[0];
    return `${pleat} is the Pleatco string Filbur prints next to ${uni} (OEM ${oem}) on ${clean(page)}. ${pleat} itself is absent from Pleatco’s 2023 Unicel cross-reference.`;
  }
  return `${uni} (OEM ${oem}), Pleatco side: ${clean(note)}.`;
}

function nearestRows(f, all, n) {
  const d = f.dimensions || {};
  return (all || [])
    .filter((x) => x.brandSlug === f.brandSlug && x.modelSlug !== f.modelSlug && x.index !== false)
    .map((x) => ({
      x,
      score: Math.abs((x.dimensions?.diameterIn || 0) - (d.diameterIn || 0)) * 4 + Math.abs((x.dimensions?.lengthIn || 0) - (d.lengthIn || 0)),
    }))
    .sort((a, b) => a.score - b.score || String(a.x.modelSlug).localeCompare(String(b.x.modelSlug)))
    .slice(0, n)
    .map((row) => row.x);
}

function diffBits(f, x) {
  const d = f.dimensions || {};
  const od = x.dimensions || {};
  const eq = f.equivalents || {};
  const oq = x.equivalents || {};
  const bits = [];
  if ((oq.unicel || '') !== (eq.unicel || '')) bits.push(oq.unicel ? `Unicel ${clean(oq.unicel)}` : 'no Unicel number');
  if ((oq.pleatco || '') !== (eq.pleatco || '')) bits.push(oq.pleatco ? `Pleatco ${clean(oq.pleatco)}` : 'no Pleatco number');
  if ((oq.filbur || '') !== (eq.filbur || '')) bits.push(oq.filbur ? `Filbur ${clean(oq.filbur)}` : 'no Filbur number');
  if ((od.diameterText || '') !== (d.diameterText || '')) bits.push(`${clean(od.diameterText || 'unknown')} diameter`);
  if ((od.lengthText || '') !== (d.lengthText || '')) bits.push(`${clean(od.lengthText || 'unknown')} long`);
  if ((od.topCore || '') !== (d.topCore || '')) bits.push(`top ${clean(od.topCore || 'not given')}`);
  if ((od.bottomCore || '') !== (d.bottomCore || '')) bits.push(`bottom ${clean(od.bottomCore || 'not given')}`);
  if (od.sqft !== d.sqft) bits.push(od.sqft != null ? `${od.sqft} sq ft` : 'no sq ft printed');
  if ((x.oem || '') !== (f.oem || '')) bits.push(x.oem ? `OEM ${clean(x.oem)}` : 'no OEM number');
  if (x.notes && x.notes !== f.notes) bits.push(`note says ${clean(x.notes)}`);
  if (!bits.length) bits.push('same printed size, so use the part number');
  return bits.join(', ');
}

function contrastParagraph(f, nearest) {
  const mine = clean(f.equivalents?.unicel || f.equivalents?.pleatco || labelOf(f));
  const lines = nearest.map((x) => {
    const href = `/${x.brandSlug}/${x.modelSlug}/`;
    const name = clean(x.equivalents?.unicel || x.equivalents?.pleatco || x.model);
    return `<a href="${href}">${name}</a> differs by ${diffBits(f, x)}`;
  });
  return variant(`${f.brandSlug}/${f.modelSlug}`, 3, [
    `Before ordering ${mine}, compare it with ${lines.join('; and ')}.`,
    `${mine} is easy to confuse on the ${clean(f.brand)} table. ${lines.join('. ')}.`,
    `Hold ${mine} next to ${lines.join('; ')}.`,
  ]);
}

/**
 * @param {object} f cartridge row
 * @param {object[]} all every cartridge row
 * @param {Record<string, string>} fitSrc source-key labels
 * @returns {string[]} HTML paragraphs
 */
export function cartridgeParagraphs(f, all, fitSrc) {
  const d = f.dimensions || {};
  const { oem, eq, bits } = partBits(f);
  const id = `${f.brandSlug}/${f.modelSlug}`;
  const paras = [];

  const numbers = bits.length ? bits.join('; ') : 'no OEM, Unicel, Pleatco or Filbur number on this row';
  paras.push(variant(id, 0, [
    `${clean(f.brand)} files this cartridge as ${clean(f.model)}, in the ${clean(f.series)} group. Numbers on the row: ${clean(numbers)}. ${clean(sizeClause(d))}.`,
    `For ${clean(f.brand)}, ${clean(f.model)} sits in ${clean(f.series)}. The cross-reference prints ${clean(numbers)}. ${clean(sizeClause(d))}.`,
    `${clean(f.series)} is the group name on the ${clean(f.brand)} row ${clean(f.model)}. Match these numbers: ${clean(numbers)}. ${clean(sizeClause(d))}.`,
  ]));

  if (f.notes) {
    const note = clean(f.notes).replace(/[.\s]*$/, '');
    paras.push(variant(id, 1, [
      `Catalog note for ${clean(labelOf(f))}: ${note}.`,
      `What the sources add about ${clean(labelOf(f))}: ${note}.`,
      `${clean(labelOf(f))} carries this note from the catalogs: ${note}.`,
    ]));
  }

  if (f.pleatcoNote) paras.push(pleatcoSentence(f, eq));
  if (f.filburNote) paras.push(`${clean(labelOf(f))}, Filbur note: ${clean(f.filburNote)}.`);

  const fit = f.fitment || [];
  if (fit.length) {
    const lines = fit.map((x) => {
      const who = fitSrc[x.src] || x.src;
      const years = x.years ? `, years ${clean(x.years)}` : ', no year range printed';
      const note = x.note ? ` (${clean(x.note)})` : '';
      return `${clean(x.model)}${years}, listed by ${clean(who)}${note}`;
    });
    paras.push(variant(id, 2, [
      `Hot tubs named for ${clean(labelOf(f))}: ${lines.join('; ')}.`,
      `${clean(f.brand)} applications recorded for this cartridge: ${lines.join('; ')}.`,
      `Model list attached to ${clean(f.model)}: ${lines.join('; ')}.`,
    ]));
  }

  const nearest = nearestRows(f, all, 2);
  if (nearest.length) paras.push(contrastParagraph(f, nearest));

  if (!eq.unicel || !eq.pleatco || !eq.filbur) {
    const missing = [
      !eq.unicel ? 'Unicel' : '',
      !eq.pleatco ? 'Pleatco' : '',
      !eq.filbur ? 'Filbur' : '',
    ].filter(Boolean);
    const oemHint = oem[0] ? ` Search ${clean(oem[0])}` : ` Search ${clean(labelOf(f))}`;
    paras.push(`${missing.join(' and ')} ${missing.length > 1 ? 'do' : 'does'} not have a number on this row.${oemHint} or the ${clean(f.brand)} part you pulled out of the spa.`);
  }

  if (f.gaps) paras.push(`Left blank on purpose: ${clean(f.gaps)}.`);

  const sources = f.sources || [];
  if (sources.length) {
    const who = clean(eq.unicel || eq.pleatco || f.oem || f.model);
    const lines = sources.map((s) => `${clean(s.source)} on ${who} (${clean(s.where)})`);
    paras.push(variant(id, 4, [
      `Where those figures are printed: ${lines.join('. ')}.`,
      `Pages checked for ${clean(labelOf(f))}: ${lines.join('. ')}.`,
      `Source locations for this ${clean(f.brand)} row: ${lines.join('. ')}.`,
    ]));
  }

  return paras;
}
