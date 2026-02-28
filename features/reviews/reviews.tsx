"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah&backgroundColor=ffd83d",
    rating: 5,
    review: "iFriend made parenting in the digital world so much easier",
  },
  {
    id: 2,
    name: "James K.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=James&backgroundColor=b6e3f4",
    rating: 5,
    review: "My kids are safer online and I feel so much more at ease now",
  },
  {
    id: 3,
    name: "Layla R.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Layla&backgroundColor=d1d4f9",
    rating: 5,
    review: "The emotional support feature is a game changer for our family",
  },
  {
    id: 4,
    name: "Tom W.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Tom&backgroundColor=c0aede",
    rating: 5,
    review: "Screen time management has never been this simple and effective",
  },
  {
    id: 5,
    name: "Mia C.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Mia&backgroundColor=ffd83d",
    rating: 5,
    review: "iFriend helps my child stay focused during homework time perfectly",
  },
  {
    id: 6,
    name: "Omar A.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Omar&backgroundColor=b6e3f4",
    rating: 5,
    review: "Balanced gaming feature keeps my son happy without overdoing it",
  },
  {
    id: 7,
    name: "Nina P.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Nina&backgroundColor=d1d4f9",
    rating: 5,
    review: "Privacy tools taught my daughter how to stay safe with her data",
  },
  {
    id: 8,
    name: "Carlos G.",
    role: "Parent",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Carlos&backgroundColor=c0aede",
    rating: 5,
    review: "I recommend iFriend to every parent who cares about online safety",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-[18px] h-[18px] text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  role,
  avatar,
  rating,
  review,
}: {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}) {
  return (
    <div className="bg-light-natural rounded-2xl px-5 py-4 flex flex-col gap-3 min-w-[300px] w-[300px] select-none">
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt={name}
            className="w-9.5 h-9.5 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="italic leading-tight">
            {name}, {role}
          </span>
          <StarRating count={rating} />
        </div>
      </div>
      {/* Review text */}
      <p className="text-dark-natural text-sm leading-relaxed break-words">{review}</p>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative flex flex-col justify-center py-25 lg:py-40 w-full overflow-hidden gap-16"
    >
      {/* Header */}
      <div className="w-[95%] mx-auto flex flex-col gap-2">
        <h2 className="text-[32px] lg:text-[42px] 2xl:text-[42px] font-medium leading-tight text-navy-blue">
          Trusted by Parents
        </h2>
        <p className="text-dark-natural text-lg lg:text-[20px] 2xl:text-[22px]">
          Real reviews. Real peace of mind.
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