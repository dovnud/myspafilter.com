/**
 * Schedule + spare-set quantity for one cartridge already in the dataset.
 * Intervals come from care-calc, which only counts sentences those manufacturers printed.
 * A brand with no published month count does not inherit another brand's numbers.
 */
import { compute } from './care-calc.mjs';
import { classify, indexParts } from './xref.mjs';

const USES = ['regular', 'heavy', 'light'];

/** Editorial end of the 2026 gift note. December 24 is also UPS’s delivery day in its year-end schedule. */
export const HOLIDAY_THROUGH = '2026-12-24';

export function holidayOpen(today, end = HOLIDAY_THROUGH) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(today || '')) return true;
  return today <= end;
}

function tokens(row) {
  return [row.oem, row.oemAll, row.unicel, row.pleatco, row.filbur]
    .flatMap((raw) => String(raw || '').split(/[;/]/).map((s) => s.trim().toUpperCase()))
    .filter(Boolean);
}

function hasToken(row, part) {
  return tokens(row).includes(part.toUpperCase());
}

function trixWarning(row) {
  if (!/tri-?x/i.test(row.notes || '')) return '';
  return 'Notes on this row say a spa that requires TRI-X must use a TRI-X filter, not this pleated cartridge. Hot Spring’s article gives TRI-X 4–6 years. That interval is not counted for this part number.';
}

function housingNote(row) {
  if (row.brandSlug === 'hot-spring' && hasToken(row, '71825')) {
    return 'Leisure Time’s listing for Hot Spring OEM 71825 says many of those models take three of these cartridges. That is a housing count, not a replacement interval. The spare-set line uses the number you entered.';
  }
  if (row.brandSlug === 'master-spas' && row.modelSlug === 'c-8341') {
    return 'Unicel’s 2026 Replacement Guide says Eco-Pur systems from 2006 on use two C-8341 cartridges, and a separate inner element is used with them. That is a housing count, not a replacement interval. This reorder is for C-8341 only. The spare-set line uses the number you entered.';
  }
  return '';
}

function sundanceParagraphs(row) {
  const named = 'Sundance’s 2024 680 Series manual says 12 months for the pleated MicroClean Mini filter and 4 months for the insert. The 2024 780 Series manual says every 3 months, or earlier, for the small disposable MicroClean cartridge. Those are different pieces.';
  const tail = 'None of those dates is counted for this row. Jacuzzi’s and Hot Spring’s intervals are in the table above and are not applied either. CDC says to replace cartridges according to the manufacturer. The blocks below are Unicel and Pleatco only. Unicel does not print a replacement date.';
  if (row.modelSlug === 'c-8380' || hasToken(row, '6540-501')) {
    return `${named} This row is OEM 6540-501 (Unicel C-8380). Sundance Norway’s May 2026 model table lists 6540-501 as the pleated lower of the 780 two-part MicroClean and 6540-502 as the disposable upper. The 3-month line belongs to that disposable upper, so it is not counted here. ${tail}`;
  }
  return `${named} This row is not one of those named pieces. ${tail}`;
}

/** Which cited profile, if any, may be counted for this row. */
export function guidanceFor(row) {
  const brand = row.brand || 'This brand';
  const housing = housingNote(row);
  if (row.brandSlug === 'jacuzzi') {
    return {
      profileIds: ['jacuzzi-pleated'],
      paragraphs: ['Jacuzzi’s filter page is the schedule counted below. It says to replace pleated cartridges every 12–24 months, and it prints different cleaning gaps for a regularly used family tub, heavy use, and light use. Heavy use does not change the replacement range. Hot Spring and Sundance publish other intervals for other products. Those are in the table above. They are not applied to this Jacuzzi cartridge.'],
      housing,
    };
  }
  if (row.brandSlug === 'hot-spring') {
    return {
      profileIds: ['hs-polyester'],
      paragraphs: ['Hot Spring’s filter article says a polyester cartridge is replaced every 2–3 years, and a TRI-X cartridge every 4–6 years. Its maintenance page says every three years and does not name TRI-X. This row is a pleated catalog cartridge, so the dates below are the polyester sentences: the article’s 2–3 years, with three years also being the maintenance page. The TRI-X interval is not counted for this part. If the spa uses TRI-X, this is the wrong reorder.'],
      housing,
    };
  }
  const paragraphs = row.brandSlug === 'sundance'
    ? [sundanceParagraphs(row)]
    : [`${brand} does not have a replacement month count in the sources on this page. The table above lists the intervals Jacuzzi, Hot Spring and Sundance publish. They do not match, and they are not copied onto this cartridge. CDC’s Legionella module says to replace cartridges according to the manufacturer. The blocks below are Unicel and Pleatco only. Unicel does not print a replacement date.`];
  const warning = row.brandSlug === 'hot-spring' ? '' : trixWarning(row);
  if (warning) paragraphs.push(warning);
  return { profileIds: ['no-calendar'], paragraphs, housing };
}

export function parseCount(raw) {
  if (raw === '' || raw == null) return { empty: true };
  const s = String(raw).trim();
  if (!/^\d+$/.test(s)) return { error: 'Enter a whole number from 1 to 12.' };
  const n = Number(s);
  if (n < 1 || n > 12) return { error: 'Enter a whole number from 1 to 12. That is the count you removed, not a number this page invents.' };
  return { count: n };
}

function spareText(n) {
  const piece = n === 1 ? '1 of this cartridge' : `${n} of this cartridge`;
  return `You entered ${n}. A spare set is ${piece}, matching the count in the spa. Unicel, Pleatco and Jacuzzi say to keep a second set so one can be cleaned while the other is installed. The buy link opens one listing or one search. It does not set the quantity and it does not show a price. Set the quantity on the retailer page.`;
}

const SPARE_EMPTY = 'Enter how many of this cartridge are in the spa (a whole number from 1 to 12). A spare set is that same count again. This page does not guess how many the housing holds.';

function guidanceOf(row) {
  if (row.guidance?.profileIds?.length) return row.guidance;
  return guidanceFor(row);
}

/** Turn one dataset row plus the form fields into schedule blocks. Does not invent a price or a quantity. */
export function plan(row, input = {}) {
  if (!row) return { error: 'Choose a cartridge from this dataset.' };
  const use = input.use || '';
  if (!USES.includes(use)) return { error: 'Choose a use level.' };
  const count = parseCount(input.count);
  if (count.error) return { error: count.error };
  const guidance = guidanceOf(row);
  const blocks = [{ title: 'Which published guidance applies', paragraphs: guidance.paragraphs, dates: [] }];
  if (guidance.housing) blocks.push({ title: 'How many this housing is cited as holding', paragraphs: [guidance.housing], dates: [] });
  let form;
  for (const profileId of guidance.profileIds) {
    const out = compute({
      profileId,
      use,
      install: input.install || '',
      rinse: input.rinse || '',
      today: input.today || '',
    });
    if (out.error) return out;
    blocks.push(...out.blocks);
    form = out.form;
  }
  blocks.push({
    title: 'Spare set',
    paragraphs: [count.empty ? SPARE_EMPTY : spareText(count.count)],
    dates: [],
  });
  if (form) {
    const model = `${row.brand || ''} ${row.model || ''}`.replace(/\s+/g, ' ').trim().slice(0, 160);
    form = { ...form, model: model || form.model };
  }
  return { blocks, form, count: count.count || 0, profileIds: guidance.profileIds };
}

/** Part number wins when the part field is not empty. Otherwise brand + cartridge key. */
export function lookup(rows, query = {}) {
  const part = String(query.part || '').trim();
  if (part) {
    const result = classify(rows, part);
    if (result.kind === 'match' && result.exact.length === 1 && result.token.length === 0) return { row: result.exact[0] };
    if (result.kind === 'match') {
      const choices = [...result.exact, ...result.token];
      return {
        choices,
        message: choices.length === 1
          ? 'That string sits inside a longer part number. Confirm this cartridge. This page will not pick it for you.'
          : 'That number is on more than one cartridge. Pick the row that matches the spa. A shared number is not always one cartridge.',
      };
    }
    if (result.kind === 'partial') {
      return {
        choices: result.partial,
        message: 'No exact part number matched. These rows contain that string. Pick one, or try the full number. This page will not guess.',
      };
    }
    return { error: 'That part number is not in this dataset. This page does not invent a match.' };
  }
  const key = `${query.brandSlug || ''}/${query.modelSlug || ''}`;
  const row = rows.find((r) => r.key === key);
  if (!row) return { error: 'Choose a brand and a cartridge, or type a part number that is already in this dataset.' };
  return { row };
}

/** Fields the part matcher needs. Call this when building the page catalog. */
export function indexRow(row) {
  const indexed = indexParts([row.oem, row.oemAll, row.unicel, row.pleatco, row.filbur]);
  return { wholes: indexed.wholes, tokens: indexed.tokens };
}
