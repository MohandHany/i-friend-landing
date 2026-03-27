"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import TranslateIcon from "@/components/icons/translate-outline-icon";
import MenuIcon from "@/components/icons/menu-outline-icon";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { key: "features", label: t("links.features"), href: "#features" },
    { key: "product", label: t("links.product"), href: "#product" },
    { key: "supportAndSafety", label: t("links.supportAndSafety"), href: "#support-and-safety" },
    { key: "howItWorks", label: t("links.howItWorks"), href: "#how-it-works" },
    { key: "faq", label: t("links.faq"), href: "#faq" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "product", "support-and-safety", "how-it-works", "faq"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className={`fixed top-4 left-0 right-0 z-50 md:px-4 flex justify-center transition-all duration-300 translate-y-0 opacity-100 ${isOpen ? "hidden" : "block"}`}
      >
        <header className="w-full 2xl:max-w-[90%] max-w-[93%] mx-auto bg-light-blue/70 backdrop-blur-lg rounded-full pr-3 lg:pr-6 px-6 py-3 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Image
            src="/iFriend-logo.svg"
            alt="iFriend Logo"
            width={120}
            height={60}
            className="h-15 w-auto ms-2"
            priority
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center 2xl:gap-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base 2xl:text-lg font-medium transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-primary-blue"
                  : "text-black hover:text-primary-blue"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center h-fit gap-4">
            <LanguageSwitcher
              className="flex items-center gap-2 p-6 rounded-full bg-natural text-base 2xl:text-lg text-black font-medium hover:bg-natural-hover transition-colors"
            />
            <Button className="p-6 rounded-full bg-primary-blue text-white text-base 2xl:text-lg font-semibold hover:bg-primary-blue-hover transition-colors">
              {t("downloadApp")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-5 text-[var(--color-navy-blue)] rounded-full bg-[#E5E7EB] hover:bg-gray-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("toggleMenu")}
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
          <Link href={`/${locale}`} onClick={() => setIsOpen(false)}>
            <Image
              src="/iFriend-logo.svg"
              alt="iFriend Logo"
              width={120}
              height={60}
              className="h-15 w-auto ms-4"
              priority
            />
          </Link>

          {/* Close Button */}
          <button
            className="p-4 rounded-full bg-[#E5E7EB] hover:bg-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label={t("closeMenu")}
          >
            <X className="h-6 w-6 text-primary-blue" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col px-8 mt-4 overflow-y-auto">
          {navLinks.map((link, index) => (
            <div key={link.key}>
              <Link
                href={link.href}
                className={`block py-4 text-[1.5rem] font-medium transition-colors duration-200 transform ${isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
                  } ${activeSection === link.href.replace("#", "")
                    ? "text-primary-blue"
                    : "text-black hover:text-primary-blue"
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 60 + 150}ms` : "0ms",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: isOpen ? "400ms" : "0ms",
                }}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsOpen(false);
                }}
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
          <LanguageSwitcher
            showLabel={true}
            variant="ghost"
            className="w-full h-12 p-0 flex items-center justify-center font-medium rounded-full bg-[#E5E7EB] hover:bg-gray-300 transition-colors shadow-sm"
            iconClassName="h-6 w-6 font-medium"
            onClick={() => setIsOpen(false)}
          />
          <Button className="px-6 py-6 rounded-full bg-primary-blue text-white text-base font-semibold hover:bg-primary-blue-hover transition-colors w-full">
            {t("downloadApp")}
          </Button>
        </div>
      </div>
    </>
  );
}