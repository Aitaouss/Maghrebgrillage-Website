import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const xenoisSuperPro = {
  variable: "--font-xenois",
}

export const metadata: Metadata = {
  title: "Maghreb Grillage - Solutions de Clôture et Grillage Professionnelles",
  description:
    "Spécialiste en clôtures, grillages et solutions de sécurité au Maroc. Qualité professionnelle, installation experte.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${xenoisSuperPro.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
