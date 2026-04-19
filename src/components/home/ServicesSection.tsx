import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/products";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Practical technology services for Perth homes and small businesses."
          description="From CCTV and Wi-Fi to Starlink, data cabling, alarms and TV antennas, Blake Smart Solutions delivers tidy installs, clear advice, and systems that work properly day to day."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-soft)]">
                <Image
                  src={service.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)] sm:leading-7">
                {service.description}
              </p>

              <span className="mt-5 inline-flex min-h-12 items-center text-base font-semibold text-[var(--color-accent)] transition group-hover:text-[var(--color-accent-strong)]">
                View service
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
