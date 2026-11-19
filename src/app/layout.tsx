import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Grupo Construtech | Construcción e Interiorismo — Diseño que trasciende, obra que perdura",
  description:
    "Grupo Construtech S.A. de C.V. — Construcción e interiorismo. Diseño que trasciende, obra que perdura. Soluciones integrales para proyectos residenciales, comerciales e industriales en la Ciudad de México.",
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
    icon: "/assets/logo-icon.png",
  },
  openGraph: {
    title: "Grupo Construtech | Construcción e Interiorismo — Diseño que trasciende, obra que perdura",
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
