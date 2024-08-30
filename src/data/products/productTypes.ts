type ProductData = {
  category: ("accessories" | "headwear" | "footwear" | "outerwear"),
  title: string,
  description: string,
  price: number,
  stock: number,
  imageTitle: string
}

type ProductsData = {
  [key: string]: ProductData[]
}

export type { ProductsData, ProductData }