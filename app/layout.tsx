import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Seashore Hyde Park الساحل الشمالي | قرية ساحلية فاخرة في رأس الحكمة",
  description: "Seashore Hyde Park - قرية ساحلية فاخرة على البحر المتوسط في رأس الحكمة. شاليهات، توين هاوس وتاون هاوس بمقدم 5% وتقسيط 8 سنوات.",
  keywords: ["Seashore Hyde Park", "هايد بارك سي شور", "رأس الحكمة", "الساحل الشمالي", "Hyde Park Developments"],
  metadataBase: new URL("https://hydeparkproperties.org"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "Seashore Hyde Park | قرية ساحلية فاخرة في رأس الحكمة",
    description: "قرية ساحلية فاخرة على البحر المتوسط في رأس الحكمة من Hyde Park Developments",
    siteName: "Seashore Hyde Park",
    images: [{ url: "/images/high1.webp", width: 1200, height: 630, alt: "Seashore Hyde Park North Coast" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png?v=2" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
