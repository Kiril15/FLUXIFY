"use client"
import CardPrice from "@/components/ui/cardPrice/CardPrice"
import Button from "@/components/ui/button/Button"
import Link from "next/link"
import sites from "../info/sites"
import ads from "../info/ads"
import support from "../info/support"

const PriceClient = () => {
    return (
        <>
            <section className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF] animate-pulse drop-shadow-[0_0_20px_rgba(192,183,232,0.5)] mb-6 leading-tight">
                    Тарифи та послуги
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Оберіть рішення, яке найкраще відповідає вашим цілям. Усі пакети можна адаптувати під ваші потреби.
                </p>
            </section>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8E7CC3] via-[#6C5FA9] to-[#4C3C79] drop-shadow-[0_0_10px_rgba(75,60,121,0.4)] mb-6">Технічна підтримка</h2>
            <CardPrice priceCard={support}/>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8E7CC3] via-[#6C5FA9] to-[#4C3C79] drop-shadow-[0_0_10px_rgba(75,60,121,0.4)] mb-6">Створення сайтів</h2>
            <CardPrice priceCard={sites}/>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8E7CC3] via-[#6C5FA9] to-[#4C3C79] drop-shadow-[0_0_10px_rgba(75,60,121,0.4)] mb-6">Реклама</h2>
            <CardPrice priceCard={ads}/>
            <section className="text-center">
                <h3 className="text-2xl mb-4 font-semibold text-white">Не знайшли потрібного пакета?</h3>
                <p className="text-gray-400 mb-6">
                    Залиште заявку, і ми підготуємо індивідуальну пропозицію.
                </p>
                <div className="flex justify-center">
                    <Button>
                        <Link href="/contact">Отримати консультацію</Link>
                    </Button>
                </div>
            </section>
        </>
    )
}

export default PriceClient