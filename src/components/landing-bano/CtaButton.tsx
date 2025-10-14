"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Plan = 'esencial' | 'plus' | 'premium';

export default function CtaButton({ 
  className, 
  text, 
  planUrl
}: { 
  className?: string, 
  text?: string,
  planUrl: string
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const { toast } = useToast();

  const buttonText = text || "REGÍSTRATE AHORA DANDO CLIC AQUÍ";

  return (
    <a 
      href={planUrl}
      className={cn(
        "hotmart-fb hotmart__button-checkout",
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "w-full h-auto py-4 text-lg font-bold text-center text-primary-foreground transition-transform duration-300 ease-in-out transform rounded-lg shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 animate-pulse",
        className,
        {
            "bg-destructive hover:bg-destructive/90": status === "error",
        }
      )}
    >
      {status === "loading" && <Loader2 className="w-6 h-6 mr-3 animate-spin" />}
      {buttonText}
    </a>
  );
}
