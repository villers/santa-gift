import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Snow } from "app/components/snow";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalogue Noel",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Snow />
        <div className="flex flex-col justify-between min-h-screen bg-pink-50">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
