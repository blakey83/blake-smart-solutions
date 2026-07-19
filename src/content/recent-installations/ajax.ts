import type { WorkShowcaseContent } from "@/lib/types";

export const recentAjaxInstallationsContent: WorkShowcaseContent = {
  eyebrow: "Recent Ajax Installations",
  title: "Real Ajax security installations across Perth",
  description:
    "See recent Ajax alarm work completed by Blake Smart Solutions, with each system professionally installed to suit the property and the way it is used.",

  completedJobs: [
    {
      title: "Ajax alarm installation for family home protection",
      location: "Kelmscott, WA",
      description:
        "A Kelmscott family wanted a reliable alarm system that would help protect the home and provide greater peace of mind. We installed and configured an Ajax system with internal detection and a prominent StreetSiren to provide a strong audible and visual warning if the alarm is triggered. The system was set up for simple everyday use, with mobile alerts and app control allowing the family to monitor the property whether they are at home or away.",
      image: {
        src: "/images/work-photos/Ajax/kelmscott-street-siren.webp",
        alt: "Daniel from Blake Smart Solutions installing an Ajax StreetSiren outside a Kelmscott home",
      },
    },
    {
      title: "Ajax security for a couple who travel for work",
      location: "Innaloo, WA",
      description:
        "This Innaloo couple regularly travel for work and wanted a practical way to stay connected to their home while they were away. We installed an Ajax alarm system with carefully positioned MotionProtect detectors to monitor the main internal areas without making the equipment intrusive. The system provides instant mobile notifications and remote app control, giving them a clear view of the alarm status and greater confidence when the property is unattended.",
      image: {
        src: "/images/work-photos/Ajax/innaloo-motionprotect.webp",
        alt: "White Ajax MotionProtect sensor installed in the corner of a room in Innaloo",
      },
    },
  ],
};
