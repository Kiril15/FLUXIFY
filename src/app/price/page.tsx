import { Metadata } from "next"
import PriceClient from "./priceClient/priceClient"

export const metadata: Metadata = {
  title: "Тарифи та послуги | FLUXIFY — створення сайтів, SEO, підтримка",
  description:
    "Ознайомтеся з тарифами FLUXIFY на створення сайтів, SEO-просування, редизайн, техпідтримку та брендинг. Сучасні рішення для розвитку бізнесу в інтернеті.",
  keywords:
    "тарифи FLUXIFY, створення сайтів, ціни, редизайн, SEO, підтримка сайтів, digital студія, веб-розробка, лендінг, корпоративний сайт, тарифи FLUXIFY, створення сайтів Дніпро, SEO Дніпро, підтримка сайтів, лендінг Дніпро, корпоративний сайт Україна",
  openGraph: {
    title: "Тарифи та послуги | FLUXIFY — digital рішення для бізнесу",
    description:
      "Тарифи FLUXIFY: створення сайтів, SEO, підтримка, брендинг. Виберіть ідеальний варіант для просування вашого бізнесу онлайн.",
    url: "https://fluxify-six.vercel.app/price",
    siteName: "FLUXIFY",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://fluxify-six.vercel.app/og/price.jpg",
        width: 1200,
        height: 630,
        alt: "Тарифи та послуги FLUXIFY",
      },
    ],
  },
  robots: "index, follow",
};

const Price = () => {
    return (
        <div className="pt-30 pb-20 md:py-0">
            <PriceClient/>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "FLUXIFY",
                  "url": "https://fluxify-six.vercel.app/",
                  "logo": "https://fluxify-six.vercel.app/logo.ico",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Дніпро",
                    "addressCountry": "UA",
                    "postalCode": "49000",
                    "streetAddress": "Ваша вулиця, 12"
                  }
                }),
              }}
            />
        </div>
    )
}

export default Price