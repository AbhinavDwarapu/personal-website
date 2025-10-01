import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  redaction10,
  redaction20,
  redaction35,
  redaction50,
  redaction70,
  redaction100,
  redactionBase,
  steps
} from "./custom-fonts";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav D. | Software Engineer",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redaction10.variable} ${redaction20.variable} ${redaction35.variable} ${redaction50.variable} ${redaction70.variable} ${redaction100.variable} ${redactionBase.variable} ${steps.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
