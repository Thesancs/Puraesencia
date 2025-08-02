import Image from "next/image";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative flex justify-center px-4 pt-12 text-center sm:pt-20">
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-headline">
                Empieza desde cero y arma tu propia línea de sales de baño terapéuticas que nadie más tiene, usando el método “PURA ESENCIA™” para vender el triple sin complicarte.
                </h1>
                <p className="max-w-2xl mx-auto text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Te enseño cómo hacer mezclas que realmente ayudan, cómo ahorrar en ingredientes sin perder calidad y cómo hacer que cada sal que preparas sea tan buena que tus clientas van a querer repetir la compra sin pensarlo.                </p>
                <div className="relative w-full max-w-xl mx-auto aspect-[4/3]">
                    <Image 
                        src="/images/foto 1 pagina.webp"
                        alt="Mujer creando sales de baño terapéuticas en su cocina"
                        fill
                        className="object-cover rounded-lg shadow-lg border-4 border-green-600/50"
                        data-ai-hint="bath salts entrepreneur"
                    />
                </div>
            </div>
        </section>
    );
}
