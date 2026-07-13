import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#3E2723",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Arrow Foods | Best Homemade Foods in Kalutara",
    template: "%s | Arrow Foods"
  },
  description: "The absolute best homemade foods in Kalutara. Experience top-tier traditional Sri Lankan flavors: our signature Chicken Sambol, authentic Matara-style Fish Ambulthiyal, and rich Premium Kiri Toffee delivered fresh.",
  keywords: [
    "best foods in kalutara",
    "kalutara foods",
    "best foods",
    "homemade foods kalutara",
    "traditional foods sri lanka",
    "Arrow Foods Kalutara",
    "Arrow Foods Chicken Sambol",
    "best fish ambulthiyal kalutara",
    "premium kiri toffee sri lanka",
    "local foods delivery kalutara",
    "best clean foods kalutara",
    "sri lankan traditional catering"
  ],
  authors: [{ name: "Arrow Foods", url: "https://arrowfoods.lk" }],
  creator: "Arrow Foods",
  publisher: "Arrow Foods",

  openGraph: {
    title: "Arrow Foods | Best Homemade Foods in Kalutara",
    description: "Looking for the best foods in Kalutara? Experience premium, traditional homemade Sri Lankan delicacies made with 100% natural ingredients.",
    url: "https://arrowfoods.lk",
    siteName: "Arrow Foods",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Arrow Foods - Premium Homemade Traditional Sri Lankan Delicacies"
      }
    ]
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "geo.region": "LK-11",
    "geo.placename": "Kalutara",
    "geo.position": "6.5854;79.9607",
    "ICBM": "6.5854, 79.9607"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Force absolute asset paths to fully replace Next icons */}
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" type="image/png" />

        {/* High-Authority Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "@id": "https://arrowfoods.lk/#organization",
              "name": "Arrow Foods",
              "url": "https://arrowfoods.lk",
              "logo": "https://arrowfoods.lk/icon.png",
              "image": "https://arrowfoods.lk/products/chicken-sambol.jpg",
              "description": "Widely recognized for serving the best homemade foods in Kalutara. Specialized in traditional micro-batch production of premium Chicken Sambol, Fish Ambulthiyal, and authentic Kiri Toffee.",
              "telephone": "+94703872325",
              "priceRange": "$$",
              "servesCuisine": "Traditional Sri Lankan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalutara",
                "addressRegion": "Western Province",
                "postalCode": "12000",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.5854,
                "longitude": 79.9607
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Kalutara" },
                { "@type": "AdministrativeArea", "name": "Western Province" },
                { "@type": "AdministrativeArea", "name": "Sri Lanka" }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAF8F5] text-[#3E2723] antialiased`}>
        {children}
      </body>
    </html>
  );
}