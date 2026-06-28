import type { Metadata } from "next";
import { privacyPolicyContent } from "@/content/pages/privacyPolicy";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Privacy Policy | Blake Smart Solutions",
  description:
    "Privacy Policy for Blake Smart Solutions Pty Ltd, including how personal information is collected, used, shared, stored and protected.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Blake Smart Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {privacyPolicyContent.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-[var(--color-muted)]">
            Last updated: {privacyPolicyContent.lastUpdated}
          </p>
          <div className="mt-8 space-y-4 text-base leading-7 text-[var(--color-muted)]">
            {privacyPolicyContent.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-10">
            {privacyPolicyContent.sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-[var(--color-border)] pb-10 last:border-b-0 last:pb-0"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-[var(--color-muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.footerParagraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <h2 className="text-2xl font-semibold tracking-tight">
                {privacyPolicyContent.contact.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                {privacyPolicyContent.contact.intro}
              </p>
              <p className="mt-5 font-semibold">
                {privacyPolicyContent.contact.businessName}
              </p>
              <p className="mt-2 text-[var(--color-muted)]">
                Email:{" "}
                <a
                  href={privacyPolicyContent.contact.emailHref}
                  className="font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-strong)]"
                >
                  {privacyPolicyContent.contact.email}
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
