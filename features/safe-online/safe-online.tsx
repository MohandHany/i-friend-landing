"use client";

import Image from "next/image";
import { useState } from "react";
import SmileOutlineIcon from "@/components/icons/smile-outline-icon";
import CrescentMoonOutlineIcon from "@/components/icons/crescent-moon-outline-icon";
import SecurityOutlineIcon2 from "@/components/icons/security-outline-icon-2";
import FocusOutlineIcon from "@/components/icons/focus-outline-icon";
import GameOutlineIcon from "@/components/icons/game-outline-icon";
import OnlineOutlineIcon from "@/components/icons/online-outline-icon";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";

const features = [
  {
    id: "smart-emotional",
    icon: SmileOutlineIcon,
    title: "Smart Emotional Support",
    description:
      "iFriend detects negative patterns and helps your child handle stress, bullying, and online pressure.",
  },
  {
    id: "healthy-routine",
    icon: CrescentMoonOutlineIcon,
    title: "Healthy Daily Routine",
    description:
      "Set daily limits and schedules to help your kids build healthy screen habits.",
  },
  {
    id: "privacy-safety",
    icon: SecurityOutlineIcon2,
    title: "Privacy & Safety First",
    description:
      "Teaches kids how to protect their personal information and avoid unsafe online interactions.",
  },
  {
    id: "focus-learning",
    icon: FocusOutlineIcon,
    title: "Focus & Learning Mode",
    description:
      "Helps children stay focused during study time and reduce distractions automatically.",
  },
  {
    id: "balanced-gaming",
    icon: GameOutlineIcon,
    title: "Balanced Gaming",
    description:
      "Keeps gaming fun and healthy with smart limits instead of strict blocks.",
  },
  {
    id: "online-offline",
    icon: OnlineOutlineIcon,
    title: "Online & Offline Harmony",
    description:
      "Supports a healthy balance between digital life and real-world activities.",
  },
];

function FeatureAccordion({
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
        relative flex flex-col rounded-2xl cursor-pointer
        transition-all duration-300 ease-in-out
        px-5 py-4
        ${isActive
          ? "outline outline-primary-blue shadow-md shadow-primary-blue/10"
          : "shadow-[0px_0px_5px_3px_rgba(0,0,0,0.05)]"
        }
      `}
    >
      {/* Row: icon + title + arrow */}
      <div className="flex items-center gap-3">
        <Icon
          className={`w-8 h-8 flex-shrink-0 text-primary-blue`}
        />
        <h3
          className={`flex-1 text-[18px] 2xl:text-[22px] font-medium transition-colors duration-300 ${isActive ? "text-navy-blue" : "text-navy-blue/80"}`}
        >
          {title}
        </h3>
        <ArrowDownIcon
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 text-dark-natural ${isActive ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Description — expands naturally inside the card */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
      >
        <p className="text-dark-natural text-base 2xl:text-[18px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function SafeOnlineSection() {
  const [activeId, setActiveId] = useState<string>("smart-emotional");

  return (
    <section
      id="safe-online"
      className="relative flex items-center justify-center pt-35 pb-22 w-full overflow-hidden"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-20">
        {/* Header — centered */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] lg:text-[44px] 2xl:text-[48px] font-medium leading-tight">
            We help you{" "}
            <span className="text-primary-blue">keep</span> your
            <span className="block">
              child <span className="text-primary-blue">safe online</span>
            </span>
          </h2>
          <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px] max-w-xl">
            See how the child app works to protect, guide, and support healthy
            digital habits.
          </p>
        </div>

        {/* Content: accordion left + image right */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
          {/* Left: Accordion cards */}
          <div className="w-full lg:w-fit flex flex-col gap-3 min-h-[540px] 2xl:min-h-[620px]">
            {features.map((feature) => (
              <FeatureAccordion
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

          {/* Right: Illustration image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] aspect-square">
              <Image
                src="/child-safe-image.svg"
                alt="Child using iFriend app safely"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}