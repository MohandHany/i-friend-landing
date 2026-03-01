"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { safetyFeatureIds, getSafetyIcon } from "./data";
import { FeatureAccordion } from "./components/feature-accordion";

export default function SupportAndSafetySection() {
  const t = useTranslations("supportAndSafety");
  const [activeId, setActiveId] = useState<string>("smart-emotional");

  const features = safetyFeatureIds.map((id) => ({
    id,
    icon: getSafetyIcon(id),
    title: t(`items.${id}.title`),
    description: t(`items.${id}.description`),
  }));

  return (
    <section
      id="support-and-safety"
      className="relative flex items-center justify-center pt-35 pb-22 w-full overflow-hidden"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-20">
        {/* Header — centered */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] lg:text-[44px] 2xl:text-[48px] font-medium leading-tight">
            {t("headingPre")}{" "}
            <span className="text-primary-blue">{t("keep")}</span>{" "}
            {t("headingMid") && <>{t("headingMid")}{" "}</>}
            <span className="text-primary-blue">{t("safeOnline")}</span>
          </h2>
          <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-xl">
            {t("description")}
          </p>
        </div>

        {/* Content: accordion left + image right */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
          {/* Left: Accordion cards */}
          <div className="w-full lg:w-fit flex flex-col gap-3 min-h-[540px] 2xl:min-h-[620px]">
            {features.map((feature) => (
              <FeatureAccordion
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={activeId === feature.id}
                onClick={() => setActiveId(feature.id)}
              />
            ))}
          </div>

          {/* Right: Illustration image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] aspect-square">
              <Image
                src="/child-safe-image.svg"
                alt={t("childImageAlt")}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}