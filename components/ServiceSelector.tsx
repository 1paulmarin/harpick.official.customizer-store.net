"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MaterialSelectorDialog from "@/components/MaterialSelectorDialog" // Updated import
import { Paintbrush } from "lucide-react"
import { useState } from "react"

interface ServiceSelectorProps {
  initialSelectedMaterial: "celluloid" | "metal" | "wood" | null
  onMaterialSelectedAndCloseDialog: (material: "celluloid" | "metal" | "wood") => void
  selectedColor: string
  onColorChange: (color: string) => void
  uploadedImageUrl: string | null
  onImageUpload: (files: FileList | null) => void
  onRemoveImage: () => void
  imageScale: number
  onImageScaleChange: (scale: number) => void
  imageRotation: number
  onImageRotationChange: (rotation: number) => void
  imageOffsetX: number
  onImageOffsetXChange: (offset: number) => void
  imageOffsetY: number
  onImageOffsetYChange: (offset: number) => void
  onResetImageTransformations: () => void
  customText: string
  onTextChange: (text: string) => void
  onClearText: () => void
  textColor: string
  onTextColorChange: (color: string) => void
  fontSize: string
  onFontSizeChange: (size: string) => void
  fontFamily: string
  onFontFamilyChange: (font: string) => void
  textScale: number
  onTextScaleChange: (scale: number) => void
  textOffsetX: number
  onTextOffsetXChange: (offset: number) => void
  textOffsetY: number
  onTextOffsetYChange: (offset: number) => void
  onResetTextTransformations: () => void
  isBackSideSelected: boolean
  onBackSideToggle: (checked: boolean) => void
  selectedThickness: string
  onThicknessChange: (thickness: string) => void
  engravingText: string
  onEngravingTextChange: (text: string) => void
  uploadedEngravingImageUrl: string | null
  onEngravingImageUpload: (file: File | null) => void
  onRemoveEngravingImage: () => void
  engravingImageScale: number
  onEngravingImageScaleChange: (scale: number) => void
  onResetEngravingImageTransformations: () => void
  engravingTextScale: number
  onEngravingTextScaleChange: (scale: number) => void
  onResetEngravingTextTransformations: () => void
  currentPrice: number
  onAddToCart: () => void
}

export function ServiceSelector({
  initialSelectedMaterial,
  onMaterialSelectedAndCloseDialog,
  selectedColor,
  onColorChange,
  uploadedImageUrl,
  onImageUpload,
  onRemoveImage,
  imageScale,
  onImageScaleChange,
  imageRotation,
  onImageRotationChange,
  imageOffsetX,
  onImageOffsetXChange,
  imageOffsetY,
  onImageOffsetYChange,
  onResetImageTransformations,
  customText,
  onTextChange,
  onClearText,
  textColor,
  onTextColorChange,
  fontSize,
  onFontSizeChange,
  fontFamily,
  onFontFamilyChange,
  textScale,
  onTextScaleChange,
  textOffsetX,
  onTextOffsetXChange,
  textOffsetY,
  onTextOffsetYChange,
  onResetTextTransformations,
  isBackSideSelected,
  onBackSideToggle,
  selectedThickness,
  onThicknessChange,
  engravingText,
  onEngravingTextChange,
  uploadedEngravingImageUrl,
  onEngravingImageUpload,
  onRemoveEngravingImage,
  engravingImageScale,
  onEngravingImageScaleChange,
  onResetEngravingImageTransformations,
  engravingTextScale,
  onEngravingTextScaleChange,
  onResetEngravingTextTransformations,
  currentPrice,
  onAddToCart,
}: ServiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMaterialConfirmed = (material: "celluloid" | "metal" | "wood") => {
    onMaterialSelectedAndCloseDialog(material)
    setIsOpen(false) // Close dialog after material is confirmed
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full py-3 px-4 text-lg bg-blue-600 hover:bg-blue-700 text-white">
          <Paintbrush className="w-5 h-5 mr-2" /> Customize Your Pick
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Select Your Pick Material</DialogTitle>
          <DialogDescription>Choose the base material for your custom guitar pick.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <MaterialSelectorDialog
            initialSelectedMaterial={initialSelectedMaterial}
            onMaterialConfirmed={handleMaterialConfirmed}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
