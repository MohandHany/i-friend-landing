import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoIcon from "@/components/icons/video-outline-icon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center w-full pb-10 pt-35 lg:pt-20">
      <Image
        src="/hero-section-bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 -z-1 object-cover"
      />
      <div className="2xl:w-[85%] w-[90%] flex flex-col-reverse lg:flex-row gap-10">
        <div className="flex flex-col justify-between gap-10 lg:gap-5">
          <article className="flex flex-col gap-5">
            <h1 className="lg:text-[52px] text-[38px] font-semibold leading-tight">The smarter way to <span className="text-primary-blue">protect</span> your <span className="text-primary-blue">kids’</span> digital life</h1>
            <p className="font-medium text-dark-natural lg:text-xl text-lg">
              iFriend helps parents manage screen time, block harmful
              content, and create a safe digital environment from one easy-to-use dashboard.
            </p>
          </article>
          <Button className="lg:w-fit w-full bg-primary-blue self-center lg:self-start text-lg font-medium rounded-full px-5 py-7 hover:bg-primary-blue-hover">
            <Image src="/android-head-icon.svg" alt="Android Icon" width={35} height={35} />
            Download for Android
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