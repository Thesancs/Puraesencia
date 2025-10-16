"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card';
import { Check, AlertTriangle } from 'lucide-react';
import { Footer } from '@/components/landing-bano/sections/Footer';
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from 'next/image';
import CtaButton from '@/components/landing-bano/CtaButton';
import { useCurrency } from '@/hooks/useCurrency';


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
    const { getPrice, currencySymbol } = useCurrency();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const premiumPrice = 9.90;

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
                                className="object-contain"
                                data-ai-hint="premium plan offer"
                            />
                        </div>
                        <CardDescription className="text-center text-lg">
                            ¿Quieres mejorar tu experiencia? <br />
                            Por solo <span className="font-bold text-primary">${isClient ? getPrice(premiumPrice).toLocaleString() : '...'} {isClient ? currencySymbol : ''}</span> puedes obtener el <strong>Plan Premium</strong> con TODOS estos bonos:
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="mb-6 space-y-2 text-left">
                            {premiumBonuses.map(bonus => (
                                <li key={bonus} className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> {bonus}</li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-4">
                            <CtaButton
                                text="🔓 Sí, quiero el Plan Premium"
                                mobileText="Quiero, Plan Premium"
                                planUrl="https://pay.hotmart.com/L102361489O?off=5m74kmtt&checkoutMode=10"
                            />
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
