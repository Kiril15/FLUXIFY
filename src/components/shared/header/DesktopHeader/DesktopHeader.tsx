"use client";
import Link from "next/link";
import Button  from "../../../ui/button/Button"
import Image from "next/image";
import { motion } from "framer-motion";
import { navItem, underlineAnimation } from "@/app/global.animation";

const navLinks = [
    { href: "/", text: "Головна" },
    { href: "/about", text: "Про нас" },
    { href: "/price", text: "Послуги" },
    { href: "/contact", text: "Контакти" }
  ];

const Header = () => {
  return (
    <header className="w-full border-b border-gray-700">
      <div className="main-wrapper mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={160}
            height={60}
            className="drop-shadow-lg hover:drop-shadow-xl transition-all max-w-[160px] h-auto"
          />
        </Link>
        <nav className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
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
              <Link
                href={link.href}
                className="text-base sm:text-lg font-medium relative px-2 py-1 text-white whitespace-nowrap"
              >
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
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <Button className="px-[clamp(1rem,2vw,2.5rem)] py-[clamp(0.5rem,1vw,1.2rem)] text-[clamp(0.85rem,1vw,1.1rem)] border-white border-2 rounded-3xl">
            <Link href="https://t.me/Tkri22" className="text-white">
              Консультація
            </Link>
          </Button>
          <Button>
            <Link href="/price" className="text-black">
              Швидкий старт
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;