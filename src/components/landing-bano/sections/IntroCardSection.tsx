import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function IntroCardSection() {
    return (
        <section className="px-4 py-12 bg-background sm:py-16">
            <div className="container max-w-4xl mx-auto">
                <Card className="shadow-2xl bg-accent/30 border-accent/50 rounded-2xl">
                    <CardContent className="p-8 text-center md:p-12">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
                            TRANSFORMA TU <span className="px-2 py-1 rounded-md bg-accent">PASIÓN</span> EN UN <br className="sm:hidden" />
                            <span className="px-2 py-1 rounded-md bg-accent">NEGOCIO RENTABLE</span> <span className="px-2 py-1 rounded-md bg-accent">DESDE TU CASA</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-6 text-base text-muted-foreground sm:text-lg">
                            CON UN MÉTODO COMPROBADO POR CIENTOS DE EMPRENDEDORAS. TÚ TAMBIÉN PUEDES LOGRARLO SIN SALIR DE TU HOGAR.
                        </p>
                        <div className="mt-8">
                             <a href="#oferta">
                                <Button
                                    size="lg"
                                    className="h-auto px-10 py-4 font-bold transition-transform duration-300 ease-in-out transform rounded-lg shadow-xl hover:scale-105"
                                >
                                    QUIERO EMPEZAR AHORA
                                </Button>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
