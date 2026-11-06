import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Landing Grupo Construtech",
  description:
    "Grupo Construtech S.A. de C.V. — Construcción, interiorismo y acabados de alta calidad en la Ciudad de México. Soluciones integrales para proyectos residenciales, comerciales e industriales.",
  keywords: [
    "construcción",
    "interiorismo",
    "remodelaciones CDMX",
    "velarias",
    "Grupo Construtech",
    "constructora Ciudad de México",
  ],
  authors: [{ name: "Grupo Construtech S.A. de C.V." }],
  icons: {
    icon: "/assets/image-CCeDO6ue.png",
  },
  openGraph: {
    title: "Grupo Construtech | Construcción e Interiorismo de Alta Calidad",
    description:
      "Soluciones integrales para proyectos residenciales, comerciales e industriales en la Ciudad de México.",
    siteName: "Grupo Construtech",
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
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
