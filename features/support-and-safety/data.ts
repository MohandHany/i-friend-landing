import type { ComponentType } from "react";
import SmileOutlineIcon from "@/components/icons/smile-outline-icon";
import CrescentMoonOutlineIcon from "@/components/icons/crescent-moon-outline-icon";
import SecurityOutlineIcon2 from "@/components/icons/security-outline-icon-2";
import FocusOutlineIcon from "@/components/icons/focus-outline-icon";
import GameOutlineIcon from "@/components/icons/game-outline-icon";
import OnlineOutlineIcon from "@/components/icons/online-outline-icon";

export type SafetyFeature = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export const safetyFeatures: SafetyFeature[] = [
  {
    id: "smart-emotional",
    icon: SmileOutlineIcon,
    title: "Smart Emotional Support",
    description:
      "iFriend detects negative patterns and helps your child handle stress, bullying, and online pressure.",
  },
  {
    id: "healthy-routine",
    icon: CrescentMoonOutlineIcon,
    title: "Healthy Daily Routine",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
  },
  {
    id: "privacy-safety",
    icon: SecurityOutlineIcon2,
    title: "Privacy & Safety First",
    description:
      "Teaches kids how to protect their personal information and avoid unsafe online interactions.",
  },
  {
    id: "focus-learning",
    icon: FocusOutlineIcon,
    title: "Focus & Learning Mode",
    description:
      "Helps children stay focused during study time and reduce distractions automatically.",
  },
  {
    id: "balanced-gaming",
    icon: GameOutlineIcon,
    title: "Balanced Gaming",
    description:
      "Keeps gaming fun and healthy with smart limits instead of strict blocks.",
  },
  {
    id: "online-offline",
    icon: OnlineOutlineIcon,
    title: "Online & Offline Harmony",
    description:
      "Supports a healthy balance between digital life and real-world activities.",
  },
];
