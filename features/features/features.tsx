"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { featureIds, getFeatureIcon } from "./data";
import { FeatureCard } from "./components/feature-card";

export default function FeaturesSection() {
  const t = useTranslations("features");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const features = featureIds.map((id) => ({
    id,
    icon: getFeatureIcon(id),
    title: t(`items.${id}.title`),
    description: t(`items.${id}.description`),
  }));

  const leftFeatures = features.filter((_, i) => i < 2);
  const rightFeatures = features.filter((_, i) => i >= 2);

  return (
    <section
      id="features"
      className="relative flex items-center justify-center py-35 lg:py-30 w-full"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-25">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] lg:text-[48px] font-medium leading-tight">
            {isArabic ? (
              <>
                {t("sectionTitlePre")}{" "}
                <span className="text-primary-blue">{t("smart")}</span>
              </>
            ) : (
              <>
                <span className="text-primary-blue">{t("smart")}</span>{" "}
                {t("sectionTitlePre")}
              </>
            )}
            <br />
            {t("sectionTitleMid")} <span className="text-primary-blue">{t("secure")}</span>
          </h2>
          <p className="text-dark-natural text-base lg:text-[22px] max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* Content: features + phone mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] gap-6 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-6 w-full h-full">
            {leftFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="h-full min-h-[550px] p-8 flex items-center justify-center bg-primary-blue px-6 rounded-4xl relative overflow-hidden">
            <Image
              src="/smart-phone-frame.svg"
              alt={t("phoneAlt")}
              width={285}
              height={600}
              className="2xl:w-[310px] lg:w-[285px] object-cover absolute 2xl:-bottom-64 -bottom-60  left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
            <Image
              src="/smart-parent-section-screen.svg"
              alt={t("phoneAlt")}
              width={255}
              height={600}
              className="2xl:w-[280px] lg:w-[255px] object-cover absolute 2xl:-bottom-65 -bottom-59 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-6 w-full h-full">
            {rightFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}