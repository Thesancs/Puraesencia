import Image from "next/image";
import CtaButton from "../CtaButton";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative px-4 pt-12 pb-16 text-center sm:pt-20 sm:pb-24">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl font-headline">
                    Empieza desde cero y arma tu propia línea de <span className="text-primary">sales de baño terapéuticas</span> que nadie más tiene
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
                    Te enseño cómo hacer mezclas que realmente ayudan, cómo ahorrar en ingredientes sin perder calidad y cómo hacer que cada sal que preparas sea tan buena que tus clientas van a querer repetir la compra sin pensarlo.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto mt-10">
                    <Card className="overflow-hidden shadow-2xl">
                        <CardContent className="p-0">
                             <div className="relative w-full aspect-video">
                                <Image 
                                    src="/images/foto 1 pagina.webp"
                                    alt="Mujer creando sales de baño terapéuticas en su cocina"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="bath salts entrepreneur"
                                    priority
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                 <div className="max-w-md mx-auto mt-10">
                    <CtaButton />
                </div>
            </div>
        </section>
    );
}
