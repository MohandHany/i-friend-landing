import HeroSection from "@/features/hero/hero-content";
import FeaturesSection from "@/features/features/features";
import ProductPreviewSection from "@/features/product-preview/product-preview";
import SupportAndSafetySection from "@/features/support-and-safety/support-and-safety";
import HowItWorksSection from "@/features/how-it-works/how-it-works";
import PlayProtectSection from "@/features/play-protect/play-protect";
import ReviewsSection from "@/features/reviews/reviews";
import FaqSection from "@/features/faq/faq";
import DownloadSection from "@/features/download/download";
import Footer from "@/features/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main className="2xl:w-[80%] w-[90%] mx-auto">
      </main>
      <FeaturesSection />
      <ProductPreviewSection />
      <SupportAndSafetySection />
      <HowItWorksSection />
      <PlayProtectSection />
      <ReviewsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
