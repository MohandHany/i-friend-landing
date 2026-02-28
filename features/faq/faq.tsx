"use client";

import { useState } from "react";
import { faqs } from "./data";
import { FAQItem } from "./components/faq-item";

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