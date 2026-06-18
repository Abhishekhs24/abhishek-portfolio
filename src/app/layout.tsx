import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek HS | Software Engineer II & Angular Developer",
  description: "Building scalable enterprise applications, AI-powered experiences, and modern web platforms. Explore my portfolio showcasing expertise in Angular, TypeScript, Node.js, and enterprise development.",
  keywords: "Angular Developer, Software Engineer, TypeScript, Node.js, MEAN Stack, Enterprise Applications, Web Development",
  authors: [{ name: "Abhishek HS", url: "https://abhishekhs.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekhs.dev",
    title: "Abhishek HS | Software Engineer II & Angular Developer",
    description: "Building scalable enterprise applications with Angular, TypeScript, and modern technologies.",
    siteName: "Abhishek HS Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek HS | Software Engineer II",
    description: "Explore my portfolio and expertise in enterprise web development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
