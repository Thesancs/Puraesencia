import Image from "next/image";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


export function CertificateSection() {
    console.log('[CertificateSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="container mx-auto text-center">
                 <div className="max-w-3xl mx-auto">
                    <Award className="w-12 h-12 mx-auto text-primary" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                        Valida tus Conocimientos y Habilidades
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                        Una vez que concluyas el curso completo podrás descargar tu certificado personalizado con tu nombre, sin ningún costo extra.
                    </p>
                    <p className="max-w-2xl mx-auto mt-2 text-base text-muted-foreground">
                        El certificado te convierte en una Profesional en Aromaterapia Organica y Ecologica, lo cual te otorga credibilidad y confianza en tu trabajo.
                    </p>
                </div>
                <Card className="max-w-4xl mx-auto mt-10 overflow-hidden shadow-2xl">
                    <CardContent className="p-0">
                        <div className="relative w-full aspect-[1.5/1]">
                            <Image
                                src="/images/certificado.png"
                                alt="Certificado de finalización del curso"
                                fill
                                className="object-cover"
                                data-ai-hint="course certificate"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
