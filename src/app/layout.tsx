import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { SiteLoader } from "@/components/site-loader";
import { SiteFloatingActions } from "@/components/site-floating-actions";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const siteUrl = new URL(
  rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Gráfica Panni, Gráfica e Comunicação Visual",
  description:
    "Impressão gráfica e comunicação visual com qualidade, agilidade e impacto. Cartões de visita, banners, fachadas, adesivos e muito mais. São Paulo, SP.",
  applicationName: "Gráfica Panni",
  keywords: [
    "gráfica",
    "comunicação visual",
    "impressão digital",
    "banner",
    "cartão de visita",
    "fachada ACM",
    "adesivo",
    "São Paulo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gráfica Panni, Gráfica e Comunicação Visual",
    description:
      "Impressão gráfica e comunicação visual com qualidade, agilidade e impacto.",
    url: "/",
    siteName: "Gráfica Panni",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-panni.png",
        width: 1200,
        height: 1200,
        alt: "Logo da Gráfica Panni centralizada em fundo preto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gráfica Panni, Gráfica e Comunicação Visual",
    description:
      "Impressão gráfica e comunicação visual com qualidade, agilidade e impacto.",
    images: [
      {
        url: "/og-panni.png",
        alt: "Logo da Gráfica Panni centralizada em fundo preto",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteLoader />
        {children}
        <SiteFloatingActions />
      </body>
    </html>
  );
}
