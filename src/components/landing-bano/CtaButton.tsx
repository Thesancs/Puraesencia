"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CtaButton({ 
  className, 
  text, 
  planUrl
}: { 
  className?: string, 
  text?: string,
  planUrl: string
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  
  const buttonText = text || "REGÍSTRATE AHORA DANDO CLIC AQUÍ";
  const isHotmartLink = planUrl.startsWith('https://');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHotmartLink) {
      e.preventDefault();
      router.push(planUrl);
    }
  };

  const commonClasses = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "w-full h-auto py-4 text-lg font-bold text-center text-primary-foreground transition-transform duration-300 ease-in-out transform rounded-lg shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 animate-pulse",
    className,
    {
      "bg-destructive hover:bg-destructive/90": status === "error",
    }
  );
  
  const hotmartClasses = isHotmartLink ? "hotmart-fb hotmart__button-checkout" : "";

  return (
    <a 
      href={planUrl}
      onClick={handleClick}
      className={cn(hotmartClasses, commonClasses)}
    >
      {status === "loading" && <Loader2 className="w-6 h-6 mr-3 animate-spin" />}
      {buttonText}
    </a>
  );
}
