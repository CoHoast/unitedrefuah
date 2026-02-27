import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#135c9f",
};

export const metadata: Metadata = {
  title: "United Refuah HealthShare | Torah-Aligned Health Cost Sharing",
  description: "A compassionate, affordable, and Torah-aligned solution to managing health care expenses. Join our community of families sharing in each other's medical needs.",
  keywords: ["health share", "Jewish health care", "Torah aligned", "health cost sharing", "alternative to health insurance", "Cleveland Jewish community"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "United Refuah",
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: "United Refuah HealthShare",
    description: "Compassionate, affordable, Torah-aligned health cost sharing for Jewish families.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/small-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/small-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="United Refuah" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="United Refuah" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#135c9f" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/images/small-logo.png" />
        
        {/* Splash Screens for iOS */}
        <link 
          rel="apple-touch-startup-image" 
          href="/images/small-logo.png"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
