import { getImageProps } from "next/image";
import NavBarClient from "@/components/NavBarClient";
import { navContent } from "@/content/components/siteContent";
import { alarmsSolutionContent } from "@/content/solutions/alarmSolutionsContent";
import { cctvSolutionContent } from "@/content/solutions/cctvSolutionContent";
import { RuralStarlinkSolutionContent } from "@/content/solutions/ruralStarlink";
import { starlinkSolutionContent } from "@/content/solutions/starlink_product";
import { wifiSolutionContent } from "@/content/solutions/wifiSolutionContent";

const NAV_ENQUIRY_CTAS = [
  {
    path: "/wifi-solutions-perth",
    cta: wifiSolutionContent.primaryCta,
  },
  {
    path: "/security-cameras-perth",
    cta: cctvSolutionContent.primaryCta,
  },
  {
    path: "/ajax-security-perth",
    cta: alarmsSolutionContent.primaryCta,
  },
  {
    path: "/starlink-installation-perth",
    cta: starlinkSolutionContent.primaryCta,
  },
  {
    path: "/rural-starlink-installation-wa",
    cta: RuralStarlinkSolutionContent.primaryCta,
  },
] as const;

// Select CTA data on the server so the full service content stays out of the client bundle.
export default function NavBar() {
  const { props: logo } = getImageProps({
    src: "/BSS_logo_long2_nb.png",
    alt: navContent.logoAlt,
    width: 1427,
    height: 345,
    sizes: "330px",
  });

  return (
    <NavBarClient
      enquiryCtas={NAV_ENQUIRY_CTAS}
      logo={
        <picture>
          <source media="(min-width: 1024px)" srcSet={logo.srcSet} sizes={logo.sizes} />
          {/* The mobile fallback is inline: CSS hiding alone would still download the logo. */}
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            decoding="async"
            className="h-auto w-[330px]"
          />
        </picture>
      }
    />
  );
}
