"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import Link from "next/link"
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateItemQuantity, getTotalPrice } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <Card className="text-center py-12">
          <CardTitle className="mb-4">Your cart is empty!</CardTitle>
          <CardContent>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/guitar-picks" passHref>
              <Button size="lg">Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4">
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-muted-foreground text-sm">Price: €{item.price.toFixed(2)}</p>
                  {item.customization && (
                    <div className="text-xs text-muted-foreground mt-1">
                      <p>Material: {item.customization.material}</p>
                      {item.customization.color && <p>Color: {item.customization.color}</p>}
                      {item.customization.customText && <p>Text: {item.customization.customText}</p>}
                      {item.customization.engravingText && <p>Engraving: {item.customization.engravingText}</p>}
                      {item.customization.backSide === "Yes" && <p>Back Side Design: Yes</p>}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="ml-2 text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-1 h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>€5.00</span> {/* Example fixed shipping cost */}
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>€{(getTotalPrice() + 5.0).toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/checkout" passHref className="w-full">
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
