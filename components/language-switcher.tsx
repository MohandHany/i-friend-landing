"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import TranslateIcon from "@/components/icons/translate-outline-icon";

interface LanguageSwitcherProps {
  label?: string;
  className?: string;
  iconClassName?: string;
}

export default function LanguageSwitcher({
  label,
  className,
  iconClassName = "h-4 w-4",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale = locale === "en" ? "ar" : "en";
  const displayLabel = label ?? (locale === "en" ? "عربي" : "English");

  const handleSwitch = () => {
    document.cookie = `NEXT_LOCALE=${targetLocale};path=/;max-age=31536000;SameSite=Lax`;
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);
    startTransition(() => {
      router.replace(newPath || `/${targetLocale}`);
    });
  };

  return (
    <Button
      onClick={handleSwitch}
      disabled={isPending}
      className={className}
      aria-label={`Switch to ${targetLocale === "ar" ? "Arabic" : "English"}`}
    >
      {displayLabel}
      <TranslateIcon className={iconClassName} />
    </Button>
  );
}
