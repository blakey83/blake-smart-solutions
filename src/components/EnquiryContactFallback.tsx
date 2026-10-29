import { PhoneLink } from "@/components/PhoneLink";
import { BUSINESS_EMAIL, BUSINESS_PHONE } from "@/lib/jsonLd";

export function EnquiryContactFallback() {
  return (
    <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
      If the form doesn’t open, call{" "}
      <PhoneLink href={`tel:${BUSINESS_PHONE}`} className="underline">
        0477 948 079
      </PhoneLink>{" "}
      or email{" "}
      <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
        {BUSINESS_EMAIL}
      </a>.
    </p>
  );
}
