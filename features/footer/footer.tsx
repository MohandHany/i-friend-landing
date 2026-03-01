import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { socialLinks } from "./data";

export default async function Footer() {
  const t = await getTranslations("footer");

  const ifriendLinks = [
    { key: "features", label: t("links.features"), href: "#features" },
    { key: "whyiFriend", label: t("links.whyiFriend"), href: "#product" },
    { key: "supportAndSafety", label: t("links.supportAndSafety"), href: "#support-and-safety" },
    { key: "howItWorks", label: t("links.howItWorks"), href: "#how-it-works" },
    { key: "faq", label: t("links.faq"), href: "#faq" },
  ];

  return (
    <footer className="w-full bg-white pt-12 pb-8">
      <div className="w-[90%] lg:w-[60%] mx-auto flex flex-col gap-10">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/iFriend-logo.svg"
            alt={t("logoAlt")}
            width={180}
            height={90}
            className="h-24.7 w-auto object-contain"
          />
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">

          {/* Column 1: iFriend links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium tracking-widest text-navy-blue uppercase">
              {t("iFriendColumn")}
            </h3>
            <ul className="flex flex-col gap-3">
              {ifriendLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-dark-natural font-medium text-base hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Download App */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium tracking-widest text-navy-blue uppercase">
              {t("downloadColumn")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  id="footer-download-android"
                  href="#"
                  className="text-dark-natural font-medium text-base hover:text-primary-blue transition-colors duration-200"
                >
                  {t("androidLink")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium tracking-widest text-navy-blue uppercase">
              {t("followColumn")}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  aria-label={social.alt}
                  className="w-11.25 h-11.25 rounded-full bg-light-blue border border-natural flex items-center justify-center hover:border-primary-blue transition-all duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-dark-natural">
          {t("copyright")}
        </p>

      </div>
    </footer>
  );
}