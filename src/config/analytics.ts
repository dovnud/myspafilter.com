/**
 * GA4 measurement ID for myspafilter.com only.
 * Empty means the Google tag is not loaded. The signup still queues `reminder_signup`
 * on `dataLayer` with `part_id` only, and calls `gtag` when a tag is already on the page.
 * Paste this site's G- ID here. Do not reuse another site's stream.
 * `PUBLIC_GA_MEASUREMENT_ID` overrides this at build time when it is set.
 */
const fromEnv = String(import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '').trim();
export const gaMeasurementId = fromEnv || '';

export const GA_ID_RE = /^G-[A-Z0-9]+$/;
