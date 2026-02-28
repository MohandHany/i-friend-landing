import type { ReactNode } from "react";
import LocationIcon from "@/components/icons/location-bold-icon";
import WarningIcon from "@/components/icons/warning-bold-icon";
import AndriodIcon from "@/components/icons/andriod-bold-icon";
import ToggleIcon from "@/components/icons/toggle-outline-icon";

export type Feature = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  side: "left" | "right";
};

export const features: Feature[] = [
  {
    id: "ai-ifriend",
    icon: <AndriodIcon className="w-9! h-9! text-white" />,
    title: "Ai iFriend",
    description:
      "A smart assistant that interacts with the child at times set by the parent. It talks with the child, answers their questions, and provides safe, age-appropriate support.",
    side: "left",
  },
  {
    id: "ai-reports",
    icon: <ToggleIcon className="w-9! h-9! text-white" />,
    title: "Ai Reports",
    description:
      "Daily AI-powered reports that give parents clear insights into the child's activity and behavior throughout the day.",
    side: "left",
  },
  {
    id: "bluer",
    icon: <LocationIcon className="w-9! h-9! text-white" />,
    title: "Bluer",
    description:
      "A smart content protection feature that blocks inappropriate and 18+ content, ensuring a safe and child-friendly digital environment.",
    side: "right",
  },
  {
    id: "pediatric-emergency",
    icon: <WarningIcon className="w-9! h-9! text-white" />,
    title: "Pediatric Emergency",
    description:
      "An advanced safety feature that monitors the child's location and instantly notifies parents if the child leaves the predefined safe area.",
    side: "right",
  },
];
