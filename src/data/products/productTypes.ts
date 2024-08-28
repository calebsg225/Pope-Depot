type ProductData = {
  category: ("accessories" | "headwear" | "footwear" | "outerwear"),
  title: string,
  description: string,
  price: number
}

type ProductsData = {
  [key: string]: ProductData[]
}

export type { ProductsData }