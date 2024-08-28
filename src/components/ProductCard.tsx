import { ProductData } from "../data/products/productTypes";

interface ProductCardProps {
  productData: ProductData
}

const ProductCard = ({ productData }: ProductCardProps) => {
  return (
    <li className="product-card">
      <div>
        <img src={productData.imageSource} alt={productData.title} />
      </div>
      <div>
        <h2>{productData.title}</h2>
        <h3>{productData.description}</h3>
        <h4>{productData.price}</h4>
        <button>add to card</button>
      </div>
    </li>
  );
}

export default ProductCard;