import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { LanguageProvider } from "@/lib/languageContext";
import LanguageWrapper from "./layout/languageWrapper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sadel",
  description: "Sadel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${urbanist.variable} ${urbanist.variable} antialiased`}
      >
        <LanguageProvider>
          <LanguageWrapper>
            <Header/>
            {children}
            <Footer/>
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
