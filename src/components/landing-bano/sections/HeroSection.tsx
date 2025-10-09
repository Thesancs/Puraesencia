import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative px-4 pt-12 pb-16 text-center sm:pt-20 sm:pb-24">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl font-headline">
                        EN <span className="text-primary">24 HORAS</span> PODRÁS PREPARAR TUS PRIMERAS SALES TERAPEUTICAS QUE ALIVIAN EL DOLOR Y GENERAN <span className="text-primary">+USD$900 al mes!</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
                        Mega Kit <b>+30 fórmulas exclusivas</b> EDICIÓN EMPRENDEDOR
                    </p>
                </div>
                 <div className="max-w-md mx-auto mt-10">
                    <a href="https://pay.hotmart.com" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <div className="relative w-full aspect-[2/1] cursor-pointer">
                            <Image
                                src="/images/banner 1.png"
                                alt="Registrate ahora"
                                fill
                                className="object-contain"
                                data-ai-hint="call to action button"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
