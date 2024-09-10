import { ProductsData, CategoryType } from "./productTypes";

const productCategories: CategoryType[] = [ 'headwear', 'outerwear', 'footwear', 'accessories' ];

const productsData: ProductsData = {
  'headwear' : [
    {
      category: "headwear",
      title: "Mitre",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at turpis vitae quam accumsan sollicitudin sit amet in mauris. In.",
      price: 32.49,
      stock: 11,
      imageTitle: 'mitre_1'
    }
  ],
  'outerwear' : [
    {
      category: "outerwear",
      title: "White Cassock",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at turpis vitae quam accumsan sollicitudin sit amet in mauris. In.",
      price: 81.79,
      stock: 4,
      imageTitle: 'cassock_1'
    }
  ],
  'footwear' : [
    {
      category: 'footwear',
      title: "Slick Red Leather Loafers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at turpis vitae quam accumsan sollicitudin sit amet in mauris. In.",
      price: 92.00,
      stock: 5,
      imageTitle: 'leather_loafers_1'
    }
  ],
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