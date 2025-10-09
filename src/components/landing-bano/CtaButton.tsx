"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function CtaButton({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const { toast } = useToast();

  const handleClick = () => {
    console.log("[LandingBano] CTA clicked");
    setStatus("loading");

    setTimeout(() => {
      if (Math.random() > 0.9) { 
        setStatus("error");
        toast({
          title: "Error de Pago",
          description: "No se pudo procesar tu pago. Por favor, intenta de nuevo.",
          variant: "destructive",
        });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.log("[LandingBano] Purchase successful (simulated)");
        window.location.href = "https://pay.hotmart.com";
        setStatus("idle");
      }
    }, 2000);
  };

  const buttonText = () => {
    switch (status) {
      case "loading":
        return "Procesando...";
      case "error":
        return "Error - Intenta de Nuevo";
      case "idle":
      default:
        return "REGÍSTRATE AHORA DANDO CLIC AQUÍ";
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={status === "loading"}
      size="lg"
      className={cn(
        "w-full h-auto py-4 text-lg font-bold text-center text-white transition-transform duration-300 ease-in-out transform rounded-lg shadow-2xl bg-green-500 hover:bg-green-600 hover:scale-105 animate-pulse",
        className,
        {
            "bg-red-600 hover:bg-red-700": status === "error",
        }
      )}
    >
      {status === "loading" && <Loader2 className="w-6 h-6 mr-3 animate-spin" />}
      {buttonText()}
    </Button>
  );
}
