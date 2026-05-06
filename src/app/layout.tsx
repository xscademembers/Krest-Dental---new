import type { Metadata } from "next";
import { EB_Garamond, Inknut_Antiqua, Marmelad } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const ebGaramond = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-heading-alt",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const marmelad = Marmelad({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krest.dental"),
  title: "Krest Dental — Best Dental Clinic in Vizag",
  description:
    "Top-rated Cosmetic & Implant Dentist in Visakhapatnam. Visit Krest Dental for smile makeovers, dental implants & painless treatments. Book your consult now!",
  openGraph: {
    title: "Krest Dental — Best Dental Clinic in Vizag",
    description:
      "Top-rated Cosmetic & Implant Dentist in Visakhapatnam. Visit Krest Dental for smile makeovers, dental implants & painless treatments. Book your consult now!",
    url: "https://www.krest.dental",
    siteName: "Krest Dental",
    type: "website",
    images: [{ url: "/seo/og-image.png", width: 2500, height: 1330 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krest Dental — Best Dental Clinic in Vizag",
    description:
      "Top-rated Cosmetic & Implant Dentist in Visakhapatnam. Visit Krest Dental for smile makeovers, dental implants & painless treatments. Book your consult now!",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inknutAntiqua.variable} ${marmelad.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink font-display flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
