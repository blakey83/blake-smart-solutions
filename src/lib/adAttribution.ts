import { normaliseGclid } from "./adClickId";

export const GCLID_STORAGE_KEY = "bss.googleAdsClick";
export const GCLID_RETENTION_MS = 90 * 24 * 60 * 60 * 1000;
type Click = { gclid: string; capturedAt: number };
let memoryClick: Click | undefined;

// The site currently loads advertising tags without a CMP/consent gate.
// If a CMP is introduced, gate BOTH this capture/read and the Google tags,
// and clear this record when advertising consent is withdrawn.
export function getEnquiryGclid(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const now = Date.now();
  const params = new URLSearchParams(window.location.search);
  const incoming = normaliseGclid(params.get("gclid"));
  // Google's gclsrc distinguishes Google Ads clicks from other click sources.
  const source = params.get("gclsrc");
  const validSource = !source || source.includes("aw");

  try {
    const stored = window.localStorage.getItem(GCLID_STORAGE_KEY);
    memoryClick = stored ? JSON.parse(stored) as Click : undefined;
  } catch {
    // Storage may be disabled, full, or contain malformed data.
  }

  if (
    memoryClick &&
    (!normaliseGclid(memoryClick.gclid) ||
      !Number.isFinite(memoryClick.capturedAt) ||
      memoryClick.capturedAt > now ||
      now - memoryClick.capturedAt >= GCLID_RETENTION_MS)
  ) {
    memoryClick = undefined;
    try { window.localStorage.removeItem(GCLID_STORAGE_KEY); } catch { /* Optional storage. */ }
  }

  // Re-reading the same landing URL must not extend the retention period.
  if (incoming && validSource && incoming !== memoryClick?.gclid) {
    memoryClick = { gclid: incoming, capturedAt: now };
    try {
      window.localStorage.setItem(GCLID_STORAGE_KEY, JSON.stringify(memoryClick));
    } catch { /* Keep attribution in memory when storage is unavailable. */ }
  }

  return memoryClick?.gclid;
}
