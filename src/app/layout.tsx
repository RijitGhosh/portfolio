import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rijit Ghosh - Data Analyst | Business Analyst | Software Developer",
  description: "Computer Science Engineering Student specializing in Data Analysis, Business Intelligence, and Software Development. Experienced with Azure, Power BI, Python, and modern web technologies.",
  keywords: "Data Analyst, Business Analyst, Software Developer, Python, Power BI, Azure, Rijit Ghosh, Portfolio, Resume",
  authors: [{ name: "Rijit Ghosh" }],
  creator: "Rijit Ghosh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rijitghosh.dev",
    title: "Rijit Ghosh - Data Analyst & Software Developer",
    description: "Computer Science Engineering Student specializing in Data Analysis, Business Intelligence, and Software Development.",
    siteName: "Rijit Ghosh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rijit Ghosh - Data Analyst & Software Developer",
    description: "Computer Science Engineering Student specializing in Data Analysis, Business Intelligence, and Software Development.",
    creator: "@rijitghosh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rijit Ghosh",
              "jobTitle": "Data Analyst & Software Developer",
              "email": "rijitghosh53@gmail.com",
              "url": "https://github.com/RijitGhosh",
              "sameAs": [
                "https://linkedin.com/in/rijit-ghosh-528b96348",
                "https://github.com/RijitGhosh",
              ],
              "knowsAbout": [
                "Data Analysis",
                "Business Intelligence",
                "Python",
                "Power BI",
                "Microsoft Azure",
                "Software Development",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
