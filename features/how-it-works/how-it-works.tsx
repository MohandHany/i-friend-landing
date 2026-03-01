"use client";

import VideoIcon from "@/components/icons/video-outline-icon";
import { useTranslations } from "next-intl";
import { stepIds, getStepIcon } from "./data";

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = stepIds.map((id, index) => ({
    id,
    icon: getStepIcon(id),
    title: t(`steps.${id}.title`),
    description: t(`steps.${id}.description`),
    index,
  }));

  return (
    <section
      id="how-it-works"
      className="relative flex items-center justify-center py-30 lg:pb-30 w-full overflow-hidden"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-16">

        {/* Two-column layout on desktop */}
        <div className="flex flex-col gap-12 lg:gap-16 ">

          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[32px] lg:text-[44px] 2xl:text-[54px] font-medium">
              {t("headingPre")}{" "}
              <span className="text-primary-blue">{t("iFriend")}</span>
            </h2>
            <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-4xl text-center">
              {t("description")}
            </p>
          </div>

          {/* Video / image placeholder */}
          <div className="w-full md:w-[90%] lg:w-[70%] mx-auto rounded-3xl bg-primary-blue/20 flex items-center justify-center aspect-video rounded-4xl lg:outline-12 outline-8 outline-natural/20">
            <div className="flex flex-col items-center justify-center gap-3 text-primary-blue/40">
              <VideoIcon className="h-20 w-20 text-primary-blue/30" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start w-full md:ms-10 lg:ms-5 xl:ms-10">
            {steps.map(({ id, icon: Icon, title, description, index }) => {
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={id}
                  className="flex flex-row lg:flex-col lg:flex-1 gap-4 lg:gap-0"
                >
                  {/* ── Icon + connector column (mobile: left col / desktop: top row) ── */}
                  <div className="flex flex-col lg:flex-row items-center flex-shrink-0">
                    {/* Circle icon */}
                    <div className={`w-13 h-13 rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-blue/25 ${index === 0 ? "bg-primary-blue" : "bg-primary-blue/20"}`}>
                      <Icon className={`w-6 h-6 ${index === 0 ? "text-white" : "text-primary-blue"}`} />
                    </div>

                    {/* Connector: vertical on mobile, horizontal on desktop */}
                    {!isLast && (
                      <div className="
                        flex-1
                        mt-2 mb-2 lg:mt-0 lg:mb-0
                        lg:mx-3
                        min-h-[100px] lg:min-h-0 lg:min-w-[40px]
                        w-[2px] lg:w-auto lg:h-[2px]
                        border-s-2 lg:border-s-0 lg:border-t-2
                        border-dashed border-primary-blue/25
                      " />
                    )}
                  </div>

                  {/* ── Text: beside icon on mobile, below icon on desktop ── */}
                  <div className={`flex flex-col gap-1 lg:mt-5 lg:pe-8 ${!isLast ? "pb-4 lg:pb-0" : ""}`}>
                    <h3 className="text-[20px] lg:text-[20px] 2xl:text-[22px] font-semibold text-navy-blue lg:text-foreground leading-[44px] lg:leading-snug">
                      {title}
                    </h3>
                    <p className="text-dark-natural text-base 2xl:text-[17px] leading-relaxed max-w-xs lg:max-w-none">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}