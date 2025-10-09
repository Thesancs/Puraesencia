import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const bonuses = [
    {
        bonus: "BONO 1",
        title: "Lista de Proveedores Verificada",
        description: "Acceso directo a proveedores confiables que ofrecen ingredientes de alta calidad a buen precio. Olvídate de perder tiempo buscando o de arriesgarte con malas compras.",
        imageUrl: "/images/bonos/bono 1.png"
    },
    {
        bonus: "BONO 2",
        title: "Diseño de Etiquetas para Personalizar",
        description: "Editá, imprimí y hacé que tu marca se vea profesional desde el primer día.",
        imageUrl: "/images/bonos/bono 2.png"
    },
    {
        bonus: "BONO 3",
        title: "Acompañamiento Exclusivo",
        description: "No estarás sola. Tendrás acceso a soporte directo y personalizado paso a paso, para avanzar con confianza mientras creas tu línea.",
        imageUrl: "/images/bonos/bono 3.png"
    },
    {
        bonus: "BONO 4",
        title: "Guía Práctica: Empaques que Enamoran",
        description: "Aprende a crear empaques artesanales y profesionales sin gastar mucho. Te enseño materiales ecológicos, combinaciones y detalles que hacen que tu marca destaque.",
        imageUrl: "/images/empaques que enamoran bono.png"
    },
    {
        bonus: "BONO 5",
        title: "Muestras que Venden: Tus Primeras Fórmulas",
        description: "Accede a 5 fórmulas simples, efectivas y de alta demanda, ideales para crear muestras pequeñas, conquistar tus primeras clientas y empezar a vender rápido.",
        imageUrl: "/images/tus primeras.png"
    },
    {
        bonus: "BONO 6",
        title: "Guía para Crear tu Primer Kit de Regalo",
        description: "Aprende a combinar, presentar y vender tus sales como regalos irresistibles para fechas especiales. Incluye estrategias para kits temáticos y empaques atractivos.",
        imageUrl: "/images/bono 6.png"
    }
];

export function BonusSection() {
    console.log('[BonusSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">BONOS EXCLUSIVOS</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">Acceso inmediato a estas herramientas para acelerar tu éxito.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    {bonuses.map((bonus, index) => (
                        <Card key={index} className="overflow-hidden transition-transform duration-300 ease-in-out transform bg-card hover:-translate-y-2 hover:shadow-2xl">
                             <CardHeader className="p-0">
                                <div className="relative w-full h-64">
                                    <Image
                                        src={bonus.imageUrl}
                                        alt={`Mockup para ${bonus.title}`}
                                        fill
                                        className="object-cover"
                                        data-ai-hint="ebook cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-left">
                                <p className="flex items-center text-sm font-semibold text-primary">
                                    <Gift className="w-4 h-4 mr-2" />
                                    {bonus.bonus}
                                </p>
                                <CardTitle className="mt-2 text-xl font-bold text-foreground">{bonus.title.toUpperCase()}</CardTitle>
                                <p className="mt-2 text-base text-muted-foreground">{bonus.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
