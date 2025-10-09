"use client";
import { useState, useEffect } from 'react';
import { Gift, Clock, Star, BadgePercent, Loader2 } from 'lucide-react';
import CtaButton from '@/components/landing-bano/CtaButton';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface CurrencyInfo {
    symbol: string;
    code: string;
    rate: number;
}

export function OfferSection() {
    console.log('[OfferSection] rendered');

    const [timeLeft, setTimeLeft] = useState({
        minutes: 10,
        seconds: 0
    });
    
    const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo | null>(null);
    const [loadingCurrency, setLoadingCurrency] = useState(true);
    const basePriceUSD = 9.90;
    const originalPriceUSD = 49.90;

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                // First, get user's country from their IP
                const geoResponse = await fetch('https://ipapi.co/json/');
                if (!geoResponse.ok) throw new Error('Could not fetch location');
                const geoData = await geoResponse.json();
                const countryCode = geoData.country_code;
                const currencyCode = geoData.currency;
                const currencySymbol = geoData.currency_symbol;

                if (currencyCode === 'USD') {
                    setCurrencyInfo({ symbol: '$', code: 'USD', rate: 1 });
                    setLoadingCurrency(false);
                    return;
                }

                // Second, get the exchange rate
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
        // Timer effect
        const timer = setInterval(() => {
            // This is a dummy timer, it will always show a value around 10 minutes.
            // For a real countdown, you'd need to sync with a server-side timestamp.
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
    
    const displayPrice = currencyInfo ? (basePriceUSD * currencyInfo.rate).toFixed(2) : basePriceUSD.toFixed(2);
    const displayOriginalPrice = currencyInfo ? (originalPriceUSD * currencyInfo.rate).toFixed(2) : originalPriceUSD.toFixed(2);
    const displaySymbol = currencyInfo ? currencyInfo.symbol : '$';
    const displayCode = currencyInfo ? currencyInfo.code : 'USD';


    return (
        <section className="bg-muted/30 py-16 px-4 sm:py-24">
            <div className="container max-w-2xl mx-auto">
                <Card className="shadow-2xl">
                    <CardHeader className="text-center">
                        <div className="inline-flex items-center justify-center px-4 py-1 mx-auto mb-4 text-sm font-semibold tracking-wider text-green-800 uppercase bg-green-200 rounded-full">
                            <BadgePercent className="w-4 h-4 mr-2" />
                            Oferta Irresistible
                        </div>
                        <CardTitle className="text-3xl font-bold md:text-4xl">SOLO POR HOY, PAGAS 1 Y LLEVAS 6</CardTitle>
                        <CardDescription className="text-lg">¡Tu oportunidad para emprender!</CardDescription>
                         <div className="flex items-center justify-center mt-4">
                            {loadingCurrency ? (
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            ) : (
                                <>
                                    <span className="text-2xl font-bold text-gray-400 line-through">{displaySymbol}{displayOriginalPrice}</span>
                                    <span className="ml-4 text-4xl font-bold text-primary">{displaySymbol}{displayPrice} <span className="text-2xl">{displayCode}</span></span>
                                </>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="p-6 my-6 text-center text-white rounded-lg bg-primary">
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

                        <div className="p-4 rounded-lg bg-accent border-primary/20">
                            <p className="font-bold text-center text-accent-foreground">Además, recibí GRATIS:</p>
                            <ul className="mt-4 space-y-3 text-accent-foreground">
                                <li className="flex items-start">
                                    <Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" />
                                    <span>Guía completa para hacer <b>Cremas Faciales y Corporales</b></span>
                                </li>
                                <li className="flex items-start">
                                    <Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" />
                                    <span>Guía completa para hacer <b>Bombas de Baño</b></span>
                                </li>
                                <li className="flex items-start">
                                    <Gift className="w-5 h-5 mt-1 mr-3 text-primary shrink-0" />
                                    <span>Guía completa para hacer <b>Baños de Hierbas</b></span>
                                </li>
                            </ul>
                        </div>
                         <div className="mt-8">
                            <CtaButton />
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <div className="relative w-full max-w-sm h-14">
                                <Image
                                    src="/images/compra segura.png"
                                    alt="Métodos de pago aceptados"
                                    fill
                                    className="object-contain"
                                    data-ai-hint="payment methods"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                             <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                             <span className="ml-2 font-bold text-yellow-600">4.8 de 5 estrellas</span>
                             <span className="ml-2 text-sm text-muted-foreground">(+41 valoraciones)</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

    