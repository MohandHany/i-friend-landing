"use client";

export function FAQItem({
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
        <h3 className={`text-[18px] lg:text-[22px] font-medium`}>
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
