"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-12 sm:px-6 lg:px-8 lg:pt-8 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[var(--color-border)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[3/2]">
            <Image
              src="/images/daniel-bss-hero.png"
              alt="Blake Smart Solutions technician on site"
              fill
              priority
              className="object-cover object-[center_18%]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 0.35, ease: "easeOut" }}
          className="relative mx-auto -mt-8 max-w-5xl rounded-[28px] bg-[var(--color-accent)] p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:-mt-10 sm:p-8 lg:-mt-20 lg:px-10 lg:py-9"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Perth&apos;s technology specialists
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Practicle solutions for homes and business
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
            Blake Smart Solutions delivers clean, professional installations,
            clear advice, and reliable systems for security, Wi-Fi, Starlink,
            NBN smart wiring, and TV reception.
          </p>

          <div className="mt-5 grid gap-2 text-sm text-white/90 sm:grid-cols-3">
            <p>✔ Perth-based local service</p>
            <p>✔ Fully insured &amp; qualified</p>
            <p>✔ ABN 66 695 399 761</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="tel:0477948079"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-white/95"
            >
              Call 0477 948 079
            </Link>

            <Link
              href="/#final-cta"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
