import type React from "react"
import { Inter } from "next/font/google"
import '../styles/globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Harpick - Custom Guitar Picks",
  description: "Customize your own guitar picks with unique designs and materials.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 