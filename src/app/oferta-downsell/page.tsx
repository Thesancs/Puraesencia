"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/landing-bano/sections/Footer';
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from 'next/image';
import CtaButton from '@/components/landing-bano/CtaButton';

const plusBonuses = [
    "Lista de Proveedores Verificada",
    "Diseño de Etiquetas",
    "Acompañamiento Exclusivo",
    "Empaques que Enamoran",
    "Muestras que Venden"
];

function DownsellHeaderBanner() {
    return (
        <div className="p-2 bg-primary/80 backdrop-blur-sm sticky top-0 z-50">
            <Alert className="text-center bg-transparent text-white border-0">
                <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                <AlertDescription className="font-bold uppercase text-red-500 [text-shadow:0_0_10px_#ef4444] animate-pulse">
                    ¡Las plazas para la Oferta Esencial se han agotado!
                </AlertDescription>
            </Alert>
        </div>
    );
}

export default function OfertaDownsellPage() {
    const router = useRouter();

    const plusPrice = 7.90;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <DownsellHeaderBanner />
            <main className="flex-grow flex items-center justify-center p-4">
                <Card className="w-full max-w-md mx-auto bg-card/70 backdrop-blur-sm border-white/20 shadow-lg">
                    <CardHeader className='text-center'>
                         <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                            <Image 
                                src="/images/allproducts.svg"
                                alt="Oferta Plan Plus"
                                fill
                                className="object-contain"
                                data-ai-hint="plus plan offer"
                            />
                        </div>
                         <CardDescription className="text-center text-lg">
                            No te vayas con las manos vacías. <br/>
                            Mejora al 🔥 <span className='font-bold'>Plan Plus</span> por solo <span className="font-bold text-primary">${plusPrice.toFixed(2)} USD</span>
                         </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='mt-4 mb-2 font-semibold text-center'>Incluye estos 5 bonos:</p>
                        <ul className="mb-6 space-y-2 text-left">
                            {plusBonuses.map(bonus => (
                                <li key={bonus} className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> {bonus}</li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-4">
                            <CtaButton
                                text="✅ Sí, quiero el Plan Plus"
                                mobileText="Si, Quiero Plan Plus"
                                planUrl="https://pay.hotmart.com/L102361489O?off=5m74kmtt&checkoutMode=2"
                            />
                            <Button onClick={() => router.push('/oferta-especial')} size="lg" variant="outline" className="w-full py-3 h-auto">
                                🔙 Volver a la oferta anterior
                            </Button>
                             <Button onClick={() => router.push('/')} size="lg" variant="ghost" className="w-full py-3 h-auto mt-4">
                                No, gracias, volver a la página principal
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
