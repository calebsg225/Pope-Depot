import { ProductsData, CategoryType } from "./productTypes";

const productCategories: CategoryType[] = [ 'headwear', 'outerwear', 'footwear', 'accessories' ];

const productsData: ProductsData = {
  'accessories' : [
    {
      category: "accessories",
      title: "Gold Crucifix",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at turpis vitae quam accumsan sollicitudin sit amet in mauris. In.",
      price: 49.99,
      stock: 42,
      imageTitle: 'gold_crucifix_1'
    }
  ]
}

export { productCategories };
export default productsData;