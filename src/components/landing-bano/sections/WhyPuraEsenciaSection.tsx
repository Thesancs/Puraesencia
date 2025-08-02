import { Rocket, ArrowRight, Check, FlaskConical, Leaf, Package, Brain, ShieldAlert } from "lucide-react";

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
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto space-y-4 text-left sm:space-y-6">
                <div className="flex items-center justify-center text-center">
                    <Rocket className="w-8 h-8 mr-3 text-primary shrink-0" />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">¿POR QUÉ “PURA ESENCIA™” ES DIFERENTE?</h2>
                </div>
                <div className="space-y-4 text-base text-gray-700 sm:text-lg">
                    <p>
                        Ya no basta con hacer <b>"una sal que huele rico"</b>.
                    </p>
                    <p>
                        El mercado está lleno de <b>productos lindos... pero vacíos</b>. Cosas que se ven bien, pero <b>no hacen nada real</b>. Por eso nació el método <b>PURA ESENCIA™</b>, un sistema creado para que tú desarrolles una <b>línea de sales terapéuticas auténticas</b>, que tus clientas <b>amen</b>, <b>recuerden</b>… y <b>quieran volver a comprar</b>.
                    </p>
                </div>
                <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary shrink-0" />
                    <p className="text-base font-semibold text-gray-900 sm:text-lg">
                        Aquí no se trata de <b>copiar recetas de internet</b>. Se trata de <b>crear con intención</b>.
                    </p>
                </div>
                <p className="text-base font-bold text-gray-800 sm:text-lg"><b>El método incluye:</b></p>
                <div className="space-y-2 sm:space-y-4">
                    {metodoIncluye.map((item, index) => (
                        <div key={index} className="flex items-start p-2">
                            <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-base text-gray-700 sm:text-lg" dangerouslySetInnerHTML={{ __html: item }}></p>
                        </div>
                    ))}
                </div>
                <p className="pt-4 text-base font-bold text-gray-800 sm:text-lg">Además, te enseño cómo aplicar:</p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    {comoAplicar.map((item, index) => (
                        <div key={index} className="flex items-start p-2">
                            <item.icon className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-base text-gray-700 sm:text-lg" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        </div>
                    ))}
                </div>
                <div className="p-4 mt-6 bg-green-100 border-l-4 border-green-500">
                     <div className="flex">
                        <div className="shrink-0">
                            <ShieldAlert className="w-6 h-6 text-green-700"/>
                        </div>
                        <div className="ml-3">
                            <p className="text-base font-bold text-green-800 sm:text-lg">Y SI ERES EMPRENDEDORA DE VERDAD...</p>
                            <p className="mt-2 text-base text-green-700 sm:text-lg">
                            Sabes que <b>no basta con hacer algo bonito</b>.<br/>
                            <b>Tu producto tiene que funcionar, emocionar y dejar huella.</b><br/>
                            <b>Eso es lo que vas a lograr con PURA ESENCIA™.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
