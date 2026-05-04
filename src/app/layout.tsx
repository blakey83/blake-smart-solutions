import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { EnquiryModalProvider } from "@/components/EnquiryModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blake Smart Solutions | Security Cameras, Wi-Fi & Starlink Perth",
  description:
    "Perth smart technology specialists for CCTV, smart alarms, Wi-Fi, Starlink distribution and data solutions. Licensed, insured, and experienced in CCTV and smart security systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <EnquiryModalProvider />
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
      </body>
    </html>
  );
}
