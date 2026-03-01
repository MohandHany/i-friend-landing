import type { ComponentType } from "react";
import GooglePlayOutlineIcon from "@/components/icons/google-play-outline-icon";
import UsersBoldIcon from "@/components/icons/users-bold-icon";
import LinkBoldIcon from "@/components/icons/link-bold-icon";
import PhoneBoldIcon from "@/components/icons/phone-bold-icon";

export const stepIds = [
  "download",
  "account-type",
  "link",
  "monitor",
] as const;

export type StepId = (typeof stepIds)[number];

const iconMap: Record<StepId, ComponentType<{ className?: string }>> = {
  "download": GooglePlayOutlineIcon,
  "account-type": UsersBoldIcon,
  "link": LinkBoldIcon,
  "monitor": PhoneBoldIcon,
};

export function getStepIcon(id: StepId): ComponentType<{ className?: string }> {
  return iconMap[id];
}
