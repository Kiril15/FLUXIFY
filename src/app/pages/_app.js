import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
          {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-X41V1GST1D"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-X41V1GST1D');
            `}
            </Script>

          {/* Your app */}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp