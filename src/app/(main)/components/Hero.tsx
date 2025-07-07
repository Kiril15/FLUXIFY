import Image from "next/image";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

const vectors = [
    { className: "absolute object-contain z-[-1] sm:size-auto md:w-[400px] h-[650px]"},
    { className: "absolute object-contain rotate-90 right-[29vw] z-[-1] sm:size-auto md:w-[400px] h-[650px]"},
    { className: "absolute object-contain rotate-[220deg] right-[31vw] z-[-1] sm:size-auto md:w-[400px] h-[650px]"},
]

const Hero = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-16 mt-[120px] sm:mt-[10px]">
            <div className="w-full lg:max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF] animate-pulse drop-shadow-[0_0_20px_rgba(192,183,232,0.5)] mb-6 leading-tight">
                    Вітаємо у майбутньому з FLUXIFY
                </h1>
                <p className="hidden sm:block text-base sm:text-lg text-gray-200 mb-8">
                    Від концепції до запуску: створюємо швидкі, безпечні сайти з інтуїтивним інтерфейсом, що конвертують відвідувачів у клієнтів
                </p>
                <div className="flex justify-center sm:justify-center lg:justify-start">
                    <Button customClass="">
                        <Link href="/price" className="text-black">Дізнатися прайс</Link>
                    </Button>
                </div>
            </div>

            <div className="relative w-full flex justify-center sm:justify-end items-center mx-auto">
                {vectors.map((v, i) => (
                    <Image
                        key={i}
                        src="/vector/vector.png"
                        alt="vector"
                        width={400}
                        height={650}
                        className={v.className}
                    />
                ))}
                <div className="relative w-full max-w-[90%] h-[250px] sm:max-w-[600px] sm:h-[400px] z-10">
                    <Image
                    src="/hero/hero.jpg"
                    alt="hero"
                    fill
                    className="object-cover rounded-[50px_50px_50px_50%] shadow-[1px_1px_19px_9px_rgba(0,0,0,0.75)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;