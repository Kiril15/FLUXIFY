import dynamic from "next/dynamic";
import Loader from "@/components/ui/loader/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLUXIFY — створення сайтів, брендинг та digital-маркетинг для бізнесу",
  description: "Замовте сучасний сайт, лендінг або корпоративний портал у FLUXIFY. Комплексна розробка, брендинг, SEO, підтримка та просування бізнесу онлайн. Гарантуємо результат, швидкість і індивідуальний підхід.",
  keywords: "створення сайтів, розробка сайтів, digital студія, брендинг, лендінг, корпоративний сайт, SEO, просування сайтів, підтримка сайтів, FLUXIFY, веб-дизайн, маркетинг, digital-маркетинг, створення сайтів Дніпро, digital студія Дніпро, брендинг Дніпро, SEO Дніпро, підтримка сайтів, FLUXIFY, веб-дизайн, маркетинг, digital-маркетинг",
  openGraph: {
    title: "FLUXIFY — створення сайтів, брендинг та digital-маркетинг для бізнесу",
    description: "Сучасні сайти, брендинг, SEO та підтримка для вашого бізнесу. Запускаємо та просуваємо онлайн-проекти під ключ.",
    url: "https://fluxify-six.vercel.app/",
    siteName: "FLUXIFY",
    locale: "uk_UA",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fluxify-six.vercel.app/",
  },
};

const LazyComponentHero = dynamic(() => import("./components/Hero"), {loading: () => <Loader/>})
const LazyComponentRectangle = dynamic(() => import("./components/Rectangle"), {loading: () => <Loader/>});
const LazyComponentServices = dynamic(() => import("./components/Services"), {loading: () => <Loader/>});
const LazyComponentAbout = dynamic(() => import("./components/About"), {loading: () => <Loader/>});
const LazyComponentPrice = dynamic(() => import("./components/Price"), {loading: () => <Loader/>});
const LazyComponentProcess = dynamic(() => import("./components/Process"), {loading: () => <Loader/>});

export default function Home() {
    return (
      <section>
        <LazyComponentHero/>
        <LazyComponentRectangle/>
        <LazyComponentPrice/>
        <LazyComponentAbout/>
        <LazyComponentServices/>
        <LazyComponentProcess/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FLUXIFY",
              "url": "https://fluxify-six.vercel.app",
              "logo": "https://fluxify-six.vercel.app/favicon.ico",
              "sameAs": [
                "https://t.me/fluxify",
                "https://www.instagram.com/fluxify",
                "https://www.facebook.com/fluxify"
              ],
              "description": "Замовте сучасний сайт, лендінг або корпоративний портал у FLUXIFY. Комплексна розробка, брендинг, SEO, підтримка та просування бізнесу онлайн. Гарантуємо результат, швидкість і індивідуальний підхід.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ваша вулиця, 12",
                "addressLocality": "Дніпро",
                "addressRegion": "Дніпропетровська область",
                "postalCode": "49000",
                "addressCountry": "UA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.4647,
                "longitude": 35.0462
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+380XXXXXXXXX",
                "contactType": "customer support",
                "areaServed": ["UA", "Дніпро"],
                "availableLanguage": ["uk", "ru", "en"]
              }
            })
          }}
        />
      </section>
    );
  }