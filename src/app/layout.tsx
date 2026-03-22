import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Blake Smart Solutions | CCTV, Alarms, Wi-Fi & Starlink Perth",
  description:
    "Perth-based installer for CCTV, alarms, Wi-Fi and data, Starlink, antennas, and home entertainment systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <EnquiryModalProvider />
      </body>
    </html>
  );
}
