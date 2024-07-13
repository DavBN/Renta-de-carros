import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Renta de Carros",
  description: "Creado por Oscar Gallego",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
      <NextTopLoader color="#000"/>
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
