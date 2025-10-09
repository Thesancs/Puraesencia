"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const premiumBonuses = [
    "Lista de Proveedores Verificada",
    "Diseño de Etiquetas para Personalizar",
    "Acompañamiento Exclusivo",
    "Empaques que Enamoran",
    "Muestras que Venden",
    "Kit de Regalo"
];

const plusBonuses = [
    "Lista de Proveedores Verificada",
    "Diseño de Etiquetas",
    "Acompañamiento Exclusivo",
    "Empaques que Enamoran",
    "Muestras que Venden"
];

interface CurrencyInfo {
    symbol: string;
    code: string;
    rate: number;
}

interface UpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPurchase: (plan: 'plus' | 'premium') => void;
    plusPrice: number;
    premiumPrice: number;
    currencyInfo: CurrencyInfo | null;
    loadingCurrency: boolean;
}

export default function UpsellModal({ 
    isOpen, 
    onClose, 
    onPurchase, 
    plusPrice, 
    premiumPrice,
    currencyInfo,
    loadingCurrency
}: UpsellModalProps) {
    const [modalStep, setModalStep] = useState<'upsell1' | 'upsell2'>('upsell1');

    const handleClose = () => {
        setModalStep('upsell1');
        onClose();
    };
    
    const getDisplayPrice = (basePrice: number) => currencyInfo ? (basePrice * currencyInfo.rate).toFixed(2) : basePrice.toFixed(2);
    const displaySymbol = currencyInfo ? currencyInfo.symbol : '$';

    const renderUpsell1 = () => (
        <div className='text-center'>
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-2">🎁 ¡OFERTA ESPECIAL PARA TI!</DialogTitle>
                <DialogDescription className="text-center text-lg">
                    ¿Quieres mejorar tu experiencia? <br />
                    Por solo <span className="font-bold text-primary">{displaySymbol}{getDisplayPrice(premiumPrice)} USD</span> puedes obtener el <strong>Plan Premium</strong> con TODOS estos bonos:
                </DialogDescription>
            </DialogHeader>
            <ul className="my-6 space-y-2 text-left">
                {premiumBonuses.map(bonus => (
                    <li key={bonus} className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> {bonus}</li>
                ))}
            </ul>
            <div className="flex flex-col gap-4">
                <Button onClick={() => {
                    console.log('[UpsellModal] Plan Premium accepted');
                    onPurchase('premium');
                }} size="lg" className="w-full py-3 h-auto">
                    🔓 Sí, quiero el Plan Premium
                </Button>
                <Button onClick={() => setModalStep('upsell2')} size="lg" variant="ghost" className="w-full py-3 h-auto">
                    ➡️ No, continuar con Plan Esencial
                </Button>
            </div>
        </div>
    );

    const renderUpsell2 = () => (
        <div className='text-center'>
            <DialogHeader>
                 <DialogTitle className="text-2xl font-bold text-center mb-2 text-destructive">❌ CUPONES AGOTADOS PARA PLAN ESENCIAL</DialogTitle>
                 <DialogDescription className="text-center text-lg">
                    Pero... ¡tenemos algo mejor para ti! <br/>
                    🔥 <span className='font-bold'>Plan Plus</span> por solo <span className="font-bold text-primary">{displaySymbol}{getDisplayPrice(plusPrice)} USD</span>
                 </DialogDescription>
            </DialogHeader>
            <p className='mt-4 mb-2 font-semibold'>Incluye estos 5 bonos:</p>
            <ul className="mb-6 space-y-2 text-left">
                {plusBonuses.map(bonus => (
                    <li key={bonus} className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> {bonus}</li>
                ))}
            </ul>
            <div className="flex flex-col gap-4">
                <Button onClick={() => {
                    console.log('[UpsellModal] Plan Plus accepted');
                    onPurchase('plus');
                }} size="lg" className="w-full py-3 h-auto">
                    ✅ Aceptar esta oferta
                </Button>
                <Button onClick={() => setModalStep('upsell1')} size="lg" variant="outline" className="w-full py-3 h-auto">
                    🔙 Volver a oferta anterior
                </Button>
            </div>
        </div>
    );

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md bg-white">
                {modalStep === 'upsell1' ? renderUpsell1() : renderUpsell2()}
            </DialogContent>
        </Dialog>
    );
}
