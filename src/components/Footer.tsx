import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="bg-[#05070B] text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/BSS_logo_long2_nb.png"
              alt={footerContent.logoAlt}
              width={220}
              height={60}
              className="h-auto w-[180px]"
            />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              {footerContent.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              {footerContent.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              {footerContent.serviceLinksTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerContent.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              {footerContent.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={footerContent.phoneHref}
                  className="transition hover:text-white"
                >
                  {footerContent.phone}
                </a>
              </li>
              <li>
                <a
                  href={footerContent.emailHref}
                  className="transition hover:text-white"
                >
                  {footerContent.email}
                </a>
              </li>
              <li>{footerContent.location}</li>
              <li>{footerContent.abn}</li>
              <li>{footerContent.securityLicence}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
