import Image from "next/image";
import Link from "next/link";
import { homeRecentInstallationsContent } from "@/content/components/home/recentInstallations";
import type { CompletedJob } from "@/lib/types";

type RecentInstallationsContent = {
  eyebrow: string;
  title: string;
  description?: string;
  installations: { job: CompletedJob; title: string; href: string }[];
};

export function RecentInstallationsSection({
  content = homeRecentInstallationsContent,
  id,
}: { content?: RecentInstallationsContent; id?: string } = {}) {

  return (
    <section id={id} aria-labelledby={`${id ?? "recent-installations"}-heading`} className="bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-text)]">
            {content.eyebrow}
          </p>
          <h2 id={`${id ?? "recent-installations"}-heading`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          {content.description ? <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            {content.description}
          </p> : null}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.installations.map(({ job, title, href }) => (
            <Link
              key={`${href}-${job.location}`}
              href={href}
              className="group relative isolate block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              <Image
                src={job.image.src}
                alt={job.image.alt}
                fill
                sizes="(min-width: 1152px) 350px, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                style={{ objectPosition: job.image.objectPosition }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                  {job.location}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {title}
                </h3>
                <span className="mt-3 inline-block text-sm font-medium text-white/90">
                  View installations <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
