"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Star } from "lucide-react";


const testimonials = [
  { imageUrl: "/images/testimonials/depoimento 1.png", aiHint: "testimonial screenshot" },
  { imageUrl: "/images/testimonials/depoimento 2.png", aiHint: "customer review" },
  { imageUrl: "/images/testimonials/depoimento 3.png", aiHint: "social media comment" },
  { imageUrl: "/images/testimonials/depoimento 4.png", aiHint: "testimonial screenshot" },
  { imageUrl: "/images/testimonials/depoimento 5.png", aiHint: "customer review" },
  { imageUrl: "/images/testimonials/depoimento 6.png", aiHint: "customer review" },
];

export function TestimonialsSection() {
    console.log('[TestimonialsSection] rendered');
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <Star className="w-12 h-12 mx-auto text-primary" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Ellas ya están transformando su pasión en un negocio rentable...</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">Descubre lo que dicen nuestras alumnas:</p>
                </div>
                <Carousel 
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-sm mx-auto mt-12 sm:max-w-xl md:max-w-4xl lg:max-w-6xl"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="overflow-hidden shadow-lg">
                                        <CardContent className="relative flex items-center justify-center p-0 aspect-square">
                                            <Image
                                                src={testimonial.imageUrl}
                                                alt={`Testimonio ${index + 1}`}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                data-ai-hint={testimonial.aiHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden -left-4 sm:flex" />
                    <CarouselNext className="hidden -right-4 sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
