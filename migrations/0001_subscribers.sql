-- Stored requests only. No mailing list and no send log.
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  page_url TEXT NOT NULL,
  purpose TEXT NOT NULL,
  extra TEXT NOT NULL,
  consent_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  UNIQUE (email, purpose)
);

CREATE INDEX IF NOT EXISTS idx_subscribers_ip_created ON subscribers (ip_hash, created_at);

CREATE TABLE IF NOT EXISTS submit_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_attempts_ip_created ON submit_attempts (ip_hash, created_at);
