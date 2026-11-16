import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@/components/Analytics";
import { imageUrl } from "@/data/images";
import { isLocale, locales, localeSettings, SITE_NAME, SITE_URL } from "@/i18n/config";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  // Default share image for pages that do not set their own (home, guides, legal).
  openGraph: { siteName: SITE_NAME, type: "website", images: [{ url: imageUrl("rome", 1280), width: 1280 }] },
  twitter: { card: "summary_large_image" },
  // Search Console ownership check. A DNS record on the domain works too and covers every subdomain.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Runs before first paint: play the arrival intro once per browser session.
const introScript = `try{if(sessionStorage.getItem("intro")){document.documentElement.dataset.introSeen="1"}else{sessionStorage.setItem("intro","1")}}catch(e){}`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={localeSettings[locale].htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        {/* Photos come from another host: open that connection early so the hero image loads sooner. */}
        <link rel="preconnect" href={new URL(imageUrl("rome")).origin} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
