import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LazyHeader } from "@/components/shared/header/LazyHeader";
import Footer from "@/components/shared/footer/Footer";
import ClientStarWrapper from "@/components/ui/star/ClientStarWrapper";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Головна | FLUXIFY",
  description: "FLUXIFY — команда, що створює лендінги майбутнього. Об’єднуємо дизайн, код і емоції в цілісний продукт. Працюємо швидко, адаптивно та з думкою про результат.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${montserrat.variable} antialiased`}>
        <LazyHeader/>
        <main>
          <ClientStarWrapper/>
          <div className="main-wrapper">
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
