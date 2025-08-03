import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* The "Get in Touch" Card has been completely removed. */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Before contacting us, please check our{" "}
                <Link href="/faq" className="text-blue-600 hover:underline">
                  FAQ page
                </Link>{" "}
                for answers to common questions regarding orders, shipping, customization, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
