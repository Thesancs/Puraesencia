import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="absolute top-0 left-0 right-0 z-10 p-2">
            <Alert className="text-center bg-black/30 text-white border-white/20 backdrop-blur-sm rounded-lg shadow-lg">
                <AlertTriangle className="h-4 w-4 text-white" />
                <AlertDescription className="font-bold text-white">
                    50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
                </AlertDescription>
            </Alert>
        </div>
    );
}
