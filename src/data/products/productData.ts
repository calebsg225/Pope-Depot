import { ProductsData } from "./productTypes";

const mainPath = 'src/assets/productImages/';

const productsData: ProductsData = {
  "accessories" : [
    {
      category: "accessories",
      title: "Gold Crucifix",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at turpis vitae quam accumsan sollicitudin sit amet in mauris. In.",
      price: 49.99,
      stock: 42,
      imageSource: `${mainPath}gold_crucifix_1.jpg`
    }
  ]
}

export default productsData;