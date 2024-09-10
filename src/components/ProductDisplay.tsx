import { useState } from "react";

import { productCategories } from "../data/products/productData";

//import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  
  const [activeProductTab, setActiveProductTab] = useState('all');



  return (
    <main className="product-display-component">
      <section className="product-display-header">
        {['all', ...productCategories].map((category, i) => 
          <button className={category === activeProductTab ? 'active' : ''} onClick={() => setActiveProductTab(category)} key={i}> {category.charAt(0).toUpperCase()}{category.substring(1)} </button>
        )}
      </section>
      <section className="product-display-main">
        <ul>
          {/* TODO: Create Display System For Active Tabs */}
        </ul>
      </section>
      <section className="product-display-footer"></section>
    </main>
  );
}

export default ProductDisplay;