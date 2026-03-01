import type { ComponentType } from "react";
import SmileOutlineIcon from "@/components/icons/smile-outline-icon";
import CrescentMoonOutlineIcon from "@/components/icons/crescent-moon-outline-icon";
import SecurityOutlineIcon2 from "@/components/icons/security-outline-icon-2";
import FocusOutlineIcon from "@/components/icons/focus-outline-icon";
import GameOutlineIcon from "@/components/icons/game-outline-icon";
import OnlineOutlineIcon from "@/components/icons/online-outline-icon";

export const safetyFeatureIds = [
  "smart-emotional",
  "healthy-routine",
  "privacy-safety",
  "focus-learning",
  "balanced-gaming",
  "online-offline",
] as const;

export type SafetyFeatureId = (typeof safetyFeatureIds)[number];

const iconMap: Record<SafetyFeatureId, ComponentType<{ className?: string }>> = {
  "smart-emotional": SmileOutlineIcon,
  "healthy-routine": CrescentMoonOutlineIcon,
  "privacy-safety": SecurityOutlineIcon2,
  "focus-learning": FocusOutlineIcon,
  "balanced-gaming": GameOutlineIcon,
  "online-offline": OnlineOutlineIcon,
};

export function getSafetyIcon(id: SafetyFeatureId): ComponentType<{ className?: string }> {
  return iconMap[id];
}
