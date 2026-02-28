import Image from "next/image";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="w-full py-30 lg:pb-40 lg:pt-60 overflow-visible"
    >
      <div className="2xl:w-[90%] w-[90%] mx-auto overflow-visible">
        {/* Card: overflow-visible so image can bleed out */}
        <div className="relative bg-light-blue gap-6 rounded-[40px] overflow-visible flex flex-col-reverse lg:flex-row items-stretch justify-between lg:pr-[44%]">

          {/* Left: Text + CTA */}
          <div className="flex flex-col gap-6 z-10 p-6 lg:px-12 lg:py-8 w-full">
            <h2 className="text-[28px] lg:text-[36px] font-medium leading-tight">
              Your children&apos;s safety starts with a decision
            </h2>
            <p className="text-base lg:text-lg leading-relaxed">
              Download the iFriend app and make mobile use safe and beneficial
              for your kids.
            </p>
            <a
              id="download-android-btn"
              href="#"
              className="inline-flex w-full lg:w-fit text-lg font-medium items-center justify-center gap-3 bg-primary-blue hover:bg-primary-blue-hover transition-colors duration-200 text-white text-base px-5 py-3 rounded-full"
            >
              <Image
                src="/android-head-icon.svg"
                alt="Android"
                width={35}
                height={35}
              />
              Download for Android
            </a>
          </div>

          {/* Right: Pair of screens — absolute on desktop so card height = text height */}
          <div className="relative w-full lg:absolute lg:right-8 bottom-10 lg:bottom-0 lg:w-[43%] flex justify-center lg:justify-end shrink-0">
            <div className="
              relative
              w-[75%] sm:w-[60%] lg:w-[80%]
              -mt-10 lg:-mt-32
              mb-0
            ">
              <Image
                src="/pair of screens.svg"
                alt="iFriend app screens showing sleep mode and app controls"
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