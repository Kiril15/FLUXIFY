"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed w-full text-white z-50 relative ${isOpen ? "bg-[#211E2E]" : "bg-transparent"}`}>
      <div className="main-wrapper flex justify-between items-center py-4 relative z-50">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={160}
            height={60}
            className="drop-shadow-lg hover:drop-shadow-xl transition-all max-w-[160px] h-auto"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 relative"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      <nav
        className={`h-[100dvh] fixed inset-0 bg-[#2A273A] flex flex-col items-center justify-center gap-10 text-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/"
          className="text-2xl font-semibold hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Головна
        </Link>
        <Link
          href="/about"
          className="text-2xl font-semibold hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Про нас
        </Link>
        <Link
          href="/services"
          className="text-2xl font-semibold hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Послуги
        </Link>
        <Link
          href="/price"
          className="text-2xl font-semibold hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Прайс
        </Link>
        <Link
          href="/contact"
          className="text-2xl font-semibold hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Контакти
        </Link>
      </nav>
    </header>
  );
};

export default MobileHeader;

