import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}
