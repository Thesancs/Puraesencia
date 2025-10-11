import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="p-2 bg-primary">
            <Alert className="text-center bg-primary text-white border-0">
                <AlertTriangle className="h-4 w-4 text-white" />
                <AlertDescription className="font-bold text-white">
                    50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
                </AlertDescription>
            </Alert>
        </div>
    );
}
