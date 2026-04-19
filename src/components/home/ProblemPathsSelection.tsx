import Image from "next/image";
import Link from "next/link";
import { problemPaths } from "@/content/products";
import { SectionHeading } from "../ui/SectionHeading";

export function ProblemPathsSelection() {
  return (
    <section id="problems" className="bg-[var(--color-page)]">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Common Problems"
          title="Situations we see often"
          description="Some common issues we can help with."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {problemPaths.map((problem) => (
            <Link
              key={problem.href}
              href={problem.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.09)]"
            >
              {problem.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-[var(--color-ink)]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                  {problem.description}
                </p>
                <p className="mt-4 text-base font-medium text-[var(--color-accent)]">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
