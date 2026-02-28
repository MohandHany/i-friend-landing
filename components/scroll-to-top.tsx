"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-6 z-50
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-primary-blue text-white
        shadow-lg shadow-primary-blue/30
        border-2 border-white/20
        transition-all duration-300 ease-in-out
        hover:bg-primary-blue-hover hover:scale-110 hover:shadow-primary-blue/50
        active:scale-95
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      {/* Animated chevron arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 animate-bounce-subtle"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
