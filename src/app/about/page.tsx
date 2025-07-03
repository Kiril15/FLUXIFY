import AboutClient from "./aboutClient/aboutCliet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про FLUXIFY — digital-студія та веб-агенція, яка створює сайти для бізнесу",
  description: "Дізнайтеся про FLUXIFY: українську digital-студію, яка створює сучасні сайти, брендинг і digital-рішення для розвитку бізнесу. Ми поєднуємо дизайн, технології та маркетинг.",
  keywords: "про FLUXIFY, digital студія Україна, веб-агенція, створення сайтів, брендинг, розробка сайтів, digital рішення, команда FLUXIFY, веб-дизайн, підтримка сайтів, digital студія Дніпро, веб-агенція Дніпро, створення сайтів, брендинг, digital рішення, FLUXIFY команда, веб-дизайн, підтримка сайтів",
  openGraph: {
    title: "Про FLUXIFY — digital-студія та веб-агенція для вашого бізнесу",
    description: "FLUXIFY — українська команда, яка створює сайти, брендинг і digital-рішення для розвитку вашого бізнесу онлайн.",
    url: "https://fluxify-six.vercel.app/about",
    siteName: "FLUXIFY",
    locale: "uk_UA",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
  canonical: "https://fluxify-six.vercel.app/about",
},
};

const About = () => (
    <section>
        <main className="text-white min-h-screen px-6 py-20">
            <AboutClient/>
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "url": "https://fluxify-six.vercel.app/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "FLUXIFY",
                "url": "https://fluxify-six.vercel.app",
                "logo": "https://fluxify-six.vercel.app/logo.ico",
                "description": "Дізнайтеся про FLUXIFY: українську digital-студію, яка створює сучасні сайти, брендинг і digital-рішення для розвитку бізнесу. Ми поєднуємо дизайн, технології та маркетинг.",
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
                "sameAs": [
                  "https://t.me/fluxify",
                  "https://www.instagram.com/fluxify",
                  "https://www.facebook.com/fluxify"
                ]
              }
            })
          }}
        />
    </section>
);

export default About;
