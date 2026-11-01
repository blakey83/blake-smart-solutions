import { enquiryProductContent } from "@/content/components/siteContent";

const PAGE_ENQUIRY_PRODUCT_NAMES = [
  {
    path: "/starlink-installation-perth",
    productName: "Starlink Installation",
  },
  {
    path: "/rural-starlink-installation-wa",
    productName: "Starlink Installation",
  },
  {
    path: "/security-cameras-perth",
    productName: "Security Cameras",
  },
  {
    path: "/ajax-security-perth",
    productName: "Ajax Alarm Systems",
  },
  {
    path: "/wifi-solutions-perth/data-cabling",
    productName: "Data Cabling",
  },
  {
    path: "/tv-antennas-perth",
    productName: "TV Antennas",
  },
  {
    path: "/wifi-solutions-perth",
    productName: enquiryProductContent.wifiSolutions,
  },
] as const;

export function getPageEnquiryProductName(pathname: string | null) {
  return PAGE_ENQUIRY_PRODUCT_NAMES.find(
    ({ path }) => pathname === path || pathname?.startsWith(`${path}/`),
  )?.productName;
}

