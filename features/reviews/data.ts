export type Review = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
};

export const reviews: Review[] = [
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
