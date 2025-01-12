import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/system";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://helpmeout-silk.vercel.app/"),
  title: "HelpMeOut",
  description: "Screen sharing and video chat for developers",
  keywords: ["screen sharing", "video chat", "developers", "share video"],
  alternates: {
    languages: {
      en: "/en-US",
    },
  },
  openGraph: {
    title: "HelpMeOut",
    description: "Screen sharing and video chat for developers",
    url: "/",
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
    <html lang="en" className={`${inter.className} ${sora.className}`}>
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
      </body>
    </html>
  );
}
