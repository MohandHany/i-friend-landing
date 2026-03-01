import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // Check NEXT_LOCALE cookie first, then Accept-Language header
  localeDetection: true,
});
