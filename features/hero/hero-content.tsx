"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoIcon from "@/components/icons/video-outline-icon";
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
          <div className="relative w-full aspect-video overflow-hidden bg-primary-blue/20 rounded-4xl lg:outline-12 outline-8 outline-natural/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoIcon className="h-20 w-20 text-primary-blue/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}