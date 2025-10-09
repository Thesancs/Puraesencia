import { Rocket, ArrowRight, Check, FlaskConical, Leaf, Package, Brain, ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metodoIncluye = [
    "<b>30 fórmulas listas para usar</b>, cada una diseñada con un <b>objetivo terapéutico claro</b>: relajación, descanso, alivio, enfoque, energía y más.",
    "<b>Guías paso a paso</b> sobre <b>ingredientes, proporciones, combinaciones y beneficios</b> — explicado de forma <b>sencilla y directa</b>.",
    "<b>Manual práctico de empaque y presentación</b>, para que tu producto <b>destaque</b> y se vea <b>profesional desde el primer día</b>.",
    "<b>Estrategias para fidelizar clientas</b>, usando <b>muestras, experiencia sensorial y storytelling que conecta de verdad</b>.",
    "Y lo mejor: <b>sin máquinas caras, sin experiencia previa y sin perder tiempo en cursos eternos</b>."
];

const comoAplicar = [
    { icon: FlaskConical, text: "<b>Propiedades reales de los ingredientes</b>" },
    { icon: Leaf, text: "<b>Formulación consciente y con propósito</b>" },
    { icon: Package, text: "<b>Presentación atractiva que vende sola</b>" },
    { icon: Brain, text: "<b>Venta con enfoque emocional</b>" }
];

export function WhyPuraEsenciaSection() {
    console.log('[WhyPuraEsenciaSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
            <div className="container max-w-4xl mx-auto space-y-8 text-left">
                <div className="text-center">
                    <Rocket className="w-12 h-12 mx-auto text-primary shrink-0" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">¿Por qué “Pura Esencia™” es Diferente?</h2>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-6 md:p-8 space-y-6">
                        <div className="space-y-4 text-lg text-center text-muted-foreground">
                            <p>
                                Ya no basta con hacer <b>"una sal que huele rico"</b>.
                            </p>
                            <p className="font-semibold text-foreground">
                                El mercado está lleno de <b>productos lindos... pero vacíos</b>. Cosas que se ven bien, pero <b>no hacen nada real</b>. Por eso nació el método <b>PURA ESENCIA™</b>, un sistema creado para que tú desarrolles una <b>línea de sales terapéuticas auténticas</b>, que tus clientas <b>amen</b>, <b>recuerden</b>… y <b>quieran volver a comprar</b>.
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-center text-lg font-semibold text-primary">
                            <ArrowRight className="w-6 h-6 mr-3 shrink-0" />
                            <p>Aquí no se trata de <b>copiar recetas de internet</b>. Se trata de <b>crear con intención</b>.</p>
                        </div>

                         <div className="p-6 rounded-lg bg-background">
                            <h3 className="text-xl font-bold text-center text-foreground"><b>El método incluye:</b></h3>
                            <div className="mt-6 space-y-4">
                                {metodoIncluye.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <Check className="w-6 h-6 mt-1 mr-4 text-green-500 shrink-0" />
                                        <p className="text-base text-muted-foreground sm:text-lg" dangerouslySetInnerHTML={{ __html: item }}></p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-center text-foreground">Además, te enseño cómo aplicar:</h3>
                            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
                                {comoAplicar.map((item, index) => (
                                    <Card key={index} className="text-center">
                                      <CardContent className="p-6">
                                        <item.icon className="w-8 h-8 mx-auto text-primary shrink-0" />
                                        <p className="mt-4 text-base font-semibold text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                      </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        
                        <Alert variant="default" className="bg-green-100 border-green-500 text-green-900">
                             <ShieldAlert className="w-6 h-6 text-green-700"/>
                            <AlertTitle className="text-lg font-bold">Y SI ERES EMPRENDEDORA DE VERDAD...</AlertTitle>
                            <AlertDescription className="mt-2 text-base">
                                Sabes que <b>no basta con hacer algo bonito</b>.<br/>
                                <b>Tu producto tiene que funcionar, emocionar y dejar huella.</b><br/>
                                <b>Eso es lo que vas a lograr con PURA ESENCIA™.</b>
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
