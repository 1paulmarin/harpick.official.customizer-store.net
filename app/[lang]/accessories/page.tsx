"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { accessoryProducts } from "@/lib/data"
import { Plus } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { toast } from "sonner"

export default function AccessoriesPage() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof accessoryProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      customization: {
        type: "accessory",
      },
    })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Guitar Accessories</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Enhance your guitar playing experience with our premium accessories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {accessoryProducts.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mb-3">{product.description}</CardDescription>
              <div className="text-xl font-bold text-gray-900 mb-2">€{product.price.toFixed(2)}</div>
            </CardContent>
            <CardFooter className="p-4 border-t flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/product/${product.id}`}>View Details</Link>
              </Button>
              <Button size="sm" onClick={() => handleAddToCart(product)}>
                <Plus className="h-4 w-4 mr-2" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
