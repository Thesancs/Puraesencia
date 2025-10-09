import { Check, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


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
            <div className="container max-w-4xl mx-auto space-y-8 text-left">
                <div className="text-center">
                    <Heart className="w-12 h-12 mx-auto text-primary" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                    Método Pura Esencia™
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg font-semibold text-balance text-muted-foreground sm:text-xl">
                        Crea, con ingredientes naturales, tu propia línea de sales terapéuticas que fideliza clientes, genera ventas constantes y posiciona tu marca como una referencia en bienestar.
                    </p>
                </div>
                
                <Card className="shadow-lg">
                    <CardContent className="p-6 md:p-8">
                        <div className="space-y-4 text-base text-gray-700 sm:text-lg">
                            <p>
                                Todo empezó en una etapa que no le deseo a nadie.
                            </p>
                            <p>
                                Estaba agotada, sin dinero, estresada con todo, y mi cabeza no paraba ni un segundo. La rutina me asfixiaba y solo quería una salida. Algo que pudiera hacer desde casa, con sentido, que me ayudara a recuperar mi paz… y mis ingresos.
                            </p>
                            <p>
                                Un día, navegando entre recetas naturales, encontré una fórmula casera de sales de baño. La hice sin esperar mucho. La probé. Se la regalé a unas personas cercanas. Y entonces pasó algo inesperado: <b>a todos les encantó.</b>
                            </p>
                            <p className="font-semibold">
                                Empezaron a pedirme más. Querían otros aromas, otros efectos, más frascos. Querían comprar.
                            </p>
                            <p>
                                Ahí entendí que tenía algo grande entre manos. Me lancé de lleno. Estudié Aromaterapia, aprendí formulación artesanal y comencé a crear mezclas reales, pensadas para aliviar problemas que yo misma sufría — y que veía a muchas personas a mi alrededor enfrentar:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-4 pt-6 sm:grid-cols-2">
                            {problemas.map((problema, index) => (
                                <div key={index} className="flex items-center">
                                    <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                                    <p className="text-base font-medium text-muted-foreground">{problema}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 space-y-4 text-base text-gray-700 sm:text-lg">
                            <p className="font-semibold">
                                No estaba creando solo un producto. Estaba creando alivio. Conexión. Bienestar real.
                            </p>
                            <p>
                                Y hoy, con el método PURA ESENCIA™, quiero enseñarte cómo transformar una idea sencilla en una línea de productos naturales que enamoran, venden y posicionan tu marca con propósito.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
