import Image from "next/image";

const bonuses = [
    {
        bonus: "BONO 1",
        title: "Lista de Proveedores Verificada",
        description: "Acceso directo a proveedores confiables que ofrecen ingredientes de alta calidad a buen precio. Olvídate de perder tiempo buscando o de arriesgarte con malas compras.",
        imageUrl: "/images/provedores certificados.png"
    },
    {
        bonus: "BONO 2",
        title: "Diseño de Etiquetas para Personalizar",
        description: "Editá, imprimí y hacé que tu marca se vea profesional desde el primer día.",
        imageUrl: "/images/plantillas de.png"
    },
    {
        bonus: "BONO 3",
        title: "Acompañamiento Exclusivo",
        description: "No estarás sola. Tendrás acceso a soporte directo y personalizado paso a paso, para avanzar con confianza mientras creas tu línea.",
        imageUrl: "/images/bono 3.png"
    },
    {
        bonus: "BONO 4",
        title: "Guía Práctica: Empaques que Enamoran",
        description: "Aprende a crear empaques artesanales y profesionales sin gastar mucho. Te enseño materiales ecológicos, combinaciones y detalles que hacen que tu marca destaque.",
        imageUrl: "/images/empaques que enamoran bono.png"
    },
    {
        bonus: "BONO 5",
        title: "Muestras que Venden: Tus Primeras Fórmulas",
        description: "Accede a 5 fórmulas simples, efectivas y de alta demanda, ideales para crear muestras pequeñas, conquistar tus primeras clientas y empezar a vender rápido.",
        imageUrl: "/images/tus primeras.png"
    },
    {
        bonus: "BONO 6",
        title: "Guía para Crear tu Primer Kit de Regalo",
        description: "Aprende a combinar, presentar y vender tus sales como regalos irresistibles para fechas especiales. Incluye estrategias para kits temáticos y empaques atractivos.",
        imageUrl: "/images/bono 6.png"
    }
];

export function BonusSection() {
    console.log('[BonusSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">ADEMÁS SI ERES DE LAS PRIMERAS PERSONAS EN INSCRIBIRSE AL CURSO RECIBES ESTOS BONOS ADICIONALES TOTALMENTE GRATIS</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">Acceso inmediato a estas herramientas para acelerar tu éxito.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="overflow-hidden bg-[#EADCCB] rounded-2xl shadow-sm flex flex-col">
                            <div className="relative w-full h-64">
                                <Image
                                    src={bonus.imageUrl}
                                    alt={`Mockup para ${bonus.title}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint="ebook cover"
                                />
                            </div>
                            <div className="flex-1 p-6 text-left">
                                <p className="text-sm font-semibold text-gray-600">{bonus.bonus}</p>
                                <h3 className="mt-2 text-xl font-bold text-[#694e33]">{bonus.title.toUpperCase()}</h3>
                                <p className="mt-2 text-base text-gray-700">{bonus.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
