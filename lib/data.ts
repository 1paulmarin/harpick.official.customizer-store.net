// lib/data.ts

// Define interfaces for better type safety and clarity
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: "guitar-picks" | "accessories"
  type?: "pack" | "display-case" | "single" | "tool" // Added 'tool'
  hasFrameOption?: boolean // Specific to accessories
  material?: string // Material of the pick
  color?: string // Color of the pick
  thickness?: string // Thickness of the pick
}

export interface Testimonial {
  id: number
  name: string
  rating: number
  quote: string
}

export interface PickColorMapping {
  name?: string // Name of the color
  hex: string
  imagePath: string
  displaySize: string
}

// --- Product Data ---
export const guitarPicks: Product[] = [
  {
    id: "mixed-pack",
    name: "Plain Metal Picks (10 picks) Standard Celluloid Guitar Picks",
    price: 12.99, // Reverted price
    image: "/metall_dd-removebg-preview.png",
    description: "Pack of 10 plain metal guitar picks for a unique sound and feel.",
    category: "guitar-picks",
    type: "pack",
  },
  {
    id: "harpick-10-pack",
    name: "Harpick Guitar Picks (10 picks) Standard Celluloid Guitar Picks",
    price: 4.99, // Reverted price
    image: "/10 peneeee.png",
    description: "Pack of 10 standard celluloid guitar picks with Harpick logo",
    category: "guitar-picks",
    type: "pack",
  },
  {
    id: "mystery-pack",
    name: "Mystery Pack (15 picks) Standard Celluloid Guitar Picks",
    price: 3.99, // Reverted price
    image: "/mystery.png",
    description: "A surprise selection of 15 unique guitar picks",
    category: "guitar-picks",
    type: "pack",
  },
  {
    id: "wooden-picks-5-pack",
    name: "Wooden Guitar Picks (5-pack) Standard Celluloid Guitar Picks",
    price: 8.99, // Reverted price
    image: "/pene_de_lemn-removebg-preview.png", // Updated image
    description: "Natural feel, warm tone wooden guitar picks.",
    category: "guitar-picks",
    type: "pack",
  },
  {
    id: "wooden-picks-10-pack",
    name: "Wooden Guitar Picks (10-pack) Standard Celluloid Guitar Picks",
    price: 14.99, // Reverted price
    image: "/pene_de_lemn-removebg-preview.png", // Updated image
    description: "Value pack of wooden guitar picks, good margin.",
    category: "guitar-picks",
    type: "pack",
  },
]

export const accessories: Product[] = [
  {
    id: "a4-white",
    name: "Plain Transparent Guitar Pick Display",
    price: 18.0, // Reverted price
    image: "/transparent_simplu-removebg-preview.png",
    description: "Premium white A4 display case for your guitar pick collection",
    category: "accessories",
    type: "display-case",
    hasFrameOption: true,
  },
  {
    id: "a4-transparent",
    name: "Transparent A4 Guitar Pick Display",
    price: 23.81, // Reverted price
    image: "/trabsparent_displ-removebg-preview.png",
    description: "Crystal clear A4 display case for your guitar pick collection",
    category: "accessories",
    type: "display-case",
    hasFrameOption: false, // Assuming transparent doesn't have a frame option
  },
  {
    id: "single-display",
    name: "Single Pick Display Case",
    price: 3.57, // Reverted price
    image: "/cerc pana.webp", // Updated image property
    description: "Individual display case for showcasing a single guitar pick",
    category: "accessories",
    type: "single",
    hasFrameOption: false,
  },
  {
    id: "pick-puncher",
    name: "Standard Pick Puncher",
    price: 19.99, // Reverted price
    image: "/pickpuncher.jpeg", // Updated image
    description: "Punch your own picks from cards or plastic sheets.", // Reverted description
    category: "accessories",
    type: "tool",
  },
]

export const pickProducts = [
  {
    id: "pick-1",
    name: "Classic Celluloid Pick (White)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/pana_alba-removebg-preview.png",
    material: "celluloid",
    color: "White",
    thickness: "0.71mm",
  },
  {
    id: "pick-2",
    name: "Classic Celluloid Pick (Black)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/pana_neagra-removebg-preview.png",
    material: "celluloid",
    color: "Black",
    thickness: "0.71mm",
  },
  {
    id: "pick-3",
    name: "Classic Celluloid Pick (Red)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/rosuuu-removebg-preview.png",
    material: "celluloid",
    color: "Red",
    thickness: "0.71mm",
  },
  {
    id: "pick-4",
    name: "Classic Celluloid Pick (Blue)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/bluey-removebg-preview.png",
    material: "celluloid",
    color: "Blue",
    thickness: "0.71mm",
  },
  {
    id: "pick-5",
    name: "Classic Celluloid Pick (Green)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/grun-removebg-preview.png",
    material: "celluloid",
    color: "Green",
    thickness: "0.71mm",
  },
  {
    id: "pick-6",
    name: "Classic Celluloid Pick (Yellow)",
    description: "Standard celluloid pick, perfect for all styles.",
    price: 0.5, // Changed price
    image: "/yellow-removebg-preview.png",
    material: "celluloid",
    color: "Yellow",
    thickness: "0.71mm",
  },
  {
    id: "pick-7",
    name: "Mystery Pick Pack (10 Picks)",
    description: "A surprise assortment of 10 celluloid picks.",
    price: 7.99,
    image: "/mistery pack.png",
    material: "celluloid",
    color: "Assorted",
    thickness: "Assorted",
  },
  {
    id: "pick-8",
    name: "Metal Pick (Silver)",
    description: "Durable metal pick for a bright, clear tone.",
    price: 2.5, // Changed price
    image: "/pana_de_metal-removebg-preview.png", // Updated image path
    material: "metal",
    color: "Silver",
    thickness: "0.8mm",
  },
  {
    id: "pick-9",
    name: "Wood Pick (Natural)",
    description: "Warm tone and natural feel, unique grain.",
    price: 2.5, // Changed price
    image: "/pana_lemn-removebg-preview.png", // Updated image path
    material: "wood",
    color: "Natural",
    thickness: "1.0mm",
  },
]

export const accessoryProducts = [
  {
    id: "acc-1",
    name: "Pick Puncher",
    description: "Create your own picks from old cards and plastic.",
    price: 19.99,
    image: "/pickpuncher.jpeg",
  },
  {
    id: "acc-2",
    name: "Circular Pick Case",
    description: "Stylish and compact case for your picks.",
    price: 9.99,
    image: "/cyrcle display.png",
  },
  {
    id: "acc-3",
    name: "Transparent Pick Case",
    description: "See your picks at a glance with this clear case.",
    price: 7.99,
    image: "/case transparent.png",
  },
  {
    id: "acc-4",
    name: "Harpick Pick Display",
    description: "Showcase your favorite picks with this elegant display.",
    price: 14.99,
    image: "/negru_dysplay-removebg-preview.png",
  },
]

// Combine all products for easier access if needed
export const allProducts: Product[] = [...guitarPicks, ...accessories, ...pickProducts, ...accessoryProducts]

// --- Testimonial Data ---
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex R.",
    rating: 5,
    quote:
      "These picks are incredible! The custom design process was so easy, and the quality is top-notch. My band loves them!",
  },
  {
    id: 2,
    name: "Maria S.",
    rating: 5,
    quote:
      "The display cases are perfect for my collection. Elegant and well-made. Harpick truly understands musicians' needs.",
  },
  {
    id: 3,
    name: "Chris L.",
    rating: 4,
    quote:
      "Fast shipping and great customer service. The picks feel great and have improved my playing. Highly recommend!",
  },
  {
    id: 4,
    name: "Sophie K.",
    rating: 5,
    quote:
      "I ordered a mystery pack and was pleasantly surprised! Such unique designs and excellent quality. Will definitely order again.",
  },
]

// --- Customization Data ---
export const pickColorMappings: PickColorMapping[] = [
  { name: "White", hex: "#FFFFFF", imagePath: "/pana_alba-removebg-preview.png", displaySize: "contain" },
  { name: "Black", hex: "#000000", imagePath: "/pana_neagra-removebg-preview.png", displaySize: "contain" },
  { name: "Red", hex: "#FF0000", imagePath: "/rosuuu-removebg-preview.png", displaySize: "150%" },
  { name: "Blue", hex: "#0000FF", imagePath: "/bluey-removebg-preview.png", displaySize: "contain" },
  { name: "Green", hex: "#00FF00", imagePath: "/grun-removebg-preview.png", displaySize: "200%" },
  { name: "Yellow", hex: "#FFFF00", imagePath: "/yellow-removebg-preview.png", displaySize: "contain" },
  { name: "Light Blue", hex: "#ADD8E6", imagePath: "/baby_blue-removebg-preview.png", displaySize: "contain" },
  { name: "Pink", hex: "#FFC0CB", imagePath: "/pink-removebg-preview.png", displaySize: "contain" },
]

export const colorPalette = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Green", hex: "#00FF00" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Light Blue", hex: "#ADD8E6" },
]

export const textColors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Green", hex: "#00FF00" },
  { name: "Yellow", hex: "#FFFF00" },
]

export const fontSizes = [
  { name: "Small", value: "24px" },
  { name: "Medium", value: "36px" },
  { name: "Large", value: "48px" },
  { name: "X-Large", value: "60px" },
]

export const fontFamilies = [
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Monospace", value: "monospace" },
  { name: "Cursive", value: "cursive" },
  { name: "Fantasy", value: "fantasy" },
]

export const pickThicknesses = [
  { name: "Thin", value: "0.46mm" },
  { name: "Medium", value: "0.71mm" },
  { name: "Heavy", value: "0.96mm" },
  { name: "Extra Heavy", value: "1.2mm" },
]

export const framePrice = 11.9 // Additional cost for frame in euros
export const basePickPrice = 2.99 // Base price for a customized pick
export const backSideCost = 3.0 // Cost for adding a back side design
export const engravingCost = 5.0 // Cost for engraving (applies to metal/wood picks)
