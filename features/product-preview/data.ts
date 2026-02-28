import type { ComponentType } from "react";
import SecurityIcon from "@/components/icons/security-outline-icon";
import StopWatchIcon from "@/components/icons/stop-watch-outline-icon";
import CallIcon from "@/components/icons/call-outline-icon";
import LocationOutlineIcon from "@/components/icons/location-outline-icon";

export type ProductFeature = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const productFeatures: ProductFeature[] = [
  {
    id: "safe-content",
    icon: SecurityIcon,
    title: "Safe Content & Apps",
    description:
      "iFriend helps block harmful content and keeps apps age-appropriate.",
    image: "/safe-content-screen.png",
    imageAlt: "App Management Screen",
  },
  {
    id: "screen-time",
    icon: StopWatchIcon,
    title: "Healthy Screen Time",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
    image: "/screen-time-screen.png",
    imageAlt: "Screen Time Screen",
  },
  {
    id: "calls",
    icon: CallIcon,
    title: "Calls &",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
    image: "/calls-screen.png",
    imageAlt: "Calls Screen",
  },
  {
    id: "family-location",
    icon: LocationOutlineIcon,
    title: "Family Location",
    description:
      "Know where your child is and feel reassured wherever they go.",
    image: "/family-location-screen.png",
    imageAlt: "Family Location Screen",
  },
];
