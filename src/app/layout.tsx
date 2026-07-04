import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { defaultLocale } from "@/lib/i18n/config";
import { getTranslator } from "@/lib/i18n/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslator(defaultLocale);
  return {
    title: {
      default: t("metadata.layoutDefaultTitle"),
      template: t("metadata.titleTemplate"),
    },
    description: t("metadata.layoutDescription"),
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18248809110"
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18248809110');
          gtag('config', 'G-78D0ZF5C6X');
        `}
      </Script>
    </html>
  );
}
