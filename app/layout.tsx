import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "KAI - Advanced AI Solutions",
  description:
    "Cutting-edge AI-powered software for mobile, desktop, and web. Cybersecurity, AI agents, MCP servers, and LLM technology.",
  keywords: ["AI", "Machine Learning", "Cybersecurity", "AI Agents", "LLM", "MCP Server", "Enterprise AI"],
  authors: [{ name: "KAI" }],
  creator: "KAI",
  publisher: "KAI",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KAI",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KAI",
    title: "KAI - Advanced AI Solutions",
    description: "Cutting-edge AI-powered software for mobile, desktop, and web",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAI - Advanced AI Solutions",
    description: "Cutting-edge AI-powered software for mobile, desktop, and web",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00F07C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
