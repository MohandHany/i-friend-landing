import type { ComponentType } from "react";
import GooglePlayOutlineIcon from "@/components/icons/google-play-outline-icon";
import MenuOutlineIcon from "@/components/icons/menu-outline-icon";
import SettingsOutlineIcon from "@/components/icons/security-outline-icon";
import ToggleOutlineIcon from "@/components/icons/toggle-outline-icon";

export const stepIds = [
  "open-google-play",
  "access-settings",
  "navigate-to-protect",
  "disable-protection",
] as const;

export type StepId = (typeof stepIds)[number];

const iconMap: Record<StepId, ComponentType<{ className?: string }>> = {
  "open-google-play": GooglePlayOutlineIcon,
  "access-settings": MenuOutlineIcon,
  "navigate-to-protect": SettingsOutlineIcon,
  "disable-protection": ToggleOutlineIcon,
};

export function getStepIcon(id: StepId): ComponentType<{ className?: string }> {
  return iconMap[id];
}
