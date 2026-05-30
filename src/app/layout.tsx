import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'La Fourche - Parisian Bar & Restaurant',
  description: 'Experience exquisite French cuisine and a refined bar ambiance at La Fourche. Perfect for fine dining, intimate evenings, and special occasions.',
  openGraph: {
    "title": "La Fourche - Parisian Bar & Restaurant",
    "description": "Experience exquisite French cuisine and a refined bar ambiance at La Fourche. Perfect for fine dining, intimate evenings, and special occasions.",
    "url": "https://www.lafourche.com",
    "siteName": "La Fourche",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/view-street-lights-london-city_23-2149437467.jpg",
        "alt": "Elegant interior of La Fourche restaurant"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "La Fourche - Parisian Bar & Restaurant",
    "description": "Experience exquisite French cuisine and a refined bar ambiance at La Fourche.",
    "images": [
      "http://img.b2bpic.net/free-photo/view-street-lights-london-city_23-2149437467.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
