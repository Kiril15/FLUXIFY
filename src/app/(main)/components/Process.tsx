"use client";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { serviceCard } from "@/app/global.animation"; 

const processItems = [
    {number: 1, text: "Знайомство та брифінг", arrow: MoveRight},
    {number: 2, text: "Планування та прототип", arrow: MoveRight},
    {number: 3, text: "Розробка та запуск", arrow: MoveRight},
    {number: 4, text: "Підтримка та розвиток", arrow: MoveRight}
]

const Process = () => {
    return (
        <section
            className="pt-6 px-5 flex items-center my-16 gap-[130px] w-full overflow-x-auto snap-x snap-mandatory scroll-smooth md:justify-evenly overflow-y-hidden">
                {processItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <motion.div
                            variants={serviceCard}
                            initial="initial"
                            whileInView="whileInView"
                            whileHover="whileHover"
                            viewport={{ once: true }}
                            className="text-6xl font-extrabold text-[#343045] flex justify-center items-center h-[159px] w-[159px] bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] rounded-[50%] shadow-[1px_1px_19px_9px_rgba(0,0,0,0.75)] animate-pulse">
                            0{item.number}
                        </motion.div>
                        <div className="flex items-center gap-2 mt-4">
                            <item.arrow className="text-[#C0B7E8]" strokeWidth={3} width={50} />
                            <p className="text-lg font-bold">{item.text}</p>
                        </div>
                    </div>
                ))}
        </section>
    );
};

export default Process;
