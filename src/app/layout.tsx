import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { EnquiryModalProvider } from "@/components/EnquiryModalProvider";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { siteMetadataContent } from "@/content/components/siteContent";
import { buildLocalBusinessJsonLd } from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/seoConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteMetadataContent.title,
  description: siteMetadataContent.description,
  applicationName: siteMetadataContent.businessName,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: siteMetadataContent.title,
    description: siteMetadataContent.description,
    url: SITE_URL,
    siteName: siteMetadataContent.businessName,
    images: [
      {
        url: "/images/branding/BSS_logo.png",
        alt: "Blake Smart Solutions logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadataContent.title,
    description: siteMetadataContent.description,
    images: ["/images/branding/BSS_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const isProduction = process.env.NODE_ENV === "production";
const localBusinessJsonLd = buildLocalBusinessJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <BreadcrumbJsonLd />
        <main>{children}</main>
        <Footer />
        <EnquiryModalProvider />
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-18035265737"
              strategy="afterInteractive"
            />
            <Script id="google-ads-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-18035265737');
              `}
            </Script>
            <Script id="google-ads-phone-conversion" strategy="afterInteractive">
              {`
                gtag('config', 'AW-18035265737/ia68COyZw8YcEMmh8ZdD', {
                  'phone_conversion_number': '0477 948 079'
                });
              `}
            </Script>
            <GoogleAnalytics gaId="G-ZFPD80HG5B" />
          </>
        )}
      </body>
    </html>
  );
}
