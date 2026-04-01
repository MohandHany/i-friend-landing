"use client";

import { useTranslations } from "next-intl";
import { stepIds, getStepIcon } from "./data";
import Image from "next/image";

export default function PlayProtectSection() {
  const t = useTranslations("playProtect");

  const steps = stepIds.map((id, index) => ({
    id,
    icon: getStepIcon(id),
    title: t(`steps.${id}.title`),
    description: t(`steps.${id}.description`),
    index,
  }));

  return (
    <section
      id="play-protect"
      className="relative flex items-center justify-center py-20 lg:py-30 w-full overflow-hidden bg-gradient-to-b from-primary-blue/5 to-transparent"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-[32px] lg:text-[44px] 2xl:text-[54px] font-medium text-center">
            {t("heading")}
          </h2>
          <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-4xl text-center">
            {t("description")}
          </p>
        </div>

        {/* Content: Image on left, steps on right (desktop) / stacked (mobile) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Phone Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-primary-blue/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2010.50.30%20PM-m7ONdJ9cRVFGQJn513PGOT3OgitTqu.jpeg"
                  alt={t("phoneImageAlt")}
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1 flex flex-col gap-8">
            {steps.map(({ id, icon: Icon, title, description, index }) => (
              <div key={id} className="flex gap-4 items-start">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-semibold text-lg shadow-md shadow-primary-blue/25">
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-xl lg:text-[20px] 2xl:text-[22px] font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-dark-natural text-base 2xl:text-[17px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            {/* Important Note */}
            <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
              <p className="text-orange-900 text-sm font-medium">
                {t("importantNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
