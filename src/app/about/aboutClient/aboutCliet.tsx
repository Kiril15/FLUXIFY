"use client"
import { motion } from "motion/react"
import { fadeInUp } from "@/app/global.animation"
import { sections } from "../info/info"
import Button from "@/components/ui/button/Button"
import Link from "next/link"

const AboutClient = () => {
    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeInUp}
                className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF] animate-pulse drop-shadow-[0_0_20px_rgba(192,183,232,0.5)] mb-6 leading-tight">
                    Про нас | FLUXIFY
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Ми — digital-студія, яка створює сайти, що не просто виглядають сучасно, а й працюють на результат. Поєднуємо дизайн, технології та розуміння бізнесу, щоб кожен проєкт приносив реальну цінність. Для нас сайт — це не просто сторінки, а інструмент, який формує репутацію, залучає клієнтів і підсилює бренд.
                </p>
            </motion.section>

            {sections.map((sec, i) => (
                <motion.section
                    key={i}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF]">
                    {sec.title}
                </h2>
                {sec.text && <p className="text-gray-400">{sec.text}</p>}
                {sec.list && (
                    <ul className="text-gray-400 space-y-3 pl-5 mt-4">
                        {sec.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
                </motion.section>
            ))}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={sections.length + 1}
                variants={fadeInUp}
                className="text-center mt-20">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    Хочеш працювати з нами?
                </h3>
                <div className="flex justify-center mx-auto">
                    <Button>
                        <Link href="/contact">Залишити заявку</Link>
                    </Button>
                </div>
            </motion.section>
        </>
    )
}

export default AboutClient