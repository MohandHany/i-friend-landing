"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import TranslateIcon from "@/components/icons/translate-outline-icon";
import MenuIcon from "@/components/icons/menu-outline-icon";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Product", href: "#product" },
    { label: "Support & Safety", href: "#support" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <div
        className={`fixed top-4 left-0 right-0 z-50 md:px-4 flex justify-center transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${isOpen ? "hidden" : "block"}`}
      >
        <header className="w-full 2xl:max-w-[90%] max-w-[93%] mx-auto bg-light-blue/70 backdrop-blur-lg rounded-full pr-3 lg:pr-6 px-6 py-3 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/iFriend-logo.svg"
              alt="iFriend Logo"
              width={120}
              height={60}
              className="h-15 w-auto ml-2"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center 2xl:gap-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black text-base 2xl:text-lg font-medium hover:text-primary-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center h-fit gap-4">
            <Button className="flex items-center gap-2 p-6 rounded-full bg-natural text-base 2xl:text-lg text-black font-medium hover:bg-natural-hover transition-colors">
              عربي
              <TranslateIcon className="h-4 w-4" />
            </Button>
            <Button className="p-6 rounded-full bg-primary-blue text-white text-base 2xl:text-lg font-semibold hover:bg-primary-blue-hover transition-colors">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-5 text-[var(--color-navy-blue)] rounded-full bg-[#E5E7EB] hover:bg-gray-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </header>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden flex flex-col m-4 rounded-[40px] bg-light-natural transition-all duration-500 ease-in-out ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between p-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/iFriend-logo.svg"
              alt="iFriend Logo"
              width={120}
              height={60}
              className="h-15 w-auto ml-4"
              priority
            />
          </Link>

          {/* Close Button */}
          <button
            className="p-4 rounded-full bg-[#E5E7EB] hover:bg-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-primary-blue" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col px-8 mt-4 overflow-y-auto">
          {navLinks.map((link, index) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={`block py-4 text-[1.5rem] font-medium text-black hover:text-primary-blue transition-colors duration-200 transform ${isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 60 + 150}ms` : "0ms",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: isOpen ? "400ms" : "0ms",
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div
          className={`p-4 flex flex-col gap-3 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
        >
          <Button className="flex items-center justify-center gap-2 px-5 py-6 rounded-full bg-[#E5E7EB] text-black text-base font-medium hover:bg-gray-300 transition-colors w-full">
            عربي
            <TranslateIcon className="h-5 w-5" />
          </Button>
          <Button className="px-6 py-6 rounded-full bg-primary-blue text-white text-base font-semibold hover:bg-primary-blue-hover transition-colors w-full">
            Download App
          </Button>
        </div>
      </div>
    </>
  );
}