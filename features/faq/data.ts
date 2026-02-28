export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "easy-to-use",
    question: "Is the app easy to use?",
    answer:
      "Yes, the app is designed with a simple and user-friendly interface, allowing parents to manage everything easily.",
  },
  {
    id: "screen-time",
    question: "Can I set screen time limits?",
    answer:
      "Absolutely! You can set daily screen time limits, schedules, and app-specific restrictions for your child's device.",
  },
  {
    id: "data-safety",
    question: "Is my child's data safe and private?",
    answer:
      "We take privacy seriously. All data is encrypted and we never share your child's information with third parties.",
  },
  {
    id: "all-devices",
    question: "Does the app work on all devices?",
    answer:
      "iFriend works on Android and iOS devices, making it easy to manage across all your family's smartphones and tablets.",
  },
];
