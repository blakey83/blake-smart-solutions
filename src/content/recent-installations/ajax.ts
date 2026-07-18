import type { WorkShowcaseContent } from "@/lib/types";

export const recentAjaxInstallationsContent: WorkShowcaseContent = {
  eyebrow: "Recent Ajax Installations",
  title: "Real Ajax security installations across Perth",
  description:
    "See recent Ajax alarm work completed by Blake Smart Solutions, with each system professionally installed to suit the property and the way it is used.",

  completedJobs: [
    {
      title: "External Ajax StreetSiren installation",
      location: "Kelmscott, WA",
      description:
        "We installed an Ajax StreetSiren in a prominent position outside this Kelmscott home. The siren provides a strong audible and visual warning when the alarm is triggered, while the neat wireless installation keeps the exterior finish clean.",
      image: {
        src: "/images/work-photos/Ajax/kelmscott-street-siren.webp",
        alt: "Daniel from Blake Smart Solutions installing an Ajax StreetSiren outside a Kelmscott home",
      },
    },
    {
      title: "Indoor Ajax MotionProtect installation",
      location: "Innaloo, WA",
      description:
        "This Ajax MotionProtect was fitted high in the corner of the room to provide practical indoor motion detection. Careful device placement helps the system monitor the intended area while keeping the sensor discreet and out of the way.",
      image: {
        src: "/images/work-photos/Ajax/innaloo-motionprotect.webp",
        alt: "White Ajax MotionProtect sensor installed in the corner of a room in Innaloo",
      },
    },
  ],
};
