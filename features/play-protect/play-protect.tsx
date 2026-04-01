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
      className="relative flex items-center justify-center py-28 lg:py-40 w-full overflow-hidden"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-[32px] lg:text-[44px] 2xl:text-[54px] font-bold text-center text-foreground">
            {t("heading")}
          </h2>
          <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-3xl text-center leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Content: Image on left, steps on right (desktop) / stacked (mobile) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Phone Image with hover effect */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xs group">
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-[44px] blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500" />
              
              {/* Phone frame */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-900/20 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2010.50.30%20PM-m7ONdJ9cRVFGQJn513PGOT3OgitTqu.jpeg"
                  alt={t("phoneImageAlt")}
                  width={320}
                  height={640}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="w-full lg:w-3/5 flex flex-col gap-5">
            {steps.map(({ id, icon: Icon, title, description, index }) => (
              <div 
                key={id} 
                className="group flex gap-5 p-6 lg:p-7 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 border border-primary-blue/15 hover:border-primary-blue/40 hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-primary-blue/5 transition-all duration-300 cursor-default"
              >
                {/* Step number circle with gradient */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary-blue to-primary-blue/80 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-blue/30 group-hover:shadow-xl group-hover:shadow-primary-blue/40 transition-all duration-300">
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-[18px] lg:text-[20px] 2xl:text-[21px] font-semibold text-foreground group-hover:text-primary-blue transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-dark-natural text-base 2xl:text-[17px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            {/* Important Note Alert */}
            <div className="mt-4 p-6 rounded-2xl bg-gradient-to-r from-amber-50/60 to-orange-50/40 border border-amber-200/40 border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">⚠️</div>
                <p className="text-amber-900 font-semibold text-base leading-relaxed">
                  {t("importantNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
