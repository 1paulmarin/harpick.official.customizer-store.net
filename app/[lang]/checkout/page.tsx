import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import { CheckCircle, CreditCard, Truck } from "lucide-react"

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart()

  const shippingCost = 5.0
  const totalAmount = getTotalPrice() + shippingCost

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Shipping Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" /> Shipping Information
            </CardTitle>
            <CardDescription>Please provide your shipping details.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="New York" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" placeholder="NY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip/Postal Code</Label>
              <Input id="zip" placeholder="10001" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select required>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  {/* Add more countries as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Order Notes (Optional)</Label>
              <Textarea id="notes" placeholder="e.g., Leave at front door" />
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" /> Payment Information
            </CardTitle>
            <CardDescription>Enter your payment details.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="XXX" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="card-name">Name on Card</Label>
              <Input id="card-name" placeholder="John Doe" required />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <Card className="lg:col-span-1 h-fit sticky top-4">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-md object-contain"
                />
                <div className="flex-grow">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€{getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>€{shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>€{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full">
            <CheckCircle className="h-5 w-5 mr-2" /> Place Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
