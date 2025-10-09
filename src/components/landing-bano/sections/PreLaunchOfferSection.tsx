import { AlertTriangle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function PreLaunchOfferSection() {
    console.log('[PreLaunchOfferSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-white">
            <div className="container max-w-4xl mx-auto text-center space-y-8">
                <div className="max-w-3xl mx-auto">
                    <Sparkles className="w-12 h-12 mx-auto text-primary" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                        ¿Cuánto Vale Para Ti Todo Esto?
                    </h2>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        VOY A CELEBRAR EL PRE-LANZAMIENTO DE MI CURSO CONTIGO
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                        <b>Por eso podrás acceder al Curso Completo para Crear Sales de Baño Terapéuticas Únicas con el Método «PURA ESENCIA™” a un Super Precio de Pre-Lanzamiento.</b>
                    </p>
                </div>
                
                <Alert variant="default" className="max-w-2xl mx-auto text-yellow-900 border-yellow-400 bg-yellow-50">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <AlertTitle className="font-bold">¡Cupos Limitados!</AlertTitle>
                    <AlertDescription>
                        <b>¡Pero apúrate porque este Increíble Precio es solo para las Primeras Inscritas!</b>
                    </AlertDescription>
                </Alert>

                <div className="relative w-full max-w-2xl mx-auto mt-8 rounded-lg shadow-2xl aspect-square overflow-hidden">
                    <Image
                        src="/images/banner 1.png"
                        alt="Oferta especial del curso"
                        fill
                        className="object-cover"
                        data-ai-hint="course offer"
                    />
                </div>
            </div>
        </section>
    );
}
