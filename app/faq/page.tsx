import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products and services.
        </p>
      </div>

      <Card className="p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">General Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">
                What materials are your guitar picks made from?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer guitar picks made from high-quality celluloid, metal (various types like stainless steel,
                brass), and wood (e.g., maple, rosewood). Each material offers a unique feel and tone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">How durable are your custom picks?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our picks are designed for durability. Celluloid picks are flexible and long-lasting, while metal and
                wood picks are exceptionally robust and can withstand extensive use. The customization (printing or
                engraving) is also made to be highly resistant to wear and tear.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">
                Do you offer picks in different thicknesses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer a range of thicknesses to suit different playing styles, from thin picks for strumming to
                thick picks for lead guitar and heavy riffs. You can select your preferred thickness on the
                customization page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>

        <CardHeader className="mt-8">
          <CardTitle className="text-2xl font-semibold mb-4">Customization Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="custom-1">
              <AccordionTrigger className="text-left font-medium">
                What kind of images can I upload for custom picks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For celluloid picks, you can upload high-resolution images (PNG, JPG, JPEG). For best results, we
                recommend images with clear subjects and, ideally, a transparent background (you can use tools like
                remove.bg). For metal and wood engraving, simple line art or black and white images work best for clear
                results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom-2">
              <AccordionTrigger className="text-left font-medium">Can I add text to my custom pick?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can add custom text to both celluloid picks (with various fonts, sizes, and colors) and to
                metal/wood picks (engraved text). Our customizer allows you to adjust position and scale.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom-3">
              <AccordionTrigger className="text-left font-medium">
                Is it possible to design both the front and back of the pick?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer an option to add a design to the back side of your pick for an additional fee. This allows
                for even more personalization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom-4">
              <AccordionTrigger className="text-left font-medium">
                What's the difference between custom pick customization and engraving?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Custom pick customization (for celluloid) involves full-color printing of images and text onto the pick
                surface. Engraving (for metal and wood) uses a laser to etch designs into the material, creating a
                tactile and permanent mark, typically in monochrome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>

        <CardHeader className="mt-8">
          <CardTitle className="text-2xl font-semibold mb-4">Order & Shipping Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="order-1">
              <AccordionTrigger className="text-left font-medium">How long does production take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Production time for custom picks is typically 1-2 business days after your order is confirmed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="order-2">
              <AccordionTrigger className="text-left font-medium">Do you ship internationally?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we ship our custom guitar picks and accessories worldwide. Shipping costs and delivery times will
                vary based on your location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="order-3">
              <AccordionTrigger className="text-left font-medium">
                What is your return policy for custom picks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Due to the personalized nature of custom picks, we generally do not accept returns or offer refunds
                unless there is a manufacturing defect or an error on our part. Please review your design carefully
                before placing your order.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
