"use client";

import ArrowDownIcon from "@/components/icons/arrow-down-icon";

export function FeatureAccordion({
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
