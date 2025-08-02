import Image from "next/image";

export function CertificateSection() {
    console.log('[CertificateSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">
                    Valida tus Conocimientos y Habilidades
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">
                    Una vez que concluyas el curso completo podrás descargar tu certificado personalizado con tu nombre, sin ningún costo extra.
                </p>
                <p className="max-w-2xl mx-auto mt-2 text-base text-gray-600 sm:text-lg">
                    El certificado te convierte en una Profesional en Aromaterapia Organica y Ecologica, lo cual te otorga credibilidad y confianza en tu trabajo.
                </p>
                <div className="relative inline-block mt-8 border-4 border-green-600/50 rounded-lg shadow-lg">
                    <Image
                        src="/images/certificado.png"
                        alt="Certificado de finalización del curso"
                        width={1152}
                        height={768}
                        className="rounded-lg"
                        data-ai-hint="course certificate"
                    />
                </div>
            </div>
        </section>
    );
}
