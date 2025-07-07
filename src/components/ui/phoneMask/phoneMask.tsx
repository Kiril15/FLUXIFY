"use client"
import { useEffect, useRef } from "react";
import IMask from "imask";

type phoneTypes = {
  name: string
}

export default function PhoneInput({name}: phoneTypes) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      const maskOptions = {
        mask: "+38 (000) 000-00-00",
      };
      const mask = IMask(inputRef.current, maskOptions);

      return () => mask.destroy();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      name={name}
      type="tel"
      placeholder="+38 (___) ___-__-__"
      className="rounded-lg bg-[#2A273A] border border-transparent focus:border-[#8176AF] text-white px-4 py-3 transition"
      required
    />
  );
}
