import Image from "next/image";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                    src="/images/hero.png"
                    alt="Mujer disfrutando de un baño relajante con sales de baño"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                    data-ai-hint="woman relaxing bath salts"
                />
            </div>
        </section>
    );
}
