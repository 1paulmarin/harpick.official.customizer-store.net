"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HardHat } from "lucide-react"

interface MaterialSelectorDialogProps {
  initialSelectedMaterial: "celluloid" | "metal" | "wood" | null
  onMaterialConfirmed: (material: "celluloid" | "metal" | "wood") => void
}

export default function MaterialSelectorDialog({
  initialSelectedMaterial,
  onMaterialConfirmed,
}: MaterialSelectorDialogProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<"celluloid" | "metal" | "wood" | null>(
    initialSelectedMaterial,
  )

  return (
    <>
      {/* Pick Material Selection */}
      <Accordion type="single" collapsible defaultValue="pick-material" className="w-full">
        <AccordionItem value="pick-material">
          <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
            <HardHat className="w-4 h-4" /> Pick Material
          </AccordionTrigger>
          <AccordionContent className="space-y-6 p-4 border rounded-lg bg-muted/20">
            <div className="space-y-2">
              <Label htmlFor="pick-material-select" className="flex items-center gap-2">
                Select Material
              </Label>
              <Select
                value={selectedMaterial || ""}
                onValueChange={(value: "celluloid" | "metal" | "wood") => {
                  setSelectedMaterial(value)
                  onMaterialConfirmed(value) // Confirm immediately on selection
                }}
              >
                <SelectTrigger id="pick-material-select" className="py-3 px-4">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="celluloid">Celluloid (Standard)</SelectItem>
                  <SelectItem value="metal">Metal (Engravable)</SelectItem>
                  <SelectItem value="wood">Wood (Engravable)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
