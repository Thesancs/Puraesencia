const loQueObtienes = [
    "Curso completo Paso a Paso: Aprende a Crear 30 fórmulas de Sales de Baño Terapéuticas Únicas. Cada una con un Propósito Terapéutico Claro (Relajación, Sueño, Dolor, Energía, Enfoque, etc.).",
    "Guia Practica de Presentación y Empaque : Para que tus productos luzcan Profesionales desde el Primer Día.",
    "Fórmulas Personalizadas con el Método «Esencia Activa™» : Aprende a combinar Aromas de forma Armónica para crear Productos únicos que cautiven a tus clientes y se Diferencien en el Mercado.",
    "Estrategias para Para Fidelizar a tus Clientes: Con Muestras, Storytelling y Experiencia Sensorial.",
    "Plan de Producción Sin Desperdicios: Optimiza tus tiempos y materiales con técnicas que te ayudarán a Producir más Rápido, evitando errores costosos.",
    "Acceso de por vida y actualizaciones: Podrás consultar el contenido siempre que lo necesites, y recibirás cualquier actualización futura Sin Costo Adicional."
];

const bonosGratis = [
    "BONO 1 : Lista de Proveedores Verificada de Ingredientes de Alta Calidad y Buen Precio.",
    "BONO 2 : Plantillas de Etiquetas Profesionales Listas para Imprimir.",
    "BONO 3 : Acompañamiento Exclusivo en Nuestra Plataforma Virtual.",
    "BONO 4 : Guía Practica : Empaques Ecológicos que Enamoran , Etiquetas con Estilo y Detalles que hacen que Tu marca destaque",
    "BONO 5 : Muestras que Venden: Tus Primeras Fórmulas para Ganar Clientes en Tiempo Record.",
    "BONO 6 : Guía para Crear tu Primer Kit de Regalo Artesanal."
];

export function WhatYouGetSection() {
    console.log('[WhatYouGetSection] rendered');
    return (
        <section className="px-4 py-8 sm:py-12 bg-[#F0F8F0]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-headline">
                ESTO ES LO QUE OBTIENES AL INSCRIBIRTE
                </h2>
                <div className="grid grid-cols-1 gap-4 mt-6 text-left">
                    {loQueObtienes.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="mr-2 text-green-500">✅</span>
                            <p className="text-base text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
                 <h3 className="mt-8 text-2xl font-bold tracking-tight text-center text-gray-900 font-headline">
                    🎁 Y además te llevas estos BONOS GRATIS:
                </h3>
                <div className="grid grid-cols-1 gap-4 mt-4 text-left">
                    {bonosGratis.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="mr-2">✨</span>
                            <p className="text-base text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
