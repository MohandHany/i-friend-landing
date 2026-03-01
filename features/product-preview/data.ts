import type { ComponentType } from "react";
import SecurityIcon from "@/components/icons/security-outline-icon";
import StopWatchIcon from "@/components/icons/stop-watch-outline-icon";
import CallIcon from "@/components/icons/call-outline-icon";
import LocationOutlineIcon from "@/components/icons/location-outline-icon";

export const productFeatureIds = [
  "safe-content",
  "screen-time",
  "calls",
  "family-location",
] as const;

export type ProductFeatureId = (typeof productFeatureIds)[number];

const iconMap: Record<ProductFeatureId, ComponentType<{ className?: string }>> = {
  "safe-content": SecurityIcon,
  "screen-time": StopWatchIcon,
  "calls": CallIcon,
  "family-location": LocationOutlineIcon,
};

const imageMap: Record<ProductFeatureId, { src: string }> = {
  "safe-content": { src: "/safe-content-screen.png" },
  "screen-time": { src: "/screen-time-screen.png" },
  "calls": { src: "/calls-screen.png" },
  "family-location": { src: "/family-location-screen.png" },
};

export function getProductIcon(id: ProductFeatureId): ComponentType<{ className?: string }> {
  return iconMap[id];
}

export function getProductImage(id: ProductFeatureId): { src: string } {
  return imageMap[id];
}
