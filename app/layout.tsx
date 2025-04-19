import type React from "react"
import "./globals.css"
import "../styles/animations.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Travel Community",
  description: "Join our vibrant travel community and connect with fellow adventurers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
