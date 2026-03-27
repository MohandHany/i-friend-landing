"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import TranslateIcon from "@/components/icons/translate-outline-icon";

interface LanguageSwitcherProps extends VariantProps<typeof buttonVariants> {
  label?: string;
  className?: string;
  iconClassName?: string;
  showLabel?: boolean;
  onClick?: () => void;
}

export default function LanguageSwitcher({
  label,
  className,
  iconClassName = "h-4 w-4",
  showLabel = true,
  variant,
  size,
  onClick,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale = locale === "en" ? "ar" : "en";
  const displayLabel = label ?? (locale === "en" ? "عربي" : "English");

  const handleSwitch = () => {
    onClick?.();
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
      variant={variant}
      size={size}
      aria-label={`Switch to ${targetLocale === "ar" ? "Arabic" : "English"}`}
    >
      {showLabel && displayLabel}
      <TranslateIcon className={iconClassName} />
    </Button>
  );
}
