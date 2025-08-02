import { Check } from "lucide-react";

const problemas = [
    "Dolores musculares y articulares",
    "Ansiedad, insomnio y estrés",
    "Agotamiento mental",
    "Piel seca, deshidratada y sin vida"
];

export function PersonalStorySection() {
    console.log('[PersonalStorySection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto space-y-4 text-left sm:space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-center text-green-800 sm:text-4xl font-headline">
                MÉTODO PURA ESENCIA™
                </h2>
                <p className="text-lg font-bold text-center">
                    Crea, con ingredientes naturales, tu propia línea de sales terapéuticas que fideliza clientes, genera ventas constantes y posiciona tu marca como una referencia en bienestar.
                </p>
                <div className="space-y-4 text-base text-gray-700 sm:text-lg">
                    <p>
                        Todo empezó en una etapa que no le deseo a nadie.
                    </p>
                    <p>
                        Estaba agotada, sin dinero, estresada con todo, y mi cabeza no paraba ni un segundo. La rutina me asfixiaba y solo quería una salida. Algo que pudiera hacer desde casa, con sentido, que me ayudara a recuperar mi paz… y mis ingresos.
                    </p>
                    <p>
                        Un día, navegando entre recetas naturales, encontré una fórmula casera de sales de baño. La hice sin esperar mucho. La probé. Se la regalé a unas personas cercanas. Y entonces pasó algo inesperado: a todos les encantó.
                    </p>
                    <p>
                        Empezaron a pedirme más. Querían otros aromas, otros efectos, más frascos. Querían comprar.
                    </p>
                    <p>
                        Ahí entendí que tenía algo grande entre manos. Me lancé de lleno. Estudié Aromaterapia, aprendí formulación artesanal y comencé a crear mezclas reales, pensadas para aliviar problemas que yo misma sufría — y que veía a muchas personas a mi alrededor enfrentar:
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 pt-4 sm:grid-cols-2">
                    {problemas.map((problema, index) => (
                        <div key={index} className="flex items-start p-2">
                            <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-base text-gray-700 sm:text-lg">{problema}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4 space-y-4 text-base text-gray-700 sm:text-lg">
                    <p>
                        No estaba creando solo un producto. Estaba creando alivio. Conexión. Bienestar real.
                    </p>
                    <p>
                        Y hoy, con el método PURA ESENCIA™, quiero enseñarte cómo transformar una idea sencilla en una línea de productos naturales que enamoran, venden y posicionan tu marca con propósito.
                    </p>
                </div>
            </div>
        </section>
    );
}
