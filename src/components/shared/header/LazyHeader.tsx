"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LazyHeaderDesktop = dynamic(() => import("@/components/shared/header/DesktopHeader/DesktopHeader"))
const LazyHeaderMobile = dynamic(() => import("@/components/shared/header/MobileHeader/MobileHeader"));

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
    widthDocument < 640 ? <LazyHeaderMobile/> : <LazyHeaderDesktop/>
  )
}