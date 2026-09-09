import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Kowshik Boggavarapu | Full-Stack Developer Portfolio",
  description: "B.Tech IT student specializing in Full-Stack Development, Blockchain, and Modern Web Technologies",
  keywords: "Full-Stack Developer, React, Next.js, TypeScript, Blockchain, Web Developer",
  authors: [{ name: "Kowshik Boggavarapu" }],
  metadataBase: new URL(`https://kowshik1206.github.io${siteBasePath}/`),
  openGraph: {
    title: "Kowshik Boggavarapu | Full-Stack Developer Portfolio",
    description: "B.Tech IT student specializing in Full-Stack Development, Blockchain, and Modern Web Technologies",
    url: "/",
    siteName: "Kowshik Boggavarapu Portfolio",
    type: "website",
    images: [
      {
        url: "/developer-avatar.png",
        width: 1200,
        height: 1200,
        alt: "Kowshik Boggavarapu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kowshik Boggavarapu | Full-Stack Developer Portfolio",
    description: "B.Tech IT student specializing in Full-Stack Development, Blockchain, and Modern Web Technologies",
    images: ["/developer-avatar.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
