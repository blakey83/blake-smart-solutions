"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navContent } from "@/content/components/siteContent";
import { trackPhoneClick } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="hidden min-h-12 items-center lg:flex"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/BSS_logo_long2_nb.png"
              alt={navContent.logoAlt}
              width={280}
              height={72}
              priority
              className="h-auto w-[240px] sm:w-[330px]"
            />
          </Link>

          <a
            href="tel:0477948079"
            onClick={trackPhoneClick}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xs font-semibold !text-black transition hover:bg-white/85 lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8.01 9.74a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />
            </svg>
            0477 948 079 for a Free Quote
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navContent.links.map((link) => (
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
              {navContent.quoteCta}
            </button>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-white xl:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">{navContent.mobileToggleLabel}</span>
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

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-white/10 py-4 xl:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navContent.links.map((link) => (
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
          </div>
        ) : null}
      </div>
    </header>
  );
}
