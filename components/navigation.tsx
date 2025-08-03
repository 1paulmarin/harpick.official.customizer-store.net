"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, Guitar, Sparkles, Info, BookOpen, Home, Palette, Gem } from "lucide-react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useCart } from "@/components/cart-context"
import Image from "next/image"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const { items } = useCart()
  const totalItemsInCart = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col items-center justify-center" prefetch={false}>
          <Image
            src="/Design_fără_titlu__17_-removebg-preview.png"
            alt="Harpick Logo"
            width={1536}
            height={384}
            className="h-96 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Home
          </Link>
          <Link
            href="/guitar-picks"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Guitar Picks
          </Link>
          <Link
            href="/accessories"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Accessories
          </Link>
          <Link
            href="/customize-your-pick"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Customize Your Pick
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                About Us
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/about-contact" prefetch={false}>
                  About & Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" prefetch={false}>
                  FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/privacy-policy" prefetch={false}>
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/terms-and-conditions" prefetch={false}>
                  Terms & Conditions
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/cart" passHref>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItemsInCart > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {totalItemsInCart}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="flex flex-col items-center justify-center pb-6" prefetch={false}>
                <Image
                  src="/Design_fără_titlu__17_-removebg-preview.png"
                  alt="Harpick Logo"
                  width={1536}
                  height={384}
                  className="h-96 w-auto"
                />
              </Link>
              <div className="grid gap-4 py-4">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Home className="h-5 w-5" /> Home
                </Link>
                <Link
                  href="/guitar-picks"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Guitar className="h-5 w-5" /> Guitar Picks
                </Link>
                <Link
                  href="/accessories"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Gem className="h-5 w-5" /> Accessories
                </Link>
                <Link
                  href="/customize-your-pick"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Sparkles className="h-5 w-5" /> Customize Your Pick
                </Link>
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-md font-semibold mb-2">About Us</h3>
                  <div className="grid gap-2 pl-4">
                    <Link
                      href="/about-contact"
                      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                      prefetch={false}
                    >
                      <Info className="h-4 w-4" /> About & Contact
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                      prefetch={false}
                    >
                      <BookOpen className="h-4 w-4" /> FAQ
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                      prefetch={false}
                    >
                      <Palette className="h-4 w-4" /> Privacy Policy
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                      prefetch={false}
                    >
                      <BookOpen className="h-4 w-4" /> Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
