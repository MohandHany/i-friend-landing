"use client";

import { useState } from "react";

const faqs = [
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

function FAQItem({
  id,
  question,
  answer,
  isActive,
  onClick,
}: {
  id: string;
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div id={id} className="flex flex-col">
      {/* Question row */}
      <button
        onClick={onClick}
        className="flex items-center gap-4 py-5 text-left w-full cursor-pointer group"
      >
        {/* Icon */}
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-primary-blue">
          {isActive ? (
            /* Minus */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            /* Plus */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <h3
          className={`text-[18px] lg:text-[22px] font-medium`}
        >
          {question}
        </h3>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out pl-9
          ${isActive ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"}
        `}
      >
        <p className="text-dark-natural lg:text-lg leading-relaxed">
          {answer}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />
    </div>
  );
}

export default function FaqSection() {
  const [activeId, setActiveId] = useState<string>("easy-to-use");

  return (
    <section
      id="faq"
      className="relative flex flex-col justify-center py-25 lg:py-40 w-full overflow-hidden"
    >
      <div className="w-[90%] 2xl:w-[85%] mx-auto flex flex-col lg:flex-row lg:gap-20 gap-10">
        {/* Left: Title */}
        <div className="lg:w-[35%] flex-shrink-0">
          <h2 className="text-[32px] lg:text-[42px] font-medium">
            Have Questions?
          </h2>
        </div>

        {/* Right: FAQ accordion */}
        <div className="flex-1 flex flex-col min-h-[420px]">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isActive={activeId === faq.id}
              onClick={() =>
                setActiveId(activeId === faq.id ? "" : faq.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}