type CategoryType = "accessories" | "headwear" | "footwear" | "outerwear";

type ProductData = {
  category: CategoryType,
  title: string,
  description: string,
  price: number,
  stock: number,
  imageTitle: string
}

type ProductsData = {
  [key: string]: ProductData[]
}

export type { ProductsData, ProductData, CategoryType }