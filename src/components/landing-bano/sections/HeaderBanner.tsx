import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <Alert className="text-center text-white border-0 rounded-none bg-primary">
            <AlertTriangle className="h-4 w-4 text-white" />
            <AlertDescription className="font-bold text-primary-foreground">
                50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
            </AlertDescription>
        </Alert>
    );
}
