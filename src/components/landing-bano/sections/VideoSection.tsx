import Image from "next/image";

export function VideoSection() {
    console.log('[VideoSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="relative w-full max-w-3xl mx-auto aspect-video">
                <Image 
                    src="/images/foto 2 pagina.webp"
                    alt="Placeholder para video o imagen de producto"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="product lifestyle"
                />
            </div>
        </section>
    );
}
