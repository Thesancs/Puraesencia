import { Alert, AlertDescription } from "@/components/ui/alert"

export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="p-2 text-center text-white bg-primary">
            <p className="font-bold uppercase text-red-500 [text-shadow:0_0_10px_#ef4444]">
                50% OFF SOLO POR HOY — ACCESO INMEDIATO A LA GUÍA!✨
            </p>
        </div>
    );
}
