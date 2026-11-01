import { recentAjaxInstallationsContent } from "@/content/recent-installations/ajax";
import { recentSecurityCameraInstallationsContent } from "@/content/recent-installations/security-cameras";
import { recentStarlinkInstallationsContent } from "@/content/recent-installations/starlink";
import { recentWifiInstallationsContent } from "@/content/recent-installations/wifi";

export const homeRecentInstallationsContent = {
  eyebrow: "Recent installations",
  title: "See our work across Perth",
  description:
    "A few recent Starlink, Wi-Fi and security installations for local homes and businesses. Take a look at what we installed and where.",
  installations: [
    {
      job: recentStarlinkInstallationsContent.completedJobs[0],
      title: "Rural Starlink installation",
      href: "/recent-installations/starlink",
    },
    {
      job: recentWifiInstallationsContent.completedJobs[0],
      title: "Workshop & outdoor Wi-Fi",
      href: "/recent-installations/wifi",
    },
    {
      job: recentAjaxInstallationsContent.completedJobs[0],
      title: "Ajax home alarm installation",
      href: "/recent-installations/ajax",
    },
    {
      job: recentStarlinkInstallationsContent.completedJobs[2],
      title: "Starlink in the Perth Hills",
      href: "/recent-installations/starlink",
    },
    {
      job: recentWifiInstallationsContent.completedJobs[1],
      title: "Better Wi-Fi for a home office",
      href: "/recent-installations/wifi",
    },
    {
      job: recentSecurityCameraInstallationsContent.completedJobs[0],
      title: "Security cameras for a busy road",
      href: "/recent-installations/security-cameras",
    },
  ],
};
