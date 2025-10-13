import { Alert, AlertDescription } from "@/components/ui/alert"

export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="p-2 text-center text-white bg-primary">
            <p className="font-bold">
                50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
            </p>
        </div>
    );
}