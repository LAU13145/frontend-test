import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainHeader } from "../components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Laura",
  description: "Frontend test for Laura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader />
        <main className="mx-auto mt-2 mb-6 grid max-w-480 grid-cols-4 gap-2 bg-gradient-to-br from-slate-100 via-white to-blue-100 text-slate-900 md:grid-cols-6 md:gap-4 md:px-12 xl:grid-cols-12 xl:gap-6">
          <div className="col-span-full min-h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
