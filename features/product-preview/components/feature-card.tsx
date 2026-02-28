"use client";

export function FeatureCard({
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
