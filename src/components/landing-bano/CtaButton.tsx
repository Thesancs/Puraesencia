"use client";

import { cn } from "@/lib/utils";

export default function CtaButton({
  className,
  text,
  mobileText,
  planUrl,
}: {
  className?: string;
  text?: string;
  mobileText?: string;
  planUrl: string;
}) {
  const desktopButtonText = text || "REGÍSTRATE AHORA DANDO CLIC AQUÍ";
  const mobileButtonText = mobileText || desktopButtonText;

  return (
    <a
      href={planUrl}
      className={cn(
        "hotmart-fb hotmart__button-checkout",
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "w-full h-auto px-4 py-3 text-center text-primary-foreground transition-transform duration-300 ease-in-out transform rounded-lg shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 animate-pulse",
        "sm:py-4",
        "text-sm font-bold",
        className
      )}
    >
        <span className="md:hidden">{mobileButtonText}</span>
        <span className="hidden md:inline">{desktopButtonText}</span>
    </a>
  );
}
