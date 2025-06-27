"use client";
import { ScanEye, HeartHandshake, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import { serviceCard } from "@/app/global.animation";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

const priceCard = [
  {
    icon: HeartHandshake,
    title: "Тех. підтримка",
    text: "Комплексне обслуговування вашого сайту: оптимізація, безпека та швидке вирішення технічних питань. Ми завжди на зв'язку, щоб ваш проєкт працював без перебоїв.",
    list: [
      "Доналаштування сайту",
      "Моніторинг працездатності сайту 24/7",
      "Тех. підтримка протягом місяця",
      "Оптимізація швидкості завантаження",
    ],
    price: "7.000",
  },
  {
    icon: ScanEye,
    title: "Лендінг (односторнковий)",
    text: "Створення сучасної продаючої односторінкової сторінки для вашого бізнесу або послуги. Ідеальний варіант для запуску рекламних кампаній та залучення клієнтів.",
    list: [
      "Домен та хостинг на 1 рік",
      "Індивідуальний дизайн під ваш бренд",
      "Адаптивна верстка для мобільних пристроїв",
      "SEO-оптимізація для пошукових систем",
      "Технології HTML, CSS, JS, Next.js, Tailwind",
      "Логотип до вашого сайту",
    ],
    price: "12.000",
  },
  {
    icon: LifeBuoy,
    title: "Корпоративний сайт",
    text: "Повноцінний багатосторінковий сайт для представлення вашої компанії в інтернеті. Ми допоможемо створити інструмент, що працюватиме на ваш імідж і продажі.",
    list: [
      "Домен та хостинг на 1 рік",
      "Аналіз і проєктування структури сайту",
      "Розробка унікального дизайну",
      "До 10 інформаційних сторінок",
      "Технології HTML, CSS, JS, Next.js, Tailwind",
      "Логотип до вашого сайту",
    ],
    price: "15.000",
  },
];

const Price = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
      {priceCard.map((card, index) => (
        <motion.div
          key={index}
          variants={serviceCard}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative group [perspective:1000px] w-full min-h-[400px] items-stretch"
        >
          <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="w-full [backface-visibility:hidden]">
              <div className="bg-gradient-to-br from-[#2a273a] to-[#1c1b29] rounded-2xl p-6 flex flex-col space-y-4 overflow-hidden clip-your-clip">
                <div className="space-y-4">
                  <card.icon className="w-20 h-20 mx-auto text-purple-400" />
                  <h2 className="text-lg md:text-xl font-semibold text-white text-center break-words max-w-full">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-300 text-center break-words max-w-full overflow-hidden line-clamp-4">
                    {card.text}
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-gray-200 pl-4 md:pl-8 break-words max-w-full overflow-hidden">
                  {card.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="break-words max-w-full overflow-hidden text-ellipsis"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="bg-[#2a273a] w-full h-full rounded-2xl p-6 flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-white mb-4">{card.price} грн</p>
                <Button>
                  <Link href="/price">Замовити</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Price;
