import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Specials", href: "/#specials" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#final-cta" },
];

const serviceLinks = [
  { label: "CCTV & Security Cameras", href: "/#services" },
  { label: "Wi-Fi & Wireless", href: "/#services" },
  { label: "Starlink", href: "/#services" },
  { label: "Data Cabling", href: "/#services" },
  { label: "TV Antennas", href: "/#services" },
];

export function Footer() {
  return (
    <footer className="bg-[#05070B] text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/BSS_logo_long2_nb.png"
              alt="Blake Smart Solutions"
              width={220}
              height={60}
              className="h-auto w-[180px]"
            />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Practical technology solutions for Perth homes and small
              businesses, with a focus on security, connectivity, and tidy
              workmanship.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
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
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
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
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:0477948079"
                  className="transition hover:text-white"
                >
                  0477 948 079
                </a>
              </li>
              <li>Perth, Western Australia</li>
              <li>ABN 66 695 399 761</li>
              <li>SA 84208</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Blake Smart Solutions pty ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
