"use client";
import { useState, useEffect } from 'react';
import { Gift, Clock, Star, BadgePercent, Loader2, Check } from 'lucide-react';
import CtaButton from '@/components/landing-bano/CtaButton';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CurrencyInfo {
    symbol: string;
    code: string;
    rate: number;
}

const essentialBonuses = [
    "BONO 1: Lista de Proveedores Verificada",
    "BONO 2: Diseño de Etiquetas para Personalizar"
];

const premiumBonuses = [
    "BONO 1: Lista de Proveedores Verificada",
    "BONO 2: Diseño de Etiquetas para Personalizar",
    "BONO 3: Acompañamiento Exclusivo",
    "BONO 4: Empaques que Enamoran",
    "BONO 5: Muestras que Venden",
    "BONO 6: Kit de Regalo"
];

export function OfferSection() {
    console.log('[OfferSection] rendered');

    const [timeLeft, setTimeLeft] = useState({
        minutes: 10,
        seconds: 0
    });
    
    const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo | null>(null);
    const [loadingCurrency, setLoadingCurrency] = useState(true);
    const essentialPriceUSD = 4.99;
    const premiumPriceUSD = 12.99;

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const geoResponse = await fetch('https://ipapi.co/json/');
                if (!geoResponse.ok) throw new Error('Could not fetch location');
                const geoData = await geoResponse.json();
                const currencyCode = geoData.currency;
                const currencySymbol = geoData.currency_symbol;

                if (currencyCode === 'USD') {
                    setCurrencyInfo({ symbol: '$', code: 'USD', rate: 1 });
                    setLoadingCurrency(false);
                    return;
                }

                const rateResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
                if (!rateResponse.ok) throw new Error('Could not fetch exchange rates');
                const rateData = await rateResponse.json();
                const rate = rateData.rates[currencyCode];

                if (rate) {
                    setCurrencyInfo({ symbol: currencySymbol, code: currencyCode, rate: rate });
                } else {
                     setCurrencyInfo({ symbol: '$', code: 'USD', rate: 1 });
                }
            } catch (error) {
                console.error("Currency conversion error:", error);
                 setCurrencyInfo({ symbol: '$', code: 'USD', rate: 1 });
            } finally {
                setLoadingCurrency(false);
            }
        };

        fetchCurrency();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const minutesToEnd = 9 - (now.getMinutes() % 10);
            const secondsToEnd = 59 - now.getSeconds();
            
            setTimeLeft({
                minutes: minutesToEnd,
                seconds: secondsToEnd,
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    const getDisplayPrice = (basePrice: number) => currencyInfo ? (basePrice * currencyInfo.rate).toFixed(2) : basePrice.toFixed(2);
    const displaySymbol = currencyInfo ? currencyInfo.symbol : '$';
    const displayCode = currencyInfo ? currencyInfo.code : 'USD';


    return (
        <section className="bg-muted/30 py-16 px-4 sm:py-24">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <div className="inline-flex items-center justify-center px-4 py-1 mx-auto mb-4 text-sm font-semibold tracking-wider text-green-800 uppercase bg-green-200 rounded-full">
                        <BadgePercent className="w-4 h-4 mr-2" />
                        Oferta Irresistible
                    </div>
                    <h2 className="text-3xl font-bold md:text-4xl text-primary">Elige el plan perfecto para ti</h2>
                    <p className="text-lg mt-2 text-muted-foreground">¡Tu oportunidad para emprender!</p>
                </div>

                <div className="p-6 my-6 text-center text-white rounded-lg bg-primary max-w-md mx-auto">
                    <div className="flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <p className='font-semibold'>La oferta termina en:</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2 mt-4">
                        <div className="p-3 text-center bg-white rounded-lg text-primary">
                            <span className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="block text-xs font-semibold">MINUTOS</span>
                        </div>
                        <span className="text-4xl font-bold">:</span>
                        <div className="p-3 text-center bg-white rounded-lg text-primary">
                            <span className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="block text-xs font-semibold">SEGUNDOS</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Essential Offer */}
                    <Card className="shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">🔥 OFERTA ESSENCIAL</CardTitle>
                            <CardDescription>Pagas 1 y llevas 2</CardDescription>
                            <div className="flex items-center justify-center mt-4">
                                {loadingCurrency ? <Loader2 className="w-8 h-8 animate-spin text-primary" /> : (
                                    <span className="ml-4 text-4xl font-bold text-primary">{displaySymbol}{getDisplayPrice(essentialPriceUSD)} <span className="text-2xl">{displayCode}</span></span>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-center text-muted-foreground mb-6">¡Tu oportunidad para emprender sin gastar mucho!</p>
                            <div className="p-4 rounded-lg bg-accent border-primary/20 mb-6">
                                <p className="font-bold text-center text-accent-foreground">Recibí GRATIS:</p>
                                <ul className="mt-4 space-y-3 text-accent-foreground">
                                    <li className="flex items-start"><Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" /><span>Guía de <b>Cremas Faciales y Corporales</b></span></li>
                                    <li className="flex items-start"><Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" /><span>Guía de <b>Bombas de Baño</b></span></li>
                                </ul>
                            </div>
                            <h3 className="font-bold text-center text-accent-foreground mb-4">🎁 Bonos incluidos:</h3>
                             <ul className="space-y-2 text-sm text-muted-foreground">
                                {essentialBonuses.map(bonus => (
                                  <li key={bonus} className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> {bonus.split(': ')[1]}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 mt-auto">
                            <CtaButton />
                        </div>
                    </Card>

                    {/* Premium Offer */}
                     <Card className="shadow-2xl transition-all duration-300 hover:scale-105 border-primary border-2 relative h-full flex flex-col">
                        <div className="absolute top-0 right-0 -mt-4 -mr-2">
                           <div className="bg-primary text-primary-foreground font-bold text-sm py-1 px-4 rounded-full shadow-lg transform rotate-[15deg]">
                                ★ RECOMENDADO ★
                            </div>
                        </div>
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">💎 OFERTA PREMIUM</CardTitle>
                            <CardDescription>Pagas 1 y llevas 6</CardDescription>
                             <div className="flex items-center justify-center mt-4">
                                {loadingCurrency ? <Loader2 className="w-8 h-8 animate-spin text-primary" /> : (
                                    <span className="ml-4 text-4xl font-bold text-primary">{displaySymbol}{getDisplayPrice(premiumPriceUSD)} <span className="text-2xl">{displayCode}</span></span>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-center text-muted-foreground mb-6">¡La experiencia completa para emprender como profesional!</p>
                            <div className="p-4 rounded-lg bg-accent border-primary/20 mb-6">
                                <p className="font-bold text-center text-accent-foreground">Recibí GRATIS:</p>
                                <ul className="mt-4 space-y-3 text-accent-foreground">
                                    <li className="flex items-start"><Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" /><span>Guía de <b>Cremas Faciales y Corporales</b></span></li>
                                    <li className="flex items-start"><Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" /><span>Guía de <b>Bombas de Baño</b></span></li>
                                </ul>
                            </div>
                             <h3 className="font-bold text-center text-accent-foreground mb-4">🎁 Bonos incluidos:</h3>
                             <ul className="space-y-2 text-sm text-muted-foreground">
                                {premiumBonuses.map(bonus => (
                                  <li key={bonus} className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> {bonus.split(': ')[1]}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 mt-auto">
                            <CtaButton />
                        </div>
                    </Card>
                </div>
                 <div className="flex flex-col items-center justify-center mt-12">
                    <div className="relative w-full max-w-sm h-14">
                        <Image
                            src="/images/compra segura.png"
                            alt="Métodos de pago aceptados"
                            fill
                            className="object-contain"
                            data-ai-hint="payment methods"
                        />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                         <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                         <span className="ml-2 font-bold text-yellow-600">4.8 de 5 estrellas</span>
                         <span className="ml-2 text-sm text-muted-foreground">(+41 valoraciones)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
