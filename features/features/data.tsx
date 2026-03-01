import type { ReactNode } from "react";
import LocationIcon from "@/components/icons/location-bold-icon";
import WarningIcon from "@/components/icons/warning-bold-icon";
import AndriodIcon from "@/components/icons/andriod-bold-icon";
import ToggleIcon from "@/components/icons/toggle-outline-icon";

export const featureIds = [
  "ai-ifriend",
  "ai-reports",
  "bluer",
  "pediatric-emergency",
] as const;

export type FeatureId = (typeof featureIds)[number];

const iconMap: Record<FeatureId, ReactNode> = {
  "ai-ifriend": <AndriodIcon className="w-9! h-9! text-white" />,
  "ai-reports": <ToggleIcon className="w-9! h-9! text-white" />,
  "bluer": <LocationIcon className="w-9! h-9! text-white" />,
  "pediatric-emergency": <WarningIcon className="w-9! h-9! text-white" />,
};

export function getFeatureIcon(id: FeatureId): ReactNode {
  return iconMap[id];
}
