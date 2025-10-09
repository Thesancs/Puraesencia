import Image from "next/image";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                    src="/images/hero1.png"
                    alt="Banner principal del curso Pura Esencia"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                    data-ai-hint="course banner"
                />
            </div>
        </section>
    );
}
