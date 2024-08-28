// home depot home page
import ProductCard from "../components/ProductCard";
import productsData from "../data/products/productData";

const HomePage = () => {
  return (
    <>
      <p>home page here</p>
      <ul>
        {productsData["accessories"].map((v, i) => <ProductCard productData={v} key={i} />)}
      </ul>
    </>
  );
}

export default HomePage;