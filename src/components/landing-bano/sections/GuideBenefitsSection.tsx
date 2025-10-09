import { Card, CardContent } from "@/components/ui/card";
import { Check, Lightbulb } from "lucide-react";
import Image from "next/image";

const guideBenefits = [
    "Crear <b>30 fórmulas de Sales de baño irresistibles</b> que enamoran a primera vista y con <b>márgenes de ganancia del 300% al 500%</b>.",
    "Entender cómo actúa cada ingrediente – En el cuerpo, la mente y las emociones, para diseñar mezclas que <b>realmente generen bienestar</b>.",
    "Lanzar tu propia <b>línea artesanal desde cero</b> – Sin frustraciones, siguiendo un paso a paso claro y probado.",
    "<b>Comenzar a vender en semanas, no en meses</b> – Con estrategias simples para recuperar tu inversión rapidísimo.",
    "Crear productos que se vendan solos – Que tus clientas quieran regalar, recomendar y <b>volver a comprar una y otra vez</b>."
];

const bonusBenefit = "<b>Lista exclusiva de proveedores confiables en toda América</b> + tips para elegir insumos de calidad al mejor precio.";

export function GuideBenefitsSection() {
    return (
        <section className="relative px-4 py-16 sm:py-24">
            <div className="absolute inset-0">
                <Image 
                    src="/images/fotogrid (1).webp" 
                    alt="Fondo de sales de baño"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-background/80"></div>
            </div>
            <div className="container relative max-w-3xl mx-auto">
                <Card className="overflow-hidden shadow-2xl bg-card/90 rounded-2xl">
                    <CardContent className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-center text-primary font-headline sm:text-4xl">Con esta guía vas a poder..</h2>
                        <div className="mt-8 space-y-6">
                            {guideBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Check className="w-8 h-8 p-1 text-green-700 bg-green-200 rounded-full shrink-0" />
                                    <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: benefit }}></p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <p className="flex items-center justify-center gap-2 text-lg font-semibold text-accent-foreground">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                Y además recibirás:
                            </p>
                            <div className="flex items-start gap-4 mt-4">
                                <Check className="w-8 h-8 p-1 text-green-700 bg-green-200 rounded-full shrink-0" />
                                <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: bonusBenefit }}></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
