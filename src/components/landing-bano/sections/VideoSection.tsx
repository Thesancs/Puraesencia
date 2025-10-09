import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function VideoSection() {
    console.log('[VideoSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="container">
                <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
                    <CardContent className="p-0">
                        <div className="relative w-full aspect-video">
                            {/* Replace with actual video player */}
                            <Image 
                                src="/images/foto 2 pagina.webp"
                                alt="Placeholder para video o imagen de producto"
                                fill
                                className="object-cover"
                                data-ai-hint="product lifestyle"
                            />
                             <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <button aria-label="Play video">
                                    <svg className="w-16 h-16 text-white transition-transform duration-300 transform sm:w-24 sm:h-24 hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
