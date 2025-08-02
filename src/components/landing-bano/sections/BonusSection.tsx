import Image from "next/image";

const bonuses = [
    { 
        title: "BONO 1: Lista de Proveedores Verificada", 
        description: "Acceso directo a proveedores confiables que ofrecen ingredientes de alta calidad a buen precio. Olvídate de perder tiempo buscando o de arriesgarte con malas compras. Aquí encontrarás todo lo que necesitas: sales minerales puras, aceites esenciales certificados, envases ecológicos y más.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/provedores certificados.png"
    },
    { 
        title: "BONO 2: Plantillas de Etiquetas Profesionales", 
        description: "Haz que tus productos luzcan increíbles desde el primer día, sin saber diseño ni pagar a un profesional. Incluye plantillas editables listas para imprimir, personalizar y elevar el valor percibido de tu marca. Ideal para lanzar rápido, con una imagen limpia, moderna y profesional.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/plantillas de.png"
    },
    { 
        title: "BONO 3: Acompañamiento Exclusivo en Plataforma Privada", 
        description: "No estarás sola. Tendrás acceso a soporte directo y personalizado paso a paso, para avanzar con confianza mientras creas tu línea.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/bono 3.png"
    },
    { 
        title: "BONO 4: Guía Práctica: Empaques que Enamoran", 
        description: "Aprende a crear empaques artesanales y profesionales sin gastar mucho. Te enseño materiales ecológicos, combinaciones de colores, formas y detalles que hacen que tu marca destaque y transmita calidad.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/empaques que enamoran bono.png"
    },
    { 
        title: "BONO 5: Muestras que Venden: Tus Primeras Fórmulas", 
        description: "Accede a 5 fórmulas simples, efectivas y de alta demanda, ideales para crear muestras pequeñas, conquistar tus primeras clientas y empezar a vender rápido.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/tus primeras.png"
    },
    { 
        title: "BONO 6: Guía para Crear tu Primer Kit de Regalo Artesanal", 
        description: "Aprende a combinar, presentar y vender tus sales como regalos irresistibles para fechas especiales. Incluye estrategias para kits temáticos, empaques atractivos y precios que aumentan tu ticket promedio. Ideal para Día de la Madre, Navidad, ferias o lanzamientos.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/bono 6.png"
    }
];

export function BonusSection() {
    console.log('[BonusSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">ADEMÁS SI ERES DE LAS PRIMERAS PERSONAS EN INSCRIBIRSE AL CURSO RECIBES ESTOS BONOS ADICIONALES TOTALMENTE GRATIS</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">Acceso inmediato a estas herramientas para acelerar tu éxito.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-white border-4 border-green-600/50 rounded-2xl shadow-sm">
                            <div className="relative w-full h-48 max-w-xs mb-4">
                                <Image
                                    src={bonus.imageUrl}
                                    alt={`Mockup para ${bonus.title}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    data-ai-hint="ebook cover"
                                />
                            </div>
                            <div className="flex-1 text-center">
                                <p className="text-lg font-bold text-primary">{bonus.title}</p>
                                <p className="mt-2 text-sm text-gray-700 sm:text-base">{bonus.description}</p>
                                <p className="mt-3 font-bold text-red-600">{bonus.callout}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
