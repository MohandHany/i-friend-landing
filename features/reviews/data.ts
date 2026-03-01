export const reviewIds = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
export type ReviewId = (typeof reviewIds)[number];

const avatarMap: Record<ReviewId, string> = {
  "1": "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah&backgroundColor=ffd83d",
  "2": "https://api.dicebear.com/9.x/adventurer/svg?seed=James&backgroundColor=b6e3f4",
  "3": "https://api.dicebear.com/9.x/adventurer/svg?seed=Layla&backgroundColor=d1d4f9",
  "4": "https://api.dicebear.com/9.x/adventurer/svg?seed=Tom&backgroundColor=c0aede",
  "5": "https://api.dicebear.com/9.x/adventurer/svg?seed=Mia&backgroundColor=ffd83d",
  "6": "https://api.dicebear.com/9.x/adventurer/svg?seed=Omar&backgroundColor=b6e3f4",
  "7": "https://api.dicebear.com/9.x/adventurer/svg?seed=Nina&backgroundColor=d1d4f9",
  "8": "https://api.dicebear.com/9.x/adventurer/svg?seed=Carlos&backgroundColor=c0aede",
};

const ratingMap: Record<ReviewId, number> = {
  "1": 5, "2": 5, "3": 5, "4": 5, "5": 5, "6": 5, "7": 5, "8": 5,
};

export function getReviewAvatar(id: ReviewId): string {
  return avatarMap[id];
}

export function getReviewRating(id: ReviewId): number {
  return ratingMap[id];
}
