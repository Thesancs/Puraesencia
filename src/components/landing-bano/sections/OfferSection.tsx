"use client";
import { useState, useEffect } from 'react';
import { Gift, Clock } from 'lucide-react';
import CtaButton from '@/components/landing-bano/CtaButton';

export function OfferSection() {
    console.log('[OfferSection] rendered');

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        // Set countdown to a fixed future date to avoid hydration issues
        const difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft: { minutes?: number; seconds?: number } = {};

        if (difference > 0) {
            timeLeft = {
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            // Offer ended, but let's show a static time for demo
            timeLeft = {
                minutes: 10,
                seconds: 0
            }
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<{ minutes?: number; seconds?: number }>({});

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Set initial time after mount to avoid server/client mismatch
        if (Object.keys(timeLeft).length === 0) {
            setTimeLeft(calculateTimeLeft());
        }

        return () => clearTimeout(timer);
    });
    
    // Fallback for initial render before useEffect runs
    const initialMinutes = 10;
    const initialSeconds = 0;


    return (
        <section className="bg-[#F0F8F0] py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Sales de Baño Terapéuticas + 6 BONUS GRATIS</h2>
                    <div className="flex items-center justify-center mt-2">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-2 text-gray-600">(41)</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-xl text-gray-500 line-through">$49.90</span>
                        <span className="ml-2 text-2xl font-bold text-green-600">$9.90</span>
                    </div>
                    <div className="mt-4 inline-flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-full">
                        <Gift className="w-5 h-5 mr-2" />
                        50% OFF - Solo 20 Cupos Disponibles
                    </div>
                </div>

                <div className="bg-[#694e33] text-white p-6 rounded-2xl shadow-lg">
                    <div className="text-center">
                        <p className="font-bold text-lg">¡OFERTA IRRESISTIBLE!</p>
                        <h3 className="text-4xl font-bold my-2">SOLO POR HOY, PAGAS 1 Y LLEVAS 6</h3>
                        <div className="flex items-center justify-center my-4">
                            <Clock className="w-5 h-5 mr-2" />
                            <p>La oferta termina en:</p>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                            <div className="bg-green-500 p-3 rounded-lg text-center">
                                <span className="text-4xl font-bold">{timeLeft.minutes !== undefined ? String(timeLeft.minutes).padStart(2, '0') : String(initialMinutes).padStart(2, '0')}</span>
                                <span className="block text-xs">MINUTOS</span>
                            </div>
                            <span className="text-4xl font-bold">:</span>
                            <div className="bg-green-500 p-3 rounded-lg text-center">
                                <span className="text-4xl font-bold">{timeLeft.seconds !== undefined ? String(timeLeft.seconds).padStart(2, '0') : String(initialSeconds).padStart(2, '0')}</span>
                                <span className="block text-xs">SEGUNDOS</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 bg-[#7a5f43] p-4 rounded-lg border border-dashed border-gray-400">
                        <p className="font-bold text-center">Además, recibí GRATIS:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                                <Gift className="w-5 h-5 mr-2 text-yellow-400 shrink-0" />
                                <span>Guía completa para hacer Cremas Faciales y Corporales</span>
                            </li>
                            <li className="flex items-start">
                                <Gift className="w-5 h-5 mr-2 text-yellow-400 shrink-0" />
                                <span>Guía completa para hacer Bombas de Baño</span>
                            </li>
                            <li className="flex items-start">
                                <Gift className="w-5 h-5 mr-2 text-yellow-400 shrink-0" />
                                <span>Guía completa para hacer Baños de Hierbas</span>
                            </li>
                        </ul>
                    </div>
                     <div className="mt-6">
                        <CtaButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
