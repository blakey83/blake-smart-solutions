// Shared validation: attribution must never prevent an otherwise valid enquiry.
export function normaliseGclid(value: unknown): string | undefined {
  return typeof value === "string" && /^[A-Za-z0-9_-]{1,512}$/.test(value)
    ? value
    : undefined;
}
