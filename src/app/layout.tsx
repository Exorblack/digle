import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digle - Where Creativity Meets Code",
  description: "Digle Innovative web design solutions tailored to your business needs.",
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
        <Analytics/>
        <SpeedInsights/>
        <Toaster position="top-center" richColors/>
      </ThemeProvider>
      </body>
    </html>
  );
}
