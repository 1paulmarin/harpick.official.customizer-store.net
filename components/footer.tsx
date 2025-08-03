import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">Harpick</span>
          </Link>
          <p className="text-gray-800 text-sm">
            Crafting custom guitar picks that resonate with your unique sound and style.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-gray-950 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-800 hover:text-gray-950 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="mailto:harpick.romania@gmail.com"
              aria-label="Email"
              className="text-gray-800 hover:text-gray-950 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-950 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/guitar-picks" className="text-gray-800 hover:text-gray-950 transition-colors">
                Guitar Picks
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="text-gray-800 hover:text-gray-950 transition-colors">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/customize-your-pick" className="text-gray-800 hover:text-gray-950 transition-colors">
                Customize Your Pick
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-contact" className="text-gray-800 hover:text-gray-950 transition-colors">
                About & Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-800 hover:text-gray-950 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-gray-800 hover:text-gray-950 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-gray-800 hover:text-gray-950 transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 text-gray-800">
            <a
              href="mailto:harpick.romania@gmail.com"
              className="flex items-center gap-2 hover:text-gray-950 transition-colors"
            >
              <Mail className="h-5 w-5" /> harpick.romania@gmail.com
            </a>
            <p className="pl-7">harpick.romania</p>
            <p className="pl-7">Harpick SRL</p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-800 text-sm">
        © {new Date().getFullYear()} Harpick. All rights reserved.
      </div>
    </footer>
  )
}
