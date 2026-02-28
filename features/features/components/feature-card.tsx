import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
  id,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div
      id={id}
      className="flex flex-col gap-4 bg-light-blue rounded-4xl p-5 h-full"
    >
      {/* Icon circle */}
      <div className="w-[65px] h-[65px] rounded-full bg-gradient-primary-blue flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <article className="flex flex-col gap-2">
        <h3 className="text-[28px] font-medium text-navy-blue">{title}</h3>
        <p className="text-dark-natural font-medium text-lg leading-relaxed">
          {description}
        </p>
      </article>
    </div>
  );
}
