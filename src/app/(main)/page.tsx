import dynamic from "next/dynamic";
import Loader from "@/components/ui/loader/Loader";
import { Metadata } from "next";

const LazyComponentHero = dynamic(() => import("./components/Hero"), {loading: () => <Loader/>})
const LazyComponentRectangle = dynamic(() => import("./components/Rectangle"), {loading: () => <Loader/>});
const LazyComponentServices = dynamic(() => import("./components/Services"), {loading: () => <Loader/>});
const LazyComponentAbout = dynamic(() => import("./components/About"), {loading: () => <Loader/>});
const LazyComponentPrice = dynamic(() => import("./components/Price"), {loading: () => <Loader/>});
const LazyComponentProcess = dynamic(() => import("./components/Process"), {loading: () => <Loader/>});

export const metadata: Metadata = {
  title: "Home - Fluxify",
  description: "Welcome to Fluxify, your partner in innovative software solutions.",
};

export default function Home() {
    return (
      <section>
        <LazyComponentHero/>
        <LazyComponentRectangle/>
        <LazyComponentPrice/>
        <LazyComponentAbout/>
        <LazyComponentServices/>
        <LazyComponentProcess/>
      </section>
    );
  }