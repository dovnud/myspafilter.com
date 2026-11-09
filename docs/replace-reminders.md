# 12-month replacement requests

The signup on a filter match, a cross-reference result, a cartridge page, and a fitment page stores one row in the existing D1 table `subscribers`. It does not send email.

Apply `migrations/0002_replace_reminder.sql` so one address can keep a separate row per part. Until that migration is applied, the same address keeps one `replace_12mo` row and a later signup for a different part replaces it. The OEM, Unicel, Pleatco, Filbur, and month are still in `extra` either way. The existing interval reminder keeps working.

```sh
npx wrangler d1 migrations apply myspafilter-subscribers --remote
```

`purpose` is `replace_12mo`. `part_id` is the cartridge (`brand/model`) or, when a fitment row has an OEM number and no cartridge page, `fitment/<page>/<oem>`. `remind_month` is the calendar month 12 months after the request, `YYYY-MM`. After the migration, the same address can store a different part on another row. Submitting the same part again updates that row.

OEM, Unicel, Pleatco, and Filbur are in `extra`. The email is the `email` column. Analytics does not receive it.

```sql
SELECT email,
       part_id,
       remind_month,
       json_extract(extra, '$.oem') AS oem,
       json_extract(extra, '$.unicel') AS unicel,
       json_extract(extra, '$.pleatco') AS pleatco,
       json_extract(extra, '$.filbur') AS filbur,
       page_url,
       created_at
FROM subscribers
WHERE purpose = 'replace_12mo'
ORDER BY remind_month, email;
```

A stored request for November 2027:

```sql
SELECT email, part_id, oem, unicel, pleatco, filbur
FROM (
  SELECT email, part_id,
         json_extract(extra, '$.oem') AS oem,
         json_extract(extra, '$.unicel') AS unicel,
         json_extract(extra, '$.pleatco') AS pleatco,
         json_extract(extra, '$.filbur') AS filbur,
         remind_month
  FROM subscribers
  WHERE purpose = 'replace_12mo'
)
WHERE remind_month = '2027-11';
```

Google Analytics 4, when `gaMeasurementId` in `src/config/analytics.ts` is this site's `G-` ID, receives `reminder_signup` with `part_id` only.
