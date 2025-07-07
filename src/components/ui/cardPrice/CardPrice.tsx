import Button from "../button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCard } from "@/app/global.animation";
import { ArrowRight } from "lucide-react";
import React from "react";

type PriceCard = {
    priceCard: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        text: string;
        list: string[];
        price: string;
    }[]
}

const CardPrice = ({priceCard}: PriceCard) => {
    function rotateCard(e: React.MouseEvent<HTMLDivElement>) {
        const card = e.currentTarget;
        card.classList.toggle("rotateY-180");
    }

    return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        {priceCard.map((card, index) => (
            <motion.div
                key={index}
                variants={serviceCard}
                initial="initial"
                animate="whileInView"
                whileTap="whileInView"
                viewport={{ once: true }}
                className="relative group [perspective:1000px] w-full min-h-[400px] items-stretch"
            >
            <div onClick={rotateCard} className="rotateCard relative w-full transition-transform duration-600 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="w-full [backface-visibility:hidden]">
                    <div className="bg-gradient-to-br from-[#2a273a] to-[#1c1b29] rounded-2xl p-6 flex flex-col space-y-4 overflow-hidden clip-your-clip">
                        <div className="space-y-4">
                            <p className="flex justify-end items-center gap-1 text-xs text-gray-300">click <ArrowRight className="text-gray-300" width={13} height={13}/></p>
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
                                <li key={idx} className="break-words max-w-full overflow-hidden text-ellipsis">
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
                        <Link href="/contact">Замовити</Link>
                    </Button>
                </div>
                </div>
            </div>
            </motion.div>
        ))}
    </section>
    );
};

export default CardPrice;