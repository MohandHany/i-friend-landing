import Image from "next/image";
import LocationIcon from "@/components/icons/location-bold-icon";
import WarningIcon from "@/components/icons/warning-bold-icon";
import AndriodIcon from "@/components/icons/andriod-bold-icon";
import ToggleIcon from "@/components/icons/toggle-outline-icon";

const features = [
  {
    id: "ai-ifriend",
    icon: <AndriodIcon className="w-9! h-9! text-white" />,
    title: "Ai iFriend",
    description:
      "A smart assistant that interacts with the child at times set by the parent. It talks with the child, answers their questions, and provides safe, age-appropriate support.",
    side: "left",
  },
  {
    id: "ai-reports",
    icon: <ToggleIcon className="w-9! h-9! text-white" />,
    title: "Ai Reports",
    description:
      "Daily AI-powered reports that give parents clear insights into the child’s activity and behavior throughout the day.",
    side: "left",
  },
  {
    id: "bluer",
    icon: <LocationIcon className="w-9! h-9! text-white" />,
    title: "Bluer",
    description:
      "A smart content protection feature that blocks inappropriate and 18+ content, ensuring a safe and child-friendly digital environment.",
    side: "right",
  },
  {
    id: "pediatric-emergency",
    icon: <WarningIcon className="w-9! h-9! text-white" />,
    title: "Pediatric Emergency",
    description:
      "An advanced safety feature that monitors the child’s location and instantly notifies parents if the child leaves the predefined safe area.",
    side: "right",
  },
];

function FeatureCard({
  icon,
  title,
  description,
  id,
}: {
  icon: React.ReactNode;
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

export default function SmartParentingSection() {
  const leftFeatures = features.filter((f) => f.side === "left");
  const rightFeatures = features.filter((f) => f.side === "right");

  return (
    <section
      id="smart-parenting"
      className="relative flex items-center justify-center py-16 lg:py-24 w-full"
    >
      <div className="2xl:w-[85%] w-[90%] flex flex-col gap-25">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] lg:text-[48px] font-medium leading-tight">
            <span className="text-primary-blue">Smart</span> Parenting Made
            <br />
            Simple &amp; <span className="text-primary-blue">Secure</span>
          </h2>
          <p className="text-dark-natural text-base lg:text-[22px] max-w-2xl">
            Manage your child's phone usage easily with powerful tools
            designed for safety and peace of mind.
          </p>
        </div>

        {/* Content: features + phone mockup */}
        {/* Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] gap-6 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-6 w-full h-full">
            {leftFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="h-full min-h-[550px] p-8 flex items-center justify-center bg-primary-blue px-6 rounded-4xl relative overflow-hidden">
            {/* Phone frame */}
            <Image
              src="/smart-phone-frame.svg"
              alt="iFriend App Screenshot"
              width={285}
              height={600}
              className="2xl:w-[310px] lg:w-[285px] object-cover absolute 2xl:-bottom-64 -bottom-60  left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
            <Image
              src="/smart-parent-section-screen.svg"
              alt="iFriend App Screenshot"
              width={255}
              height={600}
              className="2xl:w-[280px] lg:w-[255px] object-cover absolute 2xl:-bottom-65 -bottom-59 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-6 w-full h-full">
            {rightFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}