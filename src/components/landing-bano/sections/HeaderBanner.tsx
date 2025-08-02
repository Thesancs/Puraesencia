import { AlertTriangle } from "lucide-react";

export function HeaderBanner() {
    console.log('[HeaderBanner] rendered');
    return (
        <div className="bg-green-600 text-white p-2 text-center text-sm font-bold flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span className="text-xs sm:text-sm">ATENCIÓN: DESCUENTO RELÁMPAGO + 6 BONOS GRATIS PARA LAS PRIMERAS INSCRITAS</span>
        </div>
    );
}
