"use client"

import { CardContent } from "@/components/ui/card"
import { useState, useCallback, useMemo, useEffect, useRef } from "react"
import { useCart } from "@/components/cart-context"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, RefreshCcw } from "lucide-react"
import Image from "next/image"
import html2canvas from "html2canvas"
import { pickColorMappings, basePickPrice, backSideCost, engravingCost, pickProducts } from "@/lib/data"
import { ServiceSelector } from "@/components/ServiceSelector"
import PickCustomizationControls from "@/components/PickCustomizationControls" // New import

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

export default function CustomizeYourPickPage() {
  const { addItem } = useCart()

  const [selectedMaterial, setSelectedMaterial] = useState<"celluloid" | "metal" | "wood" | null>(null)
  const [selectedColor, setSelectedColor] = useState(pickColorMappings[0].hex)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const [isBackSideSelected, setIsBackSideSelected] = useState(false)
  const [customText, setCustomText] = useState("")
  const [textColor, setTextColor] = useState("#000000") // Default to black
  const [fontSize, setFontSize] = useState("36px") // Default to medium
  const [fontFamily, setFontFamily] = useState("sans-serif") // Default to sans-serif
  const [textOffsetX, setTextOffsetX] = useState(0)
  const [textOffsetY, setTextOffsetY] = useState(0)
  const [imageScale, setImageScale] = useState(1.0)
  const [imageRotation, setImageRotation] = useState(0)
  const [imageOffsetX, setImageOffsetX] = useState(0)
  const [imageOffsetY, setImageOffsetY] = useState(0)
  const [selectedThickness, setSelectedThickness] = useState("0.71mm") // Default thickness
  const [textScale, setTextScale] = useState(1.0)
  const [zoomLevel, setZoomLevel] = useState(1.2) // Re-enabled zoom level

  // Engraving states
  const [engravingText, setEngravingText] = useState("")
  const [uploadedEngravingImageUrl, setUploadedEngravingImageUrl] = useState<string | null>(null)
  const [engravingTextScale, setEngravingTextScale] = useState(1.0)
  const [engravingImageScale, setEngravingImageScale] = useState(1.0)

  // States for saving/loading designs
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([])
  const [designName, setDesignName] = useState("")
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null)

  // Ref for the 2D viewer card to capture its content
  const pickViewerRef = useRef<HTMLDivElement>(null)
  // New ref specifically for the pick content to be downloaded
  const pickContentRef = useRef<HTMLDivElement>(null)

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

  // Reset states when material changes
  useEffect(() => {
    setUploadedImageUrl(null)
    setIsBackSideSelected(false)
    setCustomText("")
    setTextColor("#000000")
    setFontSize("36px")
    setFontFamily("sans-serif")
    setTextOffsetX(0)
    setTextOffsetY(0)
    setImageScale(1.0)
    setImageRotation(0)
    setImageOffsetX(0)
    setImageOffsetY(0)
    setTextScale(1.0)
    setEngravingText("")
    setUploadedEngravingImageUrl(null)
    setEngravingTextScale(1.0)
    setEngravingImageScale(1.0)
    // For celluloid, reset color to default white
    if (selectedMaterial === "celluloid") {
      setSelectedColor(pickColorMappings[0].hex)
    } else if (selectedMaterial === null) {
      // If material is reset to null, also reset color to default for initial state
      setSelectedColor(pickColorMappings[0].hex)
    }
  }, [selectedMaterial])

  const handleColorChange = useCallback((color: string) => {
    setSelectedColor(color)
  }, [])

  const handleImageUpload = useCallback((files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImageUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setUploadedImageUrl(null)
    }
  }, [])

  const handleRemoveImage = useCallback(() => {
    const fileInput = document.getElementById("image-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
    setUploadedImageUrl(null)
  }, [])

  const handleBackSideToggle = useCallback((checked: boolean) => {
    setIsBackSideSelected(checked)
  }, [])

  const handleTextChange = useCallback((text: string) => {
    setCustomText(text)
  }, [])

  const handleTextColorChange = useCallback((color: string) => {
    setTextColor(color)
  }, [])

  const handleFontSizeChange = useCallback((size: string) => {
    setFontSize(size)
  }, [])

  const handleFontFamilyChange = useCallback((font: string) => {
    setFontFamily(font)
  }, [])

  const handleTextOffsetXChange = useCallback((offset: number) => {
    setTextOffsetX(offset)
  }, [])

  const handleTextOffsetYChange = useCallback((offset: number) => {
    setTextOffsetY(offset)
  }, [])

  const handleResetTextTransformations = useCallback(() => {
    setTextOffsetX(0)
    setTextOffsetY(0)
    setTextScale(1.0)
    toast.info("Text adjustments reset.")
  }, [])

  const handleClearText = useCallback(() => {
    setCustomText("")
    setTextOffsetX(0)
    setTextOffsetY(0)
    setTextScale(1.0)
    toast.info("Custom text cleared.")
  }, [])

  const handleImageScaleChange = useCallback((scale: number) => {
    setImageScale(scale)
  }, [])

  const handleImageRotationChange = useCallback((rotation: number) => {
    setImageRotation(rotation)
  }, [])

  const handleImageOffsetXChange = useCallback((offset: number) => {
    setImageOffsetX(offset)
  }, [])

  const handleImageOffsetYChange = useCallback((offset: number) => {
    setImageOffsetY(offset)
  }, [])

  const handleResetImageTransformations = useCallback(() => {
    setImageScale(1.0)
    setImageRotation(0)
    setImageOffsetX(0)
    setImageOffsetY(0)
    toast.info("Image adjustments reset.")
  }, [])

  const handleTextScaleChange = useCallback((scale: number) => {
    setTextScale(scale)
  }, [])

  const handleThicknessChange = useCallback((thickness: string) => {
    setSelectedThickness(thickness)
  }, [])

  const handleEngravingTextChange = useCallback((text: string) => {
    setEngravingText(text)
  }, [])

  const handleEngravingImageUpload = useCallback((file: File | null) => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedEngravingImageUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setUploadedEngravingImageUrl(null)
    }
  }, [])

  const handleRemoveEngravingImage = useCallback(() => {
    const fileInput = document.getElementById("engraving-image-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
    setUploadedEngravingImageUrl(null)
    toast.info("Engraving image removed.")
  }, [])

  const handleEngravingImageScaleChange = useCallback((scale: number) => {
    setEngravingImageScale(scale)
  }, [])

  const handleResetEngravingImageTransformations = useCallback(() => {
    setEngravingImageScale(1.0)
    toast.info("Engraving image adjustments reset.")
  }, [])

  const handleEngravingTextScaleChange = useCallback((scale: number) => {
    setEngravingTextScale(scale)
  }, [])

  const handleResetEngravingTextTransformations = useCallback(() => {
    setEngravingTextScale(1.0)
    toast.info("Engraving text adjustments reset.")
  }, [])

  const handleMaterialSelectedAndCloseDialog = useCallback((material: "celluloid" | "metal" | "wood") => {
    setSelectedMaterial(material)
  }, [])

  const currentPrice = useMemo(() => {
    let price = basePickPrice
    if (isBackSideSelected) {
      price += backSideCost
    }
    if (selectedMaterial === "metal" || selectedMaterial === "wood") {
      if (engravingText || uploadedEngravingImageUrl) {
        price += engravingCost
      }
    } else {
      if (customText || uploadedImageUrl) {
        price += 2.0
      }
    }
    return price
  }, [isBackSideSelected, selectedMaterial, customText, uploadedImageUrl, engravingText, uploadedEngravingImageUrl])

  const handleAddToCart = useCallback(async () => {
    if (!selectedMaterial) {
      toast.error("Please select a material before adding to cart.")
      return
    }

    let pickImageBase64: string | undefined = undefined
    if (pickContentRef.current) {
      try {
        const canvas = await html2canvas(pickContentRef.current, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          scale: 2,
        })
        pickImageBase64 = canvas.toDataURL("image/png")
      } catch (error) {
        console.error("Error capturing pick image for cart:", error)
        toast.error("Failed to capture pick image for cart. Please try again.")
        return
      }
    }

    const customizedPick = {
      id: `custom-pick-${Date.now()}`,
      name: `Custom ${selectedMaterial.charAt(0).toUpperCase() + selectedMaterial.slice(1)} Pick`,
      price: currentPrice,
      quantity: 1,
      image: pickImageBase64 || "/placeholder.svg",
      customization: {
        material: selectedMaterial,
        color: selectedMaterial === "celluloid" ? selectedColor : "N/A",
        customImage: selectedMaterial === "celluloid" && uploadedImageUrl ? "Image uploaded" : "No",
        backSide: isBackSideSelected ? "Yes" : "No",
        customText: selectedMaterial === "celluloid" && customText ? customText : "No",
        textColor: selectedMaterial === "celluloid" && customText ? textColor : undefined,
        fontSize: selectedMaterial === "celluloid" && customText ? fontSize : undefined,
        fontFamily: selectedMaterial === "celluloid" && customText ? fontFamily : undefined,
        thickness: selectedThickness,
        imageScale: selectedMaterial === "celluloid" ? imageScale : undefined,
        imageRotation: selectedMaterial === "celluloid" ? imageRotation : undefined,
        imageOffsetX: selectedMaterial === "celluloid" ? imageOffsetX : undefined,
        imageOffsetY: selectedMaterial === "celluloid" ? imageOffsetY : undefined,
        textOffsetX: selectedMaterial === "celluloid" ? textOffsetX : undefined,
        textOffsetY: selectedMaterial === "celluloid" ? textOffsetY : undefined,
        textScale: selectedMaterial === "celluloid" ? textScale : undefined,
        engravingText:
          (selectedMaterial === "metal" || selectedMaterial === "wood") && engravingText ? engravingText : undefined,
        engravingImage:
          (selectedMaterial === "metal" || selectedMaterial === "wood") && uploadedEngravingImageUrl
            ? uploadedEngravingImageUrl
            : undefined,
        engravingImageScale:
          (selectedMaterial === "metal" || selectedMaterial === "wood") && uploadedEngravingImageUrl
            ? engravingImageScale
            : undefined,
        engravingTextScale:
          (selectedMaterial === "metal" || selectedMaterial === "wood") && engravingText
            ? engravingTextScale
            : undefined,
      },
    }
    addItem(customizedPick)
    toast.success("Custom pick added to cart!")
  }, [
    addItem,
    currentPrice,
    selectedMaterial,
    selectedColor,
    uploadedImageUrl,
    isBackSideSelected,
    customText,
    textColor,
    fontSize,
    fontFamily,
    selectedThickness,
    imageScale,
    imageRotation,
    imageOffsetX,
    imageOffsetY,
    textOffsetX,
    textOffsetY,
    textScale,
    engravingText,
    uploadedEngravingImageUrl,
    engravingImageScale,
    engravingTextScale,
  ])

  // Determine the image and display size for the pick preview
  const { selectedPickImage, selectedPickDisplaySize } = useMemo(() => {
    let imagePath = "/placeholder.svg?height=300&width=300"
    let displaySize = "contain"

    if (selectedMaterial === "celluloid") {
      const mapping = pickColorMappings.find((mapping) => mapping.hex === selectedColor)
      if (mapping) {
        imagePath = mapping.imagePath
        displaySize = mapping.displaySize
      }
    } else if (selectedMaterial) {
      const materialProduct = pickProducts.find((p) => p.material === selectedMaterial)
      if (materialProduct) {
        imagePath = materialProduct.image
        displaySize = "contain"
      }
    }

    return { selectedPickImage: imagePath, selectedPickDisplaySize: displaySize }
  }, [selectedMaterial, selectedColor])

  const maskImageUrl = "/pana_alba-removebg-preview.png"

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2.0))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
  }, [])

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1)
  }, [])

  const processImageSrc = "/cum e facut.png"

  // Function to save a design
  const handleSaveDesign = useCallback(() => {
    if (!designName.trim()) {
      toast.error("Please enter a design name.")
      return
    }
    if (!selectedMaterial) {
      toast.error("Please select a material before saving a design.")
      return
    }

    const newDesign: SavedDesign = {
      id: `design-${Date.now()}`,
      name: designName,
      pickColor: selectedColor,
      isBackSideSelected,
      customText,
      textColor,
      fontSize,
      fontFamily,
      imageScale,
      imageRotation,
      imageOffsetX,
      imageOffsetY,
      textOffsetX,
      textOffsetY,
      textScale,
      customImageUrls: uploadedImageUrl ? [uploadedImageUrl] : [],
      engravingText,
      engravingImageUrl: uploadedEngravingImageUrl,
      engravingImageScale,
      engravingTextScale,
      selectedMaterial,
    }

    setSavedDesigns([...savedDesigns, newDesign])
    setDesignName("")
    toast.success("Design saved successfully!")
  }, [
    designName,
    selectedColor,
    isBackSideSelected,
    customText,
    textColor,
    fontSize,
    fontFamily,
    imageScale,
    imageRotation,
    imageOffsetX,
    imageOffsetY,
    textOffsetX,
    textOffsetY,
    textScale,
    uploadedImageUrl,
    engravingText,
    uploadedEngravingImageUrl,
    engravingImageScale,
    engravingTextScale,
    selectedMaterial,
    savedDesigns,
  ])

  // Function to load a design
  const handleLoadDesign = useCallback(() => {
    if (!selectedDesignId) return

    const design = savedDesigns.find((d) => d.id === selectedDesignId)
    if (design) {
      setSelectedColor(design.pickColor)
      setIsBackSideSelected(design.isBackSideSelected)
      setCustomText(design.customText)
      setTextColor(design.textColor || "#000000")
      setFontSize(design.fontSize || "36px")
      setFontFamily(design.fontFamily || "sans-serif")
      setTextOffsetX(design.textOffsetX || 0)
      setTextOffsetY(design.textOffsetY || 0)
      setImageScale(design.imageScale || 1.0)
      setImageRotation(design.imageRotation || 0)
      setImageOffsetX(design.imageOffsetX || 0)
      setImageOffsetY(design.imageOffsetY || 0)
      setTextScale(design.textScale || 1.0)
      setEngravingText(design.engravingText || "")
      setUploadedEngravingImageUrl(design.engravingImageUrl || null)
      setEngravingImageScale(design.engravingImageScale || 1.0)
      setEngravingTextScale(design.engravingTextScale || 1.0)
      setSelectedMaterial(design.selectedMaterial)
      setUploadedImageUrl(design.customImageUrls.length > 0 ? design.customImageUrls[0] : null)
      toast.success("Design loaded successfully!")
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

  // Function to download the design as an image
  const handleDownloadDesign = useCallback(async () => {
    if (pickContentRef.current) {
      try {
        const canvas = await html2canvas(pickContentRef.current, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          scale: 2,
        })
        const link = document.createElement("a")
        link.href = canvas.toDataURL("image/png")
        link.download = "custom-pick-design.png"
        link.click()
        toast.success("Design downloaded successfully!")
      } catch (error) {
        console.error("Error downloading pick design:", error)
        toast.error("Failed to download pick design. Please try again.")
      }
    }
  }, [pickContentRef])

  return (
    <main className="flex flex-col lg:flex-row items-start justify-center gap-8 p-4 md:p-8 min-h-[calc(100vh-64px)]">
      {/* Left Column: Pick Viewer */}
      <Card className="w-full lg:w-2/3 max-w-md lg:max-w-none sticky top-4">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            <div
              ref={pickContentRef}
              className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(0, 0, 0, 0.1) inset",
                transform: `scale(${zoomLevel})`,
                backgroundColor: "transparent",
                maskImage: `url("${maskImageUrl}")`,
                maskSize: selectedMaterial === "celluloid" ? selectedPickDisplaySize : "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url("${maskImageUrl}")`,
                WebkitMaskSize: selectedMaterial === "celluloid" ? selectedPickDisplaySize : "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "white",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${selectedPickImage})`,
                  backgroundSize: selectedMaterial === "celluloid" ? selectedPickDisplaySize : "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              {selectedMaterial === "celluloid" && selectedColor === "#FFFFFF" && (
                <div
                  className="absolute inset-0"
                  style={{
                    border: "3px solid rgba(0, 0, 0, 0.6)",
                  }}
                />
              )}

              {selectedMaterial === "celluloid" && uploadedImageUrl && (
                <Image
                  src={uploadedImageUrl || "/placeholder.svg"}
                  alt="Custom uploaded design"
                  width={300}
                  height={300}
                  className="absolute object-contain"
                  style={{
                    transform: `
          scale(${imageScale})
          rotate(${imageRotation}deg)
          translateX(${imageOffsetX}%)
          translateY(${imageOffsetY}%)
        `,
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}

              {selectedMaterial === "celluloid" && customText && (
                <div
                  className="absolute text-center font-bold whitespace-pre-wrap break-words"
                  style={{
                    color: textColor,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                    zIndex: 10,
                    lineHeight: 1,
                    padding: "5%",
                    boxSizing: "border-box",
                    maxWidth: "80%",
                    transform: `
          scale(${textScale})
          translateX(${textOffsetX}%)
          translateY(${textOffsetY}%)
        `,
                  }}
                >
                  {customText}
                </div>
              )}

              {(selectedMaterial === "metal" || selectedMaterial === "wood") && engravingText && (
                <div
                  className="absolute text-center font-mono text-gray-800 whitespace-pre-wrap break-words"
                  style={{
                    fontSize: `${Number.parseFloat(fontSize) * engravingTextScale}px`,
                    transform: `scale(${engravingTextScale})`,
                    lineHeight: 1,
                    padding: "5%",
                    boxSizing: "border-box",
                    maxWidth: "80%",
                    filter: "brightness(0.2)",
                    opacity: 0.9,
                  }}
                >
                  {engravingText}
                </div>
              )}

              {(selectedMaterial === "metal" || selectedMaterial === "wood") && uploadedEngravingImageUrl && (
                <Image
                  src={uploadedEngravingImageUrl || "/placeholder.svg"}
                  alt="Engraving design"
                  width={300}
                  height={300}
                  className="absolute object-contain"
                  style={{
                    transform: `scale(${engravingImageScale})`,
                    width: "100%",
                    height: "100%",
                    filter: selectedMaterial === "wood" ? "brightness(0.5)" : "brightness(0.8)",
                    mixBlendMode: "multiply",
                    opacity: 0.7,
                    zIndex: 12,
                  }}
                />
              )}
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-transparent"
                onClick={handleZoomOut}
                aria-label="Zoom Out"
              >
                <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-transparent"
                onClick={handleZoomIn}
                aria-label="Zoom In"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-transparent"
                onClick={handleResetZoom}
                aria-label="Reset Zoom"
              >
                <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right Column: Controls and Actions */}
      <div className="w-full lg:w-1/3 space-y-6">
        {/* Service Selector Button (Customization Dialog Trigger) */}
        <ServiceSelector
          initialSelectedMaterial={selectedMaterial}
          onMaterialSelectedAndCloseDialog={handleMaterialSelectedAndCloseDialog}
        />

        {/* Customization Controls (appear only when a material is selected) */}
        {selectedMaterial && (
          <PickCustomizationControls
            selectedMaterial={selectedMaterial}
            onColorChange={handleColorChange}
            onImageUpload={handleImageUpload}
            onRemoveImage={handleRemoveImage}
            onBackSideToggle={handleBackSideToggle}
            onTextChange={handleTextChange}
            onTextColorChange={handleTextColorChange}
            onFontSizeChange={handleFontSizeChange}
            onFontFamilyChange={handleFontFamilyChange}
            onTextOffsetXChange={handleTextOffsetXChange}
            onTextOffsetYChange={handleTextOffsetYChange}
            onResetTextTransformations={handleResetTextTransformations}
            onClearText={handleClearText}
            onThicknessChange={handleThicknessChange}
            onEngravingTextChange={handleEngravingTextChange}
            onEngravingImageUpload={handleEngravingImageUpload}
            onRemoveEngravingImage={handleRemoveEngravingImage}
            onEngravingImageScaleChange={handleEngravingImageScaleChange}
            onResetEngravingImageTransformations={handleResetEngravingImageTransformations}
            onEngravingTextScaleChange={handleEngravingTextScaleChange}
            onResetEngravingTextTransformations={handleResetEngravingTextTransformations}
            currentPrice={currentPrice}
            onAddToCart={handleAddToCart}
            selectedColor={selectedColor}
            customText={customText}
            textColor={textColor}
            fontSize={fontSize}
            fontFamily={fontFamily}
            isBackSideSelected={isBackSideSelected}
            textOffsetX={textOffsetX}
            textOffsetY={textOffsetY}
            uploadedImageUrl={uploadedImageUrl}
            uploadedEngravingImageUrl={uploadedEngravingImageUrl}
            selectedThickness={selectedThickness}
            engravingText={engravingText}
            imageScale={imageScale}
            onImageScaleChange={handleImageScaleChange}
            imageRotation={imageRotation}
            onImageRotationChange={handleImageRotationChange}
            imageOffsetX={imageOffsetX}
            onImageOffsetXChange={handleImageOffsetXChange}
            imageOffsetY={imageOffsetY}
            onImageOffsetYChange={handleImageOffsetYChange}
            onResetImageTransformations={handleResetImageTransformations}
            textScale={textScale}
            onTextScaleChange={handleTextScaleChange}
            engravingTextScale={engravingTextScale}
            engravingImageScale={engravingImageScale}
          />
        )}
      </div>
    </main>
  )
}
