"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/landing-bano/sections/Footer';
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from 'next/image';


const premiumBonuses = [
    "Lista de Proveedores Verificada",
    "Diseño de Etiquetas para Personalizar",
    "Acompañamiento Exclusivo",
    "Empaques que Enamoran",
    "Muestras que Venden",
    "Kit de Regalo"
];

function OfertaHeaderBanner() {
    return (
        <div className="p-2 bg-primary/80 backdrop-blur-sm sticky top-0 z-50">
            <Alert className="text-center bg-transparent text-white border-0">
                <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                <AlertDescription className="font-bold uppercase text-red-500 [text-shadow:0_0_10px_#ef4444] animate-pulse">
                    ¡OFERTA ESPECIAL PARA TI!
                </AlertDescription>
            </Alert>
        </div>
    );
}


export default function OfertaEspecialPage() {
    const router = useRouter();

    const premiumPrice = 9.90;

    const handlePurchase = (planUrl: string) => {
        window.location.href = planUrl;
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <OfertaHeaderBanner />
            <main className="flex-grow flex items-center justify-center p-4">
                 <Card className="w-full max-w-md mx-auto bg-card/70 backdrop-blur-sm border-white/20 shadow-lg">
                    <CardHeader className="text-center p-4">
                        <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                            <Image 
                                src="/images/allproducts.svg"
                                alt="Oferta Plan Premium"
                                fill
                                className="object-cover"
                                data-ai-hint="premium plan offer"
                            />
                        </div>
                        <CardDescription className="text-center text-lg">
                            ¿Quieres mejorar tu experiencia? <br />
                            Por solo <span className="font-bold text-primary">${premiumPrice.toFixed(2)} USD</span> puedes obtener el <strong>Plan Premium</strong> con TODOS estos bonos:
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="mb-6 space-y-2 text-left">
                            {premiumBonuses.map(bonus => (
                                <li key={bonus} className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> {bonus}</li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-4">
                            <Button onClick={() => handlePurchase("https://pay.hotmart.com/L102361489O?off=fw29apzl")} size="lg" className="w-full py-3 h-auto">
                                🔓 Sí, quiero el Plan Premium
                            </Button>
                            <Button onClick={() => router.push('/oferta-downsell')} size="lg" variant="ghost" className="w-full py-3 h-auto">
                                ➡️ No, gracias
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
