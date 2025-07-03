"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Button from "@/components/ui/button/Button";
import { navItem, lineAnimation, serviceCard } from "@/app/global.animation"; 

const About = () => {
  return (
    <section className="mt-20">
      <motion.div
        variants={serviceCard}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
        <div className="flex items-start gap-4">
          <div>
            <motion.h2
              variants={navItem}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              Введення
            </motion.h2>
            <motion.h3
              variants={navItem}
              initial="hidden"
              animate="visible"
              className="text-[#C0B7E8] text-4xl sm:text-5xl md:text-6xl font-extralight animate-pulse">
              FLIXUFY
            </motion.h3>
          </div>
          <motion.div
            variants={navItem}
            initial="hidden"
            animate="visible"
            whileHover="hover">
            <Link href="/about">
              <MoveRight
              strokeWidth={2.5}
              width={80}
              height={40}
              className="text-[#C0B7E8]"/>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="max-w-xl text-base sm:text-lg text-gray-300"
          variants={navItem}
          initial="hidden"
          animate="visible">
          FLUXIFY — команда, що створює лендінги майбутнього.
          Об’єднуємо дизайн, код і емоції в цілісний продукт.
          Працюємо швидко, адаптивно та з думкою про результат.
        </motion.div>
      </motion.div>
      <motion.span
        {...lineAnimation(0)}
        viewport={{ once: true }}
        className="hidden lg:block h-[3px] w-full bg-gradient-to-b from-transparent via-[#8176AF] to-transparent my-10"/>
      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10"
        variants={serviceCard}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}>
          <Image
            src="/about/about.png"
            alt="about"
            width={500}
            height={300}
            className="rounded-[45%_50px_45%_50px] drop-shadow-[0_0_20px_rgba(192,183,232,0.5)] w-full max-w-md mx-auto"/>
        </motion.div>
        <div className="max-w-2xl text-base sm:text-lg">
          <motion.h2
            variants={navItem}
            initial="hidden"
            whileInView="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            Про нас
          </motion.h2>
          <motion.h3
            variants={navItem}
            initial="hidden"
            whileInView="visible"
            className="text-[#C0B7E8] text-4xl sm:text-5xl md:text-6xl font-extralight mb-5 animate-pulse">
            FLIXUFY
          </motion.h3>

          <motion.p
            variants={navItem}
            initial="hidden"
            whileInView="visible"
            className="mb-8 text-gray-300 leading-relaxed">
            У FLUXIFY ми віримо: сайт — це не просто набір сторінок, а потужний інструмент комунікації бренду.
            Наш підхід базується на балансі між естетикою, функціональністю і глибоким розумінням користувача.
            Кожен проєкт — це сучасний, технічно досконалий продукт, який запам’ятовується з першого погляду і працює на бізнес.
            Використовуємо найновіші інструменти — від Figma до Next.js, щоб забезпечити якість, швидкість і адаптивність.
            Працюємо прозоро, з уважністю до деталей і стратегічним мисленням на кілька кроків уперед.
          </motion.p>

          <motion.div
            whileHover="hover"
            variants={navItem}
            className="w-max">
            <Button>
              <Link href="/about" className="text-black">
                Детальніше
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
