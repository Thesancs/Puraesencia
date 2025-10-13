import { Alert, AlertDescription } from "@/components/ui/alert"

export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="p-2 bg-primary/80 backdrop-blur-sm sticky top-0 z-50">
             <Alert className="text-center bg-transparent text-white border-0">
                <AlertDescription className="font-bold uppercase text-red-500 [text-shadow:0_0_10px_#ef4444] animate-pulse">
                    50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
                </AlertDescription>
            </Alert>
        </div>
    );
}
