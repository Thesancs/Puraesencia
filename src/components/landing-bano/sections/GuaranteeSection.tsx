import Image from "next/image";

export function GuaranteeSection() {
    console.log('[GuaranteeSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">
                    TU COMPRA ES 100 % SEGURA
                </h2>
                <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                    Garantía Incondicional de Satisfacción:
                </h3>
                <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">
                    Queremos que compres con total tranquilidad y confianza sabiendo que este curso es real, sin trucos ni promesas vacías, solo conocimientos genuinos y soporte real para tu negocio de Aromaterapia Organica y Ecologica.
                </p>
                <p className="max-w-2xl mx-auto mt-2 text-base text-gray-600 sm:text-lg">
                    Por eso te ofrecemos una Garantía Completa de Satisfacción de 7 días. Si no estás completamente satisfecha por cualquier motivo, te reembolsaremos el 100% de tu inversión.
                </p>
                <div className="relative inline-block mt-8">
                    <Image
                        src="/images/garantia-7-dias-480x564.webp"
                        alt="Sello de garantía de 7 días"
                        width={300}
                        height={300}
                        className="rounded-lg"
                        data-ai-hint="satisfaction guarantee badge"
                    />
                </div>
            </div>
        </section>
    );
}
