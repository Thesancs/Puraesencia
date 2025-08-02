import Image from "next/image";

export function RecapSection() {
    console.log('[RecapSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-green-50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
                    TODO LO QUE RECIBIRÁS POR SOLO $9.90 DÓLARES
                </h2>
                <p className="text-lg text-gray-700 sm:text-xl">
                    Imagina tener <b>tu propia línea de sales de baño terapéuticas</b>, sin cometer errores ni perder material.
                </p>
                <p className="text-lg text-gray-700 sm:text-xl">
                    Eso es exactamente lo que te llevarás con el <b>curso completo paso a paso</b>.
                </p>
                <p className="text-xl font-bold text-green-700 sm:text-2xl">
                    <b>Aumenta tus ventas con el método “PURA ESENCIA™”.</b>
                </p>
                <div className="relative w-full max-w-xl mx-auto mt-8 aspect-square">
                    <Image
                        src="/images/banner 1.png"
                        alt="Resumen de la oferta del curso"
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint="course offer summary"
                    />
                </div>
            </div>
        </section>
    );
}
