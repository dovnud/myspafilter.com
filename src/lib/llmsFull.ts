import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { guides, SRC } from './guides';
import { pages as fitPages } from './fitment';

const SITE = 'https://myspafilter.com';

const md = (html: string) => String(html || '')
  .replace(/<h2[^>]*>/gi, '\n\n## ')
  .replace(/<h3[^>]*>/gi, '\n\n### ')
  .replace(/<\/h[23]>/gi, '\n')
  .replace(/<li[^>]*>/gi, '\n- ')
  .replace(/<\/(p|tr|div|ul|ol|table|section)>/gi, '\n')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/[ \t]+\n/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

/** Markdown corpus of the guides and fitment pages, written to public/llms-full.txt before each build. */
export function writeLlmsFull() {
  const lines: string[] = [
    '# MySpaFilter full text',
    '',
    '> Independent hot tub and spa filter cross-reference. The text below is the guide and fitment copy published on https://myspafilter.com/. Cartridge rows that are not confirmed in two sources are marked unverified. Retailer links are affiliate links.',
    '',
    '## Key pages',
    `- [Home](${SITE}/)`,
    `- [Size lookup](${SITE}/size/)`,
    `- [Measuring guide](${SITE}/guide/)`,
    `- [Guides](${SITE}/guides/)`,
    `- [Supplies](${SITE}/supplies/)`,
    `- [Dataset](${SITE}/data/)`,
    `- [About](${SITE}/about/)`,
    `- [Affiliate disclosure](${SITE}/affiliate-disclosure/)`,
    '',
    '## Guides',
  ];
  for (const g of guides) {
    const srcs = (g.src || []).map((k) => SRC[k] ? `- ${SRC[k].t}: ${SRC[k].u}` : '').filter(Boolean).join('\n');
    lines.push('', `## ${g.title}`, '', `URL: ${SITE}/guides/${g.slug}/`, g.reviewed ? `Last updated: ${g.reviewed}` : '', '', g.desc || '', '', md(g.answer), '', md(g.body), '', srcs ? `### Sources\n${srcs}` : '');
  }
  lines.push('', '## Model-year fitment');
  for (const p of fitPages) {
    lines.push('', `## ${p.h1}`, '', `URL: ${SITE}/fitment/${p.slug}/`, p.date ? `Last updated: ${p.date}` : '', '', p.desc || '', '', md(p.answer), '', md(p.extraHtml || ''));
  }
  const out = join(process.cwd(), 'public/llms-full.txt');
  writeFileSync(out, lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n');
  console.log(`llms-full: ${guides.length} guides, ${fitPages.length} fitment pages -> ${out}`);
}
