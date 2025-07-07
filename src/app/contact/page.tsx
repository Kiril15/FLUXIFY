import ContactClient from "./contactClient/contactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти | FLUXIFY — зв’яжіться з digital-студією",
  description: "Зв’яжіться з командою FLUXIFY: залиште заявку, отримайте консультацію або дізнайтеся більше про наші послуги. Всі контакти для швидкого зв’язку з digital-студією.",
  keywords: "контакти FLUXIFY, зв’язатися, заявка, консультація, digital студія, підтримка, email, телефон, форма зворотного зв’язку, контакти FLUXIFY Дніпро, зв’язатися, заявка, консультація, digital студія, підтримка, email, телефон, форма зворотного зв’язку",
  openGraph: {
    title: "Контакти | FLUXIFY — digital-студія",
    description: "Контакти FLUXIFY: форма зворотного зв’язку, email, телефон. Залиште заявку або отримайте консультацію.",
    url: "https://fluxify-six.vercel.app/contact",
    siteName: "FLUXIFY",
    locale: "uk_UA",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fluxify-six.vercel.app/contact",
  },
};

const ContactSection = () => {
  return (
    <>
      <h1 className="form text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF] animate-pulse drop-shadow-[0_0_20px_rgba(192,183,232,0.5)] mb-6 leading-tight">
        Контакти
      </h1>
      <section className="pt-20 pb-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="relative md:w-1/2 bg-[#211E2E] rounded-3xl p-10 shadow-xl overflow-hidden">
          <ContactClient/>
        </div>
        <div className="md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            title="Google карта розташування FLUXIFY"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338652.65246591537!2d34.670720241202005!3d48.461827836487494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1751311809143!5m2!1sru!2sua"
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://fluxify-six.vercel.app/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "FLUXIFY",
              "url": "https://fluxify-six.vercel.app",
              "logo": "https://fluxify-six.vercel.app/logo.ico",
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
                "areaServed": "UA",
                "availableLanguage": ["uk", "ru", "en"]
              }
            }
          })
        }}
      />
    </>
  );
};

export default ContactSection;