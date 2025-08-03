import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Guitar, Sparkles, Gem, Package, ShieldCheck, Truck } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <Image
          src="/pana_alba_AI.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Unleash Your Sound with Custom Guitar Picks
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
            Design your unique pick, express your style, and elevate your playing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/customize-your-pick" passHref>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Customizing <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/guitar-picks" passHref>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Picks <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Why Choose Harpick?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Guitar className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Unmatched Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  From material to design, create a pick that's truly yours.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Gem className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Premium Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Durable and comfortable picks for every playing style.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Package className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Fast & Reliable Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Get your custom picks delivered to your door, worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of musicians who trust Harpick for their unique guitar picks.
          </p>
          <Link href="/customize-your-pick" passHref>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Design Your Pick Now! <Sparkles className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">What Our Customers Say</h2>
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
          <h3 className="text-2xl font-bold mb-8 text-gray-700">Trusted by Musicians Worldwide</h3>
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
