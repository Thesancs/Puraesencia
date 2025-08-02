import Image from "next/image";

const galleryItems = [
    {
        title: "Recetas para el Alivio del Dolor Muscular y Articular",
        imageUrl: "/images/fotogrid (1).webp",
        aiHint: "bath salts jars"
    },
    {
        title: "Recetas para Reducción del Estrés y la Ansiedad",
        imageUrl: "/images/fotogrid (2).webp",
        aiHint: "lavender chamomile bath salts"
    },
    {
        title: "Recetas para Dormir y Combatir el Insomnio",
        imageUrl: "/images/fotogrid (3).webp",
        aiHint: "woman mixing ingredients"
    },
    {
        title: "Recetas para Hidratación y Cuidado de la Piel",
        imageUrl: "/images/fotogrid (4).webp",
        aiHint: "skincare flatlay"
    },
    {
        title: "Recetas para Mejora de la Concentración y Claridad Mental",
        imageUrl: "/images/fotogrid (5).webp",
        aiHint: "natural remedy bottles"
    },
    {
        title: "Recetas para Recuperación Post-Entrenamiento",
        imageUrl: "/images/fotogrid (6).webp",
        aiHint: "woman foot bath"
    }
];

export function GallerySection() {
    console.log('[GallerySection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">
                    ¡AQUÍ TE LO ENSEÑAMOS TODO!
                </h2>
                <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <div className="relative w-48 h-48 overflow-hidden border-4 border-green-500 rounded-full shadow-lg">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.aiHint}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
