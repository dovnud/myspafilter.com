/**
 * Date math for the replace/clean calculator.
 * Every interval below is a sentence from a cited manufacturer page.
 * Do not add a week, a month, or a "heavy use" shortcut that those pages do not print.
 */

export const FORM_INTERVALS = ['4 weeks', '8 weeks', '3 months', '6 months', '12 months', '24 months'];

export const profiles = [
  { id: 'jacuzzi-pleated', label: 'Jacuzzi pleated cartridge' },
  { id: 'hs-polyester', label: 'Hot Spring polyester cartridge' },
  { id: 'hs-trix', label: 'Hot Spring TRI-X cartridge' },
  { id: 'sd680-pleated', label: 'Sundance 680 pleated MicroClean Mini filter' },
  { id: 'sd680-insert', label: 'Sundance 680 MicroClean Mini insert' },
  { id: 'sd780-disposable', label: 'Sundance 780 small MicroClean cartridge' },
  { id: 'no-calendar', label: 'No maker calendar (Unicel, and Pleatco on cleaning)' },
];

export const comparison = [
  {
    sourceKey: 'jac',
    piece: 'Pleated cartridges',
    clean: 'Regular family use: rinse every 7 days, deep clean every 4–6 weeks. Heavy use (4–6 bathers several evenings a week, a rental or Airbnb amenity, or frequent sunscreen and cosmetics): consider a rinse every 2–3 days and a deep clean every 3–4 weeks. Light or seasonal use (winter-only, 1–2 people): rinsing every 2 weeks and a deep clean every 6–8 weeks may be sufficient.',
    replace: 'Every 12–24 months, or sooner if the fibers are torn, flattened, or heavily stained. One page gives that range. It does not print a shorter replacement calendar for heavy use.',
  },
  {
    sourceKey: 'hsBlog',
    piece: 'Polyester (“paper”) cartridge',
    clean: 'Rinse with a garden hose every month. Soak the filters every time you drain the tub. The article says the schedule varies with use, and the month it prints is still “every month.”',
    replace: 'Every 2–3 years, depending on usage and visible wear.',
  },
  {
    sourceKey: 'hsBlog',
    piece: 'TRI-X cartridge',
    clean: 'Same as the polyester row on that page: a monthly hose rinse, and a soak every time you drain.',
    replace: 'Every 4–6 years, depending on usage and visible wear.',
  },
  {
    sourceKey: 'hsMaint',
    piece: 'Filters (the page does not name TRI-X)',
    clean: 'A light clean each month: hose the pleats, and use a filter cleaner.',
    replace: 'Every three years, with genuine Watkins replacement filters.',
  },
  {
    sourceKey: 'sd680',
    piece: '680 Series pleated MicroClean Mini filter',
    clean: 'Clean the pleated filter monthly. The manual calls for a high-pressure hose nozzle on that outer filter.',
    replace: '12 months.',
  },
  {
    sourceKey: 'sd680',
    piece: '680 Series MicroClean Mini insert',
    clean: 'No chemicals, and a low-pressure rinse. Not a degreasing-soak schedule.',
    replace: 'Every 4 months.',
  },
  {
    sourceKey: 'sd780',
    piece: '780 Series small disposable MicroClean cartridge',
    clean: 'The monthly clean in the 680 and 780 manuals is for the pleated filter, a different piece. Sundance says not to use filter cleaners on the inner inserts.',
    replace: 'Every 3 months, or earlier.',
  },
  {
    sourceKey: 'unicel',
    piece: 'Spa cartridges',
    clean: 'Set a routine from how much the spa is used. No week or month count for spas. The 8 psi gauge mark on this page is for swimming pools, not a spa calendar.',
    replace: 'No defined end date. Replace when cleanings get closer together, flow stays low and differential pressure stays high, or the media tears or the center core collapses.',
  },
  {
    sourceKey: 'pleatcoWash',
    piece: 'What Pleatco says most spa makers recommend',
    clean: 'Monthly, every two weeks with heavy use, and after a party. Pleatco does not print a separate light-use gap.',
    replace: 'Not a replacement interval. This sheet is about cleaning.',
  },
  {
    sourceKey: 'cdcLeg',
    piece: 'Hot tubs, in CDC’s Legionella module',
    clean: 'Not a week-by-week home cleaning calendar.',
    replace: 'Replace cartridges according to the manufacturer. No month count of CDC’s own.',
  },
];

export function addDays(iso, days) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

export function addMonths(iso, months) {
  const [y, m, d] = iso.split('-').map(Number);
  const monthIndex = m - 1 + months;
  const last = new Date(Date.UTC(y, monthIndex + 1, 0)).getUTCDate();
  return new Date(Date.UTC(y, monthIndex, Math.min(d, last))).toISOString().slice(0, 10);
}

function validDate(iso) {
  if (!iso) return '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return '';
  if (iso < '1990-01-01') return '';
  return iso;
}

function pastLine(dates, today) {
  const isos = dates.map((d) => d.iso);
  if (!today || !isos.length || !isos.every((iso) => iso < today)) return '';
  return isos.length === 1
    ? ' That date is already before today. That is what the published interval does with the date you entered. It is not a claim that the cartridge failed on that day.'
    : ' Those dates are already before today. That is what the published interval does with the date you entered. It is not a claim that the cartridge failed on that day.';
}

function futureLine(iso, today) {
  if (iso && today && iso > today) return ' The date you entered is after today. The dates below are counted from it anyway.';
  return '';
}

function formInstall(iso, today) {
  if (!iso || !today) return '';
  if (iso > addDays(today, 1)) return '';
  return iso;
}

const STORED = ' Submitting stores the request and does not send email. It is not a newsletter and it does not sign you up for regular updates.';

function needInstall(sentence) {
  return `${sentence} Enter the date the cartridge was installed, or last replaced, to put that interval on a calendar.`;
}

function jacuzziClean(use, rinse, today) {
  const spec = {
    regular: {
      who: 'You selected regular use. Jacuzzi’s baseline for a regularly used family tub is a rinse every 7 days and a deep clean every 4–6 weeks.',
      rinse: [[7, 'Rinse, 7 days after the rinse date you entered']],
      deep: [[4, 'Deep clean, 4 weeks after the rinse date you entered'], [6, 'Deep clean, 6 weeks after the rinse date you entered']],
      range: ' The deep clean is a range, so both ends are shown. This page does not pick a week inside it.',
    },
    heavy: {
      who: 'You selected heavy use. Jacuzzi describes that as 4–6 bathers several evenings a week, a rental or Airbnb amenity, or frequent sunscreen and cosmetics, and it says to consider a rinse every 2–3 days and a deep clean every 3–4 weeks. “Consider” is Jacuzzi’s word. These are not a second, stricter rule this page invented.',
      rinse: [[2, 'Rinse, 2 days after the rinse date you entered'], [3, 'Rinse, 3 days after the rinse date you entered']],
      deep: [[3, 'Deep clean, 3 weeks after the rinse date you entered'], [4, 'Deep clean, 4 weeks after the rinse date you entered']],
      range: ' Both the rinse and the deep clean are ranges. Both ends are shown.',
    },
    light: {
      who: 'You selected light use. For winter-only soaking with 1–2 people, Jacuzzi says rinsing every 2 weeks and a deep clean every 6–8 weeks may be sufficient. “May be sufficient” is Jacuzzi’s hedge, so these dates are that suggestion, not a deadline.',
      rinse: [[14, 'Rinse, 2 weeks after the rinse date you entered']],
      deep: [[6, 'Deep clean, 6 weeks after the rinse date you entered'], [8, 'Deep clean, 8 weeks after the rinse date you entered']],
      range: ' The deep clean is a range. Both ends are shown.',
    },
  }[use];
  if (!rinse) {
    return { title: 'Cleaning', paragraphs: [`${spec.who} Enter the last rinse date to put those intervals on a calendar.`], dates: [] };
  }
  const dates = [
    ...spec.rinse.map(([days, label]) => ({ label, iso: addDays(rinse, days) })),
    ...spec.deep.map(([weeks, label]) => ({ label, iso: addDays(rinse, weeks * 7) })),
  ];
  return {
    title: 'Cleaning',
    paragraphs: [`${spec.who}${spec.range} Jacuzzi prints days and weeks, not a calendar date. The dates below are that count after the rinse date you entered.${futureLine(rinse, today)}${pastLine(dates, today)}`],
    dates,
  };
}

function monthClean(who, rinse, today, extra) {
  if (!rinse) return { title: 'Cleaning', paragraphs: [`${who} ${extra} Enter the last rinse date to put the monthly rinse on a calendar.`], dates: [] };
  const dates = [{ label: 'Rinse, one calendar month after the rinse date you entered', iso: addMonths(rinse, 1) }];
  return {
    title: 'Cleaning',
    paragraphs: [`${who} ${extra} The date below is one calendar month after the rinse date you entered, which is how “every month” reads on a calendar. It is not a day-count the source printed.${futureLine(rinse, today)}${pastLine(dates, today)}`],
    dates,
  };
}

function replacement(paragraph, install, today, points, form) {
  if (!install) {
    return {
      blocks: [{ title: 'Replacement', paragraphs: [needInstall(paragraph)], dates: [] }],
      form,
    };
  }
  const dates = points.map(([months, label]) => ({ label, iso: addMonths(install, months) }));
  return {
    blocks: [{
      title: 'Replacement',
      paragraphs: [`${paragraph}${futureLine(install, today)}${pastLine(dates, today)}`],
      dates,
    }],
    form,
  };
}

function build(id, use, install, rinse, today) {
  const model = profiles.find((p) => p.id === id).label;
  const baseForm = { model, interval: '', install: formInstall(install, today) };
  if (id === 'jacuzzi-pleated') {
    const rep = replacement(
      'Jacuzzi’s filter page says to replace pleated cartridges every 12–24 months, or sooner if the fibers are torn, flattened, or heavily stained. That is a range from one page. The dates below are the two ends. This page does not pick a day inside the range. Heavy use and light use change Jacuzzi’s cleaning intervals, not this replacement range. The “sooner if” line is a condition, not a shorter calendar this page can calculate.',
      install, today,
      [[12, '12 months after the install date you entered'], [24, '24 months after the install date you entered']],
      { ...baseForm, note: `Jacuzzi’s range is 12–24 months. The form can store 12 months or 24 months, the two ends of that range. It cannot store a month in between. Choose one only if you want the request stored at that end.${STORED}` },
    );
    return { blocks: [...rep.blocks, jacuzziClean(use, rinse, today)], form: rep.form };
  }
  if (id === 'hs-polyester') {
    const rep = replacement(
      'Hot Spring’s filter article says to replace a polyester cartridge every 2–3 years, depending on usage and visible wear. Its maintenance page says to replace filters every three years and does not give a separate polyester number. Those are different sentences. The three-year sentence sits at the end of the article’s 2–3 year range, so the dates below run from two years to three years. This page does not collapse them to one day, and it does not invent a shorter date for heavy use.',
      install, today,
      [[24, '2 years after the install date (the article’s early end)'], [36, '3 years after the install date (the article’s late end, and the maintenance page)']],
      { ...baseForm, note: `Hot Spring’s article starts at 2 years. 24 months is a choice the form can store, and it is only the short end of that range. Three years is not one of the stored choices. Leave the interval blank, or pick 24 months only if you want a check-in at that short end.${STORED}` },
    );
    const clean = monthClean(
      'Hot Spring’s filter article says to rinse a polyester cartridge with a garden hose every month and to soak the filters every time you drain the tub. The maintenance page says to do a light clean each month.',
      rinse, today,
      'Neither page prints a different month for heavy or light use. The use level you selected does not change the month. The soak is the next time you drain, which is not a date this page can calculate.',
    );
    return { blocks: [...rep.blocks, clean], form: rep.form };
  }
  if (id === 'hs-trix') {
    const rep = replacement(
      'Hot Spring’s filter article says to replace a TRI-X cartridge every 4–6 years, depending on usage and visible wear. Its maintenance page says to replace filters every three years and does not mention TRI-X. If both sentences are read as applying to this cartridge, the published figures run from three years to six years and the pages do not agree. Both are shown. This page does not average them and does not pick one.',
      install, today,
      [[36, '3 years after the install date (maintenance page; TRI-X is not named there)'], [48, '4 years after the install date (article’s early end for TRI-X)'], [72, '6 years after the install date (article’s late end for TRI-X)']],
      { ...baseForm, note: `None of the stored intervals is Hot Spring’s 4–6 year TRI-X range, and none is the maintenance page’s three years. The longest choice the form can store is 24 months, which is shorter than both. Pick it only if you want a check-in sooner than those pages. This page will not select it for you.${STORED}` },
    );
    const clean = monthClean(
      'Hot Spring’s filter article gives a TRI-X cartridge the same cleaning line as polyester: a monthly hose rinse, and a soak every time you drain.',
      rinse, today,
      'The maintenance page’s light clean is also monthly. Use level does not change that month, because Hot Spring does not print a second one. The drain soak is not a date this page can calculate.',
    );
    return { blocks: [...rep.blocks, clean], form: rep.form };
  }
  if (id === 'sd680-pleated') {
    const rep = replacement(
      'Sundance’s 2024 680 Series owner’s manual says to replace the pleated MicroClean Mini filter at 12 months. That is one interval, not a range.',
      install, today,
      [[12, '12 months after the install date you entered']],
      { ...baseForm, interval: '12 months', note: `The 680 Series manual’s figure for this pleated filter is 12 months, and 12 months is one of the choices this form can store.${STORED}` },
    );
    const clean = monthClean(
      'Sundance’s 2024 680 Series owner’s manual says to clean the pleated filter monthly. It calls for a high-pressure hose nozzle on that outer filter.',
      rinse, today,
      'Jacuzzi’s page says to avoid pressure washers. Those are different makers. Follow the manual for the spa you have. Use level does not change the month, because the 680 manual does not print a second one.',
    );
    return { blocks: [...rep.blocks, clean], form: rep.form };
  }
  if (id === 'sd680-insert') {
    const rep = replacement(
      'Sundance’s 2024 680 Series owner’s manual says to replace the MicroClean Mini insert every 4 months. That is one interval, not a range.',
      install, today,
      [[4, '4 months after the install date you entered']],
      { ...baseForm, note: `The 680 Series manual says 4 months for this insert. The form can store 3 months or 6 months, and neither is 4 months. This page will not pick one of them for you.${STORED}` },
    );
    return {
      blocks: [...rep.blocks, {
        title: 'Cleaning',
        paragraphs: ['No deep-clean date is calculated. The 680 Series manual says no chemicals and a low-pressure rinse for the insert. A degreasing soak is the wrong schedule for this piece. The use level does not change that, because the manual does not print a chemical interval to shorten or lengthen.'],
        dates: [],
      }],
      form: rep.form,
    };
  }
  if (id === 'sd780-disposable') {
    const rep = replacement(
      'Sundance’s 2024 780 Series owner’s manual says to replace the small disposable MicroClean cartridge every 3 months, or earlier. The date below is the 3-month end of that sentence. “Or earlier” means it is not a promise the cartridge lasts the full 3 months, and this page cannot calculate the earlier day.',
      install, today,
      [[3, '3 months after the install date (the long end of “every 3 months, or earlier”)']],
      { ...baseForm, interval: '3 months', note: `The 780 Series manual says every 3 months, or earlier. 3 months is a choice the form can store. “Or earlier” is not a second stored choice.${STORED}` },
    );
    return {
      blocks: [...rep.blocks, {
        title: 'Cleaning',
        paragraphs: ['No cleaning date is calculated for this disposable cartridge. The monthly clean in the 680 and 780 manuals is for the pleated filter, which is a different piece. Sundance says not to use filter cleaners on the inner inserts. The use level does not create a soak interval the manual does not print.'],
        dates: [],
      }],
      form: rep.form,
    };
  }
  const pleatco = (() => {
    const lead = 'Unicel and Pleatco do not say the same thing about cleaning. Unicel’s maintenance page tells spa owners to set a routine from how much the spa is used and does not print a week or month count for spas, so no Unicel cleaning date is calculated. The 8 psi mark on that page is for swimming-pool canister pressure, and it is not applied to a spa here. Pleatco’s FilterWash sheet says most spa makers recommend monthly, every two weeks with heavy use, and after a party.';
    if (use === 'light') {
      return { title: 'Cleaning', paragraphs: [`${lead} You selected light use. Pleatco does not print a separate light-use gap, so no Pleatco date is calculated for it. A party is not a date this page can calculate. Jacuzzi does print a longer light-use gap; it is in the table above and it is not applied to this profile.`], dates: [] };
    }
    if (!rinse) {
      const which = use === 'heavy' ? 'every two weeks' : 'monthly';
      return { title: 'Cleaning', paragraphs: [`${lead} You selected ${use} use, which Pleatco’s sheet reads as ${which}. Enter the last rinse date to put that Pleatco line on a calendar. It is not averaged with Unicel.`], dates: [] };
    }
    const dates = use === 'heavy'
      ? [{ label: 'Pleatco heavy-use line, 2 weeks after the rinse date you entered', iso: addDays(rinse, 14) }]
      : [{ label: 'Pleatco’s general monthly line, one calendar month after the rinse date you entered', iso: addMonths(rinse, 1) }];
    const which = use === 'heavy'
      ? 'You selected heavy use. Pleatco’s sheet says every two weeks with heavy use.'
      : 'You selected regular use. Pleatco’s general line is monthly. It does not call that line “regular use,” and it does not print a separate light-use number.';
    return {
      title: 'Cleaning',
      paragraphs: [`${lead} ${which} The date below is only Pleatco’s line. It is not averaged with Unicel. A party is not a date this page can calculate.${futureLine(rinse, today)}${pastLine(dates, today)}`],
      dates,
    };
  })();
  return {
    blocks: [
      {
        title: 'Replacement',
        paragraphs: ['Unicel’s maintenance page says a cartridge element has no defined end date, because it has no moving parts to fail on a schedule. Replace it when the time between cleanings keeps getting shorter, when water flow stays low and differential pressure stays high, or when the media tears or the center core collapses. No replacement date is calculated. Pleatco’s FilterWash sheet is not a replacement interval. CDC’s Legionella module says to replace cartridges according to the manufacturer and does not add a month of its own.'],
        dates: [],
      },
      pleatco,
    ],
    form: {
      ...baseForm,
      note: `Unicel does not print a month count to store. The choices in the form are not Unicel intervals. Leave the interval blank unless you want a check-in on one of those stored choices for your own reason.${STORED}`,
    },
  };
}

export function compute(input) {
  const id = input?.profileId;
  const use = input?.use || 'regular';
  if (!profiles.some((p) => p.id === id)) return { error: 'Choose the guidance that matches the cartridge in the spa.' };
  if (!['regular', 'heavy', 'light'].includes(use)) return { error: 'Choose a use level.' };
  const install = input.install ? validDate(input.install) : '';
  const rinse = input.rinse ? validDate(input.rinse) : '';
  if (input.install && !install) return { error: 'The install date is not a real calendar date, or it is before 1990.' };
  if (input.rinse && !rinse) return { error: 'The last rinse date is not a real calendar date, or it is before 1990.' };
  return build(id, use, install, rinse, validDate(input.today) || '');
}
