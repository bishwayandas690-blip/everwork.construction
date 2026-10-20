import type { Metadata, Viewport } from "next";
import "./globals.css";
import { company } from "@/data/company";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1C1E",
};

export const metadata: Metadata = {
  title: "Everwork Construction Private Limited | Civil Construction & Engineering",
  description:
    "Everwork Construction Private Limited provides civil construction, planning, estimation, surveying, supervision and construction-related services from Panisagar, North Tripura.",
  keywords: [
    "civil construction",
    "construction company",
    "North Tripura",
    "Panisagar",
    "construction contractor",
    "government contractor",
    "civil engineering",
    "construction Tripura",
    "construction Assam",
    "Everwork Construction",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Everwork Construction Private Limited",
    description:
      "Professional civil construction, estimation, surveying and supervision services from Panisagar, North Tripura.",
    siteName: company.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1C1C1E" />
      </head>
      <body>{children}</body>
    </html>
  );
}
