import type { SolutionDetailPage } from "./solutionDetailTypes";
import { wifiAccessPointInstallation } from "./wifi/wifiAccessPointInstallation";
import { internetToShedsWorkshops } from "./wifi/internetToShedsWorkshops";
import { outdoorWifiInstallation } from "./wifi/outdoorWifiInstallation";
import { businessWifiInstallation } from "./wifi/businessWifiInstallation";
import { dataCabling } from "./wifi/dataCabling";

export const wifiSolutionPages: SolutionDetailPage[] = [
  wifiAccessPointInstallation,
  internetToShedsWorkshops,
  outdoorWifiInstallation,
  businessWifiInstallation,
  dataCabling,
];

export const wifiSolutionPagesBySlug = Object.fromEntries(
  wifiSolutionPages.map((page) => [page.slug, page]),
) as Record<string, SolutionDetailPage>;
