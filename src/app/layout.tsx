import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Tawk from "@/components/compos/tawk";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  keywords: ["Digle","web design agency","web development"],
  title: "Digle - Where Creativity Meets Code",
  description: "Digle Innovative web design solutions tailored to your business needs.",
  openGraph:{
    title: "Digle - Where Creativity Meets Code",
    description: "Digle Innovative web design solutions tailored to your business needs.",
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL!,
    siteName: "Digle"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
      >
        {children}
        <Tawk/>
        <Analytics/>
        <SpeedInsights/>
        <Toaster position="top-center" richColors/>
      </ThemeProvider>
      </body>
    </html>
  );
}
