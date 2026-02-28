import HeroSection from "@/features/hero/hero-content";
import SmartParentingSection from "@/features/smart-parenting/smart-parenting";
import PowerfulFeaturesSection from "@/features/powerful-features/powerful-features";
import SafeOnlineSection from "@/features/safe-online/safe-online";
import HowDoesItWorkSection from "@/features/how-does-it-work/how-does-it-work";
import ReviewsSection from "@/features/reviews/reviews";
import FaqSection from "@/features/faq/faq";
import DownloadSection from "@/features/download/download";
import Footer from "@/features/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main className="2xl:w-[80%] w-[90%] mx-auto">
      </main>
      <SmartParentingSection />
      <PowerfulFeaturesSection />
      <SafeOnlineSection />
      <HowDoesItWorkSection />
      <ReviewsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}