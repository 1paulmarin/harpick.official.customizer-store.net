import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currencyCode = "EUR", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount)
}

export function calculateShippingCost(cartTotal: number, country: string): number {
  const europeanCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "UK", // Assuming UK is still considered Europe for shipping
  ]

  if (country === "Romania") {
    return 0 // Free shipping in Romania
  } else if (europeanCountries.includes(country)) {
    return cartTotal >= 30 ? 0 : 5 // €5 to Europe, free over €30
  } else if (country) {
    // Any other country selected (Worldwide)
    return cartTotal >= 35 ? 0 : 9 // €9 worldwide, free over €35
  }
  return 0 // Default to 0 if no country selected or invalid
}
