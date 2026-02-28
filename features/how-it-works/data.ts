import type { ComponentType } from "react";
import GooglePlayOutlineIcon from "@/components/icons/google-play-outline-icon";
import UsersBoldIcon from "@/components/icons/users-bold-icon";
import LinkBoldIcon from "@/components/icons/link-bold-icon";
import PhoneBoldIcon from "@/components/icons/phone-bold-icon";

export type Step = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    id: "download",
    icon: GooglePlayOutlineIcon,
    title: "Download App",
    description:
      "Download the app easily and get started in just a few simple steps.",
  },
  {
    id: "account-type",
    icon: UsersBoldIcon,
    title: "Child or Parent",
    description:
      "Choose the account type that fits you: Child or Parent, each with its own features.",
  },
  {
    id: "link",
    icon: LinkBoldIcon,
    title: "Link With Child",
    description:
      "Connect your account with your child's account to manage and monitor easily.",
  },
  {
    id: "monitor",
    icon: PhoneBoldIcon,
    title: "Monitor Phone Safely",
    description:
      "Monitor phone usage safely and help your child develop healthy digital habits.",
  },
];
