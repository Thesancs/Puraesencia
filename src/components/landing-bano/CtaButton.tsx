"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CtaButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const { toast } = useToast();

  const handleClick = () => {
    console.log("[LandingBano] CTA clicked");
    setStatus("loading");

    // Simulate network request
    setTimeout(() => {
      // Simulate a random success/error outcome
      if (Math.random() > 0.9) { // 10% chance of error
          setStatus("error");
          toast({
              title: "Error de Pago",
              description: "No se pudo procesar tu pago. Por favor, intenta de nuevo.",
              variant: "destructive",
          });
          setTimeout(() => setStatus("idle"), 3000);
      } else {
        // On success, you would typically redirect
        // For now, just log it and reset the button.
        console.log("[LandingBano] Purchase successful (simulated)");
        window.location.href = "https://pay.hotmart.com"; // Example redirect
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
      className="px-4 sm:px-8 py-4 text-base sm:text-lg font-bold transition-transform transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105"
    >
      {status === "loading" && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {buttonText()}
    </Button>
  );
}
