import type { Metadata } from "next";
import { enquiryPageContent } from "@/content/page-contents/enquiryPage";
import { EnquiryPageClient } from "./EnquiryPageClient";

export const metadata: Metadata = {
  title: enquiryPageContent.metadata.title,
  description: enquiryPageContent.metadata.description,
  alternates: {
    canonical: enquiryPageContent.metadata.canonical,
  },
};

export default function EnquiryPage() {
  return (
    <section className="min-h-[60vh] bg-[var(--color-page)] px-5 py-20 text-[var(--color-ink)]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {enquiryPageContent.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {enquiryPageContent.title}
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {enquiryPageContent.intro}
        </p>
        <EnquiryPageClient />
      </div>
    </section>
  );
}
