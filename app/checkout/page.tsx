"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart-context"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle, CreditCard, Truck, Download, CheckCircle2, Package, DollarSign } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { basePickPrice } from "@/lib/data"
import { calculateShippingCost } from "@/lib/utils"

// Define the structure for a saved design
interface SavedDesign {
  id: string
  name: string
  pickColor: string
  isBackSideSelected: boolean
  customText: string
  textColor: string
  fontSize: string
  fontFamily: string
  imageScale: number
  imageRotation: number
  imageOffsetX: number
  imageOffsetY: number
  textOffsetX: number
  textOffsetY: number
  textScale: number
  customImageUrls: string[]
  engravingText: string
  engravingImageUrl?: string
  engravingImageScale?: number
  engravingTextScale?: number
  selectedMaterial: "celluloid" | "metal" | "wood"
}

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
    paymentMethod: "", // This field is not used in the current form, but kept for consistency
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    notes: "",
    deliveryOption: "standard", // New state for delivery option
  })
  const [shippingCost, setShippingCost] = useState(0)
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([])
  const [designName, setDesignName] = useState("")
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null)

  // Recalculate shipping cost whenever total or country changes
  useEffect(() => {
    setShippingCost(calculateShippingCost(getTotalPrice(), formData.country))
  }, [getTotalPrice(), formData.country])

  // Load designs from localStorage on component mount
  useEffect(() => {
    const storedDesigns = localStorage.getItem("customPickDesigns")
    if (storedDesigns) {
      setSavedDesigns(JSON.parse(storedDesigns))
    }
  }, [])

  // Save designs to localStorage whenever savedDesigns changes
  useEffect(() => {
    localStorage.setItem("customPickDesigns", JSON.stringify(savedDesigns))
  }, [savedDesigns])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, deliveryOption: value }))
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

  // Function to save a design
  const handleSaveDesign = useCallback(() => {
    if (!designName.trim()) {
      toast.error("Please enter a design name.")
      return
    }

    // For simplicity, we'll save the first custom pick in the cart if available
    // In a real app, you'd likely have a dedicated "save design" flow on the customization page
    const customPickInCart = items.find((item) => item.customization)
    if (!customPickInCart) {
      toast.error("No customizable pick found in cart to save.")
      return
    }

    const newDesign: SavedDesign = {
      id: `design-${Date.now()}`,
      name: designName,
      pickColor: customPickInCart.customization?.color || "#FFFFFF",
      isBackSideSelected: customPickInCart.customization?.backSide === "Yes",
      customText: customPickInCart.customization?.customText || "",
      textColor: customPickInCart.customization?.textColor || "#000000",
      fontSize: customPickInCart.customization?.fontSize || "36px",
      fontFamily: customPickInCart.customization?.fontFamily || "sans-serif",
      imageScale: customPickInCart.customization?.imageScale || 1.0,
      imageRotation: customPickInCart.customization?.imageRotation || 0,
      imageOffsetX: customPickInCart.customization?.imageOffsetX || 0,
      imageOffsetY: customPickInCart.customization?.imageOffsetY || 0,
      textOffsetX: customPickInCart.customization?.textOffsetX || 0,
      textOffsetY: customPickInCart.customization?.textOffsetY || 0,
      textScale: customPickInCart.customization?.textScale || 1.0,
      customImageUrls:
        customPickInCart.customization?.customImage === "Image uploaded" && customPickInCart.image
          ? [customPickInCart.image]
          : [],
      engravingText: customPickInCart.customization?.engravingText || "",
      engravingImageUrl: customPickInCart.customization?.engravingImage || undefined,
      engravingImageScale: customPickInCart.customization?.engravingImageScale || 1.0,
      engravingTextScale: customPickInCart.customization?.engravingTextScale || 1.0,
      selectedMaterial: customPickInCart.customization?.material || "celluloid",
    }

    setSavedDesigns([...savedDesigns, newDesign])
    setDesignName("")
    toast.success("Design saved successfully!")
  }, [designName, items, savedDesigns])

  // Function to load a design (simplified for checkout context, typically done on customize page)
  const handleLoadDesign = useCallback(() => {
    if (!selectedDesignId) return

    const design = savedDesigns.find((d) => d.id === selectedDesignId)
    if (design) {
      // In a real application, loading a design here would likely mean
      // redirecting to the customize page with the design pre-loaded,
      // or adding it as a new item to the cart.
      // For this demo, we'll just show a toast.
      toast.info(
        `Design "${design.name}" loaded (conceptually). You would typically go to the customize page to apply it.`,
      )
    }
  }, [selectedDesignId, savedDesigns])

  // Function to delete a design
  const handleDeleteDesign = useCallback(() => {
    if (!selectedDesignId) return

    const updatedDesigns = savedDesigns.filter((d) => d.id !== selectedDesignId)
    setSavedDesigns(updatedDesigns)
    setSelectedDesignId(null)
    toast.success("Design deleted successfully!")
  }, [selectedDesignId, savedDesigns])

  // Function to download the design as an image (if it's a custom pick)
  const handleDownloadDesign = useCallback(async (itemImage: string | undefined, itemName: string) => {
    if (!itemImage || itemImage.startsWith("/placeholder.svg")) {
      toast.error("This item does not have a custom image to download.")
      return
    }

    try {
      // Create a temporary image element to load the base64 image
      const img = new window.Image()
      img.crossOrigin = "anonymous" // Important for CORS if image is from external source
      img.src = itemImage

      img.onload = async () => {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          const link = document.createElement("a")
          link.href = canvas.toDataURL("image/png")
          link.download = `${itemName.replace(/\s/g, "-")}-design.png`
          link.click()
          toast.success("Design downloaded successfully!")
        }
      }
      img.onerror = (error) => {
        console.error("Error loading image for download:", error)
        toast.error("Failed to load image for download. Please try again.")
      }
    } catch (error) {
      console.error("Error downloading design:", error)
      toast.error("Failed to download design. Please try again.")
    }
  }, [])

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
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
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
              <Input id="zipCode" placeholder="10001" value={formData.zip} onChange={handleInputChange} required />
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
                  {/* Add more countries as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Order Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="e.g., Leave at front door"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* New: Static Pricing & Delivery Information (moved from customize-your-pick) */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Pricing & Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="text-lg font-semibold">Price: €{basePickPrice.toFixed(2)} per pick</p>
            <p className="text-lg font-semibold">Bundle Offer: 3 for €7.99</p>
            <p className="text-lg font-semibold">Delivery:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ships worldwide.</li>
              <li>Production time: approximately 1–2 business days.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Existing: Pricing & Delivery Details (interactive, kept here) */}
        <Card className="mt-6 shadow-lg">
          <CardHeader>
            <CardTitle>Pricing & Delivery Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country">Select Country</Label>
              <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Romania">Romania (Free Shipping)</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Italy">Italy</SelectItem>
                  <SelectItem value="Spain">Spain</SelectItem>
                  <SelectItem value="Poland">Poland</SelectItem>
                  <SelectItem value="Other">Other (Worldwide)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>
                  {shippingCost === 0 ? "Free" : `€${shippingCost.toFixed(2)}`}
                  {formData.country !== "Romania" &&
                    shippingCost === 0 &&
                    getTotalPrice() >=
                      (["Germany", "France", "Italy", "Spain", "Poland"].includes(formData.country) ? 30 : 35) && (
                      <span className="text-xs text-muted-foreground ml-1">
                        (Free over €
                        {["Germany", "France", "Italy", "Spain", "Poland"].includes(formData.country) ? 30 : 35})
                      </span>
                    )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>€{(getTotalPrice() + shippingCost).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 shadow-lg">
          <CardHeader>
            <CardTitle>Save/Load Designs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
              <p className="font-bold">Important Note:</p>
              <p className="text-sm">
                Due to browser security limitations, **uploaded image files cannot be permanently saved in your
                browser's local storage**. If you save a design with an uploaded image and then refresh the page or
                close your browser, you will need to re-upload the image when loading that design. All other
                customization settings (color, text, transformations) will persist.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="design-name">Design Name</Label>
              <Input
                id="design-name"
                placeholder="Enter a name for your design"
                value={designName}
                onChange={(e) => setDesignName(e.target.value)}
                className="py-3 px-4"
              />
              <Button onClick={handleSaveDesign} className="w-full py-3 px-4">
                Save Current Design (from first custom pick in cart)
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="load-design">Load Saved Design</Label>
              <Select value={selectedDesignId || ""} onValueChange={setSelectedDesignId}>
                <SelectTrigger id="load-design" className="py-3 px-4">
                  <SelectValue placeholder="Select a saved design" />
                </SelectTrigger>
                <SelectContent>
                  {savedDesigns.length === 0 && (
                    <SelectItem value="no-designs" disabled>
                      No saved designs
                    </SelectItem>
                  )}
                  {savedDesigns.map((design) => (
                    <SelectItem key={design.id} value={design.id}>
                      {design.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2 flex-col sm:flex-row">
                <Button onClick={handleLoadDesign} disabled={!selectedDesignId} className="flex-1 py-3 px-4">
                  Load Selected (conceptually)
                </Button>
                <Button
                  onClick={handleDeleteDesign}
                  disabled={!selectedDesignId}
                  variant="destructive"
                  className="flex-1 py-3 px-4"
                >
                  Delete Selected
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => toast.info("Download functionality is per-item in the cart above.")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4"
              disabled={true} // Disable as download is per-item
            >
              <Download className="w-4 h-4 mr-2" />
              Download Design as Image (per item)
            </Button>
          </CardFooter>
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
              <Input
                id="cardNumber"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="XXX" value={formData.cvv} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* New Delivery and Payment Options */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Delivery & Payment Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Standard Delivery</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-2xl font-bold">$5.00</div>
                <p className="text-xs text-muted-foreground">Estimated delivery: 5-7 business days</p>
                <RadioGroup
                  defaultValue="standard"
                  className="mt-4"
                  value={formData.deliveryOption}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">Select</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Express Delivery</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-2xl font-bold">$15.00</div>
                <p className="text-xs text-muted-foreground">Estimated delivery: 2-3 business days</p>
                <RadioGroup
                  defaultValue="standard"
                  className="mt-4"
                  value={formData.deliveryOption}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express">Select</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pickup In-Store</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-2xl font-bold">Free</div>
                <p className="text-xs text-muted-foreground">Available for pickup in 1-2 business days</p>
                <RadioGroup
                  defaultValue="standard"
                  className="mt-4"
                  value={formData.deliveryOption}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup">Select</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-2xl font-bold">Credit Card</div>
                <p className="text-xs text-muted-foreground">Secure payment via Stripe</p>
                <RadioGroup
                  defaultValue="credit-card"
                  className="mt-4"
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Select</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
        </section>
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
              <span>€{(getTotalPrice() + shippingCost).toFixed(2)}</span>
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
