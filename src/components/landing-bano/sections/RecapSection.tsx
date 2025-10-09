import Image from "next/image";
import { PackageCheck } from "lucide-react";
import CtaButton from "../CtaButton";

export function RecapSection() {
    console.log('[RecapSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-primary text-primary-foreground">
            <div className="container max-w-4xl mx-auto text-center space-y-6">
                <PackageCheck className="w-12 h-12 mx-auto" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Todo lo que recibirás por solo $9.90 Dólares
                </h2>
                <p className="text-lg sm:text-xl text-primary-foreground/80">
                    Imagina tener <b>tu propia línea de sales de baño terapéuticas</b>, sin cometer errores ni perder material.
                    Eso es exactamente lo que te llevarás con el <b>curso completo paso a paso</b>.
                </p>
                <p className="text-xl font-bold sm:text-2xl">
                    <b>Aumenta tus ventas con el método “PURA ESENCIA™”.</b>
                </p>
                <div className="relative w-full max-w-xl mx-auto mt-8 overflow-hidden rounded-lg shadow-2xl aspect-square">
                    <Image
                        src="/images/banner 1.png"
                        alt="Resumen de la oferta del curso"
                        fill
                        className="object-cover"
                        data-ai-hint="course offer summary"
                    />
                </div>
                 <div className="max-w-md mx-auto pt-8">
                    <CtaButton className="bg-white text-primary hover:bg-gray-100" />
                </div>
            </div>
        </section>
    );
}
