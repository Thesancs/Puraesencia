import { AlertTriangle } from "lucide-react";
import Image from "next/image";

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
                <div className="inline-block p-4 font-bold text-green-800 bg-green-100 border-l-4 border-green-500 rounded-lg">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-green-700" />
                        <span className="text-sm sm:text-base">¡Pero apúrate porque este Increíle Precio es solo para las Primeras Inscritas y los cupos son Limitados!</span>
                    </div>
                </div>
                <div className="relative w-full max-w-xl mx-auto mt-8 aspect-square">
                    <Image
                        src="/images/banner 1.png"
                        alt="Oferta especial del curso"
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint="course offer"
                    />
                </div>
            </div>
        </section>
    );
}
