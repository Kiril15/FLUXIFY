"use client"
import { useEffect, useState } from "react";
import Header from "@/components/shared/header/DesktopHeader/DesktopHeader";
import MobileHeader from "@/components/shared/header/MobileHeader/MobileHeader";

export function LazyHeader() {
  const [widthDocument, setWidthDocument] = useState(0);
  useEffect(() => {
    setWidthDocument(window.innerWidth);
    const handleResize = () => {
      setWidthDocument(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    widthDocument < 640 ? <MobileHeader/> : <Header/>
  )
}