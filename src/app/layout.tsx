import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { EnquiryModalProvider } from "@/components/EnquiryModalProvider";
import { siteMetadataContent } from "@/content/siteContent";
import { SITE_URL } from "@/lib/seoRoutes";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
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
            <GoogleAnalytics gaId="G-ZFPD80HG5B" />
          </>
        )}
      </body>
    </html>
  );
}
