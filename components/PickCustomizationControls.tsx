"use client"

import type React from "react"
import { useCallback } from "react"
import {
  Paintbrush,
  ImageIcon,
  Type,
  XCircle,
  Ruler,
  PenTool,
  MoveHorizontal,
  MoveVertical,
  RotateCw,
  RefreshCcw,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { colorPalette, textColors, fontSizes, fontFamilies, pickThicknesses } from "@/lib/data"

interface PickCustomizationControlsProps {
  selectedMaterial: "celluloid" | "metal" | "wood"
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

export default function PickCustomizationControls({
  selectedMaterial,
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
}: PickCustomizationControlsProps) {
  const isCelluloid = selectedMaterial === "celluloid"
  const isEngravable = selectedMaterial === "metal" || selectedMaterial === "wood"

  const handleImageFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        onImageUpload(e.target.files)
      } else {
        onImageUpload(null)
      }
    },
    [onImageUpload],
  )

  const handleEngravingFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onEngravingImageUpload(e.target.files[0])
      } else {
        onEngravingImageUpload(null)
      }
    },
    [onEngravingImageUpload],
  )

  return (
    <>
      {/* Pick Thickness (only for Celluloid) */}
      {isCelluloid && (
        <div className="space-y-2">
          <Label htmlFor="pick-thickness" className="flex items-center gap-2">
            <Ruler className="w-4 h-4" />
            Pick Thickness
          </Label>
          <Select value={selectedThickness} onValueChange={onThicknessChange}>
            <SelectTrigger id="pick-thickness" className="py-3 px-4">
              <SelectValue placeholder="Select thickness" />
            </SelectTrigger>
            <SelectContent>
              {pickThicknesses.map((thickness) => (
                <SelectItem key={thickness.value} value={thickness.value}>
                  {thickness.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Celluloid Customization Options */}
      {isCelluloid && (
        <Accordion type="single" collapsible defaultValue="celluloid-design" className="w-full">
          <AccordionItem value="celluloid-design">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <Paintbrush className="w-4 h-4" /> Celluloid Pick Design
            </AccordionTrigger>
            <AccordionContent className="space-y-6 p-4 border rounded-lg bg-muted/20">
              {/* Color Customization */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">Pick Color</Label>
                <div className="flex flex-wrap gap-2">
                  {colorPalette.map((color) => (
                    <Button
                      key={color.hex}
                      variant="outline"
                      size="icon"
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color.hex ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => onColorChange(color.hex)}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="image-upload" className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Upload Custom Image
                </Label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  multiple
                  className="py-3 px-4"
                />
                {uploadedImageUrl && (
                  <Button variant="outline" onClick={onRemoveImage} className="py-2 px-4 bg-transparent">
                    Remove Image
                  </Button>
                )}

                {uploadedImageUrl && (
                  <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> Image Adjustments
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="image-scale" className="flex items-center gap-2">
                        <Ruler className="w-4 h-4" /> Scale: {Math.round(imageScale * 100)}%
                      </Label>
                      <Input
                        id="image-scale"
                        type="range"
                        min="0.1"
                        max="2.0"
                        step="0.05"
                        value={imageScale}
                        onChange={(e) => onImageScaleChange(Number.parseFloat(e.target.value))}
                        className="py-3 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-rotation" className="flex items-center gap-2">
                        <RotateCw className="w-4 h-4" /> Rotation: {Math.round(imageRotation)}°
                      </Label>
                      <Input
                        id="image-rotation"
                        type="range"
                        min="0"
                        max="360"
                        step="1"
                        value={imageRotation}
                        onChange={(e) => onImageRotationChange(Number.parseFloat(e.target.value))}
                        className="py-3 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-offset-x" className="flex items-center gap-2">
                        <MoveHorizontal className="w-4 h-4" /> Horizontal Position: {Math.round(imageOffsetX)}%
                      </Label>
                      <Input
                        id="image-offset-x"
                        type="range"
                        min="-50"
                        max="50"
                        step="1"
                        value={imageOffsetX}
                        onChange={(e) => onImageOffsetXChange(Number.parseFloat(e.target.value))}
                        className="py-3 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-offset-y" className="flex items-center gap-2">
                        <MoveVertical className="w-4 h-4" /> Vertical Position: {Math.round(imageOffsetY)}%
                      </Label>
                      <Input
                        id="image-offset-y"
                        type="range"
                        min="-50"
                        max="50"
                        step="1"
                        value={imageOffsetY}
                        onChange={(e) => onImageOffsetYChange(Number.parseFloat(e.target.value))}
                        className="py-3 px-4"
                      />
                    </div>
                    <Button onClick={onResetImageTransformations} className="w-full mt-4 py-2 px-4">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Reset Image Adjustments
                    </Button>
                  </div>
                )}
              </div>

              {/* Custom Text */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Custom Text
                </Label>
                <div className="relative">
                  <Textarea
                    id="custom-text"
                    placeholder="Enter your text here"
                    value={customText}
                    onChange={(e) => onTextChange(e.target.value)}
                    className="pr-10 py-3 px-4 min-h-[80px]"
                  />
                  {customText && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onClearText}
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                      aria-label="Clear text"
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <Select value={textColor} onValueChange={onTextColorChange}>
                      <SelectTrigger id="text-color" className="py-3 px-4">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {textColors.map((color) => (
                          <SelectItem key={color.hex} value={color.hex}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }} />
                              {color.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="font-size">Font Size</Label>
                    <Select value={fontSize} onValueChange={onFontSizeChange}>
                      <SelectTrigger id="font-size" className="py-3 px-4">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="font-family">Font Family</Label>
                  <Select value={fontFamily} onValueChange={onFontFamilyChange}>
                    <SelectTrigger id="font-family" className="py-3 px-4">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontFamilies.map((font) => (
                        <SelectItem key={font.value} value={font.value}>
                          {font.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Front/Back Option */}
              <div className="flex items-center space-x-2">
                <Checkbox id="back-side" checked={isBackSideSelected} onCheckedChange={onBackSideToggle} />
                <Label
                  htmlFor="back-side"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Add Back Side Design (+€3.00)
                </Label>
              </div>

              {customText && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="text-position">
                    <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
                      <Type className="w-4 h-4" /> Text Position & Scale
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 p-4 border rounded-lg bg-muted/20">
                      <div className="space-y-2">
                        <Label htmlFor="text-scale" className="flex items-center gap-2">
                          <Ruler className="w-4 h-4" /> Text Scale: {Math.round(textScale * 100)}%
                        </Label>
                        <Input
                          id="text-scale"
                          type="range"
                          min="0.1"
                          max="2.0"
                          step="0.05"
                          value={textScale}
                          onChange={(e) => onTextScaleChange(Number.parseFloat(e.target.value))}
                          className="py-3 px-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="text-offset-x" className="flex items-center gap-2">
                          <MoveHorizontal className="w-4 h-4" /> Horizontal Position: {Math.round(textOffsetX)}%
                        </Label>
                        <Input
                          id="text-offset-x"
                          type="range"
                          min="-50"
                          max="50"
                          step="1"
                          value={textOffsetX}
                          onChange={(e) => onTextOffsetXChange(Number.parseFloat(e.target.value))}
                          className="py-3 px-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="text-offset-y" className="flex items-center gap-2">
                          <MoveVertical className="w-4 h-4" /> Vertical Position: {Math.round(textOffsetY)}%
                        </Label>
                        <Input
                          id="text-offset-y"
                          type="range"
                          min="-50"
                          max="50"
                          step="1"
                          value={textOffsetY}
                          onChange={(e) => onTextOffsetYChange(Number.parseFloat(e.target.value))}
                          className="py-3 px-4"
                        />
                      </div>
                      <Button onClick={onResetTextTransformations} className="w-full mt-4 py-2 px-4">
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        Reset Text Position
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {/* Indication Writing */}
              <p className="text-sm text-muted-foreground">
                Your image will be resized to fit the pick. For best results, use a high-resolution image with a clear
                subject.
              </p>
              <p className="text-sm text-red-500">
                For optimal results, we advise removing the background from your image before uploading. You can use{" "}
                <a href="https://www.remove.bg/upload" target="_blank" rel="noopener noreferrer" className="underline">
                  remove.bg
                </a>{" "}
                for this purpose.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {/* Engraving Customization Options (Wood & Metal Picks) */}
      {isEngravable && (
        <Accordion type="single" collapsible defaultValue="engraving-design" className="w-full">
          <AccordionItem value="engraving-design">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <PenTool className="w-4 h-4" /> Engraving Design
            </AccordionTrigger>
            <AccordionContent className="space-y-4 p-4 border rounded-lg bg-muted/20">
              <Textarea
                id="engraving-text"
                placeholder="Enter engraving text here"
                value={engravingText}
                onChange={(e) => onEngravingTextChange(e.target.value)}
                className="py-3 px-4 min-h-[80px]"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Engraving text will be rendered in a simple, clear font.
              </p>

              {engravingText && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Type className="w-4 h-4" /> Engraving Text Adjustments
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="engraving-text-scale" className="flex items-center gap-2">
                      <Ruler className="w-4 h-4" /> Scale: {Math.round(engravingTextScale * 100)}%
                    </Label>
                    <Input
                      id="engraving-text-scale"
                      type="range"
                      min="0.1"
                      max="2.0"
                      step="0.05"
                      value={engravingTextScale}
                      onChange={(e) => onEngravingTextScaleChange(Number.parseFloat(e.target.value))}
                      className="py-3 px-4"
                    />
                  </div>
                  <Button onClick={onResetEngravingTextTransformations} className="w-full mt-4 py-2 px-4">
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Reset Engraving Text Adjustments
                  </Button>
                </div>
              )}

              {/* Engraving Image Upload */}
              <div className="space-y-2 mt-4">
                <Label htmlFor="engraving-image-upload" className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Upload Engraving Image
                </Label>
                <Input
                  id="engraving-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleEngravingFileChange}
                  className="py-3 px-4"
                />
                {uploadedEngravingImageUrl && (
                  <Button variant="outline" onClick={onRemoveEngravingImage} className="py-2 px-4 bg-transparent">
                    Remove Engraving Image
                  </Button>
                )}
                <p className="text-sm text-muted-foreground">
                  We recommend you upload only outline images for best engraving results.
                </p>
              </div>

              {uploadedEngravingImageUrl && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Engraving Image Adjustments
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="engraving-image-scale" className="flex items-center gap-2">
                      <Ruler className="w-4 h-4" /> Scale: {Math.round(engravingImageScale * 100)}%
                    </Label>
                    <Input
                      id="engraving-image-scale"
                      type="range"
                      min="0.1"
                      max="2.0"
                      step="0.05"
                      value={engravingImageScale}
                      onChange={(e) => onEngravingImageScaleChange(Number.parseFloat(e.target.value))}
                      className="py-3 px-4"
                    />
                  </div>
                  <Button onClick={onResetEngravingImageTransformations} className="w-full mt-4 py-2 px-4">
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Reset Engraving Image Adjustments
                  </Button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {/* Add to Cart */}
      <Button onClick={onAddToCart} size="lg" className="w-full text-lg py-3 px-4">
        Add to Cart - €{currentPrice.toFixed(2)}
      </Button>
    </>
  )
}
