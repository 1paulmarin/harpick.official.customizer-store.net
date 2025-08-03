import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ShieldCheck, Truck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-center bg-yellow-400 overflow-hidden">
        <Image
          src="/pana_alba_AI.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg text-black">
            Turn Your Imagination into Reality
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md text-gray-800">
            Craft your unique guitar pick. Design, play, inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/customize-your-pick">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              >
                Customize Your Pick
              </Button>
            </Link>
            <Link href="/guitar-picks">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 shadow-lg bg-transparent transition-all duration-300 ease-in-out hover:scale-105"
              >
                Shop Premade Picks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Harpick?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-palette text-primary"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.49-.172-.93-.456-1.228-.273-.283-.582-.514-.902-.732C11.13 16.567 11 15.84 11 15s.13-1.567.39-2.28c.26-.713.5-1.42.5-2.22 0-.607-.152-1.157-.445-1.588-.293-.43-.654-.757-1.06-.95Z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 4.5 8.32c.926 0 1.648-.746 1.648-1.648 0-.49-.172-.93-.456-1.228-.273-.283-.582-.514-.902-.732C11.13 16.567 11 15.84 11 15s.13-1.567.39-2.28c.26-.713.5-1.42.5-2.22 0-.607-.152-1.157-.445-1.588-.293-.43-.654-.757-1.06-.95Z" />
                  <path d="M2.92 13.89a2.5 2.5 0 0 0-.72 1.81c.07.86.53 1.66 1.24 2.24L4 19l1.26-1.26a6.5 6.5 0 0 0 2.4 1.4l.26.08A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Unleash Creativity</h3>
              <p className="text-muted-foreground">Design your pick with custom images, text, and colors.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-gem text-primary"
                >
                  <path d="M6 3h12l4 6-10 13L2 9Z" />
                  <path d="M11 3 8 9l4 13 4-13-3-6" />
                  <path d="M2 9h20" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">Durable materials and precise 3D printing for a perfect feel.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck text-primary"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.61a1 1 0 0 0-.88-.91l-7.05-1.26A2 2 0 0 0 12 7.4V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <circle cx="7" cy="18" r="2" />
                  <path d="M15 18H9" />
                  <circle cx="17" cy="18" r="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Fast Shipping</h3>
              <p className="text-muted-foreground">Quick turnaround times to get your custom picks to you faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-yellow-50 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of musicians who trust Harpick for their unique guitar picks.
          </p>
          <Link href="/customize-your-pick" passHref>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Design Your Pick Now! <Sparkles className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg bg-white">
              <CardContent className="text-gray-700 italic">
                "The quality of these picks is incredible! My custom design came out perfectly. Highly recommend!"
              </CardContent>
              <div className="mt-4 text-right font-semibold text-gray-800">- Alex R.</div>
            </Card>
            <Card className="p-6 shadow-lg bg-white">
              <CardContent className="text-gray-700 italic">
                "Finally, a pick that truly reflects my personality. The engraving is super precise."
              </CardContent>
              <div className="mt-4 text-right font-semibold text-gray-800">- Sarah L.</div>
            </Card>
            <Card className="p-6 shadow-lg bg-white">
              <CardContent className="text-gray-700 italic">
                "Fast shipping and amazing customer service. Harpick is my go-to for custom guitar accessories."
              </CardContent>
              <div className="mt-4 text-right font-semibold text-gray-800">- Mike D.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges/Logos Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Musicians Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            <ShieldCheck className="h-16 w-16 text-green-600" />
            <Truck className="h-16 w-16 text-blue-600" />
            <Image src="/harpick-logo.png" alt="Harpick Logo" width={120} height={120} className="object-contain" />
            {/* Add more logos or trust badges as needed */}
          </div>
        </div>
      </section>
    </div>
  )
}
