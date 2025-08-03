"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import { CheckCircle, CreditCard, Truck } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    notes: "",
  })

  const shippingCost = 5.0
  const totalAmount = getTotalPrice() + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.zipCode ||
      !formData.country ||
      !formData.cardNumber ||
      !formData.expiryDate ||
      !formData.cvv ||
      !formData.cardName
    ) {
      toast.error("Please fill in all required fields.")
      return
    }

    // Simulate order processing
    console.log("Order submitted:", formData, items, "Shipping Cost:", shippingCost)
    toast.success("Order placed successfully! Thank you for your purchase.")
    clearCart()
    router.push("/") // Redirect to home or a confirmation page
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="text-center p-8 shadow-lg">
          <CardContent className="space-y-4">
            <p className="text-xl text-muted-foreground">Your cart is empty. Please add items before checking out.</p>
            <Button
              onClick={() => router.push("/guitar-picks")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Go to Shop
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="New York" value={formData.city} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" placeholder="NY" value={formData.state} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip/Postal Code</Label>
              <Input id="zipCode" placeholder="10001" value={formData.zipCode} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)} required>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Romania">Romania</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Italy">Italy</SelectItem>
                  <SelectItem value="Spain">Spain</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="USA">United States</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Order Notes (Optional)</Label>
              <Textarea id="notes" placeholder="e.g., Leave at front door" value={formData.notes} onChange={handleInputChange} />
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
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" value={formData.cardNumber} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="XXX" value={formData.cvv} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Doe" value={formData.cardName} onChange={handleInputChange} required />
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
          <Button size="lg" className="w-full" onClick={handleSubmit}>
            <CheckCircle className="h-5 w-5 mr-2" /> Place Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
