"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { isStarlinkWorthItContent } from "@/content/articles/isStarlinkWorthIt";
import { trackStarlinkReferralClick } from "@/lib/analytics";

export function StarlinkReferralCta({
  position,
}: {
  position: "top" | "cost" | "bottom";
}) {
  const cta = isStarlinkWorthItContent.referralCtas[position];
  const compact = position === "cost";
  const titleId = `starlink-referral-${position}`;

  return (
    <aside
      aria-labelledby={titleId}
      className={
        compact
          ? "my-8 rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-6"
          : "my-8 rounded-[24px] border border-[var(--color-border)] border-t-4 border-t-[var(--color-accent)] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:p-8"
      }
    >
      <h2
        id={titleId}
        className={`font-semibold tracking-tight text-[var(--color-ink)] ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}
      >
        {cta.title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
        {cta.description}
      </p>
      <div className="mt-5">
        <ButtonLink
          href={isStarlinkWorthItContent.referralUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          onClick={() => trackStarlinkReferralClick(position)}
        >
          {cta.buttonLabel}
        </ButtonLink>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
        {cta.disclosure}
      </p>
    </aside>
  );
}
