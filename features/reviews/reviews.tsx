"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";
import { reviewIds, getReviewAvatar, getReviewRating } from "./data";
import { ReviewCard } from "./components/review-card";

export default function ReviewsSection() {
  const t = useTranslations("reviews");

  const reviews = reviewIds.map((id) => ({
    id,
    name: t(`items.${id}.name`),
    role: t("roleParent"),
    avatar: getReviewAvatar(id),
    rating: getReviewRating(id),
    review: t(`items.${id}.review`),
  }));

  return (
    <section
      id="reviews"
      className="relative flex flex-col justify-center py-25 lg:py-40 w-full overflow-hidden gap-16"
    >
      {/* Header */}
      <div className="w-[95%] mx-auto flex flex-col gap-2">
        <h2 className="text-[32px] lg:text-[42px] 2xl:text-[42px] font-medium leading-tight text-navy-blue">
          {t("heading")}
        </h2>
        <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px]">
          {t("subheading")}
        </p>
      </div>

      {/* Swiper rows */}
      <div className="flex flex-col gap-4 w-full">
        {/* Row 1 — slides left */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          centeredSlides={true}
          allowTouchMove={false}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
          speed={4000}
          className="w-full !overflow-visible"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <ReviewCard {...r} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 — slides right */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          centeredSlides={true}
          allowTouchMove={false}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
          speed={4000}
          className="w-full !overflow-visible"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <ReviewCard {...r} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}