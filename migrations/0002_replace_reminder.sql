-- One stored 12-month replacement request per email and exact part.
-- The original UNIQUE (email, purpose) allowed only one reminder per address.
-- Rebuild so the same address can keep a separate row for each part_id.
-- part_id and remind_month are also inside extra. No send log and no message body.

CREATE TABLE subscribers_v2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  page_url TEXT NOT NULL,
  purpose TEXT NOT NULL,
  extra TEXT NOT NULL,
  consent_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  part_id TEXT NOT NULL DEFAULT '',
  remind_month TEXT NOT NULL DEFAULT '',
  UNIQUE (email, purpose, part_id)
);

INSERT INTO subscribers_v2 (email, page_url, purpose, extra, consent_text, created_at, ip_hash, part_id, remind_month)
SELECT email, page_url, purpose, extra, consent_text, created_at, ip_hash, '', '' FROM subscribers;

DROP TABLE subscribers;
ALTER TABLE subscribers_v2 RENAME TO subscribers;

CREATE INDEX IF NOT EXISTS idx_subscribers_ip_created ON subscribers (ip_hash, created_at);
CREATE INDEX IF NOT EXISTS idx_subscribers_remind_month ON subscribers (remind_month);

-- Export the captured 12-month requests. This does not send email.
-- wrangler d1 execute myspafilter-subscribers --remote --command "SELECT email, part_id, remind_month, json_extract(extra, '$.oem') AS oem, json_extract(extra, '$.unicel') AS unicel, json_extract(extra, '$.pleatco') AS pleatco, json_extract(extra, '$.filbur') AS filbur, page_url, created_at FROM subscribers WHERE purpose = 'replace_12mo' ORDER BY remind_month, email;"
