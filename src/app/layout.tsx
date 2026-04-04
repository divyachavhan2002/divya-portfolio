import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://divya-portfolio.vercel.app"),
  title: "Divya Chavhan | Full Stack Developer",
  description:
    "Personal portfolio of Divya Chavhan — Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Based in Pune, Maharashtra.",
  keywords: [
    "Divya Chavhan",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Pune",
    "Portfolio",
  ],
  authors: [{ name: "Divya Chavhan" }],
  creator: "Divya Chavhan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://divya-portfolio.vercel.app",
    title: "Divya Chavhan | Full Stack Developer",
    description:
      "Personal portfolio of Divya Chavhan — Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    siteName: "Divya Chavhan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divya Chavhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Chavhan | Full Stack Developer",
    description:
      "Personal portfolio of Divya Chavhan — Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
