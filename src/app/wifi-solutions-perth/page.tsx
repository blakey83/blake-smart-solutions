import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { wifiSolutionContent } from "@/content/wifiSolutionContent";

export const metadata = {
  title: "WiFi Installation & Network Solutions Perth | Blake Smart Solutions",
  description:
    "Fix slow WiFi, dropouts and dead zones with professionally designed WiFi systems in Perth. Homes, businesses, workshops and large properties.",
};

export default function WifiSolutionsPerthPage() {
  return <SolutionPageTemplate {...wifiSolutionContent} />;
}
