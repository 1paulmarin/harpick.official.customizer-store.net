import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us & Contact</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn more about Harpick and how to get in touch with us.
        </p>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <Card className="p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Harpick was founded with a passion for music and a desire to empower musicians with tools that truly
              reflect their individuality. We believe that a guitar pick is more than just an accessory; it's an
              extension of a musician's personality and playing style.
            </p>
            <p>
              Our journey began with a simple idea: to offer unparalleled customization options for guitar picks,
              combining premium materials with cutting-edge design capabilities. From classic celluloid to modern metal
              and wood, we provide a diverse range of choices to suit every artist's needs.
            </p>
            <p>
              We are committed to quality, craftsmanship, and customer satisfaction. Every pick is crafted with
              precision and care, ensuring it not only looks great but also enhances your performance. Join the Harpick
              family and let's make some music together!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Image Section */}
      <section className="mb-16">
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/pagina about first time in romania.png"
            alt="Harpick Workshop"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
              Crafting Your Perfect Pick
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
