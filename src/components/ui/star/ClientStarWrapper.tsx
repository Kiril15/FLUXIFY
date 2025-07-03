"use client";
import dynamic from "next/dynamic";

const LazyComponentStar = dynamic(() => import("./Star"), { ssr: false });

export default function ClientStarWrapper() {
  return <LazyComponentStar />;
}