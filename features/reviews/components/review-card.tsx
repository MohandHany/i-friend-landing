import { StarRating } from "./star-rating";

export function ReviewCard({
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
