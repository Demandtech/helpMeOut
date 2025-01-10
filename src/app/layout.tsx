import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/system";

import "./globals.css";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "HelpMeOut",
  description: "Screen sharing and video chat for developers",
  keywords: ["screen sharing", "video chat", "developers", "share video"],
  openGraph: {
    title: "HelpMeOut",
    description: "Screen sharing and video chat for developers",
    url: "https://yourwebsite.com",
    siteName: "HelpMeOut",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "HelpMeOut Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpMeOut",
    description: "Screen sharing and video chat for developers",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <body>
        <NextUIProvider>{children}</NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}
