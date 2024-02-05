"use client";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {createContext} from "react";
import {uniqueNamesGenerator, names} from "unique-names-generator";

const inter = Inter({subsets: ["latin"]});
export const UsernameContext = createContext("");

const randomName: string = uniqueNamesGenerator({
  dictionaries: [names],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UsernameContext.Provider value={randomName}>
        <body className={inter.className}>{children}</body>
      </UsernameContext.Provider>
    </html>
  );
}
