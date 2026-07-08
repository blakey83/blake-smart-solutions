import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Blake Smart Solutions",
  description: "The requested page could not be found.",
  alternates: {},
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] bg-[var(--color-page)] px-5 py-20 text-[var(--color-ink)]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          The page may have moved or may no longer be available.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
