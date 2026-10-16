"use client";

import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { openEnquiryModal } from "@/lib/enquiryModal";
import type { CtaButton } from "@/components/solutions/types";

type SolutionCtaProps = {
  button: CtaButton;
  variant?: "primary" | "secondary";
  className?: string;
};

export function SolutionCta({
  button,
  variant = "primary",
  className = "",
}: SolutionCtaProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition";
  const variantClasses =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border-strong)] bg-white !text-black hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (button.action === "enquiry") {
    return (
      <button
        type="button"
        onClick={() =>
          openEnquiryModal(button.enquiryProductName, {
            defaultMessage: button.enquiryDefaultMessage,
          })
        }
        className={classes}
      >
        {button.label}
      </button>
    );
  }

  if (button.href?.startsWith("tel:")) {
    return <PhoneLink href={button.href} className={classes}>{button.label}</PhoneLink>;
  }

  return (
    <Link
      href={button.href ?? "/"}
      className={classes}
    >
      {button.label}
    </Link>
  );
}

