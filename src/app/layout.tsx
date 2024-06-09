"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NhostProvider } from "@nhost/react";
import { nhost } from "@/lib/nhost";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Next To Do",
//   description: "Next Gen To Do Application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NhostProvider nhost={nhost}>{children}</NhostProvider>
      </body>
    </html>
  );
}
