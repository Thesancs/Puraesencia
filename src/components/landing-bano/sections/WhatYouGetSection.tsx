import { Check, Gift } from "lucide-react";

const loQueObtienes = [
    "<b>Curso completo paso a paso</b>: Aprende a crear <b>30 fórmulas de sales de baño terapéuticas únicas</b>, cada una con un <b>propósito terapéutico claro</b> (relajación, sueño, dolor, energía, enfoque, etc.).",
    "<b>Guía práctica de presentación y empaque</b>: Para que tus productos <b>luzcan profesionales desde el primer día</b>.",
    "<b>Fórmulas personalizadas con el método «PURA ESENCIA™»</b>: Aprende a <b>combinar aromas de forma armónica</b> para crear <b>productos únicos que cautiven a tus clientes y se diferencien en el mercado</b>.",
    "<b>Estrategias para fidelizar a tus clientes</b>: Con <b>muestras, storytelling y experiencia sensorial</b>.",
    "<b>Plan de producción sin desperdicios</b>: Optimiza tus <b>tiempos y materiales</b> con técnicas que te ayudarán a <b>producir más rápido y evitar errores costosos</b>.",
    "<b>Acceso de por vida y actualizaciones</b>: Podrás <b>consultar el contenido siempre que lo necesites</b>, y recibirás <b>actualizaciones futuras sin costo adicional</b>."
];

const bonosGratis = [
    "BONO 1: Lista de proveedores verificada de ingredientes de <b>alta calidad y buen precio</b>.",
    "BONO 2: Plantillas de etiquetas profesionales listas para imprimir.",
    "BONO 3: Acompañamiento exclusivo en nuestra plataforma virtual.",
    "BONO 4: Guía práctica: <b>Empaques ecológicos que enamoran</b>, etiquetas con estilo y detalles que hacen que tu marca destaque.",
    "BONO 5: Muestras que venden: Tus primeras fórmulas para <b>ganar clientes en tiempo récord</b>.",
    "BONO 6: Guía para <b>crear tu primer kit de regalo artesanal</b>."
];

export function WhatYouGetSection() {
    console.log('[WhatYouGetSection] rendered');
    return (
        <section className="px-4 py-8 sm:py-12 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-headline">
                ESTO ES LO QUE OBTIENES AL INSCRIBIRTE
                </h2>
                <div className="grid grid-cols-1 gap-4 mt-6 text-left">
                    {loQueObtienes.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: item }}></p>
                        </div>
                    ))}
                </div>
                 <h3 className="mt-8 text-2xl font-bold tracking-tight text-center text-gray-900 font-headline">
                    Y además te llevas estos BONOS GRATIS:
                </h3>
                <div className="grid grid-cols-1 gap-4 mt-4 text-left">
                    {bonosGratis.map((item, index) => (
                        <div key={index} className="flex items-start">
                             <Gift className="w-6 h-6 mr-2 text-green-500 shrink-0" />
                            <p className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: item }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
