"use client";
import Link from "next/link"
import Image from "next/image";
import Button  from "../../ui/button/Button"
import { motion } from "framer-motion";
import { navItem, underlineAnimation } from "@/app/global.animation";
import Separator from "@/components/ui/separator/separator";
import { Instagram, Send, Music2 } from "lucide-react";

const mainLinks = [
    { href: "", text: "Головна" },
    { href: "about", text: "Про нас" },
];
const extraLinks = [
    { href: "price", text: "Послуги" },
    { href: "contact", text: "Контакти" },
];
const socials = [
    { name: Instagram, url: "#" },
    { name: Send, url: "https://t.me/@Tkri22" },
    { name: Music2, url: "#" },
];

const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                    staggerChildren: 0.1,
                    },
    },
    }}
    className="main-wrapper">
    <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10">
    <motion.div variants={navItem} className="flex-shrink-0 relative pr-6 lg:pr-15 mb-8 lg:mb-0 text-center lg:text-left">
        <Link href="/">
        <Image
            src="/favicon.ico"
            alt="symbolLogo"
            width={100}
            height={100}
            className="hover:opacity-90 transition-opacity mx-auto lg:mx-0"
        />
        </Link>
        <Separator/>
    </motion.div>
    <div className="flex flex-col justify-center sm:flex-row items-center lg:items-start gap-10 text-center lg:text-left">
        <motion.ul variants={navItem} className="relative flex gap-4 flex-col pr-6 lg:pr-15 items-center lg:items-start">
        {mainLinks.map((item, index) => (
            <motion.li
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={navItem}
                custom={index}
                className="relative">
            <Link href={`/${item.href}`} className="text-lg font-medium relative px-2 py-1 group">
                <span className="relative z-10">{item.text}</span>
                <motion.span
                    variants={underlineAnimation}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                    style={{ originX: 0 }}
                />
            </Link>
            </motion.li>
        ))}
        <Separator/>
        </motion.ul>

        <motion.ul variants={navItem} className="relative flex gap-4 flex-col pr-6 lg:pr-15 items-center lg:items-start">
        {extraLinks.map((item, index) => (
                <motion.li
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={navItem}
                    custom={index}
                    className="relative"
                >
                <Link href={`/${item.href}`} className="text-lg font-medium relative px-2 py-1 group">
                    <span className="relative z-10">{item.text}</span>
                    <motion.span
                        variants={underlineAnimation}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                        style={{ originX: 0 }}
                    />
                </Link>
                </motion.li>
            ))}
            <Separator/>
        </motion.ul>
    </div>

        <motion.div
            variants={navItem}
            className="relative w-full lg:w-auto lg:pl-15 text-center lg:text-right mt-10 lg:mt-0"
        >
        <Separator customClass="left-0"/>
        <h2 className="text-xl pb-4">Соціальні мережі</h2>
        <div className="flex justify-center lg:justify-end gap-4 mb-6">
            {socials.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full bg-gray-700 hover:bg-purple-600 transition-colors text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >   
                    {social.name && <social.name />}
                </motion.a>
            ))}
        </div>
        <div className="flex justify-center lg:justify-end">
            <Button>
                <Link href="/price" className="text-black">
                    Швидкий старт
                </Link>
            </Button>
        </div>
    </motion.div>
    </div>
    <div className="pt-10 mt-10 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} fluxify. Всі права захищені.
    </div>
</motion.footer>

    )
}

export default Footer;
