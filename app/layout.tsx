import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Patrick_Hand, Edu_SA_Hand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const indieFlower = Edu_SA_Hand({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${indieFlower.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
