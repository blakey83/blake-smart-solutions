import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { HeroEnquiryForm } from "@/components/HeroEnquiryForm";
import { heroSectionContent } from "@/content/components/home/heroSection";

export function HeroSection() {
  const { props: heroImage } = getImageProps({
    src: heroSectionContent.imageSrc,
    alt: heroSectionContent.imageAlt,
    fill: true,
    sizes: "100vw",
    quality: 60,
    loading: "eager",
    fetchPriority: "high",
    className: "absolute inset-0 -z-20 object-cover object-[58%_top] sm:object-center",
  });
  preload("/images/branding/home-hero-mobile.webp", {
    as: "image", fetchPriority: "high", media: "(max-width: 639px)",
  });
  preload(heroImage.src, {
    as: "image", imageSrcSet: heroImage.srcSet, imageSizes: heroImage.sizes,
    fetchPriority: "high", media: "(min-width: 640px)",
  });
  return (
    <section className="relative isolate flex min-h-[620px] overflow-hidden bg-[var(--color-ink)] text-white lg:min-h-[680px]">
      <picture>
        <source media="(max-width: 639px)" srcSet="/images/branding/home-hero-mobile.webp" />
        <img {...heroImage} alt={heroSectionContent.imageAlt} />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(31,41,55,0.80)_0%,rgba(31,41,55,0.66)_46%,rgba(31,41,55,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(31,41,55,0.92)_0%,rgba(31,41,55,0.78)_40%,rgba(13,160,245,0.18)_72%,rgba(31,41,55,0.38)_100%)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 pt-8 pb-8 sm:px-6 sm:pt-10 sm:pb-14 lg:px-8 lg:pt-12 lg:pb-20">
        <div
          className="flex w-full min-w-0 max-w-3xl flex-col text-left"
        >
            <div className="inline-flex max-w-full flex-col gap-1.5 rounded-2xl border border-[var(--color-accent)]/35 bg-[var(--color-ink)]/72 px-3.5 py-2.5 text-left shadow-[0_18px_44px_rgba(15,23,42,0.26)] backdrop-blur-sm sm:max-w-xl sm:gap-2 sm:px-4 sm:py-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                <span
                  className="text-sm font-semibold tracking-[0.12em] text-amber-300"
                  aria-label="Five star Google review"
                >
                  {heroSectionContent.review.rating}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                  {heroSectionContent.review.source}
                </span>
              </div>
              <p className="max-w-[21rem] text-sm leading-5 text-white/90 sm:max-w-none sm:text-base sm:leading-6">
                “{heroSectionContent.review.quote}”
              </p>
              <p className="text-sm font-semibold text-white/70">
                — {heroSectionContent.review.author}
              </p>
            </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              {heroSectionContent.eyebrow}
            </p>

            <h1 className="mt-3 max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-tight sm:mt-4 sm:text-5xl sm:leading-tight lg:text-5xl">
              {heroSectionContent.title}
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-6 text-white/85 sm:hidden">
              {heroSectionContent.mobileDescription}
            </p>
            <p className="mt-5 hidden max-w-2xl text-base leading-7 text-white/85 sm:block sm:text-lg">
              {heroSectionContent.description}
            </p>
          </div>

        </div>
        <HeroEnquiryForm defaultMessage="" serviceOptions={heroSectionContent.enquiryServices} />
      </div>
    </section>
  );
}
