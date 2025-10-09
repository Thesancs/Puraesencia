import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function GuaranteeSection() {
    console.log('[GuaranteeSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
            <div className="container grid items-center gap-12 mx-auto md:grid-cols-2">
                <div className="relative w-full max-w-sm mx-auto aspect-square">
                    <Image
                        src="/images/garantia1.png"
                        alt="Sello de garantía de 7 días"
                        fill
                        className="object-contain"
                        data-ai-hint="satisfaction guarantee badge"
                    />
                </div>
                <div className="text-center md:text-left">
                    <ShieldCheck className="w-12 h-12 text-primary max-md:mx-auto" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                        Tu Compra es 100% Segura
                    </h2>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                        Garantía Incondicional de Satisfacción de 7 Días
                    </h3>
                    <p className="max-w-xl mt-4 text-lg text-muted-foreground max-md:mx-auto">
                        Queremos que compres con total tranquilidad y confianza sabiendo que este curso es real, sin trucos ni promesas vacías, solo conocimientos genuinos y soporte real para tu negocio de Aromaterapia Organica y Ecologica.
                    </p>
                    <p className="max-w-xl mt-2 text-base text-muted-foreground max-md:mx-auto">
                        Si no estás completamente satisfecha por cualquier motivo, te reembolsaremos el 100% de tu inversión.
                    </p>
                </div>
            </div>
        </section>
    );
}
