"use client";

import Image from "next/image";
import { useState } from "react";
import SecurityIcon from "@/components/icons/security-outline-icon";
import StopWatchIcon from "@/components/icons/stop-watch-outline-icon";
import CallIcon from "@/components/icons/call-outline-icon";
import LocationOutlineIcon from "@/components/icons/location-outline-icon";

const features = [
  {
    id: "safe-content",
    icon: SecurityIcon,
    title: "Safe Content & Apps",
    description:
      "iFriend helps block harmful content and keeps apps age-appropriate.",
    image: "/safe-content-screen.png",
    imageAlt: "App Management Screen",
  },
  {
    id: "screen-time",
    icon: StopWatchIcon,
    title: "Healthy Screen Time",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
    image: "/screen-time-screen.png",
    imageAlt: "Screen Time Screen",
  },
  {
    id: "calls",
    icon: CallIcon,
    title: "Calls &",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
    image: "/calls-screen.png",
    imageAlt: "Calls Screen",
  },
  {
    id: "family-location",
    icon: LocationOutlineIcon,
    title: "Family Location",
    description:
      "Know where your child is and feel reassured wherever they go.",
    image: "/family-location-screen.png",
    imageAlt: "Family Location Screen",
  },
];

function FeatureCard({
  id,
  icon: Icon,
  title,
  description,
  isActive,
  onClick,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`
        relative flex flex-col rounded-2xl bg-white
        px-5 py-4 lg:px-4 lg:py-3 2xl:px-5 2xl:py-4 cursor-pointer
      `}
    >
      {/* Title row with icon */}
      <div className="flex items-center">
        <div
          className={`
            flex items-center justify-start w-10 h-10 flex-shrink-0
          `}
        >
          <Icon
            className={`w-8 h-8 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 transition-colors duration-300 text-primary-blue`}
          />
        </div>
        <h3
          className={`text-[22px] lg:text-lg 2xl:text-[22px] font-medium`}
        >
          {title}
        </h3>
      </div>

      {/* Description revealed when active */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isActive ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <p className="text-dark-natural text-lg lg:text-base 2xl:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function PowerfulFeaturesSection() {
  const [activeId, setActiveId] = useState<string>("safe-content");

  const activeFeature = features.find((f) => f.id === activeId)!;

  return (
    <section
      id="powerful-features"
      className="relative flex items-center justify-center py-22 w-full bg-primary-blue overflow-hidden"
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
            {/* Screen images — all stacked, fade in/out */}
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
              Powerful Features,{" "}
              <span className="block">Simple Control</span>
            </h2>
            <p className="w-full text-light-blue/50 text-lg lg:text-base 2xl:text-lg leading-relaxed max-w-md">
              Yes, the app is designed with a simple and user-friendly interface,
              allowing parents to manage everything easily.
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