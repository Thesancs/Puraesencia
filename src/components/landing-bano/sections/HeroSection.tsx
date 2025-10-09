import Image from "next/image";

export function HeroSection() {
    console.log('[HeroSection] rendered');
    return (
        <section className="relative w-full h-auto">
            <div className="relative w-full aspect-[16/9]">
                <Image
                    src="/images/hero.png"
                    alt="Mujer disfrutando de un baño relajante con sales de baño"
                    fill
                    className="object-contain"
                    priority
                    data-ai-hint="woman relaxing bath salts"
                />
            </div>
        </section>
    );
}
