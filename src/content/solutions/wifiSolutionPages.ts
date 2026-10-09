import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { wifiAccessPointInstallation } from "./wifi/wifiAccessPointInstallation";
import { internetToShedsWorkshops } from "./wifi/internetToShedsWorkshops";
import { outdoorWifiInstallation } from "./wifi/outdoorWifiInstallation";
import { businessWifiInstallation } from "./wifi/businessWifiInstallation";
import { dataCabling } from "./wifi/dataCabling";
type WifiSolutionPage = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  enquiryName: string;
  image: {
    url: string;
    alt: string;
  };
  content: SolutionPageTemplateProps;
};
export const wifiSolutionPages: WifiSolutionPage[] = [
  {
    slug: "wifi-access-point-installation",
    metadata: {
      title: "Wi-Fi Access Point Installation Perth | Blake Smart Solutions",
      description: "Professional Wi-Fi access point installation in Perth for reliable whole-home and workplace coverage. Designed, cabled, configured and tested."
    },
    enquiryName: "Wi-Fi Access Point Installation",
    image: {
      url: "/images/solutions/wifi/attadale-access-points/wall-mounted-access-point.webp",
      alt: "Discreet wall-mounted Wi-Fi access point installed by Blake Smart Solutions"
    },
    content: wifiAccessPointInstallation,
  },
  {
    slug: "internet-to-sheds-workshops",
    metadata: {
      title: "Internet to Sheds & Workshops Perth | Wireless Bridge Installation",
      description: "Get reliable internet to a detached shed, workshop or granny flat in Perth with a professionally installed wireless bridge, access point or data link."
    },
    enquiryName: "Internet to Sheds & Workshops",
    image: {
      url: "/images/solutions/wifi/darlington/house-to-shed-link.webp",
      alt: "Outdoor wireless bridge mounted with protected cabling to connect a detached building"
    },
    content: internetToShedsWorkshops,
  },
  {
    slug: "outdoor-wifi-installation",
    metadata: {
      title: "Outdoor Wi-Fi Installation Perth | Patios, Pools & Yards",
      description: "Professional outdoor Wi-Fi installation in Perth for patios, pools, yards and outdoor work areas using correctly positioned, outdoor-rated access points."
    },
    enquiryName: "Outdoor Wi-Fi Installation",
    image: {
      url: "/images/solutions/wifi/darlington/roof-mounted-link.webp",
      alt: "Outdoor wireless bridge on a roof mount overlooking a leafy Darlington garden"
    },
    content: outdoorWifiInstallation,
  },
  {
    slug: "business-wifi-installation",
    metadata: {
      title: "Business Wi-Fi & Network Installation Perth | Blake Smart Solutions",
      description: "Business Wi-Fi and network installation in Perth. Site assessments, staff and guest networks, cabling and links between buildings, with local support."
    },
    enquiryName: "Business Wi-Fi & Network Assessment",
    image: {
      url: "/images/work_gallery/wifi_survey.jpeg",
      alt: "On-site Wi-Fi assessment"
    },
    content: businessWifiInstallation,
  },
  {
    slug: "data-cabling",
    metadata: {
      title: "Data Cabling Perth | Homes & Small Businesses",
      description: "Professional Cat6 data cabling for Perth homes and small businesses. Neat, tested network points for offices, TVs, access points, cameras and NBN equipment."
    },
    enquiryName: "Data Cabling",
    image: {
      url: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
      alt: "Neatly installed access point using a concealed data connection"
    },
    content: dataCabling,
  },
];
export const wifiSolutionPagesBySlug = Object.fromEntries(wifiSolutionPages.map((page) => [page.slug, page])) as Record<string, WifiSolutionPage>;
