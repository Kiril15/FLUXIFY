"use client";
import Link from "next/link";
import Button  from "../../ui/button/Button"
import Image from "next/image";
import { motion } from "framer-motion";
import { navItem, underlineAnimation } from "@/app/global.animation";

const navLinks = [
    { href: "/", text: "Головна" },
    { href: "/about", text: "Про нас" },
    { href: "/technologies", text: "Технології" },
    { href: "/contact", text: "Контакти" }
  ];

const Header = () => {
  return (
    <header className="w-full">
      <div className="main-wrapper flex justify-between items-center">
        <Link href="/">
            <Image 
              src="/logo/logo.png" 
              alt="logo" 
              width={250} 
              height={100}
              className="drop-shadow-lg hover:drop-shadow-xl transition-all"
            />
        </Link>

        <nav className="flex gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={navItem}
              custom={index}
              className="relative"
            >
              <Link href={link.href} className="text-lg font-medium relative px-2 py-1">
                <span className="relative z-10">{link.text}</span>
                <motion.span
                  variants={underlineAnimation}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                  style={{ originX: 0 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex gap-4">
            <Button className="py-[0.8vw] px-[2vw] border-white border-2 rounded-3xl">
              <Link href="https://t.me/Tkri22" className="text-white">Консультація</Link>
            </Button>
            <Button>
                <Link href="/price" className="text-black">Швидкий старт</Link>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;