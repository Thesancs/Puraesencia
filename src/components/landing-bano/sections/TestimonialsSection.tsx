
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
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    return (
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-headline">ELLAS YA ESTÁN TRANSFORMANDO SU PASIÓN EN UN NEGOCIO RENTABLE...</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">Descubre lo que dicen nuestras alumnas:</p>
                </div>
                <Carousel 
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-xs mx-auto mt-12 sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 basis-[90%] md:pl-6 sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="relative flex items-center justify-center p-0 aspect-square">
                                            <Image
                                                src={testimonial.imageUrl}
                                                alt={`Testimonio ${index + 1}`}
                                                fill
                                                className="object-contain rounded-lg"
                                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                                                data-ai-hint={testimonial.aiHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
