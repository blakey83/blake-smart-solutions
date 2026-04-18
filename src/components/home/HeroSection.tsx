"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { openEnquiryModal } from "@/lib/enquiryModal";
import { heroSectionContent } from "@/content/home/heroSection";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-6 sm :px-6 lg:px-8 lg:pt-8 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[var(--color-border)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="relative aspect-[4/3] w-full lg:aspect-[16/9]">
            <Image
              src={heroSectionContent.imageSrc}
              alt={heroSectionContent.imageAlt}
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
            {heroSectionContent.eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {heroSectionContent.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
            {heroSectionContent.description}
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="tel:0477948079"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-white/95"
            >
              {heroSectionContent.callCTA}
            </Link>

            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {heroSectionContent.quoteCTA}
            </button>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="animate-bounce text-white text-sm font-medium underline">
              <a
                href="#problems"
                className="text-white/80 text-sm underline hover:text-white"
              >
                ↓ See how we can help
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
