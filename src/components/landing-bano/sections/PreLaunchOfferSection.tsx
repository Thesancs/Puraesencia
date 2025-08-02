import { AlertTriangle } from "lucide-react";

export function PreLaunchOfferSection() {
    console.log('[PreLaunchOfferSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
                    ¿Cuánto Vale Para Ti Todo Esto?
                </h2>
                <h3 className="text-2xl font-bold tracking-tight text-green-800 sm:text-3xl font-headline">
                    VOY A CELEBRAR EL PRE LANZAMIENTO DE MI CURSO CONTIGO
                </h3>
                <p className="text-base text-gray-700 sm:text-lg">
                    Por eso podrás acceder al Curso Completo para Crear Sales de Baño Terapéuticas Únicas con el Método «PURA ESENCIA™” a un Super Precio de Pre Lanzamiento.
                </p>
                <div className="inline-flex items-center gap-2 p-4 font-bold text-red-600 bg-red-100 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-sm sm:text-base">¡Pero apúrate porque este Increíble Precio es solo para las Primeras Inscritas y los cupos son Limitados!</span>
                </div>
            </div>
        </section>
    );
}
