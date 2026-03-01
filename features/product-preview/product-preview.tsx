"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { productFeatureIds, getProductIcon, getProductImage } from "./data";
import { FeatureCard } from "./components/feature-card";

export default function ProductPreviewSection() {
  const t = useTranslations("product");
  const [activeId, setActiveId] = useState<string>("safe-content");

  const features = productFeatureIds.map((id) => ({
    id,
    icon: getProductIcon(id),
    title: t(`items.${id}.title`),
    description: t(`items.${id}.description`),
    image: getProductImage(id).src,
    imageAlt: t(`items.${id}.imageAlt`),
  }));

  return (
    <section
      id="product"
      className="relative flex items-center justify-center py-35 w-full bg-primary-blue overflow-hidden"
    >
      {/* Background decorative vector */}
      <Image
        src="/Vector.svg"
        alt=""
        width={663}
        height={952}
        className="w-[800px] h-[1200px] scale-125 lg:scale-100 lg:w-[663px] lg:h-[952px] 2xl:w-[663px] 2xl:h-[952px] absolute left-0 -top-30 opacity-30 pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
        {/* Left: Phone Mockup with animated screen */}
        <div className="w-full flex items-start justify-center flex-shrink-0">
          <div className="relative w-[300px] h-[580px] lg:w-[470px] lg:h-[580px] 2xl:w-[500px] 2xl:h-[650px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                  ${feature.id === activeId ? "opacity-100" : "opacity-0"}
                `}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text + Feature Cards */}
        <div className="w-full flex flex-col gap-8 h-[760px] md:h-[660px] lg:h-[580px] 2xl:h-[650px] lg:overflow-visible">
          {/* Heading */}
          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="text-white text-[42px] lg:text-[36px] 2xl:text-[42px] font-medium leading-tight">
              {t("heading")}
            </h2>
            <p className="w-full text-light-blue/50 text-lg lg:text-base 2xl:text-lg leading-relaxed max-w-md">
              {t("description")}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="relative flex flex-col gap-3">
            {features.map((feature) => (
              <FeatureCard
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
        </div>
      </div>
    </section>
  );
}