import { Check, ChevronDown, ShieldCheck } from "lucide-react";
import CtaButton from "@/components/landing-bano/CtaButton";
import Image from "next/image";

export function PricingSection() {
    console.log('[PricingSection] rendered');
    return (
        <section 
            className="relative px-4 py-16 bg-[#F0F8F0] sm:py-24"
        >
             <div 
                className="absolute top-0 left-0 w-full overflow-hidden leading-none"
                style={{ lineHeight: 0 }}
             >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px] sm:h-[250px]">
                    <path fill="#ffffff" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <p className="text-xs font-semibold text-gray-700 uppercase sm:text-sm">
                    ¡ACCEDE HOY MISMO! CON EL PRECIO DE PRE LANZAMIENTO DESDE CUALQUIER PARTE DEL MUNDO, PAGANDO EN DOLARES O SU EQUIVALENTE EN TU MONEDA LOCAL
                </p>
                <p className="mt-6 text-base font-bold sm:text-lg">PRECIO REGULAR</p>
                <p className="text-4xl font-bold text-gray-500 line-through sm:text-5xl">$49.90</p>
                <p className="mt-4 text-xl font-bold text-red-600 sm:text-2xl">PRECIO RELÁMPAGO POR PRE LANZAMIENTO</p>
                <p className="mt-2 text-7xl font-bold text-green-600 sm:text-8xl">$9.90</p>
                <p className="text-2xl font-semibold text-green-600 sm:text-3xl">DÓLARES</p>
                <p className="mt-4 text-lg font-bold text-red-600 sm:text-xl">UNICO PAGO</p>
                <p className="text-lg font-bold text-red-600 sm:text-xl">SOLO PARA LAS PRIMERAS INSCRITAS</p>
                <div className="flex justify-center mt-4">
                    <ChevronDown className="w-12 h-12 text-blue-400 animate-bounce" />
                </div>
                <div className="mt-6">
                    <CtaButton />
                </div>
                <div className="mt-8 space-y-6">
                    <p className="text-xs font-bold text-red-600 uppercase sm:text-sm">IMPORTANTE: NUESTRO SISTEMA HACE EL CAMBIO A TU MONEDA LOCAL AUTOMÁticAMENTE A UNA TASA DE CAMBIO PREFERENCIAL ANTES DE TU REGISTRO</p>
                    <p className="text-sm font-semibold text-green-700 uppercase sm:text-base">ACCESO VITALICIO A LA PLATAFORMA EDUCATIVA</p>
                    <div className="flex items-center justify-center mt-4">
                        <Image
                            src="/images/compra segura.png"
                            alt="Métodos de pago aceptados"
                            width={768}
                            height={153}
                            className="object-contain"
                            data-ai-hint="payment methods"
                        />
                    </div>
                     <div className="relative flex flex-col items-center justify-center pt-16">
                         <ShieldCheck className="absolute w-32 h-32 text-green-500 opacity-20 sm:w-40 sm:h-40" />
                         <Check className="absolute w-16 h-16 text-green-600 sm:w-20 sm:h-20" />
                     </div>
                     <p className="z-10 pt-20 text-lg font-bold text-green-700 sm:pt-24 sm:text-2xl">COMPRA 100% SEGURA</p>
                    
                    <p className="max-w-md pt-8 mx-auto text-sm font-semibold sm:text-base">
                        REALIZA TU COMPRA CON TOTAL CONFIANZA, RAPIDEZ, SEGURIDAD Y SIN COMPLICACIONES CON NUESTRA PLATAFORMA DE PAGO PROTEGIDA MEDIANTE ENCRIPTACIÓN SSL Y RESPALDADA POR VISA. MASTERCARD, AMERICAN EXPRESS Y PAYPAL
                    </p>
                     <p className="pt-4 font-bold text-red-600 uppercase">IMPORTANTE:</p>
                    <p className="max-w-md mx-auto text-sm font-semibold sm:text-base">
                        AL FINALIZAR TU COMPRA, RECIBIRÁS DE FORMA AUTOMÁTICA TODOS LOS ACCESOS A LA PLATAFORMA EDUCATIVA MEDIANTE CORREO ELECTRÓNICO
                    </p>
                </div>
            </div>
             <div 
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                style={{ lineHeight: 0, transform: 'rotate(180deg)' }}
             >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px] sm:h-[250px]">
                     <path fill="#ffffff" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
        </section>
    );
}
