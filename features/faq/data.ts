export const faqIds = [
  "easy-to-use",
  "screen-time",
  "data-safety",
  "all-devices",
] as const;

export type FaqId = (typeof faqIds)[number];
