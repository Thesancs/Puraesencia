import Image from "next/image";
import CtaButton from "../CtaButton";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative w-full text-center text-white h-svh">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/hero.png"
                    alt="Mujer disfrutando de un baño relajante con sales de baño"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="woman relaxing bath salts"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl font-headline">
                            EN <span className="text-primary">24 HORAS</span> PODRÁS PREPARAR TUS PRIMERAS SALES TERAPEUTICAS QUE ALIVIAN EL DOLOR Y GENERAN <span className="text-primary">+USD$900 al mes!</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-200 sm:text-xl">
                            Mega Kit <b>+30 fórmulas exclusivas</b> EDICIÓN EMPRENDEDOR
                        </p>
                         <div className="max-w-md mx-auto pt-8">
                            <CtaButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
