import type { Metadata } from "next";
import { Playpen_Sans} from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const inter = Playpen_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Digle - Web design agency",
  description:
    "Your Digital Journey Starts with Us, Turning Your Ideas into reality",
  keywords: ["Digle", "web design agency", "web development"],
  metadataBase: new URL(process.env.SITE_URL!),
  openGraph: {
    title: "Digle - Your Digital Journey Starts with Us",
    description:
      "Your Digital Journey Starts with Us, We Turning Your Ideas into reality",
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL!,
    siteName: "Digle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
