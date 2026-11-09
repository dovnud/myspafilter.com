/**
 * GA4 event for a stored 12-month replacement signup.
 * The payload is the part id only. Never pass an email, a page query, or any other field.
 */
export function reminderEvent(partId) {
  const id = String(partId ?? '').trim();
  if (!id || id.length > 120 || id.includes('@') || /[\s<>]/.test(id)) return null;
  return { name: 'reminder_signup', params: { part_id: id } };
}
