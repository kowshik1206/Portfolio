import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
