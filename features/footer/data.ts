export type FooterLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  href: string;
  icon: string;
  alt: string;
};

export const ifriendLinks: FooterLink[] = [
  { label: "Features", href: "#powerful-features" },
  { label: "Why iFriend", href: "#smart-parenting" },
  { label: "Support & Safety", href: "#safe-online" },
  { label: "How it Works", href: "#how-does-it-work" },
  { label: "FAQ", href: "#faq" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "footer-facebook",
    href: "#",
    icon: "/facebook-icon.svg",
    alt: "Facebook",
  },
  {
    id: "footer-tiktok",
    href: "#",
    icon: "/tiktok.svg",
    alt: "TikTok",
  },
  {
    id: "footer-instagram",
    href: "#",
    icon: "/instagram.svg",
    alt: "Instagram",
  },
  {
    id: "footer-linkedin",
    href: "#",
    icon: "/linkedin.svg",
    alt: "LinkedIn",
  },
];
