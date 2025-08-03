"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { toast } from "sonner"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  customization?: {
    material?: string
    color?: string
    customImage?: string
    backSide?: string
    customText?: string
    textColor?: string
    fontSize?: string
    fontFamily?: string
    thickness?: string
    imageScale?: number
    imageRotation?: number
    imageOffsetX?: number
    imageOffsetY?: number
    textOffsetX?: number
    textOffsetY?: number
    textScale?: number
    engravingText?: string
    engravingImage?: string
    engravingImageScale?: number
    engravingTextScale?: number
    type?: string // For accessories
  }
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateItemQuantity: (id: string, quantity: number) => void
  getTotalPrice: () => number
  clearCart: () => void
}

export const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (i) => i.id === item.id && JSON.stringify(i.customization) === JSON.stringify(item.customization),
          )

          if (existingItemIndex > -1) {
            // If item with same ID and customization exists, update quantity
            const updatedItems = state.items.map((i, index) =>
              index === existingItemIndex ? { ...i, quantity: i.quantity + item.quantity } : i,
            )
            return { items: updatedItems }
          } else {
            // Otherwise, add new item
            return { items: [...state.items, item] }
          }
        })
        toast.success(`${item.name} added to cart!`)
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
        toast.info("Item removed from cart.")
      },
      updateItemQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items
            .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
            .filter((item) => item.quantity > 0), // Remove if quantity becomes 0
        }))
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      clearCart: () => {
        set({ items: [] })
        toast.info("Cart cleared.")
      },
    }),
    {
      name: "harpick-cart-storage", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
