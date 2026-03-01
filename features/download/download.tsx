import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function DownloadSection() {
  const t = await getTranslations("download");

  return (
    <section
      id="download"
      className="w-full py-30 lg:pb-40 lg:pt-60 overflow-visible"
    >
      <div className="2xl:w-[90%] w-[90%] mx-auto overflow-visible">
        {/* Card: overflow-visible so image can bleed out */}
        <div className="relative bg-light-blue gap-6 rounded-[40px] overflow-visible flex flex-col-reverse lg:flex-row items-stretch justify-between lg:pe-[44%]">

          {/* Left: Text + CTA */}
          <div className="flex flex-col gap-6 z-10 p-6 lg:px-12 lg:py-8 w-full">
            <h2 className="text-[28px] lg:text-[36px] font-medium leading-tight">
              {t("heading")}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed">
              {t("description")}
            </p>
            <Button className="lg:w-fit w-full bg-primary-blue self-center lg:self-start text-lg font-medium rounded-full px-5 py-7 hover:bg-primary-blue-hover">
              <Image src="/android-head-icon.svg" alt={t("androidIconAlt")} width={35} height={35} />
              {t("downloadAndroid")}
            </Button>
          </div>

          {/* Right: Pair of screens — absolute on desktop so card height = text height */}
          <div className="relative w-full lg:absolute lg:end-8 bottom-5 lg:bottom-0 lg:w-[43%] flex justify-center lg:justify-end shrink-0">
            <div className="
              relative
              w-[75%] sm:w-[60%] lg:w-[80%]
              -mt-10 lg:-mt-32
              mb-0
            ">
              <Image
                src="/pair of screens.svg"
                alt={t("screensAlt")}
                width={560}
                height={440}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}