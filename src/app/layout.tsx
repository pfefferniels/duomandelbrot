import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Duo Mandelbrot — Baroque violin & lute",
    template: "%s · Duo Mandelbrot",
  },
  description:
    "Duo Mandelbrot — Maya Webne-Behrman and Niels Pfeffer — explore music throughout the centuries on baroque violin and lute.",
  openGraph: {
    type: "website",
    siteName: "Duo Mandelbrot",
    locale: "en_US",
    url: siteUrl,
    title: "Duo Mandelbrot — Baroque violin & lute",
    description:
      "Maya Webne-Behrman and Niels Pfeffer explore music throughout the centuries on baroque violin and lute.",
    images: [{ url: "/images/3w4a6603.jpg", width: 1600, height: 1067, alt: "Duo Mandelbrot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duo Mandelbrot",
    description:
      "Maya Webne-Behrman and Niels Pfeffer explore music throughout the centuries on baroque violin and lute.",
    images: ["/images/3w4a6603.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
