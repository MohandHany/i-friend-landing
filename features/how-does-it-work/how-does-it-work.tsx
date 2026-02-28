"use client";

import GooglePlayOutlineIcon from "@/components/icons/google-play-outline-icon";
import UsersBoldIcon from "@/components/icons/users-bold-icon";
import LinkBoldIcon from "@/components/icons/link-bold-icon";
import PhoneBoldIcon from "@/components/icons/phone-bold-icon";
import VideoIcon from "@/components/icons/video-outline-icon";

const steps = [
  {
    id: "download",
    icon: GooglePlayOutlineIcon,
    title: "Download App",
    description:
      "Download the app easily and get started in just a few simple steps.",
  },
  {
    id: "account-type",
    icon: UsersBoldIcon,
    title: "Child or Parent",
    description:
      "Choose the account type that fits you: Child or Parent, each with its own features.",
  },
  {
    id: "link",
    icon: LinkBoldIcon,
    title: "Link With Child",
    description:
      "Connect your account with your child's account to manage and monitor easily.",
  },
  {
    id: "monitor",
    icon: PhoneBoldIcon,
    title: "Monitor Phone Safely",
    description:
      "Monitor phone usage safely and help your child develop healthy digital habits.",
  },
];

export default function HowDoesItWorkSection() {
  return (
    <section
      id="how-does-it-work"
      className="relative flex items-center justify-center py-22 lg:pb-30 w-full overflow-hidden"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-16">

        {/* Two-column layout on desktop */}
        <div className="flex flex-col gap-12 lg:gap-16 ">

          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[32px] lg:text-[44px] 2xl:text-[54px] font-medium">
              How does{" "}
              <span className="text-primary-blue">iFriend work?</span>
            </h2>
            <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-4xl text-center">
              Get started in seconds, and let iFriend be your child's
              digital friend—helping them use their phone safely and in a
              healthy balance.
            </p>
          </div>

          {/* Video / image placeholder */}
          <div className="w-full md:w-[90%] lg:w-[70%] mx-auto rounded-3xl bg-primary-blue/20 flex items-center justify-center aspect-video rounded-4xl lg:outline-12 outline-8 outline-natural/20">
            <div className="flex flex-col items-center justify-center gap-3 text-primary-blue/40">
              <VideoIcon className="h-20 w-20 text-primary-blue/30" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start w-full md:ml-10 lg:ml-5 xl:ml-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
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
                        border-l-2 lg:border-l-0 lg:border-t-2
                        border-dashed border-primary-blue/25
                      " />
                    )}
                  </div>

                  {/* ── Text: beside icon on mobile, below icon on desktop ── */}
                  <div className={`flex flex-col gap-1 lg:mt-5 lg:pr-8 ${!isLast ? "pb-4 lg:pb-0" : ""}`}>
                    <h3 className="text-[20px] lg:text-[20px] 2xl:text-[22px] font-semibold text-navy-blue lg:text-foreground leading-[44px] lg:leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-dark-natural text-base 2xl:text-[17px] leading-relaxed max-w-xs lg:max-w-none">
                      {step.description}
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