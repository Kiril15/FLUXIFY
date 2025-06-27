"use client";
import { CircleGauge, CircleOff, Award, Speech } from "lucide-react";
import { serviceCard, glowOverlay, lineAnimation  } from "@/app/global.animation";
import { motion } from "framer-motion";

const advantages = [
    {title: "Швидкий старт", desc: "Працюємо на результат – перший робочий прототип вже через 2 тижні", icon: CircleGauge},
    {title: "Без помилок", desc: "Тестуємо кожен елемент, щоб ви отримали ідеальний продукт", icon: CircleOff},
    {title: "Зрозуміло та чесно", desc: "Ніякої складної термінології – тільки конкретні результати", icon: Award},
    {title: "На зв'язку 24/7", desc: "Виправляємо будь-які проблеми відразу після їх виникнення", icon: Speech}
]

const Services = () => {
  return (
    <section className="flex flex-wrap justify-between gap-8 mt-20">
      {advantages.map((item, index) => (
        <motion.div
          key={index}
          variants={serviceCard}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          whileTap="whileHover"
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative py-10 rounded-2xl bg-gray-900 border border-gray-800 w-full sm:w-[45%] lg:w-[22%] px-4"
        >
          <motion.div
            variants={glowOverlay}
            initial="initial"
            whileHover="whileHover"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(129,118,175,0.2)_0%,_transparent_70%)] pointer-events-none"
          />
        <item.icon className="text-3xl text-[#C0B7E8] mx-auto mb-5" width={100} height={100}/>
          <h2 className="text-white text-xl font-bold mb-3 text-center group-hover:text-[#C0B7E8] transition-colors">
            {item.title}
          </h2>
          <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {item.desc}
          </p>
          <motion.div
            {...lineAnimation(index)}
            viewport={{ once: true }}
            className="mt-6 h-px bg-gradient-to-r from-transparent via-[#8176AF] to-transparent"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Services;