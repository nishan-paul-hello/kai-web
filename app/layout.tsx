import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { RegisterSW } from "@/components/register-sw"
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
    icon: "/icon.png",
    apple: "/icon.png",
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Toaster position="bottom-right" theme="dark" closeButton richColors />
        <RegisterSW />
        <Analytics />
      </body>
    </html>
  )
}
