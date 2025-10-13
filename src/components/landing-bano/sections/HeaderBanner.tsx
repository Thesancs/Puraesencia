import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="p-2 bg-primary">
            <Alert className="text-center bg-primary text-white border-0">
                <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                <AlertDescription className="font-bold text-white [text-shadow:0_0_10px_#ffffff] animate-pulse">
                    ¡OFERTA ESPECIAL PARA TI!
                </AlertDescription>
            </Alert>
        </div>
    );
}
