import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INSANITY - The Ultimate Beam Hub Experience",
  description:
    "Lightning-fast generators, military-grade security, and unmatched reliability. Trusted by 800+ users worldwide.",
  keywords: "beam hub, generators, security, premium access",
  authors: [{ name: "psykoticx" }],
  openGraph: {
    title: "INSANITY - The Ultimate Beam Hub Experience",
    description: "Lightning-fast generators, military-grade security, and unmatched reliability.",
    url: "https://insanityz.xyz",
    siteName: "INSANITY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INSANITY - The Ultimate Beam Hub Experience",
    description: "Lightning-fast generators, military-grade security, and unmatched reliability.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
