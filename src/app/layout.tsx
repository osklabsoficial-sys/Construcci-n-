import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CONSTRUTECH | Construcción e Interiorismo de Alta Calidad · CDMX",
  description:
    "Empresa líder en construcción e interiorismo en Ciudad de México. Soluciones integrales para proyectos residenciales, comerciales e industriales. +15 años de experiencia, +200 obras entregadas.",
  keywords: [
    "construcción",
    "interiorismo",
    "remodelaciones CDMX",
    "obra civil",
    "CONSTRUTECH",
    "constructora Ciudad de México",
  ],
  authors: [{ name: "CONSTRUTECH" }],
  icons: {
    icon: "/img/logo-icon.png",
  },
  openGraph: {
    title: "CONSTRUTECH | Construcción e Interiorismo de Alta Calidad",
    description:
      "Soluciones integrales para proyectos residenciales, comerciales e industriales en CDMX.",
    siteName: "CONSTRUTECH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
