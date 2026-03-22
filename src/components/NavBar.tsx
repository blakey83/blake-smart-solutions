"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { openEnquiryModal } from "@/lib/enquiryModal";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Specials", href: "/#specials" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#final-cta" },
];

const serviceLinks = [
  { label: "CCTV", href: "/cctv" },
  { label: "Wi-Fi", href: "/wifi-data" },
  { label: "Alarms", href: "/alarms" },
  { label: "Starlink", href: "/starlink" },
  { label: "Data Cabling", href: "/data-cabling" },
  { label: "Antennas", href: "/antennas" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-h-12 items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/BSS_logo_long2_nb.png"
              alt="Blake Smart Solutions"
              width={280}
              height={72}
              priority
              className="h-auto w-[240px] sm:w-[330px]"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
            >
              Request a Quote
            </button>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-white xl:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden border-t border-white/10 py-3 xl:block">
          <nav className="flex flex-wrap items-center justify-center gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-white/6 px-4 text-sm font-medium text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-white/10 py-4 xl:hidden"
          >
            <nav className="flex flex-col gap-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold text-white transition hover:bg-white/8"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Service Links
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-h-12 items-center rounded-2xl border border-white/10 bg-white/6 px-4 text-sm font-medium text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
