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
                            <Image 
                                src="/images/foto 2 pagina.webp"
                                alt="Imagen de producto"
                                fill
                                className="object-cover"
                                data-ai-hint="product lifestyle"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
