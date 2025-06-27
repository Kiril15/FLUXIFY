// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";

// const MobileHeader = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//         if (isOpen) {
//           document.body.style.position = "fixed";
//         } else {
//             document.body.style.position = "static";
//         }
//     }, [isOpen]);

//   return (
//     <header className={`w-full text-white z-50 relative ${isOpen ? "bg-[#211E2E]" : "bg-transparent"}`}>
//       <div className="main-wrapper flex justify-between items-center py-4 relative z-50">
//         <Link href="/">
//           <Image
//             src="/logo/logo.png"
//             alt="logo"
//             width={160}
//             height={60}
//             className="drop-shadow-lg hover:drop-shadow-xl transition-all max-w-[160px] h-auto"
//           />
//         </Link>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-51 relative"
//         >
//           <span
//             className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
//               isOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           />
//           <span
//             className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
//               isOpen ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
//               isOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           />
//         </button>
//       </div>
//       <nav
//         className={`h-[100vh] fixed inset-0 bg-[#2A273A] flex flex-col items-center justify-center gap-10 text-center transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <Link
//           href="/"
//           className="text-2xl font-semibold hover:text-purple-400 transition-colors"
//           onClick={() => setIsOpen(false)}
//         >
//           Головна
//         </Link>
//         <Link
//           href="/about"
//           className="text-2xl font-semibold hover:text-purple-400 transition-colors"
//           onClick={() => setIsOpen(false)}
//         >
//           Про нас
//         </Link>
//         <Link
//           href="/services"
//           className="text-2xl font-semibold hover:text-purple-400 transition-colors"
//           onClick={() => setIsOpen(false)}
//         >
//           Послуги
//         </Link>
//         <Link
//           href="/price"
//           className="text-2xl font-semibold hover:text-purple-400 transition-colors"
//           onClick={() => setIsOpen(false)}
//         >
//           Прайс
//         </Link>
//         <Link
//           href="/contact"
//           className="text-2xl font-semibold hover:text-purple-400 transition-colors"
//           onClick={() => setIsOpen(false)}
//         >
//           Контакти
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default MobileHeader;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про нас" },
  { href: "/services", label: "Послуги" },
  { href: "/price", label: "Прайс" },
  { href: "/contact", label: "Контакти" },
];

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [isOpen]);

  return (
    <header className="w-full text-white z-50 fixed top-0 left-0 bg-[#211E2E]">
      <div className="flex justify-between items-center px-4 py-4 relative">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={160}
            height={60}
            className="drop-shadow-lg hover:drop-shadow-xl transition-all max-w-[160px] h-auto"
            priority
          />
        </Link>
        {/* ОДНА бургер-кнопка */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[101] relative"
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      {/* Мобильное меню */}
      <nav
        className={`fixed inset-0 bg-[#2A273A] flex flex-col items-center justify-center gap-10 text-center transition-transform duration-300 z-[100] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl font-semibold hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default MobileHeader;
