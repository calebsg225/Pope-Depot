import { ProductData } from "../data/products/productTypes";

interface ProductCardProps {
  productData: ProductData
}

const ProductCard = ({ productData }: ProductCardProps) => {
  return (
    <li className="product-card">
      <div className="product-image-container">
        <img src={productData.imageSource} alt={productData.title} />
      </div>
      <div className="product-info-container">
          <h2>{productData.title}</h2>
          <h4>{productData.description}</h4>
        <div>
          <div>
            <h3>${productData.price.toFixed(2)}</h3>
            <h5>{productData.stock} in stock</h5>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;