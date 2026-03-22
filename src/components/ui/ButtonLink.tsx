"use client";

import { openEnquiryModal } from "@/lib/enquiryModal";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  if (children === "Request a Quote") {
    return (
      <button
        type="button"
        onClick={() => openEnquiryModal()}
        className={`${baseClasses} ${variantClasses}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
}
