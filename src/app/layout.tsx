import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "United Refuah HealthShare | Torah-Aligned Health Cost Sharing",
  description: "A compassionate, affordable, and Torah-aligned solution to managing health care expenses. Join our community of families sharing in each other's medical needs.",
  keywords: ["health share", "Jewish health care", "Torah aligned", "health cost sharing", "alternative to health insurance", "Cleveland Jewish community"],
  openGraph: {
    title: "United Refuah HealthShare",
    description: "Compassionate, affordable, Torah-aligned health cost sharing for Jewish families.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
