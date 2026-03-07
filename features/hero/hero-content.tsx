"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center w-full pb-10 pt-35 lg:pt-20">
      <Image
        src="/hero-section-bg.png"
        alt={t("bgAlt")}
        fill
        className="absolute inset-0 -z-1 object-cover"
      />
      <div className="2xl:w-[85%] w-[90%] flex flex-col-reverse lg:flex-row gap-10">
        <div className="flex flex-col justify-between gap-10 lg:gap-5">
          <article className="flex flex-col gap-5">
            <h1 className="lg:text-[52px] text-[38px] font-semibold leading-tight">
              {t("headlinePre")}{" "}
              <span className="text-primary-blue">{t("protect")}</span>{" "}
              {t("headlineMid") && <>{t("headlineMid")}{" "}</>}
              <span className="text-primary-blue">{t("kids")}</span>
              {t("headlinePost") && <>{" "}{t("headlinePost")}</>}
            </h1>
            <p className="font-medium text-dark-natural lg:text-xl text-lg">
              {t("description")}
            </p>
          </article>
          <Button className="lg:w-fit w-full bg-primary-blue self-center lg:self-start text-lg font-medium rounded-full px-5 py-7 hover:bg-primary-blue-hover">
            <Image src="/android-head-icon.svg" alt={t("androidIconAlt")} width={35} height={35} />
            {t("downloadAndroid")}
          </Button>
        </div>
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative w-full aspect-video overflow-hidden rounded-4xl lg:outline-12 outline-8 outline-natural/20">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}